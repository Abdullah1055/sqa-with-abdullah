export type CourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type CourseStatus =
  | "Draft"
  | "Published"
  | "Archived";

export interface Course {
  id: string;
  slug: string;

  title: string;
  subtitle?: string;

  description: string;

  thumbnail?: string;

  level: CourseLevel;

  status: CourseStatus;

  featured: boolean;

  duration: number;

  totalModules: number;

  totalLessons: number;

  createdAt: string;

  updatedAt: string;
}