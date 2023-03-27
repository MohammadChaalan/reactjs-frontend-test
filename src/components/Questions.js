import { useEffect, useState } from 'react';
import Contact from './Contact';

export default function Questions() {

    const [questions , setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/questions')
        .then(res=>res.json())
        .then(data=>{
            setQuestions(data.question);

            }
        )
        .catch(error => {
            console.log(error);
          });

   }, []);

    return (
        <div className="bg-gradient-to-b from-yellow-200 to-transparentpy-24 sm:py-32" id='questions' >
            {/* Questions section */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                     {/* Title */}
                    <p class="mt-2 font-ivypresto font-bold-80 text-4xl leading-58 text-center text-gray-900 tracking-tight">
                        Frequently asked questions

                    </p>

                </div>
                <div className="flex flex-row justify-center mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                    {/* grid questions */}
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {/* Loop through questions */}
                        {questions.slice(0, 6).map((question)=> (
                            <div key={question.id}>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                                        <div className="h-6 w-6 text-white" aria-hidden="true">

                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="4" fill="#AA8B4D" />
                                                <path d="M13.5 8.5C12.6703 8.5 12 9.17031 12 10C12 10.8297 11.3297 11.5 10.5 11.5C9.67031 11.5 9 10.8297 9 10C9 7.51562 11.0156 5.5 13.5 5.5H18.0469C21.3328 5.5 24 8.16719 24 11.4531C24 13.9094 22.4906 16.1125 20.2031 17.0031L17.25 18.1516V19C17.25 19.8297 16.5797 20.5 15.75 20.5C14.9203 20.5 14.25 19.8297 14.25 19V18.1516C14.25 16.9141 15.0094 15.8031 16.1625 15.3578L19.1156 14.2094C20.25 13.7641 21 12.6719 21 11.4531C21 9.82188 19.6781 8.5 18.0469 8.5H13.5ZM15.75 26.5C14.7141 26.5 13.875 25.6609 13.875 24.625C13.875 23.5891 14.7141 22.75 15.75 22.75C16.7859 22.75 17.625 23.5891 17.625 24.625C17.625 25.6609 16.7859 26.5 15.75 26.5Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    Questions
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{question.message}</dd>
                            </div>
                            </div>
                        ))}
                    </dl> 



                    </div>

                  
            </div>
            <Contact />
        </div>
    )
}
