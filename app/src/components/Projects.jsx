import {motion as Motion} from 'framer-motion'

const projects = [
  {title:'AI Slide Generator Agent',desc:'Automated PowerPoint creation using Generative AI.'},
  {title:'Real Estate Data AI Pipeline',desc:'Web scraping and RAG system deployed on GCP.'},
  {title:'Sign Language Interpreter',desc:'Real-time sign language recognition using deep learning.'},
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 container mx-auto px-4">
      <Motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="neon text-3xl font-semibold mb-8">Obsession-Worthy Builds</Motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p,idx)=>(
          <Motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-gray-800 p-4 rounded-md shadow">
            <h3 className="text-xl font-medium mb-2">{p.title}</h3>
            <p className="text-sm text-gray-300">{p.desc}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}
