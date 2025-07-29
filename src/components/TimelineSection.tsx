import { useState } from "react";
import { Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { GraduationCap, Briefcase } from "lucide-react";
import TitleSection from "./TitleSection";

const TimelineSection = () => {

  // Data Structure - Professional Experience
  const experiences = [
    {
      year: "Present",
      title: "Available for New Opportunities",
      company: "Executive Consultant",
      description: "Currently available for executive roles in technology, product management, and digital transformation.",
      responsibilities: [
        "Seeking C-level or VP positions in Technology and Product",
        "Available for digital transformation consulting projects",
        "Open to board advisory roles in tech startups",
        "Interested in LATAM expansion leadership opportunities"
      ]
    },
    {
      year: "2021-2023",
      title: "Head of Growth Marketing LATAM / Senior Manager",
      company: "Itaú Unibanco",
      description: "Led regional growth strategies for Latin America's largest financial institution.",
      responsibilities: [
        "Managed cross-functional teams for regional growth initiatives",
        "Implemented AI-based analytics solutions for customer acquisition",
        "Led Salesforce CRM adoption as certified Trailblazer",
        "Coordinated regulatory compliance across LATAM markets",
        "Optimized operational processes and cost management",
        "Oversaw Martech and AdTech solutions to drive performance",
        "Created executive dashboards and reports for senior leadership",
        "Mapped digital maturity and proposed evolution plans across countries",
        "Directed internal and external marketing events across the region"
      ]
    },
    {
      year: "2019-2021",
      title: "Program Manager / Group Product Manager",
      company: "Accenture",
      description: "Managed large-scale digital transformation programs for enterprise clients.",
      responsibilities: [
        "Led strategic planning and execution of complex programs and products",
        "Managed multidisciplinary squads including engineers, designers, and PMs",
        "Oversaw budgets, forecasts, and financial reporting",
        "Facilitated agile transformation and mentored teams",
        "Reported status and risks to senior stakeholders through executive decks",
        "Ensured alignment of program goals with customer needs and value delivery",
        "Supervised rollout of digital solutions in multiple industries",
        "Coordinated software architecture restructuring for high-scale systems"
      ]
    },
    {
      year: "2013-2018",
      title: "Co-founder & Product Director",
      company: "BASE 2 Soluções",
      description: "Co-founded and scaled technology consulting company specializing in digital solutions for enterprise clients. Led product development, business strategy, and client relationships while building a team of 25+ professionals.",
      responsibilities: [
        "Managed end-to-end business operations: finance, HR, sales, and support",
        "Developed strategic plans and executed business development actions",
        "Oversaw software projects using both agile and traditional methodologies",
        "Built and maintained partnerships with clients and stakeholders",
        "Validated innovative solutions through MVPs and proof of concept",
        "Promoted a strong company culture based on agility and innovation",
        "Supervised live event transmissions and technology operations"
      ]
    },
    {
      year: "2009-2013",
      title: "Project Manager", 
      company: "Microwave",
      description: "Evolved from systems analyst to project management, building strong client relationships and serving as technical liaison between development teams and enterprise clients across diverse industry verticals.",
      responsibilities: [
        "Managed full project lifecycle from planning to production deployment",
        "Coordinated multidisciplinary teams including design, development, content, and marketing",
        "Oversaw agile and traditional project management approaches",
        "Built and nurtured long-term relationships with clients",
        "Directed advertising and banner campaigns for major brands",
        "Led strategic initiatives in high-impact and sensitive digital projects",
        "Defined and implemented workflow processes to improve delivery",
        "Participated in the special project “Be Different is Normal” featured on national TV"
      ]
    },
    {
      year: "2008-2009",
      title: "System Analyst / Software Developer", 
      company: "Microwave",
      description: "Developed scalable web systems with a strong focus on architecture, performance, and integration.",
      responsibilities: [
        "Designed and implemented responsive, cross-browser web applications",
        "Developed RESTful APIs and integrated third-party systems",
        "Translated business requirements into technical solutions",
        "Modeled databases and optimized queries for performance",
        "Ensured compliance with W3C standards and accessibility guidelines",
        "Led root cause analysis and implemented corrective actions",
        "Mentored developers and led recruitment processes for engineering roles",
        "Built dashboards and metrics with Google Analytics and Tag Manager"
      ]
    },
    {
      year: "2004-2007",
      title: "Senior Systems Analyst",
      company: "Audiorama", 
      description: "Delivered end-to-end web development projects with focus on scalability, performance, and usability.",
      responsibilities: [
        "Led full software development lifecycle, from requirements to deployment",
        "Developed front-end and back-end features using PHP, ASP, HTML, CSS e JavaScript",
        "Modeled and optimized relational databases with SQL Server and MySQL",
        "Implemented RESTful APIs and system integrations",
        "Created responsive interfaces and ensured cross-browser compatibility",
        "Established coding standards, documentation practices, and reusable components",
        "Conducted code reviews to improve quality and reduce production bugs"
      ]
    },
    {
      year: "2002-2004",
      title: "Web Developer",
      company: "Sirius",
      description: "Built and enhanced interactive web solutions for digital campaigns and platforms.",
      responsibilities: [
        "Developed and maintained web pages using HTML, CSS, JavaScript, ASP, Lumis, and XSL",
        "Collaborated with designers and content teams to implement dynamic site features",
        "Ensured cross-browser compatibility and adherence to web standards",
        "Troubleshot front‑end issues and optimized page performance",
        "Supported back‑end integration with content management systems"
      ]
    },
    {
      year: "2000-2002",
      title: "Developer and Designer",
      company: "AOPEC",
      description: "Blended design and development to strengthen the company’s visual and educational offerings.",
      responsibilities: [
        "Created and implemented the company’s visual identity and comprehensive brand guide",
        "Developed and maintained the institutional website, optimizing UX/UI design",
        "Prepared and managed laboratory environments for practical Java, PHP, Linux, and Oracle classes",
        "Designed and executed segmented email marketing campaigns to boost engagement",
        "Collaborated with instructors and technical teams to troubleshoot and resolve class‑related issues"
      ]
    }
  ];


  // Data Structure - Education
  const education = [
    {
      year: "2009-2011",
      title: "Project Management",
      institution: "FGV - Getúlio Vargas Foundation",
      description: "Deepened knowledge in project management methodologies and best practices."
    },
    {
      year: "2007",
      title: ".NET Developer Certification",
      institution: "UNESA / Microsoft Partnership",
      description: "Microsoft certified .NET Developer program in partnership with UNESA."
    },
    {
      year: "2004-2007", 
      title: "Bachelor of Information Systems",
      institution: "UNESA - Estácio de Sá University",
      description: "4-year bachelor degree completed in 3 years due to previous academic credits."
    },
    {
      year: "2002",
      title: "Linux Administrator",
      institution: "AOPEC",
      description: "Linux Administration certification with 192 hours of training."
    },
    {
      year: "2001",
      title: "DBA Oracle",
      institution: "AOPEC", 
      description: "Oracle Database Administration certification with 192 hours of training."
    },
    {
      year: "2000-2002",
      title: "Creation and Management of Internet Environment",
      institution: "UNESA - Estácio de Sá University",
      description: "First year dedicated to design, second year to development. Provided good creative vision and understanding from layout to coding."
    }
  ];



  // Sort data for timeline
  const sortedExperiences = [...experiences].sort((a, b) => {
    const getYear = (year: string) => {
      if (year === "Present") return 9999;
      return parseInt(year.split('-')[0]);
    };
    return getYear(b.year) - getYear(a.year);
  });

  const sortedEducation = [...education].sort((a, b) => {
    const getYear = (year: string) => parseInt(year.split('-')[0]);
    return getYear(b.year) - getYear(a.year);
  });

  // Adicione este estado no componente principal
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(new Set());

  // Função para toggle da expansão
  const toggleExpansion = (experienceId: string) => {
    const newExpanded = new Set(expandedExperiences);
    if (newExpanded.has(experienceId)) {
      newExpanded.delete(experienceId);
    } else {
      newExpanded.add(experienceId);
    }
    setExpandedExperiences(newExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
          <Hammer className="h-6 w-6 text-primary" />
          <GraduationCap className="h-6 w-6 text-primary ml-10" />
        </div>
        <div className="w-full">
          <TitleSection title="MY JOURNEY" subtitle="Experiences & Education" />
        </div>
        <p className="text-xl">
          Professional experiences and academic background
        </p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full"></div>
        
        {/* Timeline Items */}
        <div className="space-y-8">
          {[...new Set([
            ...sortedExperiences.map(exp => exp.year),
            ...sortedEducation.map(edu => edu.year)
          ])].sort((a, b) => {
            const getYear = (year: string) => {
              if (year === "Present") return 9999;
              return parseInt(year.split('-')[0]);
            };
            return getYear(b) - getYear(a);
          }).map((year, yearIndex) => {
            const experienceItem = sortedExperiences.find(exp => exp.year === year);
            const educationItem = sortedEducation.find(edu => edu.year === year);
            
            return (
              <div key={year} className="relative grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Side - Experiences */}
                <div className="lg:text-right lg:pr-8">
                  {experienceItem && (
                    <Card className="glass-card hover-lift interactive-card border-0 animate-slide-in-left" 
                          style={{animationDelay: `${yearIndex * 0.2}s`}}>
                      <CardHeader>
                        <div className="flex items-center gap-3 lg:justify-end">
                          <Badge className="bg-secondary/20 text-primary">
                            {experienceItem.year}
                          </Badge>
                          <div className="p-2 rounded-full bg-primary/10">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <CardTitle className={`text-xl lg:text-right ${
                                                                        yearIndex === 0 ? 'text-success text-2xl' : 'gradient-text'
                                                                      }`}>
                          {experienceItem.title}
                        </CardTitle>
                        <p className="text-xl lg:text-right">
                          {experienceItem.company}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="lg:text-right">
                        <p className="mb-4">
                          {experienceItem.description}
                        </p>
                        
                        {experienceItem.responsibilities && experienceItem.responsibilities.length > 0 && (
                          <div className="space-y-2">
                            {/* Botão estilizado */}
                            <button
                              onClick={() => toggleExpansion(experienceItem.year)}
                              className="group flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-all duration-200 lg:ml-auto bg-primary/10 hover:bg-primary/20 px-3 py-1 rounded-full"
                            >
                              <span>View Responsibilities</span>
                              <div className={`transform transition-transform duration-200 ${
                                expandedExperiences.has(experienceItem.year) ? 'rotate-90' : ''
                              }`}>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </button>
                            
                            {/* Conteúdo com animação de slide */}
                            <div className={`grid transition-all duration-300 ease-in-out ${
                              expandedExperiences.has(experienceItem.year) 
                                ? 'grid-rows-[1fr] opacity-100' 
                                : 'grid-rows-[0fr] opacity-0'
                            }`}>
                              <div className="overflow-hidden">
                                <div className="space-y-2 pt-2 pb-1">
                                  {experienceItem.responsibilities.map((responsibility, i) => (
                                    <div 
                                      key={i} 
                                      className="flex items-start gap-2 lg:justify-end animate-fade-in-up"
                                      style={{ animationDelay: `${i * 0.1}s` }}
                                    >
                                      <span className="text-sm lg:text-right">
                                        {responsibility}
                                      </span>
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>

                    </Card>
                  )}
                </div>

                {/* Right Side - Education */}
                <div className="lg:pl-8">
                  {educationItem && (
                    <Card className="glass-card hover-lift interactive-card border-0 animate-slide-in-right"
                          style={{animationDelay: `${yearIndex * 0.2}s`}}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-secondary/10">
                            <GraduationCap className="w-5 h-5 text-secondary" />
                          </div>
                          <Badge className="bg-secondary/20 text-secondary">
                            {educationItem.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl gradient-text">
                          {educationItem.title}
                        </CardTitle>
                        <p className="text-xl">
                          {educationItem.institution}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="">
                          {educationItem.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Center Dot */}
                <div className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 ${
                                                                        yearIndex === 0 ? 'bg-success' : 'bg-primary'
                                                                      } rounded-full border-4 border-background shadow-lg z-10 animate-pulse-glow`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )

}

export default TimelineSection;