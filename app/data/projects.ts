export interface Project {
  id: string;
  title: string;
  description: string;
  frontendFeatures?: {
    title: string;
    items: string[];
  };
  backendFeatures?: {
    title: string;
    items: string[];
  };
  achievements?: {
    title: string;
    items: string[];
  };
  // Optional: You can add a project image or screenshot
  imageUrl?: string;
  // Optional: Links to your project
  liveUrl?: string;
  githubUrl?: string;
  // Optional: Additional technologies used (will be displayed as tags)
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: "paytm-project-starter-monorepo-migration",
    title: "Pay-X",
    description:
      "A Turborepo monorepo containing Next.js apps (user-app, merchant-app), a shared UI package, Prisma-backed database, NextAuth authentication, TailwindCSS styling, and an Express webhook microservice. TypeScript-first full-stack starter with tooling for linting, seeding, and CI-focused build orchestration.",
    frontendFeatures: {
      title: "Frontend Features",
      items: [
        "Next.js (App Router) with server/client components",
        "TypeScript across apps and packages",
        "TailwindCSS + PostCSS for styling",
        "Shared UI package (reusable Tailwind components: Button, Card, TextInput, Heading)",
        "Charting with Chart.js (react-chartjs-2)",
        "Framer Motion animations and loaders",
        "Recoil for client state management",
        "NextAuth client integration (session redirects, providers)",
        "Responsive layouts and component-driven design",
      ],
    },
    backendFeatures: {
      title: "Backend Architecture",
      items: [
        "Prisma ORM with seed scripts and client usage",
        "Next.js route handlers / API routes (server-side logic inside apps)",
        "NextAuth for authentication (Credentials, Google, GitHub) with callbacks",
        "bcrypt for password hashing",
        "Independent Express webhook microservice (bank-webhook)",
        "Database via DATABASE_URL (intended for Postgres or other Prisma-supported DB)",
        "Monorepo-aware build tooling (Turborepo)",
      ],
    },
    achievements: {
      title: "Key Highlights",
      items: [
        "Monorepo structure using Turborepo for multi-app development",
        "Type-safe full-stack with TypeScript + Prisma",
        "Reusable UI package to reduce duplication across apps",
        "Integrated auth flows including social providers and credentials",
        "Charts and rich client animations for improved UX",
        "Seeded database and developer-friendly scripts",
      ],
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "PostCSS",
      "Turborepo",
      "Prisma",
      "NextAuth",
      "bcrypt",
      "Chart.js",
      "react-chartjs-2",
      "Framer Motion",
      "Recoil",
      "Express",
      "lucide-react",
      "ESLint",
      "Node.js",
    ],
    imageUrl:
      "https://res.cloudinary.com/dp3mmxvqb/image/upload/v1763058357/Screenshot_2025-11-13_at_11.46.10_PM_yzt921.png",
    liveUrl: "https://user-payx.sarthaksarangi.com/",
    githubUrl: "https://github.com/sarthaksarangi/pay-x",
  },
  {
    id: "medium-clone",
    title: "Full-Stack Medium Clone",
    description:
      "A modern blogging platform inspired by Medium, featuring rich text editing, image uploads, and real-time updates. Built with React, TypeScript, and Cloudflare Workers.",
    frontendFeatures: {
      title: "Frontend Features",
      items: [
        "Rich Text Editor with TipTap",
        "Real-time Blog Preview",
        "Responsive UI with TailwindCSS",
        "Image Upload & Management",
        "Client-side Form Validation",
        "Authentication System",
      ],
    },
    backendFeatures: {
      title: "Backend Architecture",
      items: [
        "Serverless API with Cloudflare Workers",
        "PostgreSQL Database with Prisma ORM",
        "JWT Authentication System",
        "Cloudinary Image Storage",
        "Input Validation with Zod",
        "RESTful API Design",
      ],
    },
    achievements: {
      title: "Key Highlights",
      items: [
        "Serverless Architecture for Scalability",
        "Type-safe Frontend & Backend",
        "Optimized Image Processing",
        "Modular Component Design",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma",
      "Hono.js",
      "Cloudinary",
    ],
    imageUrl:
      "https://res.cloudinary.com/dp3mmxvqb/image/upload/v1763064588/Screenshot_2025-11-14_at_1.25.58_AM_gncynz.png",
    liveUrl: "https://medium-blog-fe.vercel.app",
    githubUrl: "https://github.com/sarthaksarangi/medium-blog-fe",
  },
];
