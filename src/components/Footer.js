import React from "react";
import colors from "tailwindcss/colors";

const Footer = () => {
  return (
    <div className="px-4 py-10 md:px-8 lg:px-16 xl:px-28 " style={{ "background": "#F6F6F6" }}>



      <div className="lg:flex lg:justify-between gap-6 xl:gap-10">

        <div className=" space-y-4 sm:w-max sm:pr-4 lg:pr-14 lg:border-r border-gray-300 pb-5">
          <h3 className="text-sm font-medium text-center sm:text-left" style={{ "color": "#333333" }}>JOIN OUR MAILING LIST</h3>

          <div className="flex justify-center sm:justify-start">
            <input className="w-full outline-none px-4 py-1.5 border border-gray-500" style={{ "color": "#0E3860", "border-radius": "4px" }} placeholder="Name" />
          </div>
          <div className="flex justify-center sm:justify-start">
            <input className="w-full outline-none px-4 py-1.5 border border-gray-500" style={{ "color": "#0E3860", "border-radius": "4px" }} placeholder="Password" type={"password"} />
          </div>

          <button className="text-white py-2 px-14 font-medium rounded-sm" style={{ "background": "#2695FF", }}> Send</button>


        </div>


        <div className="px-4 sm:px-0 py-4  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">

          <div className="space-y-1">
            <h1 className="text-sm font-bold pb-2" style={{ "color": "#333333" }}>OUR LOCATIONS</h1>

            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Toronto</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Calgary</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Montreal</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Edmonton </h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Vancouver</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Markham</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Mississauga</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Ottawa</h3>

          </div>


          <div className="space-y-1">
            <h1 className="text-sm font-bold pb-2" style={{ "color": "#333333" }}>About Us</h1>

            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Our Story</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Blogs & Articles</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Careers</h3>

          </div>


          <div className="space-y-1">
            <h1 className="text-sm font-bold pb-2" style={{ "color": "#333333" }}>OUR LOCATIONS</h1>

            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Toronto</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Calgary</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Montreal</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Edmonton </h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Vancouver</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Markham</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Mississauga</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Ottawa</h3>

          </div>


          <div className="space-y-1">
            <h1 className="text-sm font-bold pb-2" style={{ "color": "#333333" }}>OUR LOCATIONS</h1>

            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Toronto</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Calgary</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Montreal</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Edmonton </h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Vancouver</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Markham</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Mississauga</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Ottawa</h3>

          </div>

          <div className="space-y-1">
            <h1 className="text-sm font-bold pb-2" style={{ "color": "#333333" }}>HELP</h1>

            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Call</h3>
            <h3 className="text-sm cursor-pointer" style={{ "color": "#333333" }}>Email</h3>

          </div>

        </div>


      </div>






    </div>
  );
};

export default Footer;
