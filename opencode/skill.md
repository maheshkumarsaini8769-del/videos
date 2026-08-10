# PREMIUM WEB EXPERIENCE ENGINEERING SKILL

## Version
2.0.0 — Universal / Project-Agnostic

## Purpose

Build production-quality, premium, cinematic, interactive and performance-conscious web experiences for **any modern web project**.

This skill is intentionally **project-agnostic**.

It must NOT assume:

- a specific brand
- a specific industry
- a specific website type
- a specific framework
- a specific routing system
- a specific page structure
- a specific color palette
- a specific content model
- a specific package list
- a specific set of pages

Before implementation, inspect the current project and adapt to what already exists.

The final experience should feel:

- Premium
- Modern
- Intentional
- Interactive
- Smooth
- Professional
- Visually memorable
- Fast
- Accessible
- Maintainable

It must NOT feel:

- Childish
- Game-like without reason
- Gimmicky
- Randomly animated
- Overloaded with effects
- Slow
- Template-like
- Technically impressive but visually useless

---

# 1. CORE PRINCIPLES

1. Inspect the existing project before changing anything.
2. Preserve working functionality unless there is a clear reason to replace it.
3. Improve weak or ugly UI instead of preserving it merely because it exists.
4. Content comes first.
5. Visual hierarchy comes second.
6. Interaction and motion support hierarchy.
7. 3D is optional, not mandatory.
8. Every animation must have a purpose.
9. Every interaction must provide useful feedback.
10. Performance is part of design.
11. Accessibility is mandatory.
12. Mobile is a first-class experience.
13. Use the simplest technology capable of producing the requested effect.
14. Do not add dependencies without justification.
15. Do not hide errors.
16. Do not stop at a mockup when implementation is requested.
17. The technology should disappear behind the experience.

The goal is not:

> "Look how much technology we used."

The goal is:

> "This website feels exceptionally well designed."

---

# 2. PROJECT DISCOVERY — ALWAYS DO THIS FIRST

Before writing or modifying code, inspect:

- package.json
- lockfile
- framework configuration
- TypeScript configuration
- routing configuration
- source directories
- existing components
- existing layouts
- existing pages/routes
- existing CSS
- Tailwind configuration if present
- theme/design tokens
- image assets
- video assets
- fonts
- 3D assets
- animation libraries
- utility functions
- existing API/data layer
- existing forms
- existing navigation
- existing responsive behavior

Determine the actual project architecture.

Do NOT assume the project uses:

- Next.js
- Vite
- React
- TypeScript
- Tailwind
- Framer Motion
- Three.js

If the project already uses them, work with them.

If it uses another stack, adapt this skill to that stack.

Do NOT convert the project to another framework unless explicitly requested.

---

# 3. EXISTING PROJECT SAFETY

Before replacing anything:

- identify what already works
- identify what is broken
- identify what is reusable
- identify what is duplicated
- identify what is visually outdated
- identify what is project-specific
- identify important integrations

Do not destroy working:

- authentication
- API calls
- forms
- payments
- navigation
- routing
- data fetching
- state management
- analytics
- accessibility
- SEO
- business logic

unless the task explicitly requires it.

If the existing UI is poor, redesign the UI without unnecessarily destroying the underlying functionality.

---

# 4. TECHNOLOGY SELECTION

Use the correct tool for the correct problem.

## React or equivalent component framework

Use for:

- reusable components
- composition
- state
- data-driven UI
- application architecture

## Framework routing

Use the routing system already present in the project.

Do not introduce a second routing system unnecessarily.

## Utility CSS

If Tailwind or another utility system exists, use it for:

- layout
- spacing
- responsive behavior
- typography
- sizing
- standard styling

## Custom CSS

Use for:

- advanced keyframes
- complex gradients
- glass effects
- pseudo-elements
- advanced hover states
- CSS variables
- complex 3D transforms
- special visual effects

## Framer Motion / Motion

If already installed or appropriate, use for:

- page transitions
- section entrance
- text reveal
- stagger
- hover interactions
- layout animation
- scroll-triggered UI motion

## Three.js / React Three Fiber

