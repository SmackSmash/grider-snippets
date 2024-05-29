'use server';
import { db } from '@/db';

export async function updateSnippet(id: number, code: string | undefined) {
  const snippet = await db.snippet.findFirst({ where: { id } });
  console.log(snippet);
}
