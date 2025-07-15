import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { Plane } from 'lucide-react';
import globeTexture from "../assets/globe.svg";

interface Place {
  lat: number;
  lng: number;
  name: string;
  country: string;
  color: string;
  size?: number;
  isHome?: boolean;
}

const TravelGlobe3D = () => {
  // Estados
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const globeRef = useRef<any>(null);
  
  // Dados dos locais visitados
  const visitedPlaces: Place[] = [
    { lat: 40.7128, lng: -74.0060, name: 'New York', country: 'USA', color: '#ff6b6b', size: 0.5 },
    { lat: 28.4283, lng: -81.4636, name: 'Orlando', country: 'USA', color: '#ff6b6b', size: 0.5 },
    { lat: 25.7617, lng: -80.1918, name: 'Miami', country: 'USA', color: '#ff6b6b', size: 0.5 },
    { lat: 38.7223, lng: -9.1393, name: 'Lisbon', country: 'Portugal', color: '#4ecdc4', size: 0.5 },
    { lat: 41.1579, lng: -8.6291, name: 'Porto', country: 'Portugal', color: '#4ecdc4', size: 0.5 },
    { lat: 40.4168, lng: -3.7038, name: 'Madrid', country: 'Spain', color: '#45b7d1', size: 0.5 },
    { lat: 51.5074, lng: -0.1278, name: 'London', country: 'UK', color: '#96ceb4', size: 0.5 },
    { lat: 48.8566, lng: 2.3522, name: 'Paris', country: 'France', color: '#f7dc6f', size: 0.5 },
    { lat: -22.9068, lng: -43.1729, name: 'Rio de Janeiro', country: 'Brazil', color: '#f39c12', size: 0.8, isHome: true }
  ];

  // Hook para detectar dispositivos móveis
  useEffect(() => {
    const handleResize = () => {
      const viewPort = window.innerWidth;
      setIsMobile(viewPort < 850);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuração do globo após carregamento
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        // Configurações de controle
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enablePan = false;
        controls.enableRotate = true;
      }
      
      // Posição inicial do globo
      globeRef.current.pointOfView({ lat: 48.0, lng: 11.0, altitude: 3 }, 4000);
    }
  }, []);

  // Função para criar marcadores HTML customizados
  const createMarkerElement = (d: any) => {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header da seção */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-4xl font-display font-bold text-foreground">
              Places I've Explored
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Throughout my career, I've had the opportunity to explore diverse countries across Latin America and beyond. These experiences have enriched my cultural awareness, sharpened my adaptability, and deepened my understanding of local markets, behaviors, and business dynamics.
          </p>
          <p className="text-xl text-muted-foreground">
            Whether leading cross-border initiatives, working side-by-side with multicultural teams, or simply immersing myself in local life, each destination has contributed to my ability to navigate complexity and build meaningful connections across cultures.
          </p>
        </div>

        {/* Globo 3D */}
        <div className="mb-12 flex items-center justify-center cursor-grab">
          <Globe
            ref={globeRef}
            
            // Textura do globo
            globeImageUrl={globeTexture}
            
            // Fundo transparente
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageUrl={null}
            
            // Configurações de atmosfera
            showAtmosphere={true}
            atmosphereColor="#4a90e2"
            atmosphereAltitude={0.15}
            
            // Marcadores HTML customizados
            htmlElementsData={visitedPlaces}
            htmlElement={createMarkerElement}
            htmlAltitude={0.15}
            
            // Configurações de pins usando pointsData como fallback
            pointsData={visitedPlaces}
            pointAltitude={0.15}
            pointColor="color"
            pointRadius={(d: any) => (d as Place).size || 0.5}
            
            // Labels dos pins
            pointLabel={(d) => `
              <div style="
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-family: system-ui;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              ">
                <strong style="font-size: 14px;">${(d as Place).name}</strong><br/>
                <span style="font-size: 12px; opacity: 0.8;">${(d as Place).country}</span>
                ${(d as Place).isHome ? '<br/><span style="color: #f59e0b;">🏠 Home</span>' : ''}
              </div>
            `}
            
            // Interatividade
            onPointClick={(point: any) => setSelectedPlace(point as Place)}
            enablePointerInteraction={true}
            
            // Animação de entrada
            animateIn={true}
            
            // Dimensões responsivas
            width={isMobile ? 400 : 600}
            height={isMobile ? 400 : 600}
          />
        </div>

        {/* Informações do local selecionado */}
        {selectedPlace && (
          <div className="glass-card p-6 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: selectedPlace.color }}
              ></div>
              <div>
                <h3 className="text-xl font-bold">{selectedPlace.name}</h3>
                <p className="text-muted-foreground">{selectedPlace.country}</p>
              </div>
              {selectedPlace.isHome && (
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  🏠 Home
                </span>
              )}
            </div>
          </div>
        )}

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 glass-card">
            <div className="text-3xl font-bold text-primary mb-2">
              {visitedPlaces.length}
            </div>
            <p className="text-sm text-muted-foreground">Cities Visited</p>
          </div>

          <div className="text-center p-6 glass-card">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p className="text-sm text-muted-foreground">Continents</p>
          </div>
          
          <div className="text-center p-6 glass-card">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <p className="text-sm text-muted-foreground">Memories</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TravelGlobe3D;
