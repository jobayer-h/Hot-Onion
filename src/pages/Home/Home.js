import React from 'react';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Nav from '../../components/nav/Nav';
import WhyToChoose from '../../components/why-to-choose/WhyToChoose';
import './Home.css';

const Home = () => {
    return (
        <section>
            <Nav />
            <Hero />
            <WhyToChoose />
            <Footer />
        </section>
    );
};

export default Home;