export type PromptMediaType = "image" | "video" | "text" | "audio" | "code";

export interface PromptMedia {
  type: "image" | "video";
  url: string;
  poster?: string;
  alt: string;
  altEn?: string;
  caption?: string;
  captionEn?: string;
}

export interface PromptBreakdownItem {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
}

export interface PromptTimelineItem {
  stage: string;
  stageEn?: string;
  detail: string;
  detailEn?: string;
}

export interface PromptShowcase {
  id: string;
  mediaType: PromptMediaType;
  cover: PromptMedia;
  gallery?: PromptMedia[];
  videoUrl?: string;
  videoPoster?: string;
  promptFull: string;
  promptFullEn?: string;
  promptBreakdown: PromptBreakdownItem[];
  parameters?: PromptBreakdownItem[];
  timeline?: PromptTimelineItem[];
  useCase: string;
  useCaseEn?: string;
  sourceName?: string;
  sourceUrl?: string;
  model: string;
  platform: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  featuredOnHome?: boolean;
  referenceNote?: string;
  referenceNoteEn?: string;
  similarPromptIds: string[];
  seoDescription: string;
  seoDescriptionEn?: string;
}

const imagePosterA =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80";
const imagePosterB =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";
const imagePosterC =
  "https://images.unsplash.com/photo-1516239329098-61ec7f7f6d75?auto=format&fit=crop&w=1200&q=80";
const imagePosterD =
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80";
const imagePosterE =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80";
const imagePosterF =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";
const imagePosterG =
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80";
const imagePosterH =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80";

const videoPosterA =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80";
const videoPosterB =
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80";
const videoPosterC =
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80";
const videoPosterD =
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80";

const sampleVideoA = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const sampleVideoB = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const sampleVideoC = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const sampleVideoD = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

