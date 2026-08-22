import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../styles/Navbar.css";

import logo from "../assets/logo-remove.png";


/* =====================================
        MENU DATA
===================================== */

const menuData = [

  /* =====================================
        COLLECTIONS
===================================== */

  {
    title: "Collections",
    section: "collections",

    columns: [

      {
        heading: "Wardrobes",

        links: [
          "Sliding Wardrobes",
          "Openable Wardrobes",
          "Walk-in Wardrobes",
          "Glass Wardrobes",
        ],
      },

      {
        heading: "Living Room",

        links: [
          "TV Units",
          "Display Units",
          "Crockery Units",
          "Bookshelves",
        ],
      },

      {
        heading: "Kitchen",

        links: [
          "Straight Kitchen",
          "L-Shaped Kitchen",
          "U-Shaped Kitchen",
          "Island Kitchen",
        ],
      },

      {
        heading: "Furniture",

        links: [
          "Bedroom Furniture",
          "Office Furniture",
          "Study Tables",
          "Custom Interiors",
        ],
      },

    ],
  },


  /* =====================================
        MATERIALS
===================================== */

  {
    title: "Materials",
    section: "materials",

    columns: [

      {
        heading: "Boards",

        links: [
          "HDHMR",
          "Marine Plywood",
          "MDF",
          "Particle Board",
        ],
      },

      {
        heading: "Finishes",

        links: [
          "Laminate",
          "Acrylic",
          "PU Finish",
          "Glass Finish",
        ],
      },

      {
        heading: "Hardware",

        links: [
          "Soft Close Hinges",
          "Tandem Drawers",
          "Sliding Systems",
          "Lift-Up Mechanisms",
        ],
      },

      {
        heading: "Accessories",

        links: [
          "Wardrobe Accessories",
          "Kitchen Accessories",
          "Lighting",
          "Handles",
        ],
      },

    ],
  },


  /* =====================================
        FEATURES
===================================== */

  {
    title: "Features",
    section: "features",

    columns: [

      {
        heading: "Performance",

        links: [
          "Soft Close",
          "Scratch Resistant",
          "Moisture Resistant",
          "Termite Resistant",
        ],
      },

      {
        heading: "Design",

        links: [
          "Custom Sizes",
          "Modern Finishes",
          "Premium Colours",
          "Glass Doors",
        ],
      },

      {
        heading: "Technology",

        links: [
          "German Hardware",
          "Precision Manufacturing",
          "CNC Cutting",
          "Edge Banding",
        ],
      },

      {
        heading: "Benefits",

        links: [
          "Easy Maintenance",
          "Long Life",
          "Eco Friendly",
          "Warranty",
        ],
      },

    ],
  },


  /* =====================================
        PROJECTS
        SEPARATE PAGE
===================================== */

  {
    title: "Projects",
    path: "/projects",
    columns: null,
  },


  /* =====================================
        GALLERY
        SEPARATE PAGE
===================================== */

  {
    title: "Gallery",
    path: "/gallery",
    columns: null,
  },


  /* =====================================
        EXPERIENCE CENTRE
        SEPARATE PAGE
===================================== */

  {
    title: "Experience Centre",
    path: "/experience",
    columns: null,
  },


  /* =====================================
        CONTACT
        SEPARATE PAGE
===================================== */

  {
    title: "Contact",
    path: "/contact",
    columns: null,
  },

];


