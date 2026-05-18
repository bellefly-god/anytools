import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolById, tools } from '@/data/tools';
import { ToolDetailClient } from './ToolDetailClient';
import { absoluteUrl } from '@/lib/site';

type ToolPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return tools.slice(0, 150).map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { id } = await params;
  const tool = getToolById(id);

  if (!tool) {
    return {
      title: 'Tool Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${tool.name} | 工具详情`,
    description: tool.descriptionEn || tool.description,
    alternates: {
      canonical: absoluteUrl(`/tool/${tool.id}`),
    },
    openGraph: {
      title: `${tool.name} | AnyTools`,
      description: tool.descriptionEn || tool.description,
      url: absoluteUrl(`/tool/${tool.id}`),
      type: 'article',
      images: tool.icon ? [{ url: tool.icon, alt: tool.name }] : undefined,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { id } = await params;
  const tool = getToolById(id);

  if (!tool) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.descriptionEn || tool.description,
    url: tool.url,
    applicationCategory: tool.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolDetailClient tool={tool} />
    </>
  );
}
