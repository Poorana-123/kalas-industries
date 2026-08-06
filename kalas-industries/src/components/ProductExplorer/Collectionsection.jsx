import "../../styles/ProductExplorer.css";
import { categoryData } from "./CategoryData";

const CollectionSection = ({ activeCategory }) => {

  const selectedCategory =
    categoryData.find(
      (item) => item.title === activeCategory
    ) || categoryData[0];

    // 👇 Paste it here
  console.log("Active:", activeCategory);
  console.log("Selected:", selectedCategory);
  return (

    <section className="collection-section">

      <h2 className="collection-title">
        {selectedCategory.title} Collections
      </h2>

      <div className="collection-grid">

        {selectedCategory.collections.map((item) => (

          <div
            className="collection-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h4>{item.name}</h4>

          </div>

        ))}

      </div>

    </section>

  );

};

export default CollectionSection;
