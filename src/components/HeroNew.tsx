import React from 'react';
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Linkedin, Github, Mail, Download, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScroller from './elements/HeroScroller';
import HeroProfile from './HeroProfile';
import HeroAbout from './HeroAbout';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          
          {/* Left Side - Profile Image, Name and Social Icons */}
          <HeroProfile />

          {/* Right Side - About Me Content */}
          <HeroAbout />
          <HeroScroller />
        </div>
      </div>
    </section>
  );
};

export default Hero;
