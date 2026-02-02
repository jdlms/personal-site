# SvelteKit Migration Guide

This document captures the structure and styling of the current Astro site to guide migration to SvelteKit. The goal is **not** a 1-to-1 recreation, but to preserve the core design system and understand the site's architecture for collaborative refactoring.

---

## Project Overview

**Current Stack**: Astro 5 + React + Tailwind CSS + Cloudflare Pages
**Target Stack**: SvelteKit + Tailwind CSS + Cloudflare Pages

**Site Purpose**: Personal portfolio with blog, projects showcase, bookmarks/reading list, and a 3D desk model.

---

## Reference Paths

The original Astro project is preserved for reference:

**Astro project**: `/Users/joshua.lamorey/Personal/personal-site`

Key files to reference when implementing:

| What | Path |
|------|------|
| Main layout | `/Users/joshua.lamorey/Personal/personal-site/src/layouts/Layout.astro` |
| Nav component | `/Users/joshua.lamorey/Personal/personal-site/src/components/Nav.astro` |
| Footer | `/Users/joshua.lamorey/Personal/personal-site/src/components/Footer.astro` |
| Links (social icons) | `/Users/joshua.lamorey/Personal/personal-site/src/components/Links.astro` |
| Intro section | `/Users/joshua.lamorey/Personal/personal-site/src/components/Intro.astro` |
| Contact/wave button | `/Users/joshua.lamorey/Personal/personal-site/src/components/Button.jsx` |
| Project card | `/Users/joshua.lamorey/Personal/personal-site/src/components/Project.astro` |
| Homepage | `/Users/joshua.lamorey/Personal/personal-site/src/pages/index.astro` |
| Blog list | `/Users/joshua.lamorey/Personal/personal-site/src/pages/blog.astro` |
| Blog post page | `/Users/joshua.lamorey/Personal/personal-site/src/pages/post/[slug].astro` |
| Projects page | `/Users/joshua.lamorey/Personal/personal-site/src/pages/code.astro` |
| Reading/bookmarks | `/Users/joshua.lamorey/Personal/personal-site/src/pages/reading.astro` |
| Tailwind config | `/Users/joshua.lamorey/Personal/personal-site/tailwind.config.js` |
| Global CSS | `/Users/joshua.lamorey/Personal/personal-site/src/styles/global.css` |
| Content schemas | `/Users/joshua.lamorey/Personal/personal-site/src/content/config.ts` |
| Blog posts | `/Users/joshua.lamorey/Personal/personal-site/src/content/blog/` |
| Projects data | `/Users/joshua.lamorey/Personal/personal-site/src/content/projects/` |
| API routes | `/Users/joshua.lamorey/Personal/personal-site/src/pages/api/` |

---

## Design System

### Color Palette

The site uses a custom dark theme with warm accent colors. These are the core brand colors:

```css
/* Primary palette - use these semantic names in SvelteKit */
--surface: #1c2433;           /* Dark navy - main background */
--surface-alt: #39507f;       /* Lighter navy - elevated surfaces */
--text: #a99a91;              /* Warm beige - body text */
--text-muted: #BFC9CA;        /* Cool gray - secondary text */
--text-heading: #F5F5DC;      /* Cream - headings/emphasis */
--link: #e67e7e;              /* Coral - links, CTAs */
--highlight: #e6c79a;         /* Gold - secondary accent */
--accent: #966747;            /* Rust - tertiary accent */
```

### Tailwind Configuration

Keep these customizations in `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#1c2433",
        "surface-alt": "#39507f",
        "text": "#a99a91",
        "text-muted": "#BFC9CA",
        "text-heading": "#F5F5DC",
        "link": "#e67e7e",
        "highlight": "#e6c79a",
        "accent": "#966747",
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
}
```

### Typography

