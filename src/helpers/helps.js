export function generarNumeroAleatorio() {
    const caracteres = "abcdefghijklmnopqrstuvwxyz";
    let cadenaAleatoria = '';
    for (let i = 0; i < 6; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      cadenaAleatoria += caracteres[indice];
    }
    
    return Math.floor(Math.random() * (10000 - 1) + 1) +" - " +cadenaAleatoria +" - " +Math.floor(Math.random() * (10000 - 1) + 1) ;
}

export function generarPalabraAleatoria() {
    const palabras = [
        "casa",
        "perro",
        "gato",
        "sol",
        "luna",
        "árbol",
        "montaña",
        "río",
        "mar",
        "coche"
      ];
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

export function obtenerColorDeFondoAleatorio() {
      const coloresDeFondo = {
          color1: "#FF5733",
          color2: "#FFC300",
          color3: "#FF5733",
          color4: "#C70039",
          color5: "#900C3F",
          color6: "#581845",
          color7: "#000080",
          color8: "#0000FF",
          color9: "#6495ED",
          color10: "#00FFFF",
          color11: "#008080",
          color12: "#32CD32",
          color13: "#3CB371",
          color14: "#FFFF00",
          color15: "#FFD700",
          color16: "#FFA500",
          color17: "#FF4500",
          color18: "#FF6347",
          color19: "#800000",
          color20: "#808080",
          color21: "#646cff",
          color22: "#747bff",
          color23: "#213547",
          color24: "#535bf2", 
          color25: "#1a1a1a", 
          color26: "#f9f9f9",
          color27: "#242424",
          color28: "rgba(255, 255, 255, 0.87)",
          color29: "#v5et51"
        };
    const keys = Object.keys(coloresDeFondo);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return coloresDeFondo[randomKey];
  }  

  export function generarColorAleatorio() {
    const caracteres = "abcdef123456789";
    let cadenaAleatoria = '';
    for (let i = 0; i < 6; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      cadenaAleatoria += caracteres[indice];
    }
    console.log(cadenaAleatoria);
    return `#${cadenaAleatoria.toLocaleUpperCase()}`
}

export const getDate = () => {
    // Obtener la fecha actual
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = (fechaActual.getMonth()+1).toString().length  ==1 ? parseInt("0"+ (fechaActual.getMonth()+1)) :  (fechaActual.getMonth()+1) ;
    const diaActual = fechaActual.getDate();
  
    // Establecer la fecha mínima permitida como la fecha actual
    return {date: `${añoActual}-${mesActual}-${diaActual}`} 
}

export const createLocalStorage = (key, defaultValue) => {
  try {
      const value = localStorage.getItem(key);
      if (value) {
          return JSON.parse(value);
      } else {
          localStorage.setItem(key, JSON.stringify(defaultValue));
          return defaultValue;
      }
  } catch (error) {
      console.log("ocurrio un error!", error);
      return defaultValue;
  }
}
const sortArray = (a, b) => {
  const nameA = a.categoria.toUpperCase(); // ignore upper and lowercase
  const nameB = b.categoria.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
const newArray = (obj) => {
  let dataFormateada = []; 
  let keys = Object.keys(obj); 
  for (let index = 0; index < keys.length; index++) {
    debugger
    const newObjet ={
       categoria: keys[index],
       rutas: obj[keys[index]]
    }
    dataFormateada.push(newObjet)
  }
  return dataFormateada.sort(sortArray); 
}
export const reduceData = (array) => {
  let newObj = array.reduce((gestionar, data)=>{
    const key = data.categoria; 
    !gestionar[key] ? gestionar[key] = [] : null; 
    gestionar[key].push(data); 
    return  gestionar;
  },{}); 
  return newArray(newObj); 
}