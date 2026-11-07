import { Check, Quote } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const facts = [
  'Based in Billesley, Birmingham',
  'Carpet and upholstery cleaning',
  'Clear, honest advice',
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="About The Tidy Team"
            title={
              <span id="about-title">
                Careful cleaning, from a local team.
              </span>
            }
            description="A carpet and upholstery cleaning service built around the details that make a room feel properly clean again."
          />
          <div className="mt-9 hidden overflow-hidden rounded-2xl bg-mist p-7 lg:block">
            <Quote className="h-7 w-7 text-teal/50" aria-hidden="true" />
            <p className="mt-4 font-display text-xl leading-snug font-semibold text-navy">
              A clean carpet changes how a whole room feels.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              It is one of the simplest ways to refresh a home without replacing what is already
              there.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-5 text-[0.98rem] leading-relaxed text-muted text-pretty">
            <p>
              The Tidy Team is a carpet and upholstery cleaning service based in Billesley,
              Birmingham. The approach is straightforward: arrive when arranged, take care in your
              home, and clean thoroughly enough that the difference is easy to see.
            </p>
            <p>
              Customers regularly mention the same things — a friendly service, a thorough clean,
              helpful advice and good value. Sofa and upholstery cleaning is mentioned too, and it
              is a natural companion to having the carpets done.
            </p>
            <p>
              Because the business is local, getting in touch is simple. Call, explain what needs
              cleaning, and arrange a time to suit you.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-3 rounded-xl border border-navy/8 bg-white px-4 py-3.5 text-[13px] font-medium text-navy"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky text-teal">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-mist p-6">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white font-display text-xs font-extrabold text-teal ring-1 ring-navy/5">
              4.7
            </span>
            <p className="text-[13px] leading-relaxed text-muted">
              Rated <strong className="font-semibold text-navy">4.7 out of 5</strong> from 23
              reviews on Google. Read the reviews for yourself on the business&rsquo;s Maps listing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
