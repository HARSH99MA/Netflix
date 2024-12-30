export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      movies: {
        Row: {
          id: string
          title: string
          description: string | null
          thumbnail_url: string
          video_url: string
          release_year: number
          category_id: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          thumbnail_url: string
          video_url: string
          release_year: number
          category_id: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          thumbnail_url?: string
          video_url?: string
          release_year?: number
          category_id?: string
          created_at?: string
        }
      }
      watchlist: {
        Row: {
          id: string
          user_id: string
          movie_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          movie_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          movie_id?: string
          created_at?: string
        }
      }
    }
  }
}