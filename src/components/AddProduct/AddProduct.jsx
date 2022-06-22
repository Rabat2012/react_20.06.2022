import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();
  // console.log(navigate);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    if (!title || !price || !image) {
      alert("Заполните все поля!");
    } else {
      let newProduct = {
        title,
        price,
        image,
      };
      addProduct(newProduct);
      console.log(newProduct);
      navigate("/add");
    }
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={title}
        label="Title"
        onChange={e => setTitle(e.target.value)}
        variant="outlined"
      />
      <TextField
        value={price}
        label="Price"
        onChange={e => setPrice(e.target.value)}
        variant="outlined"
      />
      <TextField
        value={image}
        label="Image"
        onChange={e => setImage(e.target.value)}
        variant="outlined"
      />
      <Button onClick={() => handleSave()} sx={{ m: 1 }} variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default AddProduct;
