import { sql } from 'drizzle-orm';
import { bigint, jsonb, pgPolicy, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { profiles } from '~/features/user/schema';

export const categories = pgTable(
  'categories',
  {
    category_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    title: text().notNull(),
    description: text().notNull(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('categories-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);

export const tags = pgTable(
  'tags',
  {
    tag_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    name: text().notNull().unique(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('tags-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);

export const tracks = pgTable(
  'tracks',
  {
    track_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    title: text().notNull(),
    content: text().notNull(),
    audio_url: text().notNull(),
    stats: jsonb().notNull().default({ views: 0, likes: 0 }),
    profile_id: uuid()
      .references(() => profiles.profile_id, { onDelete: 'cascade' })
      .notNull(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('tracks-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);

export const track_categories = pgTable(
  'track_categories',
  {
    track_category_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    track_id: bigint({ mode: 'number' }).references(() => tracks.track_id, { onDelete: 'cascade' }),
    category_id: bigint({ mode: 'number' }).references(() => categories.category_id, { onDelete: 'cascade' }),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('track_categories-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);

export const track_tags = pgTable(
  'track_tags',
  {
    track_tag_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    track_id: bigint({ mode: 'number' }).references(() => tracks.track_id, { onDelete: 'cascade' }),
    tag_id: bigint({ mode: 'number' }).references(() => tags.tag_id, { onDelete: 'cascade' }),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('track_tags-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);
