"use client";
import Link from "next/link";
import { useState,useEffect} from "react";
import {
  Heart,
  ShoppingCart,
  NotebookText,
  Search,
  MessagesSquare,
  Menu,
} from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Favourites", href: "/favorites", icon: Heart },
  { name: "Grocery Shopping", href: "/grocery-shopping", icon: ShoppingCart },
  { name: "Meal Plan", href: "/meal-plan", icon: NotebookText },
  {
    name: "Nutritional Overview",
    href: "/nutritional-overview",
    icon: Search,
  },
  { name: "Nutribot", href: "/nutribot", icon: MessagesSquare },
];

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set translation value based on scroll position
      const translation = isOpen ? 0 : Math.min(-16, -scrollY / 5);

      // Apply translation to the sidebar
      document.getElementById(
        "sidenav"
      ).style.transform = `translateY(${translation}rem)`;
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="h-full flex mr-10">
      {/* Button and Icon Container */}
      <div
        className={`fixed z-10 bg-white h-full ${
          isOpen ? "w-48" : "w-16"
        } transition-all duration-300 ease-in-out transform translate-x-${
          isOpen ? "0" : "-16"
        }`}
      >
        {/* Company Logo */}
        <Link href="/">
          <div className="relative flex w-25 h-12 ">
            {isOpen ? (
              <Image
                src="/company-logo.png"
                alt="Another Image"
                fill
                className="object-cover"
              />
            ) : (
              <Image
                src="/bowlnobg.png"
                alt="Company Logo"
                width={60}
                height={80}
                className="pl-1 pb-1 object-fill"
              />
            )}
          </div>
        </Link>
        {/* Toggle Button */}
        <button
          className="px-4 py-3 flex items-center hover:bg-gray-200"
          onClick={toggleSidenav}
        >
          <Menu size={25} />
        </button>

        {/* Side Navigation List */}
        <ul className="space-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="py-2 px-4 hover:bg-gray-200 flex items-center transition-all duration-300 ease-in-out"
              >
                <item.icon />
                {isOpen && (
                  <div className="flex items-center transition-all duration-300 ease-in-out">
                    <span className="ml-2 text-base">{item.name}</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidenav;