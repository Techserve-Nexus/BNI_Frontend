{
"project_goal": "Build a clean, scalable MVP product with production-ready modular code that fully follows BNI’s official brand guidelines and design system.",
"languages": ["TypeScript", "JavaScript", "Next.js", "Node.js", "Express", "MongoDB"],
"frameworks": ["Next.js (latest)", "TailwindCSS", "Nodemailer", "Mongoose"],
"style_guidelines": {
"code_quality": "Write clean, readable, commented code following SOLID principles.",
"naming": "Use descriptive, camelCase for variables and functions, PascalCase for components and models.",
"error_handling": "Always include proper try-catch with meaningful error messages.",
"async_patterns": "Use async/await consistently with proper error handling.",
"imports": "Prefer absolute imports using @ alias for cleaner structure.",
"linting": "Code should pass ESLint with standard or next/core-web-vitals rules."
},
"architecture": {
"structure": {
"frontend": [
"app/ - for routes",
"components/ - for reusable UI parts",
"hooks/ - for custom React logic",
"lib/ - for helpers, utils, constants",
"context/ - for global state (if used)",
"data/ - for static and dynamic content JSON files and string constants"
],
"backend": [
"routes/ - for route definitions",
"controllers/ - for logic",
"models/ - for DB schemas",
"middlewares/ - for auth/logging",
"config/ - for environment and secrets",
"utils/ - for reusable backend helpers"
]
},
"design_patterns": [
"Follow MVC pattern for backend logic separation.",
"Use repository pattern when accessing DB.",
"Use atomic design for frontend UI components."
]
},
"data_management": {
"goal": "Ensure all static text, icons, and image references are centrally managed for consistency and easy modification.",
"rules": [
"Create a 'data/' folder in the frontend root to store all JSON files used for content management.",
"Maintain separate JSON files for each page or feature (e.g., home.json, about.json, footer.json).",
"Define string constants and reusable keys in a constants file (e.g., lib/constants.ts) and reference them wherever needed.",
"Use these JSON files to make page content (text, images, and icons) dynamic.",
"Ensure the admin panel provides CRUD access to modify these JSON contents dynamically (store them in the database or update via API).",
"Avoid hardcoding user-facing text, icon names, or image URLs directly inside components.",
"Ensure components fetch and render content dynamically from the corresponding JSON or API-driven source."
]
},
"branding_guidelines": {
"company": {
"name": "BNI",
"vision": "Changing the way the world does business",
"purpose": "BNI provides Member-businesses with new client opportunities",
"coreValues": [
"Givers Gain",
"Building Relationships",
"Lifelong Learning",
"Traditions",
"Innovation",
"Positive Attitude",
"Accountability",
"Recognition"
],
"brandPersonality": [
"Professional",
"Positive",
"Welcoming",
"Energetic",
"Trustworthy",
"Friendly",
"Fun",
"Caring"
]
},
"colors": {
"primary": { "name": "BNI Red", "hex": "#CF2030", "rgb": "207, 32, 48", "pantone": "186", "cmyk": "12, 100, 90, 3" },
"secondary": { "name": "Sterling Grey", "hex": "#C8C8C8", "rgb": "200, 200, 200", "pantone": "Cool Grey 3", "cmyk": "20, 15, 15, 0" },
"backgroundLight": { "name": "Sterling Light Grey", "hex": "#F2F2F2", "rgb": "244, 244, 244" },
"textDark": { "name": "Granite Grey", "hex": "#64666A", "rgb": "100, 102, 106", "pantone": "Cool Grey 10", "cmyk": "60, 50, 45, 20" },
"black": { "name": "Power Black", "hex": "#000000", "rgb": "0,0,0" },
"white": { "name": "True White", "hex": "#FFFFFF", "rgb": "255,255,255" }
},
"fonts": {
"primaryFont": "'Helvetica Neue', Arial, sans-serif",
"weights": ["Regular", "Italic", "Bold", "Bold Italic", "Light", "Light Italic"],
"usageNotes": "Use Helvetica Neue for main content and headings; Arial as fallback"
},
"logo": {
"mainColor": "#CF2030",
"usageRules": [
"Always use BNI Red on white or bright backgrounds",
"Use white logo version on dark backgrounds",
"Do not distort or change proportions",
"No patterned backgrounds behind logo",
"Transparent background only"
]
},
"photoStyle": {
"foreground": ["Professional", "Positive", "Welcoming", "Engaging", "Trustworthy", "Friendly", "Helpful"],
"background": ["People", "Depth of field", "Bright", "Soft focus"]
},
"templates": [
"Business Card",
"Name Badges",
"A4 Letterhead",
"Email Signature",
"Chapter Banners",
"PowerPoint",
"Pins",
"Promotional Items"
],
"stylingGuidelines": {
"button": {
"backgroundColor": "#CF2030",
"color": "#FFFFFF",
"borderRadius": "4px",
"padding": "12px 20px",
"fontWeight": "bold",
"hover": { "backgroundColor": "#a31a24" }
},
"heading": {
"fontFamily": "'Helvetica Neue', Arial, sans-serif",
"fontWeight": "700",
"color": "#64666A"
},
"paragraph": {
"fontFamily": "'Helvetica Neue', Arial, sans-serif",
"fontWeight": "400",
"color": "#64666A",
"lineHeight": "1.6",
"fontSize": "16px"
},
"link": {
"color": "#CF2030",
"textDecoration": "underline",
"hover": { "color": "#a31a24" }
}
}
},
"mvp_guidelines": {
"goal": "Deliver functional prototype fast with minimal dependencies.",
"priority": [
"Core functionality first",
"Authentication and basic CRUD",
"UI responsiveness and accessibility",
"Testing of major workflows"
],
"avoid": [
"Over-engineering",
"Unused dependencies",
"Premature optimization"
]
},
"documentation_rules": {
"comments": "Add short docstring above complex logic or functions.",
"readme": "Summarize setup, run, and deploy steps clearly."
}
}
