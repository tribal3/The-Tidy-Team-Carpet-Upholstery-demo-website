import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'dark',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isLight = tone === 'light'

  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      <p className={`eyebrow ${isLight ? 'text-teal' : ''}`}>
        <span className="h-px w-6 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`display mt-5 text-[2rem] leading-[1.08] text-balance sm:text-[2.6rem] lg:text-[2.9rem] ${
          isLight ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[0.98rem] leading-relaxed text-pretty ${
            isLight ? 'text-white/65' : 'text-muted'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
