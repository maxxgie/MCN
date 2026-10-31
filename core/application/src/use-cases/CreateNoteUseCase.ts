import { Note } from '@mcn/domain';

export interface CreateNoteDTO {
  userId: string;
  title: string;
  content?: string;
  contentType?: 'markdown' | 'richtext' | 'canvas';
  courseId?: string;
  tags?: string[];
}

export interface INoteRepository {
  save(note: Note): Promise<void>;
  findById(id: string): Promise<Note | null>;
  findByUserId(userId: string): Promise<Note[]>;
}

export class CreateNoteUseCase {
  constructor(private noteRepository: INoteRepository) {}

  async execute(dto: CreateNoteDTO): Promise<Note> {
    const note = Note.create({
      userId: dto.userId,
      title: dto.title,
      content: dto.content,
      contentType: dto.contentType,
      courseId: dto.courseId,
      tags: dto.tags
    });

    await this.noteRepository.save(note);
    return note;
  }
}
