import "../styles/Gallery.css";

import slidingWardrobe from "../assets/categories/sliding_wardrobe.webp";
import openableWardrobe from "../assets/categories/openable_wardrobe.avif";
import walkinWardrobe from "../assets/categories/walk_in_wardrobe.jpg";
import glassWardrobe from "../assets/categories/glass_wardrobe.jpg";
import cornerWardrobe from "../assets/categories/mirror_wardrobe.jpg";


const Gallery = () => {

  return (

    <div className="gallery-page">


      {/* =====================================
            GALLERY HERO
      ===================================== */}

      <section className="gallery-hero">

        <div className="gallery-hero-content">

          <span>
            DESIGN GALLERY
          </span>

          <h1>
            Details
            <br />
            <strong>Make the Design.</strong>
          </h1>

          <p>
            Explore the finishes, textures, details and
            craftsmanship behind our wardrobe solutions.
          </p>

        </div>


        <div className="gallery-hero-number">
          01
        </div>

      </section>


      {/* =====================================
            FINISHES
      ===================================== */}

      <section className="gallery-section">

        <div className="gallery-section-heading">

          <span>
            01 / FINISHES
          </span>

          <h2>
            Surfaces That
            <br />
            <strong>Define the Space.</strong>
          </h2>

          <p>
            From subtle matte textures to refined glass
            and premium finishes, every surface contributes
            to the character of your interior.
          </p>

        </div>


        <div className="gallery-masonry">

          <div className="gallery-item gallery-large">

            <img
              src={slidingWardrobe}
              alt="Premium wardrobe finish"
            />

            <div className="gallery-item-content">

              <span>
                FINISH 01
              </span>

              <h3>
                Premium Surfaces
              </h3>

            </div>

          </div>


          <div className="gallery-item">

            <img
              src={openableWardrobe}
              alt="Matte wardrobe finish"
            />

            <div className="gallery-item-content">

              <span>
                FINISH 02
              </span>

              <h3>
                Matte Elegance
              </h3>

            </div>

          </div>


          <div className="gallery-item">

            <img
              src={glassWardrobe}
              alt="Glass wardrobe finish"
            />

            <div className="gallery-item-content">

              <span>
                FINISH 03
              </span>

              <h3>
                Glass & Light
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
            WARDROBE DETAILS
      ===================================== */}

      <section className="gallery-section gallery-dark">

        <div className="gallery-section-heading">

          <span>
            02 / WARDROBE DETAILS
          </span>

          <h2>
            Small Details.
            <br />
            <strong>Big Difference.</strong>
          </h2>

          <p>
            Intelligent storage and carefully selected
            details make every wardrobe more functional.
          </p>

        </div>


        <div className="detail-grid">


          <div className="detail-card">

            <div className="detail-number">
              01
            </div>

            <div className="detail-icon">
              ↔
            </div>

            <h3>
              Sliding Systems
            </h3>

            <p>
              Smooth and precise movement designed for
              effortless everyday use.
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-number">
              02
            </div>

            <div className="detail-icon">
              +
            </div>

            <h3>
              Intelligent Storage
            </h3>

            <p>
              Purpose-built storage zones that keep
              everything organized and accessible.
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-number">
              03
            </div>

            <div className="detail-icon">
              ◇
            </div>

            <h3>
              Premium Hardware
            </h3>

            <p>
              Carefully selected hardware engineered for
              smooth performance and durability.
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-number">
              04
            </div>

            <div className="detail-icon">
              □
            </div>

            <h3>
              Clean Profiles
            </h3>

            <p>
              Minimal profiles and refined lines create
              a sophisticated contemporary appearance.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
            CRAFTSMANSHIP
      ===================================== */}

      <section className="gallery-section craftsmanship">

        <div className="craft-image">

          <img
            src={walkinWardrobe}
            alt="Wardrobe craftsmanship"
          />

        </div>


        <div className="craft-content">

          <span>
            03 / CRAFTSMANSHIP
          </span>

          <h2>
            Precision
            <br />
            <strong>Behind Every Detail.</strong>
          </h2>

          <p>
            Great interiors are built through precision.
            From accurate cutting and edge finishing to
            careful installation, every stage contributes
            to the final result.
          </p>


          <div className="craft-points">

            <div>
              <strong>01</strong>
              <span>Precision Cutting</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Edge Finishing</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Careful Installation</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
            SIGNATURE SPACES
      ===================================== */}

      <section className="gallery-section signature">

        <div className="gallery-section-heading">

          <span>
            04 / SIGNATURE SPACES
          </span>

          <h2>
            Designed Around
            <br />
            <strong>Real Life.</strong>
          </h2>

        </div>


        <div className="signature-grid">

          <div className="signature-card">

            <img
              src={cornerWardrobe}
              alt="Bedroom wardrobe"
            />

            <div>
              <span>
                BEDROOM
              </span>

              <h3>
                Everyday Luxury
              </h3>
            </div>

          </div>


          <div className="signature-card">

            <img
              src={walkinWardrobe}
              alt="Walk-in wardrobe"
            />

            <div>
              <span>
                WALK-IN
              </span>

              <h3>
                Personal Space
              </h3>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
            FINAL MESSAGE
      ===================================== */}

      <section className="gallery-final">

        <span>
          KALA'S INDUSTRIES
        </span>

        <h2>
          Every detail
          <br />
          <strong>has a purpose.</strong>
        </h2>

        <p>
          Let's create a wardrobe designed
          around you.
        </p>

        <button>
          Book a Consultation →
        </button>

      </section>


    </div>

  );

};


export default Gallery;