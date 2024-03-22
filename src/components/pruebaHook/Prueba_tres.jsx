import { useLocalStorage } from "../../hooks/hookStorage"; 
export default function PruebaTres () {
    const [count , setCount, deleteCount ] = useLocalStorage("count", 0); 
const reload = () =>{
  window.location.reload(); 
}
const sumar = () =>{
  setCount(count +1);
}
const restar = () =>{
  if(count > 0){
    setCount(count -1);
  }
}
    return (
        <>
         <h4> Contador: {count}</h4>
        <button onClick={sumar}>Sumar </button>
        <button onClick={restar}>Restar</button>
        <button onClick={ () =>{deleteCount(); } }>Limpiar</button>
        <button onClick={reload}>Reload</button>
        </>
      )
}