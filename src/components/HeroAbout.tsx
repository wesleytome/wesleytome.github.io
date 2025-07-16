import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroAbout = () => {
  
  // Data Structure - About Me
  // const aboutMe = "Technology Executive and Product Leader with 25 years of experience bridging business strategy, product innovation, and technical execution. Proven track record of scaling operations across LATAM markets, leading digital transformation initiatives, and delivering measurable business impact through strategic technology solutions and high-performance team leadership.";

  // Data Structure - Statistics
  // const stats = [
  //   { value: "25", label: "Years of Experience" },
  //   { value: "70+", label: "Professionals Led" },
  //   { value: "+$2M", label: "Monthly Impact" },
  //   { value: "5", label: "LATAM Countries" }
  // ];

  const stats = [
    { value: "25", label: "Years of Experience" },
    { value: "70+", label: "Professionals Led" },
    { value: "+$2M", label: "Monthly Impact" },
    { value: "5", label: "LATAM Countries" }
  ];

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
            <span className="text-primary font-medium">Hello! I’m Wesley Tomé</span>, a technology-driven Product Executive with 25 years of experience building innovative digital solutions and leading high-impact product teams.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
          I specialize in  <strong className="text-foreground">product development, architecture, and digital strategy</strong>, blending deep technical expertise with agile leadership. I’ve led over 70 professionals across 8 squads, managed BRL 2M/month programs, and consistently delivered business results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
          As co-founder of two tech companies, I helped one double revenue in its first year, and launched an award-winning EdTech platform, recognized as a top innovation in Latin America.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
          Throughout my career, I've had the privilege of working with diverse teams across Latin America and beyond, developing a deep understanding of global markets and user behaviors.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I’ve worked across finance, education, retail, entertainment, and more, adapting fast, connecting dots, and driving results wherever technology is at the core. My passion lies in solving real-world problems with scalable, resilient, and secure solutions.
          </p>
        </m.div>

        {/* Key Skills/Highlights */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 grid grid-cols-2 gap-4"
        >
          {stats.map((stat: { value: string; label: string }, index: number) => (
            <div key={index} className="text-center p-4 glass-card interactive-card">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
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