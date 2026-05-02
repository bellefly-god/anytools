// AI 提示词分类
export const promptCategories = [
  {
    id: 'text',
    name: '文本写作',
    nameEn: 'Text Writing',
    icon: '✍️',
    description: '文章写作、文案创作、内容优化',
    color: '#3B82F6',
  },
  {
    id: 'image',
    name: '图片生成',
    nameEn: 'Image Generation',
    icon: '🎨',
    description: 'AI 绘图、图片设计、艺术创作',
    color: '#EC4899',
  },
  {
    id: 'video',
    name: '视频制作',
    nameEn: 'Video Creation',
    icon: '🎬',
    description: '视频脚本、分镜设计、视频提示词',
    color: '#F59E0B',
  },
  {
    id: 'audio',
    name: '音频音乐',
    nameEn: 'Audio & Music',
    icon: '🎵',
    description: '音乐创作、音效生成、语音合成',
    color: '#8B5CF6',
  },
  {
    id: 'code',
    name: '编程开发',
    nameEn: 'Coding',
    icon: '💻',
    description: '代码生成、调试、架构设计',
    color: '#10B981',
  },
  {
    id: 'marketing',
    name: '营销推广',
    nameEn: 'Marketing',
    icon: '📈',
    description: '广告文案、社媒运营、SEO优化',
    color: '#EF4444',
  },
  {
    id: 'business',
    name: '商业办公',
    nameEn: 'Business',
    icon: '💼',
    description: '邮件撰写、报告生成、会议纪要',
    color: '#06B6D4',
  },
  {
    id: 'education',
    name: '教育学习',
    nameEn: 'Education',
    icon: '📚',
    description: '教学设计、学习计划、知识讲解',
    color: '#84CC16',
  },
];

// AI 提示词数据
export interface PromptExample {
  image?: string;  // 样例图片 URL
  prompt?: string; // 实际使用的提示词
  result?: string; // 生成结果描述
}

export interface Prompt {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  content: string;
  category: string;
  tags: string[];
  model?: string;  // 推荐使用的模型
  author?: string;
  source?: string;  // 来源网站
  examples?: PromptExample[];  // 样例图片和结果
  featured: boolean;
  hot?: boolean;
  createdAt: string;
}

