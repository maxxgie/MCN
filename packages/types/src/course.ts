import { BaseEntity } from './common';

export interface Course extends BaseEntity {
  code: string;
  name: string;
  description?: string;
  instructorId: string;
  semester: string;
  year: number;
  color: string;
  credits: number;
  schedule: CourseSchedule[];
  enrolledStudents: string[];
}

export interface CourseSchedule {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  location?: string;
  type: 'lecture' | 'lab' | 'tutorial' | 'seminar';
}

export interface Assignment extends BaseEntity {
  courseId: string;
  title: string;
  description: string;
  dueDate: Date;
  points: number;
  status: AssignmentStatus;
  submissionType: 'file' | 'text' | 'link' | 'quiz';
  attachments: string[];
}

export enum AssignmentStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  SUBMITTED = 'submitted',
  GRADED = 'graded',
  LATE = 'late'
}
