import React, { useState } from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";
import AddProduct from "./components/AddProduct/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";

const App = () => {
  // ! CRUD - Create, Read, Update, Delete

  const API = "http://localhost:8000/products";

  // ! для хранения данных
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  // ! Create - POST

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  // ! Read - GET
  async function getProducts() {
    let res = await axios(API);
    setProducts(res.data);
    // console.log("from app.js", res);
  }
  // console.log(products);

  // ! Delete - DELETE
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  // ! Details, Edit - GET API/id
  async function getOneProduct(id) {
    let res = await axios(`${API}/${id}`);
    // console.log(res.data);
    setOneProduct(res.data);
  }

  // ! Update - PATCH, PUT
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  console.log(oneProduct);
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
          <Route
            path="/"
            element={
              <List
                deleteProduct={deleteProduct}
                products={products}
                getProducts={getProducts}
              />
            }
          />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/rickandmorty" element={<RickAndMorty />} />
          <Route path="/pokemons2" element={<Pokemons2 />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
          <Route
            path="/edit/:id"
            element={
              <Edit
                oneProduct={oneProduct}
                getOneProduct={getOneProduct}
                updateProduct={updateProduct}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <Details oneProduct={oneProduct} getOneProduct={getOneProduct} />
            }
          />
        </Routes>
        {/* footer будет на всех страницах */}
      </BrowserRouter>
    </div>
  );
};

export default App;
