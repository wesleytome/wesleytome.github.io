import { m, LazyMotion, domAnimation } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroScroller = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        
        {/* Texto indicativo */}
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-muted-foreground text-sm mb-4 tracking-wide"
        >
          SCROLL DOWN
        </m.p>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="cursor-pointer group scroll-button"
          aria-label="Scroll to next section"
        >
          <div className="w-[32px] h-[56px] rounded-3xl border-2 border-primary/60 flex justify-center items-start p-2 group-hover:border-primary transition-colors duration-300">
            <m.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-primary/80 group-hover:bg-primary transition-colors duration-300"
            />
          </div>
        </button>
        
        {/* Ícone adicional */}
        <m.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="mt-4 opacity-60"
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default HeroScroller;
