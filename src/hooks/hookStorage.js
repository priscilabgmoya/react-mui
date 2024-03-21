import { useState } from "react";

const createLocalStorage = (key, defaultValue) => {
    try {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    } catch (error) {
        console.log("ocurrio un error!", error);
        return defaultValue;
    }
}

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