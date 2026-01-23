"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import type { LocationItem } from "./locationsData";
import LocationsList from "./LocationsList";

const LocationsMap = dynamic(() => import("./LocationsMap"), {
  ssr: false,
  loading: () => <div className="h-[520px] w-full rounded-2xl bg-black/5" />,
});

export default function LocationsClient({ items }: { items: LocationItem[] }) {
  const [selectedId, setSelectedId] = React.useState<string | null>(() => {
    const warri = items.find((x) => x.id === "saltcity-warri");
    return warri ? warri.id : null;
  });

  const physical = items.filter((x) => x.type === "physical");
  const selectedPhysical = physical.find((x) => x.id === selectedId) ?? null;

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <LocationsList
        items={items}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id || null)}
      />

      <div className="space-y-4">
        <LocationsMap
          items={items}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId(id || null)}
        />

        {selectedPhysical && (
          <div className="rounded-xl border border-black/10 bg-white p-4">
            <div className="text-sm font-semibold">{selectedPhysical.name}</div>
            <div className="mt-1 text-sm text-black/70">{selectedPhysical.address}</div>
            <div className="mt-2 text-sm text-black/70">{selectedPhysical.serviceTimes}</div>
          </div>
        )}
      </div>
    </div>
  );
}
