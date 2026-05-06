// 精选和热门工具的英文翻译映射
export const toolTranslations: Record<string, { nameEn?: string; descriptionEn: string }> = {
  // AI 对话
  "claude": { descriptionEn: "Best AI for coding" },
  "chatgpt": { descriptionEn: "Smartest conversational AI" },
  "gemini": { descriptionEn: "1M token context window" },
  "grok": { descriptionEn: "Real-time web search" },
  "perplexity": { descriptionEn: "Precise AI search answers" },
  "deepseek": { descriptionEn: "Best value AI model" },
  "kimi": { descriptionEn: "Chinese long-text champion" },
  "komo-search": { descriptionEn: "Privacy-focused AI search" },
  "monica-ai": { descriptionEn: "Browser AI assistant" },
  
  // AI 绘图
  "midjourney": { descriptionEn: "Most artistic AI imaging" },
  "dalle": { descriptionEn: "DALL-E strong text understanding" },
  "ideogram": { descriptionEn: "Most accurate text rendering" },
  "krea-ai": { descriptionEn: "AI image enhancement" },
  "civitai-models": { descriptionEn: "AI model community" },
  
  // AI 编程
  "cursor": { descriptionEn: "Smartest code editor" },
  "claude-code": { descriptionEn: "CLI AI coding" },
  "v0": { descriptionEn: "Vercel UI generator" },
  "bolt": { descriptionEn: "Full-stack app in one prompt" },
  
  // AI 视频
  "runway": { descriptionEn: "Gen-3 best video generation" },
  "sora": { descriptionEn: "OpenAI video model" },
  "heygen": { descriptionEn: "Most natural AI avatar video" },
  
  // AI 音频
  "elevenlabs": { descriptionEn: "Most natural AI voice" },
  "suno": { descriptionEn: "AI song creation sensation" },
  "udio": { descriptionEn: "Professional AI music" },
  "whisper-web": { descriptionEn: "Free speech-to-text" },
  "rask-ai": { descriptionEn: "Video translation & dubbing" },
  
  // AI 模型
  "claude-4": { descriptionEn: "Claude 4 best for coding" },
  "gpt-4o": { descriptionEn: "GPT-4o multimodal leader" },
  "gemini-2": { descriptionEn: "Gemini 2M token context" },
  
  // 开发者工具 - 部署
  "vercel": { descriptionEn: "Official Next.js hosting" },
  "cloudflare-pages": { descriptionEn: "Cloudflare global CDN" },
  "railway": { descriptionEn: "Database-in-one deployment" },
  "coolify": { descriptionEn: "Open-source self-hosted" },
  "zeabur": { descriptionEn: "One-click deployment" },
  
  // 开发者工具 - 数据库
  "supabase": { descriptionEn: "Open-source PostgreSQL backend" },
  "neon": { descriptionEn: "Serverless Postgres" },
  "mongodb-atlas": { descriptionEn: "MongoDB cloud service" },
  "convex": { descriptionEn: "Real-time backend platform" },
  "pocketbase": { descriptionEn: "Single-file backend" },
  
  // 开发者工具 - 支付
  "stripe": { descriptionEn: "Developer-first payments" },
  "paypal": { descriptionEn: "World's largest payment platform" },
  "lemon-squeezy": { descriptionEn: "No company needed to accept payments" },
  "creem": { descriptionEn: "AI-native payments" },
  "polar": { descriptionEn: "Developer-first payments" },
  
  // 开发者工具 - 邮件/监控
  "resend": { descriptionEn: "Developer email API" },
  "loops": { descriptionEn: "Modern email service" },
  "sentry": { descriptionEn: "Error & performance monitoring" },
  "posthog": { descriptionEn: "Open-source product analytics" },
  
  // 开发者工具 - 认证
  "auth0": { descriptionEn: "Enterprise auth platform" },
  "clerk": { descriptionEn: "Best developer experience" },
  "kinde": { descriptionEn: "All-in-one auth solution" },
  "stack-auth": { descriptionEn: "Simple auth solution" },
  
  // 开发者工具 - 存储/CDN
  "porkbun": { descriptionEn: "Cheapest domains" },
  "aws-s3": { descriptionEn: "Pioneer object storage" },
  "cloudflare-r2": { descriptionEn: "Zero egress fee storage" },
  "uploadthing": { descriptionEn: "Next.js file upload" },
  "cloudflare-cdn": { descriptionEn: "Free CDN acceleration" },
  "turnstile": { descriptionEn: "Cloudflare free CAPTCHA" },
  
  // 开发者工具 - API/测试
  "postman": { descriptionEn: "API testing tool" },
  "bruno": { descriptionEn: "Open-source API client" },
  "cal-com": { descriptionEn: "Open-source scheduling" },
  "dub": { descriptionEn: "Open-source link shortener" },
  "algolia": { descriptionEn: "Search as a service" },
  "meilisearch": { descriptionEn: "Open-source search engine" },
  "google-maps": { descriptionEn: "Most comprehensive maps" },
  "playwright": { descriptionEn: "Microsoft E2E testing" },
  "cypress": { descriptionEn: "Frontend E2E testing" },
  "vitest": { descriptionEn: "Vite-native testing" },
  
  // 开发者工具 - 分析
  "google-analytics": { descriptionEn: "Free web analytics" },
  "plausible": { descriptionEn: "Privacy-friendly analytics" },
  
  // 营销工具
  "ahrefs": { descriptionEn: "Best SEO analysis tool" },
  "semrush": { descriptionEn: "All-in-one SEO tool" },
  "surferseo": { descriptionEn: "Content SEO optimization" },
  "buffer": { descriptionEn: "Social media scheduling" },
  "hootsuite": { descriptionEn: "All-in-one social management" },
  "jasper": { descriptionEn: "AI content generation" },
  "copy-ai": { descriptionEn: "AI copywriting" },
  "grammarly": { descriptionEn: "AI grammar checker" },
  
  // 效率工具
  "linear": { descriptionEn: "Minimalist project management" },
  "asana": { descriptionEn: "Team project management" },
  "monday": { descriptionEn: "Work operating system" },
  "notion": { descriptionEn: "All-in-one workspace" },
  "typeform": { descriptionEn: "Conversational forms" },
  "jotform": { descriptionEn: "Online form builder" },
  "tally": { descriptionEn: "Free form builder" },
  "1password": { descriptionEn: "Best password manager" },
  "bitwarden": { descriptionEn: "Open-source password manager" },
  "calendly": { descriptionEn: "Top scheduling tool" },
  "gamma": { descriptionEn: "AI presentations" },
  "chatbase": { descriptionEn: "AI chatbot builder" },
  
  // 设计工具
  "figma": { descriptionEn: "UI design standard" },
  "canva": { descriptionEn: "Online design platform" },
  "framer": { descriptionEn: "Web design & development" },
  "photoshop": { descriptionEn: "Industry-standard image editor" },
  "excalidraw": { descriptionEn: "Hand-drawn style diagrams" },
  "iconify": { descriptionEn: "100K+ icons library" },
  "coolors": { descriptionEn: "Color palette generator" },
  "flaticon": { descriptionEn: "Icon library" },
  "font-awesome": { descriptionEn: "Icon font library" },
  "lucide": { descriptionEn: "Open-source icons" },
  
  // 文档工具
  "obsidian": { descriptionEn: "Local-first knowledge base" },
  "gitbook": { descriptionEn: "Technical documentation" },
  "mintlify": { descriptionEn: "Modern documentation" },
  
  // Web3 工具
  "hardhat": { descriptionEn: "Top Solidity development" },
  "foundry": { descriptionEn: "Fastest Rust compiler" },
  "wagmi": { descriptionEn: "React wallet development" },
  "alchemy": { descriptionEn: "Alchemy node API" },
  "metamask": { descriptionEn: "Most popular Ethereum wallet" },
  "phantom": { descriptionEn: "Top Solana ecosystem wallet" },
  "uniswap": { descriptionEn: "Leading DEX protocol" },
  "opensea": { descriptionEn: "NFT marketplace leader" },
  "dune": { descriptionEn: "SQL analytics for blockchain" },
  
  // 效率启动器
  "raycast": { descriptionEn: "Mac productivity launcher" },
  "flow-voice": { descriptionEn: "Mac voice input tool" },
  "plurai": { descriptionEn: "AI productivity suite" },
  "altar": { descriptionEn: "AI notes & research" },
  "strawberry-ai": { descriptionEn: "Web research automation" },
  "arc": { descriptionEn: "Spatial concept browser" },
  
  // 分析工具
  "fathom": { descriptionEn: "Simple privacy analytics" },
  "umami": { descriptionEn: "Open-source web analytics" },
  "hotjar": { descriptionEn: "Heatmaps & user behavior" },
  "microsoft-clarity": { descriptionEn: "Free heatmaps & recordings" },
  
  // 社媒工具
  "typefully": { descriptionEn: "Twitter/X content tool" },
  "hypefury": { descriptionEn: "Twitter growth tool" },
  "convertkit": { descriptionEn: "Creator email marketing" },
  "buttondown": { descriptionEn: "Simple newsletter" },
  
  // 其他工具
  "featurebase": { descriptionEn: "Feature request voting" },
  "crisp": { descriptionEn: "Website live chat" },
  "pdf-ai": { descriptionEn: "PDF intelligent reading" },
  "supernormal": { descriptionEn: "AI meeting notes" },
  
  // 学习平台
  "coursera": { descriptionEn: "Top university courses" },
  "udemy": { descriptionEn: "Practical skills courses" },
  "edx": { descriptionEn: "Harvard MIT free courses" },
  "codecademy": { descriptionEn: "Interactive coding learning" },
  "freecodecamp": { descriptionEn: "Free coding bootcamp" },
  "datacamp": { descriptionEn: "Data science learning" },
  "kaggle-learn": { descriptionEn: "AI/ML practical tutorials" },
  "mit-ocw": { descriptionEn: "MIT free open courses" },
  "khan-academy": { descriptionEn: "Free education for all" },
  
  // 推广平台
  "product-hunt": { descriptionEn: "Product launch platform" },
  "indie-hackers": { descriptionEn: "Indie developer community" },
  "hacker-news": { descriptionEn: "YC tech news community" },
  "y-combinator": { descriptionEn: "Top startup accelerator" },
  "futurepedia": { descriptionEn: "AI tools directory" },
  "there-is-an-ai": { descriptionEn: "AI tools search engine" },
  
  // 在线工具
  "tiny-png": { descriptionEn: "PNG/JPG smart compression" },
  "squoosh": { descriptionEn: "Google image compression" },
  "remove-bg": { descriptionEn: "One-click background removal" },
  "photopea": { descriptionEn: "Online PS image editor" },
  "ilovepdf": { descriptionEn: "PDF all-in-one tools" },
  "smallpdf": { descriptionEn: "Simple PDF toolkit" },
  "pdf24": { descriptionEn: "Free PDF toolkit" },
  "json-editor-online": { descriptionEn: "Online JSON editor & formatter" },
  "jq-play": { descriptionEn: "jq command online tester" },
  "jwt-io": { descriptionEn: "JWT token debugger" },
  "regex101": { descriptionEn: "Best regex tester" },
  "crontab-guru": { descriptionEn: "Cron expression generator" },
  "1024tools": { descriptionEn: "Developer tools collection" },
  "uutool": { descriptionEn: "200+ online tools" },
  "ocr-space": { descriptionEn: "Free image to text OCR" },
  "qr-code-monkey": { descriptionEn: "Free QR code generator" },
  
  // AI 编程工具
  "windsurf": { descriptionEn: "Deep AI integration" },
  "github-copilot": { descriptionEn: "Best code completion" },
  "void-editor": { descriptionEn: "Open-source AI editor" },
  "continue-dev": { descriptionEn: "VS Code AI plugin" },
  "cline": { descriptionEn: "Autonomous coding agent" },
  "kilo-code": { descriptionEn: "Open-source AI coding agent" },
  "openhands": { descriptionEn: "AI software engineer" },
  "devin-ai": { descriptionEn: "AI software engineer" },
  "trae": { descriptionEn: "ByteDance AI IDE" },
  "metaso": { descriptionEn: "Ad-free search engine" },
  "pseudorite": { descriptionEn: "Novel writing AI" },
  "lex-page": { descriptionEn: "AI writing tool" },
  
  // AI 本地部署
  "ollama": { descriptionEn: "Run models locally" },
  "comfyui": { descriptionEn: "Stable Diffusion GUI" },
  "vllm": { descriptionEn: "High-performance LLM inference" },
  "localai": { descriptionEn: "OpenAI-compatible local API" },
  "private-gpt": { descriptionEn: "Private document Q&A" },
  "open-webui": { descriptionEn: "Ollama web interface" },
  "browser-use": { descriptionEn: "AI web automation" },
  "mcp-servers": { descriptionEn: "Model Context Protocol" },
  "dify-ai": { descriptionEn: "LLM app development platform" },
  "omniparser": { descriptionEn: "Screen parsing GUI agent" },
  
  // 开发工具
  "mise-dev": { descriptionEn: "Dev tools version manager" },
  "uv-python": { descriptionEn: "Python package manager" },
  "warp": { descriptionEn: "AI terminal" },
};
