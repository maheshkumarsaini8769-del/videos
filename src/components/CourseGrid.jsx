import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import CourseCard from './CourseCard'
import { courses } from '../data/courses'
import Reveal from './Reveal'

export default function CourseGrid({ compact = false }) {
  return (
    <section id="courses" className="section-pad relative">
      <div className="container-sdc">
        <SectionHeading
          eyebrow="Our Programs"
          title={
            <>
              Our <span className="text-gradient-gold">8 Powerful Courses</span>
            </>
          }
          subtitle="Practical, project-based training in the digital skills that matter today — designed for students and beginners at Sikar."
          stars
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {compact && (
          <Reveal className="mt-12 text-center">
            <Link to="/courses" className="btn-ghost">
              View All Courses <ArrowRight size={16} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
