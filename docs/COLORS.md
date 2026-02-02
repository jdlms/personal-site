# Color System

## Current Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `surface` | `#1c2433` | Main background |
| `surface-alt` | `#39507f` | Elevated surfaces |
| `text` | `#a99a91` | Body text |
| `text-muted` | `#BFC9CA` | Secondary text |
| `text-heading` | `#F5F5DC` | Headings, emphasis |
| `link` | `#e67e7e` | Links, CTAs (primary accent) |
| `highlight` | `#e6c79a` | Secondary accent |
| `accent` | `#966747` | Tertiary accent |

## Locked Colors (Do Not Change)

These colors are fixed and should **never** be replaced during palette testing:

| Token | Hex | Reason |
|-------|-----|--------|
| `surface` | `#1c2433` | Core background identity |
| `text` | `#a99a91` | Body text readability |
| 3D scene background | `#27272a` | Matches desk model |

## Testable Colors

When a new palette is provided, apply it to these tokens only:

- `link` (primary accent)
- `highlight` (secondary accent)
- `accent` (tertiary accent)
- `surface-alt` (optional)
- `text-muted` (optional)
- `text-heading` (optional)

## Palette Testing

When I provide a palette like:

```
#523d36
#a44628
#bd512e
#afc7cf
#80a6b3
#56828f
```

Map the colors to the testable tokens based on their character:
- Warmer/bolder colors → `link`, `accent`
- Softer/cooler colors → `highlight`, `text-muted`, `surface-alt`
- Light colors → `text-heading`

Use judgment to maintain contrast and readability against the locked `surface` background.
