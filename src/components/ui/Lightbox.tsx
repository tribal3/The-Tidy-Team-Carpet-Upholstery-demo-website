import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'
import type { GalleryImage } from '../../types'

interface LightboxProps {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const isOpen = index !== null

  const goPrev = useCallback(() => {
    if (index === null) return
    onNavigate((index - 1 + images.length) % images.length)
  }, [index, images.length, onNavigate])

  const goNext = useCallback(() => {
    if (index === null) return
    onNavigate((index + 1) % images.length)
  }, [index, images.length, onNavigate])

  useEffect(() => {
    if (!isOpen) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previouslyFocused?.focus()
    }
  }, [isOpen, onClose, goPrev, goNext])

  if (index === null) return null

  const image = images[index]
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-navy-deep/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${image.caption}`}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
          {index + 1} / {images.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
          aria-label="Close gallery"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        <figure className="flex h-full max-h-full w-full max-w-4xl flex-col items-center justify-center">
          <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-navy-deep/60 text-white transition hover:border-white/50 hover:bg-white/10 sm:-left-4"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[62vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl sm:max-h-[68vh]"
            />
            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-navy-deep/60 text-white transition hover:border-white/50 hover:bg-white/10 sm:-right-4"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <figcaption className="mt-5 max-w-xl text-center text-sm leading-relaxed text-white/70">
            {image.caption}
            <span className="mt-1 block text-xs text-white/40">
              Photograph supplied by The Tidy Team
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
