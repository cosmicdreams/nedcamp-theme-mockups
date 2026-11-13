# NEDCamp mockups, pass 2: design plan

Subject: the website for New England Drupal Camp, a volunteer-run, two-day Drupal event at Rhode Island College, Providence.
Audience: New England Drupal developers, site builders and newcomers; on camp day, attendees holding phones between rooms.
Primary job: before camp, sell tickets and gather session proposals; during camp, answer "where should I be right now?"; after camp, keep the talks alive.
Fixed constraint: the official logo (`assets/logo.svg`, navy lighthouse with cyan rays, red NEW ENGLAND, condensed DRUPAL CAMP) is used unchanged on a light ground.

Brand hexes come from the logo file, not approximations: navy `#040234`, ray cyan `#009cde`, red `#bc0a1c`.

## A, Beacon (evolve the brand)

- **Color:** harbor night `#040234`, lamp cyan `#009cde`, signal red `#bc0a1c`, fog `#eef5fb`, paper `#ffffff`, muted ink `#4a5070`.
- **Type:**
  - Barlow Condensed 600/700 for display, because it echoes the logo's DRUPAL CAMP wordmark.
  - Public Sans for body. Its zeros have no slash, so times read cleanly.
- **Layout:**
  - A white logo bar, so the logo sits as designed.
  - Below it, a night hero. The headline is left-aligned. The right half holds a large ray burst drawn the way the logo draws its rays: thin hairlines from a lamp point.
  - The schedule is time rows by room columns.
- **The one bold thing:** a working lighthouse.
  - On load, the rays draw outward from the lamp.
  - A beam then sweeps on a 12-second period. Where it crosses the headline, the text lights up cyan.
- **Motion that answers people:**
  - The before/during/after switch morphs the hero with view transitions.
  - The "happening now" bar drains live.
  - Topic filters fade the sessions that don't match and draw a cyan rule on the ones that do.
  - A session's detail grows out of the cell you clicked.
- **Review against defaults:**
  - A dark hero with a gradient wedge is a common generated look. I swapped the soft gradient for hairline rays that copy the logo's construction, and tied the beam to the headline.
  - Tags are plain text with a colored rule, not pills.
  - No all-caps labels.

## B, Chart (new identity, same logo)

- **Color:** chart paper `#eef3f1`, harbor ink `#040234`, depth `#1f5f82`, sea glass `#b9d8cc` and `#dcebe5`, light red `#bc0a1c`. Red is used only for the light and the primary action.
- **Type:**
  - Archivo at a semi-expanded width (112, down from 125), so it doesn't fight the condensed logo.
  - Literata for body.
- **Layout:**
  - A nautical chart sheet.
  - Contour lines of the bay sit behind the headline.
  - A charted light marks Gaige Hall. It is labeled in real chart notation: "Fl R 4s" means a red light that flashes every 4 seconds.
  - Key dates are set like depth soundings.
- **The one bold thing:** living water.
  - Contour lines drift slowly.
  - The pointer pushes a ripple through them.
  - The charted light flashes on its real 4-second characteristic.
- **Motion that answers people:**
  - When the timetable scrolls into view, the "now" line sweeps from 8:00 to 10:20, and sessions turn "past" as it crosses them. That sweep is the explanation of what "now" means.
  - Clicking a session slides its detail in.
  - Starring a session pops the star.
- **Review against defaults:**
  - Broadsheet hairlines were avoided. The chart motif is the subject's own vernacular (New England coast, a lighthouse logo).
  - It is not decoration on a template.

## C, Pocket (one homepage that changes with the calendar)

- **Color:** navy `#040234`, cyan `#009cde`, red `#bc0a1c`, white, sky `#e9f5fc`.
- **Type:** Bricolage Grotesque for display, Public Sans for body.
- **Layout:**
  - One large phone on the left, with the moment's name and explanation set large on the right.
  - Under them, a year scrubber runs June to December.
  - The two camp days open into hours, so dragging through Saturday walks the schedule.
  - On a real phone, the frame disappears and the scrubber docks to the bottom.
- **The one bold thing:** a scrubber that is the argument.
  - On load it plays once, from June to Saturday 10:20.
  - The phone morphs from "get a ticket" to "happening now".
  - Anyone can drag it or use the arrow keys.
- **Motion that answers people:**
  - Moments change with view transitions.
  - When a slot changes, its sessions stagger in.
  - The day ribbon's marker glides.
  - Tapping a star sends a copy flying to the My day tab, which bumps its count.
- **Review against defaults:**
  - A row of three static phones is the usual mockup board, so I replaced it with one phone driven by time.

## Quality floor for all three

- Responsive down to 360px.
- Visible keyboard focus.
- `prefers-reduced-motion` stops sweeps, drifts and autoplay, and keeps state changes as instant swaps.
- AA contrast on text.
- No slashed zeros.

## D, Beacon header + Pocket on desktop (round 3, from Chris's feedback)

Feedback:
- Pocket is the favorite.
- Keep Beacon's header: the white logo card hanging into a navy chin.
- Drop the beacon itself.
- The chin says only what someone needs right now.
- All calendar material moves to the calendar.

- **Header:** white bar with the official logo on a white card that hangs into a short navy chin. Nav on the right.
- **Chin:** one line in Barlow Condensed, answering "what do I need to know right now?"
  - Before camp: deadlines and tickets.
  - Friday: today's tracks.
  - Saturday: what's on now, until when, what's next.
  - After camp: recordings.
  - At most two buttons, and they change with the moment.
  - Nothing about dates or phases lives here.
- **The calendar:** directly below the chin, the Pocket timeline (June to December, Saturday stretched by the hour) heads a desktop board. Scrubbing it drives the chin, the board and the schedule grid together. It plays once on load.
- **Board** (three columns, rebuilt per moment with view transitions):
  - Saturday: now, next, my day.
  - Friday: rooms.
  - Before: tickets, key dates, newcomers.
  - After: recordings.
- **Motion:**
  - No ambient decoration. Everything that moves is time passing or a response to the user:
    - autoplay of the year
    - the chin message changing
    - the board morphing
    - sessions staggering in
    - a star flying to My day
    - grid rows going past and now
  - Reduced motion: no autoplay, instant swaps.
- **Kept from A:** the rooms-by-time schedule grid, now following the calendar's clock.
