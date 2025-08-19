'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { loginSchema, projectSchema } from '@/lib/schemas';
import { getIronSession, sealSession } from '@/lib/session';

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return projects;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects.');
  }
}

export async function getProjectById(id: string) {
    if (!id) return null;
    try {
        const project = await prisma.project.findUnique({
            where: { id },
        });
        return project;
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
  
  try {
    await prisma.project.create({
      data: validatedFields.data
    });
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

  try {
    await prisma.project.update({
      where: { id },
      data: validatedFields.data,
    });
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
    await prisma.project.delete({
      where: { id },
    });
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete project.');
  }

  revalidatePath('/');
  revalidatePath('/admin/dashboard');
}
