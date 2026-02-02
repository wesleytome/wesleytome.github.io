"use client";

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Plane } from 'lucide-react';
import TitleSection from './TitleSection';
import type { GlobeSectionType } from '@/lib/sanity.types';

const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center" style={{ width: 800, height: 800 }}>
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  ),
});

interface Place {
  lat: number;
  lng: number;
  name: string;
  country: string;
  color: string;
  size?: number;
  isHome?: boolean;
}

interface GlobeSectionProps {
  globeData: GlobeSectionType;
}

const GlobeSection = ({ globeData }: GlobeSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isClient, setIsClient] = useState(false);
  const globeRef = useRef<any>(null);
  
  const visitedPlaces: Place[] = [
    { lat: 40.7128, lng: -74.0060, name: 'New York', country: 'USA', color: '#ff6b6b', size: 0.5 },
    { lat: 28.4283, lng: -81.4636, name: 'Orlando', country: 'USA', color: '#ff6b6b', size: 0.5 },
    { lat: 25.7617, lng: -80.1918, name: 'Miami', country: 'USA', color: '#ff6b6b', size: 0.5 },
    { lat: 38.7223, lng: -9.1393, name: 'Lisbon', country: 'Portugal', color: '#4ecdc4', size: 0.5 },
    { lat: 41.1579, lng: -8.6291, name: 'Porto', country: 'Portugal', color: '#4ecdc4', size: 0.5 },
    { lat: 40.4168, lng: -3.7038, name: 'Madrid', country: 'Spain', color: '#45b7d1', size: 0.5 },
    { lat: 51.5074, lng: -0.1278, name: 'London', country: 'UK', color: '#96ceb4', size: 0.5 },
    { lat: 48.8566, lng: 2.3522, name: 'Paris', country: 'France', color: '#f7dc6f', size: 0.5 },
    { lat: -22.9068, lng: -43.1729, name: 'Rio de Janeiro', country: 'Brazil', color: '#f39c12', size: 0.8, isHome: true },
    { lat: -33.4489, lng: -70.6693, name: 'Santiago', country: 'Chile', color: '#e74c3c', size: 0.5 },
    { lat: 4.7110, lng: -74.0721, name: 'Bogotá', country: 'Colombia', color: '#f1c40f', size: 0.5 },
    { lat: -25.2637, lng: -57.5759, name: 'Assunção', country: 'Paraguay', color: '#9b59b6', size: 0.5 },
    { lat: -12.0464, lng: -77.0428, name: 'Lima', country: 'Peru', color: '#1abc9c', size: 0.5 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const viewPort = window.innerWidth;
      setIsMobile(viewPort < 850);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enablePan = false;
        controls.enableRotate = true;
      }
      
      globeRef.current.pointOfView({ lat: 48.0, lng: 11.0, altitude: 3 }, 4000);
    }
  }, [isClient]);

  const createMarkerElement = (d: any): HTMLElement => {
    const place = d as Place;
    const el = document.createElement("div");
    el.innerHTML = `
      <div style="
        width: ${place.size ? place.size * 20 : 10}px;
        height: ${place.size ? place.size * 20 : 10}px;
        background: ${place.color};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        cursor: pointer;
        ${place.isHome ? 'animation: pulse 2s infinite;' : ''}
      "></div>
    `;
    
    el.style.pointerEvents = "auto";
    el.style.cursor = "pointer";
    el.onclick = () => setSelectedPlace(place);
    
    return el;
  };

  if (!isClient) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bottom-to-top">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-full">
                <TitleSection title={globeData.sectionTitle} subtitle={globeData.sectionSubtitle} />
              </div>
            </div>
            <p className="text-xl mb-4">
              {globeData.sectionDescriptionParagraph1}
            </p>
          </div>
          <div className="-mb-20 -mt-20 flex items-center justify-center" style={{ height: 800 }}>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bottom-to-top">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
            <Plane className="h-6 w-6 text-primary" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-full">
              <TitleSection title={globeData.sectionTitle} subtitle={globeData.sectionSubtitle} />
            </div>
          </div>
          <p className="text-xl mb-4">
            {globeData.sectionDescriptionParagraph1}
          </p>
          {globeData.sectionDescriptionParagraph2 && (
            <p className="text-xl">
              {globeData.sectionDescriptionParagraph2}
            </p>
          )}
        </div>

        <div className="-mb-20 -mt-20 flex items-center justify-center cursor-grab">
          <Globe
            ref={globeRef}
            globeImageUrl="/globe.jpg"
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageUrl={null}
            showAtmosphere={true}
            atmosphereColor="#4a90e2"
            atmosphereAltitude={0.4}
            htmlElementsData={visitedPlaces}
            htmlElement={createMarkerElement}
            htmlAltitude={0.15}
            pointsData={visitedPlaces}
            pointAltitude={0.15}
            pointColor="color"
            pointRadius={(d: any) => (d as Place).size || 0.5}
            pointLabel={(d) => `
              <div style="
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 8px px;
                border-radius: 8px;
                font-family: system-ui;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              ">
                <strong style="font-size: 14px;">${(d as Place).name}</strong><br/>
                <span style="font-size: 12px; opacity: 0.8;">${(d as Place).country}</span>
                ${(d as Place).isHome ? '<br/><span style="color: #f59e0b;">🏠 Home</span>' : ''}
              </div>
            `}
            onPointClick={(point: any) => setSelectedPlace(point as Place)}
            enablePointerInteraction={true}
            animateIn={true}
            width={isMobile ? 400 : 800}
            height={isMobile ? 400 : 800}
          />
        </div>

        {selectedPlace && (
          <div className="glass-card p-6 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: selectedPlace.color }}
              ></div>
              <div>
                <h3 className="text-xl font-bold">{selectedPlace.name}</h3>
                <p className="">{selectedPlace.country}</p>
              </div>
              {selectedPlace.isHome && (
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  🏠 Home
                </span>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 glass-card">
            <div className="text-3xl font-bold text-secondary mb-2">
              {visitedPlaces.length}
            </div>
            <p className="text-sm">{globeData.citiesLabel}</p>
          </div>

          <div className="text-center p-6 glass-card">
            <div className="text-3xl font-bold text-secondary mb-2">3</div>
            <p className="text-sm">{globeData.continentsLabel}</p>
          </div>
          
          <div className="text-center p-6 glass-card">
            <div className="text-3xl font-bold text-secondary mb-2">∞</div>
            <p className="text-sm">{globeData.memoriesLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
