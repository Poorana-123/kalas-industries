import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo-remove.png";


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
          "Glass Wardrobes"
        ]
      },
      {
        heading: "Living",
        links: [
          "TV Units",
          "Display Units",
          "Crockery Units",
          "Bookshelves"
        ]
      },
      {
        heading: "Kitchen",
        links: [
          "Modern Kitchen",
          "Luxury Kitchen",
          "Island Kitchen",
          "Utility Units"
        ]
      },
      {
        heading: "More",
        links: [
          "Office Furniture",
          "Bedroom Interiors",
          "Dining Units",
          "Custom Designs"
        ]
      }
    ]
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
          "Corner Wardrobes"
        ]
      },
      {
        heading: "Kitchen Solutions",
        links: [
          "Modular Kitchens",
          "Pantry Units",
          "Utility Storage",
          "Kitchen Accessories"
        ]
      },
      {
        heading: "Living Spaces",
        links: [
          "TV Units",
          "Room Partitions",
          "Display Units",
          "Crockery Units"
        ]
      },
      {
        heading: "Office Solutions",
        links: [
          "Executive Cabinets",
          "Workstations",
          "Storage Systems",
          "Conference Furniture"
        ]
      }
    ]
  },


  {
    title: "Craftsmanship",
    section: "craftsmanship",
    columns: [
      {
        heading:"Materials",
        links:[
          "Premium Boards",
          "Laminates",
          "Glass Finishes",
          "Acrylic Panels"
        ]
      },
      {
        heading:"Hardware",
        links:[
          "Soft Close Hinges",
          "Drawer Systems",
          "Sliding Mechanisms",
          "Handles & Accessories"
        ]
      },
      {
        heading:"Quality",
        links:[
          "Precision Manufacturing",
          "Quality Inspection",
          "Durability Testing",
          "Warranty"
        ]
      },
      {
        heading:"Technology",
        links:[
          "CNC Machinery",
          "German Engineering",
          "Modern Production",
          "Eco-friendly Process"
        ]
      }
    ]
  },


  {
    title:"Experience Centre",
    section:"experience",
    columns:[
      {
        heading:"Visit Us",
        links:[
          "Showroom",
          "Factory Tour",
          "Virtual Tour"
        ]
      },
      {
        heading:"Consultation",
        links:[
          "Book Appointment",
          "Free Design Session",
          "Expert Advice"
        ]
      },
      {
        heading:"Resources",
        links:[
          "Catalogues",
          "Brochures",
          "Material Samples"
        ]
      },
      {
        heading:"Support",
        links:[
          "Customer Care",
          "After Sales Service",
          "FAQs"
        ]
      }
    ]
  },


  {
    title:"Contact",
    section:"contact",
    columns:[
      {
        heading:"Reach Us",
        links:[
          "Our Office",
          "Factory",
          "Showroom"
        ]
      },
      {
        heading:"Sales",
        links:[
          "Request Quote",
          "Book Consultation",
          "Dealer Enquiry"
        ]
      },
      {
        heading:"Support",
        links:[
          "Service Request",
          "Warranty",
          "Installation Support"
        ]
      },
      {
        heading:"Connect",
        links:[
          "WhatsApp",
          "Email",
          "Social Media"
        ]
      }
    ]
  }

];



const Navbar = () => {

const [menuOpen,setMenuOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);
const [megaMenu,setMegaMenu]=useState(null);



useEffect(()=>{

const handleScroll=()=>{
setScrolled(window.scrollY>60);
};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);



return (

<header className={scrolled ? "navbar scrolled":"navbar"}>


<div className="nav-container">


{/* Logo */}

<div className="logo">
<img src={logo} alt="Kala Industries"/>
</div>



<ul className={menuOpen ? "nav-links active":"nav-links"}>


{
menuData.map((menu,index)=>(


<li

key={index}

className="mega-parent"

onMouseEnter={()=>setMegaMenu(index)}

onMouseLeave={()=>setMegaMenu(null)}

>


<a href={`#${menu.section}`}>

{menu.title}

<FaChevronDown className="down-icon"/>

</a>



<div

className={
megaMenu===index
?
"mega-menu show"
:
"mega-menu"
}

>


{
menu.columns.map((column,i)=>(


<div className="mega-column" key={i}>


<h4>
{column.heading}
</h4>



{
column.links.map((link,j)=>(

<a href="#" key={j}>
{link}
</a>

))
}



</div>


))
}



</div>


</li>


))

}


</ul>



<button className="consult-btn">
Book Consultation
</button>



<div
className="menu-icon"
onClick={()=>setMenuOpen(!menuOpen)}
>

{
menuOpen?
<FaTimes/>
:
<FaBars/>
}

</div>


</div>


</header>

)

}


export default Navbar;