export type OverviewMatrixRow = {
  step: number;
  title: string;
  whatDoing: string;
  reinforces: string;
  emotion: string;
  whyExists: string;
  failure: string;
};

export const RECIPIENT_MATRIX: OverviewMatrixRow[] = [
  {
    step: 1,
    title: "The Summons",
    whatDoing: "Sees the text, decides whether to open",
    reinforces: "Safety + curiosity: \"This is for me, and it's not risky.\"",
    emotion: "Curiosity + mild apprehension",
    whyExists: "Gets them across the threshold. No open, no story.",
    failure: "Looks like marketing/spam, too much context up front, any \"download the app\" vibe",
  },
  {
    step: 2,
    title: "The Link Open",
    whatDoing: "Taps in, lands on the first screen",
    reinforces: "Trust on first contact: \"This is gentle and legit.\"",
    emotion: "Cautious relief",
    whyExists: "Proves you're not about to hijack their attention or data.",
    failure: "Login gates, permissions, long load, anything that feels like a funnel",
  },
  {
    step: 3,
    title: "The First Kind Thing",
    whatDoing: "Reads the first message/quote",
    reinforces: "Proof of intent: \"Oh… this is actually kind.\"",
    emotion: "Soft surprise",
    whyExists: "Establishes the tone and stakes quickly.",
    failure: "Generic copy, overly poetic, too long, feels templated",
  },
  {
    step: 4,
    title: "The Unfolding",
    whatDoing: "Keeps reading, one kindness at a time",
    reinforces: "Momentum + credibility: \"Multiple people, real specificity.\"",
    emotion: "Warmth building into recognition",
    whyExists: "Turns a compliment into a pattern (social proof without feeling like social media).",
    failure: "Dumping everything at once, progress UI that feels gamified, repetitive content",
  },
  {
    step: 5,
    title: "The Recognition Turn",
    whatDoing: "Realizes what this is (not just messages)",
    reinforces: "Meaning: \"This was made for me.\"",
    emotion: "\"Oh wow\" clarity",
    whyExists: "This is the moment the user stops evaluating and starts receiving.",
    failure: "Explaining too much, naming it too hard, making it feel like a product concept pitch",
  },
  {
    step: 6,
    title: "The Crescendo",
    whatDoing: "Hits the most emotionally resonant quotes",
    reinforces: "Emotional escalation with control",
    emotion: "Heart-swell, lump-in-throat",
    whyExists: "Earns the right to go deeper before video.",
    failure: "Overdoing it, forced intensity, manipulating with saccharine language",
  },
  {
    step: 7,
    title: "The Voices",
    whatDoing: "Watches the montage, sees/hears people",
    reinforces: "Human proof + presence: \"They showed up.\"",
    emotion: "Belonging, overwhelm (good)",
    whyExists: "Converts \"text\" into \"real humans in a room with me.\"",
    failure: "Too produced, too long, influencer energy, awkward framing that causes secondhand embarrassment",
  },
  {
    step: 8,
    title: "The Stillness",
    whatDoing: "Screen goes quiet, user pauses",
    reinforces: "Integration: \"I can let this land.\"",
    emotion: "Calm impact, reverence",
    whyExists: "Prevents dopamine-scroll energy. Makes it a keepsake moment.",
    failure: "Any CTA, next button pressure, notifications, \"share\" prompts",
  },
  {
    step: 9,
    title: "The Keeping",
    whatDoing: "Sees it saved, returns/replays possible",
    reinforces: "Ownership + permanence: \"This is mine forever.\"",
    emotion: "Security, comfort",
    whyExists: "Creates long-term value and repeat engagement without pushing.",
    failure: "Paywalling the keepsake, making it feel like content you rent, unclear where it lives",
  },
  {
    step: 10,
    title: "The Reply",
    whatDoing: "Optionally responds (or doesn't)",
    reinforces: "Agency + closure: \"I can answer in my time.\"",
    emotion: "Gratitude, groundedness",
    whyExists: "Completes the loop and enables reciprocity without obligation.",
    failure: "Forcing a reply, guilt-y copy, public posting defaults, social-pressure mechanics",
  },
];

