'use client';

import { motion } from 'framer-motion';
import { Star, TrendingUp, ExternalLink } from 'lucide-react';
import { githubTrending } from '@/data/tools';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface GitHubTrendingProps {
  limit?: number;
  showAll?: boolean;
}

export function GitHubTrending({ limit = 5, showAll = false }: GitHubTrendingProps) {
  const { t } = useLanguage();
  const items = showAll 
    ? githubTrending.topByStars 
    : githubTrending.topByStars.slice(0, limit);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          {t.githubTrending}
        </h3>
        <span className="text-xs text-gray-500">
          {t.updated} {githubTrending.lastUpdate}
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.a
            key={item.repo}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
          >
            <span className={`text-lg font-bold w-7 ${index < 3 ? 'text-yellow-500' : 'text-gray-400'}`}>
              {item.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.repo}
                </span>
                <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-500" />
                  {(item.stars / 1000).toFixed(0)}K
                </span>
                <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                  {item.language}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export function GitHubGrowth({ limit = 5, showAll = false }: GitHubTrendingProps) {
  const { t } = useLanguage();
  const items = showAll 
    ? githubTrending.topByGrowth 
    : githubTrending.topByGrowth.slice(0, limit);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          {t.githubGrowth}
        </h3>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.a
            key={item.repo}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
          >
            <span className={`text-lg font-bold w-7 ${index < 3 ? 'text-green-500' : 'text-gray-400'}`}>
              {item.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.repo}
                </span>
                <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                <span className="text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +{(item.weeklyGrowth / 1000).toFixed(1)}K
                </span>
                <span className="text-green-600 dark:text-green-400">
                  (+{item.growthRate}%)
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

// 精简版 - 用于首页
export function GitHubTrendingCompact() {
  const { t, lang } = useLanguage();
  const starsItems = githubTrending.topByStars.slice(0, 5);
  const growthItems = githubTrending.topByGrowth.slice(0, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Stars 榜 */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border border-yellow-200 dark:border-yellow-900 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-xl">🏆</span>
            {t.starsRank}
          </h3>
          <Link href="/github" className="text-xs text-blue-600 hover:text-blue-700">
            {t.viewAll} →
          </Link>
        </div>
        <div className="space-y-1.5">
          {starsItems.map((item, index) => (
            <a
              key={item.repo}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-1.5 rounded hover:bg-white/50 dark:hover:bg-black/20 transition-colors"
            >
              <span className={`text-sm font-bold w-5 ${index < 3 ? 'text-yellow-600' : 'text-gray-400'}`}>
                {item.rank}
              </span>
              <span className="text-xs truncate flex-1">{item.repo.split('/')[1]}</span>
              <span className="text-xs text-gray-500 flex items-center gap-0.5">
                <Star className="w-3 h-3 text-yellow-500" />
                {(item.stars / 1000).toFixed(0)}K
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 增长榜 */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-900 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-xl">🚀</span>
            {t.growthRank}
          </h3>
          <Link href="/github" className="text-xs text-blue-600 hover:text-blue-700">
            {t.viewAll} →
          </Link>
        </div>
        <div className="space-y-1.5">
          {growthItems.map((item, index) => (
            <a
              key={item.repo}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-1.5 rounded hover:bg-white/50 dark:hover:bg-black/20 transition-colors"
            >
              <span className={`text-sm font-bold w-5 ${index < 3 ? 'text-green-600' : 'text-gray-400'}`}>
                {item.rank}
              </span>
              <span className="text-xs truncate flex-1">{item.repo.split('/')[1]}</span>
              <span className="text-xs text-green-600 font-medium">
                +{item.growthRate}%
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
