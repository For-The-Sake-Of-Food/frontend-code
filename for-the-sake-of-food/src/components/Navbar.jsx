"use client";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white text-black -4p flex justify-between items-center fixed w-full top-0 h-16">
      <div className="flex items-center">
        <Image
          src="/company-logo.jpg"
          alt="Company Logo"
          width={150}
          height={200}
        />
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
    </nav>
  );
};

export default NavBar;
