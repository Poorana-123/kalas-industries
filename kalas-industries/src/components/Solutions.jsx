import { useState } from "react";
import "../styles/Solutions.css";


import wardrobe from "../assets/hero2.avif";
import kitchen from "../assets/hero2.avif";
import living from "../assets/hero2.avif";
import office from "../assets/hero2.avif";



const solutions = [

{
title:"Wardrobe Solutions",
image:wardrobe,
description:
"Smart storage solutions with elegant designs, premium finishes and customized layouts."
},


{
title:"Kitchen Solutions",
image:kitchen,
description:
"Modern modular kitchens designed with functionality, beauty and efficient space utilization."
},


{
title:"Living Space Solutions",
image:living,
description:
"Create stylish living spaces with customized TV units, partitions and storage systems."
},


{
title:"Office Solutions",
image:office,
description:
"Professional workspaces with ergonomic designs and premium furniture solutions."
}

];



const Solutions =()=>{


const [active,setActive]=useState(0);



return(

<section className="solutions" id="solutions">


<div className="solutions-heading">


<span>
OUR SOLUTIONS
</span>


<h2>
Complete Interior Solutions
<strong>
For Every Space
</strong>
</h2>


<p>
From wardrobes to complete home interiors,
we create solutions that combine elegance,
functionality and craftsmanship.
</p>


</div>





<div className="solutions-container">



{/* Left Menu */}

<div className="solution-menu">


{
solutions.map((item,index)=>(


<div

key={index}

className={
active===index
?
"solution-item active"
:
"solution-item"
}

onClick={()=>setActive(index)}

>


{item.title}


</div>


))
}


</div>





{/* Right Content */}


<div className="solution-display">


<img

src={solutions[active].image}

alt={solutions[active].title}

/>



<div className="solution-content">


<h3>
{solutions[active].title}
</h3>


<p>
{solutions[active].description}
</p>


<button>
Explore More →
</button>


</div>


</div>



</div>


</section>

)

}


export default Solutions;