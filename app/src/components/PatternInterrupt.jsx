import {useEffect, useState} from 'react'
import {motion as Motion} from 'framer-motion'

export default function PatternInterrupt() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 5000)
    return () => clearTimeout(t)
  }, [])
  if (!show) return null
  return (
    <Motion.div initial={{opacity:0}} animate={{opacity:1}} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <Motion.div initial={{scale:0.8}} animate={{scale:1}} className="bg-gray-900 border border-cyan-400 p-8 rounded-md text-center space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold text-cyan-400">Ready to Level Up?</h3>
        <p className="text-gray-200">Hit the button and let's build something unforgettable.</p>
        <a href="#contact" className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-md text-white font-semibold">I'm In</a>
      </Motion.div>
    </Motion.div>
  )
}
