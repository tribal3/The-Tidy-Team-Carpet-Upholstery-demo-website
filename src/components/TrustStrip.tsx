import { Layers, MessagesSquare, Sofa, Star } from 'lucide-react'
import { business } from '../data/site'

const signals = [
  { value: `${business.rating} / 5`, label: 'Google rating', icon: Star },
  { value: `${business.reviewCount}`, label: 'Customer reviews', icon: MessagesSquare },
  { value: 'Carpet cleaning', label: 'Cleaned with care', icon: Layers },
  { value: 'Sofa & upholstery', label: 'Fabric furniture, refreshed', icon: Sofa },
]

export function TrustStrip() {
  return (
    <section aria-label="Reputation and services" className="border-y border-white/5 bg-navy text-white">
      <div className="shell grid grid-cols-2 gap-x-4 gap-y-7 py-8 sm:gap-6 lg:grid-cols-4 lg:py-9">
        {signals.map((signal, index) => (
          <div
            key={signal.label}
            className={`flex items-center gap-3.5 ${
              index > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''
            }`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-teal">
              <signal.icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.15rem] leading-tight font-bold text-white">
                {signal.value}
              </span>
              <span className="mt-0.5 block text-[11.5px] leading-snug text-white/55">
                {signal.label}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
