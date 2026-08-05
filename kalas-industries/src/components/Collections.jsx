import "../styles/Collection.css";

import wardrobe from "../assets/wadrobe.avif";
import kitchen from "../assets/modular_kitchen.avif";
import living from "../assets/livingroom.avif";
import office from "../assets/office_furnitures.avif";
import bedroom from "../assets/bedroom_furniture.avif";
import custom from "../assets/TV_units.avif";


const collections = [

  {
    image: wardrobe,
    title: "Luxury Wardrobes",
    description:
      "Elegant storage solutions with modern designs and premium finishes."
  },

  {
    image: kitchen,
    title: "Modular Kitchens",
    description:
      "Smart kitchen spaces designed for functionality and style."
  },

  {
    image: living,
    title: "Living Spaces",
    description:
      "Create beautiful living rooms with customized furniture solutions."
  },

  {
    image: bedroom,
    title: "Bedroom Interiors",
    description:
      "Complete bedroom solutions with comfort and elegance."
  },

  {
    image: office,
    title: "Office Interiors",
    description:
      "Professional workspaces designed for productivity."
  },

  {
    image: custom,
    title: "Custom Designs",
    description:
      "Personalized interiors crafted according to your lifestyle."
  }

];


const Collections = () => {


  return (

    <section className="collections" id="collections">


      {/* Heading */}

      <div className="collection-heading">

        <span>
          OUR COLLECTIONS
        </span>


        <h2>
          Explore Our Premium
          <strong>
            Interior Range
          </strong>
        </h2>


        <p>
          Discover thoughtfully designed interiors that combine
          aesthetics, functionality, and exceptional craftsmanship.
        </p>

      </div>





      {/* Cards */}

      <div className="collection-grid">


        {
          collections.map((item,index)=>(


            <div 
              className="collection-card"
              key={index}
            >


              <div className="collection-image">

                <img 
                  src={item.image}
                  alt={item.title}
                />

              </div>



              <div className="collection-content">


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.description}
                </p>


                <button>
                  Explore →
                </button>


              </div>



            </div>


          ))
        }


      </div>



    </section>

  );

};


export default Collections;