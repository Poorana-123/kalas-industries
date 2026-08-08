import { useState } from "react";
import { categoryData } from "./CategoryData";

import CategoryBar from "./CategoryBar";
import ImageSection from "./ImageSection";
import CollectionSection from "./CollectionSection";

const ProductExplorer = () => {

    const [activeCategory, setActiveCategory] =
        useState(categoryData[0].title);

    return (

        <section className="product-explorer">

            <CategoryBar
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            

            <ImageSection
                activeCategory={activeCategory}
            />

            <CollectionSection
    key={activeCategory}
    activeCategory={activeCategory}
/>

        </section>

    );

};

export default ProductExplorer;