# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Yathra is a French web and mobile development services company website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The site uses a dark theme with a signature green accent color (#35D79C).

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.1.6 with App Router
- **UI**: React 19, Radix UI, shadcn/ui components
- **Styling**: Tailwind CSS with CSS variables theming
- **Animations**: Framer Motion
- **Language**: TypeScript with strict mode

### Key Design Patterns

1. **Component Structure**: All sections are separate components imported into `app/page.tsx`. Each component is self-contained with its own animations and styling.

2. **Theming System**: Uses CSS variables defined in `globals.css` with HSL color format. Primary color is accessed via `text-primary`, `bg-primary`, etc. The brand green is available as `yathra-green` (#35D79C).

3. **Animation Strategy**: Framer Motion is used throughout with consistent patterns:
   - Viewport-triggered animations with `whileInView`
   - Staggered children animations for lists
   - Spring physics for interactive elements

4. **Navigation**: Header component tracks active section using scroll position and Intersection Observer. Mobile menu uses state management for open/close.

## Component Conventions

### Styling
- Use `cn()` utility from `lib/utils` for conditional classes
- Prefer Tailwind classes over inline styles
- Dark mode is the default (backgrounds use gray-950/black)
- Primary accent color should use `primary` classes, not hardcoded green values

### Common Patterns
```tsx
// Animation wrapper pattern
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>

// Component class merging
className={cn("base-classes", conditional && "conditional-classes")}
```

## Project-Specific Context

### Sections Flow
1. Header (fixed navigation)
2. Hero (landing with CTA)
3. WhyChooseUs (features grid)
4. OurServices (4 main services)
5. Projects (portfolio with filters: All/SaaS/Site Web/Application Mobile)
6. About (company information)
7. Contact (form and contact details)
8. Footer

### Projects Section
- Uses filtering system with AnimatePresence for smooth transitions
- Limited to 6 projects per view with "View All" button
- Each project links to `/projects/[project-name]`
- Images stored in `/public/projects/`

### Language
The entire site is in French. Maintain French language for all user-facing text including:
- Navigation labels
- Section titles
- Service descriptions
- Form labels
- Button text

## File Organization

```
app/              # Next.js app router pages
components/       # React components
  ui/            # Reusable UI components (shadcn)
  [Section].tsx  # Page section components
lib/             # Utilities
public/          # Static assets
  projects/      # Project images
```

## Performance Considerations

- Images use Next.js Image component with `fill` prop for responsive sizing
- Animations use `viewport={{ once: true }}` to prevent re-triggering
- Components use motion.div with layout animations for smooth filtering

## Common Tasks

### Adding a new project
1. Add project data to the `projects` array in `components/Projects.tsx`
2. Place image in `/public/projects/` directory
3. Ensure filter category matches: "website", "mobile", or "saas"

### Modifying theme colors
1. Update CSS variables in `app/globals.css`
2. For brand green, modify `--yathra-green` or `--primary` HSL values
3. Tailwind config automatically uses these CSS variables

### Adding new sections
1. Create component in `components/` directory
2. Import and add to `app/page.tsx`
3. Update Header navigation if needed
4. Follow existing animation patterns with Framer Motion