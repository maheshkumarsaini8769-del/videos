const TEXT = 'AB NAYE JMANAE KE SATH NAYE MEDIA KO JAANE'

export default function SecondaryBanner() {
  return (
    <section className="relative py-8 md:py-10" aria-label="Announcement">
      <div className="container-sdc">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center">
          <p className="font-display text-lg font-semibold tracking-wide text-slate-100 md:text-2xl">
            {TEXT}
          </p>
        </div>
      </div>
    </section>
  )
}
