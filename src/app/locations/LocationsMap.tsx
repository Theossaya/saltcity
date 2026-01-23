"use client";

import dynamic from "next/dynamic";
import type { LocationItem } from "./locationsData";

const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
  loading: () => <div className="h-[520px] w-full rounded-2xl bg-black/5" />,
});

export default function LocationsMap(props: {
  items: LocationItem[];
  selectedId: string | null;
  onSelect?: (id: string | null) => void;
}) {
  return <LeafletMapInner {...props} />;
}
