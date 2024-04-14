import { describe, it, afterEach, expect } from "vitest";
import { validacionNuevaMarca, validacionNuevoModelo } from "./validaciones";

describe("prueba de validaciones nuevas", ()=>{
    it("se envia una marca con descripcion alterada prueba1234", async ()=>{
        try {
             const newMarca =  {
                descripcion: "prueba1234",
                categoriaId: 1
            }
            const response = await validacionNuevaMarca.validate(newMarca); 
        } catch (error) {
            expect(error.path).toBe("descripcion"); 
            expect(error.errors[0]).toBe("Ingrese solo palabras, no números"); 
        }
    })
    it("se envia modelo con descripcion alterada 'SM22GHM      vfbgfbg'", async ()=>{
        try {
             const newModelo =  {
                descripcion: "SM22GHM      vfbgfbg",
                marcaId: 1
            }
            const response = await validacionNuevoModelo.validate(newModelo); 
        } catch (error) {
            expect(error.path).toBe("descripcion"); 
            expect(error.errors[0]).toBe("Ingrese un modelo valido, Por ejemplo: M1502QA-BQ088W, SM22GHM"); 
        }
    })
})