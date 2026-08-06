import "../../styles/ProductExplorer.css";

const categories = [
  "Home",
  "Wardrobes",
  "Bed Set",
  "Dressing Table",
  "Office Table",
  "Shoe Rack",
  "Chest of Drawers",
  "Dining Table",
  "Side Table",
  "Book Shelf",
  "Center Table",
  "More",
];

const CategoryBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="category-bar">
      <div className="category-wrapper">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-item ${
              activeCategory === category ? "active" : ""
            }`}
            onMouseEnter={() => setActiveCategory(category)}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;