"use client";

import { useState } from "react";
import { Hammer, GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TitleSection from "./TitleSection";
import type { TimelineType } from "@/lib/sanity.types";

interface TimelineSectionProps {
  timelineData: TimelineType;
}

const TimelineSection = ({ timelineData }: TimelineSectionProps) => {
  const experiences = timelineData.experiences.filter(exp => exp.type === "experience");
  const education = timelineData.experiences.filter(exp => exp.type === "education");

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

  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(new Set());

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
          <TitleSection title={timelineData.sectionTitle} subtitle={timelineData.sectionSubtitle} />
        </div>
        <p className="text-xl">
          {timelineData.sectionDescription}
        </p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full" />
        
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
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
                          {educationItem.company}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p>
                          {educationItem.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Center Dot */}
                <div className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 ${
                  yearIndex === 0 ? 'bg-success' : 'bg-primary'
                } rounded-full border-4 border-background shadow-lg z-10 animate-pulse-glow`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
