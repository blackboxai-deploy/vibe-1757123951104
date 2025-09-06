import { User, Project, Room, Material, Design, MaterialCategory, ProjectMaterial, SavedMaterial, ProgressItem } from '@prisma/client';

// Extended types with relations
export type ProjectWithDetails = Project & {
  user: User;
  rooms: Room[];
  projectMaterials: (ProjectMaterial & {
    material: Material;
    room: Room | null;
  })[];
  designs: Design[];
  progressItems: ProgressItem[];
};

export type RoomWithDetails = Room & {
  project: Project;
  designs: Design[];
  projectMaterials: (ProjectMaterial & {
    material: Material;
  })[];
};

export type MaterialWithDetails = Material & {
  category: MaterialCategory;
  materialVariants: MaterialVariant[];
};

export type DesignWithDetails = Design & {
  user: User;
  project?: Project;
  room?: Room;
};

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

// 3D and AR types
export interface SceneConfig {
  camera: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
  objects: SceneObject[];
  lighting: LightConfig[];
  environment?: string;
}

export interface SceneObject {
  id: string;
  type: 'mesh' | 'material' | 'furniture';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  materialId?: number;
  properties: Record<string, any>;
}

export interface LightConfig {
  type: 'directional' | 'ambient' | 'point' | 'spot';
  position?: [number, number, number];
  intensity: number;
  color: string;
  castShadow?: boolean;
}

// Material types
export interface MaterialFilter {
  category?: string;
  priceRange?: [number, number];
  color?: string;
  brand?: string;
  rating?: number;
  availability?: boolean;
  search?: string;
}

export interface MaterialVariant {
  id: number;
  color?: string;
  finish?: string;
  size?: string;
  price?: number;
  imageUrl?: string;
  materialId: number;
}

// Project types
export interface CreateProjectRequest {
  name: string;
  description?: string;
  budget?: number;
  startDate?: Date;
  endDate?: Date;
}

export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {
  status?: string;
}

// Room types
export interface CreateRoomRequest {
  name: string;
  type: string;
  length?: number;
  width?: number;
  height?: number;
  description?: string;
  imageUrl?: string;
}

// AI types
export interface AIDesignRequest {
  roomType: string;
  style: string;
  budget: number;
  preferences: string[];
  roomDimensions?: {
    length: number;
    width: number;
    height: number;
  };
}

export interface AIDesignResponse {
  recommendations: {
    materials: Material[];
    layout: SceneConfig;
    colorPalette: string[];
    estimatedCost: number;
  };
  reasoning: string;
}

// UI types
export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
}

// Utility types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface SortParams {
  field: string;
  order: 'asc' | 'desc';
}