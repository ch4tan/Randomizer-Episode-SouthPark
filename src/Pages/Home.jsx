import NavContext from "../Components/Context";
import Loading from "../Components/Loading";
import { useContext, useState } from "react";

function Home () {
    const { darkmode } = useContext(NavContext);
    const [episode, setEpisode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorFetch, setErrorFetch] = useState(false);
    const [image, setImage] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const fetchRandomEpisode = async () => {
        const random = Math.floor(Math.random() * 314);
        setLoading(true);
        setErrorFetch(false);
        setIsClicked(false);
        
        try {
            
            const response = await fetch(`https://spapi.dev/api/episodes/${random}`);

            if(!response.ok) throw new Error("Error with the API...");

            const data = await response.json();
            let imgTmp = "";

            if(data.data.thumbnail_url.includes("png")) imgTmp = data.data.thumbnail_url.split("png")[0] + "png";
            else if(data.data.thumbnail_url.includes("jpg")) imgTmp = data.data.thumbnail_url.split("jpg")[0] + "jpg";

            console.log(data.data.description);

            setImage(imgTmp);
            setEpisode(data);
        } catch (error) {
            console.error(error);
            setErrorFetch(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`flex flex-col w-full h-full items-center pt-10 ${darkmode ? "bg-[#1e1e1e]" : "bg-[#FEFEE2]" }`}>
            <button className={`flex ${!darkmode ? "bg-[#1e1e1e] text-white" : "bg-[#FEFEE2]" } w-32 shadow-lg shadow-black rounded-2xl justify-center items-center text-lg`} onClick={() => fetchRandomEpisode()}>Random Episode</button>       
            {
                episode.length === 0 && !loading && !errorFetch
                ?   (
                        <p className={`pt-32 text-xl ${darkmode ? "text-white" : "text-black"}`}>Lets click on the random button !</p>
                    )
                : loading
                ?   (
                        <Loading />
                    )
                : errorFetch
                ?   (
                        <p className={`pt-32 text-xl ${darkmode ? "text-white" : "text-black"}`}>Error! Click on the button again!</p>
                    )
                :   (
                        <div className="flex flex-col gap-5 xl:gap-8">
                            <div>
                                <p className={`pt-10 text-2xl xl:text-3xl ${darkmode ? "text-white" : "text-black"}`}>{episode.data.name}</p>
                                <p className={`xl:text-xl ${darkmode ? "text-white" : "text-black"}`}>season : {episode.data.season} episode : {episode.data.episode}</p>
                            </div>
                            <img src={image} className="flex xl:w-96" />
                            <button className="flex flex-row w-48 h-8 text-center items-center justify-between gap-10 bg-yellow-500 rounded-2xl xl:translate-x-1/2" onClick={() => setIsClicked(!isClicked)}>
                                <p className="flex pl-5">Description</p>
                                <div className="flex w-8">
                                    <img src="./assets/images/arrow.png" alt="Not Found" className={`flex w-5 ${isClicked ? "rotate-90" : "-rotate-90"}`}/>
                                </div>
                            </button>
                        </div>
                    )
            }
        
            {
                isClicked
                ?   (
                        <div className={`flex w-52 h-full xl:w-96 xl:text-2xl ${darkmode ? "text-white" : "text-black"}`}>
                            <p>{episode.data.description}</p>
                        </div>
                    )
                : null
            }
        </div>
    )
}

export default Home;