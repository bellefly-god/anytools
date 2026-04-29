'use client';

import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Globe, Monitor, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, type Tool } from '@/data/tools';

// 定价标签颜色
const pricingColors: Record<string, string> = {
  free: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  freemium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  paid: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
  'open-source': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
};

const pricingLabels: Record<string, string> = {
  free: '免费',
  freemium: '免费',
  paid: '付费',
  'open-source': '开源',
};

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
  const category = categories.find((c) => c.id === tool.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
    >
      <a href={tool.url} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <CardContent className="p-3">
            {/* 名称和热门标签 */}
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <h3 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                {tool.name}
              </h3>
              {tool.hot && (
                <TrendingUp className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
              )}
            </div>
            
            {/* 简短描述 - 截断到 15 字 */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">
              {tool.description.length > 15 
                ? tool.description.slice(0, 15) + '...' 
                : tool.description}
            </p>
            
            {/* 分类标签 */}
            {tool.subCategory && (
              <span 
                className="text-xs px-1.5 py-0.5 rounded inline-block mb-2"
                style={{ 
                  backgroundColor: `${category?.color}15`,
                  color: category?.color 
                }}
              >
                {tool.subCategory}
              </span>
            )}
            
            {/* 底部：定价 + 平台 */}
            <div className="flex items-center justify-between">
              <span className={`text-xs px-1.5 py-0.5 rounded ${pricingColors[tool.pricing]}`}>
                {pricingLabels[tool.pricing]}
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
