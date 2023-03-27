export default function Donate() {
    return (

        <div className="bg-white py-24 sm:py-32">
            {/* Donate section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                   {/* This section displays a title and subtitle with an icon */}
                    <div className="flex flex-row space-x-3 justify-center">
                        <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="4" fill="#FF8E29" />
                            <path d="M24.703 19.5914C24.0084 19.8169 22.874 20.065 21.6467 20.3131C21.1837 21.0121 20.3733 21.5758 19.0999 21.7563C18.7988 21.8014 18.4747 21.8239 18.1274 21.8239C17.2476 21.8239 16.2288 21.7111 15.0945 21.5759C15.0019 21.5759 14.9092 21.5534 14.8398 21.5534C14.5387 21.5309 14.3304 21.2602 14.3535 20.9896C14.3766 20.6739 14.6545 20.4484 14.9787 20.471C15.0712 20.471 15.1639 20.4935 15.2564 20.4935C16.7151 20.6514 18.1042 20.8092 18.984 20.6739C20.6047 20.4258 21.091 19.4788 21.0215 18.667C20.9521 18.0131 20.4658 17.359 19.6787 17.4042C18.521 17.4493 17.2012 17.3365 15.9047 17.2013C14.4229 17.066 12.8717 16.9081 11.7835 17.066C11.1816 17.1561 10.1396 17.517 9.05157 17.9454C8.79688 18.0356 8.3106 18.2611 8.3106 18.2611L5.41667 18.261C5.18507 18.261 5 18.4414 5 18.6668V24.8681C5 25.0936 5.18524 25.2739 5.41667 25.2739H8.24131C10.4408 26.0406 13.1497 26.875 14.7472 26.9877C17.9655 27.2357 24.2862 23.6728 26.1153 22.5228C27.9212 21.3954 26.7173 18.9375 24.7029 19.5914L24.703 19.5914Z" 
                            fill="white" />
                            <path d="M15.7188 6.05134L15.9789 6.35281L16.2602 6.05184C17.0453 5.23158 18.1328 4.85825 19.2016 5.04893C20.8164 5.33734 22 6.83517 22 8.59126V8.73697C22 9.77957 21.5969 10.777 20.8844 11.4879L16.6492 15.7262C16.4734 15.902 16.2414 16 16 16C15.7586 16 15.5266 15.902 15.3508 15.7262L11.1154 11.4879C10.4038 10.777 10 9.77957 10 8.73697V8.59126C10 6.83517 11.1841 5.33734 12.7984 5.04893C13.8461 4.85825 14.9547 5.23158 15.7188 6.05134ZM15.9789 8.05866L14.9242 6.8829C14.4156 6.35985 13.6938 6.11163 12.9836 6.23825C11.9113 6.42994 11.125 7.42556 11.125 8.59126V8.73697C11.125 9.44544 11.3995 10.1238 11.883 10.6061L16 14.7263L20.118 10.6061C20.6008 10.1238 20.875 9.44544 20.875 8.73697V8.59126C20.875 7.42556 20.0875 6.42994 19.0164 6.23825C18.3063 6.11163 17.5844 6.35985 17.0758 6.8829L15.9789 8.05866Z" 
                            fill="white" />
                        </svg>

                        <p className="text-orange-500">Donate</p>
                    </div>

                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Fill the soil data gap
                    </p>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Bridge existing soil data gaps by contributing with
                        <b> personal soil data </b>
                        or
                        <p>by launching soil
                            <b> sampling campaign </b>
                        </p>
                    </p>
                    <div className="mt-6 text-lg leading-8 text-gray-300">
                        <a href="" className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
                            Go to SoilHive
                        </a>
                    </div>



                </div>
                {/* This section displays a images and a description */}

                <div class="mx-auto flex flex-row justify-center pl-20 pt-20">

                    <div class="text-sm pt-20 mb-4">
                        <p className="font-bold"> Filters and results </p>
                        Useful and user <br />friendly search method

                        <div className="pl-20">
                            <svg width="64" height="109" viewBox="0 0 64 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7973 1.5319C5.47004 29.8 -13.4022 77.8024 25.6619 91.6312C35.2314 95.0188 43.7 92.4146 53.1749 90.1857C53.5842 90.0894 62.7054 86.3445 61.4635 85.7569C58.1381 84.1837 38.6857 74.6127 51.3576 80.6975C52.6982 81.3413 62.5438 84.1793 62.9002 85.6944C63.8713 89.8223 51.0189 103.547 48.6458 107.364" stroke="#BEBCC0" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>


                    <div class="w-full md:w-1/2 px-1">
                        <div class="embed-responsive aspect-ratio-16/9">
                            <img class="h-975 w-593" src="/images/donate.png" autoplay></img>
                        </div>
                    </div>




                    <div class="text-sm pt-20  mb-4">
                        <p className="font-bold"> Filters and results </p>
                        Useful and user friendly search method
                        <svg width="134" height="70" viewBox="0 0 134 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M132.636 1.14728C124.703 25.1255 113.951 49.0821 91.6258 62.7085C85.4374 66.4856 73.9438 70.9012 66.8477 66.57C60.6808 62.8061 57.4555 53.1263 56.2853 46.5074C55.1415 40.0378 55.7348 32.4104 59.6776 27.0157C61.4665 24.568 64.2995 22.8693 66.137 25.9329C71.01 34.057 62.4814 45.4421 53.9509 45.8986C41.2453 46.5785 28.2041 38.8987 15.7512 41.9119C14.324 42.2572 6.43273 43.0842 7.11913 45.921C7.8273 48.8477 13.0526 49.5916 15.115 51.1879C18.2678 53.6279 8.06932 47.3311 4.24984 46.1885C1.23666 45.2871 0.976609 45.9053 4.24327 43.7362C7.594 41.5112 12.2916 37.2903 12.6493 33.0603" stroke="#BEBCC0" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </div>

                </div>

                <div className="flex flex-row justify-center">
                    <div>
                        <h2 className="font-bold">Datasources</h2>
                        <p>Select the sources you <br /> want soil info from</p>
                    </div>
                    <div>
                        <svg width="45" height="116" viewBox="0 0 45 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.48581 100.92C5.2679 105.433 11.4656 115.637 19.0355 114.24C22.8442 113.537 22.7199 107.205 22.5512 104.474C22.2529 99.6402 21.3561 94.0634 22.1936 89.2763C23.0887 84.1597 27.1896 86.9682 30.4675 88.4214C41.7082 93.4046 45.1261 89.002 42.7152 77.5171C38.7329 58.5466 28.3284 40.9763 21.1798 23.1097C18.6707 16.8387 15.3742 11.0152 13.2077 4.62053C12.4488 2.38058 11.1795 1.9786 10.8317 4.59273C10.5833 6.46001 9.56163 19.3099 10.3419 12.0868C10.6719 9.03088 8.94902 4.22856 9.93479 1.46504C10.5807 -0.345786 20.9806 8.63251 24.4633 9.05699" stroke="#BEBCC0" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </div>

                </div>
            </div>


        </div>

    )
}
