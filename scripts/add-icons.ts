// 为所有工具添加图标
const fs = require('fs');

// 工具图标映射
const iconMap: Record<string, string> = {
  // AI 模型
  'claude-4': 'https://claude.ai/images/claude_app_icon.png',
  'gpt-4o': 'https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp',
  'gemini-2': 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
  'llama-4': 'https://llama.meta.com/favicon.ico',
  'mistral-large': 'https://mistral.ai/favicon.ico',
  'qwen-3': 'https://img.alicdn.com/imgextra/i1/O1CN01AKUdEM1oPxOEbizq4_!!6000000005220-2-tps-512-512.png',
  
  // 开发者工具 - 部署
  'vercel': 'https://vercel.com/favicon.ico',
  'cloudflare-pages': 'https://pages.cloudflare.com/favicon.ico',
  'netlify': 'https://www.netlify.com/favicon.ico',
  'railway': 'https://railway.app/favicon.ico',
  'render': 'https://render.com/favicon.ico',
  'fly-io': 'https://fly.io/favicon.ico',
  'supabase-hosting': 'https://supabase.com/favicon.ico',
  
  // 开发者工具 - 数据库
  'supabase': 'https://supabase.com/favicon.ico',
  'planetscale': 'https://planetscale.com/favicon.ico',
  'neon': 'https://neon.tech/favicon.ico',
  'upstash': 'https://upstash.com/favicon.ico',
  'turso': 'https://turso.tech/favicon.ico',
  'mongodb-atlas': 'https://www.mongodb.com/favicon.ico',
  
  // 开发者工具 - 支付
  'stripe': 'https://stripe.com/favicon.ico',
  'lemonsqueezy': 'https://www.lemonsqueezy.com/favicon.ico',
  'paddle': 'https://www.paddle.com/favicon.ico',
  'gumroad': 'https://gumroad.com/favicon.ico',
  'paypal': 'https://www.paypal.com/favicon.ico',
  'creem': 'https://creem.io/favicon.ico',
  
  // 开发者工具 - 邮件
  'resend': 'https://resend.com/favicon.ico',
  'sendgrid': 'https://sendgrid.com/favicon.ico',
  'postmark': 'https://postmarkapp.com/favicon.ico',
  'mailgun': 'https://www.mailgun.com/favicon.ico',
  
  // 开发者工具 - 监控
  'sentry': 'https://sentry.io/favicon.ico',
  'logrocket': 'https://logrocket.com/favicon.ico',
  'better-stack': 'https://betterstack.com/favicon.ico',
  'updown': 'https://updown.io/favicon.ico',
  
  // 开发者工具 - 域名
  'namecheap': 'https://www.namecheap.com/favicon.ico',
  'porkbun': 'https://porkbun.com/favicon.ico',
  'cloudflare-domains': 'https://www.cloudflare.com/favicon.ico',
  
  // 开发者工具 - 其他
  'plausible': 'https://plausible.io/favicon.ico',
  'crisp': 'https://crisp.chat/favicon.ico',
  'cal-com': 'https://cal.com/favicon.ico',
  'dub': 'https://dub.co/favicon.ico',
  
  // Web3 工具
  'hardhat': 'https://hardhat.org/favicon.ico',
  'foundry': 'https://getfoundry.sh/favicon.ico',
  'wagmi': 'https://wagmi.sh/favicon.ico',
  'viem': 'https://viem.sh/favicon.ico',
  'ethers': 'https://docs.ethers.org/favicon.ico',
  'solana-sdk': 'https://solana.com/favicon.ico',
  'alchemy': 'https://www.alchemy.com/favicon.ico',
  'infura': 'https://infura.io/favicon.ico',
  'quicknode': 'https://www.quicknode.com/favicon.ico',
  'ankr': 'https://www.ankr.com/favicon.ico',
  'metamask': 'https://metamask.io/favicon.ico',
  'rainbow': 'https://rainbow.me/favicon.ico',
  'phantom': 'https://phantom.app/favicon.ico',
  'walletconnect': 'https://walletconnect.com/favicon.ico',
  'opensea': 'https://opensea.io/favicon.ico',
  'magic-eden': 'https://magiceden.io/favicon.ico',
  'zora': 'https://zora.co/favicon.ico',
  'manifold': 'https://manifold.xyz/favicon.ico',
  'uniswap': 'https://uniswap.org/favicon.ico',
  'aave': 'https://aave.com/favicon.ico',
  'lido': 'https://lido.fi/favicon.ico',
  'curve': 'https://curve.fi/favicon.ico',
  'dune': 'https://dune.com/favicon.ico',
  'nansen': 'https://nansen.ai/favicon.ico',
  'defillama': 'https://defillama.com/favicon.ico',
  'etherscan': 'https://etherscan.io/favicon.ico',
  'openzeppelin': 'https://openzeppelin.com/favicon.ico',
  'revoke': 'https://revoke.cash/favicon.ico',
  'wallet-guard': 'https://www.walletguard.app/favicon.ico',
  
  // 效率工具
  'raycast': 'https://www.raycast.com/favicon.ico',
  'arc': 'https://arc.net/favicon.ico',
  'alfred': 'https://www.alfredapp.com/favicon.ico',
  'rectangle': 'https://rectangleapp.com/favicon.ico',
  'cleanshot': 'https://cleanshot.com/favicon.ico',
  '1password': 'https://1password.com/favicon.ico',
  'superhuman': 'https://superhuman.com/favicon.ico',
  'linear': 'https://linear.app/favicon.ico',
  
  // 设计工具
  'figma': 'https://www.figma.com/favicon.ico',
  'sketch': 'https://www.sketch.com/favicon.ico',
  'adobe-xd': 'https://www.adobe.com/favicon.ico',
  'canva': 'https://www.canva.com/favicon.ico',
  'photopea': 'https://www.photopea.com/favicon.ico',
  'excalidraw': 'https://excalidraw.com/favicon.ico',
  'tldraw': 'https://www.tldraw.com/favicon.ico',
  'diagrams': 'https://www.diagrams.net/favicon.ico',
  
  // 营销工具
  'google-analytics': 'https://analytics.google.com/favicon.ico',
  'plausible-analytics': 'https://plausible.io/favicon.ico',
  'canva-marketing': 'https://www.canva.com/favicon.ico',
  'buffer': 'https://buffer.com/favicon.ico',
  'hootsuite': 'https://hootsuite.com/favicon.ico',
  'mailchimp': 'https://mailchimp.com/favicon.ico',
  'tinypng': 'https://tinypng.com/favicon.ico',
  'coolors': 'https://coolors.co/favicon.ico',
  
  // 文档处理
  'notion': 'https://www.notion.so/favicon.ico',
  'google-docs': 'https://www.google.com/favicon.ico',
  'microsoft-365': 'https://www.microsoft.com/favicon.ico',
  'feishu': 'https://www.feishu.cn/favicon.ico',
  'yuque': 'https://www.yuque.com/favicon.ico',
  'obsidian': 'https://obsidian.md/favicon.ico',
  'logseq': 'https://logseq.com/favicon.ico',
  'craft': 'https://www.craft.do/favicon.ico',
  
  // 生活小工具
  'tinypng-tool': 'https://tinypng.com/favicon.ico',
  'convertio': 'https://convertio.co/favicon.ico',
  'ilovepdf': 'https://www.ilovepdf.com/favicon.ico',
  'smallpdf': 'https://smallpdf.com/favicon.ico',
  'y2mate': 'https://y2mate.com/favicon.ico',
  'qr-code-generator': 'https://www.qr-code-generator.com/favicon.ico',
  'deepl': 'https://www.deepl.com/favicon.ico',
  'google-translate': 'https://translate.google.com/favicon.ico',
  'xe': 'https://www.xe.com/favicon.ico',
  'weather': 'https://weather.com/favicon.ico',
};

console.log('图标映射已准备好，共', Object.keys(iconMap).length, '个');
