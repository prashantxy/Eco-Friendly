import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Script from 'next/script'
import { ThirdwebClientProvider } from "@/app/components/ThirdWebClientProvider";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from '@/app/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eco-Verse',
  description: 'Meta-Verse of Environment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebClientProvider>
        <Navbar />  {/* Replace Header with Navbar */}
        <main>
          {children}  {/* Main content area for each page */}
        </main>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" />  {/* External script for Three.js */}
        <Footer/>
        </ThirdwebClientProvider>
      </body>
    </html>
  )
}
