// Central catalog of realistic placeholder content for SQA with Abdullah.
// All content is illustrative — no fake companies, testimonials, or credentials.

export const site = {
  name: "SQA with Abdullah",
  short: "SQA·A",
  tagline: "Learn Software Testing with Real Industry Experience",
  description:
    "Practical Software Quality Assurance training built on real industry projects. Learn manual and automation testing, career preparation, and modern QA workflows.",
  url: "https://sqawithabdullah.com",
  author: "Abdullah Al Baky",
  email: "sqa.abdullah2022@gmail.com",
  location: "Mirpur, Dhaka, Bangladesh",
  social: {
    youtube: "https://www.youtube.com/channel/UC0S6x0fguhHh9Zb7V6Lx4IA",
    linkedin: "https://linkedin.com/in/sqawithabdullah",
    github: "https://github.com/sqawithabdullah",
    facebook: "https://www.facebook.com/people/Sqa_with_abdullah/100088666096163/",
    x: "https://x.com/sqawithabdullah",
  },
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resources", to: "/resources" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export type Course = {
  slug: string;
  title: string;
  summary: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  format: string;
  price: string;
  tag: string;
  outcomes: string[];
  modules: { title: string; lessons: string[] }[];
  audience: string[];
  prerequisites: string[];
  tools: string[];
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: "manual-testing-foundation",
    title: "Manual Testing Foundation",
    summary:
      "Build a strong QA base — test design, execution, defect reporting, and agile workflows using real product scenarios.",
    level: "Beginner",
    duration: "8 weeks · Live cohort",
    format: "Live classes + recorded lessons + weekly assignments",
    price: "Enrollment opens each batch",
    tag: "Most popular",
    featured: true,
    outcomes: [
      "Write clear, structured test cases and scenarios",
      "Perform functional, UI, cross-browser, and regression testing",
      "Report defects that developers can actually reproduce",
      "Work confidently inside an agile Scrum team",
    ],
    modules: [
      {
        title: "SQA Fundamentals",
        lessons: ["SDLC & STLC", "Testing types overview", "Levels of testing", "Real-world QA workflow"],
      },
      {
        title: "Test Design",
        lessons: ["Test case structure", "Boundary & equivalence", "Decision tables", "State transition"],
      },
      {
        title: "Execution & Reporting",
        lessons: ["Executing test runs", "Jira workflow", "Defect lifecycle", "Severity vs. priority"],
      },
      {
        title: "Career Preparation",
        lessons: ["QA resume workshop", "Portfolio project", "Interview practice", "Mock assessment"],
      },
    ],
    audience: [
      "Aspiring QA engineers with no prior testing background",
      "Career switchers moving into IT and software",
      "CSE / IT students preparing for a first job",
    ],
    prerequisites: ["Basic computer literacy", "Comfort with English documentation", "Willingness to practice weekly"],
    tools: ["Jira", "TestRail", "Chrome DevTools", "Postman (intro)", "Google Sheets test tracker"],
  },
  {
    slug: "api-testing-with-postman",
    title: "API Testing with Postman",
    summary:
      "Move beyond the UI. Learn how modern QA teams validate REST APIs with Postman, JSON schemas, and automated collection runs.",
    level: "Intermediate",
    duration: "4 weeks · Self-paced + live Q&A",
    format: "Recorded modules + weekly live session",
    price: "Enrollment opens each batch",
    tag: "New",
    outcomes: [
      "Understand REST, HTTP, and API contracts",
      "Design positive, negative, and edge-case API tests",
      "Automate collection runs with Postman & Newman",
      "Validate responses with JSON schema and scripts",
    ],
    modules: [
      { title: "Web & API Basics", lessons: ["Client-server model", "HTTP verbs", "Status codes", "Auth types"] },
      { title: "Hands-on Postman", lessons: ["Collections", "Variables & environments", "Pre-request scripts", "Tests"] },
      { title: "Automation", lessons: ["Data-driven tests", "Newman CLI", "CI integration", "Reporting"] },
      { title: "Real Projects", lessons: ["E-commerce API suite", "Auth flows", "Third-party integrations"] },
    ],
    audience: ["Manual QAs moving into API testing", "Backend-curious testers", "Aspiring automation engineers"],
    prerequisites: ["Manual testing basics", "Familiarity with JSON"],
    tools: ["Postman", "Newman", "JSON Schema", "Swagger / OpenAPI"],
  },
  {
    slug: "automation-testing-with-selenium",
    title: "Automation Testing with Selenium & Java",
    summary:
      "The industry-standard automation stack. Build a real Selenium framework with Java, TestNG, and Page Object Model from scratch.",
    level: "Advanced",
    duration: "12 weeks · Live cohort",
    format: "Live coding + labs + capstone project",
    price: "Enrollment opens each batch",
    tag: "Career track",
    featured: true,
    outcomes: [
      "Write maintainable automated UI tests in Java",
      "Design a Page Object Model framework end-to-end",
      "Run cross-browser tests locally and on CI",
      "Ship a capstone framework you can showcase in interviews",
    ],
    modules: [
      { title: "Java for Testers", lessons: ["Syntax basics", "OOP essentials", "Collections", "Exceptions"] },
      { title: "Selenium WebDriver", lessons: ["Locators", "Waits", "Actions", "Windows & frames"] },
      { title: "TestNG & POM", lessons: ["Annotations", "Data providers", "Page Object Model", "Base classes"] },
      { title: "Framework & CI", lessons: ["Maven", "Reporting", "GitHub Actions", "Capstone project"] },
    ],
    audience: ["Manual QAs targeting automation roles", "Junior SDETs", "Developers moving into QA"],
    prerequisites: ["Manual testing experience", "Comfort with basic programming logic"],
    tools: ["Java", "Selenium WebDriver", "TestNG", "Maven", "IntelliJ IDEA", "GitHub Actions"],
  },
  {
    slug: "career-prep-for-qa",
    title: "QA Career Prep Bootcamp",
    summary:
      "A focused 3-week sprint: resume, LinkedIn, portfolio, mock interviews, and salary negotiation for QA roles.",
    level: "Intermediate",
    duration: "3 weeks · Cohort",
    format: "Workshops + 1:1 review + mock interviews",
    price: "Enrollment opens each batch",
    tag: "Job-ready",
    outcomes: [
      "Ship a recruiter-ready QA resume and LinkedIn",
      "Build a portfolio that proves your skills",
      "Practice technical + behavioral interviews live",
      "Negotiate offers with confidence",
    ],
    modules: [
      { title: "Positioning", lessons: ["Your QA story", "Target roles", "Resume rewrite"] },
      { title: "Portfolio", lessons: ["Case study structure", "Publishing on GitHub", "Portfolio review"] },
      { title: "Interviews", lessons: ["Scenario questions", "Behavioral prep", "Mock interviews"] },
    ],
    audience: ["QA learners preparing for their first role", "Junior QAs targeting a level-up"],
    prerequisites: ["Basic QA knowledge", "Some testing project experience"],
    tools: ["Notion", "GitHub", "LinkedIn"],
  },
];

