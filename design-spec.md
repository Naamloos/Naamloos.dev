# Naamloos.dev design specification

## Purpose and direction

Redesign Ryan de Jonge's personal portfolio for fellow developers and potential
employers or clients equally. The feeling is bold, polished, and expressive.
Use a clear professional introduction with personal character, oversized
typography, an asymmetric hero, and a varied project grid.

This document specifies a future implementation. No application changes are
part of this design interview. Exact supporting values below are implementation
defaults where the interview did not choose individual values.

## Existing application

Laravel with Inertia, React, TypeScript, and Tailwind CSS.
The active homepage is resources/js/Pages/Index2.tsx, rendered by
app/Http/Controllers/PortfolioController.php. Its styles are in
resources/css/index2.css. resources/js/Pages/Index.tsx is an older design.

Keep the existing portrait and project logos. The visual review was based on
source: workspace approval settings refused browser inspection. The Git working
tree was clean at recovery. No terminal identifiers from the interrupted run
were available to reconcile earlier commands.

## Information architecture

One scrolling page, in this order:

1. About: asymmetric hero with Ryan's name, short professional introduction,
   existing portrait, and links to GitHub, LinkedIn, and Discord.
2. Projects: DSharpPlus and Obsidian receive the largest showcase slots.
   Retain the other projects from the active homepage and their real links.
3. Skills: compact, readable technology list with existing technology logos.
4. Contact: name, email, and message form, with social links.
5. Footer: compact copyright, social links, and theme control.

Desktop sticky navigation links to About, Projects, Skills, and Contact.
Mobile header shows the identity and a prominent Contact link; visitors scroll
to other sections. Keep the mobile header compact and sticky.

Use English. Preserve accurate existing content, but replace generic repeated
introductory prose with concise, specific copy during implementation. Do not
invent project metrics, availability claims, testimonials, or achievements.

## Theme and color tokens

Default to the operating system theme. Provide a manual System / Light / Dark
override, persist an explicit choice locally, and avoid a theme flash. In System
mode, respond to changes in the operating system preference.

Selected theme colors:

| Token | Dark | Light |
| --- | --- | --- |
| --color-bg | #2f2f32 | #f7f8fc |
| --color-surface | #3a3a3e | #f0f2f7 |
| --color-text | #ffffff | #242936 |
| --color-primary | #4a7ad9 | #315fba |
| --color-link | #9abaff | #315fba |
| --color-secondary | #a78bfa | #6240aa |
| --color-success | #a3e635 | #3f6212 |
| --color-warning | #fdba74 | #92400e |
| --color-error | #ffb4ab | #9f1239 |

Supporting implementation defaults:

| Token | Dark | Light |
| --- | --- | --- |
| --color-muted | #c8c8ce | #505766 |
| --color-border | #9abaff | #242936 |
| --color-shadow | #17171b | #242936 |
| --color-on-action | #ffffff | #ffffff |
| --color-focus | #9abaff | #315fba |

The selected dark primary blue fails 4.5:1 for small text on the dark
background and surface. Use --color-link for text links and small labels.
Use --color-primary for action fills and decorative elements. White text on
the primary button fill is the intended pairing; validate final rendered
contrast before shipping. Secondary and feedback colors are text/icon colors
on the theme background or surface, not assumed safe backgrounds for white
text. Never use color alone to communicate errors or status.

Check final text/background pairs against WCAG AA: 4.5:1 for normal text,
3:1 for qualifying large text, and 3:1 for meaningful control boundaries and
focus indicators. Keep required information on opaque surfaces.

## Typography

Use Poppins for headings and IBM Plex Sans for body text and all UI controls.
Load only required weights, preferably self-hosted WOFF2, with font-display:
swap. No dedicated code font is required for the current content.

| Token | Value |
| --- | --- |
| --font-heading | 'Poppins', ui-sans-serif, system-ui, sans-serif |
| --font-body | 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif |
| --font-weight-body | 400 |
| --font-weight-ui | 500 |
| --font-weight-emphasis | 600 |
| --font-weight-heading | 700 |
| --text-body | 17px |
| --text-small | 14px |
| --text-ui | 16px |
| --text-hero | clamp(40px, 6vw, 72px) |
| --text-section | clamp(28px, 3.5vw, 40px) |
| --text-project-featured | clamp(26px, 3vw, 32px) |
| --text-project | 24px |
| --leading-body | 1.6 |
| --leading-heading | 1.1 |
| --tracking-hero | -0.03em |

Hero desktop size of 72px and body size of 17px were explicitly selected.
Keep prose around 60 characters per line. Avoid tiny project descriptions and
technology labels. Use one h1, then h2 section headings and h3 project titles.

## Shape, spacing, and graphic treatment

Selected corner radius: 4px. Use strong borders and offset shadows rather than
beveled controls or glass effects. Keep project logos in their native colors.

