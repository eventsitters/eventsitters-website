// Thin wrapper around Umami's global tracker (loaded in the root layout).
// Clicks on plain elements are tracked with data-umami-event attributes;
// use this for events that only make sense in code (form steps, submissions).

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string | number>) => void };
  }
}

export function track(event: string, data?: Record<string, string | number>) {
  window.umami?.track(event, data);
}
