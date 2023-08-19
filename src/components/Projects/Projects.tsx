import { useState } from "react";
import projectsData from "../../data/projects.json"
import ProjectModal from "../Project-modal/ProjectModal";
interface projectsProp{
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const Projects:React.FC<projectsProp> = ({showModal, setShowModal}) => {
  const [project, setProject] = useState<{id:number;name:string; description:string; demo:string; source:string; image:string}>({
    id: 0,
    name: "",
    description: "",
    demo: "",
    source: "",
    image:""
  })
  const handleClick = (project:{id:number;name:string; description:string; demo:string; source:string,image:string}) =>{
    setShowModal(true)
    setProject(project)
  }
  
  return (
    <div id="projects">
    <div className='max-w-screen-xl mx-auto py-10'>
        <h1 className='text-center text-4xl sm:text-6xl pb-32'>My Projects</h1>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {projectsData.map((project)=>(
              <div key={project.id} className="">
                <div onClick={() => handleClick(project)}   className="w-full h-full rounded-xl relative hover:-translate-y-6 transition-all cursor-pointer shadow-lg group">
                    <img className="rounded-xl object-cover object-center w-full h-full mx-auto " src={project.image} alt="" />
                </div>
                
        
                </div>
            ))}
            {showModal ? (
          <ProjectModal project={project}
           showModal={showModal } setShowModal= {setShowModal}/>
        ):null}
             
        </div>
       
    </div>
    </div>
  )
}

export default Projects