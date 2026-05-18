'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { type GitHubTopicCollection } from '@/data/github-topics';
import { useLanguage } from '@/contexts/LanguageContext';

export function TopicPageClient({ topic }: { topic: GitHubTopicCollection }) {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/github"
            className="mb-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === 'zh' ? '返回 GitHub 专题' : 'Back to GitHub topics'}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {lang === 'zh' ? topic.title : topic.titleEn}
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-gray-600 dark:text-gray-400">
            {lang === 'zh' ? topic.intro : topic.introEn}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {topic.searchTerms.map((term) => (
              <span
                key={term}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-5">
          {topic.repos.map((repo) => (
            <article
              key={repo.repo}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                      {lang === 'zh' ? repo.category : (repo.categoryEn || repo.category)}
                    </span>
                    {repo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="truncate text-xl font-semibold text-gray-900 dark:text-white">
                    {repo.repo}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {lang === 'zh' ? repo.description : (repo.descriptionEn || repo.description)}
                  </p>
                  <div className="mt-4 rounded-2xl bg-gray-50 p-4 dark:bg-gray-950/70">
                    <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                      <Tag className="h-4 w-4" />
                      {lang === 'zh' ? '适合谁' : 'Best for'}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {lang === 'zh' ? repo.audience : (repo.audienceEn || repo.audience)}
                    </p>
                  </div>
                </div>

                <div className="flex lg:w-48 lg:justify-end">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    {lang === 'zh' ? '打开仓库' : 'Open repo'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
