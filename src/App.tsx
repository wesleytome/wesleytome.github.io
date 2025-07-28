import GlobeSection from './components/GlobeSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import AwardsSection from './components/AwardsSection';
import CertificationsSection from './components/CertificationsSection';
// import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import { useRadixTheme } from './hooks/useRadixTheme';
import { useSystemTheme } from './hooks/useSystemTheme';
import { useThemeClasses } from './hooks/useThemeClasses';
import ThemeInitializer from './components/ThemeInitializer';

function App() {
  // Sincronizar tema do Radix UI
  useRadixTheme();
  
  // Detectar mudanças de tema do sistema
  useSystemTheme();
  
  // Aplicar classes CSS de tema
  useThemeClasses();
  
  return (
    <>
      <ThemeInitializer />
      <div className="min-h-screen bg- tech-pattern">
        
        {/* Hero Section */}
        <div id="hero" className="relative w-full overflow-hidden bg-gradient-top-to-bottom">
          {/* conteúdo do hero aqui */}
          <HeroSection />
          {/* O shape fica absolutamente posicionado, não interfere no layout */}
        </div>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-gradient-bottom-to-top">
          <ServicesSection />
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-top-to-bottom">
          <TimelineSection />
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bottom-to-top">
          <AwardsSection />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-top-to-bottom">
          <CertificationsSection />
        </section>

        {/* Contact Section */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <ContactSection />
        </section> */}


        <GlobeSection></GlobeSection> 

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  )
}

export default App
