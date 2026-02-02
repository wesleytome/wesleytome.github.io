"use client";

import { MapPin, Mail, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import type { FooterType } from "@/lib/sanity.types";

type FooterSectionProps = {
  footerData: FooterType;
};

const FooterSection = ({ footerData }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = footerData.copyrightText.replace("{year}", currentYear.toString());

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 text-accent-foreground bg-footer">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-display font-bold mb-4 text-secondary">
            {footerData.ctaTitle}
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            {footerData.ctaDescription}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground">{footerData.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-secondary" />
            <a href={`mailto:${footerData.email}`} className="text-primary-foreground hover:text-secondary transition-colors">
              {footerData.email}
            </a>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            variant="outline" 
            className="border-white hover:bg-white hover:text-dark text-secondary" 
            asChild
          >
            <a href={footerData.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              {footerData.linkedinLabel}
            </a>
          </Button>
        </div>
        
        <div className="border-t border-gray-600 pt-8">
          <p className="text-sm text-gray-400">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;