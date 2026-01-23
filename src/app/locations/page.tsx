import LocationsNavBar from "./LocationsNavBar";
import { locations } from "./locationsData";
import LocationsClient from "./pageClient";

export default function LocationsPage() {
  return (
    <main>
      <LocationsNavBar />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <LocationsClient items={locations} />
      </section>
    </main>
  );
}
