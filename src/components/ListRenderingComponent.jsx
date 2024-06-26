import { useContext, useEffect, useRef, useState } from "react";
import { colors } from "../data/Colors";
import { ThemeContext } from "../helpers/ThemeContext";
import { useQuery } from "react-query";

export function ListRenderingComponent() {
    const [colorsData, setColorsData] = useState(colors);
    const [newColor, setNewColor] = useState();
    const [newColorValue, setNewColorValue] = useState();
    const { theme, setTheme } = useContext(ThemeContext);
    const newColorRef = useRef();
    const newColorValueRef = useRef();
    const [filterInput, setFilterInput] = useState("");

    function handleColorChange(index) {
        const data = [...colorsData];
        data[index].value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        setColorsData(d => data);
    }

    function handleColorInputChange(event) {
        setNewColor(event.target.value);
    }

    function handleColorValueInputChange(event) {
        setNewColorValue(event.target.value);
    }

    function addColor() {
        const addData = {
            color: newColor,
            value: newColorValue
        }
        setNewColor("");
        setNewColorValue("");
        const data = [...colorsData, addData];
        setColorsData(data);
        newColorRef.current.focus();
    }

    function handleFilterInputChange(event) {
        setFilterInput(event.target.value);
    }

    function filterColors() {
        if(filterInput === "") {
            return colors;
        }
        const filteredColors = colors.filter((c) => c.color.includes(filterInput));
        return filteredColors;
    }

    const {data, isLoading, refetch} = useQuery({queryKey: ["color"], queryFn: filterColors})

    useEffect(() => {
        refetch();
    }, [filterInput, refetch])



    return (isLoading ? <p>Loading...</p> : <div className="container" style={{backgroundColor: theme === "dark" ? "#000000": "#FFFFFF"}}>
        <h1>Colors</h1>
        <input className="form-control" name = "color" value = {newColor} onChange = {handleColorInputChange} placeholder="Enter color here...." ref = {newColorRef}/>
        <input className="form-control" name = "value" value = {newColorValue} onChange = {handleColorValueInputChange} placeholder="Enter value here...." ref = {newColorValueRef} />
        <button className="btn btn-success m-5" onClick={addColor}>Add Color</button>
        <input className="form-control" onChange = {handleFilterInputChange} placeholder="Search Bar...." value = {filterInput}/>
        <ul className="list-group">
            {data.map((color, index) => {
                return <div>
                <li className="list-group-item">{color.color} : {color.value} <button className="btn btn-light mx-2" onClick={() => handleColorChange(index)}>Change color</button></li></div>
            })}
        </ul>
    </div>)
}