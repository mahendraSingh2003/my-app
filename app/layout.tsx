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
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen m-0">
        <nav className="bg-gray-600 p-4 text-white flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <main className="flex-grow bg-[#0F172A]">
          {children}
        </main>

        <footer className="bg-blue-950 text-white py-10 px-6">
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     <div>
      <h3 className="text-lg font-semibold mb-3">About Us</h3>
      <p className="text-sm text-gray-300">
        We are committed to delivering quality services that help businesses grow and succeed online.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/services" className="hover:underline">Services</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <p className="text-sm text-gray-300">Email: support@yourcompany.com</p>
      <p className="text-sm text-gray-300">Phone: +1 234 567 890</p>
      <p className="text-sm text-gray-300">Address: 123 Business Rd, Tech City</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-400 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.36 8.4 8.4 0 01-2.7 1.03 4.22 4.22 0 00-7.2 3.85A12 12 0 013 4.82a4.23 4.23 0 001.3 5.63 4.21 4.21 0 01-1.9-.52v.05a4.22 4.22 0 003.39 4.13 4.27 4.27 0 01-1.89.07 4.23 4.23 0 003.95 2.94A8.47 8.47 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.3 8.3 0 0024 5.54a8.18 8.18 0 01-2.36.65 4.23 4.23 0 001.84-2.33z" />
          </svg>
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.13 8.44 9.88v-7h-2.54v-2.88h2.54v-2.2c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.76-1.62 1.53v1.9h2.75l-.44 2.88h-2.31v7C18.34 21.17 22 17.03 22 12.04c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.5 0h-19C1.1 0 0 1.1 0 2.5v19C0 22.9 1.1 24 2.5 24h19c1.4 0 2.5-1.1 2.5-2.5v-19C24 1.1 22.9 0 21.5 0zm-7.34 19.5H9.84v-6.5h-2V10h2v-1.6c0-2.1 1.2-3.4 3.6-3.4h2v2.1h-1.3c-.9 0-1.1.4-1.1 1v1.3h2.3l-.3 3h-2v6.5z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="text-center mt-10 text-sm text-gray-400">
    © {new Date().getFullYear()} YourCompanyName. All rights reserved.
  </div>
</footer>

      </body>
    </html>
  );
}

