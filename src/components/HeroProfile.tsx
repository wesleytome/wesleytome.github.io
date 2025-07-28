import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Download } from "lucide-react";

const HeroProfile = () => {
  
  return (

    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="text-center lg:text-left"
      >
        
        {/* Profile Image with Circle Effect */}
        <div className="mb-8 flex justify-center lg:justify-center">
          <div className="relative plasma-effect mt-8 sm:mt-10 lg:mt-0">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl hero-profile">
              <img
                src="/profile-picture-wesley-tome.png"
                alt="Wesley Tomé"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>


        {/* Name */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold hero-title mb-2 font-grandis text-primary">
            Wesley Tomé
          </h1>
          <p className="text-xl sm:text-2xl hero-subtitle font-medium">
            Technology & Product Executive
          </p>
          <p className="text-m sm:text-1xl hero-description font-medium">
            25 years building scalable digital products, leading agile teams, and solving complex problems with innovative tech.
          </p>
        </m.div>

        {/* Social Links */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center lg:justify-center gap-4 mb-8"
        >
            <Button variant="outline" className="glass-card hover-lift social-icon">
              <a href="https://www.linkedin.com/in/wesleytome" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
        </m.div>               
        
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center lg:justify-start gap-4"
        >
          
          {/* Download CV Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"  variant="ghost">
            <Download className="mr-2 h-5 w-5" />
            <a href="/downloads/resume_wesley-tome_en.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </m.div>

      </m.div>
    </LazyMotion>  

  );
};
export default HeroProfile;