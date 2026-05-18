'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { ArrowRight, Clock, FolderKanban, Heart, Sparkles, Trash2, TrendingUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { CategoryGrid, CategoryNav } from '@/components/CategoryNav';
import { ToolGrid } from '@/components/ToolCard';
import { GitHubTrendingCompact } from '@/components/GitHubTrending';
import { getFeaturedPromptShowcases } from '@/data/prompt-showcases';
import { githubTopicCollections } from '@/data/github-topics';
import { categories, getFeaturedTools, getToolsByCategory, tools } from '@/data/tools';
import { prompts } from '@/data/prompts';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFavorites } from '@/hooks/useFavorites';
import { useHistory } from '@/hooks/useHistory';

const quickLinks = [
  { href: '/prompts?media=image', zh: '热门图片提示词', en: 'Popular image prompts' },
  { href: '/prompts?media=video', zh: '热门视频提示词', en: 'Popular video prompts' },
  { href: '/github/mcp', zh: 'MCP Servers', en: 'MCP Servers' },
  { href: '/github/skills', zh: 'Agent Skills', en: 'Agent Skills' },
  { href: '/github/rules', zh: 'AI Rules', en: 'AI Rules' },
  { href: '/github', zh: 'GitHub 增长榜', en: 'GitHub Growth' },
];

