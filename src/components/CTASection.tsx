import { ArrowRight, Phone } from 'lucide-react'
import { business } from '../data/site'
import { Reveal } from './ui/Reveal'

interface CTASectionProps {
  onQuoteClick: () => void
}

export function CTASection({ onQuoteClick }: CTASectionProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-24 -bottom-28 h-80 w-80 rounded-full bg-teal/15 blur-[90px]"
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="eyebrow">
                  <span className="h-px w-6 bg-current" aria-hidden="true" />
                  Ready when you are
                </p>
                <h2
                  id="cta-title"
                  className="display mt-4 max-w-xl text-[2rem] leading-[1.08] text-white text-balance sm:text-[2.6rem]"
                >
                  Ready for a fresher, cleaner home?
                </h2>
                <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/60">
                  Get in touch with The Tidy Team to discuss your carpet or upholstery cleaning
                  needs.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <button type="button" onClick={onQuoteClick} className="btn btn-primary w-full !py-3.5 lg:w-auto lg:min-w-56">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a href={business.phoneHref} className="btn btn-ghost-light w-full !py-3.5 lg:w-auto lg:min-w-56">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <p className="mt-1 text-center text-[12.5px] text-white/45 lg:text-right">
                  {business.phoneDisplay}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
