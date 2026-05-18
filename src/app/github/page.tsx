import type { Metadata } from 'next';
import { GitHubPageClient } from './GitHubPageClient';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'GitHub 热门仓库、MCP、Skills 与 AI Rules',
  description:
    '查看 GitHub Stars 榜、增长榜，以及 MCP Servers、Agent Skills、Prompt Engineering / AI Rules 等开发者 AI 热门专题。',
  alternates: {
    canonical: absoluteUrl('/github'),
  },
  openGraph: {
    title: 'GitHub 热门仓库、MCP、Skills 与 AI Rules',
    description:
      '不只看排行榜，也整理开发者现在最关注的 MCP、AI skills、prompt engineering 和规则型资源。',
    url: absoluteUrl('/github'),
    type: 'website',
  },
};

export default function GitHubPage() {
  return <GitHubPageClient />;
}
