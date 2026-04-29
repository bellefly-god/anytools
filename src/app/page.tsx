import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { CategoryNav, CategoryGrid } from '@/components/CategoryNav';
import { ToolGrid } from '@/components/ToolCard';
import { GitHubTrendingCompact } from '@/components/GitHubTrending';
import { tools, categories, getFeaturedTools, getToolsByCategory } from '@/data/tools';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredTools = getFeaturedTools();
  const aiTools = getToolsByCategory('ai-tools').slice(0, 8);
  const devTools = getToolsByCategory('dev-tools').slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm text-blue-700 dark:text-blue-300 mb-4">
            <Sparkles className="w-4 h-4" />
            发现优质工具
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            发现最好的工具
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            精选 AI、开发、设计、效率工具，帮你找到最适合的工具
          </p>
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar />
          </div>
          <p className="text-sm text-gray-500">
            已收录 <span className="font-semibold text-gray-700 dark:text-gray-300">{tools.length}</span> 个工具 · <span className="font-semibold text-gray-700 dark:text-gray-300">{categories.length}</span> 个分类
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CategoryNav />
        </div>
      </section>

      {/* GitHub Trending - 精简版 */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GitHubTrendingCompact />
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>✨</span>
              精选推荐
            </h2>
          </div>
          <ToolGrid tools={featuredTools.slice(0, 8)} />
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>🤖</span>
              AI 工具
            </h2>
            <Link
              href="/category/ai-tools"
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              查看更多
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ToolGrid tools={aiTools} />
        </div>
      </section>

      {/* Dev Tools */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>👨‍💻</span>
              开发者工具
            </h2>
            <Link
              href="/category/dev-tools"
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              查看更多
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ToolGrid tools={devTools} />
        </div>
      </section>

      {/* All Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>📂</span>
              全部分类
            </h2>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            AnyTools - 发现最好的工具
          </p>
          <p className="text-sm text-gray-500 mt-2">
            收录 {tools.length} 个工具 · {categories.length} 个分类
          </p>
        </div>
      </footer>
    </div>
  );
}
