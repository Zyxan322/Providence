# Providence visual refinement

## What will change
- Move the hero copy to a strong left-aligned position while preserving the cinematic image focus and mobile readability.
- Restyle every homepage section in a consistent deep-black and navy visual system with controlled cobalt accents.
- Give image cards layered depth, perspective tilt, image movement, edge lighting, and stronger hover feedback.
- Add restrained scroll-triggered reveals to headings, media, cards, and chapter content across all pages, respecting reduced-motion settings.
- Replace the AI Agents card image with an existing non-human computing visual.
- Replace the current display typography with a more editorial, premium futuristic pairing across the website.
- Keep the supplied ambient track looping site-wide, repair its initial browser-safe playback behavior, and retain the visible sound control.

## Technical details
- Extend the shared motion wrappers so the animation system applies consistently without duplicating page logic.
- Use transform and opacity-based effects for smooth performance; keep cards usable on touch devices.
- Prevent the audio element from causing server/client rendering mismatches by rendering it only after the page has loaded in the browser.
- Test desktop and mobile layouts, hero slide controls, card interactions, scroll motion, and audio state.
