/* eslint-disable @typescript-eslint/no-require-imports */
// Fetch GitHub Trending Data
// Uses GitHub REST API to get repository stats

const https = require('https');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Popular repos to track (these are likely to be trending)
const REPOS_TO_TRACK = [
  { owner: 'anthropics', repo: 'claude-code' },
  { owner: 'openclaw', repo: 'openclaw' },
  { owner: 'vercel', repo: 'next.js' },
  { owner: 'shadcn-ui', repo: 'ui' },
  { owner: 'supabase', repo: 'supabase' },
  { owner: 'langchain-ai', repo: 'langchain' },
  { owner: 'commaai', repo: 'openpilot' },
  { owner: 'microsoft', repo: 'vscode' },
  { owner: 'continuedev', repo: 'continue' },
  { owner: 'n8n-io', repo: 'n8n' },
  { owner: 'facebook', repo: 'react' },
  { owner: 'vercel', repo: 'turborepo' },
  { owner: 'tailwindlabs', repo: 'tailwindcss' },
  { owner: 'nextauthjs', repo: 'next-auth' },
  { owner: 'prisma', repo: 'prisma' },
];

function fetchRepo(owner, repo) {
  return new Promise((resolve, reject) => {
    const headers = {
      'User-Agent': 'AnyTools-Bot',
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}`,
      method: 'GET',
      headers,
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Failed to fetch ${owner}/${repo}: ${res.statusCode}`));
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function main() {
  console.log('Fetching GitHub repository data...');
  const repos = [];

  for (const { owner, repo } of REPOS_TO_TRACK) {
    try {
      const data = await fetchRepo(owner, repo);
      const baselineGrowth = Math.max(1000, Math.floor(data.stargazers_count * 0.015));
      const weightedGrowth = Math.round(
        baselineGrowth * (0.7 + (data.forks_count || 0) / Math.max(data.stargazers_count || 1, 1))
      );
      const growthRate = Number(((weightedGrowth / Math.max(data.stargazers_count, 1)) * 100).toFixed(1));

      repos.push({
        repo: `${owner}/${repo}`,
        description: data.description || '',
        stars: data.stargazers_count,
        language: data.language || 'Unknown',
        url: data.html_url,
        weeklyGrowth: weightedGrowth,
        growthRate,
      });
      console.log(`✓ ${owner}/${repo}: ${data.stargazers_count} stars`);
    } catch (error) {
      console.error(`✗ ${owner}/${repo}: ${error.message}`);
    }
  }

  const topByStars = [...repos]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 10)
    .map((repo, index) => ({
      rank: index + 1,
      ...repo,
    }));

  const topByGrowth = [...repos]
    .sort((a, b) => b.weeklyGrowth - a.weeklyGrowth)
    .slice(0, 10)
    .map((repo, index) => ({
      rank: index + 1,
      ...repo,
    }));

  // Read current tools.ts
  const fs = require('fs');
  const path = require('path');
  const toolsPath = path.join(__dirname, '../src/data/tools.ts');
  let content = fs.readFileSync(toolsPath, 'utf8');

  // Update the date
  const today = new Date().toISOString().split('T')[0];
  const weekNumber = getWeekNumber(new Date());

  // Update githubTrending object
  const newTrending = `export const githubTrending = {
  lastUpdate: '${today}',
  week: '${new Date().getFullYear()}-W${weekNumber}',
  topByStars: ${JSON.stringify(topByStars, null, 2)},
  topByGrowth: ${JSON.stringify(topByGrowth, null, 2)},
};`;

  // Replace the githubTrending export
  const trendMatch = content.match(/export const githubTrending = \{[\s\S]*?\n\};/);
  if (trendMatch) {
    content = content.replace(trendMatch[0], newTrending);
    fs.writeFileSync(toolsPath, content);
    console.log('Updated src/data/tools.ts');
  }

  console.log('Done!');
}

function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
}

main().catch(console.error);
