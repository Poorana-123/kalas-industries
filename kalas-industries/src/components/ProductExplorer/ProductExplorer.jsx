import { useState } from "react";
import { categoryData } from "./CategoryData";

import CategoryBar from "./CategoryBar";
import ImageSection from "./ImageSection";
import CollectionSection from "./CollectionSection";
import CollectionShowcase from "./CollectionShowcase";
import WardrobeSpecifications from "./WardrobeSpecifications";
import WardrobeInsights from "./WardrobeInsights";

const ProductExplorer = () => {

  const [activeCategory, setActiveCategory] = useState("Wardrobes");

  const [selectedCollection, setSelectedCollection] = useState(null);


  // Category change
  const handleCategoryChange = (category) => {

    setActiveCategory(category);

    // Close old showcase
    setSelectedCollection(null);

  };


  // Collection click
  const handleCollectionClick = (collection) => {

    console.log("Collection clicked:", collection.name);

    setSelectedCollection(collection);

  };


  return (

    <section className="product-explorer">

      {/* =====================================
          CATEGORY BAR
      ===================================== */}

      <CategoryBar
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
      />


      {/* =====================================
          MAIN IMAGE SECTION
      ===================================== */}

      <ImageSection
        activeCategory={activeCategory}
      />


      {/* =====================================
          FIVE COLLECTION CARDS
      ===================================== */}

      <CollectionSection
        activeCategory={activeCategory}
        setSelectedCollection={handleCollectionClick}
      />


      {/* =====================================
          COLLECTION SHOWCASE
      ===================================== */}

      {selectedCollection && (

        <CollectionShowcase
          collection={selectedCollection}
        />

      )}
      <WardrobeSpecifications />

      <WardrobeInsights/>

    </section>

  );

};

export default ProductExplorer;