export type Project = {
  slug: string;
  title: string;
  role: string;
  industry: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  tools: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    slug: "ecommerce-quality-program",
    title: "E-commerce Quality Program",
    role: "QA Engineer",
    industry: "Retail / E-commerce",
    duration: "18 months",
    summary:
      "End-to-end QA for a multi-market e-commerce platform covering web, admin, and public API — from checkout to fulfillment.",
    responsibilities: [
      "Owned regression strategy across web, admin, and API",
      "Designed API test suites for order, payment, and inventory services",
      "Introduced structured defect triage between QA, dev, and product",
      "Ran release readiness checks for every biweekly deployment",
    ],
    tools: ["Jira", "TestRail", "Postman", "Chrome DevTools", "Charles Proxy"],
    impact: [
      "Reduced post-release critical defects across three consecutive quarters",
      "Cut regression cycle time by consolidating overlapping test cases",
      "Improved defect clarity — measurable drop in re-open rate",
    ],
  },
  {
    slug: "fintech-payments-qa",
    title: "Fintech Payments QA",
    role: "QA Engineer",
    industry: "Financial Services",
    duration: "12 months",
    summary:
      "Quality assurance for a mobile-first payments product — verifying transaction integrity, edge cases, and compliance flows.",
    responsibilities: [
      "Designed end-to-end scenarios across happy paths and edge conditions",
      "Validated third-party payment gateway integrations",
      "Performed security-oriented functional testing on auth and KYC flows",
      "Wrote acceptance criteria alongside product managers",
    ],
    tools: ["Jira", "Postman", "Android Studio", "Xcode", "Charles Proxy"],
    impact: [
      "Blocked multiple high-severity payment defects before release",
      "Reduced production incident volume on core wallet flows",
      "Established a repeatable release checklist adopted team-wide",
    ],
  },
  {
    slug: "saas-platform-automation",
    title: "SaaS Platform Test Automation",
    role: "QA Engineer / Automation",
    industry: "B2B SaaS",
    duration: "9 months",
    summary:
      "Built a Selenium + TestNG framework for a workflow SaaS, migrating a large manual regression suite into automated smoke and sanity runs.",
    responsibilities: [
      "Architected Page Object Model framework in Java",
      "Automated top-priority smoke and sanity scenarios",
      "Integrated the framework with the team's CI pipeline",
      "Wrote onboarding docs so any QA could add new tests",
    ],
    tools: ["Java", "Selenium WebDriver", "TestNG", "Maven", "GitHub Actions"],
    impact: [
      "Cut manual smoke-test time from hours to minutes",
      "Enabled QA to shift focus toward exploratory and risk-based testing",
      "Improved release confidence for every deployment",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-software-quality-assurance",
    title: "What is Software Quality Assurance, really?",
    excerpt:
      "SQA is more than finding bugs. A grounded introduction to what QA actually does inside modern product teams.",
    category: "Fundamentals",
    readTime: "6 min",
    publishedAt: "2026-05-14",
    content: [
      "Most people who hear about QA for the first time think about clicking buttons and finding bugs. That is a small slice of the job.",
      "Software Quality Assurance is the practice of making sure the software a team ships actually solves the problem it was built for. That includes clear requirements, thoughtful test design, honest defect reporting, and steady release habits.",
      "In a good team, QA is not the gate at the end. It is a set of habits that starts the moment a feature is written down and continues after the release.",
      "If you are considering a career in QA, this is the mindset shift to start with: you are not the person who says no. You are the person who helps the team ship with confidence.",
    ],
  },
  {
    slug: "test-case-writing-checklist",
    title: "A practical checklist for writing test cases developers respect",
    excerpt:
      "Six habits that turn vague test cases into reproducible, review-friendly documents.",
    category: "Manual Testing",
    readTime: "8 min",
    publishedAt: "2026-05-02",
    content: [
      "The gap between a beginner test case and a professional test case is not the tool. It is discipline.",
      "Start with the objective in one sentence. Name the preconditions. Number the steps. Write the expected result as an observable outcome, not a feeling.",
      "Include the environment. Include the data. Include the version. If a developer cannot reproduce your case in five minutes, the case needs work.",
      "Review your test case as if you were the developer receiving it. If it is unclear, rewrite it before you file the defect.",
    ],
  },
  {
    slug: "manual-to-automation-roadmap",
    title: "From manual QA to automation: a realistic 90-day roadmap",
    excerpt:
      "You do not need to become a full-stack engineer. Here is the honest path from manual testing to your first automation role.",
    category: "Career",
    readTime: "10 min",
    publishedAt: "2026-04-18",
    content: [
      "The most common question I hear from manual QAs is some version of: when will I be ready to move into automation?",
      "The answer is closer than most people think, but the path is specific. Learn the language basics deeply enough to read code, not to build systems. Learn one framework end to end. Ship one small project publicly.",
      "In 90 focused days you can build a portfolio piece that matters more than any certificate.",
      "This post walks through the day-by-day plan I recommend to students moving into automation.",
    ],
  },
  {
    slug: "api-testing-first-principles",
    title: "API testing from first principles",
    excerpt:
      "A gentle introduction to HTTP, status codes, and why API tests catch issues UI tests never can.",
    category: "API Testing",
    readTime: "7 min",
    publishedAt: "2026-04-04",
    content: [
      "APIs are the contract between the parts of an app you can see and the parts you cannot. If the contract breaks, everything downstream breaks with it.",
      "This is why API testing is one of the highest-leverage skills a manual QA can add. You catch problems earlier, faster, and with less setup than any UI test.",
      "Start with the basics: what an HTTP request looks like, what a status code means, and how to read a JSON body without assumptions.",
      "Once those click, tools like Postman start feeling like a keyboard, not a mystery.",
    ],
  },
  {
    slug: "defect-reporting-that-works",
    title: "Defect reporting that actually gets fixed",
    excerpt:
      "The five fields that separate a defect report developers act on from one that sits in Jira for a week.",
    category: "Manual Testing",
    readTime: "5 min",
    publishedAt: "2026-03-22",
    content: [
      "Every QA has filed a bug that was closed as \"cannot reproduce.\" It is frustrating, and it is usually preventable.",
      "A defect report is a small piece of writing with a job: to give someone else enough context to see what you saw, in the state you saw it, on the version you saw it in.",
      "Get five fields right — title, environment, steps, expected, actual — and you will spend less time defending your bugs and more time finding new ones.",
    ],
  },
  {
    slug: "qa-portfolio-project-ideas",
    title: "Five QA portfolio projects that actually help you land a job",
    excerpt:
      "Real project ideas — not homework — that show hiring managers you can think like a QA engineer.",
    category: "Career",
    readTime: "9 min",
    publishedAt: "2026-03-08",
    content: [
      "Hiring managers do not want to see certificates. They want to see how you think.",
      "A portfolio project gives you a way to show that. It does not have to be big. It has to be honest, well-documented, and reproducible.",
      "Here are five project ideas from real cohorts — plus how to structure each one so it reads like professional work.",
    ],
  },
];