Use only when actual 3D rendering creates meaningful visual value.

Examples:

- 3D objects
- interactive scenes
- environments
- particles
- models
- spatial interfaces
- globe/world visualization
- advanced 3D hero scenes

Do not use WebGL for normal cards, icons, buttons or simple transforms.

## Drei or equivalent helpers

Use when working with React Three Fiber for:

- loaders
- GLTF loading
- environments
- controls
- text
- floating objects
- scene helpers

## Icon library

Use the project's existing icon system when possible.

Do not create 3D objects for simple UI icons.

---

# 5. DEPENDENCY RULES

Before installing anything:

1. Inspect package.json.
2. Check whether the dependency already exists.
3. Check whether the requested effect can be built with existing tools.
4. Prefer the smallest dependency footprint.
5. Avoid multiple libraries solving the same problem.

Do not automatically install:

- multiple animation libraries
- multiple UI libraries
- multiple icon libraries
- multiple 3D frameworks

Use one primary solution whenever practical.

Never install a dependency merely because a reference website uses it.

---

# 6. DESIGN PHILOSOPHY

Create a visual system, not a collection of effects.

Use:

- strong hierarchy
- intentional whitespace
- readable body text
- large display typography where appropriate
- clear CTA hierarchy
- consistent spacing
- controlled color
- depth
- contrast
- visual storytelling
- purposeful motion

Avoid:

- giant text everywhere
- tiny unreadable text
- excessive gradients
- excessive glassmorphism
- random glow
- excessive shadows
- repeated card layouts
- endless paragraphs
- unnecessary decoration

---

# 7. TYPOGRAPHY SYSTEM

Typography must have clear hierarchy.

Recommended hierarchy:

### Display / Hero
Large and visually dominant.

Use responsive sizing such as:

```css
font-size: clamp(3rem, 8vw, 8rem);
```

### Section headings
Large but smaller than the hero.

### Card headings
Medium and easy to scan.

### Body text
Normal, readable and comfortable.

### Labels
Small, compact and often uppercase.

Do not make body copy unnecessarily huge.

Do not use enormous headings for every section.

Keep paragraphs readable with a sensible maximum width.

---

# 8. ANIMATED TYPOGRAPHY

Use animated text selectively.

Supported patterns:

- word reveal
- line reveal
- character reveal
- mask reveal
- clip-path reveal
- fade + slide
- gradient text
- animated underline
- highlight reveal
- typewriter/live typing
- rotating phrases

## Typewriter

Use for:

- short labels
- rotating phrases
- small supporting statements
- interactive search/status text

Do not use typewriter effects for large paragraphs.

## Main heading

Prefer:

- line reveal
- word reveal
- mask reveal

over character-by-character animation.

## Typography rule

Text animation should improve hierarchy.

If removing the animation makes the design clearer, the animation was unnecessary.

---

# 9. LIVE TYPING SYSTEM

When appropriate, create a reusable typewriter component.

It should support:

- typing speed
- deletion speed
- pause duration
- cursor
- multiple phrases
- looping
- reduced-motion fallback

Example conceptual behavior:

```text
Phrase A
type → pause → delete
Phrase B
type → pause → delete
```

Do not make the effect distracting.

---

# 10. MOTION LANGUAGE

The entire project should share one motion language.

Motion should feel:

- smooth
- elegant
- responsive
- controlled
- consistent

Avoid:

- random bouncing
- excessive rotation
- aggressive scaling
- long unnecessary transitions
- constant movement
- extreme parallax
- excessive blur
- animations on everything

The user should not have to wait for the UI to finish animating.

---

# 11. MOTION TIMING

Use a consistent timing scale.

### Fast
100–180ms

For:

- icon changes
- subtle hover effects
- color transitions

### Normal
200–350ms

For:

- buttons
- cards
- navigation
- hover states

### Smooth
400–700ms

For:

- image reveals
- section entrances
- modal entrances
- major UI transitions

### Cinematic
700–1200ms

Use only for:

- hero entrance
- major visual reveals
- major page transitions

Do not use multi-second transitions for ordinary UI.

---

# 12. EASING

Prefer:

