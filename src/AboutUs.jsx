import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Paradise Nursery</h1>
      <p className="about-us-description">
        Welcome to Paradise Nursery, where green meets serenity!
      </p>
      <p className="about-us-content">
        At Paradise Nursery, we believe that everyone deserves a touch of
        nature's beauty in their lives. That's why we're passionate about
        providing a diverse and thriving collection of high-quality plants to
        brighten homes and offices alike. We carefully select each plant,
        ensuring it meets our rigorous standards for health and vitality.
        Whether you're a seasoned green thumb or a curious beginner, we're here
        to guide you on your plant parenthood journey.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        More Than Just Plants:
        <br />
        <br />
        We offer more than just a beautiful selection of plants; we provide a
        personalized experience. Our knowledgeable team is dedicated to helping
        you choose the perfect plant to suit your space, lifestyle, and
        experience level. We're happy to answer your questions, offer care tips,
        and help you create a flourishing indoor oasis. Our Commitment:
        <br />
        <br />
        Paradise Nursery is committed to sustainability and ethical sourcing. We
        partner with growers who share our dedication to environmental
        responsibility. By choosing Paradise Nursery, you're not only
        beautifying your surroundings but also contributing to a healthier
        planet. Come Grow With Us!
      </p>
      <p className="about-us-content">
        Visit Paradise Nursery today and discover the joy of bringing nature
        indoors. Let us help you find the perfect plant companion to enrich your
        life and home.
      </p>
    </div>
  );
}

export default AboutUs;
