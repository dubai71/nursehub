// ==========================================
// NURSEHUB® - TYPE DEFINITIONS
// ==========================================

// User & Profile
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  banner?: string;
  bio?: string;
  city?: string;
  state?: string;
  specialty?: string;
  area?: string;
  company?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  xp: number;
  level: number;
  badges: Badge[];
  createdAt: Date;
  updatedAt: Date;
}

// Community
export interface Community {
  id: string;
  name: string;
  slug: string;
  description: string;
  banner?: string;
  avatar?: string;
  adminId: string;
  moderators: string[];
  memberCount: number;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Course & Academy
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  instructorId: string;
  instructor: User;
  modules: Module[];
  category: string;
  tags: string[];
  duration: number;
  progress?: number;
  enrolledCount: number;
  rating: number;
  price: number;
  isFree: boolean;
  certificateTemplate?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  order: number;
  lessons: Lesson[];
  duration: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  videoUrl?: string;
  duration: number;
  isCompleted: boolean;
  hasDownload: boolean;
}

// Feed & Posts
export interface Post {
  id: string;
  authorId: string;
  author: User;
  communityId?: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'poll' | 'pdf' | 'code' | 'ai';
  media?: string[];
  pollOptions?: PollOption[];
  likes: number;
  comments: number;
  isLiked: boolean;
  isSaved: boolean;
  createdAt: Date;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  author: User;
  content: string;
  likes: number;
  createdAt: Date;
}

// Gamification
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  xp: number;
  progress: number;
  target: number;
  isCompleted: boolean;
  expiresAt?: Date;
}

export interface Level {
  level: number;
  name: string;
  minXP: number;
  maxXP: number;
}

export const LEVELS: Level[] = [
  { level: 1, name: 'Operador', minXP: 0, maxXP: 500 },
  { level: 2, name: 'Criador', minXP: 500, maxXP: 1500 },
  { level: 3, name: 'Automatizador', minXP: 1500, maxXP: 3500 },
  { level: 4, name: 'Especialista', minXP: 3500, maxXP: 7000 },
  { level: 5, name: 'Arquiteto', minXP: 7000, maxXP: 12000 },
  { level: 6, name: 'Visionário', minXP: 12000, maxXP: Infinity },
];

// Map & Networking
export interface MapMarker {
  id: string;
  userId: string;
  user: User;
  lat: number;
  lng: number;
  city: string;
  state: string;
  country: string;
  specialty: string;
  area: string;
  isOpenToNetworking: boolean;
}

// News
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  imageUrl?: string;
  publishedAt: Date;
  relevanceScore: number;
  categories: string[];
}

// NurseLab
export interface ContentTemplate {
  id: string;
  name: string;
  category: string;
  content: string;
  tags: string[];
  usageCount: number;
}

// Categories
export const SPECIALTIES = [
  'Urgência', 'UTI', 'APH', 'SAMU', 'Centro Cirúrgico', 'CME',
  'Neonatal', 'Obstetrícia', 'Saúde Mental', 'Home Care',
  'Gestão', 'Tecnologia', 'IA', 'Saúde Digital',
  'Empreendedorismo', 'Creator', 'Marketing', 'Automação',
  'Produtividade', 'Concursos', 'Residência', 'Casos Clínicos',
  'Protocolos', 'Eventos', 'Networking',
] as const;

export type Specialty = typeof SPECIALTIES[number];