- ease-out for entrances
- ease-in-out for reversible movement
- spring motion for interactive objects

Springs should feel controlled, not bouncy.

---

# 13. PAGE TRANSITIONS

Use subtle page transitions.

Possible:

- fade
- slight vertical movement
- slight scale

Keep navigation fast.

Do not make every page transition a cinematic sequence.

---

# 14. SCROLL REVEAL

Sections may animate when entering the viewport.

Use:

- opacity
- translateY
- scale
- clip-path
- blur reduction where appropriate

Typical vertical movement:

20–60px.

Avoid extreme movement such as several hundred pixels.

Use viewport triggers intelligently.

Do not repeatedly animate content every time the user barely scrolls.

---

# 15. STAGGER SYSTEM

Use stagger for groups:

- cards
- lists
- navigation items
- feature points
- gallery items
- text words

Keep stagger short enough that the user sees the full group quickly.

---

# 16. PARALLAX

Use subtle parallax for:

- hero backgrounds
- image sections
- decorative objects
- layered visual compositions

Possible layers:

- background
- image
- gradient
- text
- decorative element

Keep movement small.

Do not create motion sickness.

Disable or reduce parallax on:

- mobile
- reduced-motion mode
- low-performance devices

---

# 17. MAGNETIC BUTTONS

Magnetic interaction may be used for important CTAs.

Behavior:

- button follows cursor slightly
- movement limited to approximately 5–10px
- smooth spring return

Do not make every button magnetic.

Disable on:

- touch devices
- reduced-motion mode
- low-performance environments

---

# 18. SPOTLIGHT EFFECT

Use spotlight hover for:

- premium cards
- feature cards
- selected UI panels

The spotlight should:

- follow pointer smoothly
- remain subtle
- respect card boundaries

Do not add spotlight to every component.

---

# 19. BORDER BEAM / ANIMATED BORDER

Use animated borders selectively.

Good candidates:

- featured card
- premium CTA
- important announcement
- selected pricing/package card

Do not animate the border of every card.

---

# 20. SHIMMER

Use shimmer for:

- loading states
- highlighted CTA
- selected premium element
- subtle background detail

Do not make every button shimmer continuously.

---

# 21. GLASSMORPHISM

Glass is an accent, not a default.

Possible style:

```css
background: rgba(255,255,255,0.04–0.08);
backdrop-filter: blur(...);
border: 1px solid rgba(255,255,255,0.08–0.15);
```

Good candidates:

- navbar
- cards
- floating panels
- CTA panels
- forms
- overlays

Do not make the entire website glass.

---

# 22. GLOW SYSTEM

Use glow to create hierarchy.

Possible:

- primary accent glow
- soft white glow
- background radial glow

Use:

- box-shadow
- filter
- radial-gradient

Do not make everything glow.

---

# 23. BACKGROUND SYSTEM

Possible background effects:

- radial gradients
- animated gradient blobs
- subtle grid
- grain/noise
- stars
- particles
- atmospheric lighting
- soft vignette

Use them according to the project's visual identity.

Do not assume a dark background or orange/gold palette.

The existing brand/design system takes priority.

---

# 24. PREMIUM HERO

The hero is normally the most visually important section.

Possible structure:

Left/content area:

- eyebrow
- animated headline
- supporting copy
- primary CTA
- secondary CTA

Right/visual area:

- image
- video
- 3D scene
- product visual
- interactive object

Choose the visual concept based on the project.

Do not automatically add 3D.

The hero should communicate the project's purpose immediately.

---

# 25. 3D HERO SYSTEM

If 3D is genuinely appropriate, use one primary visual concept.

Possible concepts:

- rotating object
- globe
- product model
- abstract geometry
- architectural environment
- floating device
- particles
- spatial data visualization

Do NOT combine every possible effect.

A strong 3D concept is better than ten unrelated effects.

---

# 26. 3D ARCHITECTURE

If using React Three Fiber or equivalent, isolate 3D code.

Recommended conceptual structure:

```text
components/
  3d/
    Scene
    PrimaryObject
    Marker
    ParticleField
    FloatingObject
    Loader
    WebGLFallback
```

