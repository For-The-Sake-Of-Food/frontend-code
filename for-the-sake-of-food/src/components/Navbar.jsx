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
      className={`bg-gray-100 text-black fixed w-full top-0 h-16 transition-all duration-300 ${
        visible ? "transform translate-y-0" : "-translate-y-16"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/company-logo.jpg"
              alt="Company Logo"
              width={150}
              height={200}
            />
          </Link>
        </div>
        <ul className="flex list-none">
          <Link href="/about">
            <li className="mr-8">About</li>
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="mr-8">
              <Image
                src="/instagram-logo.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </li>
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <Image src="/x-logo.png" alt="X" width={30} height={30} />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

