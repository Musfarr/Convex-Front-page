import React , {useState} from "react";

const Bar = () => {

  // const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  // const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // const [ispDropdownOpen, setIspDropdownOpen] = useState(false);

  // const toggleProductsDropdown = () => {
  //   setIsProductsDropdownOpen(!isProductsDropdownOpen);
  // };

  // const toggleServicesDropdown = () => {
  //   setIsServicesDropdownOpen(!isServicesDropdownOpen);
  // };

  // const togglepDropdown = () => {
  //   setIspDropdownOpen(!ispDropdownOpen);
  // };

  const [activedropdown , setactiveDropdown] = useState(false);

  const toggledropdown = (dropdownid) =>{

    if (activedropdown === dropdownid) {
        setactiveDropdown(null);
    }

    else{
      setactiveDropdown(dropdownid) ;
    }
  }



  //for dropdown in mobile view
  const [ divclassname , setdivclassname] = useState("hidden w-full md:flex md:w-auto");
  
  const togglevisibility = () => {

    const newdivname = divclassname ===  "hidden w-full md:flex md:w-auto" ? "w-full md:flex md:w-auto " : "hidden w-full md:flex md:w-auto" 
    setdivclassname(newdivname);
    // setdivclassname(!divclassname);
  }


  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center flex-shrink-0">
          <img
            src="https://www.convexinteractive.com/images/logoblack.svg"
            className="h-8 mr-3"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown1"
          type="button"
          onClick={togglevisibility}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          

          aria-controls="navbar-dropdown1"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
               fillRule="evenodd"
               clipRule="evenodd"
            />
          </svg>
        </button>

        <div className={divclassname} id="navbar-dropdown1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-5 md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg- rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 md:dark:bg-transparent"
                aria-current="page"
              >
                Our Story
              </a>
            </li>





            <li className="relative">
              <button onClick={() => toggledropdown('product')}
                id="productsdropdownNavbarLink"
                data-dropdown-toggle="productsdropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Products{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  fillRule="evenodd"
              clipRule="evenodd"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                    fillRule="evenodd"
              clipRule="evenodd"
                  />
                </svg>
              </button>



              <div
                id="productsdropdownNavbar"
                className={`${
                  activedropdown === "product" ? "block" : "hidden"
                } absolute left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
            </li>




           
            <li className="relative">
              <button
                onClick={() => toggledropdown('service')}
                id="dropdownNavbarLink2"
                data-dropdown-toggle="dropdownNavbar2"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Services{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className={`${
                  activedropdown === 'service' ? "block" : "hidden"
                } absolute left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
            </li>




            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg- rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 md:dark:bg-transparent"
                aria-current="page"
              >
                Whatsapp Business Api
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg- rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500  md:dark:bg-transparent"
                aria-current="page"
              >
                Awards and Recognitions 
              </a>
            </li>




            <li className="relative">
              <button
              onClick={() => toggledropdown('port')}
                id="pdropdownNavbarLink"
                data-dropdown-toggle="pdropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Portfolio{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  fillRule="evenodd"
              clipRule="evenodd"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                id="pdropdownNavbar"
                className={`${
                  activedropdown === 'port' ? "block" : "hidden"
                } absolute left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700 dark:divide-gray-600`}              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
            </li>



            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CASE STUDIES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
