import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import { MyContextProvider } from "@/components/MyContext";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "For The Sake Of Food",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        button: {
          color: 'red'
        }
      }
    }}
    >
      <html lang="en">
        <body className={inter.className}>
          <MyContextProvider>
            <div className="flex flex-1 w-full">
              <div className="">
                <Sidenav />
              </div>
              <div className="w-full">
                <NavBar />
                {children}
              </div>
            </div>
          </MyContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
