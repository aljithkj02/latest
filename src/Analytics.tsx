import { useEffect } from "react";
import ReactGA from "react-ga4";

// export const initGA = () => {
//   ReactGA.initialize("G-CPKCRYFR5Q"); // Replace with your Measurement ID
// };

// export const trackPageView = (path: string) => {
//   ReactGA.send({ hitType: "pageview", page: path });
// };

// @ts-ignore
// export const trackEvent = (action, category, label) => {
//   ReactGA.event({
//     category: category,
//     action: action,
//     label: label,
//   });
// };

ReactGA.initialize("G-CPKCRYFR5Q");

export const SectionObserver = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const visibleSections = new Map(); // { sectionId: entryTime }

    const observer = new IntersectionObserver(
      (entries) => { 
        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          if (!sectionId) return;

          const now = Date.now();

          if (entry.isIntersecting) {
            // User enters section — store the timestamp
            visibleSections.set(sectionId, now);

            // ReactGA.event({
            //   category: "Section",
            //   action: "Viewed",
            //   label: sectionId,
            // });

            ReactGA.event("section_view", {
              section_name: sectionId,
            });
          } else {
            // User leaves section — calculate time spent
            const entryTime = visibleSections.get(sectionId);

            if (entryTime) {
              const duration = Math.round((now - entryTime) / 1000); // in seconds
              visibleSections.delete(sectionId);

              // ReactGA.event({
              //   category: "Engagement",
              //   action: "Time in Section",
              //   label: sectionId,
              //   value: duration, // GA4 will record this as an integer
              // });

              ReactGA.event("time_in_section", {
                section_name: sectionId,
                value: duration,
              });
            }
          }
        });
      },
      { threshold: 0.5 } // 50% of the section must be visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
};
