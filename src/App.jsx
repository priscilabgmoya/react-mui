import { useState } from 'react'
import './App.css'
import PruebaUno from './components/pruebaHook/Prueba_uno'
import PruebaDos from './components/pruebaHook/Prueba_dos'


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
  return (
    <>
    
    <PruebaDos/>
    </>
  )
}

export default App
