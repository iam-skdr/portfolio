import {motion as Motion} from 'framer-motion'
import {FaBolt} from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center space-y-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <Motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="neon text-4xl md:text-5xl font-extrabold text-cyan-400">Crave the Future</Motion.h1>
      <Motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:0.8}} className="text-xl md:text-2xl text-gray-300">Scroll once. Want more.</Motion.p>
      <Motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{delay:0.8}}>
        <a href="#projects" className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-md text-white font-semibold animate-pulse" >
          <FaBolt className="mr-2"/> Can't Resist
        </a>
      </Motion.div>
    </section>
  )
}
