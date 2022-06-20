import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pokemons = () => {
  // const [data, setData] = useState([]);
  const [inp1Value, SetInp1Value] = useState("");
  const [inp2Value, SetInp2Value] = useState("");

  //! коллбэк отработает один раз при рендере страницы, так как массив зависимостей пустой
  // useEffect(() => {
  //   console.log("useEffect!");
  // }, []);

  //! следит за изменением в стейте inp1Value
  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1Value]);

  //! следит за изменением в стейте inp1Value и inp2Value
  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1Value, inp2Value]);

  //! следит за изменением во всех стейтах
  // useEffect(() => {
  //   console.log("useEffect!");
  // });

  return (
    <div>
      <input
        value={inp1Value}
        onChange={e => SetInp1Value(e.target.value)}
        type="text"
        placeholder="input_1"
      />
      <input
        value={inp2Value}
        onChange={e => SetInp2Value(e.target.value)}
        type="text"
        placeholder="input_2"
      />
    </div>
  );
};

export default Pokemons;
