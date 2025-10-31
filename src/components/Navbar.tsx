import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-etlc.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between w-full">
          {/* 🔰 Logo + Text (always side-by-side) */}
          <Link
            to="/"
            className="flex items-center space-x-3"
          >
            {/* Logo */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
              <img
                src={logo}
                alt="ETLC Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            {/* Text */}
            <span className="text-[15px] sm:text-lg md:text-xl font-heading font-bold text-primary leading-tight whitespace-nowrap">
              Easy Tech Learning Center
            </span>
          </Link>

          {/* 📱 Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* 💻 Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* 📱 Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col items-center space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body font-medium py-2 px-4 rounded-lg transition-colors w-full text-center ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
