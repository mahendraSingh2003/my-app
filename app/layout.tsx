import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Website',
  description: 'A 4-page site using Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <nav className="bg-blue-600 p-4 text-white flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="p-6">{children}</main>
         <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
     </footer>
      </body>
    </html>
  )
}
