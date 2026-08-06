import { useState } from "react";
import CategoryBar from "../ProductExplorer/Categorybar.jsx";
import "../../styles/ProductExplorer.css";
import { categoryData } from "../ProductExplorer/CategoryData.js";
import ImageSection from "../ProductExplorer/Imagesection.jsx";
import CollectionSection from "../ProductExplorer/Collectionsection.jsx";


const ProductExplorer = () => {
  const [activeCategory, setActiveCategory] = useState(categoryData[0]);

  return (
    <section className="product-explorer">

      {/* Section Header */}
      <div className="explorer-header">
        <h2>Explore Our Collections</h2>
        <p>
          Discover premium furniture collections crafted for every space.
        </p>
      </div>
      <CategoryBar />
      <ImageSection />
      <CollectionSection />

    </section>
  );
};

export default ProductExplorer;