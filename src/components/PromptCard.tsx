'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles, TrendingUp, ChevronDown, ArrowRight, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { promptCategories, type Prompt } from '@/data/prompts';
import { getPromptShowcaseById } from '@/data/prompt-showcases';
import { useLanguage } from '@/contexts/LanguageContext';

export function PromptCard({ prompt, index = 0 }: { prompt: Prompt; index?: number }) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const category = promptCategories.find((c) => c.id === prompt.category);
  const showcase = getPromptShowcaseById(prompt.id);
  const displayContent = lang === 'en' && prompt.contentEn ? prompt.contentEn : prompt.content;
  const displayTitle = lang === 'zh' ? prompt.title : (prompt.titleEn || prompt.title);
  const displayDescription = lang === 'zh' ? prompt.description : (prompt.descriptionEn || prompt.description);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(showcase?.promptFull || displayContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
    >
      <Card className="h-full overflow-hidden border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
        {showcase && (
          <Link href={`/prompts/${prompt.id}`} className="block">
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={showcase.cover.url}
                alt={lang === 'zh' ? showcase.cover.alt : (showcase.cover.altEn || showcase.cover.alt)}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-white/90">
                    {category && <span className="text-lg">{category.icon}</span>}
                    {showcase.mediaType === 'video' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-xs backdrop-blur-sm">
                        <PlayCircle className="h-3 w-3" />
                        {lang === 'zh' ? '视频案例' : 'Video Case'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-xs backdrop-blur-sm">
                        <Sparkles className="h-3 w-3" />
                        {lang === 'zh' ? '图片案例' : 'Image Case'}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/80">
                    {lang === 'zh'
                      ? showcase.useCase
                      : (showcase.useCaseEn || showcase.useCase)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )}

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                {!showcase && category && <span className="text-lg">{category.icon}</span>}
                <CardTitle className="text-base font-medium">
                  {displayTitle}
                </CardTitle>
                {prompt.hot && (
                  <span className="flex items-center gap-0.5 text-xs text-orange-500">
                    <TrendingUp className="h-3 w-3" />
                    {t.promptHot}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {displayDescription}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="mb-3 flex flex-wrap gap-1">
            {prompt.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
            {prompt.model && (
              <span
                className="rounded px-2 py-0.5 text-xs"
                style={{
                  backgroundColor: `${category?.color}15`,
                  color: category?.color,
                }}
              >
                {prompt.model}
              </span>
            )}
            {showcase && (
              <span className="rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                {showcase.difficulty}
              </span>
            )}
          </div>

          {showcase?.promptBreakdown?.length ? (
            <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/60">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {lang === 'zh' ? '提示词拆解' : 'Prompt Breakdown'}
              </div>
              <div className="space-y-1.5">
                {showcase.promptBreakdown.slice(0, 3).map((item) => (
                  <div key={item.label} className="text-xs text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {lang === 'zh' ? item.label : (item.labelEn || item.label)}
                    </span>
                    {' · '}
                    <span>
                      {lang === 'zh' ? item.value : (item.valueEn || item.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {prompt.examples && prompt.examples.length > 0 && (
            <div className="mb-3">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="mb-2 flex items-center gap-1 text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                <Sparkles className="h-3 w-3" />
                {showExamples ? t.promptHideExamples : t.promptViewExamples}
                <ChevronDown className={`h-3 w-3 transition-transform ${showExamples ? 'rotate-180' : ''}`} />
              </button>

              {showExamples && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-3 dark:from-purple-900/20 dark:to-pink-900/20"
                >
                  {prompt.examples.map((example, idx) => (
                    <div key={idx} className="space-y-2">
                      {example.image && (
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                          <img
                            src={example.image}
                            alt={lang === 'zh' ? '生成样例' : 'Generated Example'}
                            className="h-auto max-h-48 w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      {example.prompt && (
                        <div className="text-xs">
                          <span className="text-gray-500 dark:text-gray-400">{t.promptExamplePrompt}</span>
                          <p className="mt-1 rounded border border-gray-200 bg-white p-2 font-mono text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            {example.prompt.slice(0, 200)}
                            {example.prompt.length > 200 ? '...' : ''}
                          </p>
                        </div>
                      )}
                      {example.result && (
                        <div className="text-xs">
                          <span className="text-gray-500 dark:text-gray-400">{t.promptExampleResult}</span>
                          <span className="ml-1 text-gray-700 dark:text-gray-300">{example.result}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          <div
            className={`cursor-pointer rounded-lg bg-gray-50 p-3 font-mono text-sm whitespace-pre-wrap transition-all dark:bg-gray-800 ${
              expanded ? 'max-h-none' : 'max-h-24 overflow-hidden'
            }`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (showcase?.promptFull || displayContent) : `${(showcase?.promptFull || displayContent).slice(0, 180)}...`}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {expanded ? t.promptCollapse : t.promptExpand}
              <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex items-center gap-2">
              {showcase && (
                <Link
                  href={`/prompts/${prompt.id}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  {lang === 'zh' ? '查看详情' : 'View Details'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white transition-colors hover:bg-blue-700"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    {t.promptCopied}
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    {t.promptCopy}
                  </>
                )}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
