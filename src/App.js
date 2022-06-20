import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";
import AddProduct from "./components/AddProduct/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Header />
      <RickAndMorty />
      <Users /> */}
      {/* <Pokemons /> */}
      {/* <Pokemons2 /> */}
      {/* // указываем что роутинг будет в браузере */}
      <BrowserRouter>
        {/* header будет на всех наших страницах */}
        <Header />
        {/* для перечисления роутов */}
        <Routes>
          {/* непосредственно сами роуты */}
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/rickandmorty" element={<RickAndMorty />} />
          <Route path="/pokemons2" element={<Pokemons2 />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
        {/* footer будет на всех страницах */}
      </BrowserRouter>
    </div>
  );
};

export default App;
