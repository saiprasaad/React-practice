import axios from "axios";
import { useEffect, useState } from "react";

export function ItemList() {

    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setData(response.data);
    }

    useEffect(() => {
        fetchData();
        return () => {
            document.title = "";
        }
    }, [])

    useEffect(() => {
        document.title = data.length;
    }, [data])

    
}