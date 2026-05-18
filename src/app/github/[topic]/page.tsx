import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TopicPageClient } from './TopicPageClient';
import { getGitHubTopicCollection, githubTopicCollections } from '@/data/github-topics';
import { absoluteUrl } from '@/lib/site';

type TopicPageProps = {
  params: Promise<{ topic: string }>;
};

export async function generateStaticParams() {
  return githubTopicCollections.map((topic) => ({ topic: topic.id }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { topic: topicId } = await params;
  const topic = getGitHubTopicCollection(topicId);

  if (!topic) {
    return {
      title: 'GitHub Topic Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${topic.title} | AnyTools`,
    description: topic.seoDescription,
    alternates: {
      canonical: absoluteUrl(`/github/${topic.id}`),
    },
    openGraph: {
      title: `${topic.title} | AnyTools`,
      description: topic.seoDescription,
      url: absoluteUrl(`/github/${topic.id}`),
      type: 'article',
    },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic: topicId } = await params;
  const topic = getGitHubTopicCollection(topicId);

  if (!topic) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: topic.title,
    description: topic.seoDescription,
    url: absoluteUrl(`/github/${topic.id}`),
    about: topic.searchTerms,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopicPageClient topic={topic} />
    </>
  );
}
