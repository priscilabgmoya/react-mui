import './App.css'
import AppRoutes from './Routes/AppRouter'
import PrivateLayout from './components/layouts/PrivateLayout'
import PublicLayout from './components/layouts/PublicLayout'
import CustomTable from './components/Tabla'; 
import {taskPruebas} from './helpers/helps.js'

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
    <CustomTable data={taskPruebas}/>
    </>
  )
}

export default App
