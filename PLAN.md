# ToolHub - 工具导航平台项目规划

> 项目代号：ToolHub
> 创建时间：2026-04-29
> 更新时间：2026-04-29
> 状态：规划阶段

---

## 一、项目定位

**一站式工具导航平台**

不仅仅是工具，还包括：
- 🛠️ 实用工具
- 🌐 热门网站
- 🤖 AI 模型
- 📊 GitHub 榜单

**目标用户**
- 独立开发者
- AI 从业者
- Web3 爱好者
- 效率追求者
- 普通用户

---

## 二、核心分类

### 1. 🏠 生活小工具
- 图片压缩/格式转换
- PDF 处理
- 视频下载
- 二维码生成
- 翻译工具
- 汇率计算
- 天气查询

### 2. 🤖 AI 工具
**对话模型**
- Claude (Anthropic)
- ChatGPT (OpenAI)
- Gemini (Google)
- Grok (xAI)
- Llama (Meta)
- Mistral
- DeepSeek

**AI 绘图**
- Midjourney
- DALL-E 3
- Stable Diffusion
- Leonardo AI
- Flux
- Ideogram

**AI 视频**
- Runway
- Pika
- Sora
- HeyGen
- D-ID

**AI 音频**
- ElevenLabs (语音合成)
- Suno (AI 音乐)
- Whisper (语音转文字)
- Podcastle

**AI 编程**
- Cursor
- GitHub Copilot
- Claude Code
- v0.dev
- Bolt.new
- Lovable

### 3. 📄 文档处理工具
- Notion
- Google Docs
- Microsoft 365
- 飞书文档
- 语雀
- Obsidian
- Logseq
- Craft

### 4. ⚡ 效率工具
- Raycast
- Arc Browser
- Alfred
- Rectangle
- CleanShot X
- 1Password
- Superhuman
- Linear

### 5. 📈 营销工具
- Google Analytics
- Plausible
- Canva
- Buffer
- Hootsuite
- Mailchimp
- TinyPNG
- Coolors

### 6. 🎨 绘图设计工具
- Figma
- Sketch
- Adobe XD
- Canva
- Photopea
- Excalidraw
- tldraw
- Diagrams.net

### 7. 👨‍💻 独立开发者工具

**部署平台**
- Vercel
- Cloudflare Pages
- Netlify
- Railway
- Render
- Fly.io
- Supabase

**数据库**
- Supabase
- PlanetScale
- Neon (Postgres)
- Upstash (Redis)
- Turso
- MongoDB Atlas

**支付**
- Stripe
- LemonSqueezy
- Paddle
- Gumroad

**邮件**
- Resend
- SendGrid
- Postmark
- Mailgun

**监控**
- Sentry
- LogRocket
- Better Stack
- Updown.io

**域名**
- Namecheap
- Porkbun
- Cloudflare Domains

**其他**
- Plausible (分析)
- Crisp (客服)
- Cal.com (预约)
- Dub.co (短链)

### 8. 🌐 Web3 工具平台

**开发框架**
- Hardhat
- Foundry
- Wagmi
- Viem
- Ethers.js
- Solana SDK

**测试网**
- Alchemy
- Infura
- QuickNode
- Ankr

**钱包**
- MetaMask
- Rainbow
- Phantom
- WalletConnect

**NFT**
- OpenSea
- Magic Eden
- Zora
- Manifold

**DeFi**
- Uniswap
- Aave
- Lido
- Curve

**数据**
- Dune Analytics
- Nansen
- DefiLlama
- Etherscan

**安全**
- OpenZeppelin
- Revoke.cash
- Wallet Guard

### 9. 🤖 AI 模型导航

**大语言模型**
| 模型 | 公司 | 特点 | 链接 |
|------|------|------|------|
| Claude 4 | Anthropic | 最强编程 | claude.ai |
| GPT-4o | OpenAI | 多模态 | openai.com |
| Gemini 2.5 | Google | 长上下文 | gemini.google.com |
| Grok 3 | xAI | 实时信息 | x.ai |
| Llama 4 | Meta | 开源 | llama.meta.com |
| DeepSeek V3 | DeepSeek | 性价比 | deepseek.com |
| Mistral Large | Mistral | 欧洲 AI | mistral.ai |
| Qwen 3 | 阿里 | 中文强 | tongyi.aliyun.com |

