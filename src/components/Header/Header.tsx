import React,{useState} from 'react'
interface headerProps{
  Links: {
    name: string,
    link: string
  }[]
  scrollToView() : void
}
const Header: React.FC<headerProps> = ({Links, scrollToView}) => {

  const [isToggle, setIsToggle] = useState<boolean>(true);
  const handleToggleMenu = ()=>{
    setIsToggle(!isToggle);
    
  }

  return (
    <header className='shadow-md'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 max-w-screen-xl mx-auto">
  <div className=" flex flex-wrap items-center justify-between p-4">
    <a href="/" className="flex items-center">
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Trung.</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleToggleMenu}>
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={`${isToggle? "hidden": ""}  w-full  md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
        {Links.map((item, id) => (
          <li key={id}><a 
          onClick={scrollToView}
            className="block py-2 pl-3 pr-4 rounded md:p-0  hover:text-white hover:bg-primary hover:md:text-primary hover:md:bg-white"  aria-current="page">{item.name}</a></li>
        ))}
      </ul>
    </div>
  </div>
</nav>
</header>
  )
}

export default Header