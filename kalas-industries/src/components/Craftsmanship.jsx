import "../styles/Craftsmanship.css";

import {
  FaLayerGroup,
  FaCogs,
  FaIndustry,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import craftsmanshipImage from "../assets/craftmenship.webp";

const craftsmanshipData = [

  {
    number: "01",

    icon: <FaLayerGroup />,

    title: "Premium Materials",

    description:
      "We carefully select premium boards, elegant laminates, acrylic finishes, glass panels and other materials to create interiors that combine beauty with durability.",

    
  },

  {
    number: "02",

    icon: <FaCogs />,

    title: "Advanced Hardware",

    description:
      "Every piece is equipped with carefully selected hardware systems that provide smooth movement, effortless operation and dependable long-term performance.",

   
  },

  {
    number: "03",

    icon: <FaIndustry />,

    title: "Modern Technology",

    description:
      "Our manufacturing process combines advanced machinery, precision tools and modern production techniques to achieve accurate dimensions and exceptional finishing.",

   
  },

  {
    number: "04",

    icon: <FaCheckCircle />,

    title: "Quality Assurance",

    description:
      "Every product passes through multiple quality checks. From materials and dimensions to finishing and functionality, every detail receives careful attention.",

    
  },

];

const Craftsmanship = () => {
  return (
    <section className="craftsmanship" id="craftsmanship">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="craft-background-circle"></div>


      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="craft-top">

        <div className="craft-top-label">
          OUR CRAFTSMANSHIP
        </div>

        <h2>
          Where precision
          <br />
          becomes <strong>beautiful.</strong>
        </h2>

        <p>
          Every Kala's Industries creation is carefully
          developed through a combination of premium
          materials, advanced technology and skilled
          craftsmanship.
        </p>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="craft-main">


        {/* =====================================
            IMAGE SIDE
        ===================================== */}

        <div className="craft-visual">

          <div className="craft-image-wrapper">

            <img
              src={craftsmanshipImage}
              alt="Kala's Industries craftsmanship"
            />

          </div>


          {/* IMAGE OVERLAY */}

          <div className="craft-image-overlay">

            <span>
              KALA'S INDUSTRIES
            </span>

            <strong>
              Crafted for living.
            </strong>

          </div>


          {/* EXPERIENCE NUMBER */}

          <div className="craft-experience">

            <strong>
              10+
            </strong>

            <span>
              Years of
              <br />
              craftsmanship
            </span>

          </div>

        </div>


        {/* =====================================
            PROCESS SIDE
        ===================================== */}

        <div className="craft-process">

          {craftsmanshipData.map((item, index) => (

            <div
              className={`craft-process-item ${
                index === 0 ? "active" : ""
              }`}
              key={item.number}
            >

              {/* NUMBER */}

              <div className="craft-number">
                {item.number}
              </div>


              {/* ICON */}

              <div className="craft-process-icon">
                {item.icon}
              </div>


              {/* CONTENT */}

              <div className="craft-process-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>


              {/* ARROW */}

              <div className="craft-arrow">
                <FaArrowRight />
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =========================================
          BOTTOM STATS
      ========================================= */}

      <div className="craft-stats">

        <div className="craft-stat">

          <strong>
            01
          </strong>

          <span>
            MATERIAL
          </span>

        </div>


        <div className="craft-stat">

          <strong>
            02
          </strong>

          <span>
            PRECISION
          </span>

        </div>


        <div className="craft-stat">

          <strong>
            03
          </strong>

          <span>
            TECHNOLOGY
          </span>

        </div>


        <div className="craft-stat">

          <strong>
            04
          </strong>

          <span>
            QUALITY
          </span>

        </div>

      </div>

    </section>
  );
};

export default Craftsmanship;