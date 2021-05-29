import React from 'react';

const Hero = () => {
    return (
        <section className="hero-bg">
            <div className="">
                <h1 className="text-center my-4">
                    Best Food Waiting for your Belly
                </h1>
                <form className="text-center" action="">
                    <input className="input-brand form-control" type="text" name="" placeholder="Search Food Items" />
                    <button className="btn btn-brand hero-search-btn">Search</button>
                </form>
            </div>
        </section>
    );
};

export default Hero;