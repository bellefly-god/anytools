import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { CategoryNav, CategoryGrid } from '@/components/CategoryNav';
import { ToolGrid } from '@/components/ToolCard';
import { GitHubTrending, FastestGrowing } from '@/components/GitHubTrending';
import { tools, categories, getFeaturedTools, getToolsByCategory } from '@/data/tools';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredTools = getFeaturedTools();
  const aiTools = getToolsByCategory('ai-tools').slice(0, 8);
  const devTools = getToolsByCategory('dev-tools').slice(0, 8);
  const web3Tools = getToolsByCategory('web3-tools').slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            发现最好的工具
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            精选 AI、开发、设计、效率工具，帮你找到最适合的工具
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CategoryNav />
        </div>
      </section>

      {/* GitHub Trending */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <GitHubTrending limit={5} />
            <FastestGrowing />
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>🔥</span>
              精选推荐
            </h2>
          </div>
          <ToolGrid tools={featuredTools.slice(0, 8)} />
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
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

      {/* Web3 Tools */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span>🌐</span>
              Web3 工具
            </h2>
            <Link
              href="/category/web3-tools"
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              查看更多
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ToolGrid tools={web3Tools} />
        </div>
      </section>

      {/* All Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
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
          <p className="text-gray-600 dark:text-gray-400">
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
