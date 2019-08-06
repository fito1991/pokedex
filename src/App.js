import React, {useState, useEffect} from 'react';
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import Pokemon from './components/Pokemon';

import pokemonlogo from './pokemonlogo.png';

function App() {


  // State
  const [pokemon, guardarPokemon] = useState('');
  const [error, capturarError] = useState(false);
  const [resultado, guardarResultado] = useState({});
  

  //Resetear resultado si no se encuentra el pokémon
  if (resultado === undefined) {
    guardarResultado({});
  }

  useEffect(() => {

     //prevenir ejecución de la consulta a la API al inicio
    if(pokemon === '') return;

    const consultarAPI =  () => {
    

      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
      // const respuesta = await fetch(url);
      // const resultado = await respuesta.json();
  
      // if (respuesta.ok && respuesta.status === 200) {
      //   console.log(resultado);
      // } else {
      //   console.log('no se encontró al pokemon');
      // }
  
      // guardarResultado(resultado);
      
      fetch(url)
      .then(response => { 
        if(response.status >= 200 && response.status < 300){
          console.log(response.status);
          return response.json(); 
        }else{

          console.log(response.status);
          capturarError(true);
          // console.log('no se encontró el pokémon');
        }
      })
      .then(jsonPoke => { 
  
        guardarResultado(jsonPoke);
        // console.log(jsonPoke);
  
      });
  
      // console.log(resultado);
    }
  
    consultarAPI();
  }, [pokemon]);


  // console.log(resultado);

  const datosPokemon = datosPKMN => {

    guardarPokemon(datosPKMN.pokemon);
    capturarError(false);
  }

  // Cargar componente de pokemon condicionalmente

  let pkmn;

  if(pokemon === ''){

    pkmn = <h4>Busque un pokémon</h4>;

  } else if (error){
    pkmn = <h4>Pokémon no encontrado</h4>;
    // capturarError('');
  }
  else{
    pkmn = <Pokemon resultado={resultado}/>;
  }

  return (
    <div className="App">
      <Menu logo={pokemonlogo}/>
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l6 xl6">
            <Formulario 
              datosPokemon = {datosPokemon}
            />
          </div>
          <div className="col s12 m12 l6 xl6">
            {pkmn}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
