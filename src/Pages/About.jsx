import NavContext from "../Components/Context";
import { useContext } from "react";

function About() {
    const { darkmode } = useContext(NavContext);
    
    return (
        <div className={`flex w-full h-full justify-center items-center ${darkmode ? "bg-[#1e1e1e] text-white" : "bg-[#FEFEE2]" }`}>
            <p className="w-48 text-3xl md:w-full md:text-center">
                A tool for lazy watchers to choose an episode....
            </p>
        </div>
    )
}

export default About;

