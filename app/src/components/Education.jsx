import {motion as Motion} from 'framer-motion'

export default function Education(){
  return (
    <section id="education" className="py-20 container mx-auto px-4">
      <Motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="neon text-3xl font-semibold mb-4">Credentials</Motion.h2>
      <Motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-lg">B.E. in Artificial Intelligence & Machine Learning – GM Institute of Technology, 2020–2024</Motion.p>
    </section>
  )
}
