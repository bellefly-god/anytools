import { Header } from '@/components/Header';
import { CategoryNav } from '@/components/CategoryNav';
import { ToolGrid } from '@/components/ToolCard';
import { getToolsByCategory, getCategoryById, categories } from '@/data/tools';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CategoryClient } from './CategoryClient';

interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = getCategoryById(id);
  
  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(id);

  // 按子分类分组
  const subCategories = [...new Set(tools.map((t) => t.subCategory).filter(Boolean))];

  return (
    <CategoryClient 
      category={category} 
      tools={tools} 
      subCategories={subCategories as string[]}
      activeCategory={id}
    />
  );
}
