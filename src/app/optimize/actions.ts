"use server"

import { z } from "zod"
import { optimizeContent as optimizeContentFlow, type OptimizeContentInput } from "@/ai/flows/content-optimizer"

const formSchema = z.object({
  homepageContent: z.string().min(10, { message: "Content is too short." }),
  aboutMeContent: z.string().min(10, { message: "Content is too short." }),
  experienceContent: z.string().min(10, { message: "Content is too short." }),
  projectsContent: z.string().min(10, { message: "Content is too short." }),
  skillsContent: z.string().min(10, { message: "Content is too short." }),
  visitorEngagementData: z.string().min(2, "Must be a valid JSON object string").refine(val => {
      try {
        JSON.parse(val);
        return true;
      } catch (e) {
        return false;
      }
    }, { message: "Must be a valid JSON object string" })
})

export async function getOptimizations(values: z.infer<typeof formSchema>): Promise<{ error: string | null; suggestions: string[] }> {
    const validatedFields = formSchema.safeParse(values)

    if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors;
        const errorMessages = Object.values(errors).map(e => e?.join(', ')).join(' ');
        return { error: `Invalid fields: ${errorMessages}`, suggestions: [] }
    }

    try {
        const result = await optimizeContentFlow(validatedFields.data as OptimizeContentInput)
        if (result.suggestions.some(s => s.startsWith('Error:'))) {
            return { error: result.suggestions[0], suggestions: [] };
        }
        return { error: null, suggestions: result.suggestions }
    } catch (error) {
        console.error("Error in getOptimizations action:", error)
        return { error: 'An unexpected error occurred while fetching optimizations.', suggestions: [] }
    }
}
