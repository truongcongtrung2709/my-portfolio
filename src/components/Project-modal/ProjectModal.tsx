import React from 'react'
//icons
import { AiOutlineClose } from "react-icons/ai";
export interface projectModalProps{
  projects: projects[];
}
export interface projects{
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  project:{
    img:string,
    id:number,
    name: string,
    description: string,
    demo: string, 
    source:string,
  }
}
const ProjectModal:React.FC<projects> = ({ 
  project,
   setShowModal}: projects) => {
    
  
  return (
    <>
    <div id='projectModal'
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {project.name}
                  </h3>
                  <button
                    className=""
                    onClick={() => setShowModal(false)}
                  >                 
                    <AiOutlineClose/>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img src={project.img} alt="" />
                  {project.description}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                    className="bg-red text-white rounded-md p-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                    <a className="bg-primary text-white rounded-md p-2" href={project.source} target="_blank">Source</a>
                  <a className="bg-green text-white rounded-md p-2" href={project.demo} target="_blank">Demo</a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ProjectModal