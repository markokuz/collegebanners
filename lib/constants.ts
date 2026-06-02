export const NAV_SECTIONS = [
  { id: "about", label: "About us" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number]["id"];
