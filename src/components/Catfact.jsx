import axios from "axios";
import { useEffect, useState } from "react"
import { useQuery } from "react-query";

export function Catfact() {

    const {data, isLoading, refetch} = useQuery({queryKey: ["catfact"], queryFn: fetchCatData});


    async function fetchCatData() {
        const response = await axios.get("https://catfact.ninja/fact");
        return response.data;
    }

    return <div>
        {isLoading ? <p>Loading....</p> :
            <div><h1>Fact: {data.fact}</h1>
                <h4>Length: {data.length}</h4></div>
        }
    </div>
}