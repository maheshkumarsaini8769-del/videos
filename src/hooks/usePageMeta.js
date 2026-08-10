import { useEffect } from 'react'

const DEFAULT_TITLE = 'Squad Digital Classes | Learn Digital Skills & Build Your Career'
const DEFAULT_DESCRIPTION =
  'Squad Digital Classes (SDC), Sikar — Learn Digital Marketing, Graphic Design, Video Editing, Video Shooting, Personality Development, Advanced AI Tools, Modeling Skills and Content Creation with 100% practical training.'

export function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title
    } else {
      document.title = DEFAULT_TITLE
    }
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description || DEFAULT_DESCRIPTION)
    }
  }, [title, description])
}
