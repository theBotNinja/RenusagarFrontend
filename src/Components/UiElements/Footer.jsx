import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Theme } from "../../Context/Theme";
import { useContext } from "react";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/hindalco_logo.png";

export default function Footer() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <footer
      className={`${
        isDark ? "bg-black text-gray-100" : "bg-gray-300 text-black"
      } py-10 px-6 md:px-20`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div style={{backgroundImage:`url(${logo})`}} className="w-40 h-35 bg-contain bg-no-repeat bg-center" alt="Logo" ></div>
          <h2 className="text-2xl font-bold">Hindalco Renusagar</h2>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/powerplant" className="hover:text-blue-500">
                Power & Industry
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-blue-500">
                Explore
              </Link>
            </li>
            <li>
              <HashLink to="/#EducationSectionId" className="hover:text-blue-500">
                Education
              </HashLink>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Transport
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Visit
              </a>
            </li>
          </ul>
        </div>

        {/* Resources or Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-500">
                Helplines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Safety Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Volunteer
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="#">
              <FaFacebook className="hover:text-yellow-500" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-yellow-500" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-yellow-500" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-yellow-500" />
            </a>
          </div>
          <p className="text-sm">Subscribe for updates & alerts:</p>
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-1 w-full rounded-l-md  focus:outline-none"
            />
            <button className="px-4 rounded-r-md bg-red-500 hover:bg-red-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm ">
        © {new Date().getFullYear()} Hindalco. All rights reserved.
      </div>
    </footer>
  );
}
