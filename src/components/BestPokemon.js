const BestPokemon = (props) => (
  <p>
    My favorite Pokemon is Blastoise
    {props.abili.map((arr) => (
      <li>{arr}</li>
    ))}
  </p>
);

export default BestPokemon;

// const arrAbility = ['Anticipation', 'Adaptability', 'Run-Away']