/* =====================================
        COMPONENT
===================================== */

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [megaMenu, setMegaMenu] = useState(null);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 992
  );


  /* =====================================
        SCROLL EFFECT
  ===================================== */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* =====================================
        MOBILE DETECTION
  ===================================== */

  useEffect(() => {

    const handleResize = () => {

      setIsMobile(
        window.innerWidth <= 992
      );

      if (window.innerWidth > 992) {

        setMenuOpen(false);

      }

    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  /* =====================================
        TOGGLE MEGA MENU
  ===================================== */

  const toggleMegaMenu = (index) => {

    setMegaMenu(
      megaMenu === index
        ? null
        : index
    );

  };


  /* =====================================
        CLOSE MENU
  ===================================== */

  const closeMenus = () => {

    setMegaMenu(null);

    setMenuOpen(false);

  };
  const location = useLocation();


  /* =====================================
        RENDER
  ===================================== */

  return (

    <header
  className={
    scrolled
      ? "navbar scrolled"
      : "navbar"
  }
>

      <div className="nav-container">


        {/* =================================
              LOGO
        ================================= */}

        <div className="logo">

          <div className="logo-floating">

            <img
              src={logo}
              alt="Kala's Industries"
            />

          </div>

        </div>


        {/* =================================
              NAVIGATION
        ================================= */}

        <ul
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          {menuData.map(
            (menu, index) => (

              <li
                key={menu.title}

                className={
                  menu.columns
                    ? "mega-parent"
                    : ""
                }

                onMouseEnter={() => {

                  if (
                    !isMobile &&
                    menu.columns
                  ) {

                    setMegaMenu(index);

                  }

                }}

                onMouseLeave={() => {

                  if (
                    !isMobile &&
                    menu.columns
                  ) {

                    setMegaMenu(null);

                  }

                }}
              >


                {/* =================================
                      MAIN MENU LINK
                ================================= */}

                <Link

                  to={
                    menu.path ||
                    `#${menu.section}`
                  }

                  onClick={(e) => {

                    /* =============================
                       COLLECTIONS / MATERIALS /
                       FEATURES
                    ============================= */

                    if (menu.columns) {

                      if (isMobile) {

                        e.preventDefault();

                        toggleMegaMenu(index);

                      }

                      else {

                        setMenuOpen(false);

                      }

                    }


                    /* =============================
                       SEPARATE PAGES
                    ============================= */

                    else {

                      setMegaMenu(null);

                      setMenuOpen(false);

                    }

                  }}
                >

                  <span>
                    {menu.title}
                  </span>


                  {/* =================================
                        ARROW ONLY FOR FIRST 3
                  ================================= */}

                  {menu.columns && (

                    <FaChevronDown

                      className={
                        `down-icon ${
                          megaMenu === index
                            ? "rotate"
                            : ""
                        }`
                      }

                    />

                  )}

                </Link>


                {/* =================================
                      MEGA MENU
                      COLLECTIONS
                      MATERIALS
                      FEATURES
                ================================= */}

                {menu.columns && (

                  <div

                    className={
                      `mega-menu ${
                        megaMenu === index
                          ? "show"
                          : ""
                      }`
                    }

                  >

                    {menu.columns.map(
                      (column) => (

                        <div

                          className="mega-column"

                          key={
                            column.heading
                          }

                        >

                          <h4>
                            {column.heading}
                          </h4>


                          {column.links.map(
                            (link) => (

                              <a

                                href="#"

                                key={link}

                                onClick={() => {

                                  closeMenus();

                                }}

                              >

                                {link}

                              </a>

                            )
                          )}

                        </div>

                      )
                    )}

                  </div>

                )}

              </li>

            )
          )}

        </ul>


        {/* =================================
              BOOK CONSULTATION
        ================================= */}

        <button

          className="consult-btn"

          onClick={() => {

            closeMenus();

            const section =
              document.getElementById(
                "consultation"
              );

            if (section) {

              section.scrollIntoView({
                behavior: "smooth",
              });

            }

          }}

        >

          Book Consultation

        </button>


        {/* =================================
              MOBILE MENU ICON
        ================================= */}

        <div

          className="menu-icon"

          onClick={() => {

            setMenuOpen(!menuOpen);

            if (menuOpen) {

              setMegaMenu(null);

            }

          }}

        >

          {menuOpen
            ? <FaTimes />
            : <FaBars />
          }

        </div>


      </div>

    </header>

  );

};

export default Navbar;