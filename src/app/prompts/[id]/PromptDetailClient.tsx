'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Check, Copy, ExternalLink, PlayCircle, Sparkles } from 'lucide-react';
import { Header } from '@/components/Header';
import { PromptCard } from '@/components/PromptCard';
import { getPromptById, promptCategories, type Prompt } from '@/data/prompts';
import { getPromptShowcaseById } from '@/data/prompt-showcases';
import { useLanguage } from '@/contexts/LanguageContext';

function RelatedPrompts({ ids }: { ids: string[] }) {
  const related = ids
    .map((id) => getPromptById(id))
    .filter(Boolean) as Prompt[];

  if (!related.length) return null;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {related.map((prompt, index) => (
        <PromptCard key={prompt.id} prompt={prompt} index={index} />
      ))}
    </div>
  );
}

export function PromptDetailClient({ promptId }: { promptId: string }) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const prompt = getPromptById(promptId);
  const showcase = getPromptShowcaseById(promptId);

  if (!prompt || !showcase) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {lang === 'zh' ? '提示词不存在' : 'Prompt not found'}
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            {lang === 'zh'
              ? '这个提示词详情页还没准备好，你可以先回到提示词库继续浏览。'
              : 'This prompt detail page is not ready yet. You can go back to the prompt library.'}
          </p>
          <Link
            href="/prompts"
            className="mt-6 inline-flex rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            {lang === 'zh' ? '返回提示词库' : 'Back to prompt library'}
          </Link>
        </div>
      </div>
    );
  }

  const category = promptCategories.find((item) => item.id === prompt.category);
  const displayTitle = lang === 'zh' ? prompt.title : (prompt.titleEn || prompt.title);
  const displayDescription = lang === 'zh' ? prompt.description : (prompt.descriptionEn || prompt.description);
  const displayPrompt = lang === 'zh' ? showcase.promptFull : (showcase.promptFullEn || showcase.promptFull);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(displayPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      <section className="border-b border-gray-200 bg-white/85 py-8 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/prompts"
            className="mb-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'zh' ? '返回提示词库' : 'Back to prompts'}
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {category && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <span>{category.icon}</span>
                    {lang === 'zh' ? category.name : category.nameEn}
                  </span>
                )}
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                  {showcase.model}
                </span>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-700 dark:bg-orange-950/30 dark:text-orange-300">
                  {showcase.difficulty}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                {displayTitle}
              </h1>
              <p className="mt-4 max-w-3xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                {displayDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied
                    ? (lang === 'zh' ? '已复制完整提示词' : 'Full prompt copied')
                    : (lang === 'zh' ? '复制完整提示词' : 'Copy full prompt')}
                </button>
                {showcase.sourceName && showcase.sourceUrl && (
                  <a
                    href={showcase.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    {lang === 'zh' ? '热门参考来源' : 'Reference source'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-black shadow-xl dark:border-gray-800">
              {showcase.mediaType === 'video' && showcase.videoUrl ? (
                <video
                  controls
                  playsInline
                  poster={showcase.videoPoster || showcase.cover.url}
                  className="aspect-video w-full object-cover"
                >
                  <source src={showcase.videoUrl} />
                </video>
              ) : (
                <img
                  src={showcase.cover.url}
                  alt={lang === 'zh' ? showcase.cover.alt : (showcase.cover.altEn || showcase.cover.alt)}
                  className="aspect-video w-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                {showcase.mediaType === 'video' ? <PlayCircle className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                {lang === 'zh' ? '完整提示词' : 'Full Prompt'}
              </div>
              <pre className="overflow-x-auto rounded-2xl bg-gray-50 p-4 font-mono text-sm whitespace-pre-wrap text-gray-800 dark:bg-gray-950 dark:text-gray-100">
                {displayPrompt}
              </pre>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {lang === 'zh' ? '提示词拆解' : 'Prompt Breakdown'}
              </h2>
              <div className="space-y-4">
                {showcase.promptBreakdown.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-950/70">
                    <div className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                      {lang === 'zh' ? item.label : (item.labelEn || item.label)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {lang === 'zh' ? item.value : (item.valueEn || item.value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {showcase.timeline?.length ? (
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {lang === 'zh' ? '动态展示节奏' : 'Motion & Timeline'}
                </h2>
                <div className="space-y-4">
                  {showcase.timeline.map((item) => (
                    <div key={item.stage} className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {lang === 'zh' ? item.stage : (item.stageEn || item.stage)}
                      </div>
                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        {lang === 'zh' ? item.detail : (item.detailEn || item.detail)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {showcase.gallery?.length ? (
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {lang === 'zh' ? '图片展示' : 'Gallery'}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {showcase.gallery.map((item, index) => (
                    <img
                      key={`${item.url}-${index}`}
                      src={item.url}
                      alt={lang === 'zh' ? item.alt : (item.altEn || item.alt)}
                      className="h-60 w-full rounded-2xl object-cover"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {lang === 'zh' ? '模型与适用平台' : 'Model & Platforms'}
              </h2>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {lang === 'zh' ? '推荐模型' : 'Recommended model'}
                  </div>
                  <div>{showcase.model}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {lang === 'zh' ? '适用平台' : 'Best platforms'}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {showcase.platform.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {lang === 'zh' ? '适用场景' : 'Use case'}
                  </div>
                  <div>{lang === 'zh' ? showcase.useCase : (showcase.useCaseEn || showcase.useCase)}</div>
                </div>
              </div>
            </div>

            {showcase.parameters?.length ? (
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {lang === 'zh' ? '细节参数' : 'Key Parameters'}
                </h2>
                <div className="space-y-3">
                  {showcase.parameters.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-950/70">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {lang === 'zh' ? item.label : (item.labelEn || item.label)}
                      </div>
                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        {lang === 'zh' ? item.value : (item.valueEn || item.value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {(showcase.sourceName || showcase.referenceNote) ? (
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {lang === 'zh' ? '热门参考来源' : 'Reference Notes'}
                </h2>
                {showcase.sourceName && showcase.sourceUrl ? (
                  <a
                    href={showcase.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {showcase.sourceName}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
                {showcase.referenceNote ? (
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    {lang === 'zh' ? showcase.referenceNote : (showcase.referenceNoteEn || showcase.referenceNote)}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4 dark:bg-gray-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            {lang === 'zh' ? '相似提示词推荐' : 'Related prompts'}
          </h2>
          <RelatedPrompts ids={showcase.similarPromptIds} />
        </div>
      </section>
    </div>
  );
}
