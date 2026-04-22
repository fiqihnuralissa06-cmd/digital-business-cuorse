export type CourseLevel = 'Pemula' | 'Menengah' | 'Lanjutan';
export type CourseCategory = 'Digital Marketing' | 'Influencer' | 'Streamer' | 'Business Analyst' | 'Data Scientist' | 'Startup' | 'Remote Work';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  price: number;
  isFree: boolean;
  level: CourseLevel;
  duration: string;
  thumbnail: string;
  instructor: string;
}
