import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import TitleSection from "./TitleSection";
import type { AwardsType } from "@/lib/sanity.types";

interface AwardsSectionProps {
  awardsData: AwardsType;
}

const AwardsSection = ({ awardsData }: AwardsSectionProps) => {

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <div className="w-full">
          <TitleSection title={awardsData.sectionTitle} subtitle={awardsData.sectionSubtitle} />
        </div>
        <p className="text-xl">
          {awardsData.sectionDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {awardsData.awards.map((award, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-0">{award.year}</Badge>
              </div>
              <CardTitle className="text-lg">{award.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AwardsSection; 