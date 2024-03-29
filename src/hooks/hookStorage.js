import { useState } from "react";
import { createLocalStorage } from "../helpers/helps";



export const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(createLocalStorage(key, defaultValue));

    const setValue = (newValue) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log("ocurrio un error!", error);
        }
        setStoredValue(newValue); 
    }
    const deleteValue = () => {
        try {
            localStorage.clear();  
        } catch (error) {
            console.log("ocurrio un error!", error);
        }
        setStoredValue(defaultValue); 
    }
    return [storedValue, setValue,deleteValue]; 
}