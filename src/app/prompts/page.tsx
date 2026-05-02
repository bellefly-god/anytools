'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Search, Sparkles, TrendingUp, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import {
  prompts,
  promptCategories,
  getPromptsByCategory,
  getFeaturedPrompts,
  searchPrompts,
  type Prompt
} from '@/data/prompts';
import { useLanguage } from '@/contexts/LanguageContext';

// 提示词卡片组件
function PromptCard({ prompt, index = 0 }: { prompt: Prompt; index?: number }) {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const category = promptCategories.find((c) => c.id === prompt.category);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
    >
      <Card className="h-full hover:shadow-md transition-all duration-200 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {category && (
                  <span className="text-lg">{category.icon}</span>
                )}
                <CardTitle className="text-base font-medium">
                  {lang === 'zh' ? prompt.title : (prompt.titleEn || prompt.title)}
                </CardTitle>
                {prompt.hot && (
                  <span className="flex items-center gap-0.5 text-xs text-orange-500">
                    <TrendingUp className="w-3 h-3" />
                    热门
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {lang === 'zh' ? prompt.description : (prompt.descriptionEn || prompt.description)}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          {/* 标签 */}
          <div className="flex flex-wrap gap-1 mb-3">
            {prompt.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
            {prompt.model && (
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  backgroundColor: `${category?.color}15`,
                  color: category?.color,
                }}
              >
                {prompt.model}
              </span>
            )}
          </div>

          {/* 样例图片展示 */}
          {prompt.examples && prompt.examples.length > 0 && (
            <div className="mb-3">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-2"
              >
                <Sparkles className="w-3 h-3" />
                {showExamples ? '收起样例' : '查看生成样例'}
                <ChevronDown className={`w-3 h-3 transition-transform ${showExamples ? 'rotate-180' : ''}`} />
              </button>
              
              {showExamples && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-3 mb-3"
                >
                  {prompt.examples.map((example, idx) => (
                    <div key={idx} className="space-y-2">
                      {example.image && (
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <img
                            src={example.image}
                            alt="生成样例"
                            className="w-full h-auto max-h-48 object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      {example.prompt && (
                        <div className="text-xs">
                          <span className="text-gray-500 dark:text-gray-400">提示词：</span>
                          <p className="text-gray-700 dark:text-gray-300 font-mono text-xs bg-white dark:bg-gray-800 rounded p-2 mt-1 border border-gray-200 dark:border-gray-700">
                            {example.prompt.slice(0, 200)}{example.prompt.length > 200 ? '...' : ''}
                          </p>
                        </div>
                      )}
                      {example.result && (
                        <div className="text-xs">
                          <span className="text-gray-500 dark:text-gray-400">生成效果：</span>
                          <span className="text-gray-700 dark:text-gray-300 ml-1">{example.result}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {/* 提示词预览 */}
          <div
            className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-sm font-mono whitespace-pre-wrap cursor-pointer transition-all ${
              expanded ? 'max-h-none' : 'max-h-20 overflow-hidden'
            }`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? prompt.content : prompt.content.slice(0, 150) + '...'}
          </div>

          {/* 操作按钮 */}
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
            >
              {expanded ? '收起' : '展开'}
              <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  已复制
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  复制提示词
                </>
              )}
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PromptsPage() {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPrompts = searchQuery
    ? searchPrompts(searchQuery)
    : activeCategory
    ? getPromptsByCategory(activeCategory)
    : prompts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full text-sm text-purple-700 dark:text-purple-300 mb-4">
            <Sparkles className="w-4 h-4" />
            AI 提示词库
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {lang === 'zh' ? '优质 AI 提示词集合' : 'Quality AI Prompts Collection'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            {lang === 'zh'
              ? '精选高质量提示词，覆盖文本、图片、视频、编程等多个领域，助你更好地使用 AI'
              : 'Curated high-quality prompts covering text, image, video, coding and more to help you use AI better'}
          </p>

          {/* 搜索框 */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={lang === 'zh' ? '搜索提示词...' : 'Search prompts...'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveCategory(null);
              }}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* 分类导航 */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => {
                setActiveCategory(null);
                setSearchQuery('');
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !activeCategory && !searchQuery
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {lang === 'zh' ? '全部' : 'All'} ({prompts.length})
            </button>
            {promptCategories.map((category) => {
              const count = getPromptsByCategory(category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery('');
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{lang === 'zh' ? category.name : category.nameEn}</span>
                  <span className="text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 提示词列表 */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 结果统计 */}
          <div className="mb-4 text-sm text-gray-500">
            {lang === 'zh' ? '找到' : 'Found'} {filteredPrompts.length} {lang === 'zh' ? '个提示词' : 'prompts'}
          </div>

          {/* 提示词网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPrompts.map((prompt, index) => (
              <PromptCard key={prompt.id} prompt={prompt} index={index} />
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              {lang === 'zh' ? '没有找到相关提示词' : 'No prompts found'}
            </div>
          )}
        </div>
      </section>

      {/* 来源说明 */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>📚</span>
            {lang === 'zh' ? '提示词来源' : 'Prompt Sources'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {lang === 'zh'
              ? '本提示词库整理自以下优质资源，持续更新中：'
              : 'This prompt collection is curated from the following quality resources, continuously updated:'}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              FlowGPT
            </span>
            <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              PromptBase
            </span>
            <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              Civitai
            </span>
            <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              OpenAI 官方示例
            </span>
            <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              Midjourney 官方文档
            </span>
            <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              GitHub 热门项目
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
