import { Camera, Expand } from 'lucide-react'
import { useState } from 'react'
import { gallery } from '../data/site'
import { Lightbox } from './ui/Lightbox'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const sizeClasses: Record<string, string> = {
  wide: 'h-64 sm:col-span-2 sm:h-80 lg:col-span-7 lg:h-[26rem]',
  tall: 'h-64 sm:col-span-2 sm:h-80 lg:col-span-5 lg:h-[26rem]',
  standard: 'h-56 sm:col-span-1 lg:col-span-6 lg:h-[19rem]',
}

export function ResultsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="work" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Our work"
              title="See the difference a professional clean can make."
              description="Real carpets, real upholstery, photographed during the work. A small, honest selection rather than a wall of stock imagery."
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="flex items-center gap-2 text-[12px] font-medium text-muted">
              <Camera className="h-4 w-4 text-teal" aria-hidden="true" />
              Photographs supplied by The Tidy Team
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {gallery.map((image, index) => (
            <Reveal
              key={`${image.src}-${index}`}
              delay={(index % 3) * 80}
              className={sizeClasses[image.size] ?? sizeClasses.standard}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-mist text-left ring-1 ring-navy/8"
                aria-label={`View larger: ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={950}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span
                  className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/10 to-transparent opacity-70 transition group-hover:opacity-90"
                  aria-hidden="true"
                />
                <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <span className="rounded-lg bg-navy/60 px-3 py-1.5 text-[11.5px] leading-snug font-medium text-white backdrop-blur-sm">
                    {image.caption}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-[11.5px] text-muted">
          Authentic photographs from the business&rsquo;s Google Business Profile. Before-and-after
          comparisons are only shown when genuine paired photographs are available.
        </p>
      </div>

      <Lightbox
        images={gallery}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  )
}
