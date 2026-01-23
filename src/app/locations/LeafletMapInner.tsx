"use client";

import "leaflet/dist/leaflet.css";

import * as React from "react";
import * as L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import type { LocationItem } from "./locationsData";

function FlyToSelected({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();

  React.useEffect(() => {
    map.flyTo([lat, lng], Math.max(map.getZoom(), 12), { duration: 0.8 });
  }, [lat, lng, map]);

  return null;
}

export default function LeafletMapInner({
  items,
  selectedId,
  onSelect,
}: {
  items: LocationItem[];
  selectedId: string | null;
  onSelect?: (id: string | null) => void;
}) {
  const physical = React.useMemo(
    () =>
      (items ?? []).filter(
        (l) =>
          l.type === "physical" &&
          typeof l.lat === "number" &&
          typeof l.lng === "number"
      ),
    [items]
  );

  const selected = React.useMemo(() => {
    if (!selectedId) return null;
    return physical.find((l) => l.id === selectedId) ?? null;
  }, [physical, selectedId]);

  const first = physical[0] ?? null;

  // ✅ Guaranteed working marker icon (served from /public/leaflet/*)
  const markerIcon = React.useMemo(
    () =>
      L.icon({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    []
  );

  if (!first) {
    return <div className="h-[520px] w-full rounded-2xl bg-black/5" />;
  }

  const center: [number, number] = [
    selected?.lat ?? first.lat!,
    selected?.lng ?? first.lng!,
  ];

  return (
    <div className="h-[520px] w-full overflow-hidden rounded-2xl border border-black/10">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom
        className="h-full w-full"
      >
        {/* Your HOT tiles are fine for now, yes you can change later */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
        />

        {selected?.lat && selected?.lng ? (
          <FlyToSelected lat={selected.lat} lng={selected.lng} />
        ) : null}

        {physical.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat!, loc.lng!]}
            icon={markerIcon}
            eventHandlers={{
              click: () => onSelect?.(loc.id),
            }}
          >
            <Popup>
              <div className="text-sm font-semibold">{loc.name}</div>
              {loc.address ? (
                <div className="text-xs opacity-80">{loc.address}</div>
              ) : null}
              {loc.serviceTimes ? (
                <div className="mt-1 text-xs opacity-80">{loc.serviceTimes}</div>
              ) : null}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