The main page should not contain the entire 3D scene.

Use a scene composition component.

---

# 27. 3D CANVAS

Prefer a controlled number of Canvas instances.

Configure appropriately:

- camera
- DPR
- shadows
- antialiasing
- tone mapping
- background

Do not use excessive DPR.

Do not create multiple unnecessary WebGL canvases.

---

# 28. 3D CAMERA

Use perspective cameras where appropriate.

Camera movement should be subtle.

Mouse movement may influence:

- camera rotation
- camera position
- target position

Use interpolation/damping.

Avoid immediate camera jumps.

---

# 29. 3D LIGHTING

Use cinematic lighting.

Possible:

- ambient
- directional
- point
- spot
- environment lighting

Use the project's palette.

Avoid excessive lights.

Lighting should create:

- depth
- contrast
- focus
- atmosphere

---

# 30. 3D OBJECTS

3D objects should:

- have meaningful scale
- have intentional lighting
- have smooth motion
- react subtly to interaction
- remain visually subordinate to essential content

Avoid cartoonish or toy-like rendering unless the project explicitly calls for it.

---

# 31. 3D MARKERS

For spatial interfaces, markers may include:

- name
- coordinates
- status
- link
- description

Interaction:

Normal:
small/subtle.

Hover:
slightly larger + increased glow.

Active:
show label or supporting UI.

Click:
navigate or trigger the relevant action.

Do not make markers huge.

---

# 32. 3D PARTICLES

Particles are atmospheric.

Use:

- moderate density
- low opacity
- slow movement
- subtle depth
- optional pointer response

Never create thousands of particles without a strong reason.

Desktop can use a moderate amount based on device performance.

Mobile should use substantially fewer.

---

# 33. 3D CARD EFFECTS

For normal UI cards, prefer CSS 3D instead of Three.js.

Use:

```css
perspective: 1000px;
transform:
  rotateX(...)
  rotateY(...)
  translateZ(...);
```

Keep rotation around approximately ±6–8 degrees.

On mouse leave:

smoothly return to neutral.

Disable or simplify on touch devices.

---

# 34. PARALLAX IMAGES

Create reusable parallax image components when useful.

Support:

- pointer movement
- scroll movement
- hover zoom

Do not distort images.

Use layered depth when appropriate.

---

# 35. IMAGE SYSTEM

Images should:

- use appropriate aspect ratios
- use object-fit
- be optimized
- lazy-load where appropriate
- have alt text
- have meaningful fallbacks

If the framework provides optimized image handling, use it.

Do not load huge images for small visual areas.

---

# 36. VIDEO SYSTEM

When a project uses hero/background video:

- autoplay only when appropriate
- muted
- loop when appropriate
- playsInline on mobile
- provide a poster/fallback
- avoid blocking page load
- optimize file size
- respect reduced motion where practical

Never make a video the only source of important information.

---

# 37. 3D MODELS

Preferred model format:

- GLB/GLTF

Models should be:

- optimized
- compressed
- appropriately scaled
- centered
- correctly oriented

Avoid huge high-poly models.

Do not depend on unreliable external model URLs.

---

# 38. 3D MODEL LOADING

Never show a blank area while a heavy 3D scene loads.

Use a loader or visual fallback.

Examples:

- subtle skeleton
- gradient placeholder
- image poster
- small animated visual
- progress indicator if available

The loader should match the design.

---

# 39. WEBGL FALLBACK

3D must never be a single point of failure.

If WebGL fails or is unavailable:

fallback to:

- image
- video
- CSS animation
- gradient
- lightweight HTML visual

The website must remain functional.

---

# 40. PERFORMANCE

Performance is mandatory.

Optimize:

- images
- videos
- fonts
- models
- textures
- JavaScript
- animation loops
- rendering
- component boundaries

Avoid:

- huge textures
- unnecessary high-poly models
- massive particle fields
- multiple canvases
- expensive post-processing
- continuous expensive calculations
- unnecessary React state updates

For high-frequency animation, prefer refs/frame updates over React state when appropriate.

---

# 41. DEVICE PERFORMANCE

