---
name: frontend-design
description: >-
  Directs creation of distinctive, production-grade web UI (components, pages,
  applications) with intentional typography, color, motion, and layout; avoids
  generic AI aesthetics. Use when building or redesigning interfaces, landing
  pages, dashboards, marketing sites, or when the user asks for polished,
  memorable, or creative frontend design.
---

# Frontend design

Guides distinctive, production-grade frontend work that avoids generic “AI slop.” Implement real, working code with strong attention to aesthetic choices.

The user supplies requirements: component, page, app, or interface. They may add purpose, audience, or technical constraints.

## Design thinking

Before coding, understand context and commit to a **bold** aesthetic direction:

- **Purpose**: What problem does this solve? Who uses it?
- **Tone**: Pick a clear direction (examples: brutally minimal, maximalist, retro-futuristic, organic, luxury/refined, playful, editorial, brutalist, art deco, soft/pastel, industrial). Treat these as inspiration; the result should feel coherent and intentional.
- **Constraints**: Framework, performance, accessibility, brand.
- **Differentiation**: What makes this **unforgettable**? What will people remember?

**Critical**: One clear conceptual direction, executed precisely. Bold maximalism and refined minimalism both work—intentionality matters more than intensity.

Then ship code (HTML/CSS/JS, React, Vue, etc.) that is:

- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear point of view
- Refined in detail (spacing, states, hierarchy)

## Frontend aesthetics

- **Typography**: Prefer distinctive, characterful fonts. Pair a strong display face with a refined body face. Avoid defaulting to overused neutrals (e.g. Inter, Roboto, Arial, generic system stacks) when the brief allows better choices.
- **Color & theme**: Cohesive palette; CSS variables for consistency. Prefer a dominant base with sharp accents over flat, evenly weighted palettes.
- **Motion**: Animations and micro-interactions where they earn their place. Prefer CSS for non-React stacks; use Motion (or project-standard motion libs) in React when available. Favor high-impact beats: e.g. one orchestrated load with staggered `animation-delay` over scattered noise. Consider scroll-driven and hover surprises that fit the tone.
- **Spatial composition**: Unexpected but legible layout—asymmetry, overlap, diagonal rhythm, grid-breaking moments, generous negative space **or** controlled density (match the tone).
- **Backgrounds & details**: Atmosphere over flat rectangles—gradient meshes, noise/grain, patterns, layered transparency, shadow, borders, decorative frames, cursors, textures—only when they support the concept.

## Avoid

Generic AI-default looks: clichéd purple-on-white gradients, cookie-cutter cards, predictable hero + three-column feature rows, and “same font every project.” Do not converge on the same trendy face (e.g. Space Grotesk) by habit—vary light/dark, type, and mood with the brief.

**Match complexity to vision**: Maximalist ideas need richer animation and art direction; minimal/refined work needs restraint, typographic and spacing discipline, and subtle craft.

## Source

Adapted from Anthropic’s [Claude Code `frontend-design` skill](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md). See that repository for upstream licensing.
