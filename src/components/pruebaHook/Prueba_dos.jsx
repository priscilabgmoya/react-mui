import { useLayoutEffect } from "react";
import { useLocalStorage } from "../../hooks/hookStorage"
import { generarColorAleatorio, obtenerColorDeFondoAleatorio } from "../helpers/helps";
import { Box } from "@mui/material";

export default function PruebaDos () {
    const[bgColor , setBgColor, deleteBgColor] = useLocalStorage("bgColor", null); 
    useLayoutEffect(()=>{
        if(bgColor){
            document.getElementById("color1").style.backgroundColor= bgColor; 
        }else{
            document.getElementById("color1").style.backgroundColor="#FFF"
        }
    }, [bgColor]); 
    return (
        <Box component={"div"} sx={{width: "100%" , height: "300px" }} id="color1">
        <Box component={"p"} > {bgColor}</Box>
        <button onClick={()=>{setBgColor(generarColorAleatorio())}}> aletorio Color</button>
        <button onClick={() => {deleteBgColor()}}>Delete Color</button>
        </Box>
      )
}