import { useEffect } from "react";
import { log } from "../../utils/Home/home"

function Home() {
    
    useEffect(() => {
        log();
    }, []);

    return(
        <h1>Home</h1>
    )
}

export default Home;