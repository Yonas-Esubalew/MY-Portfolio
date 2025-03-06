import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Footer links */}
      <div className="text-white-500 flex gap-2">
        <p className="hover:underline cursor-pointer">FAQ</p>
        <p>|</p>
        <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        <p>|</p>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
      </div>

      {/* Social icons */}
      <div className="flex gap-5">
        {/* Facebook */}
        <div className="social-icon bg-opacity-50 rounded-lg border-green-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 transition-all duration-200 cursor-pointer p-3">
          <FaFacebookF className="text-2xl text-white hover:text-green-500" />
        </div>

        {/* LinkedIn */}
        <div className="social-icon bg-opacity-50 rounded-lg border-green-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 transition-all duration-200 cursor-pointer p-3">
          <FaLinkedinIn className="text-2xl text-white hover:text-green-500" />
        </div>

        {/* GitHub */}
        <div className="social-icon bg-opacity-50 rounded-lg border-green-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 transition-all duration-200 cursor-pointer p-3">
          <FaGithub className="text-2xl text-white hover:text-green-500" />
        </div>

        {/* Twitter */}
        <div className="social-icon bg-opacity-50 rounded-lg border-green-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 transition-all duration-200 cursor-pointer p-3">
          <FaTwitter className="text-2xl text-white hover:text-green-500" />
        </div>

        {/* Instagram */}
        <div className="social-icon bg-opacity-50 rounded-lg border-green-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 transition-all duration-200 cursor-pointer p-3">
          <FaInstagram className="text-2xl text-white hover:text-green-500" />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white-500 text-sm">© 2025 Yonas Esubalew. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
