import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EcoSystem Monitor',
  description: 'Monitor and contribute to ecosystem health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" />
      </body>
    </html>
  )
}

