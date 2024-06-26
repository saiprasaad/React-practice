import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function LocalStorage() {
    const [data, setData] = useState();
    const [storedValue, setNewValue, removeValue] = useLocalStorage("user", "sai");

    function handleButton() {
        console.log(storedValue);
    }

    function handleRemoveButton() {
        removeValue();
    }

    return <div>
        <button onClick={handleButton}>Get Data</button>
        <button onClick={handleRemoveButton}>Remove Data</button>
    </div>
}