import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';


export default function User() {


  const [comments , setComments] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/api/users/comment')
      .then(res=>res.json())
      .then(data=>{
        setComments(data.comment);

          }
      )
      .catch(error => {
          console.log(error);
        });

 }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

   
  };


  return (
    <div className="bg-white pl-20 py-15 sm:py-32">
      {/* User section */}
   {/* Render a div with one child elements, a title
       Uses Tailwind CSS classes for styling */}
      <div className="">
        <div className="flex flex-rows justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our users says</h2>
        </div>
        {/* Render a Slider component with settings passed as props */}
        <Slider className="pt-20" {...sliderSettings}>
        {/* Map through data array to render a slide for each item */}
          {comments.map((item, index) => (

            // Render a div with Tailwind CSS classes for styling the card
            <div className="card flex flex-warp grap-5 rounded-lg max-w-md h-272 w-380 overflow-hidden shadow-lg">
                <div className="bg-gray-100 rounded shadow-lg">
                <div className="flex items-center justify-between p-4">
              <div className="felx flex-cols" key={index}>
                <div key={item.id}>

               {/* Render a div to show the rating with stars */}
                <div className="card-stars flex flex-rows">

                {/* Render an SVG star for each rating value (5 in this case) */}
                {Array.from({ length: 5 }, (_, i) => (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" key={i}>
                <path d="M10 1l2.76 5.63 6.22.9-4.5 4.38 1.06 6.18L10 16.25l-5.54 2.89 1.06-6.18L1.02 7.53l6.22-.9L10 1z" />
              </svg>

                ))}
                </div>

                {/* Render an SVG star for each rating value (5 in this case) */}
                <div className="card-content ">
                  <p id={`slide-${index}`}>{item.name}</p>

                  <hr />
                </div>

                {/* Render a div to show the author information */}
                <div className="card cursor-pointer pt-20">
                  <div className="flex flex-rows">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="/images/nature.jpg" />
                    <div className="">
                      <h2 className="font-bold">{item.user.name}</h2>
                      <p>{item.user.description}</p>
                    </div>
                  </div>
</div>
                </div>
</div>
</div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  )
}
