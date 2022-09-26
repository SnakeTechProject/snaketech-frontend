import { z } from 'zod';

export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(4, { message: 'Senha muito curta. Mínimo de 4 caracteres.' }),
    passwordConfirm: z
      .string()
      .min(4, { message: 'Senha muito curta. Mínimo de 4 caracteres.' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas precisam ser idênticas.',
    path: ['passwordConfirm'],
  });

export const signInSchema = z.object({
  email: z.string().email({ message: 'Digite um email válido.' }).min(1),
  password: z.string().min(4, { message: 'Senha muito curta!' }),
});

export const signUpSchema = z
  .object({
    name: z.string().min(2, { message: 'Digite seu nome.' }),
    email: z.string().email({ message: 'Digite um email válido.' }).min(1),
    password: z
      .string()
      .min(4, { message: 'Senha muito curta. Mínimo de 4 caracteres.' }),
    passwordConfirm: z
      .string()
      .min(4, { message: 'Senha muito curta. Mínimo de 4 caracteres.' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas precisam ser idênticas.',
    path: ['passwordConfirm'],
  });
