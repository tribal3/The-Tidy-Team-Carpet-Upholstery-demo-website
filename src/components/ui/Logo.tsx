interface LogoProps {
  tone?: 'dark' | 'light'
  className?: string
}

export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const isLight = tone === 'light'

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[14px] bg-navy ring-1 ring-white/10">
        <span className="font-display text-[17px] font-extrabold tracking-[-0.08em] text-white">TT</span>
        <span className="absolute right-2 bottom-2 h-1.5 w-1.5 rounded-full bg-teal" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.06rem] font-extrabold tracking-[-0.03em] ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          The Tidy Team
        </span>
        <span
          className={`mt-1.5 text-[9px] font-semibold tracking-[0.22em] uppercase ${
            isLight ? 'text-white/50' : 'text-muted'
          }`}
        >
          Carpet &amp; Upholstery
        </span>
      </span>
    </span>
  )
}
