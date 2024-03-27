import { useState } from 'react'
import './App.css'
import PruebaUno from './components/pruebaHook/Prueba_uno'
import PruebaDos from './components/pruebaHook/Prueba_dos'
import PruebaTres from './components/pruebaHook/Prueba_tres'
import TablaCheck from './components/Tabla/TablaCheck'
import PersistentDrawerLeft from './components/NavBar/NavBar'
import { Container, Typography } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Route, Routes } from 'react-router-dom'
import LineaDeTiempo from './components/timeliner/Timeliner'

function App() {
  /*
const [data, setData] = useState({
  spacing: 0, 
  direction: "", 
  justifyContent: "", 
  alignItems: "", 
}); 
const handleChange = (e) =>{
  let props = ""+ e.target.name; 
  data[props]=  e.target.value; 
  setData(data); 
  console.log(data);
}*/
const date = new Date(); 
  return (
    <>
    

    < Container maxWidth="xl" className='mainRender'>
    <LineaDeTiempo/>

    </Container>
    <footer>
      <Typography sx={{ textAlign: "center",verticalAlign:"middle", fontStyle:"italic"}}> <CopyrightIcon sx={{textAlign: "center", m:0 , p:0, fontSize:15, verticalAlign:"middle"}}/> {`${date.getFullYear()} - Dirección Informática` }</Typography>
    </footer>


    </>
  )
}

export default App
