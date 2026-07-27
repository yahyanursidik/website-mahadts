# Design — MTQ Tarbiyah Sunnah

A locked design system for this website. Every page redesign reads this file
before emitting code. Extend this system when the website grows; do not invent a
new visual language per route.

## Genre

Editorial — calm, trustworthy, content-led, and appropriate for parents
evaluating an Islamic education programme.

## Audience, use case, and tone

- Audience: parents, prospective students, and the wider MTQ community.
- Primary job: understand the programme and continue to SPMB.
- Tone: editorial, serene, specific, and reassuring.

## Macrostructure family

- Marketing pages: **Split Studio** with H2 Split Diptych. Text and real
  photography alternate sides; claims stay paired with visual proof.
- Process pages: **Narrative Workflow** with F4 Step Sequence for SPMB.
- Content index: **Ecosystem Index** with featured, latest, and category
  discovery surfaces.
- Content detail: **Long Document**, single-column reading measure with
  typography-only presentation.

## Navigation and footer

- Navigation: **N12 Announcement Banner + Retracting Nav**.
- Footer: **Ft1 Mast-headed**.
- Mobile navigation uses a disclosure button, not hover-only behaviour.
- Current route is signalled with `aria-current="page"` and a visible underline.

## Theme — Garden

- `--color-paper`: oklch(97% 0.012 110)
- `--color-paper-2`: oklch(94% 0.018 110)
- `--color-paper-3`: oklch(90% 0.028 115)
- `--color-ink`: oklch(22% 0.028 135)
- `--color-ink-2`: oklch(37% 0.035 135)
- `--color-rule`: oklch(82% 0.025 115)
- `--color-accent`: oklch(38% 0.10 140)
- `--color-accent-warm`: oklch(62% 0.16 55)
- `--color-focus`: oklch(32% 0.12 45)

## Typography

- Display: Merriweather, weight 700, style normal.
- Body: Plus Jakarta Sans, weights 400, 600, and 700.
- Display tracking: -0.025em.
- Type scale anchor: `--text-display = clamp(2.75rem, 5vw + 1rem, 5.25rem)`.
- Heading styles are always roman; italics are reserved for body emphasis.

## Spacing

The 4-point named scale lives in `tokens.css`. Pages use named tokens and fluid
gutters; interactive controls share a minimum 44 px height.

## Motion

- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out`.
- Motion primitives: retract-on-scroll, menu reveal, and restrained button
  press only.
- No section-by-section scroll reveals.
- Reduced-motion fallback: state changes remain, spatial motion is removed or
  reduced to an opacity transition of at most 150 ms.

## Microinteractions stance

- Keyboard first, hover second.
- Focus rings are visible and instantaneous.
- Dropdowns open on click and keyboard, close on Escape and outside click.
- Success is silent; no celebratory toasts.
- Hover effects use one signal only.

## CTA voice

- Primary CTA: dark garden-green rectangular chip, compact verb-led label.
- Secondary CTA: transparent outlined chip.
- Editorial CTA: underlined typographic link with an arrow.
- Preferred labels: “Daftar SPMB”, “Lihat program”, “Baca artikel”, and
  “Hubungi admin”.

## Per-page allowances

- Marketing pages may use the local MTQ photography already supplied.
- Programme pages pair photography with factual programme copy.
- Content pages use typography and editorial thumbnails only.
- No invented testimonials, metrics, or stock photography.

## What pages MUST share

- Wordmark and local logo asset.
- Garden palette and accent placement.
- Display and body fonts.
- CTA shape, state behaviour, and padding rhythm.
- N12 navigation and Ft1 footer.

## What pages MAY differ on

- Macrostructure within the declared page family.
- Hero image crop and text/image direction.
- Section rhythm where the content requires it.

## Exports

### tokens.css

```css
:root {
  --color-paper: oklch(97% 0.012 110);
  --color-paper-2: oklch(94% 0.018 110);
  --color-paper-3: oklch(90% 0.028 115);
  --color-ink: oklch(22% 0.028 135);
  --color-ink-2: oklch(37% 0.035 135);
  --color-rule: oklch(82% 0.025 115);
  --color-accent: oklch(38% 0.10 140);
  --color-accent-warm: oklch(62% 0.16 55);
  --color-focus: oklch(32% 0.12 45);
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-background: var(--color-paper);
  --color-on-background: var(--color-ink);
  --color-primary: var(--color-accent);
  --color-secondary: var(--color-accent-warm);
  --font-sans: var(--font-body);
  --font-serif: var(--font-display);
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper": { "$value": "oklch(97% 0.012 110)", "$type": "color" },
    "ink": { "$value": "oklch(22% 0.028 135)", "$type": "color" },
    "accent": { "$value": "oklch(38% 0.10 140)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Merriweather", "$type": "fontFamily" },
    "body": { "$value": "Plus Jakarta Sans", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 0.97 0.012 110;
  --foreground: 0.22 0.028 135;
  --primary: 0.38 0.10 140;
  --primary-foreground: 0.97 0.012 110;
  --muted: 0.94 0.018 110;
  --muted-foreground: 0.37 0.035 135;
  --border: 0.82 0.025 115;
  --input: 0.82 0.025 115;
  --ring: 0.32 0.12 45;
  --radius: 0.75rem;
}
```
