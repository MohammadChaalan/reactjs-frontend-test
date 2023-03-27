import { FaArrowDown } from "react-icons/fa";


export default function Home() {
    return (
        
      <div className=""
      style={{
        backgroundImage: "url('/images/bg-home.jpg')",
        backgroundSize: "cover",
        width: "auto",
        height: "500"

      }}
      
      >
      
        <div className="mx-auto py-1 sm:px-6 sm:py-32 lg:px-1">
           
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left pl-7">
              <h2 className="text-5xl text-white sm:text-4xl font-ivy-presto font-light">
            
              Welcome to SoilHive

              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              a digital tool to catalyze collaboration within the Food & Ag industry ​and enable the expansion of soil data availability
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a href="" className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
                  Go to SoilHive
                </a>
              </div>
            </div>

            
        </div>
        <div className="flex justify-center  ">
        <div className="flex flex-col ">
          <p className="text-white text-sm text-center">Scroll</p>
          <div className="flex justify-center">
          <FaArrowDown className="text-white" />
          </div>
        </div>
       </div>
        
      </div>
    
    )
  }
  