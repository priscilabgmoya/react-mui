const ExpRegPass = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
const ExpRegText = /^[a-zA-Z]+$/
const ExpRegModelo =  /^[A-Za-z0-9]+-?[A-Za-z0-9]+$/
const ExpRegTextAcento = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/



export const expRegulares = {
    pass: ExpRegPass,
    text: ExpRegText, 
    modelo: ExpRegModelo,
    descripcionAcento:ExpRegTextAcento
}