export type Resource = {
  slug: string;
  title: string;
  type: "PDF" | "Template" | "Checklist" | "Video";
  description: string;
  cta: string;
};

export const resources: Resource[] = [
  {
    slug: "test-case-template",
    title: "Structured Test Case Template",
    type: "Template",
    description: "A reusable template with fields for objective, preconditions, steps, and expected results.",
    cta: "Download template",
  },
  {
    slug: "defect-report-checklist",
    title: "Defect Report Checklist",
    type: "Checklist",
    description: "The five must-have fields, plus the ten questions to ask before you hit Submit.",
    cta: "Download checklist",
  },
  {
    slug: "qa-interview-question-bank",
    title: "QA Interview Question Bank",
    type: "PDF",
    description: "Fifty categorized questions with structured sample answers for manual and automation interviews.",
    cta: "Download PDF",
  },
  {
    slug: "postman-starter-collection",
    title: "Postman Starter Collection",
    type: "Template",
    description: "A ready-to-run Postman collection covering auth, CRUD, and negative test patterns.",
    cta: "Download collection",
  },
  {
    slug: "manual-to-automation-roadmap-pdf",
    title: "Manual → Automation 90-Day Roadmap",
    type: "PDF",
    description: "Week-by-week plan to move from manual testing to your first automation role.",
    cta: "Download roadmap",
  },
  {
    slug: "youtube-playlist",
    title: "Free QA Video Series",
    type: "Video",
    description: "Curated playlist covering the essentials of manual and API testing.",
    cta: "Watch on YouTube",
  },
];

