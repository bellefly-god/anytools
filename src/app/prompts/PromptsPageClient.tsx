'use client';

import { useMemo, useState } from 'react';
import { Search, Sparkles, TrendingUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { PromptCard } from '@/components/PromptCard';
import {
  prompts,
  promptCategories,
  getPromptsByCategory,
  searchPrompts,
} from '@/data/prompts';
import { getFeaturedPromptShowcases } from '@/data/prompt-showcases';
import { useLanguage } from '@/contexts/LanguageContext';

const mediaFilters = [
  { id: 'all', labelZh: '全部类型', labelEn: 'All Media' },
  { id: 'image', labelZh: '图片提示词', labelEn: 'Image Prompts' },
  { id: 'video', labelZh: '视频提示词', labelEn: 'Video Prompts' },
];

interface PromptsPageClientProps {
  initialMediaType?: 'all' | 'image' | 'video';
}

export function PromptsPageClient({ initialMediaType = 'all' }: PromptsPageClientProps) {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<string>(initialMediaType);

  const featuredShowcases = getFeaturedPromptShowcases(4);

  const filteredPrompts = useMemo(() => {
    let results = searchQuery
      ? searchPrompts(searchQuery)
      : activeCategory
        ? getPromptsByCategory(activeCategory)
        : prompts;

    if (mediaType !== 'all') {
      results = results.filter((prompt) => prompt.category === mediaType);
    }

    return results;
  }, [activeCategory, mediaType, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(126,34,206,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_30%)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-sm text-purple-700 backdrop-blur-sm dark:border-purple-900 dark:bg-purple-950/30 dark:text-purple-300">
              <Sparkles className="h-4 w-4" />
              {t.promptsTitle}
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              {lang === 'zh'
                ? '图片提示词、视频提示词与 AI 创作案例'
                : 'AI image prompts, video prompts, and showcase cases'}
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              {lang === 'zh'
                ? '从 Midjourney、GPT Image、Stable Diffusion 到 Sora、Runway、Kling，直接查看成品展示、完整 prompt 和拆解思路。'
                : 'Explore Midjourney, GPT Image, Stable Diffusion, Sora, Runway, and Kling examples with previews, full prompts, and structured breakdowns.'}
            </p>

            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t.promptsSearchPlaceholder}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveCategory(null);
                }}
                className="w-full rounded-2xl border border-gray-200 bg-white/85 py-3 pl-10 pr-4 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 dark:border-gray-700 dark:bg-gray-900/80"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {mediaFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setMediaType(filter.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    mediaType === filter.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {lang === 'zh' ? filter.labelZh : filter.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {lang === 'zh' ? '今日热门 AI 内容' : 'Trending AI showcases'}
            </h2>
            <span className="text-sm text-gray-500">
              {lang === 'zh' ? '适合搜索流量与落地页灵感' : 'Great for SEO landing pages and inspiration'}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredShowcases.map((showcase) => (
              <a
                key={showcase.id}
                href={`/prompts/${showcase.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={showcase.cover.url}
                    alt={lang === 'zh' ? showcase.cover.alt : (showcase.cover.altEn || showcase.cover.alt)}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/35 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                    <TrendingUp className="h-3 w-3" />
                    {showcase.mediaType === 'video'
                      ? (lang === 'zh' ? '热门视频' : 'Trending video')
                      : (lang === 'zh' ? '热门图片' : 'Trending image')}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-lg font-semibold text-white">
                      {lang === 'zh'
                        ? prompts.find((prompt) => prompt.id === showcase.id)?.title
                        : (prompts.find((prompt) => prompt.id === showcase.id)?.titleEn || prompts.find((prompt) => prompt.id === showcase.id)?.title)}
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  {lang === 'zh'
                    ? showcase.useCase
                    : (showcase.useCaseEn || showcase.useCase)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-14 z-10 border-y border-gray-200 bg-white/85 py-3 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/85">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setActiveCategory(null);
                setSearchQuery('');
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                !activeCategory && !searchQuery
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {t.all} ({prompts.length})
            </button>
            {promptCategories.map((category) => {
              const count = getPromptsByCategory(category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery('');
                    setMediaType(category.id === 'image' || category.id === 'video' ? category.id : 'all');
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{lang === 'zh' ? category.name : category.nameEn}</span>
                  <span className="text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-sm text-gray-500">
            {t.promptsFound} {filteredPrompts.length} {t.promptsCount}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredPrompts.map((prompt, index) => (
              <PromptCard key={prompt.id} prompt={prompt} index={index} />
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              {t.promptsNoResults}
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-8 px-4 dark:bg-gray-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <span>📚</span>
            {t.promptsSourcesTitle}
          </h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            {lang === 'zh'
              ? '本页优先整理公开可引用的热门提示词方向和官方/社区案例，方便你快速参考图片提示词、视频提示词和 AI 创作规则。'
              : 'This page prioritizes publicly referenceable prompt patterns and official or community examples for image prompts, video prompts, and AI creation workflows.'}
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Midjourney Prompting Guide',
              'OpenAI Sora Prompting',
              'Civitai',
              'PromptBase',
              'Runway Inspiration',
              'GitHub AI Projects',
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm dark:border-gray-700 dark:bg-gray-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 px-4 dark:border-gray-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
