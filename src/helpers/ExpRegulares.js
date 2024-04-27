const ExpRegPass = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
const ExpRegText = /^[a-zA-Z]+$/
const ExpRegModelo =  /^[A-Za-z0-9]+-?[A-Za-z0-9]+$/
const ExpRegTextAcento = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/
const ExpRegFecha = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/(19|20)\d{2}$/


export const expRegulares = {
    pass: ExpRegPass,
    text: ExpRegText, 
    modelo: ExpRegModelo,
    descripcionAcento:ExpRegTextAcento,
    fecha: ExpRegFecha
}