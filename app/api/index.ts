// app/actions.js
'use server';

import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const PostSchema = z.object({
  name: z.string().min(1, 'name is required').max(40),
  email: z.string().min(1, 'email is required').max(100),
  typeofactivity: z.string(),
  description: z.string().min(10,'description is required').max(500)
});

export async function createPost(formData:any) {
  const validatedFields = PostSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    typeofactivity : formData.get('typeofactivity'),
    description : formData.get('description')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email,typeofactivity,description } = validatedFields.data;

  try {
    await prisma.post.create({
      data: {
        name,
        email,
        typeofactivity,
        description,
      },
    });
    return { success: true, message: 'submitted successfully!' };
  } catch (error) {
    console.error('Error submitting :', error);
    return { success: false, message: 'Failed to submit.' };
  }
}