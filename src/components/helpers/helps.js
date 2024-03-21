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
          color28: "rgba(255, 255, 255, 0.87)"
        };
    const keys = Object.keys(coloresDeFondo);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return coloresDeFondo[randomKey];
  }  