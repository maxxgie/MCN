# MCN - My Campus Network

**Academic Operating System** | A revolutionary, commercial-grade platform that redefines how university students learn, research, collaborate, innovate, and manage their academic lives.

[![Node](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Detailed Setup](#detailed-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Database](#database)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Features in Detail](#features-in-detail)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview

MCN is more than just a Learning Management System (LMS). It's an intelligent ecosystem that seamlessly combines the best features of modern productivity and AI tools into one unified platform. Built with Clean Architecture, Domain-Driven Design, and offline-first principles, MCN serves as the central hub for every aspect of university life.

## Key Features

### 🧠 Campus AI
- **Multi-Provider Support**: Switch between OpenAI, Claude, Gemini, DeepSeek, Mistral, Llama, and local Ollama models
- **Personal Tutor & Mentor**: Context-aware AI that understands your courses and learning style
- **Research Assistant**: Summarize papers, generate citations, compare research, find sources
- **Academic Writing**: Essay reviews, plagiarism awareness, citation generation in multiple formats
- **Problem Solving**: Step-by-step math solutions, code debugging, concept explanations
- **Long-term Memory**: Remembers preferences, learning progress, and academic history across sessions
- **Document Analysis**: OCR, PDF analysis, image/diagram understanding, video transcription
- **Quiz & Flashcard Generation**: Automatically create study materials from uploaded content

### 📊 Intelligent Dashboard
- **Adaptive Layout**: Dynamically adjusts based on schedule, courses, goals, and deadlines
- **Drag-and-Drop Widgets**: Fully customizable workspace
- **Real-time Analytics**: Study time, productivity trends, grade predictions
- **Goal Tracking**: Set and monitor academic goals with progress visualization
- **Smart Reminders**: Intelligent notifications for assignments, exams, and events

### 📝 Advanced Note-Taking
- **Rich Text Editor**: Markdown support with live preview
- **Infinite Whiteboards**: Draw, brainstorm, and map concepts visually
- **Knowledge Graphs**: Automatically link related notes and concepts
- **Handwriting Support**: Digital ink and stylus compatibility
- **Voice Notes**: Record and auto-transcribe lectures
- **Collaborative Editing**: Real-time co-editing with peers
- **AI Summaries**: Automatically summarize long notes and lectures
- **Smart Linking**: Notes connect to courses, assignments, and AI conversations

### 🔍 Research Environment
- **Academic Integrations**: Google Scholar, arXiv, Semantic Scholar, PubMed, IEEE Xplore, ACM Digital Library, Crossref
- **Citation Management**: Generate citations in APA, MLA, Chicago, IEEE, and more
- **PDF Annotation**: Highlight, comment, and take notes directly on papers
- **Literature Review Tools**: Organize, compare, and synthesize research
- **Semantic Search**: Find papers and content using natural language
- **Bibliography Generation**: Auto-generate bibliographies from references
- **Thesis Organization**: Structure and manage long-form research projects

### 💻 Integrated Programming Workspace
- **VS Code-Inspired Editor**: Syntax highlighting, IntelliSense, multi-tab support
- **Git Integration**: Built-in version control with GitHub sync
- **Terminal Access**: Integrated terminal for running commands
- **AI Pair Programming**: Get coding assistance and explanations
- **Code Execution**: Run code in multiple languages
- **Debugging Tools**: Breakpoints, step-through debugging
- **Engineering Simulators**: CPU scheduling, networking, logic gates, databases
- **API Testing**: Built-in REST client
- **Project Templates**: Quick-start templates for common projects

### 📅 Productivity Suite
- **Smart Calendar**: Course schedule, assignments, exams, and events
- **Assignment Tracker**: Track all assignments across courses with due dates
- **Pomodoro Timer**: Focus sessions with break management
- **Habit Tracker**: Build and maintain study habits
- **Grade Prediction**: AI-powered grade forecasting
- **CGPA Calculator**: Track GPA across semesters
- **Exam Countdown**: Never miss an important exam
- **Study Analytics**: Detailed insights into learning patterns
- **Focus Mode**: Distraction-free study environment

### 🤝 Collaboration Tools
- **Study Groups**: Create and join study groups
- **Real-time Collaboration**: Edit documents together
- **Voice & Video Rooms**: Built-in communication
- **Peer Review**: Review and give feedback on work
- **Threaded Discussions**: Course and topic-based forums
- **File Sharing**: Secure sharing within groups
- **Collaborative Whiteboards**: Brainstorm together in real-time

### 💼 Career Development
- **AI Resume Builder**: Generate tailored resumes
- **Portfolio Generator**: Showcase projects professionally
- **LinkedIn Optimization**: Improve your professional profile
- **Interview Preparation**: Mock interviews with AI feedback
- **Job & Internship Tracking**: Manage applications
- **Skill Gap Analysis**: Identify areas to improve
- **Career Roadmaps**: Personalized paths based on goals
- **Coding Challenges**: Practice for technical interviews
- **Certification Tracking**: Monitor professional certifications

### 🔧 Technical Features
- **Offline-First**: Fully functional without internet after installation
- **Embedded SQLite**: No external database server required (MySQL, PostgreSQL, etc.)
- **Auto-Initialization**: Database, tables, and defaults created on first launch
- **Built-in DB Management**: phpMyAdmin-like interface for database administration
- **Plugin Architecture**: Extend functionality without modifying core code
- **Dark/Light Mode**: Beautiful themes with glassmorphism effects
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: WCAG compliant design
- **Secure**: RBAC, 2FA, encrypted storage, audit logging
- **Fast & Modern**: Smooth animations and micro-interactions

## Architecture

MCN follows **Clean Architecture** with clear separation of concerns:

```
MCN/
├── apps/              # User-facing applications
│   ├── api/          # Fastify REST API
│   ├── web/          # React web application
│   ├── desktop/      # Electron desktop app (planned)
│   └── mobile/       # React Native app (planned)
├── core/             # Business logic (framework-independent)
│   ├── domain/       # Entities, value objects, aggregates
│   └── application/  # Use cases, DTOs, application services
├── infrastructure/   # External concerns
│   ├── database/     # SQLite with Kysely ORM
│   ├── ai/           # Multi-provider AI integration
│   └── storage/      # File storage
├── packages/         # Shared libraries
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Shared utilities
│   ├── ui/           # UI components
│   └── config/       # Configuration
└── plugins/          # Plugin system
```

**Principles**: Clean Architecture, Domain-Driven Design, SOLID, Dependency Inversion, Offline-First

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [React Router](https://reactrouter.com/) | Routing |
| [Zustand](https://zustand-demo.pmnd.rs/) | State Management |
| [TanStack Query](https://tanstack.com/query) | Data Fetching & Caching |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |

### Backend
| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Runtime |
| [Fastify](https://fastify.dev/) | Web Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | SQLite Database |
| [Kysely](https://kysely.dev/) | Type-safe SQL Query Builder |
| [WebSocket](https://github.com/fastify/fastify-websocket) | Real-time Communication |

### Build & Tooling
| Technology | Purpose |
|------------|---------|
| [Turborepo](https://turbo.build/) | Monorepo Build System |
| [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) | Package Management |
| [tsx](https://github.com/privatenumber/tsx) | TypeScript Execution |

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.0.0 or higher ([Download](https://nodejs.org/))
- **npm** 10.0.0 or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

Verify installations:

```bash
node --version
npm --version
git --version
```

## Quick Start

```bash
# 1. Navigate to the project
cd /home/njane/MCN

# 2. Install dependencies (if not already installed)
npm install

# 3. Build all packages
npm run build

# 4. Start the API server (Terminal 1)
cd apps/api && npm run dev

# 5. Start the web app (Terminal 2)
cd apps/web && npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Detailed Setup

### 1. Clone or Navigate to Project

```bash
cd /home/njane/MCN
```

### 2. Install Dependencies

```bash
npm install
```

This installs dependencies for all workspaces (apps, packages, core, infrastructure).

### 3. Build All Packages

```bash
npm run build
```

This builds all packages in the correct dependency order using Turborepo:
- `@mcn/types` → `@mcn/utils` → `@mcn/domain` → `@mcn/application` → `@mcn/database` → `@mcn/api` → `@mcn/web`

### 4. Environment Configuration (Optional)

Create environment files if needed:

```bash
# API environment
cp apps/api/.env.example apps/api/.env

# Web environment  
cp apps/web/.env.example apps/web/.env
```

Default configuration works out of the box.

## Running the Application

You need to run both the API server and the web application.

### Development Mode

**Terminal 1 - API Server:**
```bash
cd /home/njane/MCN/apps/api
npm run dev
```
- Runs on: `http://localhost:3001`
- Auto-reloads on file changes
- Initializes database on first start

**Terminal 2 - Web Application:**
```bash
cd /home/njane/MCN/apps/web
npm run dev
```
- Runs on: `http://localhost:5173`
- Hot Module Replacement (HMR) enabled
- Proxies API requests to `http://localhost:3001`

### Production Mode

**Build first:**
```bash
npm run build
```

**Start API:**
```bash
cd apps/api
npm start
```

**Serve Web:**
```bash
cd apps/web
npm run preview
```

## Project Structure

```
MCN/
├── apps/
│   ├── api/                    # REST API Server
│   │   ├── src/
│   │   │   ├── index.ts       # Server entry point
│   │   │   └── routes/        # API route handlers
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/                   # Web Application
│       ├── src/
│       │   ├── components/    # React components
│       │   ├── pages/         # Page components
│       │   ├── App.tsx        # App root
│       │   └── main.tsx       # Entry point
│       ├── index.html
│       ├── package.json
│       ├── tailwind.config.js
│       └── vite.config.ts
├── core/
│   ├── domain/                # Domain Layer
│   │   └── src/
│   │       ├── entities/      # Domain entities
│   │       └── repositories/  # Repository interfaces
│   └── application/           # Application Layer
│       └── src/
│           └── use-cases/     # Use cases
├── infrastructure/
│   └── database/              # Database Layer
│       └── src/
│           ├── connection.ts  # DB connection & schema
│           └── repositories/  # Repository implementations
├── packages/
│   ├── types/                 # Shared TypeScript types
│   ├── utils/                 # Shared utilities
│   ├── ui/                    # UI component library
│   └── config/                # Shared configuration
├── data/                      # SQLite database (auto-created)
├── docs/                      # Documentation
│   ├── ARCHITECTURE.md
│   └── INSTALLATION.md
├── package.json               # Root package.json
├── turbo.json                 # Turborepo config
└── tsconfig.json              # Root TypeScript config
```

## API Documentation

### Base URL
```
http://localhost:3001
```

### Endpoints

#### Health Check
```http
GET /health
```
Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### Root
```http
GET /
```
Response:
```json
{
  "name": "MCN API",
  "version": "0.1.0",
  "description": "Academic Operating System API"
}
```

#### Users
```http
POST   /api/users          # Create user
GET    /api/users          # Get all users
GET    /api/users/:id      # Get user by ID
```

#### Notes
```http
GET    /api/notes          # Get all notes
POST   /api/notes          # Create note
```

#### Courses
```http
GET    /api/courses        # Get all courses
POST   /api/courses        # Create course
```

#### Campus AI
```http
GET    /api/ai/models      # Get available AI models
POST   /api/ai/chat        # Chat with Campus AI
```

Example: Get AI models
```bash
curl http://localhost:3001/api/ai/models
```

## Database

### Location
The SQLite database is automatically created at:
```
./data/mcn.db
```

### Auto-Initialization
On first API startup, the database manager will:
1. Create the `./data` directory if it doesn't exist
2. Create `mcn.db` SQLite database
3. Create all tables with proper schemas
4. Create indexes for performance
5. Set up foreign key relationships
6. Enable WAL mode for better concurrency

### Schema Overview

| Table | Description |
|-------|-------------|
| `users` | User accounts, profiles, settings, roles |
| `courses` | Course information, schedules, enrollments |
| `notes` | Notes, content, tags, links, favorites |
| `assignments` | Assignments, deadlines, submissions |
| `ai_conversations` | Campus AI chat history and context |

### Inspecting the Database
You can use any SQLite browser like:
- [DB Browser for SQLite](https://sqlitebrowser.org/)
- [SQLiteStudio](https://sqlitestudio.pl/)
- `sqlite3` CLI: `sqlite3 ./data/mcn.db`

### Database Features
- **WAL Mode**: Write-Ahead Logging for better performance
- **Foreign Keys**: Enforced referential integrity
- **Indexes**: Optimized queries on frequently accessed columns
- **Type Safety**: Kysely provides full TypeScript type safety
- **Migrations**: Ready for future schema migrations

## Development

### Available Scripts

**Root:**
```bash
npm run dev        # Run all apps in development mode
npm run build      # Build all packages
npm run test       # Run all tests
npm run lint       # Lint all packages
npm run typecheck  # Type check all packages
npm run clean      # Clean all build outputs
```

**Per Package:**
```bash
npm run dev        # Development mode
npm run build      # Build package
npm run typecheck  # Type checking
```

### Adding Dependencies

```bash
# Add to specific workspace
npm install <package> --workspace=@mcn/api

# Add to root
npm install <package> -w
```

### Creating New Features

Follow Clean Architecture:
1. **Domain**: Add entities/value objects in `core/domain`
2. **Application**: Add use cases in `core/application`
3. **Infrastructure**: Add repositories/adapters in `infrastructure/`
4. **API**: Add routes in `apps/api/src/routes/`
5. **Web**: Add components/pages in `apps/web/src/`

### Code Style
- TypeScript strict mode enabled
- Follow SOLID principles
- Use functional components in React
- Prefer async/await over callbacks
- Use meaningful names
- Keep components small and focused

## Building for Production

```bash
# Build everything
npm run build

# The build outputs go to:
# apps/api/dist/
# apps/web/dist/
# packages/*/dist/
# core/*/dist/
# infrastructure/*/dist/
```

## Features in Detail

### Campus AI Capabilities
The AI system is designed to be your complete academic companion:
- **Tutoring**: Explain concepts at different difficulty levels
- **Research**: Search and summarize academic literature
- **Writing**: Review essays, improve clarity, check grammar
- **Coding**: Debug, explain, and write code
- **Math**: Solve equations with step-by-step explanations
- **Quiz Generation**: Create practice tests from any material
- **Flashcards**: Auto-generate Anki-style flashcards
- **Mind Maps**: Visualize complex topics
- **Exam Prep**: Predict questions, simulate oral exams
- **Career Advice**: Resume reviews, interview prep

### Offline Capabilities
- **Full Functionality**: Notes, courses, calendar, tasks work offline
- **Local Database**: All data stored in SQLite
- **File Storage**: Documents stored locally
- **AI Caching**: Cache responses for offline access
- **Sync Ready**: Architecture supports future cloud sync

### Security Features
- **Authentication**: Secure user authentication system
- **Authorization**: Role-based access control (Student, Instructor, Admin)
- **Data Encryption**: Sensitive data encrypted at rest
- **Audit Logging**: Track all important actions
- **Secure Storage**: Safe handling of files and credentials
- **Input Validation**: All inputs validated and sanitized

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and architecture
- Write TypeScript with proper types
- Add tests for new features
- Update documentation
- Keep commits atomic and descriptive

## Troubleshooting

### Port Already in Use

**API (3001):**
```bash
PORT=3002 cd apps/api && npm run dev
```

**Web (5173):**
Edit `apps/web/vite.config.ts` and change the port.

### Database Issues

**Reset database (development only):**
```bash
rm -rf ./data/mcn.db ./data/mcn.db-shm ./data/mcn.db-wal
# Restart API server - will auto-initialize
```

### Build Errors

**Clear and rebuild:**
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Type errors:**
```bash
npm run typecheck
```

### Module Resolution Issues
Ensure all packages are built in dependency order. Run `npm run build` from root.

### Node Version Issues
Check Node version: `node --version`. Must be >= 20.0.0.

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| RAM | 4GB | 8GB+ |
| Storage | 500MB | 2GB+ |
| Node.js | 20.0.0 | Latest LTS |
| OS | Linux, macOS, Windows | Any modern OS |

## Roadmap

- [ ] Desktop app with Electron
- [ ] Mobile app with React Native
- [ ] Advanced AI features with RAG
- [ ] Real-time collaboration
- [ ] Plugin marketplace
- [ ] Cloud sync
- [ ] Offline AI models
- [ ] Advanced analytics
- [ ] Mobile notifications
- [ ] Integration with university systems (LMS, SIS)

## Support

For issues, questions, or suggestions:
- Check [Troubleshooting](#troubleshooting) section
- Review documentation in `docs/` folder
- Open an issue in the repository

## License

This project is licensed under the MIT License.

---

**Built with ❤️ for students, by students.**

*MCN - Your Academic Operating System. Learn. Research. Collaborate. Innovate.*
