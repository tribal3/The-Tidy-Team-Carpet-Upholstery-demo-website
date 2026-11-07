import { ArrowRight, Phone } from 'lucide-react'
import { business, reasons } from '../data/site'
import { Rating } from './ui/Rating'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

interface WhyChooseUsProps {
  onQuoteClick: () => void
}

export function WhyChooseUs({ onQuoteClick }: WhyChooseUsProps) {
  return (
    <section id="why" className="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Why choose The Tidy Team"
              title="The details customers notice."
              description="These are the themes that come up again and again in the business's Google reviews."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 rounded-2xl border border-navy/8 bg-white p-6">
              <Rating value={business.rating} starClassName="h-4.5 w-4.5" />
              <p className="mt-3 font-display text-2xl font-extrabold text-navy">
                {business.rating} out of 5
              </p>
              <p className="mt-1 text-[12.5px] text-muted">
                Based on {business.reviewCount} Google reviews
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <button type="button" onClick={onQuoteClick} className="btn btn-primary !px-5 !py-2.5 text-[12.5px]">
                  Request a Quote
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <a href={business.phoneHref} className="btn btn-outline !px-5 !py-2.5 text-[12.5px]">
                  <Phone className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:pt-2">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 70}>
              <div className="group flex gap-5 border-t border-navy/10 py-6 transition last:border-b">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-teal ring-1 ring-navy/8 transition duration-300 group-hover:bg-teal group-hover:text-white">
                  <reason.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[1.05rem] font-bold text-navy">{reason.title}</h3>
                    <span className="font-display text-[11px] font-bold text-navy/20">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
