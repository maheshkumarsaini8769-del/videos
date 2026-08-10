import { usePageMeta } from '../hooks/usePageMeta'
import Hero from '../components/Hero'
import CampaignBanner from '../components/CampaignBanner'
import SecondaryBanner from '../components/SecondaryBanner'
import CareerPanel from '../components/CareerPanel'
import LimitedSeat from '../components/LimitedSeat'
import CourseGrid from '../components/CourseGrid'
import Benefits from '../components/Benefits'
import CompanyStrip from '../components/CompanyStrip'
import CTASection from '../components/CTASection'
import ContactSection from '../components/ContactSection'
import EnquiryForm from '../components/EnquiryForm'

export default function Home() {
  usePageMeta({})

  return (
    <>
      <Hero />
      <CampaignBanner />
      <SecondaryBanner />
      <CareerPanel />
      <LimitedSeat />
      <CourseGrid />
      <Benefits />
      <CompanyStrip />
      <CTASection />
      <ContactSection />
      <EnquiryForm />
    </>
  )
}
