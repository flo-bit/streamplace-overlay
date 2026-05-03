# Stream Pets

An OBS browser overlay that reads from the AT Protocol firehose and displays animated pets for each chatter. Every user who sends a chat message gets a pet that walks around the bottom of the screen, reacting to chat commands in real time.

## Quick Start

Add `pets.html` as a browser source in OBS with a URL like:

    pets.html?streamer=did:plc:yourdidhere&repos=stream.place&status=1&limits=safe

---

## URL Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `streamer` | **Yes** | The DID of the streamer whose chat messages to display. Format: `did:plc:...` |
| `repos` | No | Comma-separated list of ATProto handles (e.g. `stream.place,other.repo`). Users with badge issuance records from any of these repos gain access to mid-tier commands. If **not** provided, all commands are public. |
| `status` | No | Set to `1` to show a connection status indicator in the top-right corner. |
| `limits` / `safe` | No | Set to `1` or `safe` to use conservative parameter limits. Default is wide-open. |
| `conservation` | No | Set to `1` to enable conservation mode where changing one dimension auto-adjusts the other two to maintain approximate visual area. |

---

## Access Control Tiers

### Streamer-Only Commands

Only the streamer (identified by the `streamer` DID in the URL) can use these:

| Command | Description |
|---------|-------------|
| `!hardreset` | Nuclear option: clears `localStorage`, `sessionStorage`, Cache API, IndexedDB, and hard-reloads the page with a cache-bust query parameter. |

### Mid-Tier (Badge-Gated) Commands

If `?repos=` is set, only users with `place.stream.badge.issuance` records issued by any of those repos can use these. If `?repos=` is **not** set, anyone can use them:

| Command | Aliases | Duration | Description |
|---------|---------|----------|-------------|
| `!barrelroll` | `barrel roll` | ~1.5s | Rotates the entire viewport 360. |
| `!party` | -- | ~8s | Orbiting colored lights across the screen. |
| `!snow` | -- | ~14s | Falling snowflakes drift down over the stage. |
| `!rain` | -- | ~12s | Falling raindrops streak down the screen. |
| `!confetti` | -- | ~8.5s | Colorful confetti pieces fall with spin and sway. |
| `!hearts` | `!heart` | ~7.5s | Rising heart emoji float up from the bottom. |
| `!quake` | `!earthquake`, `!shake` | ~0.6s | Shakes the entire stage violently. |
| `!shrink @handle` | `!shrinkray @handle` | Instant | Shrinks the target user's pet by 1.5x. |
| `!grow @handle` | `!growray @handle` | Instant | Grows the target user's pet by 1.5x. |
| `!refresh` | -- | Immediate | Reloads the page (lets mods reset the overlay without touching OBS). |
| `!clearall` | `!factoryreset` | Immediate | Wipes `localStorage` and reloads the page. |
| `reload @handle` | `refresh @handle` | Instant | Drops another user's cached profile and pet so their new sprite resolves. |

### Public Commands (Anyone Can Use)

**Movement & Animation**

| Command | Aliases | Effect |
|---------|---------|--------|
| `left` | `links`, `<`, `<--` | Walk left. |
| `right` | `rechts`, `>`, `-->` | Walk right. |
| `faster` | `speedup`, `fast`, `schneller` | Speed up by 1.5x per token. |
| `slower` | `slowdown`, `slow`, `langsamer` | Slow down by 1.5x per token. |
| `jump` | `spring`, `hop` | Jump animation. |
| `dance` | `tanz`, `dans` | Dance animation (~3 seconds). |
| `fart` | `furz`, `scheet` | Fart cloud effect. |

**Size & Shape**

| Command | Aliases | Effect |
|---------|---------|--------|
| `up` / `smaller` | `kleiner` | Shrink. 0.8x per token. |
| `down` / `bigger` | `groesser` | Grow. 1.25x per token. |
| `wide` / `wider` | `breiter`, `stretch` | Stretch wider. 1.25x per token. |
| `narrow` / `narrower` | `schmaler`, `thin` | Compress horizontally. |
| `tall` / `taller` | `laenger`, `hoog` | Stretch taller. 1.25x per token. |
| `short` / `shorter` | `kuerzer`, `kort` | Compress vertically. |

**Visual Filters**

| Command | Aliases | Effect |
|---------|---------|--------|
| `bulge` | `bulgy`, `fisheye` | Add barrel-bulge lens distortion. Cumulative. |
| `unbulge` | `debulge`, `flatten` | Clear all bulge distortion instantly. |
| `blur` | `blurry`, `unsharp` | Add Gaussian blur. Cumulative (~2px per step). |
| `unblur` | `sharp`, `sharpen`, `focus` | Clear all blur instantly. |

**Social**

| Command | Description |
|---------|-------------|
| `!pet @handle` | Shows a cartoon hand patting the target pet's head, with a heart animation. |
| `!cat` / `!dog` / `!bunny` / `!duck` / `!hamster` / `!goose` | Change your pet type. Entire message must be just this word. |
| `!random` | Clear pet type override; revert to handle-based selection. |
| `!reset` | Reset all your pet's transforms to defaults (size, speed, stretch, filters). |
| `reload` / `refresh` / `respawn` | Drop your own cached profile so a new sprite resolves. |

---

## Multipliers

Most commands support multipliers in two formats:

- **`xN` attachment:** `upx5`, `fasterx3`, `bulgex10`
- **Space-separated number:** `faster 3`, `up 5`, `wide 4`

| Limit | Default (Wide-Open) | Safe Mode |
|-------|---------------------|-----------|
| Max xN multiplier | 100 | 10 |
| Max jump queue | 50 | 5 |
| Max fart queue | 50 | 5 |
| Speed range | 0.02-50 | 0.2-5 |
| Depth scale range | 0.005-80 | 0.3-2.2 |
| Stretch range | 0.005-80 | 0.4-3.5 |
| Bulge level range | 0-30 | 0-8 |
| Blur level range | 0-20 | 0-6 |

---

## Rate Limiting

Users are limited to **1 command per 10 seconds**. When a user sends commands too quickly, their pet is highlighted with a **red glow for 1 second** as a visual warning.

Recovery commands (`!reset`, `!refresh`, `!clearall`, `!hardreset`) bypass the rate limit.

---

## Idle Fading

Pets that haven't sent a message fade in stages:

| Time Since Last Message | Effect |
|--------------------------|--------|
| 0-10 minutes | Full visibility. Pet animates normally. |
| 10-20 minutes | Opacity reduced to 50%. |
| 20-30 minutes | Opacity reduced to 25%. |
| After 30 minutes | Pet is fully removed from the stage. |

When a faded user sends a new message, their pet **immediately returns to full opacity**.

A maximum of **30 pets** can exist at once. If the limit is reached, the oldest pet is evicted first.

---

## Pet Types

Pets are assigned **deterministically** based on the user's DID hash. Available types: **cat**, **dog**, **bunny**, **duck**, **hamster**, **goose** -- each with multiple color/accent variants.

Users with an `actor.rpg.sprite` record in their AT Protocol repository display as **pixel-art sprite sheets** instead of SVG vectors.

---

## Architecture

The overlay connects to the AT Protocol Jetstream firehose to receive chat messages in real time. Each message is parsed for commands and forwarded to the corresponding pet instance. The animation loop runs via `requestAnimationFrame`.

State (pet positions, transforms, type overrides) is persisted to `localStorage` with a 4-hour TTL.

---

## Build

The entire application is a single self-contained HTML file: `pets.html`. No build step, no dependencies.
