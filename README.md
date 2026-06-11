# Orixen Digital — Immersive 3D Website

> **Designing Solutions. Creating Impact.**

A world-class, futuristic 3D website experience for **Orixen Digital** — built with a cinematic dark aesthetic, glassmorphism, holographic UI, WebGL shaders and scroll-driven storytelling.

## ✨ Highlights

- **Immersive 3D hero** — React Three Fiber scene with a metallic torus-knot core, holographic wireframe shell, orbit rings, GPU shader particle universe, mouse-reactive camera and lighting
- **Cinematic preloader** — animated boot sequence with progress counter
- **Custom cursor** — glowing dot + spring-trailed magnetic ring (desktop only)
- **Lenis smooth scrolling** synced with GSAP ScrollTrigger
- **GSAP pinned horizontal showcase** — scroll-driven cinematic panels
- **Interactive live demos** — digital menu card, portfolio grid and website preview, all touchable
- **Magnetic buttons, 3D tilt cards, pointer-tracked glows, infinite testimonial marquee, animated FAQ accordion**
- **Aurora backgrounds, noise texture, animated grid floors, holographic borders**

## 🧱 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS, custom glass / holo / aurora utilities |
| 3D | Three.js + React Three Fiber + Drei, custom GLSL shaders |
| Motion | Framer Motion + GSAP (ScrollTrigger) + Lenis |

## 🚀 Getting Started

```bash
npm install
npm run dev      # development at http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## 📐 Sections

1. Hero — immersive 3D universe + marquee strip
2. About — animated stat counters + 4-phase process timeline
3. Services — six 3D-tilt capability cards
4. Showcase — GSAP pinned horizontal "Orixen Engine" panels
5. Live Demo — interactive menu / portfolio / website playground
6. Testimonials — infinite glass-card marquee
7. FAQ — animated accordion
8. Contact — WhatsApp (+91 97890 10266) & email cards
9. Footer — ghost wordmark + service map

## ⚡ Performance & Accessibility

- 3D scene is lazy-loaded client-side (`next/dynamic`, no SSR cost)
- Adaptive DPR rendering keeps frame rates high on weaker GPUs
- `prefers-reduced-motion` respected globally
- Semantic landmarks, ARIA labels, keyboard-accessible accordion/tabs
- Static prerender — first load JS ~210 kB
