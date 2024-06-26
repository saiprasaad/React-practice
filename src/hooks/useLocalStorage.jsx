import { useState } from "react";

export function useLocalStorage(key, initialValue) {

    function getInitial() {
        const item = localStorage.getItem(key);
        return item ? item : initialValue;
    }
    
    const [storedValue, setStoredValue] = useState(getInitial);

    function setNewValue(value) {
        localStorage.setItem(key, value);
        setStoredValue(value);
    }

    function removeValue() {
        localStorage.removeItem(key);
        setStoredValue(null);
    }

    return [storedValue, setNewValue, removeValue];

}