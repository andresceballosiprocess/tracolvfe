import React from 'react';
import axios from 'axios';

export const getDatosActa=async({numeroTRA, codigoVerificacion})=>{
    console.log(numeroTRA)
    console.log(codigoVerificacion)

    const datosActa=await axios.post('https://tracolverificacionserver.herokuapp.com/',{numeroTRA,codigoVerificacion})
    
    return await datosActa.data
    //.then((res)=>{
    //    return res
    // })


}