export const promptShowcases: PromptShowcase[] = [
  {
    id: "midjourney-portrait",
    mediaType: "image",
    cover: {
      type: "image",
      url: imagePosterA,
      alt: "时尚人像摄影风格样例图",
      altEn: "Fashion portrait style showcase",
      caption: "适合时尚摄影、个人写真和品牌视觉页。",
      captionEn: "Great for fashion shoots, personal portraits, and brand visuals.",
    },
    gallery: [
      { type: "image", url: imagePosterA, alt: "黄金时刻人像", altEn: "Golden hour portrait" },
      { type: "image", url: imagePosterC, alt: "城市街头人像", altEn: "Urban portrait" },
    ],
    promptFull:
      "A portrait of a young woman with flowing red hair, fashion editorial styling, soft golden hour light, urban street background with subtle bokeh, warm cinematic mood, Canon EOS R5, 85mm f/1.2 lens, shallow depth of field, skin texture preserved, professional color grading, --ar 4:5 --v 6 --style raw",
    promptBreakdown: [
      { label: "主体", labelEn: "Subject", value: "年轻女性、长发、时尚 editorial 造型", valueEn: "Young woman, flowing hair, editorial styling" },
      { label: "风格", labelEn: "Style", value: "时尚摄影、电影感、真实皮肤质感", valueEn: "Fashion photography, cinematic, realistic skin texture" },
      { label: "光线", labelEn: "Lighting", value: "黄金时刻柔光 + 轻微高光轮廓", valueEn: "Golden-hour soft light with subtle rim light" },
      { label: "背景", labelEn: "Background", value: "城市街景 + bokeh 虚化", valueEn: "Urban street with soft bokeh" },
    ],
    parameters: [
      { label: "镜头", labelEn: "Lens", value: "85mm f/1.2" },
      { label: "比例", labelEn: "Aspect Ratio", value: "4:5" },
      { label: "模型", labelEn: "Model", value: "Midjourney v6 / style raw" },
    ],
    useCase: "适合做小红书封面、摄影工作室案例图、时尚品牌社媒图。",
    useCaseEn: "Best for editorial covers, studio portfolios, and fashion social posts.",
    sourceName: "Midjourney Prompting Guide",
    sourceUrl: "https://docs.midjourney.com/hc/en-us/articles/32835253061645-Art-of-Prompting",
    model: "Midjourney",
    platform: ["Midjourney"],
    difficulty: "beginner",
    featuredOnHome: true,
    referenceNote: "案例图用于展示 prompt 结构与视觉方向，实际生成结果会受模型版本和 seed 影响。",
    referenceNoteEn: "This showcase demonstrates prompt structure and visual direction. Actual outputs vary by model version and seed.",
    similarPromptIds: ["midjourney-landscape", "gpt-image-editorial", "stable-diffusion-guide"],
    seoDescription: "Midjourney 人像摄影提示词案例，包含成图展示、细节关键词、镜头参数和可直接复制的完整 prompt。",
    seoDescriptionEn: "Midjourney portrait prompt example with preview image, prompt breakdown, lens settings, and a copy-ready full prompt.",
  },
  {
    id: "midjourney-landscape",
    mediaType: "image",
    cover: { type: "image", url: imagePosterB, alt: "山地风景摄影样例", altEn: "Landscape photography example" },
    gallery: [
      { type: "image", url: imagePosterB, alt: "高山和薄雾", altEn: "Mountains and mist" },
      { type: "image", url: imagePosterG, alt: "森林与湖泊", altEn: "Forest and lake" },
    ],
    promptFull:
      "Breathtaking mountain landscape with snow-capped peaks, dramatic golden hour light breaking through clouds, atmospheric mist in the valley, cinematic wide-angle composition, Sony A7R IV, 16-35mm lens, HDR processing, 8K ultra detailed, --ar 16:9 --v 6 --style raw",
    promptBreakdown: [
      { label: "场景", labelEn: "Scene", value: "雪山、云层穿透光、山谷雾气", valueEn: "Snow peaks, breakthrough light, valley mist" },
      { label: "风格", labelEn: "Style", value: "电影感写实风景摄影", valueEn: "Cinematic realistic landscape photography" },
      { label: "构图", labelEn: "Composition", value: "广角全景 + 纵深层次", valueEn: "Wide panoramic framing with depth" },
      { label: "画质", labelEn: "Quality", value: "HDR、8K、细节强化", valueEn: "HDR, 8K, enhanced detail" },
    ],
    parameters: [
      { label: "镜头", labelEn: "Lens", value: "16-35mm 广角镜头", valueEn: "16-35mm wide-angle lens" },
      { label: "比例", labelEn: "Aspect Ratio", value: "16:9" },
      { label: "风格参数", labelEn: "Style Params", value: "--style raw --v 6" },
    ],
    useCase: "适合旅游封面图、桌面壁纸、城市/自然专题页头图。",
    useCaseEn: "Ideal for travel covers, wallpapers, and editorial hero images.",
    sourceName: "Midjourney Prompting Guide",
    sourceUrl: "https://docs.midjourney.com/hc/en-us/articles/32835253061645-Art-of-Prompting",
    model: "Midjourney",
    platform: ["Midjourney"],
    difficulty: "beginner",
    similarPromptIds: ["flux-environment", "stable-diffusion-guide", "runway-gen3"],
    seoDescription: "风景摄影类图片提示词示例，适合做自然风景、旅游页面和电影感壁纸。",
    seoDescriptionEn: "Landscape prompt example for scenic visuals, travel pages, and cinematic wallpapers.",
  },
  {
    id: "stable-diffusion-guide",
    mediaType: "image",
    cover: { type: "image", url: imagePosterC, alt: "Stable Diffusion 动漫人像样例", altEn: "Stable Diffusion anime portrait example" },
    promptFull:
      "Positive: (masterpiece, best quality, highres:1.2), 1girl, silver hair, elegant white dress, standing in moonlit garden, detailed eyes, soft moonlight, dreamy atmosphere, art nouveau details. Negative: (low quality, worst quality:1.4), blurry, distorted hands, text, watermark, signature",
    promptBreakdown: [
      { label: "正向词", labelEn: "Positive Prompt", value: "画质强化 + 主体 + 场景 + 氛围 + 艺术风格", valueEn: "Quality boost + subject + scene + atmosphere + art style" },
      { label: "负面词", labelEn: "Negative Prompt", value: "低质量、手部畸形、文字、水印", valueEn: "Low quality, bad hands, text, watermark" },
      { label: "风格", labelEn: "Style", value: "新艺术风格 + 梦幻月光", valueEn: "Art nouveau with dreamy moonlight" },
    ],
    parameters: [
      { label: "适配平台", labelEn: "Best Platforms", value: "AUTOMATIC1111、ComfyUI、Civitai 模型" },
      { label: "推荐补充", labelEn: "Helpful Add-ons", value: "LoRA、ControlNet、Hires fix" },
    ],
    useCase: "适合动漫角色海报、设定图、视觉小说封面和同人作品。",
    useCaseEn: "Useful for anime posters, character sheets, VN covers, and fan art.",
    sourceName: "Civitai",
    sourceUrl: "https://civitai.com/",
    model: "Stable Diffusion",
    platform: ["AUTOMATIC1111", "ComfyUI", "Civitai"],
    difficulty: "intermediate",
    featuredOnHome: true,
    similarPromptIds: ["flux-product-scene", "ideogram-logo", "midjourney-portrait"],
    seoDescription: "Stable Diffusion 提示词指南，包含正向词、负面词、风格标签与实战建议。",
    seoDescriptionEn: "Stable Diffusion prompt guide with positive prompts, negative prompts, style tags, and practical setup notes.",
  },
  {
    id: "dalle-product",
    mediaType: "image",
    cover: { type: "image", url: imagePosterD, alt: "产品摄影样例图", altEn: "Product photography showcase" },
    promptFull:
      "Professional product photography of matte white wireless earbuds, floating on a clean pastel gradient backdrop, soft studio light with subtle contact shadow, luxury tech brand mood, crisp edges, 4K commercial quality, shallow depth of field",
    promptBreakdown: [
      { label: "产品主体", labelEn: "Product", value: "无线耳机 + 哑光白外壳", valueEn: "Wireless earbuds with matte white finish" },
      { label: "布光", labelEn: "Lighting", value: "棚拍柔光 + 接触阴影", valueEn: "Soft studio light with contact shadow" },
      { label: "商业感", labelEn: "Commercial Feel", value: "高级科技品牌、边缘清晰、背景简洁", valueEn: "Premium tech brand feel with clean backdrop" },
    ],
    parameters: [
      { label: "适用模型", labelEn: "Best Models", value: "GPT Image / DALL-E 3" },
      { label: "比例建议", labelEn: "Aspect Ratio", value: "1:1、4:5、16:9" },
    ],
    useCase: "适合电商首图、广告 KV、App Store 截图和新品发布海报。",
    useCaseEn: "Good for ecommerce hero images, ad creatives, app store shots, and product launches.",
    sourceName: "OpenAI image prompting patterns",
    sourceUrl: "https://help.openai.com/",
    model: "DALL-E 3",
    platform: ["ChatGPT", "OpenAI API"],
    difficulty: "beginner",
    similarPromptIds: ["gpt-image-editorial", "flux-product-scene", "ideogram-logo"],
    seoDescription: "DALL-E 产品图提示词案例，适合做电商主图、广告图和新品首发视觉。",
    seoDescriptionEn: "DALL-E product prompt for ecommerce hero images, ads, and new product launch visuals.",
  },
  {
    id: "logo-design",
    mediaType: "image",
    cover: { type: "image", url: imagePosterE, alt: "品牌 Logo 设计样例", altEn: "Logo design showcase" },
    promptFull:
      "Minimalist logo design for an AI productivity brand called Nexus, abstract geometric mark representing connection and memory, electric blue and graphite palette, vector precision, white background, clean spacing, memorable silhouette",
    promptBreakdown: [
      { label: "品牌信息", labelEn: "Brand Intent", value: "AI 效率产品，强调连接、记忆与理性", valueEn: "AI productivity brand focused on connection and memory" },
      { label: "图形语言", labelEn: "Graphic Language", value: "几何、抽象、vector 精准线条", valueEn: "Geometric, abstract, vector-precise lines" },
      { label: "配色", labelEn: "Color Palette", value: "电光蓝 + 石墨灰", valueEn: "Electric blue and graphite" },
    ],
    parameters: [
      { label: "适用模型", labelEn: "Best Models", value: "Ideogram / GPT Image / Midjourney" },
      { label: "输出建议", labelEn: "Output Tips", value: "要求白底、可缩放、黑白版本可识别", valueEn: "Ask for white background, scalability, and black-and-white clarity" },
    ],
    useCase: "适合 SaaS 品牌初版 logo 探索、App 图标方向图和品牌视觉板。",
    useCaseEn: "Useful for early SaaS logo concepts, app icon directions, and brand boards.",
    model: "Ideogram",
    platform: ["Ideogram", "GPT Image", "Midjourney"],
    difficulty: "intermediate",
    similarPromptIds: ["ideogram-logo", "dalle-product", "gpt-image-editorial"],
    seoDescription: "AI Logo 提示词模板，适合品牌概念图、SaaS Logo 探索和图标方向稿。",
    seoDescriptionEn: "AI logo prompt template for brand concepts, SaaS logo exploration, and icon direction work.",
  },
  {
    id: "gpt-image-editorial",
    mediaType: "image",
    cover: { type: "image", url: imagePosterF, alt: "GPT Image 杂志封面风格图", altEn: "GPT Image editorial cover style" },
    promptFull:
      "Create an editorial portrait for a startup founder interview, neutral studio backdrop, directional side light, subtle grain, premium magazine styling, confident pose, modern tailoring, realistic skin texture, elegant typography-safe composition",
    promptBreakdown: [
      { label: "用途", labelEn: "Use Case", value: "创业者专访、杂志封面、品牌人物稿", valueEn: "Founder interviews, magazine covers, brand portraits" },
      { label: "构图", labelEn: "Composition", value: "留白可放标题，人物居中偏侧，安全排版区", valueEn: "Typography-safe composition with usable whitespace" },
      { label: "质感", labelEn: "Texture", value: "胶片颗粒、真实皮肤、现代订制感", valueEn: "Film grain, realistic skin, tailored editorial polish" },
    ],
    parameters: [
      { label: "模型", labelEn: "Model", value: "GPT Image" },
      { label: "场景建议", labelEn: "Scene Tips", value: "背景尽量简洁，突出人物与光线", valueEn: "Keep the background clean and let the light define the subject" },
    ],
    useCase: "适合个人品牌、创业者故事页和采访专题封面。",
    useCaseEn: "Ideal for personal branding, founder stories, and interview landing pages.",
    model: "GPT Image",
    platform: ["ChatGPT", "OpenAI API"],
    difficulty: "beginner",
    featuredOnHome: true,
    similarPromptIds: ["midjourney-portrait", "logo-design", "dalle-product"],
    seoDescription: "GPT Image 风格化人物图提示词，适合品牌人物图和杂志封面排版。",
    seoDescriptionEn: "GPT Image editorial portrait prompt for brand portraits and typography-safe magazine covers.",
  },
  {
    id: "flux-product-scene",
    mediaType: "image",
    cover: { type: "image", url: imagePosterH, alt: "Flux 产品场景图样例", altEn: "Flux product scene example" },
    promptFull:
      "Photoreal product scene for a glass skincare bottle on a brushed stone surface, morning window light, subtle water droplets, premium wellness aesthetic, close-up macro details, clean editorial composition, realistic reflections",
    promptBreakdown: [
      { label: "主体", labelEn: "Subject", value: "玻璃护肤瓶 + 石材台面", valueEn: "Glass skincare bottle on stone surface" },
      { label: "氛围", labelEn: "Mood", value: "晨光、清洁、疗愈、高级感", valueEn: "Morning light, clean, calming, premium" },
      { label: "细节", labelEn: "Detail", value: "水珠、反光、微距质感", valueEn: "Water droplets, reflections, macro texture" },
    ],
    parameters: [
      { label: "模型", labelEn: "Model", value: "Flux / Flux Pro" },
      { label: "适用比例", labelEn: "Aspect Ratio", value: "4:5 或 1:1" },
    ],
    useCase: "适合护肤、美妆、香氛和生活方式品牌商品图。",
    useCaseEn: "Great for skincare, beauty, fragrance, and lifestyle product imagery.",
    model: "Flux",
    platform: ["Black Forest Labs", "Replicate"],
    difficulty: "intermediate",
    similarPromptIds: ["dalle-product", "stable-diffusion-guide", "midjourney-landscape"],
    seoDescription: "Flux 产品场景提示词示例，适合高端商品图和生活方式视觉。",
    seoDescriptionEn: "Flux product scene prompt for premium product visuals and lifestyle creatives.",
  },
  {
    id: "ideogram-logo",
    mediaType: "image",
    cover: { type: "image", url: imagePosterE, alt: "Ideogram 品牌字标示例", altEn: "Ideogram wordmark example" },
    promptFull:
      "Design a clean wordmark logo for 'Signal Stack', modern developer tooling brand, sharp sans-serif lettering, precise kerning, electric cyan accent, geometric monogram variant, white background, startup-ready brand system mood",
    promptBreakdown: [
      { label: "字标", labelEn: "Wordmark", value: "强调 kerning、字体精度和识别度", valueEn: "Focus on kerning, precision, and readability" },
      { label: "品牌语气", labelEn: "Brand Tone", value: "开发者工具、现代、冷静、清晰", valueEn: "Modern, calm, clear developer-tooling tone" },
      { label: "变体", labelEn: "Variants", value: "字标 + monogram + favicon 方向", valueEn: "Wordmark, monogram, and favicon directions" },
    ],
    parameters: [
      { label: "适合模型", labelEn: "Best Fit", value: "Ideogram 2.0" },
      { label: "输出要求", labelEn: "Output Ask", value: "请生成 3 个字标方向和 1 个图标方向", valueEn: "Ask for 3 wordmark concepts and 1 icon concept" },
    ],
    useCase: "适合开发者产品、AI 工具和 B2B SaaS 品牌命名字标探索。",
    useCaseEn: "Useful for devtools, AI products, and B2B SaaS naming/logo exploration.",
    model: "Ideogram",
    platform: ["Ideogram"],
    difficulty: "intermediate",
    similarPromptIds: ["logo-design", "gpt-image-editorial", "dalle-product"],
    seoDescription: "Ideogram 字标 Logo 提示词，适合开发者产品和 SaaS 品牌视觉探索。",
    seoDescriptionEn: "Ideogram logo prompt for developer products and SaaS brand identity exploration.",
  },
  {
    id: "sora-video",
    mediaType: "video",
    cover: { type: "image", url: videoPosterA, alt: "Sora 视频提示词案例封面", altEn: "Sora video prompt showcase" },
    videoUrl: sampleVideoA,
    videoPoster: videoPosterA,
    promptFull:
      "Aerial shot slowly descending through morning fog to reveal a traditional Japanese village nestled in mountains, the camera glides forward through narrow streets, cherry blossoms drifting in the air, soft morning light, peaceful cinematic atmosphere, smooth gimbal movement, 4K quality",
    promptBreakdown: [
      { label: "场景", labelEn: "Scene", value: "山中日式村落 + 晨雾 + 樱花飘落", valueEn: "Mountain village, morning fog, drifting blossoms" },
      { label: "镜头", labelEn: "Camera", value: "航拍下降后转为向前推进", valueEn: "Aerial descent transitioning into a forward glide" },
      { label: "氛围", labelEn: "Mood", value: "宁静、电影感、呼吸感", valueEn: "Peaceful, cinematic, breathable pacing" },
    ],
    timeline: [
      { stage: "开场", stageEn: "Opening", detail: "云雾中俯冲，先露出山体和村庄轮廓", detailEn: "Descend through mist to reveal the valley and village silhouette" },
      { stage: "中段", stageEn: "Middle", detail: "镜头推进到街道，樱花与建筑形成纵深", detailEn: "Push into the streets with blossoms creating depth" },
      { stage: "结尾", stageEn: "Ending", detail: "保持慢节奏收尾，停留在安静生活感", detailEn: "Land on a quiet, lived-in atmosphere with a gentle ending" },
    ],
    useCase: "适合旅游宣传片、氛围感短片和故事片头镜头。",
    useCaseEn: "Great for travel ads, mood films, and cinematic opening shots.",
    sourceName: "OpenAI Sora prompting guidance",
    sourceUrl: "https://help.openai.com/en/articles/12460853",
    model: "Sora",
    platform: ["OpenAI"],
    difficulty: "intermediate",
    featuredOnHome: true,
    referenceNote: "视频仅作为动态展示占位，重点是镜头语言拆解和 prompt 写法。",
    referenceNoteEn: "The preview video is a visual placeholder; the main value is the camera-language breakdown and prompt structure.",
    similarPromptIds: ["runway-gen3", "kling-cinematic-ad", "cinematic-broll-generator"],
    seoDescription: "Sora 视频提示词案例，包含动态展示、镜头运动描述和分段式 prompt 拆解。",
    seoDescriptionEn: "Sora prompt example with video preview, camera movement guidance, and staged prompt breakdown.",
  },
  {
    id: "runway-gen3",
    mediaType: "video",
    cover: { type: "image", url: videoPosterB, alt: "Runway Gen-3 视频案例封面", altEn: "Runway Gen-3 example cover" },
    videoUrl: sampleVideoB,
    videoPoster: videoPosterB,
    promptFull:
      "A young woman with flowing red hair standing in a wheat field at sunset, wind gently moving her dress and hair, golden light, camera slowly arcs around her, the environment dissolves into floating particles of light, dreamlike transition, cinematic quality",
    promptBreakdown: [
      { label: "主角动作", labelEn: "Character Motion", value: "人物基本静止，只保留头发和服装受风摆动", valueEn: "Keep the subject mostly still and let wind drive subtle motion" },
      { label: "镜头语言", labelEn: "Camera Motion", value: "缓慢环绕，增强空间和情绪", valueEn: "Use a slow orbit to add spatial emotion" },
      { label: "转场", labelEn: "Transition", value: "由实景溶解为粒子，制造梦境感", valueEn: "Dissolve the scene into particles for a dreamlike shift" },
    ],
    timeline: [
      { stage: "起始画面", stageEn: "Opening Frame", detail: "先交代夕阳麦田与人物静态站姿", detailEn: "Establish the sunset field and subject pose first" },
      { stage: "运动过程", stageEn: "Motion Phase", detail: "环绕镜头配合风动，让画面有呼吸感", detailEn: "Let orbit and wind create gentle movement" },
      { stage: "视觉高潮", stageEn: "Peak", detail: "人物与环境转化为光粒，完成情绪升华", detailEn: "Transform the subject and scene into glowing particles" },
    ],
    useCase: "适合品牌短片、MV 氛围镜头和视觉实验片段。",
    useCaseEn: "Works well for branded shorts, music video moods, and visual experiments.",
    sourceName: "Runway inspiration patterns",
    sourceUrl: "https://runwayml.com/",
    model: "Runway Gen-3",
    platform: ["Runway"],
    difficulty: "intermediate",
    similarPromptIds: ["sora-video", "kling-cinematic-ad", "product-teaser-video"],
    seoDescription: "Runway Gen-3 视频提示词指南，重点展示开头、运动、转场和结尾的写法。",
    seoDescriptionEn: "Runway Gen-3 guide covering opening frames, motion, transitions, and endings.",
  },
  {
    id: "video-script",
    mediaType: "video",
    cover: { type: "image", url: videoPosterC, alt: "短视频脚本示例封面", altEn: "Short-form video script cover" },
    videoUrl: sampleVideoC,
    videoPoster: videoPosterC,
    promptFull:
      "Create a 30-second short video script for a productivity app launch: hook in the first 3 seconds, show the daily chaos problem, reveal the app workflow, include caption copy, shot list, B-roll ideas, and a final CTA that drives comments or saves.",
    promptBreakdown: [
      { label: "钩子", labelEn: "Hook", value: "前 3 秒用痛点或反差抓注意力", valueEn: "Use pain or contrast in the first 3 seconds" },
      { label: "结构", labelEn: "Structure", value: "问题 -> 转折 -> 解决方案 -> CTA", valueEn: "Problem -> twist -> solution -> CTA" },
      { label: "镜头", labelEn: "Shot List", value: "文案、画面、动作提示要一起给出", valueEn: "Pair captions, visuals, and actions in the same script" },
    ],
    timeline: [
      { stage: "0-3 秒", stageEn: "0-3s", detail: "夸张展示低效工作状态", detailEn: "Show the pain point with exaggerated inefficiency" },
      { stage: "3-15 秒", stageEn: "3-15s", detail: "引出产品并给出 1 个最爽的使用瞬间", detailEn: "Reveal the product and show the most satisfying moment" },
      { stage: "15-30 秒", stageEn: "15-30s", detail: "完成展示后收束到互动 CTA", detailEn: "Close with a save/comment CTA after the core demo" },
    ],
    useCase: "适合抖音、小红书、Reels、Shorts 的脚本起草。",
    useCaseEn: "Useful for TikTok, Reels, Shorts, and Xiaohongshu scripting.",
    model: "GPT-4 / Claude",
    platform: ["ChatGPT", "Claude"],
    difficulty: "beginner",
    similarPromptIds: ["cinematic-broll-generator", "product-teaser-video", "sora-video"],
    seoDescription: "短视频脚本 prompt 模板，适合产品发布、教程和知识类短视频。",
    seoDescriptionEn: "Short video script prompt template for product launches, tutorials, and educational clips.",
  },
  {
    id: "kling-cinematic-ad",
    mediaType: "video",
    cover: { type: "image", url: videoPosterD, alt: "Kling 广告感视频样例", altEn: "Kling cinematic ad showcase" },
    videoUrl: sampleVideoD,
    videoPoster: videoPosterD,
    promptFull:
      "A premium electric car drives through a neon-lit city after rain, low camera angle tracking along the side body, reflections sliding across the metal surface, brief close-up on headlights, cinematic ad pacing, dense night atmosphere, high contrast highlights",
    promptBreakdown: [
      { label: "主体", labelEn: "Subject", value: "高端电车 + 夜晚城市霓虹", valueEn: "Premium EV in a neon city at night" },
      { label: "镜头运动", labelEn: "Motion", value: "低机位跟拍 + 细节特写切换", valueEn: "Low-angle tracking with detail cut-ins" },
      { label: "广告感", labelEn: "Ad Language", value: "反光、速度感、节奏克制", valueEn: "Reflections, speed, and controlled pacing" },
    ],
    timeline: [
      { stage: "开场", stageEn: "Opening", detail: "先用低机位跟车建立速度和质感", detailEn: "Open with a low-angle tracking shot for speed and materiality" },
      { stage: "中段", stageEn: "Middle", detail: "插入灯组与车身反光特写", detailEn: "Cut into headlights and body reflections" },
      { stage: "收尾", stageEn: "Ending", detail: "车驶离画面，保留尾灯与城市气氛", detailEn: "Let the car leave frame, ending on taillights and city mood" },
    ],
    useCase: "适合汽车广告、数码产品宣传和质感型品牌短片。",
    useCaseEn: "Great for auto ads, tech product campaigns, and premium brand films.",
    model: "Kling",
    platform: ["Kling"],
    difficulty: "advanced",
    featuredOnHome: true,
    similarPromptIds: ["runway-gen3", "product-teaser-video", "sora-video"],
    seoDescription: "Kling 视频提示词示例，适合广告感强、镜头语言明确的短片创作。",
    seoDescriptionEn: "Kling prompt example for ad-style short films with strong camera language.",
  },
  {
    id: "cinematic-broll-generator",
    mediaType: "video",
    cover: { type: "image", url: videoPosterB, alt: "电影感 B-roll 提示词示例", altEn: "Cinematic B-roll prompt example" },
    videoUrl: sampleVideoB,
    videoPoster: videoPosterB,
    promptFull:
      "Generate cinematic B-roll for a founder desk scene: keyboard typing close-up, coffee steam, cursor moving on a product roadmap, window light across the table, slow push-ins, shallow depth of field, calm but ambitious mood",
    promptBreakdown: [
      { label: "场景颗粒度", labelEn: "Scene Granularity", value: "不要只写办公室，要拆成键盘、咖啡、屏幕、手部动作", valueEn: "Break 'office' into keyboard, coffee, screen, and hand actions" },
      { label: "镜头节奏", labelEn: "Pacing", value: "多个慢速 push-in 和 close-up 组合", valueEn: "Use several slow push-ins and close-up inserts" },
      { label: "情绪", labelEn: "Mood", value: "安静但有野心，适合 SaaS 或创业者叙事", valueEn: "Quiet but ambitious, good for SaaS founder storytelling" },
    ],
    useCase: "适合产品宣传片、创业者访谈、SaaS 官网品牌视频。",
    useCaseEn: "Perfect for product films, founder interviews, and SaaS brand videos.",
    model: "Sora / Runway / Kling",
    platform: ["Sora", "Runway", "Kling"],
    difficulty: "beginner",
    similarPromptIds: ["video-script", "sora-video", "product-teaser-video"],
    seoDescription: "电影感 B-roll 视频 prompt 模板，适合官网品牌片和产品故事短片。",
    seoDescriptionEn: "Cinematic B-roll prompt template for brand films and product storytelling.",
  },
  {
    id: "product-teaser-video",
    mediaType: "video",
    cover: { type: "image", url: videoPosterD, alt: "产品预告短片样例", altEn: "Product teaser video showcase" },
    videoUrl: sampleVideoD,
    videoPoster: videoPosterD,
    promptFull:
      "Create an 8-second teaser for a new AI coding tool: dark interface lights up, typing sparks a fast UI build, macro keyboard shot, glitch-to-clean transition, short motion typography, ending on the product name and launch date",
    promptBreakdown: [
      { label: "信息密度", labelEn: "Information Density", value: "8 秒内只讲一个爽点，不要塞太多功能", valueEn: "In 8 seconds, sell one satisfying moment rather than many features" },
      { label: "转场", labelEn: "Transition", value: "先 glitch 再 clean，适合工具类新品预告", valueEn: "Use a glitch-to-clean transition for tool launches" },
      { label: "收尾", labelEn: "Ending", value: "品牌名 + 日期 + CTA", valueEn: "End with product name, date, and CTA" },
    ],
    timeline: [
      { stage: "前 2 秒", stageEn: "First 2s", detail: "用暗场 + UI 点亮制造期待", detailEn: "Open dark and light up the UI to build anticipation" },
      { stage: "中段", stageEn: "Middle", detail: "展示最强功能的高能瞬间", detailEn: "Show the strongest feature in a punchy moment" },
      { stage: "结尾", stageEn: "Ending", detail: "落到产品名和发布时间", detailEn: "Land on the product name and release date" },
    ],
    useCase: "适合 Product Hunt、X、独立开发者新品预告和官网首屏动效参考。",
    useCaseEn: "Useful for Product Hunt, X, indie launch teasers, and website hero motion references.",
    model: "Runway / Kling / Sora",
    platform: ["Runway", "Kling", "Sora"],
    difficulty: "intermediate",
    featuredOnHome: true,
    similarPromptIds: ["video-script", "kling-cinematic-ad", "cinematic-broll-generator"],
    seoDescription: "产品预告视频提示词，适合新品发布、AI 工具营销视频和首屏动效灵感。",
    seoDescriptionEn: "Product teaser video prompt for launches, AI tool marketing clips, and hero motion inspiration.",
  },
];

export function getPromptShowcaseById(id: string) {
  return promptShowcases.find((showcase) => showcase.id === id);
}

export function getFeaturedPromptShowcases(limit?: number) {
  const items = promptShowcases.filter((showcase) => showcase.featuredOnHome);
  return typeof limit === "number" ? items.slice(0, limit) : items;
}
