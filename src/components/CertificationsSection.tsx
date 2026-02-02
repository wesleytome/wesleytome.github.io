import { Shield, ShieldCheck } from "lucide-react";
import TitleSection from "./TitleSection";
import type { CertificationsType } from "@/lib/sanity.types";

interface CertificationsSectionProps {
  certificationsData: CertificationsType;
}

const CertificationsSection = ({ certificationsData }: CertificationsSectionProps) => {

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
      <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
        <ShieldCheck className="h-6 w-6 text-primary" />
      </div>
        <div className="w-full">
          <TitleSection title={certificationsData.sectionTitle} subtitle={certificationsData.sectionSubtitle} />
        </div>
        <p className="text-xl">
          {certificationsData.sectionDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificationsData.certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-shadow">
            <Shield className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CertificationsSection;