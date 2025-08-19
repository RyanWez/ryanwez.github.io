import { z } from 'zod';

export const loginSchema = z.object({
  password: z.string().min(1, { message: 'Password is required' }),
});

export const projectSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    technologies: z.array(z.string()).min(1, 'At least one technology is required'),
    liveDemoUrl: z.string().url('Invalid URL format'),
    sourceCodeUrl: z.string().url('Invalid URL format'),
    imageUrl: z.string().url('Invalid URL format').optional().or(z.literal('')),
});
