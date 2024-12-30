export interface Profile {
  id: string;
  user_id: string;
  name: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string | null;
  thumbnail_url: string;
  video_url: string;
  release_year: number;
  category_id: string;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  created_at: string;
}