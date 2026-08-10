import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileStickyBar from './components/MobileStickyBar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollProgress from './components/ScrollProgress'
import StarField from './components/StarField'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Courses = lazy(() => import('./pages/Courses'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

function PageShell({ children }) {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <MobileStickyBar />
      <FloatingWhatsApp />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <ScrollProgress />
        <PageShell>
          <Suspense
            fallback={
              <div className="flex min-h-[70vh] items-center justify-center" role="status" aria-label="Loading">
                <div className="h-12 w-12 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
              </div>
            }
          >
            <AnimatedRoutes />
          </Suspense>
        </PageShell>
      </MotionConfig>
    </BrowserRouter>
  )
}
