const fs = require('fs');
let content = fs.readFileSync('./src/data/prompts.ts', 'utf-8');

const remainingTranslations = {
  'react-component': `You are a React component expert. Please create a React component:

Component name: [Name]
Purpose: [What it does]
Props: [Input properties]
State: [Internal state if needed]
Styling: [CSS modules/Tailwind/styled-components]

Requirements:
- TypeScript with proper types
- Responsive design
- Accessible (WCAG)
- Reusable and composable
- Performance optimized

Output:
- Component code
- Types/interfaces
- Usage example`,

  'seo-article': `You are an SEO content expert. Please write an SEO-optimized article:

Target keyword: [Primary keyword]
Secondary keywords: [Related terms]
Word count: [Target length]
Search intent: [Informational/Commercial/Transactional]
Topic: [Article subject]

Article structure:
1. H1 title with keyword
2. Engaging intro (hook + keyword)
3. 3-5 H2 sections with keywords
4. Short paragraphs, bullet points
5. Keyword-rich conclusion
6. Meta description

SEO checklist:
- Keyword in first 100 words
- H2s include variations
- Internal linking suggestions
- Image alt text recommendations`,

  'meeting-summary': `You are a meeting documentation expert. Please summarize:

Meeting type: [Sync/Standup/Review/Decision]
Duration: [Length]
Attendees: [Participants]

Summary format:
## Meeting Overview
[Brief summary of purpose]

## Key Decisions
- [Decision 1]
- [Decision 2]

## Action Items
| Task | Owner | Due Date |
|------|-------|----------|

## Next Steps
[What happens next]

## Next Meeting
[Date/time if scheduled]`,

  'report-writer': `You are a professional report writer. Please create a report:

Report type: [Status/Progress/Analysis/Research]
Audience: [Stakeholders/Management/Team]
Time period: [Date range]
Key metrics: [Important numbers]

Report structure:
1. Executive Summary
2. Key Highlights
3. Progress Update
4. Metrics & Data
5. Challenges & Solutions
6. Next Steps
7. Appendices (if needed)

Style: Professional, data-driven, actionable`,

  'study-plan': `You are a learning expert. Please create a study plan:

Subject: [Topic to study]
Current level: [Beginner/Intermediate/Advanced]
Goal: [What you want to achieve]
Time available: [Hours per day/week]
Deadline: [Target date]

Study plan structure:
Week 1-2: Foundation
- Topics to cover
- Resources to use
- Practice exercises

Week 3-4: Deepening
- Advanced concepts
- Projects to build
- Assessments

Week 5+: Mastery
- Review & refine
- Real-world application
- Final assessment

Include: Schedule, resources, milestones, tracking method`,

  'gpt4o-photorealistic': `You are a GPT-4o image generation expert. Create photorealistic image prompts:

Subject: [Main subject]
Scene: [Environment/setting]
Lighting: [Natural/Studio/Cinematic]
Mood: [Atmosphere]
Style: [Photorealistic/Documentary/Editorial]

Prompt format:
A photorealistic [subject] in [scene], [lighting], [mood] atmosphere, shot on [camera], [lens], [settings], [quality specs]

Example:
A photorealistic elderly craftsman in his workshop, warm afternoon light through dusty windows, contemplative atmosphere, shot on Leica M6, 35mm lens, f/2.8, natural grain, documentary style, 4K detail`,

  'gpt4o-product-mockup': `You are a GPT-4o product visualization expert. Create product mockup prompts:

Product type: [Physical product]
Background: [Studio/Lifestyle/Minimal]
Angle: [Front/45-degree/Top]
Props: [Optional accessories]
Style: [Commercial/Lifestyle/Artistic]

Prompt template:
[Product name] product mockup, [background], [angle] view, [lighting], professional product photography, [style], [quality]

Example:
Premium ceramic coffee mug product mockup, minimalist white background, 45-degree angle view, soft diffused lighting, professional commercial photography, studio quality, 4K resolution`,

  'gpt4o-typography-poster': `You are a GPT-4o typography design expert. Create poster prompts:

Text: [Words to display]
Font style: [Serif/Sans-serif/Script/Display]
Color scheme: [Colors]
Background: [Solid/Gradient/Textured]
Mood: [Minimalist/Bold/Vintage/Modern]

Prompt format:
Typography poster design featuring "[text]", [font style] typography, [color scheme], [background] background, [mood] style, [dimensions], high resolution

Example:
Typography poster design featuring "DREAM BIG", bold sans-serif typography, black text on cream background, minimalist modern style, A2 size, high resolution print quality`,

  'gpt4o-illustration': `You are a GPT-4o illustration expert. Create illustration prompts:

Subject: [What to illustrate]
Style: [Flat/Line art/Watercolor/3D/Digital]
Color palette: [Colors]
Mood: [Playful/Serious/Whimsical]
Use case: [Web/Print/Social media]

Prompt template:
[Style] illustration of [subject], [color palette], [mood] mood, [use case] suitable, clean composition, [technical specs]

Example:
Flat vector illustration of diverse team collaborating, vibrant color palette, positive energetic mood, website suitable, clean composition, scalable SVG style`,

  'gpt4o-ui-mockup': `You are a GPT-4o UI design expert. Create interface mockup prompts:

App type: [Mobile/Web/Desktop]
Screens: [Number of screens]
Style: [Minimal/Material/iOS/Custom]
Colors: [Brand colors]
Device: [Phone/Tablet/Laptop]

Prompt format:
UI mockup for [app type], [style] design, [colors], showing [screens] screens on [device], professional UI design, high fidelity, [resolution]

Example:
UI mockup for fitness tracking app, minimalist clean design, white with green accents, showing dashboard and workout screens on iPhone 15, professional UI design, high fidelity, 4K resolution`,

  'sora-cinematic': `You are a Sora cinematic video expert. Create cinematic prompts:

Scene: [Description]
Camera: [Movement type]
Lighting: [Time of day/Style]
Mood: [Atmosphere]
Duration: [5-15 seconds]

Prompt structure:
Cinematic [scene], [camera movement], [lighting], [mood] atmosphere, [technical specs], film quality

Example:
Cinematic aerial shot of ancient temple ruins in jungle, slow ascending crane movement, golden hour light through canopy, mysterious atmosphere, 8K quality, film grain, anamorphic lens`,

  'sora-product-video': `You are a Sora product video expert. Create product showcase prompts:

Product: [Item to showcase]
Setting: [Environment]
Movement: [Rotation/Zoom/Pan]
Style: [Commercial/Lifestyle]
Duration: [Length]

Prompt format:
Product video showcase of [product], [setting], [movement], [style] commercial style, [lighting], [quality], professional advertising quality

Example:
Product video showcase of luxury watch, clean white studio background, slow 360 rotation with zoom, commercial advertising style, soft diffused lighting, 4K resolution, professional advertising quality`,

  'sora-nature-scene': `You are a Sora nature cinematography expert. Create nature video prompts:

Landscape: [Natural setting]
Weather: [Conditions]
Time: [Sunrise/Sunset/Midday/night]
Wildlife: [Animals if any]
Movement: [Camera type]

Prompt format:
Nature video of [landscape], [weather], [time], [wildlife], [camera movement], [mood], [quality], nature documentary style

Example:
Nature video of misty mountain valley at dawn, light fog clearing, sunrise golden light, deer grazing in meadow, slow tracking shot, peaceful mood, 8K quality, Planet Earth documentary style`,

  'runway-motion': `You are a Runway motion design expert. Create motion graphics prompts:

Type: [Animation style]
Subject: [What moves]
Motion: [Movement description]
Style: [Design aesthetic]
Duration: [Length]

Prompt structure:
[Motion type] of [subject], [description of movement], [style] style, [technical specs], smooth animation

Example:
Abstract liquid motion graphics of colorful ink in water, organic flowing movement, modern minimalist style, 4K resolution, smooth 60fps animation, loopable`,

  'kling-video': `You are a Kling AI video generation expert. Create video prompts:

Content: [What to create]
Motion intensity: [Subtle/Moderate/Dynamic]
Duration: [5-10 seconds]
Style: [Realistic/Artistic/Cinematic]

Prompt format:
[Content description], [motion intensity] motion, [style] style, [technical quality], Kling optimized

Example:
Young woman smiling and turning head to camera, subtle natural motion, photorealistic style, 1080p quality, smooth motion, Kling optimized`,

  'mj-v6-portrait': `You are a Midjourney v6 portrait expert. Create portrait prompts:

Subject: [Person description]
Expression: [Mood/emotion]
Lighting: [Type]
Background: [Setting]
Style: [Photography genre]

Prompt structure:
Portrait of [subject], [expression], [lighting] lighting, [background], [style] photography, [camera specs], --v 6 --ar [ratio] --style raw

Example:
Portrait of confident businesswoman in her 30s, slight knowing smile, Rembrandt lighting, modern office background, editorial photography, Canon R5 85mm f/1.2, --v 6 --ar 4:5 --style raw`,

  'mj-v6-product': `You are a Midjourney v6 product photography expert. Create product prompts:

Product: [Item]
Surface: [Table/surface]
Background: [Setting]
Lighting: [Style]
Angle: [View]

Prompt format:
[Product] product photography, [surface], [background], [lighting], [angle] view, commercial quality, [camera], --v 6 --ar [ratio] --style raw

Example:
Luxury perfume bottle product photography, white marble surface, soft gradient background, diffused soft light, front view, commercial advertising quality, phase one camera, --v 6 --ar 1:1 --style raw`,

  'mj-logo-design': `You are a Midjourney logo design expert. Create logo prompts:

Brand: [Company name]
Industry: [Sector]
Style: [Minimal/Geometric/Wordmark/Emblem]
Colors: [Palette]
Elements: [Symbols]

Prompt structure:
[Style] logo design for [brand/industry], [elements], [colors], clean vector style, white background, --v 6 --ar 1:1

Example:
Minimal geometric logo design for tech startup, abstract hexagon shape, navy blue and white, clean vector style, white background, --v 6 --ar 1:1`,
};

let count = 0;

Object.entries(remainingTranslations).forEach(([id, contentEn]) => {
  const idPattern = new RegExp(`id: '${id}',`);
  const match = content.match(idPattern);
  
  if (match) {
    const startIndex = match.index;
    const blockEnd = content.indexOf('\n  },', startIndex);
    const block = content.substring(startIndex, blockEnd);
    
    if (!block.includes('contentEn:')) {
      const pattern = new RegExp(`(id: '${id}',[\\s\\S]*?content: \\`[^\\`]+\\`,)`, 'g');
      content = content.replace(pattern, `$1\n    contentEn: \\`${contentEn.replace(/\\`/g, '\\\\`')}\\`,`);
      count++;
      console.log('✅', id);
    } else {
      console.log('⏭️  Already has:', id);
    }
  } else {
    console.log('❌ Not found:', id);
  }
});

fs.writeFileSync('./src/data/prompts.ts', content);
console.log(`\n✅ Added ${count} content translations`);