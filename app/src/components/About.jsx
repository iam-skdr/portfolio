import {motion as Motion} from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <Motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="neon text-3xl font-semibold mb-4">Meet the Mind</Motion.h2>
      <Motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="leading-relaxed text-lg">
        AI engineer with hands-on experience building end-to-end intelligent systems. Skilled in integrating React frontends with Python backends and deploying scalable solutions.
      </Motion.p>
    </section>
  )
}
