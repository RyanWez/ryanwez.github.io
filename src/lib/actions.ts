'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import { loginSchema, projectSchema } from '@/lib/schemas';
import { getIronSession, sealSession } from '@/lib/session';
import type { ProjectWithId } from './definitions';

export async function getProjects(): Promise<ProjectWithId[]> {
  try {
    const projects = await sql<ProjectWithId[]>`
      SELECT id, title, description, technologies, "liveDemoUrl", "sourceCodeUrl", "imageUrl", "createdAt"
      FROM "Project"
      ORDER BY "createdAt" DESC
    `;
    return projects;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects.');
  }
}

export async function getProjectById(id: string): Promise<ProjectWithId | null> {
    if (!id) return null;
    try {
        const result = await sql<ProjectWithId[]>`
          SELECT id, title, description, technologies, "liveDemoUrl", "sourceCodeUrl", "imageUrl", "createdAt"
          FROM "Project"
          WHERE id = ${id}
        `;
        return result[0] || null;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project.');
    }
}


// --- Admin Actions ---

async function verifyAuth() {
  const session = await getIronSession(cookies());
  if (!session.isLoggedIn) {
    throw new Error('Unauthorized: You must be logged in to perform this action.');
  }
  return session;
}

export async function login(prevState: any, formData: FormData) {
  try {
    const validatedFields = loginSchema.safeParse({
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return {
        type: 'error',
        message: 'Invalid password format.',
      };
    }

    const { password } = validatedFields.data;

    if (password !== process.env.ADMIN_PASSWORD) {
      return {
        type: 'error',
        message: 'Invalid password.',
      };
    }

    await sealSession(cookies());
  } catch (error) {
    if (error) {
      return { type: 'error', message: 'Something went wrong.' };
    }
    throw error;
  }
  redirect('/admin/dashboard');
}

export async function logout() {
  const session = await getIronSession(cookies());
  session.destroy();
  redirect('/admin');
}

export async function createProject(data: z.infer<typeof projectSchema>) {
  await verifyAuth();
  
  const validatedFields = projectSchema.safeParse(data);
  if (!validatedFields.success) {
    throw new Error('Invalid project data.');
  }
  
  const { title, description, technologies, liveDemoUrl, sourceCodeUrl, imageUrl } = validatedFields.data;

  try {
    await sql`
      INSERT INTO "Project" (title, description, technologies, "liveDemoUrl", "sourceCodeUrl", "imageUrl")
      VALUES (${title}, ${description}, ${technologies}, ${liveDemoUrl}, ${sourceCodeUrl}, ${imageUrl || null})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create project.');
  }

  revalidatePath('/');
  revalidatePath('/admin/dashboard');
}

export async function updateProject(id: string, data: z.infer<typeof projectSchema>) {
  await verifyAuth();

  const validatedFields = projectSchema.safeParse(data);
  if (!validatedFields.success) {
    throw new Error('Invalid project data.');
  }
  
  const { title, description, technologies, liveDemoUrl, sourceCodeUrl, imageUrl } = validatedFields.data;

  try {
    await sql`
      UPDATE "Project"
      SET title = ${title},
          description = ${description},
          technologies = ${technologies},
          "liveDemoUrl" = ${liveDemoUrl},
          "sourceCodeUrl" = ${sourceCodeUrl},
          "imageUrl" = ${imageUrl || null}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update project.');
  }

  revalidatePath('/');
  revalidatePath('/admin/dashboard');
}

export async function deleteProject(id: string) {
  await verifyAuth();

  try {
    await sql`
      DELETE FROM "Project"
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete project.');
  }

  revalidatePath('/');
  revalidatePath('/admin/dashboard');
}
