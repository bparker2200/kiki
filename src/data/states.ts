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
    hotspot: { x: 6, y: 8, w: 27, h: 13 },
  },
  {
    id: 2,
    slug: "link-open",
    label: "Link Open",
    complexity: "Low",
    risk: "None",
    hotspot: { x: 36.5, y: 8, w: 27, h: 13 },
  },
  {
    id: 3,
    slug: "sequential-messages",
    label: "Sequential Messages",
    complexity: "Medium",
    risk: "Timing / pacing feel",
    hotspot: { x: 67, y: 8, w: 27, h: 13 },
  },
  {
    id: 4,
    slug: "video-montage",
    label: "Video Montage",
    complexity: "High",
    risk: "AI video editing feasibility",
    hotspot: { x: 6, y: 24.5, w: 27, h: 13 },
  },
  {
    id: 5,
    slug: "reflection-pause",
    label: "Reflection Pause",
    complexity: "Low",
    risk: "Resisting the urge to add UI",
    hotspot: { x: 36.5, y: 24.5, w: 27, h: 13 },
  },
  {
    id: 6,
    slug: "private-replay",
    label: "Private Replay",
    complexity: "Medium",
    risk: "Sync across web/app; permissions",
    hotspot: { x: 67, y: 24.5, w: 27, h: 13 },
  },
  {
    id: 7,
    slug: "recipient-setup",
    label: "Recipient Setup",
    complexity: "Low",
    risk: "None",
    hotspot: { x: 6, y: 41, w: 27, h: 13 },
  },
  {
    id: 8,
    slug: "primary-message-creation",
    label: "Primary Message Creation",
    complexity: "Medium",
    risk: "AI quote quality",
    hotspot: { x: 36.5, y: 41, w: 27, h: 13 },
  },
  {
    id: 9,
    slug: "contributor-collection",
    label: "Contributor Collection",
    complexity: "Medium",
    risk: "Participation tracking",
    hotspot: { x: 67, y: 41, w: 27, h: 13 },
  },
  {
    id: 10,
    slug: "recipient-view-preview",
    label: "Recipient View (Preview)",
    complexity: "Low",
    risk: "Time-lock enforcement",
    hotspot: { x: 6, y: 58, w: 43, h: 14 },
  },
  {
    id: 11,
    slug: "delivery-response",
    label: "Delivery & Response",
    complexity: "Medium",
    risk: "Multi-recipient reply delivery",
    hotspot: { x: 51, y: 58, w: 43, h: 14 },
  },
];

export const STATE_BY_SLUG: Map<string, State> = new Map(
  STATES.map((state) => [state.slug, state])
);

export function getStateBySlug(slug: string): State | undefined {
  return STATE_BY_SLUG.get(slug);
}
