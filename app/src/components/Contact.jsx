import {motion} from 'framer-motion'
import {FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa'

export default function Contact(){
  return (
    <section id="contact" className="py-20 container mx-auto px-4 text-center">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-semibold mb-8">Get in Touch</motion.h2>
      <div className="flex justify-center space-x-6 text-3xl">
        <a href="mailto:example@email.com" className="hover:text-cyan-400"><FaEnvelope/></a>
        <a href="https://www.linkedin.com" className="hover:text-cyan-400"><FaLinkedin/></a>
        <a href="https://github.com" className="hover:text-cyan-400"><FaGithub/></a>
      </div>
    </section>
  )
}
