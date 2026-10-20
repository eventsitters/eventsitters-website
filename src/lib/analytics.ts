// Thin wrapper around Umami's global tracker (loaded in the root layout).
// Clicks on plain elements are tracked with data-umami-event attributes;
// use this for events that only make sense in code (form steps, submissions).

type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void };
  }
}

export function track(event: string, data?: EventData) {
  window.umami?.track(event, data);
}

/** Whole days from today until `date` (negative if in the past). */
export function daysUntil(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}

/** Bucket a lead time so the dashboard groups it into readable ranges. */
export function leadTimeBucket(days: number) {
  if (days < 14) return "< 2 weeks";
  if (days < 30) return "2–4 weeks";
  if (days < 90) return "1–3 months";
  if (days < 180) return "3–6 months";
  return "6+ months";
}
