import NavContext from "../Components/Context";
import { useContext } from "react";

function Footer() {
    const { darkmode } = useContext(NavContext);

    return (
        <footer className={`flex flex-col w-full h-18  justify-center items-center ${ darkmode ? "bg-black text-white" : "bg-white" }`}>
            <img src="./assets/images/logoSP.png" alt="Not Found" className="flex h-20" />
            <p>Copyright - SOUTH PARK Randomizer Episode</p>
        </footer>
    )
}

export default Footer;