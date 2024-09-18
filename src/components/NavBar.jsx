import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import Logo from '/src/assets/L.png'; // Import your logo

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900 shadow-lg z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">GYM</span>
            <img alt="GYM logo" src={Logo} className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            aria-label="Open main menu"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#header" className="text-sm font-semibold leading-6 text-white hover:text-indigo-500">
            Home
          </a>
          <a href="#about" className="text-sm font-semibold leading-6 text-white hover:text-indigo-500">
            About us
          </a>
          <a href="#services" className="text-sm font-semibold leading-6 text-white hover:text-indigo-500">
            Services & Packs
          </a>
          <a href="#client" className="text-sm font-semibold leading-6 text-white hover:text-indigo-500">
            Client
          </a>
          <a href="#comment" className="text-sm font-semibold leading-6 text-white hover:text-indigo-500">
            Comment
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/signin"
            className="group relative flex flex-row items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all"
          >
            <span className="inline bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              Get Started
            </span>
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">GYM</span>
            <img alt="GYM logo" src={Logo} className="h-8 w-auto" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-white"
            aria-label="Close menu"
          >
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="#header"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </a>
              <a
                href="#services"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services & Packs
              </a>
              <a
                href="#client"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client
              </a>
              <a
                href="#comment"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comment
              </a>
            </div>
            <div className="py-6">
              <Link
                to="/signin"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
