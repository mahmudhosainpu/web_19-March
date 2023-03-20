import React from "react";

const Header = () => {
  return (
    <div className="h-max" style={{ "background": "#F8FBFF" }}>



      <nav>

        {/* Mobile Responsive */}
        <div className=" sm:hidden">

          <div className="relative" style={{ "background": "#00000073", }}>
            <div className=" flex justify-between p-4">

              <div>
                {/* Menu bar */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white cursor-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>

              <div className="text-white ">Your Logo Here</div>

              <div className="">
                {/* Search bar */}
                <div className="flex cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-white cursor-pointer my-auto">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                  <h3 className="text-white my-auto ml-2 font-medium cursor-pointer">Search</h3>
                </div>
              </div>

            </div>
          </div>

          <div className="flex absolute space-x-3 top-28 sm:top-32 left-10">
            <button className="text-white py-2 px-4 lg:px-14 lg:py-3 rounded-sm font-medium " style={{ "backgroundColor": "#2695FF", }}>Search Auction</button>
            <button className="text-white py-2 px-4 lg:px-14 lg:py-3 rounded-sm font-medium " style={{ "backgroundColor": "#F8B234", "color": "#BA0C26" }}>Search Auction</button>
          </div>

          <div>
            <img className="w-full -mt-14" src="Header mobile version-01 1.png" />
          </div>





        </div>


        {/* Desktop Responcive */}
        <div className="hidden sm:block">
          {/* Icon /Contact */}
          <div className="px-8 lg:px-20 xl:px-32 py-2 flex justify-between">
            <div className="flex space-x-2">
              <img className="w-6 h-6 my-auto cursor-pointer" src="facebook.png" />
              <img className="w-6 h-6 my-auto cursor-pointer" src="instagram.png" />
              <img className="w-6 h-6 my-auto cursor-pointer" src="Group (2).png" />
              <img className="w-6 h-6 my-auto cursor-pointer" src="twitter.png" />
            </div>

            <div className="flex space-x-4 lg:space-x-10">
              <img className="w-36 md:w-40 lg:w-48 cursor-pointer my-auto" src="office.png" />
              <div className="flex">
                <img className="w-4 h-4 my-auto cursor-pointer" src="email.png" />
                <h3 className="text-sm md:text-base my-auto ml-1" style={{ "color": "#0E3860" }}>example@xyz.com</h3>
              </div>

              <div className="flex">
                <img className="w-4 h-4 my-auto cursor-pointer" src="call.png" />
                <h3 className="text-sm md:text-base my-auto ml-1" style={{ "color": "#0E3860" }}>+330001110009</h3>
              </div>

            </div>

          </div>

          {/* Logo/ search bar/ login*/}
          <div className="relative px-8 lg:px-20 xl:px-32 py-2 flex justify-between " style={{ "background": "#00000073", "margin-top": "-4px" }}>

            {/* logo */}
            <div className="my-auto">
              <h1 className="text-lg my-auto text-white">Your Logo Here</h1>
            </div>

            <div className="flex space-x-8">

              {/* Search bar */}
              <div className="flex cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-white cursor-pointer my-auto">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
                <h3 className="text-white my-auto ml-2 font-medium cursor-pointer">Search</h3>
              </div>

              <h3 className="my-auto text-white  font-medium cursor-pointer">Login</h3>
              <h3 className="my-auto text-white  font-medium cursor-pointer">Signup</h3>

              <button className="text-white font-medium py-1.5 px-6 rounded-sm" style={{ "background": "#34D8B3" }}>Place Ad</button>

            </div>

          </div>

          <div className="flex absolute space-x-3 top-40 lg:top-52 xl:top-60 left-10 lg:left-20 xl:left-28">
            <button className="text-white py-2 px-4 lg:px-14 lg:py-3 rounded-sm font-medium" style={{ "backgroundColor": "#2695FF", }}>Search Auction</button>
            <button className="text-white py-2 px-4 lg:px-14 lg:py-3 rounded-sm font-medium" style={{ "backgroundColor": "#F8B234", "color": "#BA0C26" }}>Search Auction</button>
          </div>

          {/* Banner image */}
          <div className=" " style={{ "margin-top": "-52px" }}>
            <img src="Header 02-01-01 1.png" />
          </div>




        </div>


      </nav>







    </div>
  );
};

export default Header;
