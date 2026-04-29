'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { tools, categories, type Tool } from '@/data/tools';

// 定价标签颜色
const pricingColors: Record<string, string> = {
  free: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  freemium: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  paid: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
  'open-source': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
};

const pricingLabels: Record<string, string> = {
  free: '免费',
  freemium: '免费增值',
  paid: '付费',
  'open-source': '开源',
};

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const category = categories.find((c) => c.id === tool.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <a href={tool.url} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {tool.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-0.5 rounded-full ${pricingColors[tool.pricing]}`}>
                {pricingLabels[tool.pricing]}
              </span>
              {tool.hot && (
                <span className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400">
                  <TrendingUp className="w-3 h-3" />
                  热门
                </span>
              )}
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} index={index} />
      ))}
    </div>
  );
}
