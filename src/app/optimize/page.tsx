"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"

export default function OptimizerPage() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-serif font-bold text-2xl">Content Optimizer</CardTitle>
          <CardDescription>
            AI-powered content optimization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center p-8 bg-secondary/50 rounded-lg">
            <Info className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feature Not Available</h3>
            <p className="text-muted-foreground max-w-md">
              The AI Content Optimizer requires a server to function and is not available on this statically-hosted version of the site. This feature will be active when running the application in a development environment.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
