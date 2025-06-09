// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-CPKCRYFR5Q"); // Replace with your Measurement ID
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// @ts-ignore
export const trackEvent = (action, category, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
