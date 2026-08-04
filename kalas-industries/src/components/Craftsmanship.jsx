import "../styles/Craftsmanship.css";

import {
  FaLayerGroup,
  FaCogs,
  FaIndustry,
  FaCheckCircle
} from "react-icons/fa";


const craftsmanshipData = [

  {
    icon:<FaLayerGroup />,
    title:"Premium Materials",
    description:
    "We use carefully selected materials including premium boards, elegant laminates, acrylic finishes, and glass panels to create interiors with lasting beauty and durability."
  },


  {
    icon:<FaCogs />,
    title:"Advanced Hardware",
    description:
    "Our products are equipped with high-quality hardware solutions including soft-close hinges, smooth drawer systems, and premium accessories for effortless performance."
  },


  {
    icon:<FaIndustry />,
    title:"Modern Technology",
    description:
    "Combining advanced machinery, precision manufacturing, and innovative techniques to deliver accurate designs with exceptional finishing."
  },


  {
    icon:<FaCheckCircle />,
    title:"Quality Assurance",
    description:
    "Every product goes through strict quality checks to ensure superior craftsmanship, durability, and customer satisfaction."
  }

];



const Craftsmanship = () => {


return (

<section className="craftsmanship" id="craftsmanship">


{/* Heading */}

<div className="craft-heading">


<span>
OUR CRAFTSMANSHIP
</span>


<h2>
Precision, Quality &
<strong>
Innovation
</strong>
</h2>


<p>
Every Kala's Industries creation reflects our commitment
towards premium materials, advanced technology, and
exceptional craftsmanship.
</p>


</div>





{/* Cards */}

<div className="craft-grid">


{
craftsmanshipData.map((item,index)=>(


<div 
className="craft-card"
key={index}
>


<div className="craft-icon">

{item.icon}

</div>



<h3>
{item.title}
</h3>



<p>
{item.description}
</p>



</div>


))
}



</div>




</section>

);


};


export default Craftsmanship;