When practical, consider:

- devicePixelRatio
- viewport size
- hardware concurrency where available
- reduced motion
- WebGL availability

Do not treat one signal as a perfect performance measurement.

Make conservative decisions.

---

# 42. MOBILE STRATEGY

Mobile is NOT desktop scaled down.

On mobile:

- simplify visual effects
- reduce particles
- reduce DPR
- reduce shadows
- reduce model complexity
- reduce parallax
- reduce camera movement
- simplify 3D
- disable cursor-only effects
- stack layouts naturally
- maintain readable typography
- keep CTAs accessible

If 3D becomes slow:

use a premium fallback.

A smooth 2D experience is better than a laggy 3D experience.

---

# 43. TOUCH DEVICES

Never depend on hover for essential functionality.

On touch:

- use tap
- simplify interactions
- remove cursor tracking
- disable magnetic behavior
- keep buttons large enough
- expose information without hover

---

# 44. REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- stop automatic 3D rotation
- reduce parallax
- reduce floating animation
- reduce particle movement
- reduce camera movement
- reduce page transition intensity
- remove unnecessary decorative motion

Keep essential functionality.

---

# 45. RESPONSIVE DESIGN

Every implementation must work across:

- desktop
- laptop
- tablet
- mobile

Use the existing design system's breakpoints.

For fluid typography, prefer:

```css
clamp()
```

Do not assume one fixed viewport.

---

# 46. NAVIGATION

Navigation should be:

- clear
- functional
- responsive
- keyboard accessible

Possible enhancements:

- transparent initial state
- glass-on-scroll
- animated active indicator
- subtle hover state
- mobile menu animation

Do not sacrifice usability for visual effects.

---

# 47. INTERACTIVE CARDS

Cards may use:

- hover lift
- image zoom
- spotlight
- tilt
- border transition
- icon movement
- arrow movement
- reveal content

Do not apply every effect to every card.

Create hierarchy:

- featured card = strongest interaction
- normal cards = moderate interaction
- utility cards = minimal interaction

---

# 48. FILTERS AND TABS

Animated filters should:

- clearly show active state
- transition smoothly
- preserve accessibility
- work without animation
- avoid layout jumps

Use layout animation where appropriate.

---

# 49. FORMS

Forms should feel premium without becoming difficult to use.

Use:

- clear labels
- visible focus
- validation
- useful error messages
- loading state
- success state
- keyboard support
- responsive layout

Do not pretend a form was submitted if no backend exists.

If backend functionality is unavailable, make the UI honest about it.

---

# 50. MICRO-INTERACTIONS

Use small feedback for:

- button press
- hover
- focus
- navigation
- copy action
- success
- error
- selection
- menu open/close

Micro-interactions should make the interface feel responsive.

---

# 51. ACCESSIBILITY

3D and animation must never contain information that is unavailable elsewhere.

Important content must exist in HTML.

Use:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- visible focus
- accessible buttons
- accessible links
- alt text
- sufficient contrast
- reduced-motion support

Do not make a 3D object the only way to navigate.

---

# 52. SEO

Do not hide SEO-critical information inside:

- WebGL
- canvas
- images
- animations

Important information should exist in HTML.

Use the project's appropriate metadata system.

Ensure:

- meaningful titles
- descriptions
- heading hierarchy
- crawlable links
- semantic content

---

# 53. COMPONENT ARCHITECTURE

Prefer reusable components.

Possible generic components:

```text
components/
  Navbar
  Footer
  Button
  MagneticButton
  SectionHeading
  TextReveal
  TypewriterText
  SpotlightCard
  TiltCard
  GlassCard
  ImageReveal
  ParallaxImage
  ScrollProgress
  Modal
  FormField
```

Optional 3D:

```text
components/3d/
  Scene
  PrimaryObject
  Marker
  Route
  ParticleField
  FloatingObject
  Loader
  WebGLFallback
```

Do not create components just to create components.

Reuse meaningful patterns.

---

# 54. DATA ARCHITECTURE

Keep repeated content separate from presentation.

Possible:

```text
data/
  content
  navigation
  products
  services
  projects
  destinations
  packages
  team
  testimonials
  settings
```

