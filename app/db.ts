import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL!, { prepare: false }); // supabase는 connection pooling을 지원하지만 drizzle은 지원하지 않음

const db = drizzle(client);

export default db;
