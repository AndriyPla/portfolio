import React from 'react'
import SkillMeter from '../../src/components/SkillMeter'
import Timeline from '../../src/components/Timeline'

const skills = {
  Programming: [
    {name:'Python', level:5},
    {name:'C++', level:4},
    {name:'Arduino', level:4}
  ],
  CAD: [
    {name:'Onshape', level:4},
    {name:'SolidWorks', level:3}
  ],
  Robotics: [
    {name:'ROS/Control', level:4},
    {name:'Sensors', level:4}
  ],
  Manufacturing: [
    {name:'3D Printing', level:5},
    {name:'CNC/Shop', level:3}
  ],
  Leadership: [
    {name:'Team Lead', level:4},
    {name:'Project Management', level:3}
  ]
}

const timeline = [
  {range:'2024 - Present', title:'Robotics Team Captain', role:'Captain', bullets:['Led 10-member team','Managed design and testing cycles']},
  {range:'2023 - 2024', title:'Intern — Local Lab', role:'Intern', bullets:['Assisted with fabrication','Wrote test scripts for hardware']}
]

export default function Experience(){
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Experience & Skills</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Skills & Tools</h3>
          <div className="mt-4 space-y-4">
            {Object.entries(skills).map(([cat,items])=> (
              <div key={cat}>
                <div className="text-sm text-slate-500">{cat}</div>
                <div className="mt-2 space-y-2">
                  {(items as any).map((s:any)=> (
                    <div key={s.name} className="flex items-center justify-between">
                      <div>{s.name}</div>
                      <SkillMeter level={s.level} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Tech Stack / Tools I Use</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Python','C++','Onshape','SolidWorks','Git','Linux','Arduino','Raspberry Pi'].map(t=> (
              <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Experience Timeline</h3>
        <div className="mt-4">
          <Timeline items={timeline} />
        </div>
      </section>
    </div>
  )
}
