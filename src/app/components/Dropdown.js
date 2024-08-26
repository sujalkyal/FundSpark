// components/Dropdown.js
import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Dropdown = ({username}) => {
  const {data : session} = useSession()
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="mx-4 relative inline-block text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        id="dropdownHoverButton"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
        type="button"
      >
        Welcome {username}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownHover"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
            
            <li>
            <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