- **Body text**: `text-text` (warm beige)
- **Headings**: `text-text-heading` (cream)
- **Links**: `text-link hover:underline`
- **Font**: **Chivo** from [Omnibus Type](https://www.omnibus-type.com/fonts/chivo/)
- **Prose styling**: Uses `@tailwindcss/typography` with custom overrides for dark theme

#### Font Setup

Use [Fontsource](https://fontsource.org/fonts/chivo) for self-hosting (recommended for performance):

```bash
npm install @fontsource-variable/chivo
```

In `app.css`:
```css
@import '@fontsource-variable/chivo';
```

In `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Chivo Variable', 'system-ui', 'sans-serif'],
    },
  },
}
```

Chivo is a variable font with weights 100-900. Use `font-light`, `font-normal`, `font-medium`, `font-bold`, etc. as needed.

### Key Spacing Patterns

- Container: `max-w-screen-sm mx-auto px-4`
- Section gaps: `space-y-8` or `gap-8`
- Component padding: `p-4` to `p-6`

---

## Site Structure

### Routes

| Route | Purpose | Data Source |
|-------|---------|-------------|
| `/` | Homepage | API (wave count) |
| `/blog` | Blog list | Markdown collection |
| `/post/[slug]` | Blog post | Markdown files |
| `/code` | Projects | Markdown collection |
| `/reading` | Bookmarks | External API (`get_bookmarks.jdlms.dev`) |

### API Routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/getWaves` | GET | Read wave count from KV |
| `/api/updateWaves` | PUT | Increment wave count in KV |

---

## Components to Recreate

### Layout Components

1. **Main Layout** (`Layout.astro` → `+layout.svelte`)
   - Responsive container with max-width
   - Dark background (`bg-surface`)
   - Contains nav, main content slot, footer
   - Desktop: Shows 3D desk model on right side

2. **Markdown Layout** (`MarkdownLayout.astro`)
   - Simpler layout for blog posts
   - Prose styling wrapper
   - View transitions

### Page Sections

| Component | Description | Complexity |
|-----------|-------------|------------|
| `Nav` | Conditional nav - shows full links on home, "more" link on subpages | Simple |
| `Intro` | Bio/about text block | Simple |
| `Links` | Social icons (GitHub, LinkedIn, Bluesky) | Simple |
| `Contact` | Interactive wave button | Medium (has state) |
| `Extra` | Status/announcement box with bell icon | Simple |
| `Project` | Project card with tags | Simple |
| `Footer` | Simple credit footer | Simple |
| `Divider` | SVG line separator | Simple |
| `Prose` | Markdown content wrapper | Simple |

### Interactive Components

1. **Wave Button** (`Button.jsx`)
   - Fetches from `/api/updateWaves` on click
   - Shows count, increments on click
   - Stores state in localStorage to prevent spam
   - Convert to Svelte with reactive `$state` or store

2. **3D Desk Model** - **Already ported to SvelteKit.** No migration work needed.

---

## Content Collections

### Blog Posts

Schema:
```typescript
{
  author: string,          // default: "Joshua LaMorey-Salzmann"
  pubDatetime: Date,
  modDatetime?: Date,
  title: string,
  featured?: boolean,
  draft?: boolean,
  tags: string[],          // default: ["others"]
  description: string,
  canonicalURL?: string
}
```

**SvelteKit approach**: Use `mdsvex` for markdown processing with frontmatter.

### Projects

Schema:
```typescript
{
  id: number,
  title: string,
  tags: string[],          // e.g., ["js", "manifest v3", "preact"]
  link: string,            // external URL
  blurb: string
}
```

**SvelteKit approach**: Can use `mdsvex` or simple JSON/JS data file.

---

## External Integrations

1. **Cloudflare KV Store**
   - Used for wave counter persistence
   - Access via `platform.env.KV_STORE` in SvelteKit

2. **External Bookmarks API**
   - Endpoint: `https://get_bookmarks.jdlms.dev`
   - Returns: `{ published, title, url }[]`
   - Paginated in UI (12 per page)

3. **GitHub Profile Image**
   - Fetched dynamically: `https://api.github.com/users/jdlms`
   - Used in nav

---

## Assets

### Icons (in `/src/icons/`)
- `github.svg`
- `linkedin.svg`
- `bluesky.svg`
- `calendar.svg`
- `cv.svg`
- `wave.svg`

### Images
- `/src/images/profile.jpg`

### Models
- `/public/models/Desk.glb` (3D desk model)

---

## Suggested SvelteKit Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Nav.svelte
│   │   ├── Footer.svelte
│   │   ├── Links.svelte
│   │   ├── Intro.svelte
│   │   ├── Contact.svelte
│   │   ├── Extra.svelte
│   │   ├── Project.svelte
│   │   ├── Divider.svelte
│   │   ├── Prose.svelte
│   │   └── desk/
│   │       └── (already ported)
│   ├── utils.ts
│   └── types.ts
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte              (home)
│   ├── blog/
│   │   └── +page.svelte
│   ├── post/
│   │   └── [slug]/
│   │       └── +page.svelte
│   ├── code/
│   │   └── +page.svelte
│   ├── reading/
│   │   └── +page.svelte
│   └── api/
│       ├── getWaves/
│       │   └── +server.ts
│       └── updateWaves/
│           └── +server.ts
├── content/
│   ├── blog/
│   │   └── *.md
│   └── projects/
│       └── *.md (or projects.json)
└── app.css (global styles)
```

---

## Migration Priorities

### Must Keep
- Custom color palette
- Tailwind configuration
- Dark theme
- Responsive layout patterns
- Wave counter feature
- Blog/project content

### Can Simplify
- shadcn/ui components (not heavily used, can use simpler Svelte equivalents)
- Pagination component (simple Svelte implementation)

### Consider Changing
- Content management approach (Astro Collections → mdsvex or other)
- Icon solution (astro-icon → Simple Icons)
- State management (React useState → Svelte stores/runes)

---

## Icons

Use [Simple Icons](https://simpleicons.org/) for brand/social icons.

```bash
npm install simple-icons
```

Usage in Svelte:
```svelte
<script>
  import { siGithub, siLinkedin, siBluesky } from 'simple-icons';
</script>

<svg role="img" viewBox="0 0 24 24" fill="currentColor">
  <path d={siGithub.path} />
</svg>
```

This replaces the current `/src/icons/*.svg` files (github, linkedin, bluesky, etc.).

---

## Key Files to Reference

When implementing, refer to these source files for exact styling/behavior:

| Purpose | File |
|---------|------|
| Main layout structure | `src/layouts/Layout.astro` |
| Color definitions | `tailwind.config.js` |
| Global CSS | `src/styles/global.css` |
| Homepage structure | `src/pages/index.astro` |
| Nav behavior | `src/components/Nav.astro` |
| Wave button logic | `src/components/Button.jsx` |
| Blog post schema | `src/content/config.ts` |
| Project card | `src/components/Project.astro` |
| Prose/markdown styling | `src/components/Prose.astro` |

---

## Notes for Collaboration

- This is a refactor opportunity, not a strict port
- Prioritize maintainability over feature parity
- The styling system (colors, spacing, typography) is the core to preserve
- Individual components can be reimagined as long as the overall aesthetic remains
- The 3D desk model has already been ported to SvelteKit - no work needed there
