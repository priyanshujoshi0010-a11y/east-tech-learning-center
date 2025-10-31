import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-etlc.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="ETLC Logo" className="w-12 h-12" />
              <span className="font-heading font-bold text-lg">ETLC</span>
            </div>
            <p className="text-sm opacity-90">
              Empowering students with quality computer education and practical skills for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-secondary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm hover:text-secondary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+918988066639" className="text-sm hover:text-secondary transition-colors">
                  +91 89880 66639
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:easytechlearningcenter@gmail.com" className="text-sm hover:text-secondary transition-colors break-all">
                  easytechlearningcenter@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Rampur Bushahr, Himachal Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Location</h3>
            <div className="w-full h-40 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.207604894136!2d77.41608918173573!3d31.43595110786515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905bd6536b51225%3A0xab74db6fc64bb529!2sNew%20Bus%20Stand%20Anni!5e0!3m2!1sen!2sin!4v1761374835611!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Easy Tech Learning Center Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Easy Tech Learning Center. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed by{" "}
            <a
              href="https://wa.me/917876814326?text=Hello%20Web%20Life%20Studio!%20I%20am%20interested%20in%20web%20designing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-secondary transition-colors"
            >
              Web Life Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
