import { useState, useEffect } from "react";
import { categoryData } from "./CategoryData";

import CategoryBar from "./Categorybar";
import ImageSection from "./Imagesection";
import CollectionSection from "./CollectionSection";
import CollectionShowcase from "./CollectionShowcase";
import WardrobeSpecifications from "./WardrobeSpecifications";
import WardrobeInsights from "./WardrobeInsights";

const ProductExplorer = ({
  selectedCategoryFromNavbar,
  selectedCollectionFromNavbar,
}) => {

  const [activeCategory, setActiveCategory] =
    useState("Wardrobes");

  const [selectedCollection, setSelectedCollection] =
    useState(null);


  /* =====================================================
     NAVBAR → PRODUCT EXPLORER
  ===================================================== */

  useEffect(() => {

    if (!selectedCategoryFromNavbar) {
      return;
    }

    setActiveCategory(
      selectedCategoryFromNavbar
    );

  }, [selectedCategoryFromNavbar]);


  /* =====================================================
     NAVBAR COLLECTION SELECTION
  ===================================================== */

  useEffect(() => {

    if (
      !selectedCategoryFromNavbar ||
      !selectedCollectionFromNavbar
    ) {
      return;
    }

    const category =
      categoryData.find(
        (item) =>
          item.title ===
          selectedCategoryFromNavbar
      );

    if (!category) {
      return;
    }

    const collection =
      category.collections.find(
        (item) =>
          item.name ===
          selectedCollectionFromNavbar
      );

    if (collection) {

      setSelectedCollection(
        collection
      );

    }

  }, [
    selectedCategoryFromNavbar,
    selectedCollectionFromNavbar,
  ]);


  /* =====================================================
     CATEGORY CHANGE
  ===================================================== */

  const handleCategoryChange = (category) => {

    setActiveCategory(category);

    setSelectedCollection(null);

  };


  /* =====================================================
     COLLECTION CARD CLICK
  ===================================================== */

  const handleCollectionClick = (collection) => {

    console.log(
      "Collection clicked:",
      collection.name
    );

    setSelectedCollection(
      collection
    );

  };


  return (

    <section
      className="product-explorer"
      id="collections"
    >

      {/* ================================================
          CATEGORY BAR
      ================================================ */}

      <CategoryBar

        activeCategory={
          activeCategory
        }

        setActiveCategory={
          handleCategoryChange
        }

      />


      {/* ================================================
          MAIN IMAGE SECTION
      ================================================ */}

      <ImageSection
        activeCategory={
          activeCategory
        }
      />


      {/* ================================================
          COLLECTION CARDS
      ================================================ */}

      <CollectionSection

        activeCategory={
          activeCategory
        }

        setSelectedCollection={
          handleCollectionClick
        }

      />


      {/* ================================================
          COLLECTION SHOWCASE
      ================================================ */}

      {selectedCollection && (

        <CollectionShowcase
          collection={
            selectedCollection
          }
        />

      )}


      {/* ================================================
          WARDROBE SPECIFICATIONS
      ================================================ */}

      <WardrobeSpecifications />


      {/* ================================================
          WARDROBE INSIGHTS
      ================================================ */}

      <WardrobeInsights />


    </section>

  );

};

export default ProductExplorer;