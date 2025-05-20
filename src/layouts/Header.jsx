import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import NavContext from '../Components/Context';

function NavBar() {
    const { darkmode, setDarkMode } = useContext(NavContext);
    const [position, setPosition] = useState("/");

    return (
        <header className={`flex w-full h-10 items-center justify-between pl-2 pr-2 ${ darkmode ? "bg-black" : "bg-white" }`}>
            <NavLink to={"/"}><img src="./assets/images/logoSP.png" alt="Not Found" className="flex w-20 h-16 py-1" onClick={() => setPosition("/")} /></NavLink>
                {
                    position === "/"
                    ? (
                        <div className="flex gap-3">
                            <div className={`flex rounded-3xl w-[5.5rem] justify-center items-center`}>  
                                <NavLink to={"/"} className={`font-Lucky ${ position === "/" ? "text-yellow-500" : darkmode ? "text-white" : "text-black" }`} onClick={() => setPosition("/")}>Randomizer</NavLink>
                            </div>
                            <div className={`flex rounded-3xl w-[5.5rem] justify-center items-center`}>  
                                <NavLink to={"/about"} className={`font-Lucky ${ position === "/about" ? "text-yellow-500" : darkmode ? "text-white" : "text-black" }`} onClick={() => setPosition("/about")}>About</NavLink>
                            </div>
                        </div>
                    )

                    : (
                        <div className="flex gap-3">
                            <div className={`flex rounded-3xl w-[5.5rem] justify-center items-center`}>  
                                <NavLink to={"/"} className={`font-Lucky ${ position === "/" ? "text-yellow-500" : darkmode ? "text-white" : "text-black" }`} onClick={() => setPosition("/")}>Randomizer</NavLink>
                            </div>
                            <div className={`flex rounded-3xl w-[5.5rem] justify-center items-center`}>  
                                <NavLink to={"/about"} className={`font-Lucky ${ position === "/about" ? "text-yellow-500" : darkmode ? "text-white" : "text-black" }`} onClick={() => setPosition("/about")}>About</NavLink>
                            </div>
                        </div>
                    )
                }
            

            <button onClick={() => setDarkMode(!darkmode)} className="flex justify-center items-center left-48 rounded-full h-10 w-10 md:hover:bg-yellow-400">
            {
                darkmode 
                ? <img src="./assets/images/soleil.png" alt="Image Not Found" className="w-8 h-8 md:hover:w-10 md:hover:h-10 md:hover:rotate-180 md:transition-transform md:duration-1000" /> 
                : <img className="w-8 h-8 md:hover:w-10 md:hover:h-10 md:hover:rotate-180 md:transition-transform md:duration-1000" src="./assets/images/lune.png" alt="Image Not Found" />
            }
            </button>
        </header>
    )
}

export default NavBar;