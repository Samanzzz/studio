"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Play } from 'lucide-react';

const initialCode = `def greet(name):
    print(f"Hello, {name}!")

greet("World")
# Welcome to the Playground!
# This is a simulated Python environment.
# Feel free to type some code and see what happens.
`;

export default function PlaygroundPage() {
  const [code, setCode] = useState<string>(initialCode);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Running code...');
    
    // Simulate execution
    setTimeout(() => {
      // A simple mock output.
      // A real implementation would require a proper interpreter.
      const simulatedOutput = `Hello, World!\n\nExecution finished.`;
      setOutput(simulatedOutput);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="w-full">
        <div className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Python Playground</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
              An interactive environment to run Python code snippets directly in the browser.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Code Editor</CardTitle>
              <CardDescription>
                Write your Python code below and click 'Run'.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your Python code here"
                className="font-mono h-80 text-sm bg-secondary/30 border-border"
              />
              <Button onClick={handleRunCode} disabled={isRunning} className="mt-4">
                <Play className="mr-2 h-4 w-4" />
                {isRunning ? 'Running...' : 'Run Code'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Output</CardTitle>
              <CardDescription>
                Results from your code execution will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/30 p-4 rounded-md min-h-[120px] border border-border">
                <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                  <code>{output || 'Click "Run Code" to see the output.'}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
