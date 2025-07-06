'use server';
/**
 * @fileOverview An AI-powered tool that analyzes website visitor engagement and provides content optimization suggestions.
 *
 * - optimizeContent - A function that analyzes website content and provides optimization suggestions.
 * - OptimizeContentInput - The input type for the optimizeContent function.
 * - OptimizeContentOutput - The return type for the optimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentInputSchema = z.object({
  homepageContent: z.string().describe('The HTML content of the homepage.'),
  aboutMeContent: z.string().describe('The HTML content of the about me page.'),
  experienceContent: z.string().describe('The HTML content of the experience section.'),
  projectsContent: z.string().describe('The HTML content of the projects section.'),
  skillsContent: z.string().describe('The HTML content of the skills section.'),
  visitorEngagementData: z.string().describe('Data on visitor engagement for each section of the website, including metrics like time spent, bounce rate, and click-through rates. Should be a JSON string with section names as keys and engagement metrics as values.'),
});
export type OptimizeContentInput = z.infer<typeof OptimizeContentInputSchema>;

const OptimizeContentOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of content optimization suggestions for each section of the website, tailored to improve visitor engagement and highlight the website owner\'s strengths and projects.'),
});
export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are an AI-powered content optimizer for personal websites. Analyze the provided website content and visitor engagement data to provide actionable suggestions for content optimization.

Website Content:

Homepage:
{{homepageContent}}

About Me:
{{aboutMeContent}}

Experience:
{{experienceContent}}

Projects:
{{projectsContent}}

Skills:
{{skillsContent}}

Visitor Engagement Data:
{{visitorEngagementData}}

Based on the content and engagement data, provide specific suggestions to improve each section, focusing on highlighting the website owner's strengths and projects. The suggestions should be actionable and aimed at increasing visitor engagement (e.g., time spent on page, click-through rates). Return a list of strings. Each string is a suggestion. Focus on optimizing content to better showcase the website owner as an academic and professional researcher who is a software development engineer.
`,
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async input => {
    try {
      // Parse the visitorEngagementData string into a JSON object
      const visitorEngagementData = JSON.parse(input.visitorEngagementData);
      const {output} = await prompt({...input, visitorEngagementData: JSON.stringify(visitorEngagementData)});
      return output!;
    } catch (error) {
      console.error('Error parsing visitorEngagementData:', error);
      // Handle the error appropriately, e.g., return a default output or throw an error
      return {suggestions: ['Error: Could not parse visitor engagement data. Please ensure it is valid JSON.']};
    }
  }
);
