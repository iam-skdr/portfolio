import {motion} from 'framer-motion'
import {FaDownload} from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center space-y-6" >
      <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl md:text-5xl font-bold">V. Sri Krishna Deva Rayudu</motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:0.8}} className="text-xl md:text-2xl text-cyan-400">Full-Stack AI Engineer specializing in Generative AI</motion.p>
      <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{delay:0.8}}>
        <a href="/Resume.pdf" className="inline-flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-md text-white" download>
          <FaDownload className="mr-2"/> Download Resume
        </a>
      </motion.div>
    </section>
  )
}
