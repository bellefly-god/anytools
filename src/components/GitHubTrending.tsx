'use client';

import { motion } from 'framer-motion';
import { Star, TrendingUp, ExternalLink } from 'lucide-react';
import { githubTrending } from '@/data/tools';

interface GitHubTrendingProps {
  limit?: number;
}

export function GitHubTrending({ limit = 5 }: GitHubTrendingProps) {
  const items = githubTrending.top10.slice(0, limit);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <span className="text-xl">📊</span>
          GitHub 周榜 Top {limit}
        </h3>
        <span className="text-xs text-gray-500">
          更新于 {githubTrending.lastUpdate}
        </span>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.a
            key={item.repo}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
          >
            <span className="text-lg font-bold text-gray-400 w-6">
              {item.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.repo}
                </span>
                <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-0.5">
                  <Star className="w-3 h-3" />
                  {(item.stars / 1000).toFixed(0)}K
                </span>
                <span className="text-green-600 dark:text-green-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  +{(item.weeklyGrowth / 1000).toFixed(1)}K
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

export function FastestGrowing() {
  const items = githubTrending.fastestGrowing;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <span className="text-xl">🚀</span>
          增长最快
        </h3>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.a
            key={item.repo}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
          >
            <span className="text-lg font-bold text-gray-400 w-6">
              {item.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.repo}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  +{item.growthRate}%
                </span>
                <span>本周增长</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
