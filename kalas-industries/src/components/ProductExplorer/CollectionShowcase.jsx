import "../../styles/ProductExplorer.css";

const CollectionShowcase = ({ collection }) => {

  if (!collection) {
    return null;
  }


  return (

    <section className="collection-showcase">

      {/* =====================================
          SHOWCASE HEADER
      ===================================== */}

      <div className="showcase-header">

        <span className="showcase-label">
          SELECTED COLLECTION
        </span>

        <h2>
          {collection.name}
        </h2>

        <p>
          Discover the design, functionality and
          craftsmanship of this collection.
        </p>

      </div>


      {/* =====================================
          SHOWCASE CONTAINER
      ===================================== */}

      <div className="showcase-container">


        {/* =================================
            LEFT IMAGE
        ================================= */}

        <div className="showcase-image">

          <img
            src={collection.image}
            alt={collection.name}
          />

        </div>


        {/* =================================
            RIGHT DETAILS
        ================================= */}

        <div className="showcase-details">

          <span className="showcase-number">

            {String(collection.id).padStart(2, "0")}

          </span>


          <h3>
            {collection.name}
          </h3>


          <p className="showcase-description">

            Experience a balance of contemporary
            design, intelligent functionality and
            premium craftsmanship.

          </p>


          {/* FEATURES */}

          <div className="showcase-features">


            <div className="feature-item">

              <span className="feature-icon">
                ✓
              </span>

              <div>

                <strong>
                  Premium Design
                </strong>

                <p>
                  Elegant designs for modern interiors.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <span className="feature-icon">
                ✓
              </span>

              <div>

                <strong>
                  Smart Storage
                </strong>

                <p>
                  Designed to maximize available space.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <span className="feature-icon">
                ✓
              </span>

              <div>

                <strong>
                  Premium Finish
                </strong>

                <p>
                  High-quality materials and finishes.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <span className="feature-icon">
                ✓
              </span>

              <div>

                <strong>
                  Custom Solutions
                </strong>

                <p>
                  Designed around your space and needs.
                </p>

              </div>

            </div>


          </div>


          {/* BUTTON */}

          <button className="showcase-button">

            Explore Collection

            <span>→</span>

          </button>


        </div>

      </div>

    </section>

  );

};

export default CollectionShowcase;