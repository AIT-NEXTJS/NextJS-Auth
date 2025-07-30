import { NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/node-postgres';
import { sql } from 'drizzle-orm';
import { Pool } from 'pg';

export async function GET() {
  const dbUrl = process.env.DATABASE_URL;

  // 1. Проверка переменной окружения
  if (!dbUrl) {
    return NextResponse.json(
      { step: 'ENV CHECK', status: '❌ DATABASE_URL is missing' },
      { status: 500 }
    );
  }

  let pool: Pool;

  // 2. Попытка подключения к базе
  try {
    pool = new Pool({
      connectionString: dbUrl,
      ssl: { rejectUnauthorized: false }, // для Supabase
    });

    // Проверка соединения
    const client = await pool.connect();
    client.release(); // сразу отпускаем
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      {
        step: 'DB CONNECTION',
        status: '❌ Failed to connect to DB',
        message: error.message,
      },
      { status: 500 }
    );
  }

  const db = drizzle(pool);

  // 3. Проверка базового запроса SELECT 1
  try {
    const result = await db.execute(sql`SELECT 1 as check`);
    if (!Array.isArray(result) || result.length === 0) {
      throw new Error('SELECT 1 returned no result');
    }
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      {
        step: 'DRIZZLE SELECT 1',
        status: ' Failed basic query',
        message: error.message,
      },
      { status: 500 }
    );
  }

  // 4. Проверка таблицы sports
  try {
    const test = await db.execute(sql`SELECT * FROM "sports" LIMIT 1`);
    return NextResponse.json({
      ENV: '✅',
      CONNECTION: '✅',
      DRIZZLE_SELECT: '✅',
      TABLE_SPORTS: '✅',
      TEST_ROW: test,
    });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      {
        ENV: '✅',
        CONNECTION: '✅',
        DRIZZLE_SELECT: '✅',
        TABLE_SPORTS: '❌',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
