"use client";
import { UserButton, useAuth, useSession } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isNavbarVisible =
        currentScrollPos <= prevScrollPos || currentScrollPos < 10;

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
      className={`bg-white z-10 pr-10 text-black w-full top-0 h-16 transition-all duration-300 
      ${
        visible ? "transform translate-y-0" : "-translate-y-16"
      }
      `}
    >
      <div className="flex justify-end items-center container">
        {/* <div className="flex items-center pl-2">
          <Link href="/">
            <Image
              src="/company-logo.png"
              alt="Company Logo"
              width={150}
              height={200}
            />
          </Link>
        </div> */}
        <ul className="flex items-center list-none text-sm space-x-1 md:space-x-12 pr-7">
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
          {isSignedIn ? <UserButton afterSignOutUrl="/" /> : <Link href={"/sign-in"}>Login</Link>}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
