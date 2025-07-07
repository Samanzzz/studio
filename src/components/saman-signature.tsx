import { cn } from "@/lib/utils";

export function GeometricAnimation({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
      aria-hidden="true"
    >
      {/* Nodes */}
      <circle className="node" cx="20" cy="80" r="4" style={{ animationDelay: '0.2s' }} />
      <circle className="node" cx="50" cy="30" r="3" style={{ animationDelay: '0.4s' }} />
      <circle className="node" cx="100" cy="50" r="5" style={{ animationDelay: '0.1s' }} />
      <circle className="node" cx="150" cy="30" r="2.5" style={{ animationDelay: '0.6s' }} />
      <circle className="node" cx="180" cy="80" r="4" style={{ animationDelay: '0.3s' }} />
      <circle className="node" cx="130" cy="120" r="3.5" style={{ animationDelay: '0.8s' }} />
      <circle className="node" cx="70" cy="150" r="4.5" style={{ animationDelay: '0.5s' }} />
      <circle className="node" cx="40" cy="110" r="2" style={{ animationDelay: '0.7s' }} />

      {/* Lines */}
      <line className="line" x1="20" y1="80" x2="50" y2="30" style={{ animationDelay: '0.5s' }} />
      <line className="line" x1="50" y1="30" x2="100" y2="50" style={{ animationDelay: '0.4s' }} />
      <line className="line" x1="100" y1="50" x2="150" y2="30" style={{ animationDelay: '0.7s' }} />
      <line className="line" x1="150" y1="30" x2="180" y2="80" style={{ animationDelay: '0.6s' }} />
      <line className="line" x1="180" y1="80" x2="130" y2="120" style={{ animationDelay: '0.9s' }} />
      <line className="line" x1="130" y1="120" x2="70" y2="150" style={{ animationDelay: '0.8s' }} />
      <line className="line" x1="70" y1="150" x2="40" y2="110" style={{ animationDelay: '1.0s' }} />
      <line className="line" x1="40" y1="110" x2="20" y2="80" style={{ animationDelay: '1.1s' }} />
      <line className="line" x1="100" y1="50" x2="40" y2="110" style={{ animationDelay: '1.2s' }} />
      <line className="line" x1="100" y1="50" x2="130" y2="120" style={{ animationDelay: '1.3s' }} />
    </svg>
  );
}
