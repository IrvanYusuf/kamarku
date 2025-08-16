import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 KamarKu. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                GDPR
              </Link>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span>hello@kamarku.com</span>
            </div>
            <div className="flex space-x-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>BTN, Pontianak</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
