// src/components/Footer.jsx
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">MyApp</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/contect"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.63 0-4.77 2.14-4.77 4.77 0 .37.04.73.12 1.07A12.9 12.9 0 013 1.1a4.77 4.77 0 001.48 6.37A4.52 4.52 0 012 7.1v.06c0 2.3 1.64 4.22 3.82 4.65a4.52 4.52 0 01-2.15.08c.61 1.9 2.38 3.29 4.48 3.33A9.06 9.06 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.58A9.2 9.2 0 0023 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.93H7.5V12h2.5V9.5c0-2.48 1.48-3.85 3.74-3.85 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.75l-.44 2.87h-2.31v6.93c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
