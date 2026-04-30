'use client';

import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Globe, Monitor, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, type Tool } from '@/data/tools';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

// 平台图标
const platformIcons: Record<string, React.ReactNode> = {
  web: <Globe className="w-3 h-3" />,
  mac: <Monitor className="w-3 h-3" />,
  windows: <Monitor className="w-3 h-3" />,
  linux: <Monitor className="w-3 h-3" />,
  ios: <Smartphone className="w-3 h-3" />,
  android: <Smartphone className="w-3 h-3" />,
  api: <span className="text-xs font-mono">API</span>,
};

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const { t, lang } = useLanguage();
  const category = categories.find((c) => c.id === tool.category);

  // 定价标签颜色和文字
  const pricingConfig: Record<string, { color: string; label: string }> = {
    free: { 
      color: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300', 
      label: t.free 
    },
    freemium: { 
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300', 
      label: t.freemium 
    },
    paid: { 
      color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300', 
      label: t.paid 
    },
    'open-source': { 
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300', 
      label: t.openSource 
    },
  };

  const pricing = pricingConfig[tool.pricing];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
    >
      <a href={tool.url} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <CardContent className="p-3">
            {/* 图标和名称 */}
            <div className="flex items-center gap-2 mb-1.5">
              {tool.icon ? (
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="w-6 h-6 object-contain"
                    unoptimized
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{category?.icon || '🔧'}</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {tool.name}
                  </h3>
                  {tool.hot && (
                    <TrendingUp className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
            
            {/* 简短描述 */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-1 pl-10">
              {tool.description.length > 20 
                ? tool.description.slice(0, 20) + '...' 
                : tool.description}
            </p>
            
            {/* 分类标签 */}
            {tool.subCategory && (
              <span 
                className="text-xs px-1.5 py-0.5 rounded inline-block mb-2 ml-10"
                style={{ 
                  backgroundColor: `${category?.color}15`,
                  color: category?.color 
                }}
              >
                {tool.subCategory}
              </span>
            )}
            
            {/* 底部：定价 + 平台 */}
            <div className="flex items-center justify-between pl-10">
              <span className={`text-xs px-1.5 py-0.5 rounded ${pricing.color}`}>
                {pricing.label}
              </span>
              <div className="flex items-center gap-0.5 text-gray-400">
                {tool.platform.slice(0, 2).map((p) => (
                  <span key={p}>
                    {platformIcons[p]}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}

interface ToolGridProps {
  tools: Tool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} index={index} />
      ))}
    </div>
  );
}