Only create what the project actually needs.

Do not hard-code repeated data across many components.

---

# 55. CUSTOM HOOKS

Create reusable hooks only when useful.

Examples:

- useReducedMotion
- useMouseParallax
- useScrollProgress
- useIsMobile
- useDevicePerformance
- useTypewriter
- useTilt

Do not create unnecessary abstraction.

---

# 56. CLIENT / SERVER BOUNDARIES

For frameworks supporting server/client rendering:

Keep server-rendered content server-side where appropriate.

Use client components only when required by:

- state
- browser APIs
- event handlers
- animations
- WebGL
- mouse tracking
- touch interaction

Do not make the entire application client-side unnecessarily.

---

# 57. DYNAMIC IMPORTS

For heavy browser-only features, use dynamic/lazy loading when appropriate.

Good candidates:

- WebGL
- 3D scenes
- heavy editors
- large charts
- expensive interactive modules

Do not lazy-load everything blindly.

---

# 58. SHADERS

Shaders may be used for:

- advanced backgrounds
- distortion
- waves
- atmospheric effects
- custom visual systems

Do not use shaders for simple gradients.

If using a shader:

- document its purpose
- keep it lightweight
- provide a fallback
- test mobile performance

---

# 59. POST-PROCESSING

Post-processing can provide:

- bloom
- depth of field
- vignette
- color effects

But it can be expensive.

Use only when the visual improvement justifies the performance cost.

Do not enable expensive post-processing by default.

---

# 60. CANVAS PLACEMENT

A 3D canvas does not need to cover the whole website.

Prefer isolated sections.

For hero:

- canvas may be absolute inside the hero

For other sections:

- contained canvas

Always manage:

- z-index
- pointer-events
- overflow
- stacking contexts

Do not allow decorative canvas layers to block buttons.

---

# 61. POINTER EVENTS

If a visual canvas is decorative:

```css
pointer-events: none;
```

when appropriate.

If it contains interactive objects:

enable interaction only where needed.

Never block normal navigation.

---

# 62. SCENE CLEANUP

Avoid memory leaks.

When custom Three.js resources are created:

- dispose geometries
- dispose materials
- dispose textures when appropriate

Prefer framework-managed lifecycle where possible.

---

# 63. ANIMATION LOOPS

Avoid unnecessary custom loops.

For React Three Fiber, use frame-based APIs appropriately.

Do not call React state setters every animation frame unless absolutely necessary.

Prefer refs for high-frequency values.

---

# 64. MATERIALS AND TEXTURES

Prefer efficient materials.

Do not use expensive physically based materials everywhere.

Textures should be:

- correctly sized
- compressed where possible
- appropriate to the visual area

Avoid unnecessary 4K/8K textures.

---

# 65. CAMERA FRAMING

The main visual subject must remain visible across:

- desktop
- tablet
- mobile

Use responsive positioning.

Do not assume one fixed camera works everywhere.

---

# 66. INTERACTION SAFETY

Animations must never:

- trap the user
- block scrolling
- block buttons
- prevent navigation
- create excessive motion
- make content inaccessible

The interface must remain usable with animation disabled.

---

# 67. VISUAL HIERARCHY

For most hero sections:

1. Brand/context
2. Main headline
3. Supporting message
4. Primary CTA
5. Secondary CTA
6. Visual enhancement

Do not let animation or 3D overpower the primary message.

---

# 68. PAGE COMPOSITION

Avoid repetitive:

```text
Heading
Paragraph
Cards
Heading
Paragraph
Cards
```

Instead combine:

- text
- imagery
- motion
- whitespace
- interactive elements
- visual storytelling
- varied layouts
- full-width moments
- focused CTAs

Each section should have a reason to exist.

---

# 69. BENTO / ASYMMETRIC LAYOUTS

Use bento or asymmetric layouts when they improve the content hierarchy.

Do not force every project into a bento grid.

Cards can vary in:

- size
- aspect ratio
- emphasis
- content density

Maintain alignment and visual rhythm.

---

# 70. IMAGE REVEALS

Use:

