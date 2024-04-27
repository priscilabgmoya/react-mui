import Swal from "sweetalert2";

export const alertSuccess = async  () => {
   const response = await  Swal.fire({
      icon: "question",
      title: `¿Desea Generar el comprobante de transferencia?`,
      showConfirmButton: true,
    }).then(res =>{
      console.log(res);
        return res.isConfirmed; 
    });
    return response; 
  };