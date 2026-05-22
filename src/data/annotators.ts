
export interface AnnotatorPromptCategory {
  id: string;
  name: string;
  nameEn: string;
}

export interface AnnotatorPromptSeed {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  categoryId: string;
  categoryName: string;
  categoryNameEn: string;
  author: string;
  prompt: string;
  image?: string;
  tags: string[];
}

export const annotatorPromptCategories: AnnotatorPromptCategory[] = [
  {
    "id": "text-rendering",
    "name": "文字渲染",
    "nameEn": "Typography & Text Rendering"
  },
  {
    "id": "brand-visual-system",
    "name": "品牌视觉系统",
    "nameEn": "Brand Visual Systems"
  },
  {
    "id": "art-illustration",
    "name": "艺术风格与插画",
    "nameEn": "Art Styles & Illustration"
  },
  {
    "id": "pixel-game-assets",
    "name": "像素艺术与游戏资产",
    "nameEn": "Pixel Art & Game Assets"
  },
  {
    "id": "ui-product-design",
    "name": "界面与产品设计",
    "nameEn": "UI & Product Design"
  },
  {
    "id": "photoreal-shoot",
    "name": "摄影级出图",
    "nameEn": "Photoreal Shoots"
  },
  {
    "id": "panorama-360",
    "name": "全景与360°",
    "nameEn": "Panorama & 360"
  },
  {
    "id": "ecommerce-product-game",
    "name": "产品电商与游戏",
    "nameEn": "Product, Ecommerce & Game"
  },
  {
    "id": "anime-2d-style",
    "name": "动漫与二次元风格",
    "nameEn": "Anime & 2D Styles"
  }
];

