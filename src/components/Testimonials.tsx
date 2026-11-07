import { ArrowUpRight, Quote } from 'lucide-react'
import { business, reviews } from '../data/site'
import { Rating } from './ui/Rating'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Customer reviews"
              tone="light"
              title="What customers say."
              description="A 4.7 rating from 23 reviews on Google. Here are two comments from those reviews, reproduced word for word."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
              <Rating value={business.rating} starClassName="h-3.5 w-3.5" />
              <span className="text-[12px] font-semibold text-white">{business.rating} / 5</span>
              <span className="text-[11px] text-white/40">Google</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.quote} delay={index * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm">
                <Quote className="h-7 w-7 text-teal/60" aria-hidden="true" />
                <blockquote className="mt-5 flex flex-1 items-center font-display text-[1.42rem] leading-snug font-semibold text-white">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4 text-[11.5px] text-white/45">
                  {review.source} &middot; The Tidy Team, Birmingham
                </figcaption>
              </figure>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-teal p-7 text-white">
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
              <div className="relative">
                <p className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-white/70">
                  Read the full picture
                </p>
                <p className="mt-4 font-display text-5xl leading-none font-extrabold">
                  {business.rating}
                  <span className="ml-1 text-base font-semibold text-white/60">/ 5</span>
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-white/80">
                  Based on {business.reviewCount} customer reviews on Google. See every review
                  directly on the business&rsquo;s Maps listing.
                </p>
              </div>
              <a
                href={business.mapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-[12.5px] font-semibold text-navy transition hover:bg-sky"
              >
                Read reviews on Google
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-[11px] text-white/35">
          Quotes reproduced from the business&rsquo;s Google reviews. Reviewer names are not shown.
        </p>
      </div>
    </section>
  )
}
