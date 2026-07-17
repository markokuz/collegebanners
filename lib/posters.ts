export type WorkItem = {
  id: string;
  label: string;
  rotate?: number;
};

export const workItems: WorkItem[] = [
  { id: "01", label: "Music & artists" },
  { id: "02", label: "Film & TV" },
  { id: "03", label: "Sports" },
  { id: "04", label: "Anime & art" },
  { id: "05", label: "Campus culture" },
  { id: "06", label: "Pop culture" },
  { id: "07", label: "Greek life" },
  { id: "08", label: "Game day" },
  { id: "09", label: "Dorm essentials" },
];

export const heroStackItems: WorkItem[] = [
  { id: "01", label: "Campus popups", rotate: -8 },
  { id: "02", label: "Curator picks", rotate: 6 },
  { id: "03", label: "Bold banners", rotate: -4 },
  { id: "04", label: "Your wall", rotate: 10 },
];

export const CONTACT_EMAIL = "collegebanners@gmail.com";
