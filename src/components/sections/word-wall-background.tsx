'use client';

import { useEffect, useState } from "react";

const words = [
  "Python", "Java", "SQL", "JavaScript", "Swift", "HTML", "CSS", "React", 
  "Node.js", "Django", "SwiftUI", "PyTorch", "Pandas", "NumPy", "Next.js", 
  "AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub", "CI/CD", "Jira",
  "Tableau", "PowerBI", "Agile", "Scrum", "API", "Data Pipeline", "Algorithm", 
  "Software", "Engineer", "Cloud", "Scalable", "Security", "Frontend", "Backend",
  "Database", "DevOps", "S3", "ECS", "Lambda", "Full-Stack", "Mobile"
];

// Fisher-Yates shuffle
const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const WordColumn = ({ words, duration, reverse = false }: { words: string[], duration: number, reverse?: boolean }) => {
  const animationName = reverse ? "scroll-vertical-reverse" : "scroll-vertical";
  return (
      <div 
        className="flex-shrink-0 flex flex-col gap-4 min-w-[150px]"
        style={{ animation: `${animationName} ${duration}s linear infinite` }}
      >
        {words.map((word, i) => <span key={i}>{word}</span>)}
        {words.map((word, i) => <span key={i + words.length}>{word}</span>)}
      </div>
  )
};

export function WordWallBackground() {
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);

  useEffect(() => {
    setShuffledWords(shuffleArray([...words]));
  }, []);

  if (shuffledWords.length === 0) return null;

  const columns = Array(8).fill(null);
  const durations = [80, 130, 100, 150, 120, 90, 160, 110];
  const wordsPerColumn = Math.ceil(shuffledWords.length / 2);

  const getColumnWords = (index: number): string[] => {
    const start = (index * 5) % shuffledWords.length;
    const wordList = [];
    for (let i = 0; i < wordsPerColumn; i++) {
        wordList.push(shuffledWords[(start + i) % shuffledWords.length]);
    }
    return wordList;
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 flex items-start justify-around gap-8 overflow-hidden text-muted-foreground/20 font-mono text-sm select-none"
    >
      {columns.map((_, i) => (
         <WordColumn 
            key={i} 
            words={getColumnWords(i)} 
            duration={durations[i]}
            reverse={i % 2 === 0}
         />
      ))}
    </div>
  );
}