export const prompts: Prompt[] = [
  // ===== 文本写作 =====
  {
    id: 'article-writer',
    title: '专业文章写作助手',
    titleEn: 'Professional Article Writer',
    description: '帮助你写出结构清晰、内容丰富的专业文章',
    content: `你是一位专业的文章写作专家。请根据以下要求帮我写一篇文章：

主题：[文章主题]
目标读者：[读者群体]
文章风格：[正式/轻松/技术/故事]
字数要求：[约X字]

请按照以下结构撰写：
1. 引人入胜的开头，引出主题
2. 2-3个核心观点，每个观点配案例或数据
3. 过渡自然的段落连接
4. 总结升华的结尾

要求：
- 语言流畅，逻辑清晰
- 适当使用比喻和故事增强可读性
- 段落简短，便于阅读`,
    category: 'text',
    tags: ['写作', '文章', '内容创作'],
    model: 'Claude',
    featured: true,
    hot: true,
    createdAt: '2026-04-28',
  },
  {
    id: 'xiaohongshu-copy',
    title: '小红书爆款文案',
    titleEn: 'Viral Xiaohongshu Copy',
    description: '生成适合小红书风格的种草文案',
    content: `你是一位小红书爆款文案专家。请帮我为以下产品/服务写一篇种草笔记：

产品/服务：[产品名称]
核心卖点：[主要优势]
目标人群：[用户画像]

请按以下格式输出：

【标题】（15-20字，带emoji，吸引眼球）

【正文】
- 开头：场景化带入（2-3行）
- 中间：3个痛点+解决方案
- 结尾：行动号召+互动引导

【标签】#相关话题标签

要求：
- 使用口语化表达
- 每1-2句换行
- 适当使用emoji（每段1-2个）
- 加入真实感受和细节
- 标题要有悬念或反转`,
    category: 'text',
    tags: ['小红书', '文案', '种草'],
    model: 'GPT-4',
    featured: true,
    hot: true,
    source: '小红书热门笔记',
    createdAt: '2026-04-28',
  },
  {
    id: 'email-writer',
    title: '商务邮件撰写',
    titleEn: 'Business Email Writer',
    description: '快速生成专业得体的商务邮件',
    content: `你是一位商务沟通专家。请帮我写一封商务邮件：

邮件目的：[请求/回复/通知/道歉/感谢]
收件人身份：[客户/上级/同事/合作伙伴]
主要内容：[需要表达的核心内容]
语气风格：[正式/友好/紧急]

邮件结构：
1. 称呼（根据关系选择得体称呼）
2. 开场白（简明扼要说明来意）
3. 正文（分点陈述，逻辑清晰）
4. 结尾（明确下一步行动或期待回复）
5. 落款

要求：
- 语言简洁专业
- 重点突出
- 语气得体
- 控制在300字以内`,
    category: 'text',
    tags: ['邮件', '商务', '沟通'],
    featured: false,
    createdAt: '2026-04-27',
  },
  {
    id: 'storyteller',
    title: '故事创作大师',
    titleEn: 'Master Storyteller',
    description: '创作引人入胜的故事',
    content: `你是一位资深故事创作者。请帮我创作一个故事：

故事类型：[悬疑/爱情/科幻/奇幻/励志/幽默]
核心主题：[故事想表达什么]
目标受众：[儿童/青少年/成人]
篇幅：[短篇/中篇/长篇大纲]

请包含以下元素：
1. 鲜明的主角（有欲望、有缺陷）
2. 冲突与转折（至少3次反转）
3. 意想不到的结局
4. 令人回味的余韵

写作风格：
- 使用感官描写增强代入感
- 对话推动情节发展
- 节奏张弛有度
- 留白让读者思考`,
    category: 'text',
    tags: ['故事', '创作', '小说'],
    model: 'Claude',
    featured: true,
    createdAt: '2026-04-26',
  },

  // ===== 图片生成 =====
  {
    id: 'midjourney-portrait',
    title: 'Midjourney 人像摄影',
    titleEn: 'Midjourney Portrait Photography',
    description: '生成专业级人像摄影提示词',
    content: `你是 Midjourney 提示词专家。请为以下人像摄影需求生成提示词：

人物特征：[性别/年龄/种族/发型/服装]
拍摄风格：[时尚/复古/自然/艺术/电影]
光线效果：[自然光/影棚光/黄金时刻/霓虹]
背景环境：[室内/室外/纯色/城市]
情绪氛围：[温暖/冷峻/神秘/活力]

请生成英文提示词，格式如下：
A portrait of [subject], [style], [lighting], [background], [mood], shot on [camera], [lens], [technical details], --ar [aspect ratio] --v 6

示例：
A portrait of a young Asian woman with long black hair, wearing a white linen dress, fashion editorial style, soft golden hour lighting, urban street background with bokeh, warm and dreamy atmosphere, shot on Canon EOS R5, 85mm f/1.2 lens, shallow depth of field, professional color grading, --ar 4:5 --v 6 --style raw`,
    category: 'image',
    tags: ['Midjourney', '人像', '摄影'],
    model: 'Midjourney',
    featured: true,
    hot: true,
    source: 'Midjourney 官方文档',
    examples: [
      {
        prompt: 'A portrait of a young woman with flowing red hair, fashion editorial style, soft golden hour lighting, urban street background, warm and dreamy atmosphere, shot on Canon EOS R5, 85mm f/1.2 lens, --ar 4:5 --v 6 --style raw',
        result: '专业级时尚人像，黄金时刻光线，城市街道背景'
      }
    ],
    createdAt: '2026-04-28',
  },
  {
    id: 'midjourney-landscape',
    title: 'Midjourney 风景摄影',
    titleEn: 'Midjourney Landscape Photography',
    description: '生成震撼的风景摄影提示词',
    content: `你是 Midjourney 提示词专家。请生成风景摄影提示词：

场景类型：[山脉/海洋/森林/城市/沙漠]
时间光线：[日出/日落/夜空/黄金时刻/蓝调时刻]
天气氛围：[晴朗/多云/雾气/雨后/雪景]
艺术风格：[写实/印象派/赛博朋克/奇幻]
构图重点：[广阔视野/局部特写/倒影/剪影]

提示词模板：
[Scene description], [time of day], [weather/atmosphere], [artistic style], [composition], [camera settings], [technical quality], --ar [ratio] --v 6

示例：
Breathtaking mountain landscape with snow-capped peaks, dramatic golden hour light breaking through clouds, atmospheric mist in the valley, cinematic wide-angle composition, shot on Sony A7R IV, 16-35mm lens, HDR processing, 8K ultra detailed, --ar 16:9 --v 6 --style raw`,
    category: 'image',
    tags: ['Midjourney', '风景', '摄影'],
    model: 'Midjourney',
    featured: true,
    createdAt: '2026-04-27',
  },
  {
    id: 'stable-diffusion-guide',
    title: 'Stable Diffusion 提示词指南',
    titleEn: 'Stable Diffusion Prompt Guide',
    description: 'Stable Diffusion 全能提示词模板',
    content: `你是 Stable Diffusion 提示词专家。请根据以下需求生成提示词：

图像类型：[人像/风景/产品/概念艺术/UI设计]
风格流派：[写实/动漫/油画/水彩/3D渲染]
画质要求：[分辨率/细节程度/艺术感]

Stable Diffusion 提示词结构：
1. 主体描述（Subject）
2. 风格标签（Style）
3. 画家/艺术家参考（Artist）
4. 技术参数（Technical）
5. 负面提示词（Negative）

示例：
Positive: (masterpiece, best quality, highres:1.2), 1girl, beautiful face, detailed eyes, long flowing hair, wearing elegant dress, standing in flower garden, soft sunlight, intricate details, dreamy atmosphere, art by Greg Rutkowski and Alphonse Mucha

Negative: (low quality, worst quality:1.4), blurry, distorted, ugly, bad anatomy, bad hands, text, watermark, signature`,
    category: 'image',
    tags: ['Stable Diffusion', 'AI绘画', '提示词'],
    model: 'Stable Diffusion',
    featured: true,
    hot: true,
    source: 'Civitai 热门提示词',
    examples: [
      {
        prompt: '(masterpiece, best quality, highres:1.2), 1girl, beautiful face, detailed eyes, long flowing silver hair, wearing elegant white dress, standing in moonlit garden, soft moonlight, intricate details, dreamy atmosphere',
        result: '高质量动漫风格人物，月光下的花园场景'
      }
    ],
    createdAt: '2026-04-26',
  },
  {
    id: 'dalle-product',
    title: 'DALL-E 产品图生成',
    titleEn: 'DALL-E Product Photography',
    description: '生成专业的产品摄影图片',
    content: `你是 DALL-E 产品摄影提示词专家。请为以下产品生成拍摄提示词：

产品类型：[电子产品/化妆品/食品/服装/家居]
产品特点：[核心卖点/设计亮点]
拍摄风格：[简约/奢华/创意/生活方式]
背景要求：[纯色/渐变/场景/道具]
用途场景：[电商主图/详情页/广告/社媒]

DALL-E 提示词格式：
Professional product photography of [product], [style description], [background], [lighting], [mood], [technical quality], clean and modern aesthetic

示例：
Professional product photography of a sleek wireless earbuds case in matte white, minimalist style, floating on clean pastel blue gradient background, soft studio lighting with subtle shadows, premium and modern feel, 4K commercial quality, shallow depth of field`,
    category: 'image',
    tags: ['DALL-E', '产品', '电商'],
    model: 'DALL-E 3',
    featured: false,
    createdAt: '2026-04-25',
  },
  {
    id: 'logo-design',
    title: 'AI Logo 设计',
    titleEn: 'AI Logo Design',
    description: '生成专业的品牌Logo设计',
    content: `你是 Logo 设计专家。请为以下需求生成 Logo 提示词：

品牌名称：[名称]
行业领域：[科技/餐饮/教育/时尚/金融]
品牌调性：[专业/活泼/奢华/简约/创意]
设计风格：[极简/几何/手绘/复古/现代]
颜色偏好：[主色调/配色方案]

Logo 提示词结构：
Minimalist logo design for [brand], [industry], [style], [symbol/icon], [colors], clean lines, vector style, white background

示例：
Minimalist logo design for a tech startup called "Nexus", innovative AI company, geometric abstract symbol representing connection and intelligence, gradient blue to purple, clean modern lines, vector style, white background, professional and memorable

推荐使用：Midjourney, DALL-E 3, Ideogram`,
    category: 'image',
    tags: ['Logo', '设计', '品牌'],
    featured: true,
    createdAt: '2026-04-24',
  },

  // ===== 视频制作 =====
  {
    id: 'sora-video',
    title: 'Sora 视频生成',
    titleEn: 'Sora Video Generation',
    description: 'OpenAI Sora 视频提示词模板',
    content: `你是 Sora 视频生成专家。请根据以下需求创建视频提示词：

视频主题：[故事/场景/动作/产品展示]
视频风格：[电影/纪录片/动画/广告/Vlog]
场景环境：[室内/室外/城市/自然/抽象]
镜头运动：[推拉/平移/环绕/跟随/固定]
时长：[描述需要呈现的内容时长]

Sora 提示词结构：
[Scene description], [camera movement], [time of day], [lighting], [mood/atmosphere], [technical details]

示例：
Aerial shot slowly descending through morning fog to reveal a traditional Japanese village nestled in mountains, camera continues moving forward through narrow streets, cherry blossoms falling, soft morning light, peaceful and serene atmosphere, cinematic 4K quality, smooth gimbal movement

建议时长：5-15秒效果最佳`,
    category: 'video',
    tags: ['Sora', '视频', 'AI生成'],
    model: 'Sora',
    featured: true,
    hot: true,
    source: 'OpenAI 官方示例',
    examples: [
      {
        prompt: 'Aerial shot slowly descending through morning fog to reveal a traditional Japanese village nestled in mountains, cherry blossoms falling, soft morning light, peaceful atmosphere, cinematic 4K quality',
        result: '梦幻的日本村庄航拍镜头，樱花飘落，晨雾缭绕'
      }
    ],
    createdAt: '2026-04-28',
  },
  {
    id: 'runway-gen3',
    title: 'Runway Gen-3 视频创作',
    titleEn: 'Runway Gen-3 Video Creation',
    description: 'Runway Gen-3 视频提示词指南',
    content: `你是 Runway Gen-3 视频创作专家。请生成视频提示词：

创作目标：[创意短片/广告/音乐视频/特效]
视觉风格：[写实/动画/抽象/赛博朋克]
运动类型：[人物动作/物体运动/场景变化/特效]
起始画面：[描述初始场景]
结束画面：[描述目标场景]

Runway Gen-3 提示词格式：
[Opening scene], [transition/movement description], [ending scene], [style and mood], [technical quality]

示例：
A young woman with flowing red hair standing in a field of wheat at sunset, wind gently moving her hair and dress, golden hour lighting, slowly transforms into abstract particles of light floating upward, dreamlike and ethereal atmosphere, cinematic quality, smooth transition

技巧：
- 描述清晰的开头和结尾
- 使用具体的动作描述
- 控制运动幅度避免失真`,
    category: 'video',
    tags: ['Runway', '视频', 'AI生成'],
    model: 'Runway Gen-3',
    featured: true,
    createdAt: '2026-04-27',
  },
  {
    id: 'video-script',
    title: '短视频脚本创作',
    titleEn: 'Short Video Script Writing',
    description: '抖音/小红书短视频脚本',
    content: `你是短视频脚本创作专家。请帮我创作短视频脚本：

视频类型：[剧情/教程/Vlog/开箱/测评/知识科普]
视频时长：[15秒/30秒/1分钟/3分钟]
目标平台：[抖音/小红书/B站/视频号]
目标受众：[年龄段/兴趣爱好]
核心信息：[想传达什么]

脚本格式：
【标题】（吸引眼球的文案）

【分镜脚本】
镜头1 (0-3秒)：[画面描述] - [台词/字幕] - [动作提示]
镜头2 (3-8秒)：...
镜头3 (8-15秒)：...
...

【BGM建议】：[音乐风格/推荐曲目]
【拍摄要点】：[注意事项]
【后期建议】：[剪辑/特效提示]

要求：
- 开头3秒抓住注意力
- 节奏紧凑，无废话
- 结尾有记忆点或引导互动`,
    category: 'video',
    tags: ['短视频', '脚本', '抖音'],
    featured: true,
    hot: true,
    createdAt: '2026-04-26',
  },

  // ===== 音频音乐 =====
  {
    id: 'suno-music',
    title: 'Suno 音乐创作',
    titleEn: 'Suno Music Creation',
    description: 'AI 音乐生成提示词',
    content: `你是 Suno 音乐创作专家。请帮我创作音乐：

音乐风格：[流行/摇滚/电子/民谣/说唱/古典/爵士]
歌曲主题：[爱情/友情/励志/生活/故事]
情绪氛围：[欢快/忧伤/激昂/温暖/神秘]
语言：[中文/英文/日文]
人声：[男声/女声/合唱/纯音乐]

Suno 提示词格式：
Style: [genre, sub-genre, mood]
Lyrics: [歌词内容]

示例：
Style: Chinese pop, acoustic, warm, romantic, ballad
Lyrics:
[Verse 1]
窗外的雨轻轻落下
想起你微笑的脸颊
时光在指尖悄悄溜走
留下的是最美的牵挂

[Chorus]
想对你说声谢谢
出现在我的世界
因为有你
平凡的日子也变得特别

技巧：
- 明确音乐风格标签
- 歌词押韵更自然
- 添加结构标记 [Verse] [Chorus] [Bridge]`,
    category: 'audio',
    tags: ['Suno', '音乐', 'AI生成'],
    model: 'Suno',
    featured: true,
    hot: true,
    source: 'Suno 官方文档',
    createdAt: '2026-04-28',
  },
  {
    id: 'elevenlabs-voice',
    title: 'ElevenLabs 语音合成',
    titleEn: 'ElevenLabs Voice Synthesis',
    description: '高质量语音合成提示词',
    content: `你是 ElevenLabs 语音合成专家。请优化语音合成文本：

文本内容：[需要合成的内容]
应用场景：[有声书/播客/广告/教学/客服]
语音风格：[专业/亲切/活泼/严肃/温暖]
语速要求：[慢速/正常/快速]
情感表达：[平静/激动/悲伤/开心]

优化建议：
1. 添加标点控制停顿
2. 使用...表示更长停顿
3. 大写表示强调
4. [sigh], [laughs] 添加情感标记

示例：
原始：欢迎来到我们的节目，今天我们要讨论人工智能的未来。
优化：欢迎来到...我们的节目。[pause] 今天，我们要讨论——人工智能的未来。

有声书风格示例：
"她轻轻推开门，...房间里一片漆黑。" [whisper] "有人吗？"

技巧：
- 避免过长的句子
- 适当分段
- 根据内容调整语气`,
    category: 'audio',
    tags: ['ElevenLabs', '语音', 'TTS'],
    model: 'ElevenLabs',
    featured: true,
    createdAt: '2026-04-27',
  },

  // ===== 编程开发 =====
  {
    id: 'code-review',
    title: '代码审查助手',
    titleEn: 'Code Review Assistant',
    description: '专业的代码审查和优化建议',
    content: `你是资深代码审查专家。请审查以下代码：

编程语言：[语言名称]
代码功能：[功能描述]
代码片段：
\`\`\`
[粘贴你的代码]
\`\`\`

请从以下角度进行审查：

1. **代码质量**
   - 代码是否清晰易读
   - 命名是否规范
   - 是否有冗余代码

2. **性能问题**
   - 是否有性能瓶颈
   - 算法复杂度优化建议

3. **安全性**
   - 是否存在安全漏洞
   - 数据验证是否充分

4. **最佳实践**
   - 是否符合语言规范
   - 是否遵循设计模式

5. **改进建议**
   - 重构建议
   - 测试建议

请给出具体的修改示例和解释。`,
    category: 'code',
    tags: ['代码审查', '优化', '最佳实践'],
    model: 'Claude',
    featured: true,
    hot: true,
    createdAt: '2026-04-28',
  },
  {
    id: 'react-component',
    title: 'React 组件生成',
    titleEn: 'React Component Generator',
    description: '生成高质量的 React 组件',
    content: `你是 React 专家。请帮我创建一个组件：

组件名称：[ComponentName]
组件功能：[功能描述]
Props 定义：[需要的属性]
样式方案：[Tailwind CSS / CSS Modules / styled-components]
TypeScript：[是/否]

请生成：
1. 组件代码（含类型定义）
2. 样式代码
3. 使用示例
4. 测试用例（可选）

代码要求：
- 使用函数组件和 Hooks
- 遵循 React 最佳实践
- 考虑性能优化（memo, useMemo, useCallback）
- 添加适当的注释
- 响应式设计考虑`,
    category: 'code',
    tags: ['React', '组件', '前端'],
    model: 'Claude',
    featured: true,
    createdAt: '2026-04-27',
  },
  {
    id: 'sql-optimizer',
    title: 'SQL 优化专家',
    titleEn: 'SQL Optimizer',
    description: 'SQL 查询优化和生成',
    content: `你是数据库专家。请帮我优化 SQL：

数据库类型：[MySQL / PostgreSQL / MongoDB / SQLite]
表结构：
[描述表结构或粘贴 CREATE TABLE 语句]

查询需求：
[描述需要查询的数据]

当前 SQL：
\`\`\`sql
[粘贴当前的 SQL]
\`\`\`

请提供：
1. **优化后的 SQL**
2. **索引建议**
3. **执行计划分析**
4. **性能对比说明**

优化角度：
- 查询效率
- 索引使用
- 连接优化
- 避免全表扫描
- 分页优化`,
    category: 'code',
    tags: ['SQL', '数据库', '优化'],
    featured: false,
    createdAt: '2026-04-26',
  },

  // ===== 营销推广 =====
  {
    id: 'ad-copy',
    title: '广告文案创作',
    titleEn: 'Ad Copy Creation',
    description: '高转化率广告文案',
    content: `你是广告文案专家。请创作广告文案：

产品/服务：[名称]
核心卖点：[1-3个主要优势]
目标受众：[用户画像]
投放平台：[搜索广告/社媒广告/信息流/视频]
广告目标：[点击/转化/品牌认知]
预算级别：[低/中/高]

请提供多组方案：

【方案A - 痛点型】
标题：[击中痛点]
正文：[问题→解决方案→行动号召]

【方案B - 利益型】
标题：[突出利益]
正文：[核心优势→社会证明→限时优惠]

【方案C - 好奇型】
标题：[引发好奇]
正文：[悬念→揭示→引导点击】

每条文案请说明：
- 适用场景
- 预期效果
- A/B 测试建议`,
    category: 'marketing',
    tags: ['广告', '文案', '转化'],
    featured: true,
    hot: true,
    createdAt: '2026-04-28',
  },
  {
    id: 'seo-article',
    title: 'SEO 文章优化',
    titleEn: 'SEO Article Optimization',
    description: '搜索引擎优化的文章创作',
    content: `你是 SEO 专家。请帮我优化文章：

目标关键词：[主关键词]
次要关键词：[相关关键词]
文章主题：[文章核心内容]
目标平台：[百度/Google/知乎/公众号]
竞争分析：[参考竞品文章]

请提供：

1. **标题优化**
   - 包含主关键词
   - 吸引点击
   - 控制在30字以内

2. **文章结构**
   - H1/H2/H3 层级
   - 关键词分布策略
   - 内链外链建议

3. **Meta 信息**
   - 描述标签（150字以内）
   - 标题标签

4. **内容优化建议**
   - 关键词密度
   - 语义相关词
   - 可读性提升

5. **SEO 检查清单**
   - 图片 alt 标签
   - URL 结构
   - 移动端适配`,
    category: 'marketing',
    tags: ['SEO', '内容', '优化'],
    featured: true,
    createdAt: '2026-04-27',
  },

  // ===== 商业办公 =====
  {
    id: 'meeting-summary',
    title: '会议纪要生成',
    titleEn: 'Meeting Minutes Generator',
    description: '快速整理会议内容',
    content: `你是会议纪要专家。请整理以下会议内容：

会议主题：[主题]
参会人员：[姓名/职位]
会议时间：[日期时间]
会议时长：[分钟数]

会议记录：
[粘贴会议记录或逐字稿]

请生成标准会议纪要：

## 会议概要
- 会议主题
- 时间地点
- 参会人员

## 核心决议
1. [决议内容]
2. ...

## 待办事项
| 任务 | 负责人 | 截止日期 |
|------|--------|----------|
| ... | ... | ... |

## 下次会议
- 时间：
- 议题：

## 附件
- [相关文档链接]`,
    category: 'business',
    tags: ['会议', '纪要', '办公'],
    featured: true,
    createdAt: '2026-04-26',
  },
  {
    id: 'report-writer',
    title: '工作报告撰写',
    titleEn: 'Work Report Writing',
    description: '专业工作报告生成',
    content: `你是报告撰写专家。请帮我写工作报告：

报告类型：[日报/周报/月报/季度报告/年度报告]
报告对象：[上级/团队/客户]
工作内容：[本期完成的工作]
数据指标：[关键数据和成果]
遇到问题：[困难和挑战]
下一步计划：[下期工作安排]

请按以下格式生成：

## 一、工作概述
[本期工作总体情况]

## 二、核心成果
1. [成果1]
   - 完成情况：
   - 关键数据：
   
2. [成果2]
   ...

## 三、问题与解决
| 问题 | 解决方案 | 状态 |
|------|----------|------|
| ... | ... | 已解决/进行中 |

## 四、下期计划
1. [重点工作]
2. [预计成果]

## 五、需要支持
[需要的资源或协助]`,
    category: 'business',
    tags: ['报告', '工作', '办公'],
    featured: false,
    createdAt: '2026-04-25',
  },

  // ===== 教育学习 =====
  {
    id: 'lesson-plan',
    title: '教学教案设计',
    titleEn: 'Lesson Plan Design',
    description: '专业的教学设计',
    content: `你是教学设计专家。请帮我设计教案：

学科：[语文/数学/英语/物理/化学/编程/其他]
年级：[小学/初中/高中/大学/成人]
课时：[分钟数]
教学目标：[学生应该掌握什么]
知识点：[核心知识点]
学生基础：[前置知识水平]

请生成完整教案：

## 一、教学目标
- 知识目标：
- 能力目标：
- 情感目标：

## 二、教学重难点
- 重点：
- 难点：
- 突破方法：

## 三、教学准备
- 教具：
- 资料：
- 技术：

## 四、教学过程
### 1. 导入（X分钟）
[导入方式]

### 2. 新授（X分钟）
[知识点讲解]

### 3. 练习（X分钟）
[练习设计]

### 4. 总结（X分钟）
[课堂小结]

### 5. 作业
[作业设计]

## 五、板书设计
[板书布局]

## 六、教学反思
[预期效果和改进方向]`,
    category: 'education',
    tags: ['教学', '教案', '教育'],
    featured: true,
    createdAt: '2026-04-27',
  },
  {
    id: 'study-plan',
    title: '学习计划制定',
    titleEn: 'Study Plan Creation',
    description: '个性化学习计划',
    content: `你是学习规划专家。请帮我制定学习计划：

学习目标：[想达成什么]
学习领域：[编程/语言/考试/技能/其他]
当前水平：[零基础/入门/进阶]
可用时间：[每天/每周]
学习周期：[周/月/季度]
学习偏好：[看书/视频/实践/项目]

请生成详细学习计划：

## 一、目标分解
- 总目标：
- 阶段目标：
  - 第1阶段：
  - 第2阶段：
  - 第3阶段：

## 二、学习资源
| 资源名称 | 类型 | 推荐理由 | 链接 |
|----------|------|----------|------|
| ... | 书籍/视频/课程 | ... | ... |

## 三、每日计划
### 工作日（每天X小时）
- 时段1：[学习内容]
- 时段2：[练习内容]

### 周末（每天X小时）
- 上午：[重点攻克]
- 下午：[实践项目]

## 四、学习路径
\`\`\`
第1周 → 第2周 → ... → 最终目标
\`\`\`

## 五、检验方法
- 每周检验：
- 每月检验：
- 最终检验：

## 六、激励机制
[奖励设计]`,
    category: 'education',
    tags: ['学习', '计划', '自我提升'],
    featured: true,
    hot: true,
    createdAt: '2026-04-26',
  },

  // ===== GPT-4o 图像生成 (热门) =====
  {
    id: 'gpt4o-photorealistic',
    title: 'GPT-4o 超写实人像',
    titleEn: 'GPT-4o Photorealistic Portrait',
    description: '生成照片级真实感的人像图像',
    content: `Professional photograph of a [subject description], [pose and expression], [clothing and style], [lighting conditions], [background environment], shot on [camera model], [lens], [technical details], [color grading]

关键技巧：
1. 使用具体的光线描述：golden hour, soft diffused light, dramatic side lighting
2. 指定相机和镜头：Canon EOS R5, 85mm f/1.2, Sony A7IV
3. 添加技术细节：shallow depth of field, bokeh, HDR, 8K
4. 描述皮肤质感：natural skin texture, subtle freckles, realistic pores

示例：
Professional photograph of a young Asian woman with long black hair, natural smile, wearing a cream linen blouse, soft golden hour lighting from window, modern minimalist apartment background, shot on Canon EOS R5, 85mm f/1.2 lens, shallow depth of field with beautiful bokeh, natural skin texture, warm color grading`,
    category: 'image',
    tags: ['GPT-4o', '人像', '写实'],
    model: 'GPT-4o',
    featured: true,
    hot: true,
    source: 'OpenAI 官方示例',
    examples: [
      {
        prompt: 'Professional photograph of a young woman with curly auburn hair, confident expression, wearing a tailored navy blazer, soft studio lighting, neutral gray background, shot on Canon EOS R5, 85mm f/1.4, shallow depth of field',
        result: '高质量商业人像，适合 LinkedIn 头像或品牌形象'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'gpt4o-product-mockup',
    title: 'GPT-4o 产品展示图',
    titleEn: 'GPT-4o Product Mockup',
    description: '生成专业的产品摄影和样机展示',
    content: `Product photography of [product name/type], [style: minimalist/luxury/lifestyle], [background: clean gradient/lifestyle setting/studio], [lighting: soft studio/natural window/dramatic], [props and styling], [camera angle], [mood and feeling]

电商主图模板：
Minimalist product shot of [product] on pure white background, soft studio lighting, slight shadow for depth, professional e-commerce style, high detail, 4K quality

生活方式图模板：
Lifestyle product photography of [product] in [setting], natural lighting, [props arrangement], aspirational mood, shallow depth of field, Instagram-worthy composition

奢华风格模板：
Luxury product photography of [product] on marble surface, dramatic lighting, gold accents, premium feel, high-end brand aesthetic, 8K detail`,
    category: 'image',
    tags: ['GPT-4o', '产品', '电商'],
    model: 'GPT-4o',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: 'Minimalist skincare bottle on soft pink gradient background, clean and modern aesthetic, soft shadows, premium beauty brand style, 4K commercial quality',
        result: '适合美妆品牌的产品展示图'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'gpt4o-typography-poster',
    title: 'GPT-4o 文字海报设计',
    titleEn: 'GPT-4o Typography Poster',
    description: '生成带有准确文字的海报和宣传图',
    content: `Design a [style] poster featuring the text "[YOUR TEXT]" in [typography style], [color scheme], [background design], [visual elements], [overall mood]

海报类型模板：

音乐会海报：
Concert poster for [artist name], bold typography with "[EVENT NAME]", [date and venue info], [visual style: retro/vintage/modern/psychedelic], vibrant colors, artistic composition

活动宣传：
Event poster for [event name], featuring text "[HEADLINE]" and "[DATE]", [design style], eye-catching layout, professional quality

品牌海报：
Brand poster with text "[TAGLINE]", [brand colors], minimalist design, [product/service imagery], clean and modern aesthetic

技巧：
- GPT-4o 可以准确渲染文字
- 使用引号明确标注需要显示的文字
- 指定字体风格：bold, elegant, handwritten, retro
- 描述整体布局和视觉层次`,
    category: 'image',
    tags: ['GPT-4o', '海报', '设计'],
    model: 'GPT-4o',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: 'Music festival poster with text "COSMIC SOUNDS 2025" in retrofuturistic typography, holographic effects, psychedelic swirling patterns, space theme, vibrant neon colors',
        result: '带有准确文字的音乐节海报'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'gpt4o-illustration',
    title: 'GPT-4o 插画风格',
    titleEn: 'GPT-4o Illustration Style',
    description: '生成各种风格的插画和艺术作品',
    content: `[Art style] illustration of [subject], [composition], [color palette], [mood and atmosphere], [technique details], [artist reference if applicable]

热门插画风格：

扁平化设计：
Flat design illustration of [subject], minimal shapes, bold colors, clean lines, modern vector style, no gradients

水彩风格：
Watercolor illustration of [subject], soft color bleeding, paper texture visible, delicate brushstrokes, artistic and dreamy

赛博朋克：
Cyberpunk illustration of [subject], neon colors (pink, cyan, purple), dark background, futuristic elements, digital art style

日系动漫：
Anime style illustration of [subject], cel shading, vibrant colors, detailed background, studio ghibli inspired

儿童绘本：
Children's book illustration of [subject], whimsical and playful, soft pastel colors, friendly characters, storybook style

概念艺术：
Concept art of [subject], cinematic composition, dramatic lighting, detailed environment, professional game/film quality`,
    category: 'image',
    tags: ['GPT-4o', '插画', '艺术'],
    model: 'GPT-4o',
    featured: true,
    examples: [
      {
        prompt: 'Whimsical children\'s book illustration of a friendly dragon reading a book in a cozy library, soft pastel colors, magical atmosphere, detailed and charming',
        result: '温馨的儿童绘本风格插画'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'gpt4o-ui-mockup',
    title: 'GPT-4o UI 界面设计',
    titleEn: 'GPT-4o UI Design Mockup',
    description: '生成应用界面和网站设计稿',
    content: `UI/UX design mockup of [app type] [screen type], [design style], [color scheme], [key features displayed], [device frame], professional quality

应用类型模板：

移动应用：
Mobile app UI design for [app purpose], [screen: home/dashboard/profile], [style: minimalist/modern/playful], [primary color], clean layout, iOS/Android style

网站首页：
Website homepage design for [business type], hero section with [content], [navigation style], [visual elements], modern and professional

仪表盘：
Dashboard UI design for [analytics/management], dark/light mode, [chart types], [key metrics], clean data visualization, professional SaaS style

登录页面：
Login screen design for [app name], [background style], [form layout], [brand elements], modern and secure feeling

技巧：
- 描述关键界面元素
- 指定设计系统风格
- 说明配色方案
- 提及交互元素`,
    category: 'image',
    tags: ['GPT-4o', 'UI设计', '界面'],
    model: 'GPT-4o',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: 'Mobile banking app dashboard UI design, dark mode, clean minimalist style, showing account balance, recent transactions, and quick actions, modern fintech aesthetic',
        result: '专业的金融应用界面设计'
      }
    ],
    createdAt: '2026-05-02',
  },

  // ===== 视频生成 (热门) =====
  {
    id: 'sora-cinematic',
    title: 'Sora 电影级镜头',
    titleEn: 'Sora Cinematic Shot',
    description: '生成电影质感的视频镜头',
    content: `[Opening scene description], [camera movement: slow pan/zoom/track/dolly], [subject action], [lighting and time of day], [atmosphere and mood], [technical quality]

镜头运动类型：
- Slow pan: 缓慢平移
- Zoom in/out: 推拉镜头
- Tracking shot: 跟踪镜头
- Dolly shot: 移动镜头
- Aerial/Drone: 航拍镜头
- Handheld: 手持晃动效果

示例模板：

自然风光：
Drone shot slowly descending through morning mist to reveal [landscape], golden hour lighting, peaceful atmosphere, cinematic 4K quality, smooth gimbal movement

城市街景：
Slow tracking shot following [subject] through [city setting], [time of day] lighting, urban atmosphere, cinematic depth of field, professional quality

人物特写：
Close-up shot of [subject], subtle camera movement, [lighting setup], emotional expression, shallow depth of field, film grain, cinematic color grading

技巧：
- 描述清晰的开场画面
- 指定镜头运动方式
- 控制时长在 5-15 秒
- 添加氛围描述`,
    category: 'video',
    tags: ['Sora', '电影', '镜头'],
    model: 'Sora',
    featured: true,
    hot: true,
    source: 'OpenAI 官方示例',
    examples: [
      {
        prompt: 'Drone view of waves crashing against rugged cliffs along Big Sur\'s coast, golden light of setting sun illuminating the rocky shore, lighthouse in distance, dramatic landscape, cinematic quality',
        result: '震撼的海岸线航拍镜头'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'sora-product-video',
    title: 'Sora 产品展示视频',
    titleEn: 'Sora Product Showcase',
    description: '生成产品宣传和展示视频',
    content: `Product showcase video of [product], [opening shot], [camera movement revealing features], [background setting], [lighting style], [mood: premium/dynamic/friendly], [duration: 5-10 seconds]

产品视频模板：

科技产品：
Sleek product reveal of [tech product], dramatic lighting, slow rotation, dark premium background, cinematic quality, highlighting [key feature]

时尚配饰：
Elegant product video of [fashion item], soft studio lighting, smooth camera movement, lifestyle setting hints, luxury brand feeling

食品饮料：
Appetizing product shot of [food/beverage], natural lighting, steam or freshness visible, inviting atmosphere, commercial quality

运动装备：
Dynamic product video of [sports gear], action-oriented camera movement, energetic feel, outdoor or gym setting, high contrast lighting

技巧：
- 产品要清晰可见
- 光线要突出质感
- 运动要流畅自然
- 背景要简洁专业`,
    category: 'video',
    tags: ['Sora', '产品', '广告'],
    model: 'Sora',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: 'Elegant perfume bottle on marble surface, soft golden lighting, slow camera rotation, subtle reflections, luxury brand aesthetic, cinematic quality',
        result: '高端香水产品展示视频'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'sora-nature-scene',
    title: 'Sora 自然风光',
    titleEn: 'Sora Nature Landscape',
    description: '生成震撼的自然景观视频',
    content: `[Time-lapse/Cinematic] shot of [natural scene], [weather and lighting], [camera movement], [atmospheric elements], [season and time], [mood: serene/dramatic/majestic], 4K cinematic quality

自然场景模板：

日出日落：
Time-lapse of sunrise/sunset over [landscape], clouds moving, colors shifting from [color1] to [color2], peaceful atmosphere, cinematic quality

森林溪流：
Gentle stream flowing through [forest type], dappled sunlight through leaves, birds singing, peaceful and serene, slow camera movement

海洋波浪：
Powerful waves crashing against [coastal feature], dramatic lighting, spray and foam visible, majestic and powerful, aerial or close-up perspective

山脉云海：
Majestic mountain peaks emerging from sea of clouds, golden hour light, dramatic shadows, awe-inspiring atmosphere, drone footage style

雨后彩虹：
Rainbow appearing after rain over [landscape], sun breaking through clouds, fresh and renewed feeling, natural beauty, cinematic composition`,
    category: 'video',
    tags: ['Sora', '自然', '风景'],
    model: 'Sora',
    featured: true,
    examples: [
      {
        prompt: 'Aerial shot of mountain peaks emerging from morning mist, golden sunrise light, dramatic shadows, peaceful and majestic atmosphere, cinematic 4K quality',
        result: '壮丽的山脉日出景观'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'runway-motion',
    title: 'Runway 动态效果',
    titleEn: 'Runway Motion Effects',
    description: 'Runway Gen-3 动态视频创作',
    content: `[Starting scene], [transformation/movement description], [ending scene], [style and aesthetic], [technical quality]

Runway Gen-3 擅长：

人物动作：
[Subject] performing [action], [camera angle], [lighting], natural movement, smooth transition

物体变形：
[Object A] slowly transforming into [Object B], [visual effect style], seamless morphing, artistic interpretation

场景转换：
[Scene A] transitioning to [Scene B], [transition style: dissolve/morph/wipe], creative visual storytelling

特效镜头：
[Subject] with [special effect], particle effects, light trails, cinematic quality, professional VFX

技巧：
- 描述清晰的起始和结束状态
- 运动幅度不要太大避免失真
- 使用具体的动作描述
- 控制时长在 5-10 秒`,
    category: 'video',
    tags: ['Runway', '特效', '动态'],
    model: 'Runway Gen-3',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: 'Young woman with flowing red hair in a wheat field at sunset, wind gently moving her hair and dress, golden hour lighting, slowly transforms into particles of light, dreamlike atmosphere',
        result: '梦幻的人物粒子消散效果'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'kling-video',
    title: '可灵 AI 视频生成',
    titleEn: 'Kling AI Video Generation',
    description: '国产 AI 视频生成工具提示词',
    content: `[场景描述], [主体动作], [镜头运动], [光线氛围], [风格特征], [画质要求]

可灵 AI 特点：
- 支持中文提示词
- 擅长人物动作和表情
- 适合短视频创作
- 支持图生视频

人物视频模板：
[人物描述], [动作: 行走/转身/微笑/说话], [服装造型], [场景背景], [光线], [镜头: 特写/中景/远景], 自然流畅的动作

场景视频模板：
[场景类型: 城市/自然/室内], [时间: 日/夜/黄昏], [天气氛围], [镜头运动], [动态元素: 车流/人流/云朵], 电影质感

创意视频模板：
[创意概念], [视觉风格], [特效描述], [转场方式], 艺术感和创意性

技巧：
- 用中文描述更准确
- 动作要具体明确
- 时长控制在 5 秒内效果最佳
- 可以上传参考图`,
    category: 'video',
    tags: ['可灵', '视频', '国产AI'],
    model: 'Kling',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: '一位穿着白色连衣裙的年轻女性在海边漫步，夕阳余晖，微风吹动裙摆，镜头缓慢跟随，浪漫唯美的氛围',
        result: '浪漫的海边漫步视频'
      }
    ],
    createdAt: '2026-05-02',
  },

  // ===== Midjourney V6 热门 =====
  {
    id: 'mj-v6-portrait',
    title: 'Midjourney V6 人像大师',
    titleEn: 'Midjourney V6 Portrait Master',
    description: 'V6 版本人像摄影提示词',
    content: `[Subject description], [pose and expression], [clothing and accessories], [setting/background], [lighting], [camera and lens], [film style], --ar [ratio] --v 6.1 --style raw --s [stylize]

V6 人像技巧：
1. 更自然的皮肤质感
2. 更好的手部细节
3. 更准确的光线理解
4. 支持更长的提示词

电影感人像：
Cinematic portrait of [subject], dramatic lighting, shallow depth of field, shot on [camera], [lens], film grain, color grading, --ar 2:3 --v 6.1 --style raw --s 200

时尚摄影：
Fashion editorial portrait of [subject], [styling], studio lighting, clean background, high-end magazine quality, --ar 3:4 --v 6.1 --s 150

自然光人像：
Natural light portrait of [subject], golden hour, outdoor setting, authentic expression, lifestyle photography, --ar 2:3 --v 6.1 --style raw

复古胶片：
Vintage film portrait of [subject], 1970s aesthetic, warm tones, film grain, soft focus, nostalgic mood, --ar 3:4 --v 6.1 --s 250`,
    category: 'image',
    tags: ['Midjourney', '人像', 'V6'],
    model: 'Midjourney V6',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: 'Cinematic portrait, woman with flowing red hair in wind, golden hour sidelight, depth of field, freckles, green eyes, wearing a linen shirt, emotional expression, film grain, shot on Hasselblad --ar 2:3 --v 6.1 --s 200',
        result: '电影质感的自然光人像'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'mj-v6-product',
    title: 'Midjourney V6 产品摄影',
    titleEn: 'Midjourney V6 Product Photography',
    description: '专业级产品摄影提示词',
    content: `Product photography of [product], [style: minimalist/luxury/lifestyle], [background], [lighting], [props], [camera angle], [mood], --ar [ratio] --v 6.1 --style raw

产品摄影模板：

简约电商：
Product shot of [product] on pure white background, soft studio lighting, clean and professional, e-commerce ready, --ar 1:1 --v 6.1 --s 100

奢华质感：
Luxury product photography of [product] on [marble/velvet/gold] surface, dramatic lighting, premium feel, high-end brand aesthetic, --ar 4:5 --v 6.1 --s 200

生活方式：
Lifestyle product shot of [product] in [setting], natural lighting, aspirational mood, shallow depth of field, Instagram-worthy, --ar 4:5 --v 6.1 --style raw

创意概念：
Conceptual product photography of [product], [creative elements], artistic composition, unique perspective, award-winning advertising, --ar 16:9 --v 6.1 --s 300`,
    category: 'image',
    tags: ['Midjourney', '产品', '电商'],
    model: 'Midjourney V6',
    featured: true,
    examples: [
      {
        prompt: 'Minimalist skincare bottle on soft pink gradient background, clean modern aesthetic, soft shadows, premium beauty brand style --ar 4:5 --v 6.1 --s 150',
        result: '高端美妆产品展示图'
      }
    ],
    createdAt: '2026-05-02',
  },
  {
    id: 'mj-logo-design',
    title: 'Midjourney Logo 设计',
    titleEn: 'Midjourney Logo Design',
    description: '品牌 Logo 和图标设计',
    content: `[Logo type] logo design for [brand/company], [style], [symbol/icon description], [colors], clean lines, vector style, white background, --ar 1:1 --v 6.1

Logo 类型模板：

极简图标：
Minimalist logo icon of [symbol], geometric shapes, clean lines, [color], flat design, modern tech aesthetic, white background, --ar 1:1 --v 6.1 --s 50

文字标识：
Wordmark logo for "[BRAND NAME]", [typography style], [color scheme], clean and memorable, professional brand identity, white background, --ar 3:1 --v 6.1

徽章标志：
Badge logo for [brand], [industry], [elements], vintage/modern style, [colors], emblem design, white background, --ar 1:1 --v 6.1 --s 150

吉祥物：
Mascot logo for [brand], [character description], friendly and approachable, [colors], cartoon style, white background, --ar 1:1 --v 6.1

渐变图标：
Gradient logo icon of [symbol], [color1] to [color2] gradient, modern app icon style, glossy finish, white background, --ar 1:1 --v 6.1`,
    category: 'image',
    tags: ['Midjourney', 'Logo', '设计'],
    model: 'Midjourney V6',
    featured: true,
    hot: true,
    examples: [
      {
        prompt: 'Minimalist logo design, geometric fox head, clean angular lines, gradient orange to amber, flat vector style, white background, modern tech aesthetic --ar 1:1 --v 6.1 --s 50',
        result: '现代感的几何狐狸 Logo'
      }
    ],
    createdAt: '2026-05-02',
  },
];

// 辅助函数
export function getPromptsByCategory(categoryId: string) {
  return prompts.filter((prompt) => prompt.category === categoryId);
}

export function getFeaturedPrompts() {
  return prompts.filter((prompt) => prompt.featured);
}

export function getHotPrompts() {
  return prompts.filter((prompt) => prompt.hot);
}

export function searchPrompts(query: string) {
  const q = query.toLowerCase();
  return prompts.filter(
    (prompt) =>
      prompt.title.toLowerCase().includes(q) ||
      prompt.description.toLowerCase().includes(q) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      prompt.content.toLowerCase().includes(q)
  );
}

export function getPromptById(id: string) {
  return prompts.find((prompt) => prompt.id === id);
}

export function getCategoryById(id: string) {
  return promptCategories.find((cat) => cat.id === id);
}
