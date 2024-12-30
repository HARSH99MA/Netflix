/*
  # Movies and Categories Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `created_at` (timestamp)
    
    - `movies`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `thumbnail_url` (text)
      - `video_url` (text)
      - `release_year` (integer)
      - `category_id` (uuid, references categories)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add read-only policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS movies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  thumbnail_url text NOT NULL,
  video_url text NOT NULL,
  release_year integer NOT NULL,
  category_id uuid REFERENCES categories NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE movies ENABLE ROW LEVEL SECURITY;

-- Allow all authenticated users to read categories
CREATE POLICY "Authenticated users can read categories"
  ON categories
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow all authenticated users to read movies
CREATE POLICY "Authenticated users can read movies"
  ON movies
  FOR SELECT
  TO authenticated
  USING (true);