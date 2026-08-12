import React, { useState } from "react";
import "../../styles/WardrobeSpecifications.css";

// =====================================================
// IMAGES
// Change these paths according to your actual images
// =====================================================

import sliding from "../../assets/categories/sliding_wardrobe.webp";
import walkin from "../../assets/categories/walk_in_wardrobe.jpg";
import glass from "../../assets/categories/glass_wardrobe.jpg";
import openable from "../../assets/categories/openable_wardrobe.avif";
import mirror from "../../assets/categories/mirror_wardrobe.jpg";

// You can later replace these with dedicated
// specification images.
const specificationData = [
  {
    id: 1,
    title: "Door Styles",
    image: sliding,
  },

  {
    id: 2,
    title: "Storage",
    image: walkin,
  },

  {
    id: 3,
    title: "Glass Panels",
    image: glass,
  },

  {
    id: 4,
    title: "Openable Doors",
    image: openable,
  },

  {
    id: 5,
    title: "Mirror Finish",
    image: mirror,
  },

  {
    id: 6,
    title: "Sliding System",
    image: sliding,
  },

  {
    id: 7,
    title: "Walk-in Storage",
    image: walkin,
  },

  {
    id: 8,
    title: "Premium Glass",
    image: glass,
  },

  {
    id: 9,
    title: "Interior Layout",
    image: openable,
  },

  {
    id: 10,
    title: "Custom Finish",
    image: mirror,
  },
];


// =====================================================
// COMPONENT
// =====================================================

const WardrobeSpecifications = () => {

  const [activeSpecification, setActiveSpecification] =
    useState(null);


  return (

    <section
      className="wardrobe-specifications"
      id="wardrobe-specifications"
    >

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="specification-header">

        <div>

          <span className="specification-label">
            WARDROBE SPECIFICATIONS
          </span>

          <h2>
            Explore Wardrobe Features
          </h2>

        </div>


        <button className="shop-specifications-btn">
          Explore All Specifications
          <span>→</span>
        </button>

      </div>


      {/* ==========================================
          SPECIFICATION GRID
      ========================================== */}

      <div className="specification-grid">

        {specificationData.map((item) => (

          <div
            className={`specification-card ${
              activeSpecification === item.id
                ? "active"
                : ""
            }`}
            key={item.id}

            onMouseEnter={() =>
              setActiveSpecification(item.id)
            }

            onClick={() =>
              setActiveSpecification(item.id)
            }
          >

            {/* ==================================
                CIRCLE IMAGE
            ================================== */}

            <div className="specification-image-wrapper">

              <img
                src={item.image}
                alt={item.title}
                className="specification-image"
              />

            </div>


            {/* ==================================
                TITLE
            ================================== */}

            <h3>
              {item.title}
            </h3>


            {/* ==================================
                NUMBER
            ================================== */}

            <span className="specification-number">
              {String(item.id).padStart(2, "0")}
            </span>

          </div>

        ))}

      </div>

    </section>

  );
};


export default WardrobeSpecifications;