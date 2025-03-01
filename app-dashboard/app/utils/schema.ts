import { z } from "zod";

 export const projectSchema = z.object({
    projectName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})