export const roadmap = [
  {
    step: "01",
    title: "Foundations",
    description: "SDLC, STLC, testing types, and the QA mindset.",
    modules: ["Manual testing basics", "Test design techniques", "Agile & Scrum fluency"],
  },
  {
    step: "02",
    title: "Tools of the trade",
    description: "The tools every working QA uses every day.",
    modules: ["Jira & TestRail", "Chrome DevTools", "Git basics"],
  },
  {
    step: "03",
    title: "API & backend testing",
    description: "Test the contracts behind the UI.",
    modules: ["HTTP essentials", "Postman deep dive", "JSON & schema validation"],
  },
  {
    step: "04",
    title: "Automation",
    description: "Ship a maintainable automation framework.",
    modules: ["Java for testers", "Selenium + TestNG", "Page Object Model"],
  },
  {
    step: "05",
    title: "Career & portfolio",
    description: "Turn your skills into a role.",
    modules: ["Portfolio project", "Resume & LinkedIn", "Mock interviews"],
  },
];

export const whyChoose = [
  {
    title: "Built on real industry projects",
    description: "Every lesson traces back to a real product scenario — not a textbook example.",
  },
  {
    title: "Practical over theoretical",
    description: "You learn by doing: weekly assignments, reviewed submissions, real deliverables.",
  },
  {
    title: "Mentorship that continues after class",
    description: "Access to Q&A sessions, community, and support well past the live cohort.",
  },
  {
    title: "Career-focused outcomes",
    description: "Portfolio, resume, and interview practice built into the learning path.",
  },
  {
    title: "Modern, tool-relevant curriculum",
    description: "Updated as the industry moves — Jira, Postman, Selenium, and modern QA workflows.",
  },
  {
    title: "Learn in clear, simple English",
    description: "Complex ideas explained without jargon so you can follow, apply, and remember.",
  },
];

export const stats = [
  { label: "Years of hands-on QA experience", value: "6+" },
  { label: "Learners guided across cohorts", value: "1,200+" },
  { label: "Live projects delivered as QA", value: "20+" },
  { label: "Free QA lessons published", value: "80+" },
];

export const faqs = [
  {
    q: "Do I need a technical background to start?",
    a: "No. Manual testing does not require programming. If you can use a computer comfortably and read English documentation, you can start.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "Both. Live cohorts are held on a schedule; recordings and materials remain available so you can revisit any lesson.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes — every course includes a completion certificate, and the automation track includes a capstone project you can showcase.",
  },
  {
    q: "Can I ask questions between classes?",
    a: "Yes. Every enrolled learner gets access to the community and scheduled Q&A sessions with Abdullah.",
  },
  {
    q: "Is this suitable for career switchers?",
    a: "Yes. A large share of learners in every cohort are switching from non-IT backgrounds. The Foundation course is designed for them.",
  },
  {
    q: "Will this help me get a job?",
    a: "The curriculum, portfolio work, and career-prep sessions are designed with that goal in mind. Outcomes depend on your effort and market conditions, but you will be well prepared.",
  },
];