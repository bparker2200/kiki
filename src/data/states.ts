export type Complexity = "Low" | "Medium" | "High";

export type Hotspot = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type State = {
  id: number;
  slug: string;
  label: string;
  complexity: Complexity;
  risk: string;
  hotspot: Hotspot;
};

export const STATES: State[] = [
  {
    id: 1,
    slug: "inbound-message",
    label: "Inbound Message",
    complexity: "Low",
    risk: "Rich link preview asset design",
    hotspot: { x: 2.62, y: 12.70, w: 13.36, h: 16.21 },
  },
  {
    id: 2,
    slug: "link-open",
    label: "Link Open",
    complexity: "Low",
    risk: "None",
    hotspot: { x: 18.09, y: 13.18, w: 12.84, h: 15.23 },
  },
  {
    id: 3,
    slug: "sequential-messages",
    label: "Sequential Messages",
    complexity: "Medium",
    risk: "Timing / pacing feel",
    hotspot: { x: 33.10, y: 13.18, w: 13.36, h: 15.23 },
  },
  {
    id: 4,
    slug: "video-montage",
    label: "Video Montage",
    complexity: "High",
    risk: "AI video editing feasibility",
    hotspot: { x: 49.02, y: 13.18, w: 12.84, h: 15.23 },
  },
  {
    id: 5,
    slug: "reflection-pause",
    label: "Reflection Pause",
    complexity: "Low",
    risk: "Resisting the urge to add UI",
    hotspot: { x: 64.50, y: 13.18, w: 11.73, h: 15.23 },
  },
  {
    id: 6,
    slug: "private-replay",
    label: "Private Replay",
    complexity: "Medium",
    risk: "Sync across web/app; permissions",
    hotspot: { x: 78.27, y: 13.18, w: 13.36, h: 15.23 },
  },
  {
    id: 7,
    slug: "recipient-setup",
    label: "Recipient Setup",
    complexity: "Low",
    risk: "None",
    hotspot: { x: 3.93, y: 66.11, w: 13.89, h: 19.14 },
  },
  {
    id: 8,
    slug: "primary-message-creation",
    label: "Primary Message Creation",
    complexity: "Medium",
    risk: "AI quote quality",
    hotspot: { x: 19.86, y: 65.14, w: 13.89, h: 19.92 },
  },
  {
    id: 9,
    slug: "contributor-collection",
    label: "Contributor Collection",
    complexity: "Medium",
    risk: "Participation tracking",
    hotspot: { x: 36.31, y: 65.14, w: 15.59, h: 19.92 },
  },
  {
    id: 10,
    slug: "recipient-view-preview",
    label: "Recipient View (Preview)",
    complexity: "Low",
    risk: "Time-lock enforcement",
    hotspot: { x: 53.93, y: 64.45, w: 18.48, h: 22.46 },
  },
  {
    id: 11,
    slug: "delivery-response",
    label: "Delivery & Response",
    complexity: "Medium",
    risk: "Multi-recipient reply delivery",
    hotspot: { x: 74.51, y: 64.36, w: 16.39, h: 22.66 },
  },
];

export const STATE_BY_SLUG: Map<string, State> = new Map(
  STATES.map((state) => [state.slug, state])
);

export function getStateBySlug(slug: string): State | undefined {
  return STATE_BY_SLUG.get(slug);
}