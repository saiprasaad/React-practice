import { useState } from "react"
import { ListRenderingComponent } from "./ListRenderingComponent";
import { ThemeContext } from "../helpers/ThemeContext";

export function ThemeProvider() {
    const [theme, setTheme] = useState("light");
    return <ThemeContext.Provider value = {{theme, setTheme}}>
     <ListRenderingComponent />
     </ThemeContext.Provider>
}