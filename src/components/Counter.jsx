import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../helpers/counterstore";

export function Counter() {
    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch();
    function handleIncrement() {
        dispatch(increment(1));
    }
    function handleDecrement() {
        dispatch(decrement(1));
    }
    return <div>Count: {counter}
    <button onClick={handleIncrement}>Increment</button> <button onClick={handleDecrement}>Decrement</button></div>
}