import NavContext from "../Components/Context";
import { useContext, useState } from "react";
import { useEffect } from "react";

function Home () {
    const { darkmode } = useContext(NavContext);
    const [episode, setEpisode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorFetch, setErrorFetch] = useState(false); // say : try to refresh
    const [image, setImage] = useState("");

    const fetchRandomEpisode = async () => {
        const random = Math.floor(Math.random() * 314);
        setLoading(true);
        setErrorFetch(false);

        try {
            
            const response = await fetch(`https://spapi.dev/api/episodes/${random}`);

            if(!response.ok) throw new Error("Error with the API...");

            const data = await response.json();

            console.log(data);
            // const imgTmp = data.data.thumbnail_url.replace(/jpg$|\.jpg$/g, "jpg");

            // console.log(imgTmp);

            // setImage(imgTmp);
            setEpisode(data);
        } catch (error) {
            console.error(error);
            setErrorFetch(true);
        } finally {
            setLoading(false);
        }
    };


    
    // useEffect(() => {
    //     fetchEpisode();
    // }, [])

    return (
        <div className={`flex flex-col w-full h-full items-center pt-10 ${darkmode ? "bg-[#1e1e1e]" : "bg-[#FEFEE2]" }`}>
            <button className={`flex ${!darkmode ? "bg-[#1e1e1e] text-white" : "bg-[#FEFEE2]" } w-32 shadow-lg shadow-black rounded-2xl justify-center items-center text-lg`} onClick={() => fetchRandomEpisode()}>Random Episode</button>
        
            {
                episode.length === 0 && !loading && !errorFetch
                ?   (
                    // <p className="pt-32 text-xl">Error! Click on the button again!</p>
                        <p className="pt-32 text-xl">Lets click on the random button !</p>
                    )
                : loading
                ?   (
                        <p>Loading...</p>
                    )
                : errorFetch
                ?   (
                        <p className="pt-32 text-xl">Error! Click on the button again!</p>
                    )
                :   (
                        <>
                            <p className="pt-10 text-2xl">{episode.data.name}</p>
                            <p>saison : {episode.data.season} episode : {episode.data.episode}</p>
                            <img src={episode.data.thumbnail_url} alt="Not Found" />
                            <p className="text-xs break-all max-w-[90%]">{image}</p>
                        
                        </>
                    )
            }
        
        
        </div>
    )
}

export default Home;