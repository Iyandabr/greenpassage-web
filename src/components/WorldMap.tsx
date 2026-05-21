"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { ALL_COUNTRIES, DESTINATION_COLORS, type CountryMeta } from "@/lib/all-countries";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Props {
  onHover?: (country: CountryMeta | null) => void;
}

export default function WorldMap({ onHover }: Props) {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [0, 20],
    zoom: 1,
  });

  const handleClick = useCallback((geoId: string) => {
    const country = ALL_COUNTRIES[geoId];
    if (country) router.push(`/countries/${country.slug}`);
  }, [router]);

  return (
    <div className="w-full h-full select-none">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130, center: [10, 20] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={({ coordinates, zoom }: { coordinates: [number, number]; zoom: number }) =>
            setPosition({ coordinates, zoom })
          }
          minZoom={1}
          maxZoom={8}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string; id: string }> }) =>
              geographies.map(geo => {
                const country = ALL_COUNTRIES[geo.id];
                const destColor = DESTINATION_COLORS[geo.id];
                const isHovered = hoveredId === geo.id;
                const isKnown = !!country;
                const isDestination = !!destColor;

                let fillColor: string;
                if (isHovered && isDestination) fillColor = destColor;
                else if (isHovered && isKnown) fillColor = "rgba(0,212,255,0.5)";
                else if (isDestination) fillColor = destColor + "50";
                else if (isKnown) fillColor = "rgba(0,212,255,0.08)";
                else fillColor = "rgba(255,255,255,0.03)";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => isKnown && handleClick(geo.id)}
                    onMouseEnter={() => {
                      if (isKnown) {
                        setHoveredId(geo.id);
                        onHover?.(country);
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredId(null);
                      onHover?.(null);
                    }}
                    style={{
                      default: {
                        fill: fillColor,
                        stroke: isDestination ? destColor + "60" : "rgba(255,255,255,0.08)",
                        strokeWidth: isDestination ? 0.4 : 0.2,
                        cursor: isKnown ? "pointer" : "default",
                        outline: "none",
                        transition: "fill 0.15s ease",
                      },
                      hover: {
                        fill: isDestination ? destColor : "rgba(0,212,255,0.45)",
                        stroke: isDestination ? destColor : "#00D4FF",
                        strokeWidth: 0.6,
                        cursor: isKnown ? "pointer" : "default",
                        outline: "none",
                      },
                      pressed: { fill: fillColor, outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
