import { useCallback, useState } from "react";
import { ComponentB } from "./ComponentB";

export function ComponentA() {

    const [input, setInput] = useState(0);
    
    const getItems = useCallback(() =>{
        return [parseInt(input, 10) + 10, parseInt(input, 10) + 20];
    }, [input]);

    function handleInputChange(event) {
        setInput(event.target.value);
    }
    
    return <div>
        <input type="number" onChange={handleInputChange} value={input} />
        <ComponentB getItems = {getItems} />
    </div>
}