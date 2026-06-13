# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 161 color palettes, 57 font pairings, 161 product types with reasoning rules, 99 UX guidelines, and 25 chart types across 10 technology stacks. Searchable database with priority-based recommendations.

## When to Apply

This Skill should be used when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**.

### Must Use

- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts, etc.)
- Choosing color schemes, typography systems, spacing standards, or layout systems
- Reviewing UI code for user experience, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior
- Making product-level design decisions (style, information hierarchy, brand expression)
- Improving perceived quality, clarity, or usability of interfaces

### Skip

- Pure backend logic development
- Only involving API or database design
- Performance optimization unrelated to the interface
- Infrastructure or DevOps work

---

## Rule Categories by Priority

| Priority | Category | Impact | Key Checks (Must Have) | Anti-Patterns (Avoid) |
|----------|----------|--------|------------------------|------------------------|
| 1 | Accessibility | CRITICAL | Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels | Removing focus rings, Icon-only buttons without labels |
| 2 | Touch & Interaction | CRITICAL | Min size 44×44px, 8px+ spacing, Loading feedback | Reliance on hover only, Instant state changes (0ms) |
| 3 | Performance | HIGH | WebP/AVIF, Lazy loading, Reserve space (CLS < 0.1) | Layout thrashing, Cumulative Layout Shift |
| 4 | Style Selection | HIGH | Match product type, Consistency, SVG icons (no emoji) | Mixing flat & skeuomorphic randomly, Emoji as icons |
| 5 | Layout & Responsive | HIGH | Mobile-first breakpoints, Viewport meta, No horizontal scroll | Horizontal scroll, Fixed px container widths, Disable zoom |
| 6 | Typography & Color | MEDIUM | Base 16px, Line-height 1.5, Semantic color tokens | Text < 12px body, Gray-on-gray, Raw hex in components |
| 7 | Animation | MEDIUM | Duration 150–300ms, Motion conveys meaning, Spatial continuity | Decorative-only animation, Animating width/height, No reduced-motion |
| 8 | Forms & Feedback | MEDIUM | Visible labels, Error near field, Helper text, Progressive disclosure | Placeholder-only label, Errors only at top, Overwhelm upfront |
| 9 | Navigation Patterns | HIGH | Predictable back, Bottom nav ≤5, Deep linking | Overloaded nav, Broken back behavior, No deep links |
| 10 | Charts & Data | LOW | Legends, Tooltips, Accessible colors | Relying on color alone to convey meaning |

---

## Quick Reference

### 1. Accessibility (CRITICAL)
- `color-contrast` — Minimum 4.5:1 ratio for normal text (large text 3:1)
- `focus-states` — Visible focus rings on interactive elements (2–4px)
- `alt-text` — Descriptive alt text for meaningful images
- `aria-labels` — aria-label for icon-only buttons
- `keyboard-nav` — Tab order matches visual order; full keyboard support
- `form-labels` — Use label with for attribute
- `skip-links` — Skip to main content for keyboard users
- `heading-hierarchy` — Sequential h1→h6, no level skip
- `color-not-only` — Don't convey info by color alone (add icon/text)
- `reduced-motion` — Respect prefers-reduced-motion

### 2. Touch & Interaction (CRITICAL)
- `touch-target-size` — Min 44×44pt (Apple) / 48×48dp (Material)
- `touch-spacing` — Minimum 8px/8dp gap between touch targets
- `hover-vs-tap` — Use click/tap for primary interactions; don't rely on hover alone
- `loading-buttons` — Disable button during async operations; show spinner
- `tap-delay` — Use touch-action: manipulation to reduce 300ms delay
- `haptic-feedback` — Use haptic for confirmations and important actions
- `safe-area-awareness` — Keep primary touch targets away from notch and screen edges

### 3. Performance (HIGH)
- `image-optimization` — Use WebP/AVIF, responsive images (srcset/sizes), lazy load
- `image-dimension` — Declare width/height or use aspect-ratio to prevent layout shift
- `font-loading` — Use font-display: swap/optional to avoid invisible text
- `lazy-loading` — Lazy load non-hero components via dynamic import / route splitting
- `bundle-splitting` — Split code by route/feature to reduce initial load and TTI
- `virtualize-lists` — Virtualize lists with 50+ items
- `progressive-loading` — Use skeleton screens / shimmer instead of long spinners

### 4. Style Selection (HIGH)
- `style-match` — Match style to product type
- `consistency` — Use same style across all pages
- `no-emoji-icons` — Use SVG icons (Heroicons, Lucide), not emojis
- `effects-match-style` — Shadows, blur, radius aligned with chosen style
- `dark-mode-pairing` — Design light/dark variants together
- `primary-action` — Each screen should have only one primary CTA

