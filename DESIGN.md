---
name: "Agung Jayasukma Portfolio"
description: "A cinematic, restrained portfolio for secure identity infrastructure and production-grade software work."
colors:
  near-black: "#050505"
  graphite-surface: "#0a0a0a"
  ghost-surface: "#ffffff08"
  inner-ghost-surface: "#ffffff0f"
  hairline-border: "#ffffff14"
  strong-hairline-border: "#ffffff1f"
  warm-white-text: "#f5f5f5"
  ash-secondary-text: "#a3a3a3"
  smoke-muted-text: "#525252"
  signal-gold: "#c9a96e"
  signal-gold-dim: "#c9a96e26"
  signal-gold-glow: "#c9a96e66"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "3rem to 6rem via responsive Tailwind scale"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "2.25rem to 3.75rem via responsive Tailwind scale"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem to 1.25rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.65rem to 0.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.15em to 0.2em"
rounded:
  pill: "9999px"
  hairline-scrollbar: "3px"
  bezel: "1.5rem"
  bezel-inner: "calc(1.5rem - 2px)"
spacing:
  section-x-sm: "1.5rem"
  section-x-md: "3rem"
  section-x-lg: "5rem"
  section-y: "8rem"
  section-y-md: "10rem"
  card-padding: "2rem to 2.5rem"
  compact-gap: "0.75rem"
  project-gap: "1rem"
  editorial-gap: "4rem to 6rem"
components:
  button-primary:
    backgroundColor: "{colors.warm-white-text}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-gold}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  chip-eyebrow:
    backgroundColor: "transparent"
    textColor: "{colors.signal-gold}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.75rem"
  card-bezel:
    backgroundColor: "{colors.ghost-surface}"
    textColor: "{colors.warm-white-text}"
    rounded: "{rounded.bezel}"
    padding: "2px"
---

# Design System: Agung Jayasukma Portfolio

## 1. Overview

**Creative North Star: "The Secure Screening Room"**

This system feels like a private technical screening room: dark, quiet, precise, and built for fast judgment. Recruiters and clients should land in a controlled atmosphere where proof, trust, and next actions are easy to read. The visual mood is cinematic without theatrics: near-black surfaces, hairline structure, restrained gold signal, and slow reveals that feel deliberate rather than decorative.

The portfolio is a brand surface, but the brand is competence under pressure. It rejects generic SaaS-template aesthetics, decorative gradients, gimmicky motion, and bloated claim sections. Every visual decision must support the Product principle: **"Show proof, not claims."**

**Key Characteristics:**

- Dark, tinted-black environment with warm-white text and muted ash hierarchy.
- One rare signal color, burnished gold, used for trust cues, hover states, and selected attention.
- Double-bezel containers with hairline borders instead of heavy cards.
- Large, tight, confident type set in Geist, supported by compact Geist Mono labels.
- Motion is slow, directional, and purposeful; it reveals hierarchy instead of performing.

## 2. Colors

The palette is restrained and cinematic: blackened graphite, warm text, and a single gold signal that should stay rare.

### Primary

- **Signal Gold** (`signal-gold`): The only accent voice. Use for eyebrow labels, hover states, orbit markers, icon wells, and tiny proof signals. Its scarcity is the point.
- **Signal Gold Dim** (`signal-gold-dim`): Use behind contact icons and selection states where gold needs to register without shouting.
- **Signal Gold Glow** (`signal-gold-glow`): Use only for atmospheric radial orbs and low-opacity scene lighting. Never use it as a decorative gradient fill.

### Neutral

- **Near Black** (`near-black`): The full-page background. It is not pure black; keep the softened tint to avoid cheap OLED harshness.
- **Graphite Surface** (`graphite-surface`): Floating navigation and deep surface layer.
- **Ghost Surface** (`ghost-surface`): Outer bezel shell for cards and contact links.
- **Inner Ghost Surface** (`inner-ghost-surface`): Inner bezel fill for proof containers.
- **Hairline Border** (`hairline-border`): Default dividers, outlines, and circle orbits.
- **Strong Hairline Border** (`strong-hairline-border`): Scrollbar thumb and stronger separators only.
- **Warm White Text** (`warm-white-text`): Primary text and primary button background.
- **Ash Secondary Text** (`ash-secondary-text`): Body copy and secondary navigation.
- **Smoke Muted Text** (`smoke-muted-text`): Metadata, levels, footer copy, and subdued labels.

### Named Rules

**The Gold Scarcity Rule.** Gold is a signal, not a theme. If more than one small cluster per viewport is gold, the page starts lying about importance.

**The No Decorative Gradient Rule.** Atmospheric glow may exist as scene lighting. Loud, decorative gradients used without semantic purpose are prohibited.

**The Not-Quite-Black Rule.** Never use pure `#000` or pure `#fff`. This system depends on softened blacks and warm whites.

## 3. Typography

**Display Font:** Geist, with system-ui fallback  
**Body Font:** Geist, with system-ui fallback  
**Label/Mono Font:** Geist Mono, with monospace fallback

**Character:** The typography is technical but not terminal cosplay. Geist gives the portfolio a clean infrastructure voice; Geist Mono appears only where metadata, labels, and competency levels need a sharper instrument.

### Hierarchy

