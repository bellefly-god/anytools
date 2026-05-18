'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Globe, Heart, Monitor, Smartphone, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { categories, type Tool } from '@/data/tools';
import { useFavorites } from '@/hooks/useFavorites';
import { useHistory } from '@/hooks/useHistory';
import { useLanguage } from '@/contexts/LanguageContext';

const platformLabels: Record<string, { zh: string; en: string }> = {
  web: { zh: '网页', en: 'Web' },
  mac: { zh: 'Mac', en: 'Mac' },
  windows: { zh: 'Windows', en: 'Windows' },
  linux: { zh: 'Linux', en: 'Linux' },
  ios: { zh: 'iOS', en: 'iOS' },
  android: { zh: 'Android', en: 'Android' },
  api: { zh: 'API', en: 'API' },
};

export function ToolDetailClient({ tool }: { tool: Tool }) {
  const { lang, t } = useLanguage();
  const category = categories.find((item) => item.id === tool.category);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addHistory } = useHistory();

  const displayName = lang === 'en' && tool.nameEn ? tool.nameEn : tool.name;
  const displayDescription = lang === 'en' && tool.descriptionEn ? tool.descriptionEn : tool.description;
  const displaySubCategory = lang === 'en' && tool.subCategoryEn ? tool.subCategoryEn : tool.subCategory;

  const pricingMap = {
    free: t.free,
    freemium: t.freemium,
    paid: t.paid,
    'open-source': t.openSource,
  };

  const visitTool = () => {
    addHistory(tool.id);
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      <section className="border-b border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href={category ? `/category/${category.id}` : '/'}
            className="mb-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'zh' ? '返回上一页' : 'Back'}
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {category && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {category.icon} {lang === 'zh' ? category.name : category.nameEn}
                  </span>
                )}
                {displaySubCategory && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                    {displaySubCategory}
                  </span>
                )}
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-700 dark:bg-orange-950/30 dark:text-orange-300">
                  {pricingMap[tool.pricing]}
                </span>
              </div>

              <div className="flex items-start gap-4">
                {tool.icon ? (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-16 w-16 rounded-2xl bg-white object-contain p-2 shadow-sm"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-3xl dark:bg-gray-800">
                    {category?.icon || '🔧'}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                    {displayName}
                  </h1>
                  <p className="mt-3 max-w-3xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                    {displayDescription}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={visitTool}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  {lang === 'zh' ? '打开官网' : 'Visit website'}
                </button>
                <button
                  onClick={() => toggleFavorite(tool.id)}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <Heart className={`h-4 w-4 ${isFavorite(tool.id) ? 'fill-current text-pink-500' : ''}`} />
                  {isFavorite(tool.id)
                    ? (lang === 'zh' ? '已收藏' : 'Favorited')
                    : t.addToFavorites}
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {lang === 'zh' ? '平台与标签' : 'Platforms and tags'}
              </h2>
              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">
                    {lang === 'zh' ? '支持平台' : 'Platforms'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tool.platform.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800"
                      >
                        {platform === 'web' && <Globe className="h-3.5 w-3.5" />}
                        {(platform === 'mac' || platform === 'windows' || platform === 'linux') && <Monitor className="h-3.5 w-3.5" />}
                        {(platform === 'ios' || platform === 'android') && <Smartphone className="h-3.5 w-3.5" />}
                        {lang === 'zh' ? platformLabels[platform]?.zh || platform : platformLabels[platform]?.en || platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 font-medium text-gray-900 dark:text-white">
                    <Tag className="h-4 w-4" />
                    {lang === 'zh' ? '关键词' : 'Tags'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">
                    {lang === 'zh' ? '收录说明' : 'Why it is listed'}
                  </div>
                  <p>
                    {lang === 'zh'
                      ? '这个详情页用于帮助搜索引擎和用户理解工具定位、平台支持和适用场景，再决定是否跳转官网。'
                      : 'This page helps readers and search engines understand the tool positioning, platform support, and use case before jumping out to the official site.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
