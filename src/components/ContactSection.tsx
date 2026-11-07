import { ArrowUpRight, MapPin, Navigation, Phone, Star } from 'lucide-react'
import { business } from '../data/site'
import { EnquiryForm } from './EnquiryForm'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

interface ContactSectionProps {
  presetService: string | null
}

export function ContactSection({ presetService }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-mist py-20 sm:py-24 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Let's talk about your carpets."
              description="Call The Tidy Team, or send a few details using the form. Enquiries are welcome for carpets, sofas and upholstery."
            />
          </Reveal>

          <div className="mt-9 space-y-3">
            <Reveal delay={60}>
              <a
                href={business.phoneHref}
                className="group flex items-start gap-4 rounded-2xl border border-navy/8 bg-white p-5 transition hover:border-teal/40 hover:shadow-[0_20px_40px_-32px_rgba(20,43,59,0.5)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky text-teal">
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10.5px] font-semibold tracking-[0.16em] text-muted uppercase">
                    Phone
                  </span>
                  <span className="mt-1 block font-display text-[1.15rem] font-bold text-navy">
                    {business.phoneDisplay}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-muted">
                    Call to discuss your carpet or upholstery cleaning.
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-navy/25 transition group-hover:text-teal"
                  aria-hidden="true"
                />
              </a>
            </Reveal>

            <Reveal delay={110}>
              <a
                href={business.mapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-navy/8 bg-white p-5 transition hover:border-teal/40 hover:shadow-[0_20px_40px_-32px_rgba(20,43,59,0.5)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky text-teal">
                  <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10.5px] font-semibold tracking-[0.16em] text-muted uppercase">
                    Address
                  </span>
                  <span className="mt-1 block text-[14px] leading-snug font-semibold text-navy">
                    {business.addressLine1}, {business.addressLine2}, {business.postcode}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-muted">{business.country}</span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-navy/25 transition group-hover:text-teal"
                  aria-hidden="true"
                />
              </a>
            </Reveal>

            <Reveal delay={160}>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-navy px-4 py-4 text-white transition hover:bg-navy-deep"
                >
                  <Navigation className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <span className="text-[12.5px] font-semibold">Google Maps directions</span>
                </a>
                <a
                  href={business.mapsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white px-4 py-4 text-navy transition hover:border-teal/40"
                >
                  <Star className="h-4 w-4 shrink-0 text-[#F2B03D]" fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  <span className="text-[12.5px] font-semibold">
                    {business.rating} / 5 on Google
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="mt-6 text-[11.5px] leading-relaxed text-muted">
              The Tidy Team is based in Billesley, Birmingham. Please call to confirm availability
              and arrange a visit.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <EnquiryForm presetService={presetService} />
        </Reveal>
      </div>
    </section>
  )
}
