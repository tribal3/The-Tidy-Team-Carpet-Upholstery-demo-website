import { HeartHandshake, Layers, MessageSquareText, PoundSterling, Sofa, Sparkles } from 'lucide-react'
import type { GalleryImage, Reason, Review, Service } from '../types'

export const business = {
  name: 'The Tidy Team',
  phoneDisplay: '+44 7500 778501',
  phoneLocal: '07500 778501',
  phoneHref: 'tel:+447500778501',
  addressLine1: '13 Bondfield Road',
  addressLine2: 'Billesley, Birmingham',
  postcode: 'B13 0JA',
  country: 'United Kingdom',
  rating: 4.7,
  reviewCount: 23,
  mapsProfileUrl:
    'https://www.google.com/maps/search/?api=1&query=The+Tidy+Team+13+Bondfield+Road+Billesley+Birmingham',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=The+Tidy+Team+13+Bondfield+Road+Billesley+Birmingham+B13+0JA',
  creditUrl: 'https://tribal3.bond',
} as const

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const

export const services: Service[] = [
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    description:
      'A thorough, considered clean for carpets that have seen plenty of life. We work through the room with care, giving attention to the traffic areas and the details that change how a carpet looks and feels.',
    image: '/images/tidy-team/carpet-cleaning-01.webp',
    alt: 'A carpet cleaning machine resting on a beige carpet during a home visit',
    icon: Layers,
    enquiryLabel: 'Enquire about carpet cleaning',
  },
  {
    id: 'sofa-upholstery-cleaning',
    title: 'Sofa & Upholstery Cleaning',
    description:
      'Your sofa is one of the most-used pieces in your home. A professional clean refreshes the fabric, lifts everyday grime and helps your upholstery feel fresher again — without the upheaval of replacing it.',
    image: '/images/tidy-team/sofa-cleaning-01.webp',
    alt: 'A beige two-seat sofa standing clean against floral wallpaper after upholstery cleaning',
    icon: Sofa,
    enquiryLabel: 'Enquire about sofa cleaning',
  },
]

export const reasons: Reason[] = [
  {
    title: 'Thorough cleaning',
    description:
      'Customers regularly describe a detailed, thorough clean — the kind that makes a noticeable difference to how a carpet looks.',
    icon: Sparkles,
  },
  {
    title: 'Attention to detail',
    description:
      'The finish is in the edges, the traffic areas and the parts of a room that are easy to overlook.',
    icon: Layers,
  },
  {
    title: 'Friendly service',
    description:
      'A calm, courteous visit from someone who treats your home and your furniture with respect.',
    icon: HeartHandshake,
  },
  {
    title: 'Honest advice',
    description:
      'Straightforward guidance on what will make a difference, what to expect, and what may need a different approach.',
    icon: MessageSquareText,
  },
  {
    title: 'Good value',
    description:
      'Reviewers frequently mention fair pricing and good value for the work carried out.',
    icon: PoundSterling,
  },
]

export const reviews: Review[] = [
  {
    quote: 'Amazing quality service!',
    source: 'Google review',
  },
  {
    quote: "Can't thank him enough for his hard work and low price.",
    source: 'Google review',
  },
]

export const gallery: GalleryImage[] = [
  {
    src: '/images/tidy-team/carpet-cleaning-02.webp',
    alt: 'A brown carpet with visibly cleaner stripes where it has been professionally cleaned',
    caption: 'Carpet cleaning in progress, with the cleaned pile clearly visible',
    size: 'wide',
  },
  {
    src: '/images/tidy-team/cleaning-process-01.webp',
    alt: 'A blue carpet cleaning machine and bucket beside a carpeted doorway',
    caption: 'Equipment in place at a carpeted doorway',
    size: 'tall',
  },
  {
    src: '/images/tidy-team/sofa-cleaning-01.webp',
    alt: 'A beige two-seat sofa cleaned and standing against floral wallpaper',
    caption: 'Sofa upholstery after a professional clean',
    size: 'standard',
  },
  {
    src: '/images/tidy-team/carpet-cleaning-01.webp',
    alt: 'A carpet cleaning machine on a beige carpet in a home',
    caption: 'Working through a bedroom carpet',
    size: 'standard',
  },
]
