import axios from "axios";
import { useState } from "react"


export default function Contact() {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessgae] = useState('');


const createMessage=async(e)=>{

  e.preventDefault();


  if (!name || !email || !message) {
    alert('Please fill out all fields');
    return;
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  try {
    const response = await axios.post("http://localhost:8000/api/messages", formData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};







  return (
    <div className="bg-yellow-80 py-24 sm:py-32 lg:px-8" id="contact">
      {/* Contact section */}

      <div className="text-center">
        {/* title for this section */}
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Don’t you see your question?
        </p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact sales</h2>

      </div>

      <div className="flex justify-center grid grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2">

        <div className="form pl-20">
          {/* A grid of fields for the user to input their name, email, and message */}

          <form onSubmit={createMessage}>
            <div className="grid grid-cols-1 gap-y-3 gap-x-8 sm:grid-cols-2">
              <div className="sm:col-span-2">

                <div className="mt-2.5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Name"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-[400px] rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div className="sm:col-span-2">

                <div className="mt-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-[400px]  rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">

                <div className="mt-2.5">
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e)=>setMessgae(e.target.value)}
                    placeholder="Your Message"
                    id="message"
                    rows={4}
                    className="block w-[400px] rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            </div>

           <div className="pt-5">
              <button type="submit" className="block w-100 rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Send message
              </button>
              </div>
           
          </form>
        </div>

        <div className="pl-500">
       
         <img  src="/svg/contact.svg" width="400" height="400"/>

        </div>
      </div>



    </div>



  )
}