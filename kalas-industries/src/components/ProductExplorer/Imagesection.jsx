import { useState } from "react";
import "../../styles/ProductExplorer.css";
import { categoryData } from "../ProductExplorer/CategoryData";

const ImageSection = ({ activeCategory }) => {

  const selectedCategory =
    categoryData.find(
      (item) => item.title === activeCategory
    ) || categoryData[0];

  const [zoomStyle, setZoomStyle] = useState({
    transform: "scale(1)",
    transformOrigin: "center center",
  });

  const handleMouseMove = (e) => {

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transform: "scale(1.4)",
      transformOrigin: `${x}% ${y}%`,
    });

  };

  const handleMouseLeave = () => {

    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center center",
    });

  };

  return (

    <div className="explorer-content">

      {/* LEFT PREVIEW */}

      <div
        className="preview-section"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        <img
          src={selectedCategory.previewImage}
          alt={selectedCategory.title}
          className="preview-image"
        />

      </div>

      {/* RIGHT HERO */}

      <div className="hero-section">

        <div className="image-tag">
          {selectedCategory.title}
        </div>

        <img
          src={selectedCategory.heroImage}
          alt={selectedCategory.title}
          className="hero-image"
          style={zoomStyle}
        />

      </div>

    </div>

  );

};

export default ImageSection;