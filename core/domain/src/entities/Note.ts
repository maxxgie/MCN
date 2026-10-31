import { generateId } from '@mcn/utils';

export class Note {
  private constructor(
    public readonly id: string,
    public userId: string,
    public title: string,
    public content: string,
    public contentType: 'markdown' | 'richtext' | 'canvas',
    public courseId: string | undefined,
    public tags: string[],
    public isFavorite: boolean,
    public isPinned: boolean,
    public linkedNotes: string[],
    public readonly createdAt: Date,
    public updatedAt: Date
  ) {}

  static create(props: {
    userId: string;
    title: string;
    content?: string;
    contentType?: 'markdown' | 'richtext' | 'canvas';
    courseId?: string;
    tags?: string[];
  }): Note {
    const now = new Date();
    return new Note(
      generateId('note'),
      props.userId,
      props.title,
      props.content || '',
      props.contentType || 'markdown',
      props.courseId,
      props.tags || [],
      false,
      false,
      [],
      now,
      now
    );
  }

  updateContent(content: string): void {
    this.content = content;
    this.updatedAt = new Date();
  }

  updateTitle(title: string): void {
    this.title = title;
    this.updatedAt = new Date();
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.updatedAt = new Date();
  }

  togglePin(): void {
    this.isPinned = !this.isPinned;
    this.updatedAt = new Date();
  }

  addTag(tag: string): void {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag);
      this.updatedAt = new Date();
    }
  }

  removeTag(tag: string): void {
    this.tags = this.tags.filter(t => t !== tag);
    this.updatedAt = new Date();
  }

  linkNote(noteId: string): void {
    if (!this.linkedNotes.includes(noteId)) {
      this.linkedNotes.push(noteId);
      this.updatedAt = new Date();
    }
  }

  getWordCount(): number {
    return this.content.trim().split(/\s+/).filter(w => w.length > 0).length;
  }
}
