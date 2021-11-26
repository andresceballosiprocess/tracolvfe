import React from 'react';
import axios from 'axios';

export const getDatosActa=async({numeroTRA, codigoVerificacion})=>{
    console.log(numeroTRA)
    console.log(codigoVerificacion)

    const datosActa=await axios.post('http://localhost:4000/acta',{numeroTRA,codigoVerificacion})
    
    return await datosActa.data
    //.then((res)=>{
    //    return res
    // })


}

