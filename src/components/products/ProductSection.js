import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {

    const handleActive = (e) => {
        e.preventDefault();
        const menu = document.querySelectorAll('.product-menu')
        for (let i = 0; i < menu.length; i++) {
            const element = menu[i];
            element.classList.remove('product-menu-active')
        }
        e.target.classList.add("product-menu-active");
    }
  return (
    <section className="container my-5">
      <div className="text-center my-5">
        <a onClick={handleActive} className="product-menu product-menu-active" href="/">BreakFirst</a>
        <a onClick={handleActive} className="product-menu" href="/">Lunch</a>
        <a onClick={handleActive} className="product-menu" href="/">Dinner</a>
      </div>
      <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
      <div className="text-center my-5">
          <button disabled className="btn btn-success">CheckOut Your Foods</button>
      </div>
    </section>
  );
};

export default ProductSection;
