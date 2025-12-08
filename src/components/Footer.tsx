import { Phone, Mail, MapPin } from 'lucide-react';
import { Contact } from '@/types/content';

interface FooterProps {
  siteName: string;
  contact: Contact;
}

const Footer = ({ siteName, contact }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-primary mb-4 tracking-wider">
              {siteName}
            </h3>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Professional auto body repair services with quality craftsmanship and competitive prices.
              Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-secondary-foreground mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-secondary-foreground mb-4 tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                {contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {currentYear} {siteName}. All rights reserved.
            </p>
            <p className="text-secondary-foreground/50 text-sm">
              Quality Auto Body Repair Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
