'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { categories } from '@/data/tools';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryNavProps {
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

export function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            !activeCategory
              ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {lang === 'zh' ? '全部' : 'All'}
        </motion.button>
      </Link>
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
              activeCategory === category.id
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            <span>{category.icon}</span>
            <span>{lang === 'zh' ? category.name : category.nameEn}</span>
          </motion.button>
        </Link>
      ))}
    </div>
  );
}

interface CategoryCardProps {
  category: typeof categories[0];
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/category/${category.id}`}>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
          <div className="text-3xl mb-2">{category.icon}</div>
          <h3 className="font-semibold text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {lang === 'zh' ? category.name : category.nameEn}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {lang === 'zh' ? category.description : (category.descriptionEn || category.description)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <CategoryCard key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}
