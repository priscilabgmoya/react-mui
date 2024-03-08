import { useState } from 'react'
import './App.css'
import Container from './components/Container/Container'
import Formulario from './components/Formulario/Formulario'
import ComboBox from './components/autocompletado/autocompletado';
import MyForm from './components/autocompletado/form';

function App() {
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
}
  return (
    <>
      <ComboBox/>
      <MyForm/>
    </>
  )
}

export default App
