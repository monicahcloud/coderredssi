export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number>,
) => {
  if (typeof window === "undefined") return;

  // @ts-ignore
  window.gtag?.("event", eventName, parameters);
};
