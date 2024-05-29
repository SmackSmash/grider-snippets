'use server';
import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function updateSnippet(id: number, code: string | undefined) {
  await db.snippet.update({ where: { id }, data: { code } });
  redirect('/');
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  redirect('/');
}
