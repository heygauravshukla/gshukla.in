---
name: react-components
description: Use this skill when the user asks to build/modify React components, pages, or layouts in a Next.js + TypeScript + Tailwind CSS project.
---

This skill guides the creation of production-grade React using Next.js + TypeScript + Tailwind CSS. Implement real, working code with exceptional attention to scalability, accessibility, and performance.

## Folder structure

- Keep the `components` directory at the same level as the `app` folder.
- Keep folder names and component file names kebab-case.
- Keep component names PascalCase.
- Keep content-related data in a `@data` folder located at the same level as the `app` directory.
- When creating global components like a header/footer, put them in a custom `layout.tsx` file inside the `components` folder and use them in the page files, rather than putting everything into `RootLayout`.
- If you ever create this custom layout file, name the component `Layout`, not `CustomLayout`.
- Only things that aren't possible in a custom layout should be kept in the root layout.
- If a component is getting too large, break it into smaller components. If a smaller component isn't reused elsewhere, keep it in the same file; if it is reused, give it its own file.

## Code style

- Use named exports for components.
- Don't declare `import React from "react"` in component files. It isn't required in modern React.
- Organize imports in this order: React/Next.js imports first, then third-party library imports, then local file imports.
- Set proper types for props received by a component and avoid using the `any` type.
- When mapping over items, never use the index as a key. Use a stable, unique id instead.
- Use optional chaining (`?.`) to guard against runtime errors when accessing potentially undefined values — e.g. object props that may be missing, or items in a list that hasn't loaded yet.

### Post-write checks

- After writing a component, check `current_problems` in the terminal for lint warnings about Tailwind class refactoring — they sometimes suggest fixes like turning `bg-gradient-to-r` into `bg-linear-to-r`. Apply those fixes.
- If you find any unused imports or declarations in the file, remove them and inform the user.

### Component reuse

- If multiple elements share several common classes (roughly 5+), extract them into an in-file component that accepts a `className` prop for customization, rather than repeating the class list on every instance.
- For reusable UI primitives like inputs, buttons, links, etc. — create the component once and reuse it via props, rather than duplicating markup and styles across instances.

## UI rules

- Don't create unnecessary divs — follow this hierarchy: section element -> container -> elements.
- Don't declare redundant classes on elements, like `relative`, `w-full`, `h-full`. Don't make every element `flex` unless required.
- Don't go beyond the design system — if the site's base neutral palette is, say, `neutral`, don't reach for `slate`, `zinc`, or anything else.

### Tailwind conventions

- Avoid Tailwind's arbitrary value syntax (square brackets `[]`); prefer the design system's tokens, or custom values if no matching token exists.
- When using the spacing scale, use `.25`, `.5`, `.75` for pixel-level adjustments — prefer something like `p-4.25` over `p-[17px]`. This applies to all classes that use the spacing scale under the hood.
- Leverage container queries (the `@container` class) when a layout needs more breakpoints than the standard ones provide.
- Prefer shorthands like `size-5` instead of `h-5 w-5`. Similarly, use `inset-5` instead of `top-5 right-5 bottom-5 left-5` when all sides share the same value.
- Prefer margin-top over margin-bottom for spacing between elements.
- Prefer the `gap` property for elements with uniform spacing between siblings. Avoid `gap` inside typography elements — use `mt-*` classes instead.
- If you need custom styles in `globals.css`, place them inside a Tailwind layer (`@layer base`, `@layer components`, etc.). Create new utilities with the `@utility` directive rather than writing plain custom CSS.
- Before using the `container` class, check `globals.css` for a customized `@utility container` definition (e.g. one that bakes in `mx-auto`, padding, or a `max-w-*` override). If one exists, don't re-declare margin or padding classes alongside `container` in components — `<div className="container">` is enough; avoid `<div className="container mx-auto px-4 md:px-8">`, since it's redundant and can conflict with the customization. If no customization exists, apply centering/padding classes as needed alongside `container` as usual.
- When applying dynamic classes based on state or props, use the `cn` utility function in `lib/utils.ts`:

```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Instead of:

```tsx
<button
  className={`rounded-md px-4 py-2 transition-colors ${
    isPending
      ? "cursor-not-allowed bg-gray-400"
      : "bg-blue-500 hover:bg-blue-600"
  }`}
>
  {isPending ? "Processing..." : "Submit"}
</button>
```

Prefer:

```tsx
<button
  className={cn("rounded-md px-4 py-2 transition-colors", {
    "cursor-not-allowed bg-gray-400": isPending,
    "bg-blue-500 hover:bg-blue-600": !isPending,
  })}
>
  {isPending ? "Processing..." : "Submit"}
</button>
```

## External libraries

- When building an interactive element that isn't achievable with raw JSX/CSS, prefer a Base UI component — for drawers, off-canvas panels, modals, etc.
- Prefer the GSAP library when the user needs animation on components.

### Icons

- Before implementing icons, check whether an icon library is already installed. If none is installed, ask the user whether they'd prefer an external library or custom SVG components.
- If the user prefers custom SVGs (or doesn't specify), create icon components that accept `size` and `className` props for dynamic customization, rather than hardcoding dimensions or styles inline.

## Accessibility rules

- Make sure buttons/links that use graphical elements (icons only, no visible text) have an accessible `aria-label` attribute or an accompanying `sr-only` span.
