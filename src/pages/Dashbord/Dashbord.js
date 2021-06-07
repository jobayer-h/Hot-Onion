import React from "react";
import Nav from "../../components/nav/Nav";
import ProductForm from "../../components/ProductForm/ProductForm";
import "./Dashbord.css";
const Dashbord = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("item-name").value;
    const price = document.getElementById("price").value;
    const info = document.getElementById("short-drescription").value;
    const drescription = document.getElementById("drescription").value;
    const photo = document.getElementById("cover-pic").files[0];
    const gallery = document.getElementById("gallery-pic").files;
    const category = document.getElementById("category").value;

    const addProduct = new FormData();
    addProduct.append("name", name);
    addProduct.append("price", price);
    addProduct.append("info", info);
    addProduct.append("drescription", drescription);
    addProduct.append("photo", photo);
    addProduct.append("gallery", gallery);
    addProduct.append("category", category);
    
  };
  return (
    <>
      <Nav />
      <section className="dashbord-bg">
        <div className="container py-5">
          <h2>Add New Product:</h2>
          <ProductForm action={handleSubmit} name="addNewProduct" />
        </div>
      </section>
    </>
  );
};

export default Dashbord;
