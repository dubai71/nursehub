'use client';

interface ProgressBarProps {
  value: number;
  className?: string;
}

export function Progress({ value, className }: ProgressBarProps) {
  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-[#1E1E1E] ${className || ''}`}>
      <div
        className="h-full bg-gradient-to-r from-[#0F4C81] to-[#10B981] transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}