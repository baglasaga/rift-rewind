import {z} from 'zod';

export const loginSchema = z.object({
    gameName: z.string(),
    tagLine: z.string()
});

export type LoginFormData = z.infer<typeof loginSchema>;
