import { useGetCat } from "../useGetCat";

function Cat() {
    const {data, refetchData, catLoading} = useGetCat();

    return <div className="App"><button onClick={refetchData}>Refetch</button>{!catLoading ? data?.fact : "Loading..."}</div>
}

export default Cat;