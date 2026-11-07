import { CheckCircle2, Info, Phone, Send } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { business } from '../data/site'
import type { EnquiryValues } from '../types'

const initialValues: EnquiryValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

const serviceOptions = [
  { value: 'carpet-cleaning', label: 'Carpet cleaning' },
  { value: 'sofa-upholstery-cleaning', label: 'Sofa & upholstery cleaning' },
  { value: 'both', label: 'Both carpets and upholstery' },
  { value: 'not-sure', label: 'Not sure yet — please advise' },
]

type Errors = Partial<Record<keyof EnquiryValues, string>>

interface EnquiryFormProps {
  presetService: string | null
}

export function EnquiryForm({ presetService }: EnquiryFormProps) {
  const [values, setValues] = useState<EnquiryValues>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [lastPreset, setLastPreset] = useState<string | null>(null)

  // Adopt a service chosen from the services section without losing anything already typed.
  if (presetService && presetService !== lastPreset) {
    setLastPreset(presetService)
    setValues((current) => ({ ...current, service: presetService }))
    setErrors((current) => ({ ...current, service: undefined }))
    setSubmitted(false)
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    const digits = values.phone.replace(/\D/g, '')

    if (values.name.trim().length < 2) {
      next.name = 'Please enter your full name.'
    }
    if (!/^[+()\d][\d\s()-]{6,}$/.test(values.phone.trim()) || digits.length < 7) {
      next.phone = 'Please enter a phone number we can reach you on.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.service) {
      next.service = 'Please choose the service you are interested in.'
    }
    if (values.message.trim().length < 10) {
      next.message = 'Please add a little detail — 10 characters or more.'
    }

    return next
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(`enquiry-${firstError}`)?.focus()
      return
    }

    setSubmitted(true)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
  }

  const inputClass = (field: keyof EnquiryValues) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink transition placeholder:text-muted/60 focus:outline-none focus:ring-4 focus:ring-teal/10 ${
      errors[field] ? 'border-red-400 focus:border-red-400' : 'border-navy/12 focus:border-teal'
    }`

  const selectedService = serviceOptions.find((option) => option.value === values.service)?.label

  if (submitted) {
    return (
      <div className="flex h-full flex-col justify-center rounded-3xl bg-white p-7 ring-1 ring-navy/8 sm:p-9">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky text-teal">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="display mt-6 text-2xl">
          Thanks{values.name.trim() ? `, ${values.name.trim().split(' ')[0]}` : ''}.
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
          Your details are complete. This is a demonstration website, so nothing has{' '}
          <strong className="font-semibold text-navy">been sent</strong> to The Tidy Team.
        </p>

        <dl className="mt-6 space-y-2.5 rounded-2xl bg-mist p-5 text-[13px]">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Service</dt>
            <dd className="text-right font-medium text-navy">{selectedService}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Phone</dt>
            <dd className="text-right font-medium text-navy">{values.phone}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Email</dt>
            <dd className="max-w-[65%] truncate text-right font-medium text-navy">{values.email}</dd>
          </div>
        </dl>

        <div className="mt-6 rounded-2xl border border-teal/20 bg-sky/60 p-5">
          <p className="text-[12.5px] leading-relaxed text-navy/75">
            To reach The Tidy Team for real, call{' '}
            <a href={business.phoneHref} className="font-semibold text-navy underline decoration-teal/50 underline-offset-2">
              {business.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={business.phoneHref} className="btn btn-primary !py-3 text-[13px]">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call The Tidy Team
          </a>
          <button type="button" onClick={reset} className="btn btn-outline !py-3 text-[13px]">
            Start another enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-6 ring-1 ring-navy/8 sm:p-8"
      aria-label="Quote enquiry form"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="display text-[1.55rem]">Request a quote</h3>
          <p className="mt-1.5 text-[12.5px] text-muted">Tell us a little about the job.</p>
        </div>
        <span className="rounded-full bg-mist px-3 py-1 text-[9.5px] font-semibold tracking-[0.14em] text-muted uppercase">
          Demo
        </span>
      </div>

      <div className="mt-5 flex gap-3 rounded-xl bg-sky/70 p-4">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
        <p className="text-[12px] leading-relaxed text-navy/70">
          This concept website does not send enquiries. Please call{' '}
          <a href={business.phoneHref} className="font-semibold text-navy underline decoration-teal/50 underline-offset-2">
            {business.phoneDisplay}
          </a>{' '}
          to contact the business.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="block text-[12px] font-semibold text-navy">
            Full name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            placeholder="Your name"
            className={`mt-2 ${inputClass('name')}`}
          />
          {errors.name ? (
            <p id="error-name" role="alert" className="mt-1.5 text-[11.5px] text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="enquiry-phone" className="block text-[12px] font-semibold text-navy">
            Phone number
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            placeholder="07500 000000"
            className={`mt-2 ${inputClass('phone')}`}
          />
          {errors.phone ? (
            <p id="error-phone" role="alert" className="mt-1.5 text-[11.5px] text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-email" className="block text-[12px] font-semibold text-navy">
            Email address
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            placeholder="you@example.co.uk"
            className={`mt-2 ${inputClass('email')}`}
          />
          {errors.email ? (
            <p id="error-email" role="alert" className="mt-1.5 text-[11.5px] text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-service" className="block text-[12px] font-semibold text-navy">
            Service required
          </label>
          <select
            id="enquiry-service"
            name="service"
            value={values.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'error-service' : undefined}
            className={`mt-2 pr-9 ${inputClass('service')} ${
              values.service ? 'text-ink' : 'text-muted/70'
            }`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="error-service" role="alert" className="mt-1.5 text-[11.5px] text-red-600">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-baseline justify-between gap-3">
            <label htmlFor="enquiry-message" className="block text-[12px] font-semibold text-navy">
              Message
            </label>
            <span className="text-[10.5px] text-muted">{values.message.length} / 1000</span>
          </div>
          <textarea
            id="enquiry-message"
            name="message"
            rows={4}
            maxLength={1000}
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'error-message' : undefined}
            placeholder="Tell us what needs cleaning, how many rooms or items, and anything we should know."
            className={`mt-2 resize-y ${inputClass('message')}`}
          />
          {errors.message ? (
            <p id="error-message" role="alert" className="mt-1.5 text-[11.5px] text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full !py-3.5">
        Send enquiry
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-center text-[10.5px] leading-relaxed text-muted">
        Demonstration form only &middot; no data is sent or stored.
      </p>
    </form>
  )
}
