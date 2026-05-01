'use client';

import { useState } from 'react';
import { indieHotTools } from '@/data/tools';
import { ExternalLink, Search, Sparkles, Code, Gem, Unlock, Star, Zap, Wrench, Palette, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categoryIcons: Record<string, React.ReactNode> = {
  aiCoding: <Code className="w-5 h-5" />,
  hiddenGems: <Gem className="w-5 h-5" />,
  openSourceAI: <Unlock className="w-5 h-5" />,
  githubTrending: <Star className="w-5 h-5" />,
  vibeCoding: <Sparkles className="w-5 h-5" />,
  productivity2025: <Zap className="w-5 h-5" />,
  devUtilities: <Wrench className="w-5 h-5" />,
  creativeAI: <Palette className="w-5 h-5" />,
  indieDev: <Rocket className="w-5 h-5" />,
};

const categoryNames: Record<string, string> = {
  aiCoding: '🚀 AI 编程神器',
  hiddenGems: '💎 隐藏宝石',
  openSourceAI: '🔓 开源 AI',
  githubTrending: '⭐ GitHub 热门',
  vibeCoding: '✨ Vibe Coding',
  productivity2025: '⚡ 2025 效率神器',
  devUtilities: '🔧 开发者利器',
  creativeAI: '🎨 创意 AI',
  indieDev: '🛠️ 独立开发者',
};

const categoryDescriptions: Record<string, string> = {
  aiCoding: 'AI 驱动的编程工具，让编码更高效',
  hiddenGems: '小众但强大的工具，解决特定问题',
  openSourceAI: '可本地部署的开源 AI 工具',
  githubTrending: 'GitHub 上增长最快的项目',
  vibeCoding: '用自然语言生成代码的新范式',
  productivity2025: '2025 年最新效率提升工具',
  devUtilities: '开发者日常必备的工具',
  creativeAI: 'AI 驱动的创意和设计工具',
  indieDev: '独立开发者和小团队的最爱',
};

export default function IndieHotPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 获取所有工具
  const allTools = Object.entries(indieHotTools).flatMap(([category, tools]) =>
    tools.map((tool) => ({ ...tool, category }))
  );

  // 搜索过滤
  const filteredTools = searchQuery
    ? allTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : selectedCategory
    ? indieHotTools[selectedCategory as keyof typeof indieHotTools] || []
    : allTools;

  // 按分类分组
  const groupedTools = selectedCategory
    ? { [selectedCategory]: filteredTools }
    : Object.entries(indieHotTools).reduce((acc, [category, tools]) => {
        const filtered = tools.filter(
          (tool) =>
            !searchQuery ||
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length > 0) {
          acc[category] = filtered;
        }
        return acc;
      }, {} as Record<string, typeof filteredTools>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                ToolHub
              </Link>
              <span className="text-gray-400">/</span>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">小众热门</h1>
            </div>
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 py-16 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">小众但强大</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            发现隐藏的宝藏工具
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            从 Reddit、Product Hunt、GitHub、Twitter 等平台精选的小众热门工具，
            涵盖 AI 编程、开源项目、效率工具等多个领域
          </p>
          
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索工具..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !selectedCategory
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            全部
          </button>
          {Object.keys(indieHotTools).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {categoryIcons[category]}
              {categoryNames[category]}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {Object.entries(groupedTools).map(([category, tools]) => (
          <div key={category} className="mb-12">
            {!selectedCategory && (
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                    {categoryIcons[category]}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {categoryNames[category]}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-11">
                  {categoryDescriptions[category]}
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                      {tool.icon ? (
                        <Image
                          src={tool.icon}
                          alt={tool.name}
                          width={40}
                          height={40}
                          className="w-8 h-8 object-contain"
                          unoptimized
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="text-xl">🔧</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors truncate">
                          {tool.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                        {tool.desc}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {tool.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              没有找到相关工具
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              尝试其他搜索词或浏览其他分类
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>数据来源：Reddit、Product Hunt、GitHub、Twitter/X、Indie Hackers</p>
          <p className="mt-2">© 2025 ToolHub - 发现最好用的工具</p>
        </div>
      </footer>
    </div>
  );
}
