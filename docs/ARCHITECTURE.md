# MCN Architecture

## Overview
MCN (My Campus Network) is a commercial-grade Academic Operating System built using Clean Architecture, Domain-Driven Design, and modern software engineering principles.

## Architectural Principles
- **Clean Architecture**: Separation of concerns with clear boundaries
- **Domain-Driven Design**: Business logic in the domain layer
- **SOLID Principles**: Maintainable and extensible code
- **Dependency Inversion**: Dependencies point inward
- **Offline-First**: Embedded SQLite, works without network
- **Plugin Architecture**: Extensible without core modifications

## Layer Structure

### Domain Layer (`core/domain`)
- **Entities**: Core business objects (User, Course, Note, Assignment)
- **Value Objects**: Immutable objects (Email, DateRange)
- **Aggregates**: Consistency boundaries
- **Domain Events**: Business events
- **Repository Interfaces**: Data access contracts

### Application Layer (`core/application`)
- **Use Cases**: Application-specific business rules
- **DTOs**: Data transfer objects
- **Services**: Application services
- **Interfaces**: Ports for infrastructure

### Infrastructure Layer (`infrastructure/`)
- **Database**: SQLite with Kysely ORM
- **AI**: Multi-provider AI integration
- **Storage**: File system storage
- **External APIs**: Third-party integrations

### Presentation Layer (`apps/`)
- **Web**: React + TypeScript + Vite
- **API**: Fastify REST API
- **Desktop**: Electron (planned)
- **Mobile**: React Native (planned)

## Technology Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Routing**: React Router
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Fastify
- **Database**: SQLite (better-sqlite3)
- **ORM**: Kysely
- **Validation**: Zod
- **WebSocket**: @fastify/websocket

### Build & DevOps
- **Monorepo**: Turborepo
- **Package Manager**: npm workspaces
- **TypeScript**: Strict mode
- **Linting**: ESLint
- **Testing**: Vitest, Playwright

## Database Schema
Embedded SQLite database stored in `./data/mcn.db`. Auto-initializes on first launch with all tables, indexes, and relationships.

### Core Tables
- `users` - User accounts and settings
- `courses` - Course information
- `notes` - Notes and knowledge base
- `assignments` - Assignments and deadlines
- `ai_conversations` - Campus AI chat history
- `whiteboards` - Collaborative whiteboards
- `projects` - Coding projects
- `files` - File storage metadata

## AI Architecture (Campus AI)
Multi-provider architecture supporting:
- OpenAI (GPT models)
- Anthropic (Claude)
- Google (Gemini)
- DeepSeek
- Mistral
- Meta (Llama)
- Ollama (local models)

Features:
- Context-aware conversations
- Long-term memory
- Document analysis
- RAG (Retrieval Augmented Generation)
- Semantic search with vector embeddings
- Streaming responses

## Security
- Role-based access control (RBAC)
- Two-factor authentication (2FA)
- Encrypted storage
- Secure file handling
- Audit logging
- Input validation
- CSRF protection
- XSS prevention

## Plugin System
Plugins can extend:
- AI models and providers
- University integrations
- Cloud storage providers
- Engineering simulations
- Language packs
- Custom learning tools

Plugins are loaded dynamically without modifying core code.

## Offline Capabilities
- All core features work offline
- SQLite embedded database
- Local file storage
- Cached AI responses
- Service worker for PWA
- Sync when online

## Scalability
- Modular architecture
- Lazy loading
- Caching strategies
- Background processing
- Horizontal scaling ready
- Microservices migration path
