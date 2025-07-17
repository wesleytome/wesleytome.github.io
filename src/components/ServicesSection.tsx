import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Target, Rocket, Users } from "lucide-react";
import TitleSection from "./TitleSection";

const ServicesSection = () => {

  // Data Structure - Services
  const services = [
    {
      title: "Executive Leadership & Strategy",
      description: "C-level strategic consulting combining business acumen with deep technology expertise. Proven experience leading large teams and driving organizational transformation across multiple industries.",
      icon: Target,
      color: "bg-gradient-to-br from-primary to-secondary/20"
    },
    {
      title: "Product & Technology Innovation",
      description: "End-to-end product development and technology strategy, from concept to scale. Experience building products that drive measurable business impact through innovative solutions.",
      icon: Rocket,
      color: "bg-gradient-to-br from-primary to-secondary/20"
    },
    {
      title: "Digital Transformation & Operations",
      description: "Enterprise-wide digital transformation leadership with proven expertise in operational excellence and scaling operations across LATAM markets.",
      icon: Users,
      color: "bg-gradient-to-br from-primary to-secondary/20"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-full">
            <TitleSection title="SERVICES" subtitle="What I Do" />
          </div>

        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Offering specialized technology consulting focused on strategy and development
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="glass-card hover-lift interactive-card group border-0">
            <CardHeader className="space-y-4 flex items-center justify-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform animate-float`} 
                  style={{animationDelay: `${index * 0.5}s`}}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardTitle className="space-y-4 text-2xl gradient-text">{service.title}</CardTitle>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection;