import { useContext } from "react";
import { AppContext } from "../App";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Home() {
    const { isPending, data, error, refetch } = useQuery({
        queryKey: ["cat"], queryFn: async () => {
            const res = await Axios.get("https://catfact.ninja/fact");
            return res.data;
        }
    });
    return <h1>This is the home page <p>{!isPending ? data.fact : "Fetching"}</p>
    <button onClick={refetch}>Update Data</button></h1>
}

export default Home;