export const annotatorPromptSeeds: AnnotatorPromptSeed[] = [
  {
    "id": "annotator-zhouluobo-01",
    "title": "文字渲染 Prompt 1",
    "titleEn": "Typography & Text Rendering Prompt 1",
    "description": "文字渲染类提示词，作者 dotey（宝玉）",
    "descriptionEn": "Typography & Text Rendering prompt, authored by @dotey（宝玉）",
    "categoryId": "text-rendering",
    "categoryName": "文字渲染",
    "categoryNameEn": "Typography & Text Rendering",
    "author": "@dotey（宝玉）",
    "prompt": "1960s French New Wave theatrical poster, bold photomontage composition,\ntorn-paper collage sensibility, pop-art color bursts, high-contrast\nblack-and-white imagery with selective red blue and yellow accents,\nhand-made offset-print texture, slightly off-register ink, expressive\nasymmetry, art-house poster cool, graphic spontaneity, street-poster\nenergy, adventurous typography-led design.\n\nPoster text:\n- Large title at the bottom: \"GPT Image 2.0\"\n- Smaller headline at the top: \"Image generation with a point of view\"\n- Small footer text: \"Coming soon\"\n\nKeep all visible text in English.\nUse a theatrical poster composition.\n1960 年代法国新浪潮戏剧海报，大胆的拼贴构成，\n撕纸拼贴的质感，波普艺术色彩爆发，高对比度\n黑白影像，选择性加入红、蓝、黄点缀，\n手工凹版印刷纹理，略微偏移的油墨，富有表现力\n不对称，艺术海报酷炫，图形自发性，街头海报\n活力，冒险的、以字体为主导的设计。\n\n海报文字：\n- 底部大标题：\"GPT Image 2.0\"\n- 顶部较小的标题：\"带有视角的图像生成\"\n- 小型页脚文字：\"即将推出\"\n\n保持所有可见文字为英文。\n使用戏剧海报构图。",
    "image": "https://pbs.twimg.com/media/HI12L1NaMAE9ZVw?format=jpg&name=small",
    "tags": [
      "gpt-image-2",
      "文字渲染"
    ]
  },
  {
    "id": "annotator-zhouluobo-02",
    "title": "文字渲染 Prompt 2",
    "titleEn": "Typography & Text Rendering Prompt 2",
    "description": "文字渲染类提示词，作者 dotey（宝玉）",
    "descriptionEn": "Typography & Text Rendering prompt, authored by @dotey（宝玉）",
    "categoryId": "text-rendering",
    "categoryName": "文字渲染",
    "categoryNameEn": "Typography & Text Rendering",
    "author": "@dotey（宝玉）",
    "prompt": "I am creating a magazine page with the theme of \"visual polyglot\".\nThe title in the center of the image should be \"Create Everything at Once\".\n\nCreate a piece of art celebrating visual creations, not limited to\nbeautiful photographs but also across the full breadth of human visual\nculture and natural visual elements. There should be curated collage\nrepresenting the diverse distribution: scientific diagrams, the periodic\ntable, the solar system, medieval manuscript pages, botanical\nillustrations, anatomical drawings, old maps, climate charts,\nengineering schematics, transit signage, multilingual text, comic\npanels, UI screenshots, a camera photo, a butterfly specimen, pie\ncharts, architectural blueprints, and façade drawings.\n\nUse an unstructured, creative and artistic layout, such as but not\nlimited to fan out, avoid grid-like layouts. Portrait 4:5 aspect\nratio. Don't add any content text beside the \"Create Everything at\nOnce\" title. Text as part of the art is okay.\nAvoid a beige tint of the overall style.",
    "image": "https://pbs.twimg.com/media/HI12emqaAAA1Jyx?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "文字渲染"
    ]
  },
  {
    "id": "annotator-zhouluobo-03",
    "title": "文字渲染 Prompt 3",
    "titleEn": "Typography & Text Rendering Prompt 3",
    "description": "文字渲染类提示词，作者 JeffLadish",
    "descriptionEn": "Typography & Text Rendering prompt, authored by @JeffLadish",
    "categoryId": "text-rendering",
    "categoryName": "文字渲染",
    "categoryNameEn": "Typography & Text Rendering",
    "author": "@JeffLadish",
    "prompt": "Please make a poster explaining some of the interesting results from\nthis January 2026 AI drone competition: [把网页文字直接粘贴进来]",
    "image": "https://pbs.twimg.com/media/HI12z4haIAAtm0d?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "文字渲染"
    ]
  },
  {
    "id": "annotator-zhouluobo-04",
    "title": "文字渲染 Prompt 4",
    "titleEn": "Typography & Text Rendering Prompt 4",
    "description": "文字渲染类提示词，作者 LudovicCreator",
    "descriptionEn": "Typography & Text Rendering prompt, authored by @LudovicCreator",
    "categoryId": "text-rendering",
    "categoryName": "文字渲染",
    "categoryNameEn": "Typography & Text Rendering",
    "author": "@LudovicCreator",
    "prompt": "Design a clean, modern infographic explaining how AI image generation\nmodels work. Use a structured, step-by-step layout with clear\nsections and visual flow (top-to-bottom or left-to-right).\n\nInclude these stages:\n1. Input Prompt – user enters a text description (show text box icon)\n2. Text Processing – AI interprets keywords and meaning (NLP concept)\n3. Latent Space / Encoding – convert text into numerical representation\n4. Image Generation Process – diffusion or generative model gradually\n   creates an image from noise\n5. Refinement – model improves details step by step\n6. Final Output – high-quality generated image\n\nUse simple icons (brain, data nodes, noise-to-image transition,\npixels, etc.) and arrows to show the process flow.\n\nStyle: tech-focused, futuristic, minimal but visually engaging.\nUse gradients (blue, purple, neon tones), dark or light background.\nInclude short captions (1–2 lines max per step), avoid clutter.\nOptional: add a small side section explaining 'Training Phase'\n(datasets, learning patterns, neural networks).\n\nMake it visually balanced, easy to understand for beginners, and\nsuitable for educational or social media use.",
    "image": "https://pbs.twimg.com/media/HI129f5bwAA3_07?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "文字渲染"
    ]
  },
  {
    "id": "annotator-zhouluobo-05",
    "title": "品牌视觉系统 Prompt 5",
    "titleEn": "Brand Visual Systems Prompt 5",
    "description": "品牌视觉系统类提示词，作者 LexnLin（Leon Lin）",
    "descriptionEn": "Brand Visual Systems prompt, authored by @LexnLin（Leon Lin）",
    "categoryId": "brand-visual-system",
    "categoryName": "品牌视觉系统",
    "categoryNameEn": "Brand Visual Systems",
    "author": "@LexnLin（Leon Lin）",
    "prompt": "Create a clean brand kit (multiple images) for [你的品牌名或描述]",
    "image": "https://pbs.twimg.com/media/HI13IvtbsAAW-2j?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "品牌视觉系统"
    ]
  },
  {
    "id": "annotator-zhouluobo-06",
    "title": "品牌视觉系统 Prompt 6",
    "titleEn": "Brand Visual Systems Prompt 6",
    "description": "品牌视觉系统类提示词，作者 rubenhume（Ruben Hume）",
    "descriptionEn": "Brand Visual Systems prompt, authored by @rubenhume（Ruben Hume）",
    "categoryId": "brand-visual-system",
    "categoryName": "品牌视觉系统",
    "categoryNameEn": "Brand Visual Systems",
    "author": "@rubenhume（Ruben Hume）",
    "prompt": "把 Logo 图形描述作为提示词输入\n→ 自动生成完整品牌身份系统：配色方案、辅助图形、应用场景（名片、包装、工牌等）",
    "image": "https://pbs.twimg.com/media/HI13OeNboAE7VJm?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "品牌视觉系统"
    ]
  },
  {
    "id": "annotator-zhouluobo-07",
    "title": "品牌视觉系统 Prompt 7",
    "titleEn": "Brand Visual Systems Prompt 7",
    "description": "品牌视觉系统类提示词，作者 aleenaamiir（Aleena Amir）",
    "descriptionEn": "Brand Visual Systems prompt, authored by @aleenaamiir（Aleena Amir）",
    "categoryId": "brand-visual-system",
    "categoryName": "品牌视觉系统",
    "categoryNameEn": "Brand Visual Systems",
    "author": "@aleenaamiir（Aleena Amir）",
    "prompt": "Create a complete visual worldbuilding set for a futuristic desert\ncivilization powered by solar technology, multiple images including\narchitecture, characters, clothing, vehicles, and maps, cohesive\ndesign language, cinematic realism, ultra detailed.",
    "image": "https://pbs.twimg.com/media/HI13Tp1aQAAOS2s?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "品牌视觉系统"
    ]
  },
  {
    "id": "annotator-zhouluobo-08",
    "title": "艺术风格 & 插画 Prompt 8",
    "titleEn": "Art Styles & Illustration Prompt 8",
    "description": "艺术风格与插画类提示词，作者 dotey（宝玉）",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @dotey（宝玉）",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@dotey（宝玉）",
    "prompt": "The painting contains only one face: that of an elegant young female\nmodel with little grin. The line that runs from her hair parting to\nseamlessly split her face in half is designed to look like violently\ntorn paper. The painting is perfectly, completely and forcibly divided\ninto two parts by one flowing lines that resemble tears in the paper:\n\n—Left side: Futuristic elegant pop art style with strategic cutie\nsmile subtly.\n—Right side: Hyper realistic beautiful natural style with smiling subtly.\n—Right side: Her beautiful natural upper-body is drowned by totally\nbeautiful marine-blue geometric halftone circles.\n\nStyle: The background is futuristic dreamy. The entire screen is\neffectively bright and maintains natural vividness. The high\nresolution, fine details, and soft blur are reminiscent of an\nelectron microscope.",
    "image": "https://pbs.twimg.com/media/HI13Wy2asAA-r3E?format=jpg&name=small",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-09",
    "title": "艺术风格 & 插画 Prompt 9",
    "titleEn": "Art Styles & Illustration Prompt 9",
    "description": "艺术风格与插画类提示词，作者 dotey（宝玉）",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @dotey（宝玉）",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@dotey（宝玉）",
    "prompt": "A page of a comic book in the style of modern indie comic\ntopic: a story for 6 years kids",
    "image": "https://pbs.twimg.com/media/HI13bjSa8AArR-d?format=jpg&name=small",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-10",
    "title": "艺术风格 & 插画 Prompt 10",
    "titleEn": "Art Styles & Illustration Prompt 10",
    "description": "艺术风格与插画类提示词，作者 fabianstelzer",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @fabianstelzer",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@fabianstelzer",
    "prompt": "\"the life of picasso as an infographic but the infographic is a\npainting of picasso itself\"",
    "image": "https://pbs.twimg.com/media/HI13gQfaEAAhXps?format=png&name=small",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-11",
    "title": "艺术风格 & 插画 Prompt 11",
    "titleEn": "Art Styles & Illustration Prompt 11",
    "description": "艺术风格与插画类提示词，作者 BubbleBrain",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @BubbleBrain",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@BubbleBrain",
    "prompt": "A striking Spring 2026 city poster for Boston with an elegant celebratory mood and a bold contemporary design. On a clean off-white textured background with large areas of negative space, a miniature single sculler rows across the lower right corner of the image on a narrow ribbon of reflective water. The wake from the oar sweeps upward in a dynamic calligraphic curve, gradually transforming into the Charles River and then into a dreamlike hand-painted panorama of Boston. Inside this flowing river-shaped composition are iconic Boston elements: the Back Bay skyline, Beacon Hill brownstones, Acorn Street, Boston Public Garden, Swan Boats, Zakim Bridge, Fenway-inspired details, historic brick architecture, harbor ferries, and the city’s waterfront atmosphere. Soft morning fog, golden spring light, subtle festive accents in crimson and gold, rich detail, layered depth, sophisticated city-poster aesthetics, fresh and refined, visually powerful but not overcrowded. Elegant typography in the lower left reads “SPRING 2026” with a vertical slogan “BOSTON, A CITY OF RIVER, MEMORY, AND INVENTION”, text clear and beautifully composed, premium graphic design, 9:16",
    "image": "https://pbs.twimg.com/media/HI13jcQagAA1jFT?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-12",
    "title": "艺术风格 & 插画 Prompt 12",
    "titleEn": "Art Styles & Illustration Prompt 12",
    "description": "艺术风格与插画类提示词，作者 WolfRiccardo",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @WolfRiccardo",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@WolfRiccardo",
    "prompt": "Modern pencil illustration of Vintage travel poster illustration of the Amalfi Coast, Italy, panoramic coastal cliff road scene, classic 1960s white car driving along a curved seaside road, deep blue Mediterranean sea with small sailboats, colorful pastel hillside village, bright blue sky with soft clouds, lemon tree branches with vibrant yellow lemons framing the foreground, warm summer sunlight, bold vibrant colors, retro 1950s travel poster style, cinematic composition, high detail, screen print texture, graphic illustration. Hand-drawn style, illustration with loose strokes and defined contours. High-contrast color palette, maintaining chromatic harmony between background and elements. Contemporary and decorative aesthetic.",
    "image": "https://pbs.twimg.com/media/HI13m5ebIAEcmFv?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-13",
    "title": "艺术风格 & 插画 Prompt 13",
    "titleEn": "Art Styles & Illustration Prompt 13",
    "description": "艺术风格与插画类提示词，作者 liyue_ai",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @liyue_ai",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@liyue_ai",
    "prompt": "极简新中式美学风格，画面以淡雅的灰白色为底，呈现出一种纸艺剪影般的立体感。一条S形蜿蜒的裂痕状边缘将画面分割，仿佛撕开了一层纸面，露出内部色彩斑斓的东方山水景象。裂口内，一条蜿蜒的河流自上而下贯穿整个构图，河水以深浅不一的蓝色渲染，层次分明，仿佛流动的丝带。河岸两侧点缀着青翠的山丘与梯田，色彩柔和，绿红交织，展现出田园的宁静之美。沿河而建的古风建筑错落有致，飞檐翘角，白墙黛瓦，在光影的映衬下更显古朴典雅。岸边树木葱茏，枝叶轻盈，一艘小船静泊于水中央，增添了几分悠然意境。整体构图呈S形曲线，富有韵律感，仿佛自然与人文的和谐共生。画作边缘采用撕纸效果，营造出立体浮雕般的视觉体验。下方题字“东方美学”以黑色楷体书写，日期“2026/04/18”与红色印章相呼应，底部“CHINA”字样庄重醒目，署名“@LIYUE”低调收尾，整体氛围静谧深远，充满诗意与哲思。",
    "image": "https://pbs.twimg.com/media/HI13vtPaUAApXEJ?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-14",
    "title": "艺术风格 & 插画 Prompt 14",
    "titleEn": "Art Styles & Illustration Prompt 14",
    "description": "艺术风格与插画类提示词，作者 liyue_ai",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @liyue_ai",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@liyue_ai",
    "prompt": "一张充满新春喜庆氛围但不失高雅格调的 2026 城市宣传海报。双重曝光，构图延续了S型的流动感；在纯白的纹理背景右下角，一个身穿中国传统服饰的微缩人物正在挥舞着一条长长的红色丝绸舞带，这条红绸在空中舞动，不仅展现出丝绸的柔顺质感，更在向左上方飘动的过程中，奇幻地变形成了一条壮丽的山脉河流。在这条“河流”中，叠加了一个有山有海河的广州城市手绘图，国潮，景色尽在眼底，壮阔雄伟，令人震撼。广州的地标建筑(广州塔，珠江新城建筑群，珠江, 广州城里古建筑，游轮，白云山）。云雾环绕，仙气缥缈，色彩丰富，结构复杂，细节丰富，但因为大面积的留白，画面依然显得清新脱俗，左下角排版着“SPRING 2026”和竖排的宣传语，整体寓意“千年商都，魅力广州”。文字排版优美，大方，字迹清晰完整，尺寸9:16。",
    "image": "https://pbs.twimg.com/media/HI14PnybcAI778L?format=jpg&name=medium",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-15",
    "title": "艺术风格 & 插画 Prompt 15",
    "titleEn": "Art Styles & Illustration Prompt 15",
    "description": "艺术风格与插画类提示词，作者 lilimliliychan",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @lilimliliychan",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@lilimliliychan",
    "prompt": "小悪魔リリムリリィちゃんが　スーパーファミコンのゲームだったときのポスターを考えて",
    "image": "https://pbs.twimg.com/media/HI14dMyaUAEirhA?format=jpg&name=small",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-16",
    "title": "艺术风格 & 插画 Prompt 16",
    "titleEn": "Art Styles & Illustration Prompt 16",
    "description": "艺术风格与插画类提示词，作者 liyue_ai",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @liyue_ai",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@liyue_ai",
    "prompt": "纯黑深邃底色，一条粗壮有力的墨色书法 S 型曲线自画面一端蜿蜒贯穿至另一端，构成整幅画面的视觉骨架与叙事动线。曲线上方是一只透明质感的画眉鸟，内部映射传统建筑叠影与蓝绿色光流；沿曲线错落分布广州地标与古典建筑序列，前景有白鹤与湖面，远景为层叠山峦。整体采用非线性透视、冷色调主导、暖色点缀，东方美学与现代意象交融，8K 超高清渲染，比例 9:16。",
    "image": "https://pbs.twimg.com/media/HI14jK3bwAE1Rxp?format=jpg&name=medium",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-17",
    "title": "艺术风格 & 插画 Prompt 17",
    "titleEn": "Art Styles & Illustration Prompt 17",
    "description": "艺术风格与插画类提示词，作者 Ghhhh3owi",
    "descriptionEn": "Art Styles & Illustration prompt, authored by @Ghhhh3owi",
    "categoryId": "art-illustration",
    "categoryName": "艺术风格与插画",
    "categoryNameEn": "Art Styles & Illustration",
    "author": "@Ghhhh3owi",
    "prompt": "收藏版史诗海报，人物侧脸剪影中生长出完整世界观与经典场景。整体偏电影海报加梦幻水彩插画风，安静、宏大、神圣、怀旧，带纸张颗粒、轻雾感、飞白刷痕与高级留白。",
    "image": "https://pbs.twimg.com/media/HI14pQ_bcAA7-iS?format=png&name=small",
    "tags": [
      "gpt-image-2",
      "艺术风格与插画"
    ]
  },
  {
    "id": "annotator-zhouluobo-18",
    "title": "像素艺术 & 游戏资产 Prompt 18",
    "titleEn": "Pixel Art & Game Assets Prompt 18",
    "description": "像素艺术与游戏资产类提示词，作者 ProperPrompter",
    "descriptionEn": "Pixel Art & Game Assets prompt, authored by @ProperPrompter",
    "categoryId": "pixel-game-assets",
    "categoryName": "像素艺术与游戏资产",
    "categoryNameEn": "Pixel Art & Game Assets",
    "author": "@ProperPrompter",
    "prompt": "Create a 10 × 10 grid of 100 different fantasy RPG items rendered in classic pixel art style (16-bit or 32-bit sprite aesthetic, reminiscent of SNES/GBA-era JRPGs). Each item should appear in its own square tile with a short clear label underneath. Keep the grid neat on a white background. Make every item visually distinct and every label correctly spelled. Use crisp pixel edges, limited palette per sprite, and subtle dithering for shading.\nUse these row themes:\nRow 1: swords and blades\nRow 2: shields and armor\nRow 3: bows, crossbows, and ranged weapons\nRow 4: staves, wands, and magical foci\nRow 5: potions, elixirs, and flasks\nRow 6: scrolls, tomes, and spellbooks\nRow 7: rings, amulets, and enchanted trinkets\nRow 8: helmets, crowns, and headgear\nRow 9: keys, relics, and quest items\nRow 10: gems, runes, and crafting materials\nShow each tile as a centered item sprite on a clean background square, rendered as a classic inventory icon — the kind you'd see in a fantasy RPG menu. Keep the overall style consistent, cohesive, and reminiscent of beloved retro fantasy RPGs — charming, detailed, and instantly readable at small sizes.",
    "image": "https://pbs.twimg.com/media/HI145kzaIAAoCcC?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "像素艺术与游戏资产"
    ]
  },
  {
    "id": "annotator-zhouluobo-19",
    "title": "像素艺术 & 游戏资产 Prompt 19",
    "titleEn": "Pixel Art & Game Assets Prompt 19",
    "description": "像素艺术与游戏资产类提示词，作者 chongdashu",
    "descriptionEn": "Pixel Art & Game Assets prompt, authored by @chongdashu",
    "categoryId": "pixel-game-assets",
    "categoryName": "像素艺术与游戏资产",
    "categoryNameEn": "Pixel Art & Game Assets",
    "author": "@chongdashu",
    "prompt": "Start off with a high resolution version of your character in pixel\nart style. Provide a 1024x1024 pixelated grid as a second reference\nimage. This helps guide the model to do better with how it lays\nout pixels.",
    "image": "https://pbs.twimg.com/media/HI14_91akAAWeIO?format=jpg&name=medium",
    "tags": [
      "gpt-image-2",
      "像素艺术与游戏资产"
    ]
  },
  {
    "id": "annotator-zhouluobo-20",
    "title": "界面 & 产品设计 Prompt 20",
    "titleEn": "UI & Product Design Prompt 20",
    "description": "界面与产品设计类提示词，作者 PaulSolt",
    "descriptionEn": "UI & Product Design prompt, authored by @PaulSolt",
    "categoryId": "ui-product-design",
    "categoryName": "界面与产品设计",
    "categoryNameEn": "UI & Product Design",
    "author": "@PaulSolt",
    "prompt": "Design a premium App Store icon for an AI-powered mobile app. The icon\nshould feel instantly recognizable, simple at small sizes, modern,\npolished, and visually striking in the App Store.\n\nStyle: glossy but refined, soft gradients, subtle depth, strong central\nsymbol, minimal background noise, high contrast silhouette, Apple-level\ncraft and clarity.\n\nOutput as a clean icon presentation with professional lighting and\nmultiple polished variations.",
    "image": "https://pbs.twimg.com/media/HI15DKwbIAAwmTg?format=jpg&name=medium",
    "tags": [
      "gpt-image-2",
      "界面与产品设计"
    ]
  },
  {
    "id": "annotator-zhouluobo-21",
    "title": "界面 & 产品设计 Prompt 21",
    "titleEn": "UI & Product Design Prompt 21",
    "description": "界面与产品设计类提示词，作者 ViralOps_",
    "descriptionEn": "UI & Product Design prompt, authored by @ViralOps_",
    "categoryId": "ui-product-design",
    "categoryName": "界面与产品设计",
    "categoryNameEn": "UI & Product Design",
    "author": "@ViralOps_",
    "prompt": "Generate a cohesive set of modern app UI screens for a startup product.\nCreate multiple interface views that all belong to the same design system.\n\nInclude:\n- landing / dashboard screen\n- analytics or stats screen\n- settings or profile screen\n- onboarding / sign-in flow\n\nStyle: premium SaaS, clean spacing, strong hierarchy, modern gradients,\nsoft shadows, rounded cards, clear typography, product-shot presentation,\nconsistent component system across all screens.",
    "image": "https://pbs.twimg.com/media/HI15IoZbYAAftNf?format=jpg&name=small",
    "tags": [
      "gpt-image-2",
      "界面与产品设计"
    ]
  },
  {
    "id": "annotator-zhouluobo-22",
    "title": "摄影级出图 Prompt 22",
    "titleEn": "Photoreal Shoots Prompt 22",
    "description": "摄影级出图类提示词，作者 JoshDaws",
    "descriptionEn": "Photoreal Shoots prompt, authored by @JoshDaws",
    "categoryId": "photoreal-shoot",
    "categoryName": "摄影级出图",
    "categoryNameEn": "Photoreal Shoots",
    "author": "@JoshDaws",
    "prompt": "\"Modernize this photo as if it was taken by an iPhone in 2026.\"",
    "image": "https://pbs.twimg.com/media/HI15MTXbMAAQe56?format=jpg&name=small",
    "tags": [
      "gpt-image-2",
      "摄影级出图"
    ]
  },
  {
    "id": "annotator-zhouluobo-23",
    "title": "摄影级出图 Prompt 23",
    "titleEn": "Photoreal Shoots Prompt 23",
    "description": "摄影级出图类提示词，作者 BubbleBrain",
    "descriptionEn": "Photoreal Shoots prompt, authored by @BubbleBrain",
    "categoryId": "photoreal-shoot",
    "categoryName": "摄影级出图",
    "categoryNameEn": "Photoreal Shoots",
    "author": "@BubbleBrain",
    "prompt": "35mm film photography with harsh convenience store fluorescent lighting mixed with colorful neon signs from outside, authentic film grain, high contrast, slight color cast, cinematic street editorial style, intimate medium shot, early 20s sexy Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with cool ivory undertone and visible specular highlights from fluorescent light, subtle skin texture and micro pores, natural dewy makeup with soft flush on cheeks, glossy natural pink lips slightly parted, subtle natural freckles across nose and cheeks, long dark brown hair in a messy high ponytail with many loose strands falling around face and neck, wearing an oversized white button-up shirt as the only top, unbuttoned at the top with deep cleavage and loosely tied at the waist, paired with a tiny black pleated mini skirt, barefoot in simple white slides, seductive casual leaning pose against the glass door of a 24-hour convenience store at late night, body slightly arched, one leg bent with foot resting against the door frame, the other leg straight, one hand holding a bottle of iced drink, the other hand lightly pulling the hem of her mini skirt, intensely seductive playful yet slightly vulnerable gaze straight at the viewer with soft doe eyes full of quiet temptation and teasing smile, bright cold fluorescent store light from inside mixed with pink and blue neon glow from outside signs, realistic reflections on glass door, blurred convenience store interior with shelves and snacks in background, authentic 35mm film color grading with harsh lighting and neon accents, extremely sharp yet soft skin rendering, natural hair strands, realistic fabric wrinkles and drape on the oversized shirt and mini skirt, no plastic skin, no digital over-sharpening, no airbrushing, no blemishes, no moles, no oily skin, no watermark, no text, authentic late-night convenience store atmosphere",
    "image": "https://pbs.twimg.com/media/HI15SEUbIAAFXUG?format=png&name=small",
    "tags": [
      "gpt-image-2",
      "摄影级出图"
    ]
  },
  {
    "id": "annotator-zhouluobo-24",
    "title": "摄影级出图 Prompt 24",
    "titleEn": "Photoreal Shoots Prompt 24",
    "description": "摄影级出图类提示词，作者 BubbleBrain",
    "descriptionEn": "Photoreal Shoots prompt, authored by @BubbleBrain",
    "categoryId": "photoreal-shoot",
    "categoryName": "摄影级出图",
    "categoryNameEn": "Photoreal Shoots",
    "author": "@BubbleBrain",
    "prompt": "35mm film photography, warm vintage Japanese onsen ryokan aesthetic, soft ambient wooden lantern lighting mixed with gentle natural window light, subtle film grain, gentle color shift, high atmosphere editorial style, intimate medium shot, early 20s beautiful Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with warm ivory undertone, visible subtle skin texture and micro pores, soft natural makeup with dewy glow, subtle rosy flush on cheeks, natural soft pink lips slightly parted, long dark brown hair tied in a loose low bun with some messy strands falling around face and neck, wearing a loose white yukata (traditional Japanese bathrobe) deliberately slipped off one shoulder and loosely tied at the waist, the fabric slightly open revealing smooth skin and subtle cleavage, barefoot, seductive relaxed sitting pose on the edge of a traditional wooden engawa veranda at a vintage onsen ryokan, body slightly turned toward the camera, one leg bent with foot resting on the wooden floor, the other leg gently dangling, one hand lightly holding the yukata collar, the other hand resting on the wooden floor behind her for support, softly arched back to gently accentuate curves, intensely seductive yet gentle and inviting gaze straight at the viewer with soft doe eyes full of quiet temptation and warmth, warm wooden interior with paper sliding doors and distant steaming hot spring in soft focus, gentle rim lighting highlighting skin and fabric texture, authentic vintage film color grading with warm tones, extremely sharp yet soft skin rendering, natural hair strands, realistic fabric wrinkles and drape on the yukata, no plastic skin, no digital over-sharpening, no airbrushing, no blemishes, no moles, no oily skin, no watermark, no text, authentic 35mm film Japanese onsen ryokan atmosphereCase 4. 35mm Flash Editorial Portrait",
    "image": "https://pbs.twimg.com/media/HI15WFVaUAAqnvv?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "摄影级出图"
    ]
  },
  {
    "id": "annotator-zhouluobo-25",
    "title": "摄影级出图 Prompt 25",
    "titleEn": "Photoreal Shoots Prompt 25",
    "description": "摄影级出图类提示词，作者 BubbleBrain",
    "descriptionEn": "Photoreal Shoots prompt, authored by @BubbleBrain",
    "categoryId": "photoreal-shoot",
    "categoryName": "摄影级出图",
    "categoryNameEn": "Photoreal Shoots",
    "author": "@BubbleBrain",
    "prompt": "Analog 35mm film photography, soft airy Japanese-style aesthetic, gentle diffused natural window light, slight overexposure, pastel tones, low contrast, soft highlights, minimal indoor setting near a window with white curtains, clean light-colored wall, natural composition, eye-level, slightly closer full-body framing (mid-thigh to head), young East Asian woman, natural minimal makeup, soft realistic skin texture, long slightly messy dark hair, oversized white button-up shirt, light casual shorts, barefoot, simple and relaxed styling, standing naturally with relaxed posture, arms loosely at sides or slightly behind, facing camera, gentle soft smile, subtle stillness, focus on light, air, and quiet everyday mood, soft film grain, dreamy and understated atmosphere --ar 9:16",
    "image": "https://pbs.twimg.com/media/HI15gLaaIAAWYe2?format=jpg&name=900x900",
    "tags": [
      "gpt-image-2",
      "摄影级出图"
    ]
  },
  {
    "id": "annotator-zhouluobo-26",
    "title": "摄影级出图 Prompt 26",
    "titleEn": "Photoreal Shoots Prompt 26",
    "description": "摄影级出图类提示词，作者 Zoulinshen",
    "descriptionEn": "Photoreal Shoots prompt, authored by @Zoulinshen",
    "categoryId": "photoreal-shoot",
    "categoryName": "摄影级出图",
    "categoryNameEn": "Photoreal Shoots",
    "author": "@Zoulinshen",
    "prompt": "生成一张竖版手机截图风格的图片，整体比例接近 9:16。画面中心偏上是一位真人 coser，扮演（角色名称）的二次元角色。人物为写实风格，但五官略带动漫感，皮肤细腻，眼睛稍大，表情温柔地看向镜头，坐在室内的休闲场景中，例如咖啡厅或酒吧吧台前，背景有符合场景的道具。画面最上方加入手机系统状态栏 UI，包括时间、电量、信号、网络等图标，让整张图看起来像手机截图。画面底部叠加一块宽大的半透明 galgame 风格对话框，对话框左侧放一个与画面人物对应的动漫或 Q 版头像；对话框右侧排版文字：第一行用较大字体显示与前面相同的角色名字，下面一到两行显示一段适合这个角色人设的、温柔治愈风格的简体中文台词，由你自动创作。再在对话框下方加一条操作栏，仿照 galgame UI。整体风格高清、细节丰富、光线柔和、二次元与真人写真自然融合。",
    "image": "https://pbs.twimg.com/media/HI15lEuacAA9Lb2?format=png&name=small",
    "tags": [
      "gpt-image-2",
      "摄影级出图"
    ]
  }
];

export function getAnnotatorPromptsByCategory(categoryId: string) {
  return annotatorPromptSeeds.filter((item) => item.categoryId === categoryId);
}
