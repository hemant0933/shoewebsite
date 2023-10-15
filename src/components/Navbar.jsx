import React from "react";
// import logo from '/icons8-portfolio-96.jpeg'

const Navbar = () => {
  return (
    <header>
      <nav className="w-full h-20 relative flex justify-center items-center p-4">
        <div className="absolute w-[540px] mx-auto rounded-full blur-lg  h-[40px] top-5 left-0 right-0 bg-zinc-100 -z-10"></div>
        <div className="text-black font-semibold inter">
            <ul className="flex justify-between uppercase gap-8">
                <li className="hover:text-gray-400 py-4 px-4">
                    <a href="/">Home</a>
                </li>
                <li className="hover:text-gray-400 py-4 px-4">
                    <a href="/">Collection</a>
                </li>
                <li className="hover:text-gray-400 py-4 px-4">
                    <a href="/">About</a>
                </li>
               
                <li className="hover:text-gray-400 py-4 px-4">
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
