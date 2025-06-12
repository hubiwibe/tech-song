import { pgPolicy, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { authUsers } from 'drizzle-orm/supabase';

export const profiles = pgTable(
  'profiles',
  {
    profile_id: uuid()
      .primaryKey()
      .references(() => authUsers.id, { onDelete: 'cascade' }),
    name: text().notNull(),
    created_at: timestamp().notNull().defaultNow(),
    updated_at: timestamp().notNull().defaultNow(),
  },
  table => [
    pgPolicy('profiles-select-policy', {
      as: 'permissive',
      for: 'select',
      to: 'public',
      using: sql`true`,
    }),
  ],
);
