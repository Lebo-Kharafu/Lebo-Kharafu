# Extracted theme system

Extracted from `portable_dark_themed_design_system_reference.html`. The design-system CSS sections were separated into the four-file structure; the presentation-board-only CSS was excluded. Source CSS was preserved rather than silently corrected.

## Files
- `styles/tokens.css` — entry point
- `styles/variables.css` — design tokens and annual dynamic colour model
- `styles/base.css` — global resets and defaults
- `styles/utilities.css` — component utility classes

Import `styles/tokens.css` from your application stylesheet.

## Extraction note
This is a faithful extraction, not a validation or repair pass. In particular, review the `.divider- solid-subtle` selector in `utilities.css` before using it; it appears malformed in the source HTML.
