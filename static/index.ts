export const projects = [
  {
    title: "Aftersole E-commerce Shopping Platform",
    desc: "Developed a full-stack e-commerce platform for my own business, Aftersole, using Next.js and TailwindCSS with Redux Toolkit for global state. Architected the backend in MongoDB and implemented a custom real-time messaging system via Socket.IO, fully integrated with WhatsApp Cloud API without relying on third-party providers. Designed and deployed a robust admin panel for managing products, inventory, and homepage content. Implemented secure JWT authentication and deployed on AWS with S3 for storage, EC2 for hosting, and CloudFront for CDN delivery, ensuring high performance and 99%+ uptime.",
    year: "April 2025 - Present",
    location: "New Delhi, India",
    image:
      "https://cdn.aftersole.com/uploads/7c1dee88-e81e-4879-a9cd-0b397c81a19c-1754478057089.jpeg",
    services: "Next.js, MongoDB, AWS, Socket.IO, WhatsApp Cloud API",
    client: "Aftersole",
    previewUrl: "https://aftersole.com",
    keyFeatures: [
      "Built for Own Business – End-to-End Ownership",
      "Custom WhatsApp Cloud API Integration (No Third-Party Platform)",
      "Real-time Messaging via Socket.IO",
      "Responsive UI with Next.js & TailwindCSS",
      "Global State Management with Redux Toolkit",
      "Full-featured Admin Panel with CRUD",
      "Secure JWT-based Authentication",
      "AWS Deployment with S3, EC2, and CloudFront",
    ],
    slug: "aftersole-ecommerce-shopping-plateform",
  },
  {
    title: "Foldyfinds E-commerce Shopping Platform",
    desc: "I built a responsive, accessible web application using Next.js, Tailwind CSS, Aceternity UI, and shadcn/ui, with Redux Toolkit for efficient state management. The backend, powered by MongoDB, handled users, products, orders, and reviews. I developed a full-featured admin panel for product management, inventory tracking, and homepage customization with complete CRUD functionality. The project was deployed on AWS with Nginx, SSL, and GoDaddy integration for secure hosting. I also leveraged ChatGPT to speed up development, refactor code, and improve overall quality.",
    year: "Feb 2025 - April 2025",
    location: "New Delhi, India",
    image:
      "https://cdn.aftersole.com/uploads/f36bc770-bc35-49ea-bee3-7913ca768ae0-1754478952322.jpeg",
    services: "Next.js, MongoDB, AWS",
    client: "Foldyfinds",
    previewUrl: "https://foldyfinds.in",
    keyFeatures: [
      "Responsive and Accessible UI",
      "Global State Management with Redux Toolkit",
      "Full-featured Admin Panel with CRUD",
      "Backend Integration with MongoDB",
      "Inventory Tracking and Homepage Customization",
      "Secure Deployment on AWS with Nginx and SSL",
    ],
    slug: "foldyfinds-ecommerce-shopping-plateform",
  },
  {
    title: "Byadab E-Commerce Platform – React.js to Next.js 13 Migrated",
    desc: "Initially developed on React.js, later migrated to Next.js 13 with the App Router in 2024 for improved performance and scalability. Designed a responsive and consistent UI using Tailwind CSS and shadcn/ui. Integrated multiple third-party APIs including DHL, FedEx, NimbusPost, and Razorpay for logistics and payment processing. Deployed on AWS with Nginx, SSL, and domain routing via GoDaddy DNS. Optimized the platform for SEO, performance, and long-term maintainability. Leveraged ChatGPT to accelerate development workflows and assist with content creation.",
    year: "June 2022 - Feb 2025",
    location: "New Delhi, India",
    image:
      "https://cdn.aftersole.com/uploads/0cf07511-d352-4d19-b204-76d53183cb29-1754478619824.jpeg", // replace with actual image URL
    services: "Next.js, Tailwind CSS, AWS",
    client: "Byadab",
    previewUrl: "https://www.byadab.com",
    keyFeatures: [
      "Migration from React.js to Next.js 13 with App Router",
      "Responsive UI with Tailwind CSS and shadcn/ui",
      "Integration of DHL, FedEx, NimbusPost, and Razorpay APIs",
      "AWS Deployment with Nginx and SSL",
      "GoDaddy DNS Domain Management",
      "SEO and Performance Optimization",
    ],
    slug: "byadab-ecommerce-platform-migration",
  },
];
type Blog = {
  id: string; // unique identifier
  title: string; // blog title
  slug: string; // SEO-friendly url
  date: string; // publish date
  updatedAt?: string; // last updated date
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  image: string; // cover image
  tags: string[]; // categories/tags
  readTime: string; // "5 min read"
  desc: string; // short excerpt
  content: string; // full blog body (markdown or HTML)
  likes?: number; // optional interaction stats
  views?: number;
  featured?: boolean; // highlight in UI
};

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Future of JavaScript: What's New in ES2025?",
    slug: "future-of-javascript-es2025",
    date: "February 5, 2025",
    updatedAt: "February 12, 2025",
    author: {
      name: "Ashish Kumar (Leo)",
      avatar:
        "https://cdn.aftersole.com/uploads/c0c5d2ad-1238-4fd3-b6d2-3ef1198bc08d-avatar-leo.jpg",
      role: "Full Stack Developer",
    },
    image:
      "https://images.unsplash.com/photo-1726568313407-c7d9c8a8ce88?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0",
    tags: ["JavaScript", "Web Development", "ES2025"],
    readTime: "7 min read",
    desc: "ES2025 is set to bring groundbreaking updates like pattern matching, async context, and pipeline operators. Let's explore what they mean for developers.",
    content: `
# 🚀 The Future of JavaScript: What's New in ES2025?

JavaScript continues to dominate the web development ecosystem. Each new ECMAScript release reshapes how developers build modern applications. **ES2025** is no exception—it introduces some of the most anticipated features in years.

---

## 🌟 Key Features in ES2025

### 1. 🔎 Pattern Matching
Pattern Matching brings a cleaner and more powerful alternative to the old \`switch\` statement.

**Before ES2025:**
\`\`\`js
switch (status) {
  case "success":
    handleSuccess();
    break;
  case "error":
    handleError();
    break;
  default:
    handleDefault();
}
\`\`\`

**With Pattern Matching:**
\`\`\`js
match (status) {
  "success" => handleSuccess(),
  "error"   => handleError(),
  _         => handleDefault(),
}
\`\`\`

✅ More concise  
✅ Easier to maintain  
✅ Supports nested destructuring  

---

### 2. ⚡ Async Context
Managing async operations across different scopes has always been tricky. ES2025 introduces **Async Context**, allowing you to maintain execution state seamlessly.

**Example:**
\`\`\`js
import { AsyncContext } from "async-context";

const userContext = new AsyncContext();

async function fetchUser(id) {
  userContext.set("userId", id);
  await db.findUser(id);
  console.log(userContext.get("userId")); // persists across awaits
}
\`\`\`

---

### 3. ➡️ Pipeline Operator (\`|>\`)
Functional programming gets a huge upgrade with the new **pipeline operator**.

**Without pipeline:**
\`\`\`js
const result = formatData(validateData(parseData(raw)));
\`\`\`

**With pipeline:**
\`\`\`js
const result = raw
  |> parseData
  |> validateData
  |> formatData;
\`\`\`

Much easier to read and reason about!  

---

## 📝 Why It Matters
- Less boilerplate → cleaner codebases.  
- Better async handling → fewer context bugs.  
- More expressive syntax → developers can write functional-style code more naturally.  

---

## 📌 Notes for Developers
- Tooling (Babel/TypeScript) will adopt these features gradually.  
- Legacy browsers may still need polyfills.  
- Adoption is expected to skyrocket in frameworks like React, Next.js, and Node.js backends.  

---

## ✅ Final Thoughts
ES2025 is not just an incremental update—it’s a **paradigm shift** in how JavaScript is written. Developers should start experimenting early to stay ahead.  
    `,
    likes: 120,
    views: 2400,
    featured: true,
  },
  {
    id: "2",
    title: "How AI is Transforming Software Development",
    slug: "ai-transforming-software-development",
    date: "February 10, 2025",
    author: {
      name: "Ashish Kumar (Leo)",
      avatar:
        "https://cdn.aftersole.com/uploads/c0c5d2ad-1238-4fd3-b6d2-3ef1198bc08d-avatar-leo.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1726569058494-a8e6ddcf1799?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0",
    tags: ["AI", "Software Development", "Tools"],
    readTime: "5 min read",
    desc: "AI is no longer a buzzword. From code generation to testing automation, it is revolutionizing how software is built.",
    content: `
# 🤖 How AI is Transforming Software Development

Artificial Intelligence is no longer hype—it’s reality. By 2025, AI has become deeply integrated into how software is designed, written, tested, and deployed.

---

## 🌟 Key Areas AI is Impacting

### 1. 👩‍💻 AI Code Assistants
Tools like **GitHub Copilot**, **Codeium**, and **Tabnine** help developers write code faster.

- Suggest entire functions in real time  
- Reduce boilerplate  
- Provide documentation inline  

---

### 2. 🧪 Automated Testing
AI can now generate **test cases automatically** by scanning source code.

**Benefits:**
- Faster QA cycles  
- Higher test coverage  
- Fewer human errors  

---

### 3. 🐞 Bug Detection with ML
Machine learning models detect unusual patterns and edge cases humans often miss.

Example: **DeepCode** uses AI to scan millions of commits and highlight potential bugs.

---

### 4. ⚙️ Project Management & DevOps
AI-driven tools forecast delivery timelines, optimize sprints, and even auto-resolve deployment issues.

---

## 📝 Notes for Developers
- AI won’t replace developers, but it will **augment** them.  
- Soft skills (problem-solving, design thinking) are more important than ever.  
- Ethical concerns (bias, privacy) must be considered.  

---

## ✅ Final Thoughts
By 2025, developers are becoming **AI-augmented engineers**. Embracing AI is no longer optional—it’s the new baseline for productivity.  
    `,
    likes: 98,
    views: 1800,
  },
  {
    id: "3",
    title: "Top 5 Programming Languages to Learn in 2025",
    slug: "top-5-programming-languages-2025",
    date: "February 16, 2025",
    author: {
      name: "Ashish Kumar (Leo)",
      avatar:
        "https://cdn.aftersole.com/uploads/c0c5d2ad-1238-4fd3-b6d2-3ef1198bc08d-avatar-leo.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1726566289392-011dc554e604?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0",
    tags: ["Programming", "Career", "Languages"],
    readTime: "4 min read",
    desc: "Which programming languages should you invest your time in this year? We break down the top 5 picks for 2025.",
    content: `
# 🏆 Top 5 Programming Languages to Learn in 2025

Choosing the right programming language can define your career trajectory. Here are the top picks for 2025.

---

## 1. ⚡ JavaScript / TypeScript
Still the backbone of the web.

- Frameworks: React, Next.js, Angular  
- Full-stack support with Node.js  
- TypeScript ensures type safety  

---

## 2. 🐍 Python
The king of **AI, ML, and data science**.

- TensorFlow, PyTorch for AI  
- FastAPI, Django for backend  
- Rich ecosystem of libraries  

---

## 3. 🦀 Rust
Known for **memory safety** and **performance**.

- Systems programming  
- Growing WebAssembly support  
- Used in blockchain & OS kernels  

---

## 4. 🐹 Go (Golang)
Designed for **cloud-native development**.

- Excellent concurrency model  
- Lightweight for microservices  
- Backed by Google  

---

## 5. 📱 Swift & Kotlin
The go-to languages for **mobile-first development**.

- Swift for iOS  
- Kotlin for Android  
- Both support cross-platform solutions  

---

## 📝 Notes for Developers
- Pick one language for **depth** and another for **breadth**.  
- Industry demand + personal interest = smart career choice.  
- Rust & Go are gaining adoption in startups, while Python remains evergreen.  

---

## ✅ Final Thoughts
2025 is not about chasing the “next big thing” but mastering languages that **future-proof your skills**.  
    `,
    likes: 150,
    views: 3200,
  },
];
