import NavContext from "../Components/Context";
import { useContext } from "react";

function ErrorNotFound() {
    const { darkmode } = useContext(NavContext);

    return (
        <div className={`flex flex-col gap-10 w-full h-full justify-center items-center ${darkmode ? "bg-[#1e1e1e]" : "bg-[#FEFEE2]" }`}>
            <img src="./assets/images/404.PNG" alt="NOT FOUND" className="flex h-56" />
            <p className="text-red-600 font-Lucky text-2xl">You bastard! The page doen't exist.</p>
        </div>
    )
}

export default ErrorNotFound;