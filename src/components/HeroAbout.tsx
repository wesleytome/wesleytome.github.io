import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroAbout = () => {

  return (

    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
        className="flex flex-col justify-center"
      >
        
        {/* About Me Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </m.div>

        {/* About Me Content */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="text-primary font-medium">Hello! I'm Wesley Tomé,</span> a passionate Product Strategy & Growth Executive with over 8 years of experience driving innovation and growth in the FinTech and B2B SaaS industries.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in <strong className="text-foreground">data-driven product strategy</strong>, cross-functional team leadership, and scaling products from concept to market success. My expertise spans product management, growth hacking, and building high-performing teams.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Throughout my career, I've had the privilege of working with diverse teams across Latin America and beyond, developing a deep understanding of global markets and user behaviors.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not building products, you'll find me exploring new technologies, mentoring upcoming product managers, or traveling to discover new cultures and perspectives.
          </p>
        </m.div>

        {/* Key Skills/Highlights */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 grid grid-cols-2 gap-4"
        >
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">25</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Products Launched</div>
          </div>
          
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">70+</div>
            <div className="text-sm text-muted-foreground">Team Members Led</div>
          </div>
          
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">6</div>
            <div className="text-sm text-muted-foreground">LATAM Countries</div>
          </div>
        </m.div>

        {/* CTA Button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8"
        >
          
        </m.div>

      </m.div>
    </LazyMotion>

  );
};
export default HeroAbout;