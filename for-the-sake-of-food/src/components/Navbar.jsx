"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isNavbarVisible = currentScrollPos <= prevScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isNavbarVisible);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-white z-10 text-black fixed w-full top-0 h-16 transition-all duration-300 ${
        visible ? "transform translate-y-0" : "-translate-y-16"
      }`}
    >
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center pl-0.1">
          <Link href="/">
            <Image
              src="/company-logo.png"
              alt="Company Logo"
              width={150}
              height={200}
            />
          </Link>
        </div>
        <ul className="flex list-none space-x-2 md:space-x-8">
          <Link href="/">
            <li className="px-4 md:px-8 py-4">Home</li>
          </Link>
          <Link href="/about">
            <li className="px-4 md:px-8 py-4">About us</li>
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="py-4">
              <Image
                src="/facebook-logo.png"
                alt="Facebook"
                width={18}
                height={18}
              />
            </li>
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="py-4">
              <Image src="/twitter-logo.png" alt="X" width={25} height={25} />
            </li>
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="py-4 ">
              <Image
                src="/instagram-logo.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
