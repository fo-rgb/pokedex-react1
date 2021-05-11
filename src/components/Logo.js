function Logo(props) {
  return (
    <>
      {<p>{props.appi}</p>}
      <h1 className="fr">Bienvenue a Pokedex</h1>
      <h1 className="es">Bienvenido a Pokedex</h1>
      <h1 className="en">Welcome to the Pokedex</h1>
      <img
        alt="Pokedex"
        onClick={props.handClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      ></img>
    </>
  );
}

export default Logo;
// let appName = "Pokedex"

// function logoWhenClick() {
//   console.log("Component render");
// }
