import { useState } from "react";
import "../../styles/WardrobeInsights.css";

import whoWeAre from "../../assets/wadrobe.avif";
import whatWeDo from "../../assets/categories/sliding_wardrobe.webp";
import howWeDo from "../../assets/categories/walk_in_wardrobe.jpg";
import whyChooseUs from "../../assets/categories/glass_wardrobe.jpg";
import valuesFuture from "../../assets/categories/mirror_wardrobe.jpg";



const wardrobeTabs = [

  {
    id: 1,
    title: "Who We Are",
    image: whoWeAre,

    heading: "Designed Around Your Space",

    description:
      "We create thoughtfully designed wardrobe solutions that combine elegant aesthetics, intelligent storage and everyday functionality.",

    content:
      "Every wardrobe is planned with attention to your room, lifestyle and storage requirements. Our focus is to create interiors that feel organized, refined and timeless."
  },

  {
    id: 2,
    title: "What We Do",
    image: whatWeDo,

    heading: "Complete Wardrobe Solutions",

    description:
      "From sliding wardrobes to walk-in systems, we design wardrobe solutions for modern homes and personalized spaces.",

    content:
      "Our wardrobe range includes sliding, openable, walk-in, glass and mirror wardrobes. Each solution can be adapted to different room sizes, layouts and storage requirements."
  },

  {
    id: 3,
    title: "How We Do It",
    image: howWeDo,

    heading: "Precision From Design to Installation",

    description:
      "Our process combines careful planning, precise manufacturing and professional installation.",

    content:
      "We begin by understanding your space and requirements. The design is then developed with attention to dimensions, storage and finish before moving into precision manufacturing and final installation."
  },

  {
    id: 4,
    title: "Why Choose Us",
    image: whyChooseUs,

    heading: "Why Choose Our Wardrobes",

    description:
      "We combine design, functionality and craftsmanship to create wardrobe systems that are made for everyday living.",

    content:
      "Our wardrobes are designed with practical storage, premium finishes, reliable hardware and carefully considered details. The result is a wardrobe that looks elegant while making better use of your space."
  },

  {
    id: 5,
    title: "Our Values & Future",
    image: valuesFuture,

    heading: "Built for Today. Designed for Tomorrow.",

    description:
      "We believe good wardrobe design should remain functional, beautiful and relevant for years to come.",

    content:
      "We continue to explore better materials, smarter storage concepts and modern design approaches to create wardrobe solutions that evolve with changing lifestyles."
  }

];


const WardrobeInsights = () => {

  const [activeTab, setActiveTab] =
    useState(wardrobeTabs[0]);


  return (

    <section className="wardrobe-insights">

      {/* =================================
          TOP NAVIGATION
      ================================= */}

      <div className="insights-tabs">

        {wardrobeTabs.map((tab) => (

          <button
            key={tab.id}
            className={`insight-tab ${
              activeTab.id === tab.id
                ? "active"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.title}
          </button>

        ))}

      </div>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div
        className="insights-content"
        key={activeTab.id}
      >

        {/* =================================
            LEFT IMAGE
        ================================= */}

        <div className="insights-image">

          <img
            src={activeTab.image}
            alt={activeTab.title}
          />

        </div>


        {/* =================================
            RIGHT CONTENT
        ================================= */}

        <div className="insights-text">

          <span className="insights-small-title">
            — {activeTab.title}
          </span>

          <h2>
            {activeTab.heading}
          </h2>

          <p className="insights-description">
            {activeTab.description}
          </p>

          <p className="insights-content-text">
            {activeTab.content}
          </p>

          <button className="insights-button">
            Explore More
            <span>→</span>
          </button>

        </div>

      </div>

    </section>

  );

};


export default WardrobeInsights;