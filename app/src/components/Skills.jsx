import {motion} from 'framer-motion'
import {SiPython,SiReact,SiTensorflow,SiFastapi} from 'react-icons/si'

const skills=[
  {icon:SiPython,label:'Python'},
  {icon:SiReact,label:'React'},
  {icon:SiTensorflow,label:'TensorFlow'},
  {icon:SiFastapi,label:'FastAPI'},
]

export default function Skills(){
  return (
    <section id="skills" className="py-20 container mx-auto px-4">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-semibold mb-8">Skills</motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s,idx)=> {
          const Icon=s.icon
          return (
            <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="flex flex-col items-center bg-gray-800 p-4 rounded-md">
              <Icon className="text-3xl text-cyan-400"/>
              <span className="mt-2 text-sm">{s.label}</span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
