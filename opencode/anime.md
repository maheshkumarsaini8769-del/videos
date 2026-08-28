# SDC WEBSITE — FINAL ORIGINKIT TORNADO INTEGRATION

Integrate the Originkit "Tornado" component into the existing SDC Squad Digital Classes website.

The website's established visual identity is:

WHITE + PREMIUM BLUE + SOFT WATERCOLOUR + SMALL SDC GOLD ACCENTS.

The Tornado must be redesigned/styled to perfectly match this website.

DO NOT use the default Tornado colors if they conflict with the website.

--------------------------------------------------
1. TORNADO LOCATION
--------------------------------------------------

Use ONLY ONE Tornado component.

Place it inside the HERO SECTION.

Desktop:
- Right side of the hero
- Behind/around the hero's main visual
- It may partially surround the hero image
- It must never interfere with headline readability

The left side should remain clean for:

DIGITAL SKILLS.
REAL PROJECTS.
BETTER CAREER.

CTA buttons and text must remain completely readable.

Do NOT use Tornado:
- across the entire page
- behind course cards
- behind the application form
- inside the footer
- in multiple sections
- as a full-screen background

The Tornado is a HERO VISUAL EFFECT only.

--------------------------------------------------
2. FINAL TORNADO COLOR PALETTE
--------------------------------------------------

Use this exact color family:

PRIMARY TORNADO:
#1D4ED8

SECONDARY:
#3B82F6

SOFT WATERCOLOUR BLUE:
#60A5FA

LIGHT GLOW:
#BFDBFE

SDC GOLD ACCENT:
#F5B400

BACKGROUND:
TRANSPARENT

IMPORTANT:

Blue should dominate.

Gold should be extremely limited.

Approximate visual balance:

75% Royal/Premium Blue
20% Sky/Light Blue
5% SDC Gold

Do NOT use:
- Purple
- Pink
- Red
- Green
- Orange
- Neon cyan-heavy appearance
- Black background

--------------------------------------------------
3. VISUAL TARGET
--------------------------------------------------

The Tornado should look like:

"Premium blue energy flowing through soft white watercolor."

It should visually connect with the website's:

- white background
- blue watercolor washes
- blue buttons
- blue borders
- SDC gold accents

It must NOT look like a gaming/cyberpunk/Web3 animation.

Avoid excessive neon glow.

Keep the glow soft and elegant.

--------------------------------------------------
4. WATERCOLOUR INTEGRATION
--------------------------------------------------

Behind the Tornado add a very subtle watercolor atmosphere.

Use:

- translucent blue watercolor cloud
- soft radial blue glow
- blurred watercolor wash
- extremely subtle flowing blue shapes

The watercolor must blend into the white background.

Do NOT create a hard circular background behind Tornado.

Do NOT create a solid blue rectangle.

Do NOT create a dark panel.

The Tornado should appear to naturally emerge from the white/blue watercolor environment.

--------------------------------------------------
5. TORNADO SHAPE
--------------------------------------------------

Use a visually elegant tornado shape.

Recommended:

Top:
medium-wide

Middle/waist:
noticeably narrower

Bottom:
medium-wide

Twist:
medium-high

The shape should be clearly visible but not enormous.

It should occupy approximately:

30–40% of the desktop hero visual area.

Do not allow it to dominate the entire hero.

--------------------------------------------------
6. ANIMATION SPEED
--------------------------------------------------

Keep animation:

SLOW
SMOOTH
PREMIUM
CONTROLLED

Do NOT use fast spinning.

The viewer should notice movement only after looking at it for a moment.

Use smooth easing.

Avoid jitter.

Avoid sudden acceleration.

--------------------------------------------------
7. PARTICLES
--------------------------------------------------

Enable particles/dots.

Particle colors:

Primary:
#3B82F6

Secondary:
#60A5FA

Very small percentage:
#BFDBFE

Occasional premium accent:
#F5B400

Gold particles must remain rare.

Do NOT make the entire Tornado sparkle gold.

--------------------------------------------------
8. COMETS
--------------------------------------------------

Enable subtle comet effects if supported.

Comet colors:

Main:
#3B82F6

Highlight:
#60A5FA

Very occasional:
#F5B400

Comets should travel smoothly.

Do NOT make them bright enough to distract from the hero heading.

--------------------------------------------------
9. GLOW
--------------------------------------------------

Use a soft blue glow.

Recommended visual feeling:

Royal Blue core
→ Sky Blue transition
→ very soft Ice Blue outer glow

Do NOT use a harsh neon glow.

The effect should blend with the white background.

--------------------------------------------------
10. CURSOR INTERACTION
--------------------------------------------------

Enable cursor interaction / repel if supported.

When the user moves the mouse:

particles should react subtly.

The Tornado should slightly respond.

Do NOT make the interaction exaggerated.

It should feel like a premium interactive detail.

--------------------------------------------------
11. HERO IMAGE RELATIONSHIP
--------------------------------------------------

The Tornado should sit BEHIND the hero's main image/visual.

Layer order:

Background watercolor
↓
Tornado
↓
Decorative particles
↓
Hero image
↓
Floating information cards

Text must remain above the background effects and remain fully readable.

Use proper z-index layering.

--------------------------------------------------
12. RESPONSIVE BEHAVIOUR
--------------------------------------------------

Desktop:
Full Tornado experience.

Tablet:
Reduce Tornado scale and particle density.

Mobile:
Reduce size significantly.

If WebGL performance becomes poor on mobile:

Use a lighter version or disable the Tornado gracefully.

The mobile hero must remain beautiful even without the full effect.

Never allow the animation to cause:

- horizontal overflow
- layout shifting
- slow scrolling
- excessive battery usage

