import GlobeSection from './components/GlobeSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import AwardsSection from './components/AwardsSection';
import CertificationsSection from './components/CertificationsSection';
// import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  
  return (
    <div className="min-h-screen bg- tech-pattern">
      
      {/* Hero Section */}
      <div id="hero" className="relative w-full overflow-hidden bg-gradient-to-b from-blue to-slate-950">
        {/* conteúdo do hero aqui */}
        <HeroSection />
        {/* O shape fica absolutamente posicionado, não interfere no layout */}
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-t from-blue to-slate-950">
        <ServicesSection />
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue to-slate-950">
        <TimelineSection />
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue to-slate-950">
        <AwardsSection />
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue to-slate-950">
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
  )
}

export default App
