'use client';

import { Header } from '@/components/Header';
import { CategoryNav } from '@/components/CategoryNav';
import { ToolGrid } from '@/components/ToolCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories } from '@/data/tools';

interface CategoryClientProps {
  category: typeof categories[0];
  tools: any[];
  subCategories: string[];
  activeCategory: string;
}

export function CategoryClient({ category, tools, subCategories, activeCategory }: CategoryClientProps) {
  const { t, lang } = useLanguage();

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
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl font-bold">{lang === 'zh' ? category.name : category.nameEn}</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {lang === 'zh' ? category.description : (category.descriptionEn || category.description)}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {t.totalCollected} {tools.length} {t.toolsCount}
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CategoryNav activeCategory={activeCategory} />
        </div>
      </section>

      {/* Tools */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {subCategories.length > 1 ? (
            <div className="space-y-8">
              {subCategories.map((subCat) => {
                const subTools = tools.filter((t) => t.subCategory === subCat);
                return (
                  <div key={subCat}>
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      {subCat}
                      <span className="text-sm font-normal text-gray-500">
                        ({subTools.length})
                      </span>
                    </h2>
                    <ToolGrid tools={subTools} />
                  </div>
                );
              })}
            </div>
          ) : (
            <ToolGrid tools={tools} />
          )}
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
