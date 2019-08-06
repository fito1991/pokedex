import React, {useState} from 'react';

function Formulario({datosPokemon}) {


    //State para formulario
    // busquedaPKMN = state , guardarBusquedaPKMN = this.setState({})

    const [ busquedaPKMN, guardarBusquedaPKMN ] = useState({
        pokemon: ''
    });

    const handleChange = e => {
        //Cambiar el state
        guardarBusquedaPKMN({
            ...busquedaPKMN,
            [e.target.name] : e.target.value.toLowerCase()
        });
    }

    const consultarPokemon = e => {
        e.preventDefault();
        
        datosPokemon(busquedaPKMN);
    }

    // console.log(busquedaPKMN);

    return(
        /*onSubmit={consultarPokedex}*/
        <form onSubmit={consultarPokemon}><br/>
            <div className="input-field col s12">
                <input type="text" id="pokemon" name="pokemon" onChange={handleChange} required/>
                <label htmlFor="pokemon">Pokémon</label>
            </div>
            <div className="input-field col s12">
                <button className="waves-effect waves-light btn-large red darken-1 white" type="submit">Consultar</button>
            </div>
        </form>

    );
}

export default Formulario