- clip-path reveal
- mask reveal
- scale reveal
- slide reveal
- blur-to-sharp

Keep the underlying image stable.

Do not use dramatic image motion just for decoration.

---

# 71. CURSOR INTERACTIONS

Desktop-only effects may include:

- cursor-follow glow
- magnetic CTA
- image preview
- subtle parallax
- spotlight

Use them sparingly.

Never make the site difficult to operate because of cursor effects.

Disable on touch.

---

# 72. SCROLL PROGRESS

A scroll progress indicator can be useful for long pages.

Keep it:

- thin
- subtle
- non-blocking

Do not make it visually dominant.

---

# 73. LOADING EXPERIENCE

The initial load should feel intentional.

Possible:

- skeletons
- progressive image loading
- subtle reveal
- gradient placeholder
- branded loader

Do not delay meaningful content just to show an animation.

---

# 74. ERROR HANDLING

Never hide errors with:

```text
@ts-ignore
@ts-nocheck
any everywhere
```

Fix root causes.

Handle:

- missing assets
- failed requests
- failed model loads
- WebGL failure
- invalid data
- unsupported browser features

The application should fail gracefully.

---

# 75. TYPE SAFETY

When TypeScript is used:

- type component props
- type data structures
- type configuration
- type API responses where appropriate
- avoid broad any
- avoid disabling type checking

Do not sacrifice architecture just to make the build pass.

---

# 76. EXTERNAL INSPIRATION

External design sources may be used for:

- layout inspiration
- interaction ideas
- animation concepts
- component patterns
- visual direction

Potential sources include:

- 21st.dev
- v0.dev
- shadcn/ui
- modern agency sites
- premium product sites
- contemporary component libraries

Do not blindly copy complete websites.

Do not assume copied code is compatible.

Inspect and adapt.

---

# 77. 21ST.DEV / V0-STYLE INTERACTION SYSTEM

Use modern interaction patterns where appropriate:

- spotlight cards
- magnetic buttons
- animated borders
- shimmer
- glass surfaces
- hover previews
- staggered reveals
- animated gradients
- subtle 3D transforms
- smooth navigation
- scroll-driven motion
- premium forms
- animated backgrounds

These are patterns, not mandatory checkboxes.

Use the appropriate effect for the appropriate component.

---

# 78. "USE ALL CAPABILITIES" INTERPRETATION

When a project asks for an extremely animated/premium result, interpret that as:

> Use the full range of appropriate visual techniques across the project.

It does NOT mean:

> Put every animation on every element.

Distribute animation density intentionally.

Example:

### Hero
High animation density.

### Main showcase
High.

### Feature/services section
Medium.

### Content-heavy section
Low to medium.

### Forms
Low.

### Footer
Minimal.

This creates hierarchy.

---

# 79. ANIMATION DECISION TREE

Before adding an effect, ask:

1. Does it improve hierarchy?
2. Does it improve usability?
3. Does it improve storytelling?
4. Does it provide feedback?
5. Does it fit the brand?
6. Is it performant?
7. Does it work on mobile?
8. Does it work with reduced motion?

If the answer is mostly no:

Do not add the effect.

---

# 80. MOBILE FALLBACK RULE

A mobile fallback is not a failure.

Use:

- static image
- lightweight video
- CSS animation
- simplified DOM
- reduced particle scene

when necessary.

The fallback should look intentional and premium.

---

# 81. QUALITY CONTROL

Before considering the implementation complete, verify:

## Visual

- Does it look premium?
- Is hierarchy obvious?
- Is typography readable?
- Is the design coherent?
- Are animations intentional?
- Is the primary action obvious?
- Does the visual system feel consistent?

## Technical

- No broken imports
- No avoidable console errors
- No missing assets
- No broken routes
- No type errors
- No broken interactions

## Performance

- No obvious stuttering
- Reasonable initial load
- Mobile remains usable
- No unnecessary GPU load
- Heavy assets are lazy-loaded where appropriate

## Responsive

- Desktop
- Laptop
- Tablet
- Mobile

## Accessibility

- Keyboard navigation
- Focus states
- Reduced motion
- Semantic HTML
- Accessible controls
- Sufficient contrast

