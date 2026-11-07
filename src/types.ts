import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  image: string
  alt: string
  icon: LucideIcon
  enquiryLabel: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption: string
  size: 'wide' | 'tall' | 'standard'
}

export interface Review {
  quote: string
  source: string
}

export interface Reason {
  title: string
  description: string
  icon: LucideIcon
}

export interface EnquiryValues {
  name: string
  phone: string
  email: string
  service: string
  message: string
}