--------------------------------------------------
13. PERFORMANCE
--------------------------------------------------

Only ONE Tornado instance.

Do not create multiple WebGL canvases.

Use lazy initialization where appropriate.

Respect:

prefers-reduced-motion

If user has reduced motion enabled:

Use a static/lightweight visual fallback.

If WebGL is unavailable:

Show a beautiful static watercolor blue background instead of a broken canvas.

No console errors.

--------------------------------------------------
14. IMPORTANT — NO TAILWIND
--------------------------------------------------

The project must NOT use Tailwind CSS.

Use:

HTML
CSS
JavaScript

If the Originkit component source contains Tailwind utility classes:

DO NOT introduce Tailwind into the project.

Instead adapt/convert the required styling into the existing normal CSS architecture while preserving the component's functionality and appearance.

--------------------------------------------------
15. WEBSITE COLOR CONSISTENCY
--------------------------------------------------

The Tornado colors must match the rest of the website.

Use:

Website background:
#FFFFFF

Watercolor background:
very light blue / translucent

Primary website blue:
#1D4ED8

Secondary blue:
#3B82F6

Soft blue:
#60A5FA

Light blue:
#BFDBFE

SDC gold:
#F5B400

Text:
deep navy rather than pure black where appropriate

The Tornado must feel like it belongs to this exact design system.

--------------------------------------------------
16. DO NOT OVERUSE GOLD
--------------------------------------------------

Gold is part of the SDC identity but must remain an accent.

Use #F5B400 only for:

- a few particles
- tiny comet highlights
- selected micro-details

Never use gold for the main Tornado strands.

Never create a gold tornado.

--------------------------------------------------
17. FINAL VISUAL RESULT
--------------------------------------------------

The final hero should visually communicate:

SDC LOGO
+
WHITE SPACE
+
BLUE WATERCOLOUR
+
ROYAL BLUE TORNADO
+
REAL PREMIUM HERO IMAGE
+
SOFT BLUE LIGHT
+
SMALL GOLD ACCENTS
+
PREMIUM TYPOGRAPHY

The result should look:

CLEAN
PREMIUM
MODERN
TECHNOLOGICAL
CREATIVE
EDUCATIONAL
PROFESSIONAL

NOT:

DARK
GAMING
CYBERPUNK
NEON
GENERIC AI TEMPLATE
OR OVER-ANIMATED

--------------------------------------------------
18. FINAL QUALITY CHECK
--------------------------------------------------

After implementation, inspect the actual rendered website.

Check:

1. Does Tornado visually match the SDC website?
2. Is the white background still dominant?
3. Does blue watercolor blend naturally?
4. Is the Tornado too bright?
5. Is the Tornado stealing attention from the headline?
6. Are gold accents subtle?
7. Does the hero look premium?
8. Does the animation remain smooth?
9. Does mobile remain fast?
10. Is there any horizontal overflow?
11. Are there console errors?
12. Is there only one Tornado instance?

If any answer is problematic, refine the implementation before finishing.

FINAL DESIGN RULE:

The Tornado is NOT the main attraction.

It is a premium interactive layer that makes the SDC hero section feel expensive.

The hierarchy must remain:

1. SDC BRAND
2. HERO HEADLINE
3. CTA
4. REAL HERO VISUAL
5. TORNADO ANIMATION
6. WATERCOLOUR DETAILS
7. MICRO-INTERACTIONS
## VISUAL REFERENCE — MUST FOLLOW

The supplied website mockup/image is the visual reference for the final HERO SECTION.

Do NOT copy the image as a static webpage.

Instead reproduce its visual language as a REAL INTERACTIVE WEBSITE.

The following elements shown in the reference must become functional/animated:

1. Blue watercolor background
2. Blue Tornado/WebGL particle effect
3. Realistic hero photography
4. Floating information cards
5. Premium navigation
6. Animated CTA buttons
7. Soft blue particles
8. Small gold light accents
9. Smooth scroll-reveal animations

IMPORTANT TORNADO BEHAVIOUR:

The Tornado shown in the reference is only a visual representation.

In the actual website it must be a LIVE ANIMATED Originkit Tornado component.

It must continuously animate.

Particles must move through the vortex.

Comets must travel through the strands.

The strands must rotate/flow smoothly.

Cursor movement should subtly affect the particles.

The animation must NOT be a GIF or static image.

COLOR:

Primary: #1D4ED8
Secondary: #3B82F6
Soft Blue: #60A5FA
Light Blue: #BFDBFE
Accent Gold: #F5B400
Background: transparent

The Tornado must blend naturally into the white watercolor environment.

Do NOT use black behind the Tornado.

Do NOT use purple.

Do NOT use a cyberpunk/neon appearance.

Do NOT make the Tornado excessively bright.

The Tornado should look like BLUE WATERCOLOUR ENERGY flowing around the hero image.

LAYERING:

White background
↓
Watercolor texture
↓
Tornado/WebGL
↓
Hero photograph
↓
Floating information cards
↓
Hero text and CTA where appropriate

The hero text must ALWAYS remain readable.

RESPONSIVE:

Desktop → full Tornado
Tablet → reduced Tornado
Mobile → lightweight/reduced Tornado
Low-power devices → lightweight fallback
prefers-reduced-motion → static/light animation

PERFORMANCE:

Only ONE Tornado instance.

Do not create multiple WebGL canvases.

Do not make the animation cause scrolling lag.

Do not block the page from becoming interactive.

FINAL GOAL:

The visitor should immediately feel:

"THIS IS A PREMIUM DIGITAL ACADEMY WEBSITE."

The animation should enhance that feeling rather than look like a random component pasted into the page.