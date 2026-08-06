import { useState } from "react";
import "../../styles/ProductExplorer.css";
import previewImage from "../../assets/hero3.avif";
import heroImage from "../../assets/hero3.avif";

const ImageSection = () => {

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
      transform: "scale(1.8)",
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

      {/* LEFT IMAGE */}

      <div
        className="preview-section"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        <img
          src={previewImage}
          alt="Preview"
          className="preview-image"
        />

      </div>

      {/* RIGHT IMAGE */}

      <div className="hero-section">

        <div className="image-tag">
          Premium Collection
        </div>

        <img
          src={heroImage}
          alt="Hero"
          className="hero-image"
          style={zoomStyle}
        />

      </div>

    </div>

  );

};

export default ImageSection;