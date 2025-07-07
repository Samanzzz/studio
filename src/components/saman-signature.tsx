import { cn } from "@/lib/utils";

export function CursiveSignature({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 800 300"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      aria-hidden="true"
    >
      <g transform="rotate(-8 400 150)">
        <g>
          {/* S */}
          <path className="signature-path" d="M152.8,173.5c-30.8-13.3-43.5-59-21.3-81.2c22.1-22.1,64.2-13.6,83.9,13.6c17.2,23.8,11.5,58.5-13.6,75.7c-25.1,17.2-58.5,13.6-75.7-11.8" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* aman */}
          <path className="signature-path" style={{animationDelay: '0.4s'}} d="M211.2,166.7c0,0,14.2-22.1,34-22.1s34,19.9,34,19.9s14.2-19.9,31.2-19.9s31.2,22.1,31.2,22.1s11.3-22.1,28.3-22.1 c17,0,25.5,22.1,25.5,22.1l25.5-1.7" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g>
          {/* K */}
          <path className="signature-path" style={{animationDelay: '0.8s'}} d="M420.7,91.2c0,0-22.6,82.4,0,85c22.6,2.5,42.5-33.9,42.5-33.9s-25.4-1.3-42.5,33.9" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* hadivar */}
          <path className="signature-path" style={{animationDelay: '1.2s'}} d="M469.3,169.3c0,0-5.7-87.9,19.9-87.9c25.5,0,17,87.9,17,87.9s11.3-45.3,28.3-45.3s25.5,45.3,25.5,45.3 s11.3-45.3,28.3-45.3s28.3,42.5,28.3,42.5l-2.8,2.8s14.2-45.3,28.3-45.3s28.3,45.3,28.3,45.3l31.2-2.8" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* i-dot */}
          <path className="signature-path" style={{animationDelay: '1.8s'}} d="M602.3,109.6c-2.8,0-5.7,2.8-5.7,5.7s2.8,5.7,5.7,5.7s5.7-2.8,5.7-5.7S605.2,109.6,602.3,109.6z" fill="currentColor" stroke="none" />
        </g>
      </g>
    </svg>
  );
}
