import { boolean, integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { tracks } from '~/features/track/schema';
import { users } from '~/features/user/schema';

export const playlists = pgTable('playlists', {
  playlist_id: uuid().primaryKey(),
  title: text().notNull(),
  description: text(),
  is_public: boolean().notNull().default(false),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});

export const playlist_tracks = pgTable('playlist_tracks', {
  playlist_id: uuid().references(() => playlists.playlist_id),
  track_id: uuid().references(() => tracks.track_id),
  order: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});

export const playlist_views = pgTable('playlist_views', {
  playlist_id: uuid().references(() => playlists.playlist_id),
  user_id: uuid().references(() => users.id),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});

export const playback_histories = pgTable('playback_histories', {
  playlist_id: uuid().references(() => playlists.playlist_id),
  user_id: uuid().references(() => users.id),
  track_id: uuid().references(() => tracks.track_id),
  position: integer().notNull().default(0),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});
