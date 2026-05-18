import type { Metadata } from 'next';
import { PromptsPageClient } from './PromptsPageClient';
import { absoluteUrl } from '@/lib/site';

type PromptsPageProps = {
  searchParams: Promise<{ media?: string }>;
};

export const metadata: Metadata = {
  title: 'AI 提示词库 | 图片提示词、视频提示词与案例拆解',
  description:
    '浏览图片提示词、视频提示词和 AI 创作案例，覆盖 Midjourney、GPT Image、Stable Diffusion、Sora、Runway、Kling，并附带结果展示、完整 prompt 与拆解思路。',
  alternates: {
    canonical: absoluteUrl('/prompts'),
  },
  openGraph: {
    title: 'AI 提示词库 | 图片提示词、视频提示词与案例拆解',
    description:
      '精选图片提示词和视频提示词案例，适合做 Midjourney、Sora、Runway 等模型的灵感参考和 SEO 长尾内容入口。',
    url: absoluteUrl('/prompts'),
    type: 'website',
  },
};

export default async function PromptsPage({ searchParams }: PromptsPageProps) {
  const { media } = await searchParams;
  const initialMediaType =
    media === 'image' || media === 'video' ? media : 'all';

  return <PromptsPageClient initialMediaType={initialMediaType} />;
}
