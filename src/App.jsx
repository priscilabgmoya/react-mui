import './App.css'
import AppRoutes from './Routes/AppRouter'
import PrivateLayout from './components/layouts/PrivateLayout'
import PublicLayout from './components/layouts/PublicLayout'
import {  taskPruebas } from './helpers/data'
import { reducerTransferencias } from './helpers/helps'

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
    <AppRoutes/>
    </>
  )
}

export default App
