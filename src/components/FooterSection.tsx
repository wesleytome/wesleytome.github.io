import { MapPin } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { Mail, Linkedin } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';


const FooterSection = () => {
  const { theme } = useTheme();
  console.log("TEMAAA", theme);
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 text-accent-foreground bg-footer">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-display font-bold mb-4 text-white">
            Let's Work Together!
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your company through technology?
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className={`w-4 h-4 ${theme === 'light' ? 'text-white' : 'text-primary'}`} />
            <span>São Paulo, SP</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className={`w-4 h-4 ${theme === 'light' ? 'text-white' : 'text-primary'}`} />
            <a href="mailto:job@wesleytome.com" className="hover:text-primary transition-colors text-gray-300">
              job@wesleytome.com
            </a>
          </div>
          {/* <div className="flex items-center gap-2 text-gray-300">
            <Phone className="w-4 h-4 text-primary" />
            <span>+55 21 98029-8811</span>
          </div> */}
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          {/* <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" radius="full">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </Button> */}
          <Button 
            variant="solid" 
            className="border-white text-white hover:bg-white hover:text-dark" 
            radius="full"
            asChild
          >
            <a href="https://www.linkedin.com/in/wesleytome" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>

        </div>
        
        <div className="border-t border-gray-600 pt-8">
          <p className="text-sm text-gray-400">
            © 2025 Wesley Tomé. Transforming businesses through technology for 25 years.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection;