import { Star } from 'lucide-react'

interface RatingProps {
  value: number
  className?: string
  starClassName?: string
}

export function Rating({ value, className = '', starClassName = 'h-4 w-4' }: RatingProps) {
  const percentage = Math.max(0, Math.min(100, (value / 5) * 100))

  return (
    <span
      className={`relative inline-flex ${className}`}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      <span className="flex gap-0.5 text-navy/15" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={starClassName} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-[#F2B03D]"
        style={{ width: `${percentage}%` }}
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`${starClassName} shrink-0`}
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
      </span>
    </span>
  )
}
