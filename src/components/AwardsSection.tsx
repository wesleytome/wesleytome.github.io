import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import TitleSection from "./TitleSection";

const AwardsSection = () => {

  // Data Structure - Awards
  const awards = [
    {
      title: "1st Place - Oi Week",
      description: "Innovative EdTech SaaS solution recognized at Open Innovation Week",
      year: "2016"
    },
    {
      title: "3rd Place - Open Startups LATAM",
      description: "Regional recognition for innovation in enterprise solutions",
      year: "2017"
    },
    {
      title: "Best Microsite - Latin American Excellence Awards",
      description: "Excellence award in design and digital experience",
      year: "2018"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <div className="w-full">
          <TitleSection title="AWARD & ACHIEVEMENT" subtitle="Works That I'm Proud Of" />
        </div>
        <p className="text-xl text-muted-foreground">
          Recognition for excellence in innovation and leadership
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary">{award.year}</Badge>
              </div>
              <CardTitle className="text-lg">{award.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AwardsSection; 