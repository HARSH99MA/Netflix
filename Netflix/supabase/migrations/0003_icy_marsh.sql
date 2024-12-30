/*
  # Watchlist Schema

  1. New Tables
    - `watchlist`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `movie_id` (uuid, references movies)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for user-specific CRUD operations
*/

CREATE TABLE IF NOT EXISTS watchlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  movie_id uuid REFERENCES movies NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, movie_id)
);

ALTER TABLE watchlist ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own watchlist
CREATE POLICY "Users can read own watchlist"
  ON watchlist
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow users to add to their watchlist
CREATE POLICY "Users can add to watchlist"
  ON watchlist
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to remove from their watchlist
CREATE POLICY "Users can remove from watchlist"
  ON watchlist
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);