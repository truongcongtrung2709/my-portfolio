import skillsData from "../../data/skills.json"
const Skills = () => {



  return (
    <div className='bg-background mt-32'>
    <div className='max-w-screen-xl mx-auto py-10'>
        <h1 className='text-center text-4xl sm:text-6xl pb-32'>My Skills</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 ">
            {skillsData.map((skill,index)=>(
                <div key={index} className="mx-auto ">
                    <img className="w-32 mx-auto hover:scale-125 transition-all" src={skill.image} alt="" />
                    <h3 className="text-center text-2xl py-3">{skill.name}</h3>
                    <p className="text-center text-lg">{skill.description}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Skills