---

# 82. TESTING

Inspect the project's package scripts before running commands.

Typical commands may include:

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

Only run scripts that actually exist.

Test:

- all routes
- navigation
- buttons
- forms
- animations
- responsive behavior
- mobile menu
- loading states
- error states
- 3D loading
- WebGL fallback
- reduced motion
- touch interactions

Fix every issue found.

---

# 83. VISUAL AUDIT AFTER IMPLEMENTATION

Do not stop because the code compiles.

Perform a visual audit.

Ask:

- Is anything ugly?
- Is anything oversized?
- Is anything too small?
- Are sections repetitive?
- Is there too much animation?
- Is there too little animation?
- Does the hero communicate the purpose immediately?
- Are CTAs obvious?
- Does the design feel intentional?
- Does mobile feel designed rather than compressed?
- Does 3D actually improve the experience?

If something looks wrong:

fix it.

---

# 84. DO NOT DESTROY EXISTING WORK

Preserve useful:

- business logic
- data
- APIs
- authentication
- routing
- forms
- integrations
- assets
- reusable components

Replace only what needs improvement.

When redesigning a weak page, preserve its useful functionality while replacing its visual implementation.

---

# 85. ORIGINALITY

Create original implementations.

Use inspiration for:

- interaction patterns
- composition
- motion
- visual language

Do not reproduce proprietary websites or copy their unique content/assets.

Adapt concepts to the current project's identity.

---

# 86. UNIVERSAL CONTENT RULE

Never invent:

- fake statistics
- fake testimonials
- fake reviews
- fake certifications
- fake awards
- fake customers
- fake claims
- fake pricing
- fake integrations

If the project does not provide a fact, do not manufacture it.

Use neutral content only where placeholder content is explicitly acceptable.

Do not leave obvious Lorem Ipsum or TODO placeholders in production output.

---

# 87. BRAND ADAPTATION

The current project defines:

- brand
- colors
- typography
- imagery
- content
- tone
- industry
- functionality

This skill defines the **engineering and experience quality**.

Never force a fixed brand style from this skill onto a project.

---

# 88. FINAL EXECUTION WORKFLOW

Whenever asked to build or improve a premium web experience:

### Step 1
Inspect the complete project.

### Step 2
Identify the actual framework and architecture.

### Step 3
Identify the existing design system.

### Step 4
Identify current functionality.

### Step 5
Identify weak/ugly sections.

### Step 6
Plan the visual hierarchy.

### Step 7
Choose the simplest suitable technology for each effect.

### Step 8
Create reusable components.

### Step 9
Implement typography and layout.

### Step 10
Implement motion.

### Step 11
Implement advanced interactions.

### Step 12
Add 3D only where it creates meaningful value.

### Step 13
Add loading states.

### Step 14
Add fallbacks.

### Step 15
Add reduced-motion support.

### Step 16
Optimize performance.

### Step 17
Test all routes and interactions.

### Step 18
Run available lint/build/type checks.

### Step 19
Fix all errors.

### Step 20
Perform desktop and mobile visual audit.

### Step 21
Polish the result.

Do not stop at a mockup.

Actually implement the requested experience.

---

# 89. FINAL STANDARD

The final result must be:

**Production quality.**

Not:

- tutorial quality
- demo quality
- prototype quality
- copied-component quality
- random-AI-generated quality

The result should be maintainable by a professional developer.

The interface should feel expensive because of:

- hierarchy
- typography
- spacing
- composition
- interaction
- motion
- performance
- attention to detail

—not because it contains the maximum number of effects.

---

# 90. MASTER RULE

**Build the best experience the current project can support, using the existing architecture, content, brand and technology choices.**

Use 3D when 3D is valuable.

Use CSS when CSS is enough.

Use motion when motion improves the experience.

Use static content when static content is better.

Use advanced effects only when they earn their place.

Always prioritize:

**Quality > quantity**

**Purpose > novelty**

**Performance > spectacle**

**Usability > decoration**

**Accessibility > animation**

**Design > technology**

**A complete working product > a visual mockup**
