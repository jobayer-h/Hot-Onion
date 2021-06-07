import React from "react";
import AddProduct from "../../components/AddProduct/AddProduct";
import Nav from "../../components/nav/Nav";
import "./Dashbord.css";
const Dashbord = () => {
  return (
    <>
      <Nav />
      <section className="dashbord-bg">
        <div className="container py-5">
          <h2>Add New Product:</h2>
          <AddProduct />
        </div>
      </section>
    </>
  );
};

export default Dashbord;
