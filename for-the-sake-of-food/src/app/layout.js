import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/Navbar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'For The Sake Of Food',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}
        </body>
    </html>
  )
}