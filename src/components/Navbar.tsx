import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business, navigation } from '../data/site'
import { Logo } from './ui/Logo'

interface NavbarProps {
  onQuoteClick: () => void
}

export function Navbar({ onQuoteClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleQuoteClick = () => {
    setOpen(false)
    onQuoteClick()
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || open ? 'border-navy/10 shadow-[0_10px_30px_-24px_rgba(20,43,59,0.6)]' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4 lg:gap-6">
        <a href="#home" className="rounded-lg" aria-label="The Tidy Team — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[13.5px] font-medium whitespace-nowrap text-navy/70 transition hover:text-navy"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          <a
            href={business.phoneHref}
            aria-label={`Call The Tidy Team on ${business.phoneDisplay}`}
            className="flex items-center gap-2 text-[13px] font-semibold text-navy transition hover:text-teal"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-sky text-teal">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="hidden whitespace-nowrap xl:inline">{business.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={handleQuoteClick}
            className="btn btn-primary !px-4 !py-3 text-[13px] whitespace-nowrap xl:!px-5"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition hover:bg-mist lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-navy/10 bg-white px-5 pt-4 pb-6 sm:px-8 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/5 py-4 font-display text-lg font-semibold text-navy transition hover:text-teal"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <button type="button" onClick={handleQuoteClick} className="btn btn-primary w-full">
              Request a Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a href={business.phoneHref} className="btn btn-outline w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phoneLocal}
            </a>
          </div>
          <p className="mt-5 text-center text-[11px] text-muted">
            {business.addressLine1}, {business.addressLine2}, {business.postcode}
          </p>
        </div>
      ) : null}
    </header>
  )
}
