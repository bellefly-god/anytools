'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, FolderKanban, Star, TrendingUp } from 'lucide-react';
import { githubTrending } from '@/data/tools';
import { githubTopicCollections } from '@/data/github-topics';
import { useLanguage } from '@/contexts/LanguageContext';

interface GitHubTrendingProps {
  limit?: number;
  showAll?: boolean;
}

export function GitHubTrending({ limit = 5, showAll = false }: GitHubTrendingProps) {
  const { t } = useLanguage();
  const items = showAll ? githubTrending.topByStars : githubTrending.topByStars.slice(0, limit);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-2xl">🏆</span>
          {t.githubTrending}
        </h3>
        <span className="text-xs text-gray-500">
          {t.updated} {githubTrending.lastUpdate}
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.a
            key={item.repo}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span className={`w-7 text-lg font-bold ${index < 3 ? 'text-yellow-500' : 'text-gray-400'}`}>
              {item.rank}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="truncate text-sm font-medium transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.repo}
                </span>
                <ExternalLink className="h-3 w-3 flex-shrink-0 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-yellow-500" />
                  {(item.stars / 1000).toFixed(0)}K
                </span>
                <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs dark:bg-gray-800">
                  {item.language}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export function GitHubGrowth({ limit = 5, showAll = false }: GitHubTrendingProps) {
  const { t } = useLanguage();
  const items = showAll ? githubTrending.topByGrowth : githubTrending.topByGrowth.slice(0, limit);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-2xl">🚀</span>
          {t.githubGrowth}
        </h3>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.a
            key={item.repo}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span className={`w-7 text-lg font-bold ${index < 3 ? 'text-green-500' : 'text-gray-400'}`}>
              {item.rank}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="truncate text-sm font-medium transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.repo}
                </span>
                <ExternalLink className="h-3 w-3 flex-shrink-0 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1 font-semibold text-green-600 dark:text-green-400">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +{(item.weeklyGrowth / 1000).toFixed(1)}K
                </span>
                <span className="text-green-600 dark:text-green-400">
                  (+{item.growthRate}%)
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export function GitHubTopicPreview({ limit = 3, showAll = false }: GitHubTrendingProps) {
  const { lang } = useLanguage();

  return (
    <div className="space-y-4">
      {githubTopicCollections.map((topic) => {
        const repos = showAll ? topic.repos : topic.repos.slice(0, limit);
        return (
          <div
            key={topic.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {lang === 'zh' ? topic.title : topic.titleEn}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {lang === 'zh' ? topic.summary : topic.summaryEn}
                </p>
              </div>
              <Link
                href={`/github/${topic.id}`}
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {lang === 'zh' ? '查看专题' : 'View topic'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {repos.map((repo) => (
                <a
                  key={repo.repo}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-200 p-3 transition hover:border-blue-300 hover:bg-blue-50/40 dark:border-gray-800 dark:hover:border-blue-900 dark:hover:bg-blue-950/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                        {repo.repo}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        {lang === 'zh' ? repo.category : (repo.categoryEn || repo.category)}
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {lang === 'zh' ? repo.description : (repo.descriptionEn || repo.description)}
                  </p>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function GitHubTrendingCompact() {
  const { t, lang } = useLanguage();
  const starsItems = githubTrending.topByStars.slice(0, 5);
  const growthItems = githubTrending.topByGrowth.slice(0, 5);
  const topics = githubTopicCollections;

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.05fr_1.05fr_1.2fr]">
      <div className="rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-5 dark:border-yellow-900 dark:from-yellow-950/20 dark:to-orange-950/20">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-semibold">
            <span className="text-xl">🏆</span>
            {t.starsRank}
          </h3>
          <Link href="/github" className="text-xs text-blue-600 hover:text-blue-700">
            {t.viewAll} →
          </Link>
        </div>
        <div className="space-y-1.5">
          {starsItems.map((item, index) => (
            <a
              key={item.repo}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded p-1.5 transition-colors hover:bg-white/50 dark:hover:bg-black/20"
            >
              <span className={`w-5 text-sm font-bold ${index < 3 ? 'text-yellow-600' : 'text-gray-400'}`}>
                {item.rank}
              </span>
              <span className="flex-1 truncate text-xs">{item.repo.split('/')[1]}</span>
              <span className="flex items-center gap-0.5 text-xs text-gray-500">
                <Star className="h-3 w-3 text-yellow-500" />
                {(item.stars / 1000).toFixed(0)}K
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 dark:border-green-900 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-semibold">
            <span className="text-xl">🚀</span>
            {t.growthRank}
          </h3>
          <Link href="/github" className="text-xs text-blue-600 hover:text-blue-700">
            {t.viewAll} →
          </Link>
        </div>
        <div className="space-y-1.5">
          {growthItems.map((item, index) => (
            <a
              key={item.repo}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded p-1.5 transition-colors hover:bg-white/50 dark:hover:bg-black/20"
            >
              <span className={`w-5 text-sm font-bold ${index < 3 ? 'text-green-600' : 'text-gray-400'}`}>
                {item.rank}
              </span>
              <span className="flex-1 truncate text-xs">{item.repo.split('/')[1]}</span>
              <span className="text-xs font-medium text-green-600">
                +{item.growthRate}%
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 dark:border-blue-900 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-semibold">
            <FolderKanban className="h-5 w-5" />
            {lang === 'zh' ? '开发者 AI 热点' : 'Developer AI Topics'}
          </h3>
          <Link href="/github" className="text-xs text-blue-600 hover:text-blue-700">
            {t.viewAll} →
          </Link>
        </div>
        <div className="space-y-2">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/github/${topic.id}`}
              className="block rounded-xl border border-white/70 bg-white/70 p-3 transition hover:border-blue-300 hover:bg-white dark:border-white/10 dark:bg-black/10 dark:hover:border-blue-900"
            >
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {lang === 'zh' ? topic.title : topic.titleEn}
              </div>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                {lang === 'zh' ? topic.summary : topic.summaryEn}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
