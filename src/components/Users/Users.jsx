import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Users.css";

const Users = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  // console.log(API);

  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    // console.log(res.data);
    setData(res.data);
  }
  // getData();
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2 className="title1">Users</h2>
      <div className="list1">
        {data.map(item => (
          <div className="card1" key={item.id}>
            <h4>{item.name}</h4>
            {/* <div>{item.adress}</div> */}
            {/* <div>{item.company}</div> */}
            <div>{item.email}</div>
            <div>{item.phone}</div>
            <div>{item.username}</div>
            <div>{item.website}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