**绘图模型**
| 模型 | 公司 | 特点 | 链接 |
|------|------|------|------|
| DALL-E 3 | OpenAI | 文字理解强 | openai.com |
| Midjourney v7 | Midjourney | 艺术感 | midjourney.com |
| Stable Diffusion 3 | Stability | 开源 | stability.ai |
| Flux | Black Forest | 写实 | flux1.ai |
| Ideogram 2 | Ideogram | 文字渲染 | ideogram.ai |

**视频模型**
- Sora (OpenAI)
- Runway Gen-3
- Pika 2
- Kling (快手)
- Hailuo (MiniMax)

**音频模型**
- Whisper (OpenAI)
- ElevenLabs
- Suno
- Udio

---

## 三、GitHub 榜单

### 每周功能

#### 1. GitHub 热门 Top 10
- 每周 stars 增长最多的项目
- 自动更新
- 分类展示

#### 2. 增长最快榜单
- 周增长率排名
- 新星项目发现
- 趋势预测

#### 3. 分类榜单
- 前端热门
- AI/ML 热门
- Web3 热门
- 工具类热门
- 新星项目

### 数据来源
- GitHub Trending API
- GitHub Stars History
- 手动精选补充

### 更新频率
- 每周一自动更新
- 手动可触发刷新

---

## 四、页面结构

```
/                           # 首页 - 精选推荐 + 分类入口
/ai-tools                   # AI 工具
/ai-models                  # AI 模型导航
/dev-tools                  # 独立开发者工具
/web3-tools                 # Web3 工具
/productivity               # 效率工具
/design                     # 绘图设计
/marketing                  # 营销工具
/documents                  # 文档处理
/life-tools                 # 生活小工具
/github/trending            # GitHub 榜单
/github/fastest-growing     # 增长最快
/tool/[slug]                # 工具详情
/search                     # 搜索
/submit                     # 提交工具
/about                      # 关于
```

---

## 五、首页布局

```
┌─────────────────────────────────────────────────────────┐
│  🛠️ ToolHub          [🔍 搜索...]          🌙 登录     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │     发现最好的工具，提升你的效率                 │   │
│  │     [🔍 搜索工具、网站、AI模型...]               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  🔥 本周热门                                            │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐           │
│  │ 🤖 │ │ 💻 │ │ 🎨 │ │ ⚡ │ │ 🌐 │ │ 📊 │           │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  📊 GitHub 周榜                            [查看更多 →] │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 1. anthropics/claude-code    ⭐ +15,000  ⬆️     │   │
│  │ 2. openclaw/openclaw         ⭐ +12,000  ⬆️     │   │
│  │ 3. ...                                          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  🤖 AI 工具                               [查看更多 →] │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                 │
│  │ Claude│ │ChatGPT│ │Cursor│ │Midjourney│            │
│  │ 对话  │ │ 对话  │ │ 编程 │ │  绘图  │              │
│  └──────┘ └──────┘ └──────┘ └──────┘                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  👨‍💻 独立开发者工具                       [查看更多 →] │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                 │
│  │Vercel│ │Supabase│ │Stripe│ │Resend│               │
│  └──────┘ └──────┘ └──────┘ └──────┘                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  🌐 Web3 工具                             [查看更多 →] │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                 │
│  │Alchemy│ │MetaMask│ │Uniswap│ │Dune│               │
│  └──────┘ └──────┘ └──────┘ └──────┘                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 六、数据结构

### 分类 (Category)

```typescript
interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  order: number;
  count: number;  // 工具数量
}
```

### 工具/网站/模型 (Tool)

```typescript
interface Tool {
  id: string;
  name: string;
  description: string;
  detail: string;
  url: string;
  icon?: string;
  screenshot?: string;
  category: string;
  subCategory?: string;
  tags: string[];
  
