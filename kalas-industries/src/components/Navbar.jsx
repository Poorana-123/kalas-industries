import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import "../styles/Navbar.css";
import logo from "../assets/logo-remove.png";

/* =====================================
        MENU DATA
===================================== */

const menuData = [
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

  {
    title: "Projects",
    section: "projects",
    columns: [
      {
        heading: "Residential",
        links: [
          "Apartments",
          "Independent Houses",
          "Luxury Villas",
        ],
      },
      {
        heading: "Commercial",
        links: [
          "Office Interiors",
          "Retail Stores",
          "Workspaces",
        ],
      },
      {
        heading: "Showcase",
        links: [
          "Before & After",
          "Completed Projects",
          "Customer Stories",
        ],
      },
      {
        heading: "Resources",
        links: [
          "Case Studies",
          "Design Ideas",
          "Testimonials",
        ],
      },
    ],
  },

  {
    title: "Gallery",
    section: "gallery",
    columns: [
      {
        heading: "Wardrobes",
        links: [
          "Sliding",
          "Openable",
          "Walk-in",
          "Glass",
        ],
      },
      {
        heading: "Kitchen",
        links: [
          "Modern",
          "Luxury",
          "Compact",
          "Island",
        ],
      },
      {
        heading: "Living",
        links: [
          "TV Units",
          "Crockery",
          "Display Units",
          "Bookshelves",
        ],
      },
      {
        heading: "More",
        links: [
          "Bedroom",
          "Office",
          "Dining",
          "Custom",
        ],
      },
    ],
  },

  {
    title: "Experience Centre",
    section: "experience",
    columns: [
      {
        heading: "Visit",
        links: [
          "Showroom",
          "Factory Tour",
          "Virtual Tour",
        ],
      },
      {
        heading: "Consultation",
        links: [
          "Book Appointment",
          "Expert Advice",
          "Design Session",
        ],
      },
      {
        heading: "Resources",
        links: [
          "Catalogues",
          "Material Samples",
          "Design Guide",
        ],
      },
      {
        heading: "Support",
        links: [
          "Customer Care",
          "After Sales",
          "FAQ",
        ],
      },
    ],
  },

  {
    title: "Contact",
    section: "contact",
    columns: [
      {
        heading: "Reach Us",
        links: [
          "Office",
          "Factory",
          "Showroom",
        ],
      },
      {
        heading: "Sales",
        links: [
          "Request Quote",
          "Book Consultation",
          "Dealer Enquiry",
        ],
      },
      {
        heading: "Support",
        links: [
          "Installation",
          "Warranty",
          "Service",
        ],
      },
      {
        heading: "Connect",
        links: [
          "WhatsApp",
          "Email",
          "Social Media",
        ],
      },
    ],
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

  /* Scroll Effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Detect Mobile */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);

      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMegaMenu = (index) => {
    if (megaMenu === index) {
      setMegaMenu(null);
    } else {
      setMegaMenu(index);
    }
  };

    return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">

        {/* ================= Logo ================= */}
        <div className="logo">
          <div className="logo-floating">
            <img src={logo} alt="Kala's Industries" />
          </div>
        </div>

        {/* ================= Navigation ================= */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          {menuData.map((menu, index) => (

            <li
              key={menu.title}
              className="mega-parent"

              onMouseEnter={() => {
                if (!isMobile) {
                  setMegaMenu(index);
                }
              }}

              onMouseLeave={() => {
                if (!isMobile) {
                  setMegaMenu(null);
                }
              }}
            >

              {/* Menu Title */}
              <a
                href={`#${menu.section}`}
                onClick={(e) => {

                  if (isMobile) {

                    e.preventDefault();

                    toggleMegaMenu(index);

                  } else {

                    setMenuOpen(false);

                  }

                }}
              >

                <span>{menu.title}</span>

                <FaChevronDown
                  className={`down-icon ${
                    megaMenu === index ? "rotate" : ""
                  }`}
                />

              </a>

              {/* ================= Mega Menu ================= */}

              <div
                className={`mega-menu ${
                  megaMenu === index ? "show" : ""
                }`}
              >

                {menu.columns.map((column) => (

                  <div
                    className="mega-column"
                    key={column.heading}
                  >

                    <h4>{column.heading}</h4>

                    {column.links.map((link) => (

                      <a
                        href="#"
                        key={link}
                        onClick={() => {
                          setMenuOpen(false);
                          setMegaMenu(null);
                        }}
                      >
                        {link}
                      </a>

                    ))}

                  </div>

                ))}

              </div>

            </li>

          ))}

        </ul>

        {/* ================= CTA Button ================= */}

        <button className="consult-btn">
          Book Consultation
        </button>

        {/* ================= Mobile Menu Icon ================= */}

        <div
          className="menu-icon"
          onClick={() => {

            setMenuOpen(!menuOpen);

            if (menuOpen) {
              setMegaMenu(null);
            }

          }}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

      </div>
    </header>
  );
};

export default Navbar;