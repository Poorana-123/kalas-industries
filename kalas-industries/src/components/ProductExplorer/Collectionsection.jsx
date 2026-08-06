import "../../styles/ProductExplorer.css";

import collection1 from "../../assets/hero2.avif";
import collection2 from "../../assets/hero2.avif";
import collection3 from "../../assets/hero2.avif";
import collection4 from "../../assets/hero2.avif";
import collection5 from "../../assets/hero2.avif";

const collections = [
  {
    name: "Sliding Wardrobe",
    image: collection1,
  },
  {
    name: "Walk-in Wardrobe",
    image: collection2,
  },
  {
    name: "Glass Wardrobe",
    image: collection3,
  },
  {
    name: "Mirror Wardrobe",
    image: collection4,
  },
  {
    name: "Openable Wardrobe",
    image: collection5,
  },
];

const CollectionSection = () => {
  return (
    <section className="collection-section">

      <h3>Wardrobe Collections</h3>

      <div className="collection-grid">

        {collections.map((item, index) => (

          <div
            className="collection-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h4>{item.name}</h4>

            <button className="collection-btn">
              Explore Collection
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default CollectionSection;