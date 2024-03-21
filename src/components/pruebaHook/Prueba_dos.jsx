import { useLayoutEffect } from "react";
import { useLocalStorage } from "../../hooks/hookStorage"
import { obtenerColorDeFondoAleatorio } from "../helpers/helps";

export default function PruebaDos () {
    const[bgColor , setBgColor, deleteBgColor] = useLocalStorage("bgColor", null); 
    useLayoutEffect(()=>{
        if(bgColor){
            document.body.style.backgroundColor= bgColor; 
        }else{
            document.body.style.backgroundColor="#FFF"
        }
    }, [bgColor]); 
    return (
        <>
        <button onClick={()=>{setBgColor(obtenerColorDeFondoAleatorio())}}> Generate Color</button>
        <button onClick={() => {deleteBgColor()}}>Delete Color</button>
        </>
      )
}