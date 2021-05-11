import "./App.css";
import CaughtPokemon from "./components/CaughtPokemon";
import MentorsList from "./components/MentorsList";
import BestPokemon from "./components/BestPokemon";
import Logo from "./components/Logo";
import React from "react";
import Counter from "./components/Counter";
import Weater from "./components/Weater";

function App() {
  const title = "La suma es :";
  const suma = 4 + 10;
  const array1 = ["Moussa", "Emilio", "Alvaro"];
  const arrAbility = ["Anticipation", "Adaptability", "Run-Away"];
  let appName = "Pokedex Chalenge";

  function logoWhenClick() {
    console.log("IMG was Clicked");
  }

  return (
    <>
      <Logo appi={appName} handClick={logoWhenClick} />
      <mentorsList />
      {array1.map((name) => (
        <ul className="namearr">
          <li>
            <button className="btn1">{name}</button>
          </li>
        </ul>
      ))}
      <h2 className="sumaApp">{title + suma}</h2>
      {/* <h2>{console.log("hola")}</h2> */}
      <BestPokemon abili={arrAbility} />
      <MentorsList />
      <CaughtPokemon />
      <Counter />
      <Weater />
    </>
  );
}

export default App;

// function Logo() {
//   let appName = "Pokedex"

//     return (
//     <header>
//     <p>{appName}</p>
//     <h1 className="fr" >Bienvenue a Pokedex</h1>
//     <h1 className ="es">Bienvenue a Pokedex</h1>
//     <h1 className ="en">Welcome to the Pokedex</h1>
//     <img
//     alt = "Pokedex"
//     src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//     ></img>
//     </header>
//     );
//   }

// const CaughtPokemon = () => {
//   const date = new Date().toLocaleDateString();
//   return (
//     <p>Caught 0 Pokemon on {date}</p>
//   )

// }

// function CaughtPokemon() {
//   const date = new Date().toLocaleDateString();
//   return(
//     <header>
//     <p>Caught 0 Pokemon on {date}</p>
//     <BestPokemon/>
//     </header>
//   )

// }

// function BestPokemon() {
//   return(
//     <p>My favorite Pokemon is Blassure </p>
//   )

// }

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
