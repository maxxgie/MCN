import { BaseEntity } from './common';

export interface User extends BaseEntity {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  institution?: string;
  major?: string;
  year?: number;
  settings: UserSettings;
  isActive: boolean;
  lastActiveAt?: Date;
}

export enum UserRole {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
  GUEST = 'guest'
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  aiPreferences: AIPreferences;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  assignments: boolean;
  deadlines: boolean;
  messages: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends';
  showOnlineStatus: boolean;
}

export interface AIPreferences {
  defaultModel: string;
  temperature: number;
  enableMemory: boolean;
  enableContextAwareness: boolean;
}