  // 定价
  pricing: 'free' | 'freemium' | 'paid' | 'open-source';
  
  // 平台
  platform: ('web' | 'mac' | 'windows' | 'linux' | 'ios' | 'android')[];
  
  // 标记
  featured: boolean;
  hot: boolean;
  new: boolean;
  
  // 统计 (可选)
  stars?: number;
  weeklyGrowth?: number;
  
  // 类型
  type: 'tool' | 'website' | 'ai-model' | 'library';
  
  createdAt: string;
  updatedAt: string;
}
```

### GitHub 榜单 (GitHubTrending)

```typescript
interface GitHubTrending {
  week: string;  // 2026-W18
  updatedAt: string;
  
  top10: {
    rank: number;
    repo: string;
    description: string;
    stars: number;
    weeklyGrowth: number;
    growthRate: number;
    language: string;
    url: string;
  }[];
  
  fastestGrowing: {
    rank: number;
    repo: string;
    description: string;
    stars: number;
    weeklyGrowth: number;
    growthRate: number;
    language: string;
    url: string;
  }[];
  
  byCategory: {
    frontend: Repo[];
    ai: Repo[];
    web3: Repo[];
    tools: Repo[];
    rising: Repo[];
  };
}
```

---

## 七、技术方案

### 部署选择

| 方案 | 平台 | 数据库 | 成本 |
|------|------|--------|------|
| **推荐** | Vercel | 静态 JSON + Vercel KV | 免费 |
| 备用 | Cloudflare | D1 + R2 | 免费 |

### 技术栈

```
框架:     Next.js 16 (App Router)
语言:     TypeScript
样式:     Tailwind CSS v4
动画:     Framer Motion
UI:       shadcn/ui
图标:     Lucide Icons
数据:     静态 JSON
搜索:     FlexSearch (客户端)
分析:     Google Analytics 4
部署:     Vercel
```

### GitHub 榜单数据获取

**方案 1: 构建时获取**
```typescript
// scripts/fetch-github-trending.ts
// 每周构建时自动运行
// 数据存入 JSON 文件
```

**方案 2: API 实时获取**
```typescript
// app/api/github/trending/route.ts
// 使用 GitHub API
// 缓存 1 小时
```

**方案 3: GitHub Actions 自动更新**
```yaml
# .github/workflows/update-trending.yml
# 每周一自动运行
# 提交更新到仓库
```

---

## 八、功能清单

### MVP (Week 1)

- [x] 项目规划
- [ ] 项目初始化
- [ ] 数据结构设计
- [ ] 工具数据录入 (100+)
- [ ] 首页布局
- [ ] 分类页面
- [ ] 工具详情页
- [ ] 搜索功能
- [ ] 响应式设计
- [ ] Google Analytics

### 增强 (Week 2)

- [ ] GitHub 榜单集成
- [ ] 每周自动更新
- [ ] 主题切换
- [ ] 收藏功能
- [ ] 动画优化

### 运营 (Week 3+)

- [ ] 工具提交入口
- [ ] RSS 订阅
- [ ] Sitemap
- [ ] SEO 优化
- [ ] 社交分享

---

## 九、数据录入计划

### Phase 1: 核心数据 (100+)

| 分类 | 数量 | 来源 |
|------|------|------|
| AI 工具 | 30 | 产品网站 |
| AI 模型 | 20 | 官方文档 |
| 开发者工具 | 25 | 个人经验 |
| Web3 工具 | 15 | Web3 生态 |
| 效率工具 | 10 | 推荐 |

### Phase 2: 扩展数据 (200+)

- 生活小工具
- 文档处理
- 营销工具
- 绘图设计

### Phase 3: GitHub 榜单

- 自动获取
- 手动精选补充

---

## 十、立即开始

**下一步行动：**

1. 创建项目 - `npx create-next-app@latest toolhub`
2. 配置 Tailwind + shadcn/ui
3. 录入初始数据
4. 开发首页

要我现在开始吗？
