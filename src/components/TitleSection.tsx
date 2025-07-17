import { m, LazyMotion, domAnimation } from "framer-motion";

const TitleSection = (props: { title: string, subtitle: string }) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-primary-600 p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-4xl sm:text-7xl md:text-7xl text-primary"
          style={{ fontFamily: "Morganite Black"}}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default TitleSection;
