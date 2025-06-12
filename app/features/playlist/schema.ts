import { bigint, boolean, integer, jsonb, pgPolicy, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { tracks } from '~/features/track/schema';
import { profiles } from '~/features/users/schema';
import { authenticatedRole, authUid } from 'drizzle-orm/supabase';

export const playlists = pgTable(
  'playlists',
  {
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
  },
  table => [
    pgPolicy('playlists-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);

export const playlist_tracks = pgTable(
  'playlist_tracks',
  {
    playlist_track_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    playlist_id: bigint({ mode: 'number' })
      .notNull()
      .references(() => playlists.playlist_id),
    track_id: bigint({ mode: 'number' })
      .notNull()
      .references(() => tracks.track_id),
    order: integer().notNull(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('playlist_tracks-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);

export const playlist_views = pgTable(
  'playlist_views',
  {
    playlist_view_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    playlist_id: bigint({ mode: 'number' }).references(() => playlists.playlist_id),
    profile_id: uuid().references(() => profiles.profile_id),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('playlist_views-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);

export const playback_histories = pgTable(
  'playback_histories',
  {
    playback_history_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    playlist_id: bigint({ mode: 'number' }).references(() => playlists.playlist_id),
    profile_id: uuid().references(() => profiles.profile_id),
    track_id: bigint({ mode: 'number' }).references(() => tracks.track_id),
    position: integer().notNull().default(0),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('playback_histories-select-policy', {
      as: 'permissive',
      for: 'select',
      to: authenticatedRole,
      using: sql`${authUid} = ${table.profile_id}`,
    }),
  ],
);
