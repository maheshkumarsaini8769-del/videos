import { usePageMeta } from '../hooks/usePageMeta'
import ContactSection from '../components/ContactSection'
import EnquiryForm from '../components/EnquiryForm'
import CTASection from '../components/CTASection'

export default function Contact() {
  usePageMeta({
    title: 'Contact Us | Squad Digital Classes — Sikar',
    description:
      'Contact Squad Digital Classes (SDC), Sikar. Call 7424986155. Address: Badari Vihar Ke Samne, First Floor, Sikar. Enquire about Digital Marketing, Graphic Design, Video Editing and more.',
  })

  return (
    <>
      <section className="section-pad relative pt-36 md:pt-44">
        <div className="container-sdc">
          <EnquiryForm />
        </div>
      </section>
      <ContactSection />
      <CTASection />
    </>
  )
}
