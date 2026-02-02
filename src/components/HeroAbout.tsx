import { m, LazyMotion, domAnimation } from "framer-motion";
import type { HeroSectionType } from "@/lib/sanity.types";

const HeroAbout = ({ heroData }: { heroData: HeroSectionType }) => {
  
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {heroData.aboutMeTitle}
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
          {heroData.aboutMeParagraphs?.map((paragraph: string, index: number) => (
            <p key={index} className="text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </m.div>

        {/* Key Skills/Highlights */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 grid grid-cols-2 gap-4"
        >
          {heroData.stats?.map((stat: { value: string; label: string }, index: number) => (
            <div key={index} className="text-center p-4 glass-card interactive-card">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
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