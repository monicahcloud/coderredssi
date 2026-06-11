export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number>,
) => {
  console.log("GA EVENT", eventName, parameters);

  // @ts-ignore
  window.gtag?.("event", eventName, parameters);
};
