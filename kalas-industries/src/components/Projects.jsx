import { useState } from "react";
import "../styles/Projects.css";

import slidingWardrobe from "../assets/categories/sliding_wardrobe.webp";
import openableWardrobe from "../assets/categories/openable_wardrobe.avif";
import walkinWardrobe from "../assets/categories/walk_in_wardrobe.jpg";
import glassWardrobe from "../assets/categories/glass_wardrobe.jpg";
import cornerWardrobe from "../assets/categories/mirror_wardrobe.jpg";


const projects = [
  {
    id: 1,
    category: "Master Bedroom",
    title: "Luxury Sliding Wardrobe",
    location: "Chennai",
    image: slidingWardrobe,
    solution: "Sliding Wardrobe",
    finish: "Premium Acrylic",
    description:
      "A spacious sliding wardrobe designed to bring elegant storage and a clean contemporary appearance to the master bedroom.",
  },

  {
    id: 2,
    category: "Bedroom",
    title: "Contemporary Openable Wardrobe",
    location: "Coimbatore",
    image: openableWardrobe,
    solution: "Openable Wardrobe",
    finish: "Matte Laminate",
    description:
      "A practical wardrobe solution combining generous storage with a minimal and sophisticated bedroom design.",
  },

  {
    id: 3,
    category: "Walk-in",
    title: "Premium Walk-in Wardrobe",
    location: "Bangalore",
    image: walkinWardrobe,
    solution: "Walk-in Wardrobe",
    finish: "Wood Finish",
    description:
      "A dedicated walk-in wardrobe designed with organized storage zones, elegant finishes and a luxurious feel.",
  },

  {
    id: 4,
    category: "Luxury",
    title: "Modern Glass Wardrobe",
    location: "Chennai",
    image: glassWardrobe,
    solution: "Glass Wardrobe",
    finish: "Glass + Laminate",
    description:
      "A modern wardrobe combining glass panels and premium finishes to create a refined and visually light bedroom interior.",
  },

  {
    id: 5,
    category: "Compact",
    title: "Space-Saving Corner Wardrobe",
    location: "Madurai",
    image: cornerWardrobe,
    solution: "Corner Wardrobe",
    finish: "Textured Laminate",
    description:
      "An intelligently planned corner wardrobe that maximizes available space without compromising on design.",
  },
];


const filters = [
  "All",
  "Master Bedroom",
  "Bedroom",
  "Walk-in",
  "Luxury",
  "Compact",
];


const Projects = () => {

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );


  return (

    <>

      {/* =====================================
      PROJECT HERO
===================================== */}

<section className="projects-hero">

  <div className="hero-grid"></div>

  <div className="hero-circle hero-circle-one"></div>

  <div className="hero-circle hero-circle-two"></div>


  <div className="projects-hero-content">

    <span className="hero-eyebrow">
      KALA'S INDUSTRIES
    </span>

    <h1>
      Designed
      <br />
      <strong>For Living.</strong>
    </h1>

    <p>
      A collection of wardrobe spaces created
      with precision, functionality and timeless design.
    </p>

    <div className="hero-line">

      <span></span>

      <strong>
        01
      </strong>

      <span></span>

    </div>

  </div>


  <div className="hero-bottom-text">
    WARDROBE PROJECTS
  </div>

</section>

      {/* =====================================
            EXISTING PROJECTS SECTION
      ===================================== */}

      <section
        className="wardrobe-projects"
        id="projects"
      >


        {/* =====================================
              HEADER
        ===================================== */}

        <div className="projects-heading">

          <span className="projects-label">
            OUR WARDROBE PROJECTS
          </span>

          <h2>
            Wardrobes Designed
            <br />
            <strong>For Real Spaces</strong>
          </h2>

          <p>
            From compact bedrooms to luxurious walk-in
            spaces, explore wardrobe solutions designed
            around the way people live.
          </p>

        </div>


        {/* =====================================
              FILTER
        ===================================== */}

        <div className="project-filter">

          {filters.map((filter) => (

            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>

          ))}

        </div>


        {/* =====================================
              PROJECT GRID
        ===================================== */}

        <div className="project-grid">

          {filteredProjects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              {/* IMAGE */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="project-number">
                  0{project.id}
                </span>


                <div className="project-overlay">

                  <span>
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                </div>

              </div>


              {/* CONTENT */}

              <div className="project-content">

                <div className="project-location">

                  <span>
                    PROJECT
                  </span>

                  <span>
                    {project.location}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                {/* SPECIFICATIONS */}

                <div className="project-specs">

                  <div>

                    <small>
                      SOLUTION
                    </small>

                    <strong>
                      {project.solution}
                    </strong>

                  </div>


                  <div>

                    <small>
                      FINISH
                    </small>

                    <strong>
                      {project.finish}
                    </strong>

                  </div>

                </div>


                <button className="project-button">

                  Explore Project

                  <span>→</span>

                </button>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================
              BOTTOM MESSAGE
        ===================================== */}

        <div className="projects-bottom">

          <span>
            YOUR SPACE. YOUR WARDROBE.
          </span>

          <h3>
            Designed around you.
          </h3>

          <button>
            Book a Consultation →
          </button>

        </div>


      </section>

    </>

  );

};


export default Projects;