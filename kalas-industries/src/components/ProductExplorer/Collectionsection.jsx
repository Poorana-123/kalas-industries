import "../../styles/ProductExplorer.css";
import { categoryData } from "./CategoryData";

const CollectionSection = ({
  activeCategory,
  setSelectedCollection
}) => {

  const selectedCategory =
    categoryData.find(
      (item) => item.title === activeCategory
    ) || categoryData[0];


  return (

    <section className="collection-section">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="collection-header">

        <span className="collection-label">
          EXPLORE COLLECTIONS
        </span>

        <h2>
          {selectedCategory.title}
        </h2>

        <p>
          Explore our{" "}
          {selectedCategory.title.toLowerCase()}
          {" "}collections.
        </p>

      </div>


      {/* =====================================
          COLLECTION CARDS
      ===================================== */}

      <div className="collection-grid">

        {selectedCategory.collections.map((item) => (

          <div
            className="collection-card"
            key={item.id}
            onClick={() => {

              console.log(
                "Collection clicked:",
                item.name
              );

              setSelectedCollection(item);

            }}
          >

            {/* IMAGE */}

            <div className="collection-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>


            {/* CARD CONTENT */}

            <div className="collection-info">

              <span className="collection-number">
                {String(item.id).padStart(2, "0")}
              </span>

              <h4>
                {item.name}
              </h4>

              <button
                type="button"
                className="collection-btn"
                onClick={(e) => {

                  e.stopPropagation();

                  console.log(
                    "Button clicked:",
                    item.name
                  );

                  setSelectedCollection(item);

                }}
              >

                View Collection

                <span>→</span>

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default CollectionSection;