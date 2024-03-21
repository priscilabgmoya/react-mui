import { useLocalStorage } from "../../hooks/hookStorage"
import { generarNumeroAleatorio, generarPalabraAleatoria } from "../helpers/helps";


export default function PruebaUno () {
    const [key , setKey ,deleteKey] = useLocalStorage("key", null); 
    const [token, setToken ,deleteToken] = useLocalStorage("token", null); 
   
    const handleAleatorio = () =>{
        setKey(generarPalabraAleatoria()); 
        setToken(generarNumeroAleatorio()); 
    }
    const handleDelete = () =>{
        deleteKey(); 
        deleteToken(); 
    }
    return (
        <div >
        <h2>Prueba de dos UseLocalStoroge</h2>
        <p>TOKEN: {token}</p>
        <h4> PALABRA: {key}</h4>
        <button onClick={()  =>{ setKey(generarPalabraAleatoria())}}>Palabra</button>
        <button onClick={() =>{setToken(generarNumeroAleatorio())} }>Token</button>
        <button onClick={handleAleatorio}>Aleatorio</button>
        <button onClick={handleDelete}>Eliminar</button>
        </div>
      )
}