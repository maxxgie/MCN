import { UserRole } from '@mcn/types';
import { generateId } from '@mcn/utils';

export class User {
  private constructor(
    public readonly id: string,
    public email: string,
    public username: string,
    public firstName: string,
    public lastName: string,
    public role: UserRole,
    public settings: any,
    public isActive: boolean,
    public readonly createdAt: Date,
    public updatedAt: Date
  ) {}

  static create(props: {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    role?: UserRole;
  }): User {
    const now = new Date();
    return new User(
      generateId('usr'),
      props.email,
      props.username,
      props.firstName,
      props.lastName,
      props.role || UserRole.STUDENT,
      this.getDefaultSettings(),
      true,
      now,
      now
    );
  }

  static getDefaultSettings() {
    return {
      theme: 'system',
      language: 'en',
      timezone: 'UTC',
      notifications: {
        email: true,
        push: true,
        assignments: true,
        deadlines: true,
        messages: true
      },
      privacy: {
        profileVisibility: 'private',
        showOnlineStatus: true
      },
      aiPreferences: {
        defaultModel: 'gpt-4',
        temperature: 0.7,
        enableMemory: true,
        enableContextAwareness: true
      }
    };
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  updateProfile(firstName: string, lastName: string): void {
    this.firstName = firstName;
    this.lastName = lastName;
    this.updatedAt = new Date();
  }

  changeRole(role: UserRole): void {
    this.role = role;
    this.updatedAt = new Date();
  }

  deactivate(): void {
    this.isActive = false;
    this.updatedAt = new Date();
  }

  activate(): void {
    this.isActive = true;
    this.updatedAt = new Date();
  }
}
