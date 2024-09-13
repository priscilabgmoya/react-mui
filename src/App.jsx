import './App.css'
import AppRoutes from './Routes/AppRouter'
import PrivateLayout from './components/layouts/PrivateLayout'
import PublicLayout from './components/layouts/PublicLayout'
import CustomTable from './components/Tabla'; 
import {taskPruebas} from './helpers/helps.js'
import { alertSuccess } from './helpers/alert.js';
import ModificarDetalleBienModal from './components/Formulario/formularioDetalleBien.jsx';

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
const ha  = async () =>{
  const response = await alertSuccess(); 
  console.log(response);
}
ha(); 
  return (
    <>
    <AppRoutes/>
    {
      /**
       <CustomTable data={taskPruebas}/>
       * 
       */
    }
    {
      /**
    <ModificarDetalleBienModal/>
       * 
       */
  }
    </>
  )
}

export default App
