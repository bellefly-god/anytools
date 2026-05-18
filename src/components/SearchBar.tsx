'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { searchTools, categories, type Tool } from '@/data/tools';
import { ToolCard } from './ToolCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchBarProps {
  onResults?: (results: Tool[]) => void;
}

export function SearchBar({ onResults }: SearchBarProps) {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Tool[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 0) {
      const found = searchTools(value);
      // 如果有分类筛选，过滤结果
      const filtered = selectedCategory 
        ? found.filter(tool => tool.category === selectedCategory)
        : found;
      setResults(filtered);
      setIsOpen(true);
      onResults?.(filtered);
    } else {
      setResults([]);
      setIsOpen(false);
      onResults?.([]);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setSelectedCategory(null);
    onResults?.([]);
  };

  const handleCategoryFilter = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (query.length > 0) {
      const found = searchTools(query);
      const filtered = categoryId 
        ? found.filter(tool => tool.category === categoryId)
        : found;
      setResults(filtered);
      onResults?.(filtered);
    }
  };

  // 按分类分组结果
  const groupedResults = results.reduce((acc, tool) => {
    const cat = tool.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 pr-10 h-12 text-base bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 max-h-[70vh] overflow-y-auto"
          >
            <div className="p-4">
              {/* 分类筛选 */}
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100 dark:border-gray-800">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">{t.filterCategory}:</span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => handleCategoryFilter(null)}
                    className={`px-2 py-1 text-xs rounded-full transition-colors ${
                      !selectedCategory 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400'
                    }`}
                  >
                    {t.filterAll}
                  </button>
                  {Object.keys(groupedResults).map((catId) => {
                    const cat = categories.find(c => c.id === catId);
                    if (!cat) return null;
                    return (
                      <button
                        key={catId}
                        onClick={() => handleCategoryFilter(catId)}
                        className={`px-2 py-1 text-xs rounded-full transition-colors flex items-center gap-1 ${
                          selectedCategory === catId 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400'
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span>{lang === 'zh' ? cat.name : cat.nameEn}</span>
                        <span className="text-gray-400">({groupedResults[catId].length})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                {t.promptsFound} {results.length} {t.tools}
              </p>

              {/* 搜索结果 */}
              <div className="space-y-4">
                {selectedCategory ? (
                  // 单分类显示
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {results.slice(0, 12).map((tool, index) => (
                      <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                  </div>
                ) : (
                  // 分组显示
                  Object.entries(groupedResults).map(([catId, tools]) => {
                    const cat = categories.find(c => c.id === catId);
                    if (!cat) return null;
                    return (
                      <div key={catId} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span>{cat.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {lang === 'zh' ? cat.name : cat.nameEn}
                          </span>
                          <span className="text-xs text-gray-400">({tools.length})</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {tools.slice(0, 6).map((tool, index) => (
                            <ToolCard key={tool.id} tool={tool} index={index} />
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 p-4"
          >
            <p className="text-sm text-gray-500">{t.promptsNoResults}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
