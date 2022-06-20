import { Rating } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

const RickAndMorty = () => {
  const API = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    // console.log(res);
    setData(res.data.results);
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2 className="title">RickAndMorty</h2>
      <div className="list">
        {data.map(item => (
          <div className="card" key={item.id}>
            <h4>{item.name}</h4>
            <img src={item.image} alt="" />
            <Rating name="simple-controller" />
            <div>{item.status}</div>
            <div>{item.species}</div>
            <div>{item.gender}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
