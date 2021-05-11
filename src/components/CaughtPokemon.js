import React, { useState } from "react";
const caught = ["Pikachu", "Charmender", "bulbasaur", "Squirtle", "blastoise"];

const CaughtPokemon = () => {
  const [count, setCaught] = useState(0);
  const [getPokemon, setGetPokemon] = useState(caught);

  function catchPokemon() {
    const number = Math.floor(Math.random() * 897);
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const capitalizedPokemonName =
          data.name.charAt(0).toUpperCase() + data.name.slice(1);

        setGetPokemon([...getPokemon, capitalizedPokemonName]);
      })
      .catch((err) => console.error(err));
  }
  const date = new Date().toLocaleDateString();
  let newDate = date;
  newDate = new Date().getHours();
  return (
    <>
      <p>
        Caught {count} Pokemon on {date}----{newDate}
      </p>
      <button
        onClick={() => {
          setCaught(count + 1);
        }}
      >
        CatchPokemon
      </button>

      <p>lista de captura Pokemon</p>
      <ul>
        {getPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      <button onClick={catchPokemon}>Catch a new Pokemon!</button>
    </>
  );
};
export default CaughtPokemon;

// function CaughtPokemon() {
//     const date = new Date().toLocaleDateString();
//     return(
//       <header>
//       <p>Caught 0 Pokemon on {date}</p>
//       </header>
//     )

//   }
