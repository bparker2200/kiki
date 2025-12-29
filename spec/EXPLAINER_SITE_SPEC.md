EXPLAINER_SITE_SPEC.md
Purpose

This site is a thinking artifact, not a marketing asset.

Its sole job is to make a complex experiential system legible, navigable, and discussable for a founder review.

If something does not support:

understanding

orientation

calm navigation

…it does not belong.

Non-Negotiable Design Principles

Restraint over cleverness

Structure over ornament

Calm over stimulation

Systems thinking over storytelling

No optimization theater

This site should feel quiet, intentional, and unfinished on purpose.

Tech Decisions
Stack

Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS

Hosting/Deploy: Vercel

Rendering: Static-first (SSG where applicable)

No backend, no database, no auth

Domain

Canonical domain: kiki.bparker.dev

No basePath

Root routes only

Routing Model

Primary pages:

/ → Main Wireframe (Home)

/process → How I Built This / My Process

/audio → NotebookLM Audio Summary

/next-steps → Next Steps & Open Questions

State pages:

/state/[slug] → 11 canonical experience states

Data Model (Single Source of Truth)

All canonical state data must live in:

src/data/states.ts

Containing:

id (1–11)

slug (kebab-case)

label (canonical visible name)

complexity (internal only)

risk (internal only)

hotspot coordinates (percent-based; internal only)

No state names may be hardcoded anywhere else.

Global Layout
Structure

App-router layout

Two persistent vertical sections:

Main Canvas (≈80–85% width)

Dominated by a single whiteboard-style image

Image runs top-to-bottom of viewport

Image is authoritative and must not be redesigned

Contains 11 canonical experience states

Right Sidebar / Index (≈15–20% width)

Fixed position

Greyscale background

Utility-first

No decorative UI

Behaves like ChatGPT's navigation column

Primary Sidebar Navigation (Always Visible)

Display exactly four items, stacked vertically:

Main Wireframe (Home)

How I Built This / My Process

NotebookLM Audio Summary

Next Steps & Open Questions

Rules:

Text-only preferred

Subtle hover

Clear active state

No icons unless unavoidable

No additional nav items

Main Wireframe (Home)
Whiteboard Interaction Rules

The whiteboard image contains 11 clickable regions

Each region maps 1:1 to a canonical experience state

Regions are implemented as transparent hotspots layered over the image

Hotspots must be positioned relative to the image container, not the viewport

Hover Behavior

Cursor becomes a hand pointer

On hover:

Apply a bright yellow marker-style highlight

Looks like a single swipe

Slightly uneven edges

Semi-transparent

No glow

No shadow

No flourish animation

If it looks like SaaS UI, it's wrong.

Click Behavior

Click navigates directly to the corresponding state page

No previews

No tooltips

No modals

Canonical Experience States

These labels are canonical and must not be renamed.

Inbound Message

Link Open

Sequential Messages

Video Montage

Reflection Pause

Private Replay

Recipient Setup

Primary Message Creation

Contributor Collection

Recipient View (Preview)

Delivery & Response

These labels:

Appear in navigation

Act as page titles

Map 1:1 to whiteboard regions

Are the only allowed state names

Individual State Pages (11 Total)

Each state has its own routed page.

Page Background

Solid color only

RGB(249, 248, 244)

Must not change

Content Rules

Editorial, readable, calm

Generous spacing

Minimal controls

No decorative components

No performance cues

No "helpful" nudges

Sidebar Behavior on State Pages

Sidebar remains fixed.

Secondary Navigation (State Pages Only)

Below the primary nav, add a section titled:

User Experience States

Lists all 11 canonical states

All items clickable

Active state highlighted in yellow

Yellow matches the home hover highlight

No animation beyond simple active state

This section:

Appears only on state pages

Does not appear on the Home page

Canonical State Metadata (Internal Only)
State    Complexity    Key Risk
Inbound Message    Low    Rich link preview asset design
Link Open    Low    None
Sequential Messages    Medium    Timing / pacing feel
Video Montage    High    AI video editing feasibility
Reflection Pause    Low    Resisting the urge to add UI
Private Replay    Medium    Sync across web/app; permissions
Recipient Setup    Low    None
Primary Message Creation    Medium    AI quote quality
Contributor Collection    Medium    Participation tracking
Recipient View (Preview)    Low    Time-lock enforcement
Delivery & Response    Medium    Multi-recipient reply delivery
Explicitly Forbidden (Global)

Renaming experience states

Adding navigation items

Gamification

Performance metrics

Social signals

Urgency cues

Optimization UI

"Helpful" onboarding

When in doubt: remove, don't add.

AI / Claude / Codex Guardrails

For any AI-assisted edits:

Do not rename states

Do not add UI to Reflection Pause

Do not add scrubbing/skipping to Sequential Messages

Do not add sharing to Private Replay

Do not change background color values

Do not "improve" wording without instruction

This spec is the source of truth.

Definition of "Founder-Ready"

This site is ready when:

The system is understandable without explanation

Navigation is obvious but quiet

Nothing feels rushed, optimized, or performative

The whiteboard feels like a map, not a pitch

Anything beyond this is scope creep.

Decision Log:
- Added placeholder pages: /process, /audio, /next-steps