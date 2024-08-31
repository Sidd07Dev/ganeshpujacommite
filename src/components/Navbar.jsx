import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src="https://res.cloudinary.com/codebysidd/image/upload/v1725128190/members/gz42n0lux0z4fai5qavg.png" alt="Ganesh Puja Committee Logo" className="h-20 w-20 mr-3 hover-lift bg-white rounded-full" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#president" className="hover:text-yellow-500">President</a>
          <a href="#secretary" className="hover:text-yellow-500">Secretary</a>
          <a href="#members" className="hover:text-yellow-500">Members</a>
          <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none hover-lift">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <a href="#president" className="block py-2 hover:text-yellow-500">President</a>
          <a href="#secretary" className="block py-2 hover:text-yellow-500">Secretary</a>
          <a href="#members" className="block py-2 hover:text-yellow-500">Members</a>
          <a href="#gallery" className="block py-2 hover:text-yellow-500">Gallery</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
