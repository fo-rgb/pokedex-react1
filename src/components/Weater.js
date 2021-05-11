import React, { useState } from "react";

function Weather() {
  const [temperature, setTemperature] = useState(15);
  // const [conditions, setConditions] = useState("sunny");

  //   function makeItHotter() {
  //     setTemperature(temperature + 1);
  //   }
  //   function makeItColder() {
  //     setTemperature(temperature - 1);
  //   }

  // function makeItSunny() {
  //   setConditions();
  // }
  // function makeItRainy() {
  //   setConditions("rainy");
  // }

  return (
    <>
      <h1>Today's Weather</h1>
      <ul>
        <li>Temperature will be {temperature}°C</li>
        {/* <li>The conditions will be {conditions}</li> */}
      </ul>

      <hr />
      <button
        onClick={() => {
          setTemperature(temperature + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTemperature(temperature - 1);
        }}
      >
        -
      </button>
      {/* <button onClick={makeItSunny}>Make it sunny</button>
      <button onClick={makeItRainy}>Make it rainy</button> */}
    </>
  );
}

export default Weather;
