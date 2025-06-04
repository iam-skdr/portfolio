import {motion} from 'framer-motion'

export default function Resume(){
  return (
    <section id="resume" className="py-20 container mx-auto px-4">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-semibold mb-4">Resume</motion.h2>
      <div className="w-full h-96">
        <iframe src="/Resume.pdf" className="w-full h-full border" title="Resume"></iframe>
      </div>
    </section>
  )
}
