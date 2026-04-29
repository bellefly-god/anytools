'use client';

import { Header } from '@/components/Header';
import { GitHubTrending, GitHubGrowth } from '@/components/GitHubTrending';
import { githubTrending } from '@/data/tools';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GitHubPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backHome}
          </Link>
          <h1 className="text-3xl font-bold mb-2">📊 {t.githubTitle}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t.updated} {githubTrending.lastUpdate} · {t.week} {githubTrending.week.split('-W')[1]}
          </p>
        </div>
      </section>

      {/* Charts */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GitHubTrending showAll />
            <GitHubGrowth showAll />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
