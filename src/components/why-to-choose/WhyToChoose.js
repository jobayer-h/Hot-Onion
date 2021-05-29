import React from "react";
import WhyCard from "./WhyCard";

const WhyToChoose = () => {
  return (
    <section className="container">
      <div className="my-5">
        <h2 className="my-4">Why T0 Choose Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut hic,
          odio iusto inventore distinctio?
        </p>
      </div>
      <div className="row">
        <WhyCard />
        <WhyCard />
        <WhyCard />
      </div>
    </section>
  );
};

export default WhyToChoose;