export default function HomePage() {
  const { t, lang } = useLanguage();
  const { favorites } = useFavorites();
  const { historyToolIds, clearHistory } = useHistory();

  const featuredTools = getFeaturedTools();
  const aiTools = getToolsByCategory('ai-tools').slice(0, 8);
  const devTools = getToolsByCategory('dev-tools').slice(0, 6);
  const featuredShowcases = getFeaturedPromptShowcases(4);

  const favoriteTools = useMemo(
    () => favorites.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean) as typeof tools,
    [favorites]
  );

  const recentTools = useMemo(
    () => historyToolIds.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean) as typeof tools,
    [historyToolIds]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.18),_transparent_30%),linear-gradient(to_bottom,_rgba(255,255,255,0.96),_rgba(248,250,252,0.96))] py-16 px-4 sm:px-6 lg:px-8 dark:bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.20),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.16),_transparent_30%),linear-gradient(to_bottom,_rgba(3,7,18,0.96),_rgba(10,15,28,0.96))]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm text-blue-700 backdrop-blur-sm dark:border-blue-900 dark:bg-blue-950/20 dark:text-blue-300">
                <Sparkles className="h-4 w-4" />
                {lang === 'zh' ? 'AI 工具、MCP、提示词与 GitHub 热门' : 'AI tools, MCP, prompts, and GitHub trends'}
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                {lang === 'zh'
                  ? '发现 AI 工具、MCP 服务器、提示词案例和 GitHub 热门资源'
                  : 'Discover AI tools, MCP servers, prompt showcases, and trending GitHub resources'}
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                {lang === 'zh'
                  ? 'AnyTools 不再只是工具导航。这里把图片提示词、视频提示词、开发者 AI 热门专题和 GitHub 增长项目整理到同一个入口，方便你一站式找灵感、找资源、找流量话题。'
                  : 'AnyTools is no longer just a tool directory. It now brings together image prompts, video prompts, developer AI topics, and fast-moving GitHub projects in one searchable hub.'}
              </p>

              <div className="mt-8 max-w-2xl">
                <SearchBar />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-300 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                  >
                    {lang === 'zh' ? link.zh : link.en}
                  </Link>
                ))}
              </div>

              <p className="mt-5 text-sm text-gray-500">
                {t.totalTools}{' '}
                <span className="font-semibold text-gray-700 dark:text-gray-300">{tools.length}</span> {t.tools}
                {' · '}
                <span className="font-semibold text-gray-700 dark:text-gray-300">{prompts.length}</span>{' '}
                {lang === 'zh' ? '个提示词' : 'prompts'}
                {' · '}
                <span className="font-semibold text-gray-700 dark:text-gray-300">{categories.length}</span> {t.categories}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredShowcases.slice(0, 2).map((showcase) => {
                const prompt = prompts.find((item) => item.id === showcase.id);
                return (
                  <Link
                    key={showcase.id}
                    href={`/prompts/${showcase.id}`}
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={showcase.cover.url}
                        alt={lang === 'zh' ? showcase.cover.alt : (showcase.cover.altEn || showcase.cover.alt)}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                        {showcase.mediaType === 'video'
                          ? (lang === 'zh' ? '视频提示词' : 'Video prompt')
                          : (lang === 'zh' ? '图片提示词' : 'Image prompt')}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-lg font-semibold text-white">
                          {lang === 'zh' ? prompt?.title : (prompt?.titleEn || prompt?.title)}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
                      {lang === 'zh' ? showcase.useCase : (showcase.useCaseEn || showcase.useCase)}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CategoryNav />
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-600 to-fuchsia-600 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur-sm">
                <TrendingUp className="h-4 w-4" />
                {lang === 'zh' ? '今日热门 AI 内容' : 'Today\'s AI highlights'}
              </div>
              <h2 className="text-2xl font-bold">
                {lang === 'zh'
                  ? '图片提示词、视频提示词、MCP 与 AI Rules 一起看'
                  : 'See prompts, MCP, and AI rules in one place'}
              </h2>
              <p className="mt-2 max-w-2xl text-white/85">
                {lang === 'zh'
                  ? '不只是复制提示词，现在可以直接看成图、看视频、看拆解，还能顺手追 GitHub 热门仓库和开发者专题。'
                  : 'It is no longer just copy-and-paste prompts. You can now inspect images, watch videos, read breakdowns, and jump into developer AI topics.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/prompts" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50">
                {lang === 'zh' ? '浏览提示词库' : 'Browse prompt library'}
              </Link>
              <Link href="/github" className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                {lang === 'zh' ? '查看 GitHub 热门' : 'Open GitHub topics'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GitHubTrendingCompact />
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {lang === 'zh' ? '热门图片/视频案例' : 'Featured image and video cases'}
            </h2>
            <Link href="/prompts" className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
              {t.viewMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredShowcases.slice(0, 3).map((showcase) => {
              const prompt = prompts.find((item) => item.id === showcase.id);
              return (
                <Link
                  key={showcase.id}
                  href={`/prompts/${showcase.id}`}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  <img
                    src={showcase.cover.url}
                    alt={lang === 'zh' ? showcase.cover.alt : (showcase.cover.altEn || showcase.cover.alt)}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-2 text-xs font-medium text-purple-600 dark:text-purple-300">
                      {showcase.model}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {lang === 'zh' ? prompt?.title : (prompt?.titleEn || prompt?.title)}
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {lang === 'zh' ? showcase.useCase : (showcase.useCaseEn || showcase.useCase)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-50 to-blue-50/40 py-6 px-4 dark:from-gray-900/40 dark:to-blue-950/10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {lang === 'zh' ? '开发者 AI 专题导航' : 'Developer AI topic navigation'}
            </h2>
            <span className="text-sm text-gray-500">
              {lang === 'zh' ? 'MCP / Skills / Rules' : 'MCP / Skills / Rules'}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {githubTopicCollections.slice(0, 3).map((topic) => (
              <Link
                key={topic.id}
                href={`/github/${topic.id}`}
                className="rounded-3xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <FolderKanban className="h-5 w-5" />
                  <span className="font-semibold">
                    {lang === 'zh' ? topic.title : topic.titleEn}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {lang === 'zh' ? topic.summary : topic.summaryEn}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topic.searchTerms.slice(0, 3).map((term) => (
                    <span
                      key={term}
                      className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {recentTools.length > 0 && (
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Clock className="h-5 w-5 text-gray-500" />
                {t.recentlyUsed}
              </h2>
              <button
                onClick={clearHistory}
                className="flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
                {t.clearHistory}
              </button>
            </div>
            <ToolGrid tools={recentTools.slice(0, 6)} />
          </div>
        </section>
      )}

      {favoriteTools.length > 0 && (
        <section className="bg-pink-50/30 py-6 px-4 dark:bg-pink-950/10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Heart className="h-5 w-5 text-pink-500" />
                {t.myFavorites}
              </h2>
              <span className="text-sm text-gray-500">
                {favoriteTools.length} {t.tools}
              </span>
            </div>
            <ToolGrid tools={favoriteTools} />
          </div>
        </section>
      )}

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {lang === 'zh' ? '精选工具推荐' : 'Featured tools'}
            </h2>
          </div>
          <ToolGrid tools={featuredTools.slice(0, 8)} />
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 py-8 px-4 dark:from-purple-950/10 dark:to-pink-950/10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t.aiTools}
            </h2>
            <Link href="/category/ai-tools" className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
              {t.viewMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ToolGrid tools={aiTools} />
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t.devTools}
            </h2>
            <Link href="/category/dev-tools" className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
              {t.viewMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ToolGrid tools={devTools} />
        </div>
      </section>

      <section className="bg-gray-50 py-8 px-4 dark:bg-gray-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t.allCategories}
            </h2>
          </div>
          <CategoryGrid />
        </div>
      </section>
    </div>
  );
}
