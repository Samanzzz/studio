import { cn } from "@/lib/utils";

export function SamanSignature({ className }: { className?: string }) {
  return (
    <svg 
        width="294" 
        height="78" 
        viewBox="0 0 294 78" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn("text-foreground", className)}
        aria-labelledby="signature-title"
    >
        <title id="signature-title">Saman Khadivar Signature</title>
        <path 
            className="signature-path"
            d="M2.99971 49.333C2.99971 49.333 5.49971 21.333 39.4997 25.833C73.4997 30.333 70.9997 53.333 60.4997 50.833C50.0002 48.333 50.9997 29.833 76.4997 21.833C101.999 13.833 115.5 31.833 113.5 46.333C111.5 60.833 92.9997 68.333 85.9997 60.333C78.9997 52.333 88.4997 35.833 113 28.333C137.5 20.833 149 40.833 148 51.833C147 62.833 133.5 70.333 126.5 64.333C119.5 58.333 129.5 46.833 145.5 43.833C161.5 40.833 181.5 54.333 181.5 64.333C181.5 74.333 194.5 44.333 197.5 40.833C200.5 37.333 214.5 24.333 227 25.333C239.5 26.333 234.5 45.333 234.5 51.333C234.5 57.333 231 66.833 241 66.833C251 66.833 259 55.833 259 47.833C259 39.833 248.5 28.333 237.5 24.333C226.5 20.333 211 26.833 209.5 38.333C208 49.833 221.5 61.333 234.5 62.833C247.5 64.333 261.5 53.333 266.5 45.833C271.5 38.333 280.833 20.666 291 16.833" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
  );
}
