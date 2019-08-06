import React from 'react';

function Pokemon({resultado}){

    // extraer los valores del resultado del pokededex
    // console.log(resultado);

    const {id, name, height, weight, types, sprites} = resultado;
    const hectogramo = 5.436; //valor para convertir los hectogramos del peso del pkmn a lbs
    const decimetro = 10; // valor para convertir los decimetro de la altura del pkmn a metros

    // si no existe ninguno de los campos siguientes se pausa la carga del componente
    if(!id || !name || !height || !weight || !types || !sprites ) return null;
    // console.log(resultado);

    return(
        <div className="card-panel col s12 m12 l12 xl12 center">
            <br/>
            <img src={sprites.front_default} alt="sprite"/>
            <img src={sprites.back_default} alt="sprite_back"/>
            <p><b>Número:</b> {id}</p>
            <p><b>Nombre:</b> {name}</p>
            <p><b>Altura:</b> {(height / decimetro).toFixed(2)} m.</p>
            <p><b>Peso:</b> {(weight / hectogramo).toFixed(2) } lbs.</p>
            <p><b>Tipos: </b>
            {
                types.map( type => {
                    return <span key={type.slot} className="chip blue darken-1 white-text">{type.type.name}</span>
                })
            }
            </p>

        </div>
    );
}

export default Pokemon