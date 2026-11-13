# NEDCamp theme mockups

These are unofficial concept mockups for a possible redesign of [nedcamp.org](https://nedcamp.org) for the 2027 New England Drupal Camp. They are not the NEDCamp website and haven't been approved by the organizers. The logo is the official NEDCamp logo, used unchanged.

## View them

Download or clone the repo, then open any file in `mockups/` in a browser. Each file is self-contained, with its data and logo built in. Fonts load from Google Fonts.

| Mockup | File | Idea |
| --- | --- | --- |
| **D, Beacon + Pocket** (the direction we're taking forward) | [`mockups/d-beacon-pocket.html`](mockups/d-beacon-pocket.html) | A white logo card over a short navy band that says only what you need to know right now. Below it, a calendar timeline drives the rest of the page: what's on now, what's next, your starred sessions, and the full schedule. |
| A, Beacon | [`mockups/a-beacon.html`](mockups/a-beacon.html) | Evolves today's brand. The homepage switches between before, during and after camp, and the schedule is a grid of rooms by time. |
| B, Chart | [`mockups/b-chart.html`](mockups/b-chart.html) | A new nautical-chart look with moving water and a flashing harbor light. The timetable gives each room its own row. |
| C, Pocket | [`mockups/c-pocket.html`](mockups/c-pocket.html) | One phone screen that changes as you drag a timeline from June to December. |

The Saturday schedule is the real 2026 agenda, used as sample content. The 2027 dates, parking and venue details are placeholders. The demos pretend it is Saturday at 10:20 AM so the "happening now" views have something to show.

## How we got here

Three AI reviewers scored the current nedcamp.org theme, then the first static versions of A, B and C. D hasn't been scored yet.

| Reviewer | Current site | A | B | C |
| --- | --- | --- | --- | --- |
| claude-opus-5-5 (medium) | 5.0 | 7.5 | 7.0 | 7.5 |
| gpt-6.1-sol (high) | 6.2 | 7.5 | 7.0 | 8.0 |
| gemini-4-argon (medium) | 5.8 | 8.2 | 7.4 | 7.8 |

All three wanted the same fixes:
- Compare rooms side by side instead of reading one long list.
- Make the homepage change before, during and after camp.
- Show day, time and room on every session.
- Fix the mobile layout.

[`DESIGN-PLAN.md`](DESIGN-PLAN.md) has the design reasoning for each mockup.

## Editing

The sources are in `mockups/src/`: one `*.src.html` per mockup, plus `data.js` for the agenda. Edit those, then run `mockups/src/build.sh` to rebuild the self-contained files. The script needs `zsh` and `python3`.

## Next

Build D as a real Drupal theme.
