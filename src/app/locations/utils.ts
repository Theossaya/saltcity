export function isLiveNowLagos(date = new Date()): boolean {
  // Convert current time to Africa/Lagos without installing timezone libs.
  // Lagos is usually UTC+1 (WAT). This is a pragmatic approach for this use-case.
  // If you later want perfect DST/region handling, we can switch to luxon.
  const utcMs = date.getTime() + date.getTimezoneOffset() * 60_000;
  const lagos = new Date(utcMs + 60 * 60_000); // +1 hour

  const day = lagos.getDay(); // 0=Sun ... 6=Sat
  const hours = lagos.getHours();
  const minutes = lagos.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // Define service windows (e.g., consider "LIVE NOW" for 90 minutes)
  const LIVE_WINDOW_MIN = 90;

  const services: Array<{ day: number; startMin: number }> = [
    { day: 0, startMin: 9 * 60 },  // Sunday 9:00
    { day: 3, startMin: 17 * 60 }, // Wednesday 17:00
    { day: 5, startMin: 17 * 60 }, // Friday 17:00
  ];

  return services.some(s => {
    if (s.day !== day) return false;
    return timeInMinutes >= s.startMin && timeInMinutes <= s.startMin + LIVE_WINDOW_MIN;
  });
}





export function googleMapsDirectionsUrl(lat: number, lng: number, label?: string) {
  const q = label ? encodeURIComponent(label) : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=&travelmode=driving&dir_action=navigate&query=${q}`;
}
