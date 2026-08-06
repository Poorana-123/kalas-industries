import "../../styles/ProductExplorer.css";
import { categoryData } from "../ProductExplorer/CategoryData";

const CollectionSection = ({ activeCategory }) => {

  const selectedCategory =
    categoryData.find(
      (item) => item.title === activeCategory
    ) || categoryData[0];

  return (

    <section className="collection-section">

      <div className="collection-header">

        <h2>{selectedCategory.title} Collections</h2>

        <p>
          Explore our premium {selectedCategory.title.toLowerCase()} designs.
        </p>

      </div>

      <div className="collection-grid">

        {selectedCategory.collections.map((item) => (

          <div
            className="collection-card"
            key={item.id}
          >

            <div className="collection-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            <div className="collection-content">

              <h3>{item.name}</h3>

              <button className="explore-btn">
                Explore Collection
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default CollectionSection;