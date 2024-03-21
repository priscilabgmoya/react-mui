import { useLocalStorage } from "../../hooks/hookStorage"; 
export default function PruebaTres () {
    const [count , setCount, deleteCount ] = useLocalStorage("count", 0); 
    return (
        <>
         <h4> Contador: {count}</h4>
        <button onClick={()  =>{ setKey(generarPalabraAleatoria())}}>Palabra</button>
        <button onClick={() =>{setToken(generarNumeroAleatorio())} }>Token</button>
        <button onClick={handleAleatorio}>Aleatorio</button>
        </>
      )
}