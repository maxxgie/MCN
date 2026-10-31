import { BaseEntity } from './common';

export interface AIConversation extends BaseEntity {
  userId: string;
  title: string;
  messages: AIMessage[];
  model: string;
  provider: AIProvider;
  context: ConversationContext;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  attachments?: string[];
  metadata?: MessageMetadata;
}

export interface MessageMetadata {
  tokens?: number;
  model?: string;
  reasoning?: string;
  sources?: Source[];
}

export interface Source {
  title: string;
  url?: string;
  snippet: string;
}

export type AIProvider = 'openai' | 'claude' | 'gemini' | 'deepseek' | 'mistral' | 'llama' | 'ollama';

export interface AIModel {
  id: string;
  name: string;
  provider: AIProvider;
  contextWindow: number;
  supportsVision: boolean;
  supportsFunctionCalling: boolean;
  pricing?: ModelPricing;
}

export interface ModelPricing {
  input: number;
  output: number;
}

export interface ConversationContext {
  courses: string[];
  notes: string[];
  documents: string[];
  recentActivity: string[];
}
