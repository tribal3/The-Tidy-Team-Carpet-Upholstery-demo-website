import { ArrowUpRight, MapPin, Navigation, Phone, Star } from 'lucide-react'
import { business, navigation, services } from '../data/site'
import { Logo } from './ui/Logo'

const currentYear = new Date().getFullYear()

export function Footer() {
  const year = currentYear

  return (
    <footer className="bg-navy-deep text-white/55">
      <div className="shell pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.1fr] lg:gap-12">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[12.5px] leading-relaxed">
              Professional carpet and upholstery cleaning for homes in Birmingham, based in
              Billesley.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11.5px] font-medium text-white/70">
              <Star className="h-3.5 w-3.5 text-[#F2B03D]" fill="currentColor" strokeWidth={0} aria-hidden="true" />
              {business.rating} / 5 from {business.reviewCount} Google reviews
            </p>
          </div>

          <div>
            <h3 className="text-[10.5px] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[12.5px] transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10.5px] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-[12.5px] transition hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-[12.5px] transition hover:text-white">
                  Request a quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10.5px] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-[12.5px]">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.mapsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                  <span>
                    {business.addressLine1}
                    <br />
                    {business.addressLine2}
                    <br />
                    {business.postcode}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Navigation className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                  Google Maps directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved. Concept website — enquiries are not
            delivered.
          </p>
          <a
            href={business.creditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-white/45 transition hover:text-white"
          >
            Website Concept Designed by{' '}
            <span className="font-display font-bold tracking-tight text-white/75 transition group-hover:text-teal">
              TRIBAL&sup3;
            </span>
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
