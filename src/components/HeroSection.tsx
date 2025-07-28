import HeroScroller from './elements/HeroScroller';
import HeroProfile from './HeroProfile';
import HeroAbout from './HeroAbout';
import ThemeToggle from './elements/ThemeToggle';
import ThemeNotification from './elements/ThemeNotification';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative hero-section">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Theme Notification */}
      <ThemeNotification />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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
