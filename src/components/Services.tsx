import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'
import { business, services } from '../data/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

interface ServicesProps {
  onSelectService: (serviceId: string) => void
  onQuoteClick: () => void
}

export function Services({ onSelectService, onQuoteClick }: ServicesProps) {
  return (
    <section id="services" className="bg-mist py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="What we clean"
              title="Cleaning that makes a visible difference."
              description="Two focused services, carried out with the same care. If you are unsure what your carpet or furniture needs, just ask."
            />
          </Reveal>
          <Reveal delay={80}>
            <button
              type="button"
              onClick={onQuoteClick}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-teal"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy/8 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-40px_rgba(20,43,59,0.5)]">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={1200}
                    height={950}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-xl bg-white/95 text-teal shadow-sm backdrop-blur">
                    <service.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="display text-[1.4rem] leading-snug">{service.title}</h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-semibold text-navy transition hover:text-teal"
                  >
                    {service.enquiryLabel}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-navy p-8 text-white">
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
              <div
                className="pointer-events-none absolute -top-20 -right-16 h-52 w-52 rounded-full bg-teal/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-[10.5px] font-semibold tracking-[0.2em] text-teal uppercase">
                  Not sure what you need?
                </p>
                <h3 className="display mt-4 text-[1.55rem] leading-snug text-white">
                  Tell us what you are dealing with.
                </h3>
                <p className="mt-4 text-[13.5px] leading-relaxed text-white/60">
                  A quick call is often the easiest way to work out whether your carpet or sofa
                  needs a professional clean — and what to expect.
                </p>
              </div>
              <div className="relative mt-8 flex flex-col gap-3">
                <a href={business.phoneHref} className="btn btn-primary w-full !py-3">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {business.phoneLocal}
                </a>
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="btn btn-ghost-light w-full !py-3"
                >
                  Send an enquiry
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
