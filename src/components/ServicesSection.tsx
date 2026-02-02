import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Target, Rocket, Users } from "lucide-react";
import TitleSection from "./TitleSection";
import type { ServicesSectionType } from "@/lib/sanity.types";

interface ServicesSectionProps {
  servicesData: ServicesSectionType;
}

const ServicesSection = ({ servicesData }: ServicesSectionProps) => {
  // Icon mapping
  const iconMap: Record<string, any> = {
    Target,
    Rocket,
    Users,
    Briefcase,
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-full">
            <TitleSection title={servicesData.sectionTitle} subtitle={servicesData.sectionSubtitle} />
          </div>

        </div>
        <p className="text-lg max-w-3xl mx-auto">
          {servicesData.sectionDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.services.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Briefcase;
          return (
            <Card key={index} className="glass-card hover-lift interactive-card group border-0">
              <CardHeader className="space-y-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-secondary/20 group-hover:scale-110 transition-transform animate-float" 
                    style={{animationDelay: `${index * 0.5}s`}}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
              </CardHeader>
              <CardTitle className="space-y-4 text-2xl gradient-text px-6">{service.title}</CardTitle>
              <CardContent>
                <p className="leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  )
}

export default ServicesSection;