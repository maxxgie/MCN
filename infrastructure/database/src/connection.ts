import Database from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';
import path from 'path';
import fs from 'fs';

export interface DatabaseSchema {
  users: {
    id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    avatar: string | null;
    role: string;
    institution: string | null;
    major: string | null;
    year: number | null;
    settings: string;
    is_active: number;
    last_active_at: number | null;
    created_at: number;
    updated_at: number;
  };
  courses: {
    id: string;
    code: string;
    name: string;
    description: string | null;
    instructor_id: string;
    semester: string;
    year: number;
    color: string;
    credits: number;
    schedule: string;
    enrolled_students: string;
    created_at: number;
    updated_at: number;
  };
  notes: {
    id: string;
    user_id: string;
    title: string;
    content: string;
    content_type: string;
    course_id: string | null;
    tags: string;
    is_favorite: number;
    is_pinned: number;
    linked_notes: string;
    attachments: string;
    word_count: number;
    created_at: number;
    updated_at: number;
  };
  assignments: {
    id: string;
    course_id: string;
    title: string;
    description: string;
    due_date: number;
    points: number;
    status: string;
    submission_type: string;
    attachments: string;
    created_at: number;
    updated_at: number;
  };
  ai_conversations: {
    id: string;
    user_id: string;
    title: string;
    messages: string;
    model: string;
    provider: string;
    context: string;
    created_at: number;
    updated_at: number;
  };
}

export class DatabaseManager {
  private static instance: DatabaseManager;
  private db: Kysely<DatabaseSchema>;
  private sqlite: Database.Database;

  private constructor(dataDir: string = './data') {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const dbPath = path.join(dataDir, 'mcn.db');
    this.sqlite = new Database(dbPath);
    this.sqlite.pragma('journal_mode = WAL');
    this.sqlite.pragma('foreign_keys = ON');

    this.db = new Kysely<DatabaseSchema>({
      dialect: new SqliteDialect({
        database: this.sqlite,
      }),
    });
  }

  static getInstance(dataDir?: string): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager(dataDir);
    }
    return DatabaseManager.instance;
  }

  getDb(): Kysely<DatabaseSchema> {
    return this.db;
  }

  close(): void {
    this.sqlite.close();
  }

  async initialize(): Promise<void> {
    await this.createTables();
  }

  private async createTables(): Promise<void> {
    // Users table
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        username TEXT UNIQUE NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        avatar TEXT,
        role TEXT NOT NULL DEFAULT 'student',
        institution TEXT,
        major TEXT,
        year INTEGER,
        settings TEXT NOT NULL,
        is_active INTEGER NOT NULL DEFAULT 1,
        last_active_at INTEGER,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )
    `);

    // Courses table
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS courses (
        id TEXT PRIMARY KEY,
        code TEXT NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        instructor_id TEXT NOT NULL,
        semester TEXT NOT NULL,
        year INTEGER NOT NULL,
        color TEXT NOT NULL,
        credits INTEGER NOT NULL DEFAULT 3,
        schedule TEXT NOT NULL,
        enrolled_students TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        FOREIGN KEY (instructor_id) REFERENCES users(id)
      )
    `);

    // Notes table
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS notes (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        content_type TEXT NOT NULL DEFAULT 'markdown',
        course_id TEXT,
        tags TEXT NOT NULL,
        is_favorite INTEGER NOT NULL DEFAULT 0,
        is_pinned INTEGER NOT NULL DEFAULT 0,
        linked_notes TEXT NOT NULL,
        attachments TEXT NOT NULL,
        word_count INTEGER NOT NULL DEFAULT 0,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (course_id) REFERENCES courses(id)
      )
    `);

    // Assignments table
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS assignments (
        id TEXT PRIMARY KEY,
        course_id TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        due_date INTEGER NOT NULL,
        points INTEGER NOT NULL,
        status TEXT NOT NULL,
        submission_type TEXT NOT NULL,
        attachments TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        FOREIGN KEY (course_id) REFERENCES courses(id)
      )
    `);

    // AI Conversations table
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS ai_conversations (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        title TEXT NOT NULL,
        messages TEXT NOT NULL,
        model TEXT NOT NULL,
        provider TEXT NOT NULL,
        context TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    // Create indexes
    this.sqlite.exec(`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`);
    this.sqlite.exec(`CREATE INDEX IF NOT EXISTS idx_users_username ON users(username)`);
    this.sqlite.exec(`CREATE INDEX IF NOT EXISTS idx_notes_user_id ON notes(user_id)`);
    this.sqlite.exec(`CREATE INDEX IF NOT EXISTS idx_notes_course_id ON notes(course_id)`);
    this.sqlite.exec(`CREATE INDEX IF NOT EXISTS idx_assignments_course_id ON assignments(course_id)`);
    this.sqlite.exec(`CREATE INDEX IF NOT EXISTS idx_assignments_due_date ON assignments(due_date)`);
    this.sqlite.exec(`CREATE INDEX IF NOT EXISTS idx_ai_conversations_user_id ON ai_conversations(user_id)`);
  }
}
