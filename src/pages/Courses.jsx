import { usePageMeta } from '../hooks/usePageMeta'
import SectionHeading from '../components/SectionHeading'
import CourseCard from '../components/CourseCard'
import CTASection from '../components/CTASection'
import EnquiryForm from '../components/EnquiryForm'
import { courses } from '../data/courses'

export default function Courses() {
  usePageMeta({
    title: 'All Courses | Squad Digital Classes — Sikar',
    description:
      'Explore all 8 courses at Squad Digital Classes, Sikar: Digital Marketing, Graphic Design, Video Editing, Video Shooting, Personality Development, Advanced AI Tools, Modeling Skills and Content Creation. 2–3 month practical programs.',
  })

  return (
    <>
      <section className="section-pad relative pt-36 md:pt-44">
        <div className="container-sdc">
          <SectionHeading
            eyebrow="All Programs"
          title={
            <>
              Our <span className="text-gradient-gold">8 Powerful Courses</span>
            </>
          }
          subtitle="Every course is built on practical projects and real-world skills — duration 2–3 months."
            stars
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <EnquiryForm />
    </>
  )
}
