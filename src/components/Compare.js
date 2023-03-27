export default function Compare() {
    return (

        <div className="bg-gray-100 py-24 sm:py-32">
            {/* Compare section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <div className="flex flex-row space-x-3 justify-center">
                        {/* This section displays a title and subtitle with an icon */}
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="4" fill="#004F29" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 6.5C19 6.22386 19.2612 6 19.5833 6H23.0833C24.6942 6 26 7.11929 26 8.5V22.5C26 23.8807 24.6106 25.5 22.9998 25.5H18.9998C18.6776 25.5 19 24.7761 19 24.5C19 24.2239 19.1778 24.5 19.5 24.5H23C23.9665 24.5 24.8333 23.3284 24.8333 22.5V8.41616C24.8333 7.58773 24.1814 6.875 23.2149 6.875H19.7149C19.3927 6.875 19 6.77614 19 6.5Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.97744C18 6.39272 18.5346 6 19.0833 6H22.5833C24.4207 6 26 7.2904 26 8.98246V23.0175C26 24.7096 24.4207 26 22.5833 26H19.0833C18.5346 26 18 25.6073 18 25.0226C18 24.4378 18.5346 24.0451 19.0833 24.0451H22.5833C23.3233 24.0451 23.8333 23.5402 23.8333 23.0175V23.0133L23.9649 8.85714C23.9649 8.85652 23.9649 8.85589 23.9649 8.85527C23.9637 8.33332 23.454 7.82957 22.7149 7.82957H19.2149C19.0122 7.82957 18.7565 7.79998 18.5313 7.70342C18.3056 7.60661 18 7.38341 18 6.97744ZM18.9986 6.98447C18.9985 6.98447 18.9987 6.98417 18.999 6.98358L18.9986 6.98447ZM24.9276 8.49211C24.975 8.65051 25 8.815 25 8.98246V23.0175C25 24.0938 23.9676 25.0476 22.5833 25.0476H19.0833C19.0442 25.0476 19.0182 25.0341 19.0058 25.0234C19.0054 25.0231 19.0051 25.0228 19.0048 25.0226C19.0051 25.0223 19.0054 25.022 19.0058 25.0217C19.0182 25.011 19.0442 24.9975 19.0833 24.9975H22.5833C23.7756 24.9975 24.8319 24.157 24.8333 23.0198C24.8333 23.0191 24.8333 23.0183 24.8333 23.0175L24.9649 8.86136L24.9649 8.85714C24.9649 8.73161 24.9521 8.60969 24.9276 8.49211ZM18.9986 25.0155C18.9986 25.0155 18.9988 25.0158 18.999 25.0164L18.9986 25.0155ZM18.999 25.0287C18.9988 25.0293 18.9986 25.0296 18.9986 25.0296L18.999 25.0287Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 6C16.5523 6 17 6.44772 17 7V8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V7C15 6.44772 15.4477 6 16 6ZM16 11C16.5523 11 17 11.4477 17 12V14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14V12C15 11.4477 15.4477 11 16 11ZM16 17C16.5523 17 17 17.4477 17 18V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V18C15 17.4477 15.4477 17 16 17ZM16 23C16.5523 23 17 23.4477 17 24V25C17 25.5523 16.5523 26 16 26C15.4477 26 15 25.5523 15 25V24C15 23.4477 15.4477 23 16 23Z" fill="white" />
                            <path d="M9 7H12V25H9C7.89543 25 7 24.1046 7 23V9C7 7.89543 7.89543 7 9 7Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 9C6 7.34315 7.34315 6 9 6H12C12.5523 6 13 6.44772 13 7V25C13 25.5523 12.5523 26 12 26H9C7.34315 26 6 24.6569 6 23V9ZM9 8C8.44772 8 8 8.44772 8 9V23C8 23.5523 8.44772 24 9 24H11V8H9Z" fill="white" />
                        </svg>

                        <p className="text-green-500">Compare</p>
                    </div>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Compare soil data around the world            </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our platform is a collaborative platform where you can find
                        <b> relevant soil data </b>
                        for your projects,
                        <b> create your own queries, </b>
                        generate
                        <b> tables and maps, </b>
                        and easily save and share them.
                    </p>
                    <div className="mt-6 text-lg leading-8 text-gray-300">
                        <a href="" className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
                            Go to SoilHive
                        </a>
                    </div>




                </div>
                <div class="flex flex-row justify-center pl-20 pt-20">
                {/* This section displays a image and a description */}

                    <div class="text-sm pt-20 mb-4">
                        <p className="font-bold"> Step by step </p>
                        We guide you through <br /> the process
                        <div className="pl-20">

                            <svg width="64" height="109" viewBox="0 0 64 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7973 1.5319C5.47004 29.8 -13.4022 77.8024 25.6619 91.6312C35.2314 95.0188 43.7 92.4146 53.1749 90.1857C53.5842 90.0894 62.7054 86.3445 61.4635 85.7569C58.1381 84.1837 38.6857 74.6127 51.3576 80.6975C52.6982 81.3413 62.5438 84.1793 62.9002 85.6944C63.8713 89.8223 51.0189 103.547 48.6458 107.364" stroke="#BEBCC0" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>


                    </div>


                    <div class="w-full md:w-1/2 px-1">
                        <div class="embed-responsive aspect-ratio-16/9">
                            <img class="h-500 w-500" src="/images/compare.png"></img>
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
