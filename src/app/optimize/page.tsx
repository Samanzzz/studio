"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { getOptimizations } from "./actions"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Loader2 } from "lucide-react"

const formSchema = z.object({
  homepageContent: z.string().min(50, { message: "Homepage content must be at least 50 characters." }),
  aboutMeContent: z.string().min(50, { message: "About Me content must be at least 50 characters." }),
  experienceContent: z.string().min(50, { message: "Experience content must be at least 50 characters." }),
  projectsContent: z.string().min(50, { message: "Projects content must be at least 50 characters." }),
  skillsContent: z.string().min(50, { message: "Skills content must be at least 50 characters." }),
  visitorEngagementData: z.string().min(2, "Must be a valid JSON object string.").refine(
    (val) => {
      try {
        JSON.parse(val)
        return true
      } catch (e) {
        return false
      }
    },
    { message: "Must be a valid JSON object string" }
  ),
})

const placeholderEngagementData = `{
  "homepage": { "timeSpent": 120, "bounceRate": 0.3, "ctr": 0.15 },
  "about": { "timeSpent": 90, "bounceRate": 0.2, "ctr": 0.05 },
  "experience": { "timeSpent": 180, "bounceRate": 0.1, "ctr": 0.25 },
  "projects": { "timeSpent": 150, "bounceRate": 0.15, "ctr": 0.20 },
  "skills": { "timeSpent": 60, "bounceRate": 0.4, "ctr": 0.02 },
  "contact": { "timeSpent": 30, "bounceRate": 0.5, "ctr": 0.30 }
}`

export default function OptimizerPage() {
  const [isPending, startTransition] = useTransition()
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      homepageContent: "Provide HTML or text content for the homepage.",
      aboutMeContent: "Provide HTML or text content for the about me page.",
      experienceContent: "Provide HTML or text content for the experience section.",
      projectsContent: "Provide HTML or text content for the projects section.",
      skillsContent: "Provide HTML or text content for the skills section.",
      visitorEngagementData: placeholderEngagementData,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null)
    setSuggestions([])
    startTransition(async () => {
      const result = await getOptimizations(values)
      if (result.error) {
        setError(result.error)
      } else {
        setSuggestions(result.suggestions)
      }
    })
  }

  return (
    <main className="container mx-auto p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Content Optimizer</CardTitle>
          <CardDescription>
            Analyze website content and visitor engagement to get AI-powered optimization suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="homepageContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Homepage Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste homepage content here..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="aboutMeContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About Me Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste about me content here..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="experienceContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste experience content here..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="projectsContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Projects Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste projects content here..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="skillsContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste skills content here..." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="visitorEngagementData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visitor Engagement Data</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Paste visitor engagement JSON data here..." {...field} rows={10} />
                    </FormControl>
                    <FormDescription>
                      Provide a JSON string with engagement metrics for each section.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Get Suggestions"
                )}
              </Button>
            </form>
          </Form>

          {(suggestions.length > 0 || error) && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 font-headline">Results</h3>
              {error && <p className="text-destructive">{error}</p>}
              {suggestions.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  )
}
