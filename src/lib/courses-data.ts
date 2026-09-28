import { imagery } from "./providence-data";

export interface Course {
  id: string;
  title: string;
  category: "AI & Data" | "Programming" | "3D & Immersive" | "Design & Digital" | "Crypto & Blockchain";
  shortDescription: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  lessonsCount: number;
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: string;
  image: string;
  featured?: boolean;
  whatYouLearn: string[];
  curriculum: {
    module: string;
    lessons: string[];
  }[];
}

export const coursesData: Course[] = [
  // ── AI & Data ──────────────────────────────────────────────────────
  {
    id: "generative-ai-foundations",
    title: "Generative AI Fundamentals",
    category: "AI & Data",
    shortDescription: "Learn the foundations of modern Generative AI, Large Language Models, prompt architectures, and AI applications.",
    description: "A comprehensive deep dive into Generative AI systems. Explore transformer architectures, diffusion pipelines, prompt engineering, RAG (Retrieval-Augmented Generation), and how to build production-ready applications powered by frontier AI models.",
    level: "Beginner",
    duration: "8 Weeks",
    lessonsCount: 32,
    price: 49,
    originalPrice: 89,
    rating: 4.9,
    studentsCount: "1,420+",
    image: imagery.generativeIntelligence,
    featured: true,
    whatYouLearn: [
      "Core principles of Transformers, LLMs, and Multi-modal Models",
      "Building Retrieval-Augmented Generation (RAG) pipelines with vector databases",
      "Fine-tuning open weights models using LoRA and QLoRA",
      "Deploying scalable AI agent APIs with modern frameworks"
    ],
    curriculum: [
      { module: "Module 1: The Foundations of Generative Intelligence", lessons: ["Transformer Architectures Explained", "Attention Mechanisms in Depth", "Tokens, Context Windows & Embeddings"] },
      { module: "Module 2: Prompt Engineering & Tool Calling", lessons: ["Structured Outputs & JSON Schema", "Function Calling and Model Orchestration", "Security & Guardrails in LLM Workflows"] },
      { module: "Module 3: RAG & Knowledge Retrieval", lessons: ["Vector Databases & Similarity Search", "Document Chunking & Hybrid Search", "Evaluation & Hallucination Mitigation"] },
      { module: "Module 4: Production Deployment", lessons: ["Streaming Inference & Latency Optimization", "Docker Containerization for AI Systems", "Real-world Project: Enterprise AI Assistant"] }
    ]
  },
  {
    id: "autonomous-ai-agents",
    title: "Autonomous AI Agents & Multi-Agent Systems",
    category: "AI & Data",
    shortDescription: "Design, build, and orchestrate autonomous AI agents capable of planning, reflection, and executing complex workflows.",
    description: "Explore agentic intelligence from first principles. Learn how to architect single-agent planners, multi-agent collaborations, memory persistence, dynamic tool invocation, and reliable execution graphs.",
    level: "Intermediate",
    duration: "10 Weeks",
    lessonsCount: 40,
    price: 69,
    originalPrice: 119,
    rating: 5.0,
    studentsCount: "980+",
    image: imagery.agentCore,
    featured: true,
    whatYouLearn: [
      "Agentic loops: ReAct, Plan-and-Solve, and Reflexion patterns",
      "Multi-agent orchestration and hierarchical collaboration",
      "Short-term and long-term memory architectures",
      "Deploying asynchronous agent workers in production"
    ],
    curriculum: [
      { module: "Module 1: Agentic Reasoning Paradigms", lessons: ["Autonomous Loops & State Machines", "Planning & Tool Invocation", "Error Recovery and Self-Correction"] },
      { module: "Module 2: Memory & Context Management", lessons: ["Episodic vs Semantic Memory", "External Knowledge Graphs", "State Persistence across Sessions"] },
      { module: "Module 3: Multi-Agent Swarms", lessons: ["Hierarchical Supervisor Patterns", "Consensus Mechanisms between Agents", "Message Bus & Queue Coordination"] },
      { module: "Module 4: Capstone Agent Application", lessons: ["Full Autonomous Research & Coding Agent", "Benchmarking and Evaluation Metrics", "Safe Sandboxed Execution"] }
    ]
  },
  {
    id: "practical-machine-learning",
    title: "Practical Machine Learning & Deep Learning",
    category: "AI & Data",
    shortDescription: "Build, evaluate, and deploy production machine learning pipelines with Python, PyTorch, and Scikit-Learn.",
    description: "Move from foundational mathematics to industrial machine learning. Master supervised & unsupervised learning, deep neural networks, computer vision, natural language processing, and model lifecycle management.",
    level: "Intermediate",
    duration: "12 Weeks",
    lessonsCount: 48,
    price: 79,
    originalPrice: 139,
    rating: 4.8,
    studentsCount: "2,150+",
    image: imagery.machineLearning,
    whatYouLearn: [
      "Supervised, unsupervised, and reinforcement learning paradigms",
      "Convolutional and Recurrent Neural Networks in PyTorch",
      "Model training, cross-validation, and hyperparameter tuning",
      "MLOps best practices: tracking, packaging, and API serving"
    ],
    curriculum: [
      { module: "Module 1: Mathematical & Data Foundations", lessons: ["Linear Algebra & Calculus for ML", "Data Cleaning, Feature Engineering & Imputation", "Exploratory Data Analysis"] },
      { module: "Module 2: Classical Machine Learning", lessons: ["Ensemble Models (Random Forests, XGBoost)", "SVMs, Clustering, and PCA", "Model Evaluation & Loss Metrics"] },
      { module: "Module 3: Deep Learning with PyTorch", lessons: ["Building Custom Tensors & Autograd", "CNNs for Computer Vision", "Sequence Models & Attention"] },
      { module: "Module 4: MLOps & Production Serving", lessons: ["Model Versioning with MLflow", "FastAPI Serving & TorchServe", "Monitoring Model Drift in Production"] }
    ]
  },

  // ── Programming ────────────────────────────────────────────────────
  {
    id: "full-stack-modern-software",
    title: "Full Stack Software Engineering",
    category: "Programming",
    shortDescription: "End-to-end full stack architecture using TypeScript, React, Next.js, Node.js, and high-performance databases.",
    description: "Learn how modern technology companies build scalable, fault-tolerant web software. Covers TypeScript type systems, component design systems, server-side rendering, REST & GraphQL APIs, and cloud infrastructure.",
    level: "All Levels",
    duration: "12 Weeks",
    lessonsCount: 52,
    price: 59,
    originalPrice: 99,
    rating: 4.9,
    studentsCount: "3,400+",
    image: imagery.softwareStudio,
    featured: true,
    whatYouLearn: [
      "Advanced TypeScript: Generics, type inference, and strict safety",
      "React 19 architecture: Server Components, hooks, and state management",
      "Backend API development with Node.js, Express, and PostgreSQL",
      "CI/CD workflows, automated testing, and Docker containerization"
    ],
    curriculum: [
      { module: "Module 1: Modern TypeScript Fundamentals", lessons: ["Type Systems, Interfaces & Generics", "Type Narrowing & Utility Types", "Async Programming & Error Handling"] },
      { module: "Module 2: Modern React Architecture", lessons: ["Modern Component Design Patterns", "Client State vs Server State", "Custom Hooks & Performance Tuning"] },
      { module: "Module 3: Backend Systems & Databases", lessons: ["PostgreSQL Schema Design & Migrations", "REST & GraphQL API Endpoints", "Authentication & JWT Security"] },
      { module: "Module 4: Production Deployment", lessons: ["Dockerizing Full Stack Apps", "Automated Testing (Vitest, Playwright)", "Cloud Infrastructure & Edge Deployments"] }
    ]
  },
  {
    id: "python-fastapi-backend",
    title: "Python Backend & API Engineering",
    category: "Programming",
    shortDescription: "High-performance asynchronous backend engineering with Python, FastAPI, AsyncIO, and PostgreSQL.",
    description: "Master backend development with Python. Learn asynchronous concurrency with AsyncIO, create high-throughput REST APIs with FastAPI and Pydantic, integrate database connection pools, and design microservice architectures.",
    level: "Beginner",
    duration: "8 Weeks",
    lessonsCount: 30,
    price: 39,
    originalPrice: 69,
    rating: 4.8,
    studentsCount: "1,890+",
    image: imagery.digitalSolutions,
    whatYouLearn: [
      "Python 3.12 modern features, typing, and AsyncIO event loops",
      "FastAPI framework: routes, dependency injection, and validations",
      "Database access with SQLAlchemy 2.0 and Alembic migrations",
      "Microservices communication via message brokers and Redis"
    ],
    curriculum: [
      { module: "Module 1: Advanced Python & AsyncIO", lessons: ["Coroutines, Tasks, and Event Loops", "Typing & Data Structures", "Design Patterns in Python"] },
      { module: "Module 2: FastAPI Architecture", lessons: ["Request/Response Models with Pydantic", "Dependency Injection System", "OAuth2 & JWT Authentication"] },
      { module: "Module 3: Persistence & Caching", lessons: ["SQLAlchemy 2.0 Async Session", "Redis Caching Patterns", "Database Connection Pooling"] },
      { module: "Module 4: Microservices & Background Tasks", lessons: ["Celery & Redis Worker Queues", "WebSockets for Real-time Feeds", "Deploying with Gunicorn & Uvicorn"] }
    ]
  },

  // ── 3D & Immersive ─────────────────────────────────────────────────
  {
    id: "threejs-webgl-immersive",
    title: "Three.js & WebGL 3D Development",
    category: "3D & Immersive",
    shortDescription: "Build interactive 3D websites, WebGL shaders, spatial environments, and digital twins on the modern web.",
    description: "Master real-time 3D web graphics. Learn Three.js, React Three Fiber, custom GLSL vertex/fragment shaders, realistic lighting, physics simulations, model optimization, and post-processing visual effects.",
    level: "Intermediate",
    duration: "10 Weeks",
    lessonsCount: 36,
    price: 65,
    originalPrice: 110,
    rating: 5.0,
    studentsCount: "870+",
    image: imagery.immersive3d,
    featured: true,
    whatYouLearn: [
      "Three.js scene graph, cameras, renderers, and geometry mathematics",
      "React Three Fiber (R3F) and Drei ecosystem integration",
      "Writing custom GLSL shaders for glowing, volumetric effects",
      "Optimizing 3D models (glTF, Draco compression) for 60fps web performance"
    ],
    curriculum: [
      { module: "Module 1: Three.js Foundations", lessons: ["Scenes, Perspective Cameras & Render Loops", "Geometries, Materials & Mesh Creation", "Transformations and Math for 3D"] },
      { module: "Module 2: Lighting & Realistic Materials", lessons: ["PBR Materials & Environment Maps (HDR)", "Shadow Maps & Light Strategies", "Loading & Optimizing glTF Models"] },
      { module: "Module 3: Shaders with GLSL", lessons: ["Vertex Shaders: Deformations & Waves", "Fragment Shaders: Patterns & Noise", "Custom Post-processing Pipelines"] },
      { module: "Module 4: Interactive Web Experiences", lessons: ["Raycasting & Click/Scroll Interactions", "Camera Controls & Orbit Physics", "React Three Fiber Real-world Portfolio Project"] }
    ]
  },

  // ── Design & Digital ───────────────────────────────────────────────
  {
    id: "uiux-design-systems",
    title: "UI/UX & Modern Design Systems",
    category: "Design & Digital",
    shortDescription: "Design high-end technology interfaces, futuristic design systems, and seamless user experiences in Figma.",
    description: "Learn the craft of modern editorial and futuristic interface design. Master layout grids, typography hierarchy, tokenized design systems in Figma, micro-animations, prototyping, and developer handoff.",
    level: "Beginner",
    duration: "8 Weeks",
    lessonsCount: 28,
    price: 45,
    originalPrice: 75,
    rating: 4.9,
    studentsCount: "1,650+",
    image: imagery.designStudio,
    whatYouLearn: [
      "Design systems with Figma tokens, auto-layout, and variants",
      "High-contrast dark mode interfaces for technology brands",
      "User research, wireframing, and interactive prototyping",
      "Handoff specifications for engineering implementation"
    ],
    curriculum: [
      { module: "Module 1: Visual Design & Hierarchy", lessons: ["Typography Pairing & Scale Systems", "Harmonious Color Palettes & Dark Themes", "Grid Systems and Spatial Rhythms"] },
      { module: "Module 2: Figma Mastery", lessons: ["Auto Layout 5.0 Deep Dive", "Design Tokens & Variable Modes", "Component Libraries & Variant Sets"] },
      { module: "Module 3: Interaction & Motion", lessons: ["Micro-interactions & State Transitions", "Interactive Prototyping in Figma", "Motion Guidelines for Digital Products"] },
      { module: "Module 4: UX Research & Handoff", lessons: ["Usability Testing & Feedback Loops", "Design Specs for React Engineers", "Portfolio Presentation"] }
    ]
  },

  // ── Crypto & Blockchain ────────────────────────────────────────────
  {
    id: "blockchain-web3-engineering",
    title: "Blockchain & Web3 Fundamentals",
    category: "Crypto & Blockchain",
    shortDescription: "Understand the core technology behind distributed ledgers, smart contracts, cryptography, and digital assets.",
    description: "An educational, technology-first approach to blockchain systems. Study cryptographic primitives, consensus mechanisms, smart contract engineering, wallet security architectures, and decentralized applications without the hype.",
    level: "Beginner",
    duration: "8 Weeks",
    lessonsCount: 30,
    price: 49,
    originalPrice: 85,
    rating: 4.8,
    studentsCount: "1,120+",
    image: imagery.cryptoEducation,
    featured: true,
    whatYouLearn: [
      "Cryptographic hashing, public-key encryption, and Merkle trees",
      "Proof of Work vs Proof of Stake consensus algorithms",
      "Smart contract development fundamentals and EVM architecture",
      "Wallet security, key management, and decentralized app protocols"
    ],
    curriculum: [
      { module: "Module 1: Cryptographic Foundations", lessons: ["Hash Functions (SHA-256, Keccak)", "Public/Private Key Cryptography", "Digital Signatures & Identity"] },
      { module: "Module 2: Distributed Ledgers & Consensus", lessons: ["Blockchain Anatomy & Blocks", "Byzantine Fault Tolerance", "Proof of Stake Mechanics"] },
      { module: "Module 3: Smart Contracts & EVM", lessons: ["Ethereum Virtual Machine Basics", "Solidity Syntax & Execution Life Cycle", "Security Best Practices & Vulnerabilities"] },
      { module: "Module 4: Web3 Integration", lessons: ["Connecting Frontends to Wallets", "Decentralized Storage (IPFS)", "The Future of Distributed Computing"] }
    ]
  }
];

export const courseCategories = [
  "All",
  "AI & Data",
  "Programming",
  "3D & Immersive",
  "Design & Digital",
  "Crypto & Blockchain"
] as const;

export type CourseCategory = typeof courseCategories[number];
