# Good morning, my love

A gentle wake-up surprise, made to feel like a hug. It uses plain HTML, CSS, and JavaScript with two locally stored photos. There are no trackers or analytics. The optional web font is served by Google Fonts. The page asks crawlers not to index it, but that does not password-protect a deployed URL.

## Open it

Double-click `index.html`. If your browser does not open local pages, run `python3 -m http.server 8000` from this folder and visit <http://localhost:8000>.

## Change the photos or words

The short lines and section text are directly in `index.html`. The main waking message and little interaction replies are in `scripts/main.js`. Photo paths and alt text are in `content.json`; images are in `assets/photos/`.

## Share privately

Text her an access-protected link from a private hosting service. `noindex` discourages search indexing but does not make a public URL private.
