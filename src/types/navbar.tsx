// Allowed labels (prevents duplicates / typos)
export type NavLabels =
  | "HOME"
  | "SERVICES"
  | "ABOUT ME"
  | "PLATFORMS"
  | "EVENTS"
  | "CASE STUDIES"
  | "MEDIA & PRESS"
  | "CONTACT";

// Allowed href patterns
export type NavHref =
  | "/"
  | "/#services"
  | "/#about-me"
  | "/#platforms"
  | "/#events"
  | "/#case-studies"
  | "/#media-and-press"
  | "/#contact";

// Final type
export type navlinks = {
  label: NavLabels;
  href: NavHref;
};
