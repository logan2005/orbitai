# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ORBIT AI - Infrastructure Intelligence is a cinematic, section-based storytelling presentation built with React, TypeScript, and custom 3D CSS transforms. It showcases an AI-powered solar infrastructure optimization system through an immersive, animated experience with 14 narrative sections.

### Multi-Page Structure

The application uses a **three-page architecture**:
- **`index.html`**: Prelude landing page with 5 scroll-snap sections introducing the problem and value proposition. Final CTA button links to `/presentation.html`
- **`presentation.html`**: Main React application with 14 interactive 3D sections. Finale slide includes buttons to visit the dashboard and view the ROI page
- **`roi.html`**: Professional ROI & financial model page with detailed metrics, comparisons, ESG impact, and investment rationale

**Navigation flow:**
1. Users land on the prelude page (index.html)
2. Click "SEE HOW IT WORKS" to view the main presentation
3. At the finale slide, they can either visit the live dashboard or view the detailed ROI page
4. ROI page includes a "Back to Presentation" button in the top-left corner

## Development Commands

- `npm run dev` - Start development server on port 3000 (accessible at `http://localhost:3000`)
- `npm run build` - Build for production using Vite
- `npm run preview` - Preview production build locally

## Environment Setup

Set `GEMINI_API_KEY` in `.env.local` file. The Vite config exposes it as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`.

## Architecture

### Application Structure

The app is a **single-page section-based presentation** with synchronized 3D visual scenes:

- **Root component** (`App.tsx`): Main orchestrator handling section navigation, transition locking, and keyboard/scroll controls
- **Entry point** (`index.tsx`): Standard React 19 root mounting
- **Component layer**:
  - `Visualizer.tsx`: 3D scene renderer with 4 distinct visual chapters
  - `SectionContent.tsx`: Left-overlay narrative content panel
  - `Navigation.tsx`: Right-side dot navigation

### Section System

Sections are defined in `constants.tsx:5-132` as a `SECTIONS` array. Each section contains:
- `id`: Unique identifier
- `title` & `subtitle`: Narrative headings
- `description`: Main value proposition text
- `visualType`: Determines which 3D scene variant to display
- `highlights`: Bullet-point deliverables
- `layout`: Content panel positioning (mostly `'left'`, one `'center'`)

**Adding a new section:**
1. Add a new `SectionData` object to the `SECTIONS` array in `constants.tsx`
2. If introducing a new `visualType`, add it to the `SectionData` type definition in `types.ts:7-21`
3. Update the corresponding scene component in `Visualizer.tsx` to handle the new visual state

### Navigation & Transitions

**Navigation inputs**:
- Mouse wheel (vertical scroll)
- Arrow keys (up/down, left/right)
- Spacebar (next)
- Dot navigation on right side (direct section jump)
- Bottom control arrows

**Transition locking** (`App.tsx:12-34`):
- `isTransitioning` state prevents overlapping navigation
- 1600ms debounce matches the scene animation duration in `Visualizer.tsx:28`
- `lastInteractionTime` ref enforces minimum time between interactions

### 3D Scene Architecture (Visualizer.tsx)

The Visualizer uses a **chapter-based 3D viewport system**:

**Chapter progression** (`Visualizer.tsx:14-20`):
- 14 sections grouped into 4 visual chapters (0-2, 3-6, 7-11, 12-13)
- Each chapter occupies a distinct Z-depth layer (5000px apart)
- Camera moves through 3D space via `translate3d(0, 0, ${worldZ}px)` and orbital rotation

**Scene components**:
- `EnergyScene` (Chapter 1): Solar panels, waste visualization, energy generation metrics
- `MatrixScene` (Chapter 2): Neural core, room occupancy matrix, system logs
- `SecurityScene` (Chapter 3): Student monitoring grid, hygiene AI scanning
- `ResponseScene` (Chapter 4): Operational balance, finale "O" logo reveal

**Visual states**:
- Each scene component receives `subStep` (current section index within chapter)
- Scenes use CSS transitions (2000ms duration) and conditional rendering based on `subStep`
- Active chapter determined by opacity/scale/blur states in `SceneWrapper`

**Layout adaptation** (`Visualizer.tsx:22-28`):
- When `section.layout === 'center'`, the 3D viewport expands to full width
- Otherwise, viewport occupies right 80% to accommodate left narrative panel

### Content Overlay (SectionContent.tsx)

Left-side narrative panel features:
- Slide-in transition (1200ms) from left edge
- Dark gradient backdrop (`from-black/90 via-black/40 to-transparent`)
- Progress bar showing presentation completion
- Color theming based on section type (orange for energy/solar, cyan for security/AI)
- Three-tier content hierarchy:
  1. Header: Progress indicator + category badge
  2. Title block: Subtitle, main title, description
  3. Highlights: Deliverable bullet points
- Finale-only CTA button on last section

### Build Configuration

**Vite setup** (`vite.config.ts`):
- React plugin with Fast Refresh
- Path alias: `@/*` resolves to project root
- Server runs on port 3000, host `0.0.0.0`
- Environment variables injected at build time via `define`
- Multi-page build config: `rollupOptions.input` includes both `index.html` and `presentation.html`

**TypeScript config**:
- Target ES2022
- JSX transform mode (`react-jsx`)
- Path alias `@/*` configured
- `experimentalDecorators` enabled
- `noEmit: true` (Vite handles builds)

**HTML setup**:
- **`index.html`**: Static prelude page with Tailwind CSS via CDN, scroll-snap sections, and reveal animations
- **`presentation.html`**: React app entry point with:
  - Tailwind CSS via CDN (not PostCSS)
  - Google Fonts: Inter (body) & Rajdhani (headings)
  - Import maps for React/Recharts/Lucide libraries (AI Studio compatibility)
  - Inline CSS for custom animations and 3D transform utilities

## Code Style

### Imports Order
1. React core
2. Local types/constants
3. External libraries (lucide-react)
4. Relative component imports

```typescript
import React, { useState, useEffect } from 'react';
import { SECTIONS, ICONS } from './constants';
import Visualizer from './components/Visualizer';
```

### Component Definitions
- Functional components with TypeScript: `const Component: React.FC<Props> = ({ ... }) => {}`
- Named exports: `export const SectionContent = ...` (except `App.tsx` which uses default export)
- Props interfaces defined inline above component

### Styling
- **Tailwind only** - no external CSS files (except inline styles in `index.html` for animations)
- Responsive classes: `text-6xl md:text-8xl`
- Semantic color tokens: `bg-slate-950`, `text-cyan-400`, `border-white/10`
- 3D utilities defined in `index.html`: `preserve-3d`, `rotateX-45`, `perspective-3000`
- Custom animations: `animate-pulse`, `animate-spin-slow`, `animate-[scan-line_4s_linear_infinite]`

### Animation Patterns
- Use inline `style` prop for dynamic 3D transforms: `style={{ transform: 'translate3d(...)' }}`
- CSS transitions for smooth state changes: `transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1)`
- Conditional classes for state-based animations: `${isActive ? 'opacity-100' : 'opacity-0'}`
- `transitionDelay` for staggered animations: `style={{ transitionDelay: '${i * 25}ms' }}`

## File Organization

```
/
├── index.html               # Prelude landing page (entry point)
├── presentation.html        # Main React app HTML shell with fonts/CDN/animations
├── roi.html                 # Professional ROI & financial model page
├── App.tsx                  # Main section orchestrator & navigation
├── index.tsx                # React root mount
├── constants.tsx            # SECTIONS array + Lucide icon exports
├── types.ts                 # SectionData interface & enums
├── vite.config.ts           # Build config (multi-page setup)
├── tsconfig.json            # TypeScript config
├── .env.local               # API keys (not committed)
└── components/
    ├── Visualizer.tsx       # 3D scene renderer with 4 chapter scenes
    ├── SectionContent.tsx   # Left narrative overlay panel (includes finale buttons)
    └── Navigation.tsx       # Right-side dot navigation
```

## Key Technical Details

- **React 19** with Strict Mode enabled
- **Recharts 3.6** for data visualizations (imported but may not be actively used in current sections)
- **Lucide React** for icons
- **Tailwind CSS** via CDN (not PostCSS)
- **Vite 6** as build tool
- **TypeScript 5.8** with strict module resolution
- No routing library (single-page, section-based navigation)
- No state management library (local state via hooks)
- 3D effects achieved purely with CSS transforms (no Three.js/WebGL)

## Common Development Patterns

**Adding animation to existing scene**:
1. Wrap element in conditional classes or inline styles
2. Use Tailwind transition utilities: `transition-all duration-[1500ms]`
3. For 3D transforms, add `style={{ transformStyle: 'preserve-3d' }}`

**Adjusting transition timing**:
- Modify `duration-[Xms]` in Tailwind classes (scene transitions default to 1500-2000ms)
- Adjust debounce in `App.tsx:15` if navigation feels sluggish or too sensitive

**Changing section order**:
- Reorder items in `SECTIONS` array in `constants.tsx`
- Update chapter grouping logic in `Visualizer.tsx:14` if needed

**Modifying 3D scene behavior**:
- Edit scene components in `Visualizer.tsx:87-368`
- Adjust `chapterGap` (line 16) to change depth separation between chapters
- Modify `orbitalRotation` calculation (line 20) to change camera rotation speed
