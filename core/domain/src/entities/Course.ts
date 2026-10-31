import { generateId } from '@mcn/utils';

export class Course {
  private constructor(
    public readonly id: string,
    public code: string,
    public name: string,
    public description: string | undefined,
    public instructorId: string,
    public semester: string,
    public year: number,
    public color: string,
    public credits: number,
    public schedule: any[],
    public enrolledStudents: string[],
    public readonly createdAt: Date,
    public updatedAt: Date
  ) {}

  static create(props: {
    code: string;
    name: string;
    description?: string;
    instructorId: string;
    semester: string;
    year: number;
    color?: string;
    credits?: number;
  }): Course {
    const now = new Date();
    return new Course(
      generateId('crs'),
      props.code,
      props.name,
      props.description,
      props.instructorId,
      props.semester,
      props.year,
      props.color || '#6366f1',
      props.credits || 3,
      [],
      [],
      now,
      now
    );
  }

  enrollStudent(studentId: string): void {
    if (!this.enrolledStudents.includes(studentId)) {
      this.enrolledStudents.push(studentId);
      this.updatedAt = new Date();
    }
  }

  unenrollStudent(studentId: string): void {
    this.enrolledStudents = this.enrolledStudents.filter(s => s !== studentId);
    this.updatedAt = new Date();
  }

  addSchedule(schedule: any): void {
    this.schedule.push(schedule);
    this.updatedAt = new Date();
  }
}
