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
        heading: "Living",
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
          "Modern Kitchen",
          "Luxury Kitchen",
          "Island Kitchen",
          "Utility Units",
        ],
      },
      {
        heading: "More",
        links: [
          "Office Furniture",
          "Bedroom Interiors",
          "Dining Units",
          "Custom Designs",
        ],
      },
    ],
  },

  {
    title: "Solutions",
    section: "solutions",
    columns: [
      {
        heading: "Wardrobe Solutions",
        links: [
          "Sliding Wardrobes",
          "Openable Wardrobes",
          "Walk-in Wardrobes",
          "Corner Wardrobes",
        ],
      },
      {
        heading: "Kitchen Solutions",
        links: [
          "Modular Kitchens",
          "Pantry Units",
          "Utility Storage",
          "Kitchen Accessories",
        ],
      },
      {
        heading: "Living Spaces",
        links: [
          "TV Units",
          "Room Partitions",
          "Display Units",
          "Crockery Units",
        ],
      },
      {
        heading: "Office Solutions",
        links: [
          "Executive Cabinets",
          "Workstations",
          "Storage Systems",
          "Conference Furniture",
        ],
      },
    ],
  },

  {
    title: "Craftsmanship",
    section: "craftsmanship",
    columns: [
      {
        heading: "Materials",
        links: [
          "Premium Boards",
          "Laminates",
          "Glass Finishes",
          "Acrylic Panels",
        ],
      },
      {
        heading: "Hardware",
        links: [
          "Soft Close Hinges",
          "Drawer Systems",
          "Sliding Mechanisms",
          "Handles",
        ],
      },
      {
        heading: "Quality",
        links: [
          "Quality Inspection",
          "Warranty",
          "Testing",
          "Precision",
        ],
      },
      {
        heading: "Technology",
        links: [
          "German Machines",
          "CNC Process",
          "Automation",
          "Eco Friendly",
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
          "Brochures",
          "Catalogues",
          "Material Samples",
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
          "Book Consultation",
          "Dealer Enquiry",
          "Request Quote",
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

  /* Toggle Mobile Mega Menu */

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

        {/* Logo */}
        <div className="logo">
  <div className="logo-floating">
    
      <img src={logo} alt="Kala's Industries" />
  </div>
</div>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          {menuData.map((menu, index) => (

            <li
              key={index}
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

              <div
                className={`mega-menu ${
                  megaMenu === index ? "show" : ""
                }`}
              >

                {menu.columns.map((column, i) => (

                  <div
                    className="mega-column"
                    key={i}
                  >

                    <h4>{column.heading}</h4>

                    {column.links.map((link, j) => (

                      <a
                        href="#"
                        key={j}
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

        {/* CTA Button */}
        <button className="consult-btn">
          Book Consultation
        </button>

        {/* Mobile Menu Icon */}
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