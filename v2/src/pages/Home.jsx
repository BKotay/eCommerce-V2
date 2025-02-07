import React from "react";
import Hero from "../components/Hero";
// import Motivation from '../components/Motivation';
// import AboutUs from "../components/AboutUs";


const Home = () => (
  <div>
    <Hero />
    return (
    <>
      <div className="about-us">
        <header className="about-title">About Us</header>
        <p className="about-paragraph">
          Our Athletic programs give you access to the best online physical
          training programs in the world.
        </p>
        <p className="about-paragraph">
          Our main mission is keeping clients healthy and in top-tier shape.
        </p>
        <p className="about-paragraph">
          Besides that, we make a community impact to keep all our athletes from
          high school, College, and the Pro's ready for their season with
          world-class training and support!
        </p>
        <a href="/product" className="about-paragrph__link">
          Start your Training Program Today!
        </a>
      </div>
      <div className="motivation">
        <div className="motivation-paragraph">
          Gain The Purpose! Watch this video that inspired the creation of{" "}
          <img
            src="/images/motivation.png"
            alt="motivation logo"
            className="motivation-logo"
          />
          . For more information, Let's Head to the{" "}
          <a href="/contact" id="contact-link">
            Contact Page!
          </a>
        </div>
        <iframe
          src="https://www.youtube.com/embed/WE50ZSVQeDs?si=Br9xwZ2TpGVVIdv2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </>
    )
  </div>
);

export default Home;
