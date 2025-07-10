import {motion as Motion} from 'framer-motion'

const experiences = [
  {role:'AI Engineer',company:'SLK Software',period:'2023-2024',details:['Developed generative slide deck creator','Integrated React with FastAPI','Deployed pipelines on Vertex AI']},
  {role:'Head AI Research Intern',company:'Example Org',period:'2022',details:['Led research team','Mentored interns']},
]

export default function Experience(){
  return (
    <section id="experience" className="py-20 container mx-auto px-4">
      <Motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="neon text-3xl font-semibold mb-8">Battle Scars</Motion.h2>
      <div className="space-y-6">
        {experiences.map((exp,idx)=> (
          <Motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-gray-800 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium">{exp.role} - {exp.company}</h3>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-300">
              {exp.details.map((d,i)=>(<li key={i}>{d}</li>))}
            </ul>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}
