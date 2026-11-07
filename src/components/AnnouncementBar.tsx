import { Phone } from 'lucide-react'
import { business } from '../data/site'

export function AnnouncementBar() {
  return (
    <div className="bg-navy-deep text-white">
      <div className="shell flex h-9 items-center justify-center gap-2 text-center sm:justify-between">
        <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.02em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
          Professional carpet &amp; upholstery cleaning in Birmingham
        </p>
        <a
          href={business.phoneHref}
          className="hidden items-center gap-1.5 text-[11px] font-semibold text-white/70 transition hover:text-white sm:flex"
        >
          <Phone className="h-3 w-3" aria-hidden="true" />
          {business.phoneLocal}
        </a>
      </div>
    </div>
  )
}
