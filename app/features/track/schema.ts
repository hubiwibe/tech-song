import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  category_id: uuid().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});

export const tags = pgTable('tags', {
  tag_id: uuid().primaryKey(),
  name: text().notNull().unique(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});

export const tracks = pgTable('tracks', {
  track_id: uuid().primaryKey(),
  category_id: uuid().references(() => categories.category_id),
  title: text().notNull(),
  content: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});

export const track_categories = pgTable('track_categories', {
  track_id: uuid().references(() => tracks.track_id),
  category_id: uuid().references(() => categories.category_id),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});

export const track_tags = pgTable('track_tags', {
  track_id: uuid().references(() => tracks.track_id),
  tag_id: uuid().references(() => tags.tag_id),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),
});
