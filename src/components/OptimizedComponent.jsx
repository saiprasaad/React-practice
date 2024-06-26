import { useCallback } from "react";
import { Child } from "./Child";

export function OptimizedComponent() {

    const memoizedFunction = useCallback(() => {
        console.log("Hello")
    }, [])

    return <div>
        <Child message = "Hi child" onAction = {memoizedFunction} />
    </div>
}