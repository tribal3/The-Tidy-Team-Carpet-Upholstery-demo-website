import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { business } from '../data/site'
import { Rating } from './ui/Rating'
import { Reveal } from './ui/Reveal'

interface HeroProps {
  onQuoteClick: () => void
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-mist">
      <div
        className="pointer-events-none absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-sky opacity-80 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal/30 to-transparent"
        aria-hidden="true"
      />

      <div className="shell relative grid gap-14 py-14 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-[10.5px] font-semibold tracking-[0.16em] text-navy/65 uppercase">
            <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            Billesley, Birmingham
          </p>

          <h1 className="display mt-6 text-[2.65rem] leading-[1.03] sm:text-6xl lg:text-[4.15rem]">
            Bring Your Carpets{' '}
            <span className="relative inline-block whitespace-nowrap">
              Back to Life.
              <svg
                className="absolute -bottom-1.5 left-0 h-3 w-full text-teal/60"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8.5C40 3.5 92 2.5 198 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-[1rem] leading-relaxed text-muted text-pretty">
            Professional carpet and upholstery cleaning for homes in Birmingham. Careful,
            thorough work that leaves your carpets looking fresher — and your rooms feeling
            cleaner.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={onQuoteClick} className="btn btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a href={business.phoneHref} className="btn btn-outline">
              <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] text-muted">
            <span className="flex items-center gap-2">
              <Rating value={business.rating} />
              <span className="font-semibold text-navy">{business.rating}</span>
              <span>on Google</span>
            </span>
            <span className="hidden h-4 w-px bg-navy/15 sm:block" aria-hidden="true" />
            <span>{business.reviewCount} customer reviews</span>
            <span className="hidden h-4 w-px bg-navy/15 sm:block" aria-hidden="true" />
            <span>Carpets &amp; upholstery</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[1.8rem] bg-navy/10 shadow-[0_40px_80px_-50px_rgba(20,43,59,0.55)] ring-1 ring-navy/10">
            <img
              src="/images/tidy-team/hero-carpet-cleaning.webp"
              alt="A red carpet in a furnished living room, photographed by The Tidy Team"
              width={1150}
              height={1300}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-[center_62%] [filter:saturate(0.88)_contrast(1.03)] sm:aspect-[4/4.3] lg:aspect-[4/4.55]"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-navy/35 via-transparent to-transparent"
              aria-hidden="true"
            />
            <p className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-[9.5px] font-semibold tracking-[0.14em] text-navy/70 uppercase backdrop-blur">
              Photograph: The Tidy Team
            </p>
          </div>

          <div className="absolute bottom-5 left-4 z-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 pr-5 shadow-[0_18px_40px_-24px_rgba(20,43,59,0.7)] backdrop-blur sm:left-5 lg:-left-8 lg:bottom-8">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky font-display text-sm font-extrabold text-teal">
              4.7
            </span>
            <span>
              <Rating value={business.rating} starClassName="h-3 w-3" />
              <span className="mt-1 block text-[10.5px] font-medium text-muted">
                {business.reviewCount} Google reviews
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
