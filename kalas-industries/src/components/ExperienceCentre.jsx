import "../styles/ExperienceCentre.css";

import showroomImg from "../assets/hero6.webp";

import {
  FaStore,
  FaPalette,
  FaUserTie,
  FaDraftingCompass
} from "react-icons/fa";


const experienceData = [

  {
    icon:<FaStore />,
    title:"Visit Our Showroom",
    description:
    "Explore our premium collections, innovative designs, and real material finishes at our experience centre."
  },


  {
    icon:<FaPalette />,
    title:"Material Selection",
    description:
    "Choose from a wide range of premium boards, laminates, colours, textures, and hardware options."
  },


  {
    icon:<FaUserTie />,
    title:"Expert Consultation",
    description:
    "Get personalized guidance from our interior experts to design spaces that match your lifestyle."
  },


  {
    icon:<FaDraftingCompass />,
    title:"Design Planning",
    description:
    "Visualize your dream interiors with detailed planning, measurements, and customized solutions."
  }

];



const ExperienceCentre = () => {


return (

<section className="experience" id="experience">


{/* Heading */}

<div className="experience-heading">


<span>
EXPERIENCE CENTRE
</span>


<h2>
Experience Your Dream Interior
<strong>
Before It Becomes Reality
</strong>
</h2>


<p>
Step into our experience centre and explore premium
interior collections, materials, and personalized design
solutions guided by our experts.
</p>


</div>






<div className="experience-container">



{/* Image */}

<div className="experience-image">


<img
src={showroomImg}
alt="Kala's Industries Experience Centre"
/>


<div className="experience-badge">

<h3>
10+
</h3>

<span>
Years Of Experience
</span>

</div>


</div>







{/* Content */}

<div className="experience-content">


{
experienceData.map((item,index)=>(


<div 
className="experience-card"
key={index}
>


<div className="experience-icon">

{item.icon}

</div>



<div>

<h4>
{item.title}
</h4>


<p>
{item.description}
</p>

</div>



</div>


))
}




<button className="experience-btn">
Book Your Visit →
</button>



</div>



</div>



</section>

);


};


export default ExperienceCentre;