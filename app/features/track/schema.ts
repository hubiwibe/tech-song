import { jsonb, pgTable, primaryKey, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { profiles } from '~/features/user/schema';

export const categories = pgTable('categories', {
  category_id: uuid().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const tags = pgTable('tags', {
  tag_id: uuid().primaryKey(),
  name: text().notNull().unique(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const tracks = pgTable('tracks', {
  track_id: uuid().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  stats: jsonb().notNull().default({ views: 0, likes: 0 }),
  profile_id: uuid()
    .references(() => profiles.profile_id, { onDelete: 'cascade' })
    .notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const track_categories = pgTable(
  'track_categories',
  {
    track_id: uuid().references(() => tracks.track_id, { onDelete: 'cascade' }),
    category_id: uuid().references(() => categories.category_id, { onDelete: 'cascade' }),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [primaryKey({ columns: [table.track_id, table.category_id] })],
);

export const track_tags = pgTable(
  'track_tags',
  {
    track_id: uuid().references(() => tracks.track_id, { onDelete: 'cascade' }),
    tag_id: uuid().references(() => tags.tag_id, { onDelete: 'cascade' }),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [primaryKey({ columns: [table.track_id, table.tag_id] })],
);
