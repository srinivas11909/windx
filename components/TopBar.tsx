// components/TopBar.tsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm border-b">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
        {/* Left Side: Email + Location */}
        <div className="flex space-x-6 items-center">
          <a
            href="mailto:info@windshieldmasters.co.in"
            className="flex items-center text-gray-700 hover:text-red-600 transition"
          >
            <MdEmail className="mr-1 text-red-600" />
            info@windshieldmasters.co.in
          </a>
          <span className="flex items-center text-gray-700">
            <MdLocationOn className="mr-1 text-red-600" />
            HBR Layout, Bengaluru
          </span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4 text-gray-700">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