- **Display** (500, responsive 3rem to 6rem, 0.9 line-height): Hero name only. Tight tracking and short line breaks make it feel like a title card, not a blog headline.
- **Headline** (500, responsive 2.25rem to 3.75rem, 1.05 line-height): Section claims such as "Engineering trust at scale" and "Projects that ship."
- **Title** (500, 1.5rem to 1.875rem, tight tracking): Project names and strong component labels. On hover, titles may shift to Signal Gold.
- **Body** (400, 1rem to 1.25rem, 1.625 line-height): Explanatory copy capped around 50 to 55ch. Keep paragraphs short and evidence-focused.
- **Label** (500, 0.65rem to 0.875rem, 0.15em to 0.2em tracking, uppercase when used as eyebrow): Section markers, competency categories, and metadata. Labels are instruments, not decoration.

### Named Rules

**The Title Card Rule.** Display type is allowed to be large and quiet at the same time. Do not add gradients, outlines, shadows, or gimmicks to make it feel designed.

**The Mono Rationing Rule.** Geist Mono is for metadata and control surfaces only. Do not turn body copy into faux-terminal text.

## 4. Elevation

Depth is built through tonal layering, hairline borders, inset highlights, and atmospheric glow, not heavy drop shadows. The page should feel machined and quiet: surfaces are separated by precise edges, not floating blobs.

### Shadow Vocabulary

- **Inset Bezel Highlight** (`inset 0 1px 1px rgba(255, 255, 255, 0.08)`): Used inside bezel cards to create a subtle machined lip.
- **Atmospheric Gold Orb** (`radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)` with `blur(80px)`): Used behind the hero as environmental light only.

### Named Rules

**The No Floating Cards Rule.** Cards do not float with generic shadows. They sit inside double bezels and separate through borders, tone, and inset highlights.

**The State-Only Lift Rule.** Resting surfaces stay flat. Interaction may brighten the inner surface or move an arrow, but it must not create fake depth theatrics.

## 5. Components

For every component, the default posture is quiet precision. Interaction should clarify clickability and hierarchy without making the page feel playful.

### Buttons

- **Shape:** Fully rounded pill (`9999px`) with compact vertical rhythm.
- **Primary:** Warm White Text token as background, Near Black token as text, `0.75rem 1.5rem` padding, 0.875rem medium label. Use for "View work" and the navigation contact CTA.
- **Hover / Focus:** Shift primary background to Signal Gold with a 500ms transform/color transition using `cubic-bezier(0.32, 0.72, 0, 1)`. Preserve visible focus states in implementation.
- **Secondary / Ghost:** Text-only link with animated underline for low-pressure actions like "Get in touch."

### Chips

- **Style:** Eyebrow chips use transparent background, Hairline Border, Signal Gold text, pill radius, Geist Mono, uppercase tracking.
- **State:** Skill and tech tags use muted text, Hairline Border, small mono type, and pill radius. They should feel like evidence labels, not badges from a template.

### Cards / Containers

- **Corner Style:** Large precise round (`1.5rem`) with an inner radius reduced by 2px.
- **Background:** Outer shell uses Ghost Surface; inner shell uses Inner Ghost Surface.
- **Shadow Strategy:** Use the Inset Bezel Highlight only. No generic drop shadows.
- **Border:** One-pixel Hairline Border around the outer shell.
- **Internal Padding:** Skills use `1.25rem`; project cards use `2rem` to `2.5rem`.

### Inputs / Fields

No input fields currently exist. If added, they should use the bezel language: Graphite Surface fill, Hairline Border, pill or 1.5rem radius depending on size, Warm White Text, Ash Secondary Text placeholder, and a Signal Gold focus ring that is visible but thin.

### Navigation

- **Style, typography, default/hover/active states, mobile treatment.** Navigation floats as a compact pill at the top center with Graphite Surface at 70% opacity, a 2xl blur, and Hairline Border. Links are small Geist labels with secondary text by default, warm-white hover, and a subtle ghost hover background. Mobile uses a full-screen near-black overlay with staggered motion and large medium-weight links.

### Signature Component: Double Bezel Proof Card

The double bezel is the system's proof container. It frames projects, competencies, and contact methods with a mechanical edge: outer 1px border, 2px shell padding, inner translucent surface, and one inset highlight. Use it when the content is evidence. Do not use it for every piece of layout furniture.

### Signature Component: Orbit Monogram

The hero monogram uses concentric hairline circles, a low-opacity AJ mark, and two slow orbiting dots. It should remain abstract and restrained. It is a cinematic identity cue, not a loader, not a data visualization, and not a decorative toy.

## 6. Do's and Don'ts

### Do:

- **Do** use Near Black as the primary environment and Warm White Text for the strongest information.
- **Do** keep Signal Gold rare, precise, and attached to action or proof.
- **Do** use the double-bezel card pattern for project, competency, and contact evidence.
- **Do** keep body copy under roughly 55ch and make each paragraph prove capability or clarify next action.
- **Do** keep motion slow, directional, and purposeful with `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Do** preserve the direct path to DM and GitHub when adding sections or changing hierarchy.

### Don't:

- **Don't** use generic SaaS-template aesthetics that feel interchangeable.
- **Don't** use loud, decorative gradients without semantic purpose.
- **Don't** add gimmicky motion that prioritizes spectacle over clarity.
- **Don't** add bloated sections that restate claims without proof.
- **Don't** use gradient text, glassmorphism as default, side-stripe borders, or hero-metric templates.
- **Don't** turn the system into terminal cosplay with excessive monospace, neon accents, or fake command-line panels.
- **Don't** add identical card grids with icon, heading, and text repeated endlessly.
- **Don't** animate width, height, padding, or margin. Underlines and directional cues must use transform-based motion.
