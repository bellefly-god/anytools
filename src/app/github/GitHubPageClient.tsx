'use client';

import Link from 'next/link';
import { ArrowLeft, FolderKanban } from 'lucide-react';
import { Header } from '@/components/Header';
import { GitHubGrowth, GitHubTopicPreview, GitHubTrending } from '@/components/GitHubTrending';
import { githubTrending } from '@/data/tools';
import { useLanguage } from '@/contexts/LanguageContext';

export function GitHubPageClient() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backHome}
          </Link>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                {lang === 'zh'
                  ? 'GitHub 热门仓库、MCP、Skills 与 AI Rules'
                  : 'GitHub trending repos, MCP, skills, and AI rules'}
              </h1>
              <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-400">
                {lang === 'zh'
                  ? '不只看 Stars 和增长榜，也把开发者现在最关心的 MCP Servers、Agent Skills、Prompt Engineering 和规则型资源一起整理出来。'
                  : 'Beyond stars and growth, this page curates the MCP servers, agent skills, prompt engineering, and rules-oriented repositories developers are actively looking for.'}
              </p>
              <div className="mt-4 text-sm text-gray-500">
                {t.updated} {githubTrending.lastUpdate} · {t.week} {githubTrending.week.split('-W')[1]}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 dark:border-blue-900 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
              <div className="mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <FolderKanban className="h-5 w-5" />
                <span className="font-semibold">
                  {lang === 'zh' ? '开发者 AI 热门专题' : 'Developer AI topics'}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {lang === 'zh'
                  ? '如果你在做 AI agent、开发者工具导航、自动化工作流或 GitHub 热点追踪，这三个专题页会比单纯的排行榜更适合拿搜索流量。'
                  : 'If you are building AI agents, devtool directories, automation workflows, or GitHub trend pages, these topic pages are often stronger SEO assets than raw rankings alone.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { href: '/github/mcp', label: 'MCP Servers' },
                  { href: '/github/skills', label: 'Agent Skills' },
                  { href: '/github/rules', label: 'AI Rules' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300 dark:hover:bg-blue-950/30"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 xl:grid-cols-2">
          <GitHubTrending showAll />
          <GitHubGrowth showAll />
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {lang === 'zh' ? '热门专题导航' : 'Topic navigation'}
            </h2>
            <span className="text-sm text-gray-500">
              {lang === 'zh' ? 'MCP / Skills / Rules' : 'MCP / Skills / Rules'}
            </span>
          </div>
          <GitHubTopicPreview showAll />
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12 px-4 dark:border-gray-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
