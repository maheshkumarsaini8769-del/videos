import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { courses, SITE } from '../data/courses'
import Reveal from './Reveal'

const PHONE_REGEX = /^[6-9]\d{9}$/

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const selectedCourse = useWatch({ control, name: 'course' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      const body = new FormData()
      body.append('form-name', 'enquiry')
      body.append('name', data.name)
      body.append('phone', data.phone)
      body.append('course', data.course)
      body.append('message', data.message || '')
      await fetch('/', { method: 'POST', body })
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 7000)
    }
  }

  const fieldClass = (invalid) =>
    `w-full rounded-xl border bg-navy-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:outline-none ${
      invalid ? 'border-flame/60' : 'border-white/10 focus:border-gold/60'
    }`

  return (
    <section id="enquiry" className="section-pad relative">
      <div className="container-sdc">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Enquiry"
            title={
              <>
                Interested in <span className="text-gradient-gold">Joining?</span>
              </>
            }
            subtitle="Fill in the form — our team will contact you soon."
          />

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              name="enquiry"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-navy-800/60 p-6 shadow-card sm:p-9"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="enquiry" />
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Name <span className="text-flame">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  className={fieldClass(!!errors.name)}
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-xs text-flame">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Phone <span className="text-flame">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter mobile number"
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                  className={fieldClass(!!errors.phone)}
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: { value: PHONE_REGEX, message: 'Enter a valid Indian mobile number (10 digits)' },
                  })}
                />
                {errors.phone && (
                  <p role="alert" className="mt-1.5 text-xs text-flame">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="course" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Course <span className="text-flame">*</span>
                </label>
                <select
                  id="course"
                  defaultValue=""
                  className={`${fieldClass(!!errors.course)} appearance-none ${selectedCourse ? 'text-white' : 'text-slate-500'}`}
                  {...register('course', { required: 'Please select a course' })}
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.title} className="bg-navy-800 text-white">
                      {c.number}. {c.title}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p role="alert" className="mt-1.5 text-xs text-flame">{errors.course.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Message <span className="text-slate-500">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Ask us anything…"
                  className={`${fieldClass(false)} resize-none`}
                  {...register('message')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-flame w-full !py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={17} className="animate-spin" /> Submitting…
                  </>
                ) : (
                  <>
                    <Send size={17} /> ENQUIRE NOW
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    key="success"
                    role="status"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300"
                  >
                    <CheckCircle2 size={16} /> Thank you! Your enquiry has been submitted.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="error"
                    role="alert"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-flame/30 bg-flame/10 px-4 py-3 text-sm font-medium text-flame-400"
                  >
                    <TriangleAlert size={16} /> Could not submit right now — please call us at {SITE.phone}.
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="text-center text-xs text-slate-500">
                Or call us directly — we will respond to every enquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
