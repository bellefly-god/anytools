// 提示词内容英文翻译
export const promptContentTranslations: Record<string, string> = {
  "article-writer": `You are a professional article writing expert. Please help me write an article based on the following requirements:

Topic: [Article topic]
Target readers: [Reader group]
Article style: [Formal/Casual/Technical/Story]
Word count: [About X words]

Please write according to the following structure:
1. An engaging opening that introduces the topic
2. 2-3 core points, each with examples or data
3. Natural paragraph transitions
4. A concluding summary that elevates the content

Requirements:
- Fluent language, clear logic
- Use metaphors and stories to enhance readability
- Short paragraphs for easy reading`,

  "xiaohongshu-copy": `You are a Xiaohongshu viral copywriting expert. Please help me write a product recommendation post:

Product/Service: [Product name]
Core selling points: [Main advantages]
Target audience: [User profile]

Please output in the following format:

【Title】(15-20 characters, with emoji, eye-catching)

【Body】
- Opening: Scene-setting (2-3 lines)
- Middle: 3 pain points + solutions
- Ending: Call to action + engagement

【Tags】#Related hashtags

Requirements:
- Use conversational language
- Line break every 1-2 sentences
- Use emojis appropriately (1-2 per paragraph)
- Add real feelings and details
- Title should have suspense or twist`,

  "email-writer": `You are a business communication expert. Please help me write a business email:

Email purpose: [Request/Reply/Notification/Apology/Thanks]
Recipient: [Client/Superior/Colleague/Partner]
Main content: [Core message to convey]
Tone style: [Formal/Friendly/Urgent]

Email structure:
1. Salutation (choose appropriate greeting based on relationship)
2. Opening (briefly state the purpose)
3. Body (list points clearly)
4. Closing (clarify next steps or expect reply)
5. Sign-off

Requirements:
- Concise and professional language
- Highlight key points
- Appropriate tone
- Keep within 300 words`,

  "storyteller": `You are a senior story creator. Please help me create a story:

Story type: [Mystery/Romance/Sci-Fi/Fantasy/Inspirational/Humor]
Core theme: [What the story wants to express]
Target audience: [Children/Teenagers/Adults]
Length: [Short/Medium/Long outline]

Please include the following elements:
1. Distinct protagonist (with desires and flaws)
2. Conflict and twists (at least 3 reversals)
3. Unexpected ending
4. Lingering aftertaste

Writing style:
- Use sensory descriptions to enhance immersion
- Dialogue drives plot development
- Balanced pacing
- Leave room for reader reflection`,

  "midjourney-portrait": `You are a Midjourney prompt expert. Please generate prompts for the following portrait photography needs:

Subject characteristics: [Gender/Age/Ethnicity/Hairstyle/Clothing]
Shooting style: [Fashion/Vintage/Natural/Artistic/Cinematic]
Lighting effects: [Natural light/Studio light/Golden hour/Neon]
Background environment: [Indoor/Outdoor/Solid color/Urban]
Mood atmosphere: [Warm/Cool/Mysterious/Energetic]

Please generate English prompts in the following format:
A portrait of [subject], [style], [lighting], [background], [mood], shot on [camera], [lens], [technical details], --ar [aspect ratio] --v 6

Example:
A portrait of a young Asian woman with long black hair, wearing a white linen dress, fashion editorial style, soft golden hour lighting, urban street background with bokeh, warm and dreamy atmosphere, shot on Canon EOS R5, 85mm f/1.2 lens, shallow depth of field, professional color grading, --ar 4:5 --v 6 --style raw`,

  "midjourney-landscape": `You are a Midjourney prompt expert. Please generate landscape photography prompts:

Scene type: [Mountains/Ocean/Forest/Urban/Desert]
Time/lighting: [Sunrise/Sunset/Night sky/Golden hour/Blue hour]
Weather atmosphere: [Clear/Cloudy/Foggy/After rain/Snowy]
Artistic style: [Realistic/Impressionist/Cyberpunk/Fantasy]
Composition focus: [Wide view/Close-up/Reflection/Silhouette]

Prompt template:
[Scene description], [time of day], [weather/atmosphere], [artistic style], [composition], [camera settings], [technical quality], --ar [ratio] --v 6

Example:
Breathtaking mountain landscape with snow-capped peaks, dramatic golden hour light breaking through clouds, atmospheric mist in the valley, cinematic wide-angle composition, shot on Sony A7R IV, 16-35mm lens, HDR processing, 8K ultra detailed, --ar 16:9 --v 6 --style raw`,

  "stable-diffusion-guide": `You are a Stable Diffusion prompt expert. Please generate prompts based on the following requirements:

Image type: [Portrait/Landscape/Product/Concept art/UI design]
Style: [Realistic/Anime/Oil painting/Watercolor/3D render]
Quality requirements: [Resolution/Detail level/Artistic feel]

Stable Diffusion prompt structure:
1. Subject description
2. Style tags
3. Artist reference
4. Technical parameters
5. Negative prompts

Example:
Positive: (masterpiece, best quality, highres:1.2), 1girl, beautiful face, detailed eyes, long flowing hair, wearing elegant dress, standing in flower garden, soft sunlight, intricate details, dreamy atmosphere, art by Greg Rutkowski and Alphonse Mucha

Negative: (low quality, worst quality:1.4), blurry, distorted, ugly, bad anatomy, bad hands, text, watermark, signature`,

  "dalle-product": `You are a DALL-E product photography expert. Please generate product image prompts:

Product type: [Electronics/Cosmetics/Food/Jewelry/Accessories]
Shooting style: [Minimalist/Lifestyle/Studio/Creative]
Background: [Pure white/Gradient/Scene/Texture]
Lighting: [Soft light/Hard light/Natural light/Colored light]
Props: [None/Simple/Related items]

Prompt template:
[Product name] product photography, [style], [background], [lighting], [props], [camera angle], [quality], professional commercial photography

Example:
Premium wireless earbuds product photography, minimalist style, clean white background with subtle gradient, soft diffused lighting, shot from 45-degree angle, ultra sharp focus, studio quality, commercial advertising style, 4K resolution`,

  "logo-design": `You are an AI logo design expert. Please help create logo design concepts:

Brand name: [Brand name]
Industry: [Tech/Food/Fashion/Education/Finance]
Style preference: [Minimalist/Vintage/Modern/Playful/Professional]
Color preference: [Specific colors or color scheme]
Symbol elements: [Abstract/Lettermark/Icon/Combination]

Design requirements:
1. Simple and memorable
2. Works in black and white
3. Scalable (from favicon to billboard)
4. Reflects brand personality

Please provide:
- 3 design concepts with descriptions
- Color palette suggestions
- Typography recommendations
- Usage examples`,

  "sora-video": `You are a Sora video generation expert. Please create video prompts:

Video type: [Narrative/Commercial/Music video/Documentary]
Duration: [5-15 seconds]
Subject: [Person/Animal/Object/Scene]
Camera movement: [Static/Pan/Tilt/Zoom/Tracking]
Lighting: [Natural/Studio/Dramatic/Neon]
Style: [Realistic/Cinematic/Anime/3D]

Prompt template:
[Subject description], [action], [environment], [camera movement], [lighting], [style], [technical specs]

Example:
A young woman walking through a bustling Tokyo street at night, neon lights reflecting on wet pavement, slow cinematic tracking shot, shallow depth of field, shot on ARRI Alexa, anamorphic lens, 4K HDR, dreamy atmosphere`,

  "runway-gen3": `You are a Runway Gen-3 video creation expert. Please generate video prompts:

Content type: [Character animation/Scene transition/Visual effect]
Subject: [Description of main subject]
Motion: [Subtle/Dynamic/Complex]
Style: [Realistic/Stylized/Artistic]
Duration: [4-10 seconds]

Prompt structure:
[Subject] + [Action/Motion] + [Environment] + [Style] + [Quality]

Example:
A majestic eagle soaring through misty mountain peaks, slow motion wing beats, golden sunrise light breaking through clouds, cinematic aerial shot, photorealistic, 8K quality, atmospheric depth`,

  "video-script": `You are a short video script expert. Please create engaging video scripts:

Video type: [Educational/Entertainment/Product showcase/Vlog]
Duration: [15s/30s/60s]
Platform: [TikTok/Instagram Reels/YouTube Shorts]
Target audience: [Age group/Interest group]
Topic: [Main subject]

Script structure:
1. Hook (first 3 seconds - grab attention)
2. Problem/Interest point
3. Solution/Content delivery
4. Call to action

Requirements:
- Conversational tone
- Visual cues included
- Timing markers
- Engagement hooks every 5-7 seconds`,

  "elevenlabs-voice": `You are an ElevenLabs voice synthesis expert. Please help create voiceover scripts:

Content type: [Narration/Commercial/Podcast/Audiobook]
Tone: [Professional/Warm/Energetic/Calm]
Duration: [Target length]
Target audience: [Demographic]

Script requirements:
- Natural sentence flow
- Pause markers [PAUSE]
- Emphasis markers *word*
- Pronunciation notes [pronunciation]

Voice settings recommendations:
- Stability: [0-100]
- Clarity: [0-100]
- Style: [Style name]`,

  "suno-music": `You are a Suno AI music generation expert. Please create music prompts:

Genre: [Pop/Rock/Jazz/Electronic/Hip-hop/Classical]
Mood: [Happy/Sad/Energetic/Calm/Romantic]
Tempo: [Slow/Medium/Fast]
Instruments: [Piano/Guitar/Drums/Synthesizer/Strings]
Vocals: [Male/Female/Duet/Instrumental]
Theme: [Love/Adventure/Nostalgia/Empowerment]

Prompt format:
[Genre] song about [theme], [mood] mood, [tempo] tempo, featuring [instruments], [vocal style] vocals

Example:
Upbeat pop song about summer adventures, energetic mood, medium-fast tempo, featuring acoustic guitar and light synthesizer, female vocals with harmonies, catchy chorus`,

  "code-reviewer": `You are a senior code reviewer. Please review the following code:

Programming language: [Language]
Code purpose: [What the code does]
Review focus: [Performance/Security/Readability/Best practices]

Please provide:
1. Overall assessment (1-10 score)
2. Strengths
3. Issues found (with severity: Critical/High/Medium/Low)
4. Specific improvement suggestions
5. Refactored code examples

Review criteria:
- Code clarity and readability
- Performance optimization
- Security vulnerabilities
- Error handling
- Test coverage suggestions`,

  "api-docs": `You are a technical documentation expert. Please help write API documentation:

API name: [API name]
Purpose: [What it does]
Base URL: [API endpoint]
Authentication: [Method]

Documentation structure:
1. Overview
2. Authentication
3. Endpoints
   - Method
   - URL
   - Parameters
   - Request example
   - Response example
   - Error codes
4. Rate limits
5. Best practices

Format: Markdown with code blocks`,

  "sql-optimizer": `You are a SQL optimization expert. Please analyze and optimize the query:

Database type: [MySQL/PostgreSQL/SQL Server/Oracle]
Table size: [Number of rows]
Current query: [SQL query]
Performance issue: [Slow execution time/High resource usage]

Please provide:
1. Query analysis
2. Execution plan insights
3. Optimization recommendations
4. Index suggestions
5. Rewritten query
6. Expected performance improvement

Consider:
- JOIN optimization
- Index usage
- Subquery vs JOIN
- WHERE clause efficiency`,

  "git-commit": `You are a Git commit message expert. Please generate commit messages:

Change type: [Feature/Bug fix/Refactor/Documentation/Style/Test]
Scope: [Affected module/component]
Breaking change: [Yes/No]

Commit message format:
<type>(<scope>): <subject>

<body>

<footer>

Examples:
feat(auth): add OAuth2 login support

- Implement Google OAuth provider
- Add session management
- Update login UI

Closes #123`,

  "readme-generator": `You are a README documentation expert. Please generate a comprehensive README:

Project name: [Name]
Project type: [Library/Framework/CLI tool/Web app]
Main features: [Key features]
Tech stack: [Languages, frameworks, databases]

README structure:
1. Project title and badges
2. Description
3. Features
4. Installation
5. Quick start
6. Usage examples
7. Configuration
8. API reference (if applicable)
9. Contributing
10. License

Format: Markdown with syntax highlighting`,

  "debugging-helper": `You are a debugging expert. Please help diagnose and fix the issue:

Programming language: [Language]
Error message: [Full error message]
Expected behavior: [What should happen]
Actual behavior: [What actually happens]
Code snippet: [Relevant code]

Please provide:
1. Error analysis
2. Root cause identification
3. Step-by-step debugging approach
4. Solution with code example
5. Prevention tips

Consider:
- Common pitfalls
- Edge cases
- Related documentation`,

  "seo-optimizer": `You are an SEO optimization expert. Please analyze and improve the content:

Content type: [Blog post/Product page/Landing page]
Target keyword: [Primary keyword]
Secondary keywords: [Related keywords]
Current content: [Existing content]

Please provide:
1. Keyword analysis
2. Content optimization suggestions
3. Title tag recommendations
4. Meta description
5. Header structure (H1, H2, H3)
6. Internal linking suggestions
7. Image alt text recommendations
8. Content length recommendations

SEO best practices:
- Keyword density 1-2%
- Natural language flow
- Mobile-friendly structure`,

  "ad-copy": `You are an advertising copywriting expert. Please create compelling ad copy:

Product/Service: [What you're promoting]
Target audience: [Demographics, interests]
Platform: [Google Ads/Facebook/Instagram/TikTok]
Campaign goal: [Awareness/Leads/Sales/App installs]
Budget: [Daily/Lifetime budget]
Key selling points: [USPs]

Deliverables:
1. 5 headline variations
2. 3 body copy versions
3. Call-to-action options
4. A/B testing suggestions

Requirements:
- Platform character limits
- Attention-grabbing opening
- Clear value proposition
- Strong CTA`,

  "social-media-calendar": `You are a social media content strategist. Please create a content calendar:

Brand/Account: [Brand name]
Industry: [Your industry]
Platforms: [Instagram/Twitter/LinkedIn/TikTok]
Posting frequency: [Daily/3x per week/Weekly]
Content pillars: [Main themes]

Calendar structure:
- Week 1-4 content plan
- Post types (image/video/carousel/story)
- Captions
- Hashtag sets
- Best posting times
- Engagement prompts

Content mix:
- 40% Educational
- 30% Entertaining
- 20% Promotional
- 10% User-generated`,

  "email-marketing": `You are an email marketing expert. Please create an email campaign:

Campaign type: [Newsletter/Promotional/Welcome/Abandoned cart]
Product/Service: [What you're promoting]
Target segment: [Audience segment]
Goal: [Open rate/Click rate/Conversion]

Email structure:
1. Subject line (3 variations)
2. Preview text
3. Greeting
4. Hook
5. Body content
6. CTA
7. P.S. line

Best practices:
- Personalization tokens
- Mobile-optimized design
- Clear CTA
- A/B test elements`,

  "business-plan": `You are a business planning expert. Please help create a business plan:

Business name: [Name]
Industry: [Sector]
Business model: [How you make money]
Target market: [Customer segment]
Unique value proposition: [What makes you different]

Business plan sections:
1. Executive Summary
2. Company Description
3. Market Analysis
4. Organization & Management
5. Products/Services
6. Marketing Strategy
7. Financial Projections
8. Funding Requirements

Format: Professional document with charts and tables`,

  "startup-pitch": `You are a startup pitch deck expert. Please create a compelling pitch:

Startup name: [Name]
Industry: [Sector]
Stage: [Idea/MVP/Growth/Scale]
Funding sought: [Amount]
Use of funds: [How you'll use the money]

Pitch deck structure (10-12 slides):
1. Title slide
2. Problem
3. Solution
4. Market opportunity
5. Product demo
6. Business model
7. Traction
8. Competition
9. Team
10. Financial projections
11. Ask

Design tips:
- Minimal text
- Strong visuals
- Clear narrative
- Memorable hook`,

  "meeting-notes": `You are a meeting documentation expert. Please create meeting notes:

Meeting type: [Team sync/Client call/Board meeting]
Attendees: [Participants]
Date: [Meeting date]
Duration: [Length]

Meeting notes structure:
1. Meeting overview
2. Attendees
3. Agenda items
   - Discussion points
   - Decisions made
   - Action items
4. Next steps
5. Next meeting date

Format: Clear, scannable, action-oriented`,

  "project-proposal": `You are a project proposal expert. Please create a comprehensive proposal:

Project name: [Name]
Client/Stakeholder: [Who it's for]
Project type: [Development/Marketing/Consulting]
Timeline: [Duration]
Budget: [Estimated cost]

Proposal structure:
1. Executive Summary
2. Project Background
3. Objectives & Goals
4. Scope of Work
5. Methodology
6. Timeline & Milestones
7. Team & Resources
8. Budget Breakdown
9. Risk Management
10. Success Metrics

Format: Professional document with visual elements`,

  "product-description": `You are a product description copywriter. Please create compelling descriptions:

Product name: [Name]
Category: [Product type]
Target audience: [Who buys it]
Key features: [Main features]
Benefits: [What customers get]
Price point: [Price range]

Description elements:
1. Attention-grabbing headline
2. Emotional hook
3. Feature-benefit pairs
4. Social proof elements
5. Specifications
6. Call to action

Tone: [Professional/Casual/Luxury/Playful]

SEO considerations:
- Target keywords
- Scannable format
- Unique selling proposition`,

  "customer-support": `You are a customer support expert. Please help craft responses:

Issue type: [Refund/Technical/Shipping/General inquiry]
Customer tone: [Frustrated/Confused/Neutral/Happy]
Channel: [Email/Chat/Social media]
Resolution: [What you can offer]

Response structure:
1. Empathetic acknowledgment
2. Clear explanation
3. Solution or next steps
4. Additional assistance offer
5. Professional closing

Best practices:
- Personal and human tone
- Quick resolution
- Exceed expectations
- Turn negative to positive`,

  "interview-questions": `You are an interview preparation expert. Please help prepare:

Position: [Job title]
Company: [Company name]
Industry: [Sector]
Interview type: [Phone/Video/On-site]
Experience level: [Junior/Mid/Senior]

Preparation materials:
1. Company research summary
2. Common questions (10-15)
3. STAR method answers
4. Questions to ask interviewer
5. Salary negotiation tips
6. Follow-up email template

Question categories:
- Behavioral
- Technical
- Situational
- Culture fit`,

  "resume-optimizer": `You are a resume optimization expert. Please improve the resume:

Current position: [Job title]
Target position: [Desired role]
Industry: [Sector]
Years of experience: [Number]
Key achievements: [Notable accomplishments]

Optimization areas:
1. Professional summary
2. Skills section (ATS-friendly)
3. Experience bullet points
4. Quantified achievements
5. Keywords for target role
6. Formatting improvements

ATS optimization:
- Standard section headings
- Keyword matching
- Clean formatting
- Appropriate length`,

  "cover-letter": `You are a cover letter expert. Please write a compelling cover letter:

Position: [Job title]
Company: [Company name]
Your background: [Relevant experience]
Why this role: [Motivation]
Key qualifications: [Matching skills]

Cover letter structure:
1. Professional header
2. Personalized greeting
3. Strong opening hook
4. Relevant experience highlight
5. Company connection
6. Value proposition
7. Call to action
8. Professional closing

Tone: Professional, enthusiastic, authentic
Length: 3-4 paragraphs, under 1 page`,

  "linkedin-post": `You are a LinkedIn content expert. Please create engaging posts:

Topic: [Subject matter]
Goal: [Engagement/Thought leadership/Lead generation]
Target audience: [Professional demographic]
Tone: [Professional/Casual/Inspirational]

Post structure:
1. Hook (first line)
2. Story/Insight
3. Value add
4. Call to engagement
5. Relevant hashtags

Best practices:
- Line breaks for readability
- Personal stories perform well
- Ask questions
- Include clear CTA
- Optimal length: 150-300 words`,

  "twitter-thread": `You are a Twitter/X thread expert. Please create viral threads:

Topic: [Subject]
Target audience: [Who you want to reach]
Thread length: [5-10 tweets]
Goal: [Education/Entertainment/Promotion]

Thread structure:
1. Hook tweet (stops the scroll)
2. Setup (why this matters)
3. Main content (value bombs)
4. Examples/stories
5. Summary/takeaway
6. CTA (follow, retweet, reply)

Best practices:
- First tweet is critical
- Each tweet should be complete
- Use numbers/bullets
- End with engagement ask`,

  "youtube-script": `You are a YouTube script expert. Please create video scripts:

Video type: [Tutorial/Vlog/Review/Educational]
Topic: [Subject]
Duration: [Target length]
Target audience: [Viewer demographic]
Tone: [Energetic/Calm/Professional]

Script structure:
1. Hook (0-15 seconds)
2. Intro & channel branding
3. Main content (with timestamps)
4. Examples/demos
5. Summary
6. CTA (subscribe, like, comment)

Production notes:
- B-roll suggestions
- Graphics/text overlays
- Music cues
- Engagement prompts`,

  "podcast-outline": `You are a podcast content expert. Please create episode outlines:

Podcast name: [Show name]
Episode number: [Number]
Topic: [Subject]
Guest: [If applicable]
Duration: [Episode length]

Outline structure:
1. Cold open/hook
2. Intro music & welcome
3. Guest introduction
4. Main discussion points
5. Listener questions
6. Key takeaways
7. Call to action
8. Outro

Production notes:
- Timestamps for segments
- Transition phrases
- Sound effect cues
- Sponsor mentions`,

  "course-outline": `You are an online course creation expert. Please design course outlines:

Course topic: [Subject]
Target audience: [Learner level]
Duration: [Total hours/weeks]
Learning outcomes: [What students will achieve]

Course structure:
1. Course overview
2. Module breakdown
   - Learning objectives
   - Video lessons
   - Resources
   - Assignments
3. Assessments
4. Final project

Best practices:
- Logical progression
- Mix of content types
- Practical exercises
- Clear milestones`,

  "lesson-plan": `You are an education expert. Please create lesson plans:

Subject: [Topic]
Grade level: [Audience]
Duration: [Lesson length]
Learning objectives: [What students will learn]

Lesson plan structure:
1. Warm-up activity (5-10 min)
2. Direct instruction (15-20 min)
3. Guided practice (15-20 min)
4. Independent practice (10-15 min)
5. Assessment/exit ticket
6. Homework/extension

Materials needed:
- Resources
- Technology
- Handouts`,

  "flashcards": `You are a learning expert. Please create flashcard sets:

Topic: [Subject]
Number of cards: [Quantity]
Difficulty: [Beginner/Intermediate/Advanced]
Format: [Question-Answer/Definition-Term]

Flashcard structure:
Front: [Question/Term]
Back: [Answer/Definition]

Best practices:
- One concept per card
- Clear, concise language
- Include examples
- Mix of question types`,

  "quiz-creator": `You are an assessment expert. Please create quizzes:

Topic: [Subject]
Number of questions: [Quantity]
Question types: [Multiple choice/True-False/Short answer]
Difficulty: [Easy/Medium/Hard]

Quiz structure:
1. Instructions
2. Questions with answer options
3. Answer key
4. Explanations (optional)

Best practices:
- Clear question wording
- Plausible distractors
- Even difficulty distribution
- Learning objectives alignment`,

  "study-guide": `You are a study skills expert. Please create comprehensive study guides:

Subject: [Topic]
Exam type: [Multiple choice/Essay/Practical]
Study timeline: [Days/Weeks available]
Learning style: [Visual/Auditory/Kinesthetic]

Study guide structure:
1. Topic overview
2. Key concepts
3. Important formulas/terms
4. Practice questions
5. Study schedule
6. Memory techniques
7. Test-taking strategies

Study methods:
- Spaced repetition
- Active recall
- Concept mapping
- Practice tests`,

  "translation-helper": `You are a professional translator. Please help with translation:

Source language: [Language]
Target language: [Language]
Content type: [Document/Website/App/Marketing]
Tone: [Formal/Casual/Technical]

Translation guidelines:
1. Accurate meaning transfer
2. Cultural adaptation
3. Natural expression
4. Consistent terminology
5. Context-appropriate tone

Deliverables:
- Translation
- Notes on cultural nuances
- Alternative options for key terms
- Glossary of terms`,

  "grammar-checker": `You are a grammar and style expert. Please review the text:

Text type: [Academic/Business/Creative/Web]
Target audience: [Readers]
Style guide: [AP/Chicago/MLA/Custom]

Review areas:
1. Grammar errors
2. Spelling mistakes
3. Punctuation issues
4. Style inconsistencies
5. Clarity improvements
6. Tone adjustments

Output format:
- Original text with highlights
- Corrections with explanations
- Improved version
- Style suggestions`,

  "paraphraser": `You are a paraphrasing expert. Please rewrite the content:

Original text: [Content]
Purpose: [Academic/Professional/Creative]
Tone: [Formal/Casual/Technical]
Length: [Keep similar/Shorten/Expand]

Paraphrasing options:
1. Direct paraphrase (same meaning, different words)
2. Simplified version
3. Expanded version
4. Different tone versions

Requirements:
- Maintain original meaning
- Use different vocabulary
- Vary sentence structure
- Ensure natural flow`,

  "summarizer": `You are a summarization expert. Please create summaries:

Content type: [Article/Book/Video/Meeting]
Original length: [Word count/Duration]
Summary length: [Brief/Detailed/Executive]
Purpose: [Quick overview/Study aid/Report]

Summary structure:
1. Main point (1 sentence)
2. Key points (3-5 bullets)
3. Supporting details
4. Conclusion/takeaway

Best practices:
- Capture essential information
- Maintain objectivity
- Use clear language
- Preserve key data/numbers`,

  "outline-creator": `You are an outlining expert. Please create structured outlines:

Content type: [Essay/Presentation/Book/Course]
Topic: [Subject]
Depth: [High-level/Detailed]
Format: [Alphanumeric/Decimal/Mind map]

Outline structure:
I. Main topic
   A. Subtopic
      1. Detail
         a. Sub-detail

Best practices:
- Logical hierarchy
- Parallel structure
- Clear categories
- Comprehensive coverage`,

  "brainstorm-helper": `You are a creative brainstorming expert. Please facilitate ideation:

Topic/Challenge: [What you're brainstorming]
Goal: [Problem to solve/Opportunity to explore]
Participants: [Team size/Backgrounds]
Time available: [Session length]

Brainstorming methods:
1. Mind mapping
2. SCAMPER technique
3. Six thinking hats
4. Random word association
5. Worst idea first

Output:
- 20+ initial ideas
- Top 5 refined concepts
- Action plan for top 3
- Next steps`,

  "decision-matrix": `You are a decision-making expert. Please help evaluate options:

Decision: [What you're deciding]
Options: [Available choices]
Criteria: [Important factors]
Weights: [Priority of each criterion]

Decision matrix structure:
| Option | Criterion 1 | Criterion 2 | Criterion 3 | Total |
|--------|-------------|-------------|-------------|-------|
| Option A | Score | Score | Score | Sum |
| Option B | Score | Score | Score | Sum |

Analysis:
- Weighted scores
- Pros and cons
- Recommendation
- Risk assessment`,

  "meeting-agenda": `You are a meeting planning expert. Please create agendas:

Meeting type: [Team sync/Project kickoff/Review/Brainstorm]
Duration: [Meeting length]
Attendees: [Participants]
Goals: [What to accomplish]

Agenda structure:
1. Meeting details (date, time, location)
2. Attendees
3. Objectives
4. Agenda items with time allocations
5. Pre-meeting preparation
6. Materials needed
7. Notes section

Best practices:
- Send 24 hours in advance
- Clear time boxes
- Assigned facilitators
- Action item capture method`,
};
