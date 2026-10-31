import { BaseEntity } from './common';

export interface Note extends BaseEntity {
  userId: string;
  title: string;
  content: string;
  contentType: 'markdown' | 'richtext' | 'canvas';
  courseId?: string;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  linkedNotes: string[];
  attachments: string[];
  wordCount: number;
}

export interface Whiteboard extends BaseEntity {
  userId: string;
  title: string;
  elements: WhiteboardElement[];
  collaborators: string[];
  isPublic: boolean;
}

export interface WhiteboardElement {
  id: string;
  type: 'text' | 'shape' | 'image' | 'draw' | 'sticky';
  position: { x: number; y: number };
  data: any;
}
