import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PromptDetailClient } from './PromptDetailClient';
import { getPromptById } from '@/data/prompts';
import { getPromptShowcaseById, promptShowcases } from '@/data/prompt-showcases';
import { absoluteUrl } from '@/lib/site';

type PromptDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return promptShowcases.map((showcase) => ({ id: showcase.id }));
}

export async function generateMetadata({ params }: PromptDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const prompt = getPromptById(id);
  const showcase = getPromptShowcaseById(id);

  if (!prompt || !showcase) {
    return {
      title: 'Prompt Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${prompt.title} | AI 提示词案例详情`,
    description: showcase.seoDescription,
    alternates: {
      canonical: absoluteUrl(`/prompts/${id}`),
    },
    openGraph: {
      title: `${prompt.title} | AnyTools`,
      description: showcase.seoDescription,
      url: absoluteUrl(`/prompts/${id}`),
      images: [
        {
          url: showcase.cover.url,
          alt: showcase.cover.alt,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${prompt.title} | AnyTools`,
      description: showcase.seoDescription,
      images: [showcase.cover.url],
    },
  };
}

export default async function PromptDetailPage({ params }: PromptDetailPageProps) {
  const { id } = await params;
  const prompt = getPromptById(id);
  const showcase = getPromptShowcaseById(id);

  if (!prompt || !showcase) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: prompt.title,
    description: showcase.seoDescription,
    url: absoluteUrl(`/prompts/${id}`),
    image: showcase.cover.url,
    keywords: prompt.tags.join(', '),
    author: {
      '@type': 'Organization',
      name: 'AnyTools',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PromptDetailClient promptId={id} />
    </>
  );
}
