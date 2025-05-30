import { bigint, boolean, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { tracks } from '~/features/track/schema';
import { profiles } from '~/features/user/schema';

export const playlists = pgTable('playlists', {
  playlist_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  description: text(),
  is_public: boolean().notNull().default(false),
  stats: jsonb().notNull().default({ views: 0, likes: 0 }),
  profile_id: uuid()
    .references(() => profiles.profile_id, { onDelete: 'cascade' })
    .notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const playlist_tracks = pgTable('playlist_tracks', {
  playlist_id: bigint({ mode: 'number' }).references(() => playlists.playlist_id),
  track_id: bigint({ mode: 'number' }).references(() => tracks.track_id),
  order: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const playlist_views = pgTable('playlist_views', {
  playlist_id: bigint({ mode: 'number' }).references(() => playlists.playlist_id),
  profile_id: uuid().references(() => profiles.profile_id),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const playback_histories = pgTable('playback_histories', {
  playlist_id: bigint({ mode: 'number' }).references(() => playlists.playlist_id),
  profile_id: uuid().references(() => profiles.profile_id),
  track_id: bigint({ mode: 'number' }).references(() => tracks.track_id),
  position: integer().notNull().default(0),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
