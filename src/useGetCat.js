import { useQuery } from "@tanstack/react-query";
import  Axios  from "axios";

export const useGetCat = () => {
    const { isLoading: catLoading, data, error, refetch } = useQuery({
        queryKey: ["cat"], queryFn: async () => {
            const res = await Axios.get("https://catfact.ninja/fact");
            return res.data;
        }
    });

    const refetchData = () => {
        alert("Data fetched");
        refetch();
    }

    if (error) {
        console.log(error);
    }

    return {data, refetchData, catLoading};
}