| Token | Value |
| --- | --- |
| --radius-control | 4px |
| --radius-card | 4px |
| --border-width | 2px |
| --shadow-offset | 5px 5px 0 var(--color-shadow) |
| --shadow-offset-hover | 7px 7px 0 var(--color-shadow) |
| --space-1 | 4px |
| --space-2 | 8px |
| --space-3 | 12px |
| --space-4 | 16px |
| --space-6 | 24px |
| --space-8 | 32px |
| --space-12 | 48px |
| --space-section | 96px |
| --space-section-mobile | 64px |
| --content-max | 1200px |
| --page-gutter | clamp(20px, 4vw, 48px) |

Use simple outline icons for interface actions, around 20px with 2px strokes.
Keep brand and technology logos distinct from UI icons. Never substitute an
unlabeled icon for a required action label.

## Layout and responsive behavior

Use a centered container capped at 1200px including its padding.
Desktop uses a 12-column grid with 24px gaps. Hero copy occupies about seven
columns; portrait and a restrained graphic accent occupy the remainder, with
asymmetric vertical alignment. Keep the DOM reading order logical.

At 1024px and above, feature DSharpPlus across seven columns and Obsidian across
five, with subsequent projects in a balanced two-column grid. Vary their
composition and scale without unnecessary empty space. Feature mostly
typography and existing logos, rather than mock screenshots or generated art.

From 640px to 1023px, use an even two-column project grid and simplify the hero.
Below 640px, use a single column. Place hero copy before the portrait, remove
asymmetric offsets that hinder reading, and keep featured projects first.
Ensure shadows do not cause horizontal overflow.

Desktop header: approximately 72px high, opaque themed background, bottom
border, name/home link on the left, section links and theme control on the
right. Mobile header: approximately 64px, identity and Contact link; put the
theme control in the footer. Set section scroll margins to header height plus
24px.

## Components and interactions

### Buttons and links

Primary button: theme primary fill, white text, 2px border, 4px radius,
minimum 44px height, 12px vertical / 20px horizontal padding, offset shadow.
Secondary button: surface background, theme text, strong border and shadow.
Text links: theme link color with visible underline or an equivalent persistent
link affordance. Do not rely on hover alone.

Hover lifts buttons/cards by 2px; active returns to the resting position.
Give keyboard focus a 3px outline with 4px offset. Disabled controls do not
lift and have explicit disabled semantics.

### Project showcases

Show real logo, project title, concise description, stack, and an explicit
repository link. Featured projects can include extra factual context.
Avoid nested interactive elements or duplicated tab stops on the same card.
Use blue and violet for restrained graphic accents and emphasis.

### Skills

Wrap technologies into readable groups with logos and labels. These are
informational, so avoid button semantics unless they perform an action.
Retain real brand logos without monochrome filters that obscure identity.

### Contact form

Visible labels for name, email, and message. Omit the phone control from the
new UI; the existing backend accepts it as nullable. Preserve current server
validation limits: name 50 characters, valid email, message 1000 characters.
Client-side feedback must agree with server validation.

Use full-width inputs on mobile, a minimum 44px control height, 17px input
text, surface fill, strong visible borders, and 4px radius. Message textarea
has a minimum height of 160px and can resize vertically.

Specify normal, focus, invalid, submitting, success, and server-error states.
Connect errors using aria-describedby and aria-invalid. Announce success
politely; show failures as readable text without clearing entered content.
Disable repeat submission while processing and label the button Sending….
Backend behavior changes, including notification handling, are outside this
visual specification.

### Theme control and footer

A labeled System / Light / Dark selector is sufficient. Maintain keyboard
operation and expose the current value accessibly. Footer includes Ryan's
name, current year, existing social destinations, and the theme selector.

## Motion and accessibility

Restrained motion only: 160ms ease-out for hover transforms and color changes.
No animated background, scroll-triggered entrances, or decorative continuous
animation. Under prefers-reduced-motion, remove transforms and smooth scrolling
and make state changes immediate.

Meet WCAG AA, support keyboard-only use, retain a skip link, use landmarks and
semantic headings, and keep focus visible. Give the portrait meaningful alt
text; decorative logos alongside an equivalent title can use empty alt text.
Use text plus an icon for feedback. Support 200% text zoom and 320px viewport
width without lost content or horizontal page scrolling.

## Implementation acceptance criteria

- Both themes follow the system by default; manual override persists.
- Selected colors, fonts, 4px radii, graphic shadows, and spacing are applied.
- Asymmetric desktop hero becomes a logical single-column mobile composition.
- DSharpPlus and Obsidian receive visual priority.
- All sections, real project links, portrait, and social destinations remain.
- Contact form shows name, email, message, and all necessary feedback states.
- No animated background remains.
- Verify at 320px, 390px, 768px, 1024px, and 1440px in both themes.
- Verify keyboard navigation, zoom, reduced motion, and contrast in the browser.
- Run npm run build after implementation; the workspace has no configured
  verification checks. No build was run for this documentation-only task.

The interview selected the brand direction and major values. Supporting
breakpoints, type weights, component dimensions, focus treatment, and motion
timings are concrete implementation defaults, adjustable if rendered validation
reveals accessibility or layout problems.