### 5. Layout & Responsive (HIGH)
- `viewport-meta` — width=device-width initial-scale=1 (never disable zoom)
- `mobile-first` — Design mobile-first, then scale up
- `breakpoint-consistency` — Use systematic breakpoints (375 / 768 / 1024 / 1440)
- `readable-font-size` — Minimum 16px body text on mobile
- `horizontal-scroll` — No horizontal scroll on mobile
- `spacing-scale` — Use 4pt/8dp incremental spacing system
- `container-width` — Consistent max-width on desktop (max-w-6xl / 7xl)

### 6. Typography & Color (MEDIUM)
- `line-height` — Use 1.5–1.75 for body text
- `font-scale` — Consistent type scale (12 14 16 18 24 32)
- `contrast-readability` — Darker text on light backgrounds
- `color-semantic` — Define semantic color tokens (primary, secondary, error, surface)
- `color-dark-mode` — Dark mode uses desaturated / lighter tonal variants, not inverted
- `truncation-strategy` — Prefer wrapping over truncation
- `whitespace-balance` — Use whitespace intentionally to group related items

### 7. Animation (MEDIUM)
- `duration-timing` — Use 150–300ms for micro-interactions; complex ≤400ms
- `transform-performance` — Use transform/opacity only; avoid animating width/height
- `loading-states` — Show skeleton or progress when loading exceeds 300ms
- `easing` — Use ease-out for entering, ease-in for exiting
- `motion-meaning` — Every animation must express cause-effect, not just be decorative
- `spring-physics` — Prefer spring/physics-based curves for natural feel
- `exit-faster-than-enter` — Exit animations shorter than enter (~60–70%)
- `stagger-sequence` — Stagger list/grid item entrance by 30–50ms per item
- `interruptible` — Animations must be interruptible by user gesture
- `no-blocking-animation` — Never block user input during animation

### 8. Forms & Feedback (MEDIUM)
- `input-labels` — Visible label per input (not placeholder-only)
- `error-placement` — Show error below the related field
- `submit-feedback` — Loading then success/error state on submit
- `required-indicators` — Mark required fields (e.g. asterisk)
- `empty-states` — Helpful message and action when no content
- `toast-dismiss` — Auto-dismiss toasts in 3–5s
- `confirmation-dialogs` — Confirm before destructive actions
- `inline-validation` — Validate on blur (not keystroke)
- `progressive-disclosure` — Reveal complex options progressively
- `error-clarity` — Error messages must state cause + how to fix

### 9. Navigation Patterns (HIGH)
- `bottom-nav-limit` — Bottom navigation max 5 items; use labels with icons
- `back-behavior` — Back navigation must be predictable and consistent
- `deep-linking` — All key screens must be reachable via URL
- `nav-state-active` — Current location must be visually highlighted
- `modal-escape` — Modals must offer a clear close/dismiss affordance
- `state-preservation` — Navigating back must restore scroll position and filter state
- `adaptive-navigation` — Large screens (≥1024px) prefer sidebar; small use bottom/top nav

### 10. Charts & Data (LOW)
- `chart-type` — Match chart type to data type (trend→line, comparison→bar, proportion→pie)
- `color-guidance` — Use accessible color palettes; avoid red/green only pairs
- `legend-visible` — Always show legend near the chart
- `tooltip-on-interact` — Provide tooltips on hover/tap showing exact values
- `responsive-chart` — Charts must reflow on small screens
- `empty-data-state` — Show meaningful empty state when no data
- `touch-target-chart` — Interactive chart elements must have ≥44pt tap area

---

## How to Use This Skill

### Search the database (optional — requires Python)

```bash
# Full design system for a project
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "digital agency dark futuristic" --design-system -p "Orixen Digital"

# Domain-specific lookup
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism dark" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation performance" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "vibrant electric" --domain color

# Stack-specific (Next.js / React)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "bundle performance" --stack nextjs
```

> Note: CSV data files must be downloaded from the original repository for search to work:
> https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max/data

### Pre-Delivery Checklist

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from a consistent icon family
- [ ] All tappable elements have clear pressed feedback
- [ ] Touch targets meet minimum 44×44pt
- [ ] Micro-interaction timing 150–300ms with native-feeling easing
- [ ] Primary text contrast ≥4.5:1 in both light and dark mode
- [ ] Safe areas respected for headers, tab bars, and bottom CTA bars
- [ ] Mobile verified on 375px (small phone) and landscape
- [ ] prefers-reduced-motion supported without layout breakage
- [ ] All meaningful images/icons have accessibility labels
- [ ] Form fields have labels, hints, and clear error messages
