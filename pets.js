/* ---------- SVG factories (fallback pets) ---------- */

      const SVGS = {
        cat: (color, accent) => `
          <g class="body">
            <g transform="translate(20 70)"><g class="tail-swish">
              <path d="M0 0 Q -22 -10 -28 -34 Q -22 -42 -16 -36 Q -12 -18 0 -8 Z" fill="${color}" stroke="${accent}" stroke-width="2"/>
            </g></g>
            <g transform="translate(38 80)"><g class="leg-back">
              <rect x="-6" y="0" width="12" height="22" rx="5" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <ellipse cx="0" cy="22" rx="8" ry="4" fill="${accent}"/>
            </g></g>
            <g transform="translate(70 80)"><g class="leg-front">
              <rect x="-6" y="0" width="12" height="22" rx="5" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <ellipse cx="0" cy="22" rx="8" ry="4" fill="${accent}"/>
            </g></g>
            <ellipse cx="55" cy="74" rx="34" ry="22" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <ellipse cx="78" cy="80" rx="10" ry="8" fill="#fff7e6" opacity="0.85"/>
            <g transform="translate(78 50)">
              <path d="M-14 -10 L-18 -28 L-4 -18 Z" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <path d="M14 -10 L18 -28 L4 -18 Z" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <path d="M-14 -12 L-15 -22 L-7 -16 Z" fill="#ffc7d6"/>
              <path d="M14 -12 L15 -22 L7 -16 Z" fill="#ffc7d6"/>
              <circle cx="0" cy="0" r="20" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <circle cx="-10" cy="6" r="3" fill="#ffb3c1" opacity="0.6"/>
              <circle cx="10" cy="6" r="3" fill="#ffb3c1" opacity="0.6"/>
              <ellipse cx="-7" cy="-2" rx="2.5" ry="3.5" fill="#1a1a1a"/>
              <ellipse cx="7" cy="-2" rx="2.5" ry="3.5" fill="#1a1a1a"/>
              <circle cx="-6" cy="-3.5" r="0.9" fill="#fff"/>
              <circle cx="8"  cy="-3.5" r="0.9" fill="#fff"/>
              <rect class="eye-lid" x="-10" y="-4" width="6" height="3" rx="1.5" fill="${accent}"/>
              <rect class="eye-lid" x="4"   y="-4" width="6" height="3" rx="1.5" fill="${accent}"/>
              <path d="M-2 4 L2 4 L0 6 Z" fill="#ff7591"/>
              <path d="M0 6 Q -3 9 -5 7 M0 6 Q 3 9 5 7" stroke="#1a1a1a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
              <path d="M-12 4 L-22 2 M-12 6 L-22 7 M12 4 L22 2 M12 6 L22 7" stroke="#1a1a1a" stroke-width="0.8" stroke-linecap="round" opacity="0.5"/>
            </g>
          </g>
        `,
        dog: (color, accent) => `
          <g class="body">
            <g transform="translate(22 72)"><g class="tail-wag">
              <path d="M0 0 Q -10 -8 -8 -22 Q -2 -26 4 -20 Q 0 -8 0 0 Z" fill="${color}" stroke="${accent}" stroke-width="2"/>
            </g></g>
            <g transform="translate(40 80)"><g class="leg-back">
              <rect x="-7" y="0" width="14" height="22" rx="6" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <ellipse cx="0" cy="22" rx="9" ry="4" fill="${accent}"/>
            </g></g>
            <g transform="translate(70 80)"><g class="leg-front">
              <rect x="-7" y="0" width="14" height="22" rx="6" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <ellipse cx="0" cy="22" rx="9" ry="4" fill="${accent}"/>
            </g></g>
            <ellipse cx="55" cy="74" rx="34" ry="22" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <ellipse cx="78" cy="82" rx="11" ry="7" fill="#fff7e6" opacity="0.7"/>
            <g transform="translate(80 50)">
              <path d="M-18 -8 Q -26 -2 -22 14 Q -14 16 -10 6 Z" fill="${accent}"/>
              <path d="M18 -8 Q 26 -2 22 14 Q 14 16 10 6 Z" fill="${accent}"/>
              <circle cx="0" cy="0" r="20" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <ellipse cx="6" cy="8" rx="14" ry="9" fill="#fff7e6" stroke="${accent}" stroke-width="2"/>
              <ellipse cx="-8" cy="-4" rx="9" ry="7" fill="${accent}" opacity="0.55"/>
              <ellipse cx="-6" cy="-2" rx="2.6" ry="3.4" fill="#1a1a1a"/>
              <ellipse cx="8" cy="-2" rx="2.6" ry="3.4" fill="#1a1a1a"/>
              <circle cx="-5" cy="-3.5" r="0.9" fill="#fff"/>
              <circle cx="9"  cy="-3.5" r="0.9" fill="#fff"/>
              <rect class="eye-lid" x="-9" y="-4" width="6" height="3" rx="1.5" fill="${accent}"/>
              <rect class="eye-lid" x="5"  y="-4" width="6" height="3" rx="1.5" fill="${accent}"/>
              <ellipse cx="14" cy="6" rx="3" ry="2.4" fill="#1a1a1a"/>
              <path d="M11 12 Q 14 18 17 12 Z" fill="#ff7591"/>
            </g>
          </g>
        `,
        bunny: (color, accent) => `
          <g class="body">
            <g transform="translate(34 84)">
              <ellipse cx="0" cy="10" rx="14" ry="6" fill="${color}" stroke="${accent}" stroke-width="2"/>
            </g>
            <g transform="translate(70 88)">
              <ellipse cx="0" cy="6" rx="10" ry="4" fill="${color}" stroke="${accent}" stroke-width="2"/>
            </g>
            <circle cx="22" cy="68" r="9" fill="#fff" stroke="${accent}" stroke-width="2"/>
            <ellipse cx="54" cy="72" rx="30" ry="22" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <ellipse cx="74" cy="80" rx="10" ry="7" fill="#fff" opacity="0.9"/>
            <g transform="translate(80 48)">
              <g transform="translate(-6 -10)">
                <ellipse cx="0" cy="-14" rx="5" ry="20" fill="${color}" stroke="${accent}" stroke-width="2"/>
                <ellipse cx="0" cy="-14" rx="2.4" ry="14" fill="#ffc7d6"/>
              </g>
              <g transform="translate(8 -12) rotate(15)">
                <ellipse cx="0" cy="-14" rx="5" ry="20" fill="${color}" stroke="${accent}" stroke-width="2"/>
                <ellipse cx="0" cy="-14" rx="2.4" ry="14" fill="#ffc7d6"/>
              </g>
              <circle cx="0" cy="0" r="20" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <circle cx="-10" cy="6" r="3" fill="#ffb3c1" opacity="0.6"/>
              <circle cx="10" cy="6" r="3" fill="#ffb3c1" opacity="0.6"/>
              <ellipse cx="-7" cy="-1" rx="2.4" ry="3.2" fill="#1a1a1a"/>
              <ellipse cx="7" cy="-1" rx="2.4" ry="3.2" fill="#1a1a1a"/>
              <circle cx="-6" cy="-2.5" r="0.9" fill="#fff"/>
              <circle cx="8"  cy="-2.5" r="0.9" fill="#fff"/>
              <rect class="eye-lid" x="-10" y="-3" width="6" height="3" rx="1.5" fill="${accent}"/>
              <rect class="eye-lid" x="4"   y="-3" width="6" height="3" rx="1.5" fill="${accent}"/>
              <path d="M-2 5 L2 5 L0 7 Z" fill="#ff7591"/>
              <path d="M0 7 Q -3 10 -5 8 M0 7 Q 3 10 5 8" stroke="#1a1a1a" stroke-width="1" fill="none" stroke-linecap="round"/>
            </g>
          </g>
        `,
        duck: (color, accent) => `
          <g class="body">
            <g transform="translate(40 90)"><g class="leg-back"><path d="M-8 0 L8 0 L4 6 L-4 6 Z" fill="#ff8e3c"/></g></g>
            <g transform="translate(64 90)"><g class="leg-front"><path d="M-8 0 L8 0 L4 6 L-4 6 Z" fill="#ff8e3c"/></g></g>
            <ellipse cx="52" cy="74" rx="30" ry="22" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <path d="M40 70 Q 50 60 64 68 Q 60 80 46 80 Z" fill="${accent}" opacity="0.55"/>
            <path d="M22 66 L14 60 L18 70 Z" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <g transform="translate(78 56)">
              <circle cx="0" cy="0" r="18" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <path d="M14 2 Q 28 0 28 6 Q 28 12 14 10 Z" fill="#ff8e3c" stroke="${accent}" stroke-width="1.5"/>
              <line x1="16" y1="6" x2="26" y2="6" stroke="${accent}" stroke-width="0.8"/>
              <circle cx="4" cy="-3" r="3" fill="#1a1a1a"/>
              <circle cx="5" cy="-4" r="1" fill="#fff"/>
              <rect class="eye-lid" x="1" y="-5" width="6" height="3" rx="1.5" fill="${accent}"/>
              <circle cx="-2" cy="6" r="3" fill="#ffb3c1" opacity="0.5"/>
            </g>
          </g>
        `,
        hamster: (color, accent) => `
          <g class="body">
            <g transform="translate(40 86)"><g class="leg-back"><ellipse cx="0" cy="6" rx="8" ry="4" fill="${color}" stroke="${accent}" stroke-width="1.5"/></g></g>
            <g transform="translate(66 88)"><g class="leg-front"><ellipse cx="0" cy="4" rx="7" ry="3.5" fill="${color}" stroke="${accent}" stroke-width="1.5"/></g></g>
            <ellipse cx="56" cy="78" rx="30" ry="18" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <ellipse cx="72" cy="84" rx="11" ry="6" fill="#fff7e6" opacity="0.8"/>
            <g transform="translate(78 64)">
              <circle cx="-8" cy="-14" r="5" fill="${color}" stroke="${accent}" stroke-width="1.5"/>
              <circle cx="8"  cy="-14" r="5" fill="${color}" stroke="${accent}" stroke-width="1.5"/>
              <circle cx="-8" cy="-14" r="2.5" fill="#ffc7d6"/>
              <circle cx="8"  cy="-14" r="2.5" fill="#ffc7d6"/>
              <circle cx="0" cy="0" r="16" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <circle cx="-12" cy="6" r="6" fill="${color}" stroke="${accent}" stroke-width="1.5"/>
              <circle cx="12"  cy="6" r="6" fill="${color}" stroke="${accent}" stroke-width="1.5"/>
              <circle cx="-12" cy="7" r="3" fill="#ffb3c1" opacity="0.55"/>
              <circle cx="12"  cy="7" r="3" fill="#ffb3c1" opacity="0.55"/>
              <circle cx="-5" cy="-1" r="2.4" fill="#1a1a1a"/>
              <circle cx="5"  cy="-1" r="2.4" fill="#1a1a1a"/>
              <circle cx="-4" cy="-2" r="0.8" fill="#fff"/>
              <circle cx="6"  cy="-2" r="0.8" fill="#fff"/>
              <rect class="eye-lid" x="-7" y="-3" width="5" height="3" rx="1.5" fill="${accent}"/>
              <rect class="eye-lid" x="3"  y="-3" width="5" height="3" rx="1.5" fill="${accent}"/>
              <ellipse cx="0" cy="4" rx="1.6" ry="1.2" fill="#1a1a1a"/>
            </g>
          </g>
        `,
        goose: (color, accent) => `
          <g class="body">
            <g transform="translate(42 92)"><g class="leg-back"><path d="M-9 0 L9 0 L5 6 L-5 6 Z" fill="#ff8e3c" stroke="#cc6600" stroke-width="1"/></g></g>
            <g transform="translate(64 92)"><g class="leg-front"><path d="M-9 0 L9 0 L5 6 L-5 6 Z" fill="#ff8e3c" stroke="#cc6600" stroke-width="1"/></g></g>
            <path d="M22 70 L8 62 L14 80 Z" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <ellipse cx="50" cy="76" rx="32" ry="18" fill="${color}" stroke="${accent}" stroke-width="2"/>
            <path d="M30 70 Q 50 58 68 68 Q 64 86 38 84 Z" fill="${color}" stroke="${accent}" stroke-width="1.5"/>
            <path d="M44 76 Q 52 80 60 76" stroke="${accent}" stroke-width="1" fill="none"/>
            <path d="M48 80 Q 54 83 60 80" stroke="${accent}" stroke-width="1" fill="none"/>
            <path d="M 68 64 C 84 58, 90 38, 88 26"
                  stroke="${accent}" stroke-width="18" stroke-linecap="round" fill="none"/>
            <path d="M 68 64 C 84 58, 90 38, 88 26"
                  stroke="${color}" stroke-width="14" stroke-linecap="round" fill="none"/>
            <g transform="translate(88 22)">
              <ellipse cx="0" cy="0" rx="13" ry="11" fill="${color}" stroke="${accent}" stroke-width="2"/>
              <ellipse cx="9" cy="-1" rx="3" ry="2.5" fill="#ff8e3c" stroke="#cc6600" stroke-width="1"/>
              <path d="M9 0 Q 26 -2 28 4 Q 26 10 9 7 Z" fill="#ff8e3c" stroke="#cc6600" stroke-width="1.2"/>
              <line x1="12" y1="3" x2="24" y2="3" stroke="#cc6600" stroke-width="0.7"/>
              <circle cx="2" cy="-2" r="2.2" fill="#1a1a1a"/>
              <circle cx="2.7" cy="-2.7" r="0.7" fill="#fff"/>
              <rect class="eye-lid" x="-0.5" y="-3.5" width="5" height="2.5" rx="1.2" fill="${accent}"/>
              <circle cx="-4" cy="3" r="2" fill="#ffb3c1" opacity="0.4"/>
            </g>
          </g>
        `,
      };

      const ZZZ_SVG = `
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <text x="2"  y="14" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#fff" stroke="#3a3a3a" stroke-width="0.6">z</text>
          <text x="10" y="22" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#fff" stroke="#3a3a3a" stroke-width="0.6">z</text>
          <text x="20" y="32" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#fff" stroke="#3a3a3a" stroke-width="0.6">Z</text>
        </svg>
      `;
      const HEART_SVG = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z"
                fill="#ff5577" stroke="#fff" stroke-width="1.5"/>
        </svg>
      `;
      // Cartoon hand for !pet — palm-down so it reads as patting a head from above.
      const HAND_SVG = `
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#3a2418" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
            <rect x="11" y="22" width="14" height="9" rx="3" fill="#f4c393"/>
            <path d="M9 22 Q 8 14 12 12 Q 14 12 14 16 L 14 23 Z" fill="#f4c393"/>
            <path d="M13 22 Q 12 9  16 8  Q 19 8  18.5 13 L 18.5 23 Z" fill="#f4c393"/>
            <path d="M17 22 Q 16 7  21 6.5 Q 24 7  23 13 L 23 23 Z" fill="#f4c393"/>
            <path d="M21 22 Q 21 10 25.5 10 Q 28 10 27 16 L 27 23 Z" fill="#f4c393"/>
            <path d="M25 24 Q 30 22 31 26 Q 30 29 25 28 Z" fill="#f4c393"/>
          </g>
        </svg>
      `;
      const FART_GREENS = [
        "#9bbf2f",
        "#aacc3a",
        "#b8d650",
        "#8eb02a",
        "#7ea020",
        "#c4dc66",
        "#a3c544",
        "#88a52a",
        "#d4e878",
      ];
      const SMOKE_GRAYS = [
        "#dadada",
        "#cccccc",
        "#bbbbbb",
        "#aaaaaa",
        "#c8c8c8",
        "#9c9c9c",
        "#e8e8e8",
      ];

      function randomSmokeSvg() {
        const n = 5 + Math.floor(Math.random() * 4);
        const rand = (a, b) => a + Math.random() * (b - a);
        let body = "";
        let maxDur = 0;
        for (let i = 0; i < n; i++) {
          const cx = rand(20, 50);
          const cy = rand(55, 75);
          const r = rand(7, 16);
          const fill =
            SMOKE_GRAYS[Math.floor(Math.random() * SMOKE_GRAYS.length)];
          const peak = rand(0.45, 0.75);
          const dx = rand(-14, 14);
          const dy = rand(-35, -65);
          const startScale = rand(0.15, 0.32);
          const endScale = rand(1.4, 2.4);
          const duration = rand(1.5, 2.8);
          const delay = rand(0, 0.6);
          if (duration + delay > maxDur) maxDur = duration + delay;
          body += `<circle class="smoke-puff" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="${fill}" style="animation-duration:${duration.toFixed(2)}s;animation-delay:${delay.toFixed(2)}s;--smoke-start:${startScale.toFixed(2)};--smoke-end:${endScale.toFixed(2)};--smoke-dx:${dx.toFixed(1)}px;--smoke-dy:${dy.toFixed(1)}px;--smoke-peak:${peak.toFixed(2)}"/>`;
        }
        return {
          svg: `<svg viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">${body}</svg>`,
          durationMs: maxDur * 1000 + 100,
        };
      }

      function randomFartSvg() {
        const n = 4 + Math.floor(Math.random() * 5); // 4–8 puffs
        const rand = (a, b) => a + Math.random() * (b - a);
        let body = "";
        let maxDur = 0;
        for (let i = 0; i < n; i++) {
          const cx = rand(12, 78);
          const cy = rand(34, 58);
          const r = rand(5, 17);
          const fill =
            FART_GREENS[Math.floor(Math.random() * FART_GREENS.length)];
          const peak = rand(0.5, 0.9);
          const dx = rand(-22, 22);
          const dy = rand(-12, -42);
          const startScale = rand(0.12, 0.35);
          const endScale = rand(1.0, 2.0);
          const duration = rand(0.9, 1.9);
          const delay = rand(0, 0.5);
          if (duration + delay > maxDur) maxDur = duration + delay;
          body += `<circle class="fart-puff" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="${fill}" style="animation-duration:${duration.toFixed(2)}s;animation-delay:${delay.toFixed(2)}s;--fart-start:${startScale.toFixed(2)};--fart-end:${endScale.toFixed(2)};--fart-dx:${dx.toFixed(1)}px;--fart-dy:${dy.toFixed(1)}px;--fart-peak:${peak.toFixed(2)}"/>`;
        }
        return {
          svg: `<svg viewBox="0 0 90 70" xmlns="http://www.w3.org/2000/svg">${body}</svg>`,
          durationMs: maxDur * 1000 + 100,
        };
      }

      /* ---------- Pet variants (SVG fallback) ---------- */

      const PET_VARIANTS = {
        cat: [
          { c: "#f4a23c", a: "#cc7a18" },
          { c: "#3a3a3a", a: "#1a1a1a" },
          { c: "#fafafa", a: "#a8a8a8" },
          { c: "#a87752", a: "#5e3d24" },
          { c: "#cccccc", a: "#7a7a7a" },
        ],
        dog: [
          { c: "#e8c39e", a: "#a87645" },
          { c: "#5a3d2a", a: "#332010" },
          { c: "#fafafa", a: "#a8a8a8" },
          { c: "#d8a878", a: "#8e5e30" },
        ],
        bunny: [
          { c: "#fafafa", a: "#bdbdbd" },
          { c: "#d8b899", a: "#9c7a5a" },
          { c: "#3a3a3a", a: "#1a1a1a" },
          { c: "#c8b4d4", a: "#8c6e9e" },
        ],
        duck: [
          { c: "#ffd93d", a: "#cf9a00" },
          { c: "#fafafa", a: "#bdbdbd" },
        ],
        hamster: [
          { c: "#caa472", a: "#8e6a3f" },
          { c: "#fafafa", a: "#a8a8a8" },
          { c: "#e8b8a0", a: "#b07858" },
        ],
        goose: [{ c: "#ffffff", a: "#bcbcbc" }],
      };

      const PET_BASE = {
        cat: { speed: 35, scale: 1.0 },
        dog: { speed: 50, scale: 1.05 },
        bunny: { speed: 0, scale: 0.95 },
        duck: { speed: 28, scale: 0.9 },
        hamster: { speed: 60, scale: 0.75 },
        goose: { speed: 32, scale: 1.1 },
      };

      const RANDOM_TYPES = ["cat", "dog", "bunny", "duck", "hamster"];

      function hashString(s) {
        let h = 5381;
        for (let i = 0; i < s.length; i++)
          h = ((h << 5) + h + s.charCodeAt(i)) | 0;
        return Math.abs(h);
      }

      function clamp(v, [lo, hi]) {
        return Math.max(lo, Math.min(hi, v));
      }

      /* Bad-word redaction for chat bubbles. Strong profanity only; mild words pass through. */
      const BAD_WORDS_RE =
        /\b(fuck|shit|bitch|cunt|nigger|nigga|faggot|fag|whore|slut|asshole|arsehole|cock|wank|twat|pussy|scheisse|scheiße|arschloch|fotze|hure|wichser)([a-zäöü]*)\b/giu;
      function redactBadWords(s) {
        return s.replace(BAD_WORDS_RE, (m) => "*".repeat(m.length));
      }

      // User-chosen pet type, takes precedence over both sprite and handle-based picks.
      // did → 'cat' | 'dog' | 'bunny' | 'duck' | 'hamster' | 'goose'
      const petTypeOverrides = new Map();

      function pickPet(did, handle, sprite) {
        const override = petTypeOverrides.get(did);
        if (override && PET_VARIANTS[override]) {
          const h = hashString(did);
          const v =
            PET_VARIANTS[override][(h >> 5) % PET_VARIANTS[override].length];
          return {
            mode: "svg",
            type: override,
            color: v.c,
            accent: v.a,
            ...PET_BASE[override],
          };
        }
        if (sprite) {
          return { mode: "sprite", sprite, scale: 1.0, speed: 42 };
        }
        const lower = (handle || "").toLowerCase();
        if (lower.includes("goose")) {
          const v = PET_VARIANTS.goose[0];
          return {
            mode: "svg",
            type: "goose",
            color: v.c,
            accent: v.a,
            ...PET_BASE.goose,
          };
        }
        // Per chat (felinus.fish): handles containing "fish" become cats.
        if (lower.includes("fish")) {
          const h = hashString(did);
          const v = PET_VARIANTS.cat[(h >> 5) % PET_VARIANTS.cat.length];
          return {
            mode: "svg",
            type: "cat",
            color: v.c,
            accent: v.a,
            ...PET_BASE.cat,
          };
        }
        const h = hashString(did);
        const type = RANDOM_TYPES[h % RANDOM_TYPES.length];
        const v = PET_VARIANTS[type][(h >> 5) % PET_VARIANTS[type].length];
        return {
          mode: "svg",
          type,
          color: v.c,
          accent: v.a,
          ...PET_BASE[type],
        };
      }

      /* ---------- Pet ---------- */

      const SPRITE_DISPLAY_H = 96; // px tall when rendered
      const WALK_CYCLE = [1, 0, 1, 2];
      const WALK_FPS = 6;

      /* Lazy-build a radial displacement map for the bulge filter. R/G channels
         encode (dx, dy) sample offsets — center → no shift, mid-radius → strongly
         outward push (so center magnifies / edges compress = fisheye / bulge). */
      let _bulgeMapDataUrl = null;
      function getBulgeDisplacementMap() {
        if (_bulgeMapDataUrl) return _bulgeMapDataUrl;
        const size = 128;
        const c = document.createElement("canvas");
        c.width = c.height = size;
        const ctx = c.getContext("2d");
        const imgData = ctx.createImageData(size, size);
        const cx = (size - 1) / 2,
          cy = (size - 1) / 2;
        const maxR = size / 2;
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            const dx = x - cx,
              dy = y - cy;
            const d = Math.sqrt(dx * dx + dy * dy);
            const t = Math.min(1, d / maxR);
            // Outward-pointing unit vector
            const ux = d > 0.0001 ? dx / d : 0;
            const uy = d > 0.0001 ? dy / d : 0;
            // Magnitude: 0 at center, peaks at ~0.6 of radius, 0 at edge — gives
            // the classic barrel-bulge profile (centre stretches, edges fall back).
            // Vectors point INWARD (toward center): a slightly-off-center output
            // pixel samples from a point even closer to centre, so the centre
            // appears magnified — a true bulge / convex lens. (An outward-pointing
            // map gives the opposite, pinch-style distortion.)
            const mag = Math.sin(t * Math.PI);
            const i = (y * size + x) * 4;
            imgData.data[i] = Math.round(128 - ux * mag * 127);
            imgData.data[i + 1] = Math.round(128 - uy * mag * 127);
            imgData.data[i + 2] = 128;
            imgData.data[i + 3] = 255;
          }
        }
        ctx.putImageData(imgData, 0, 0);
        _bulgeMapDataUrl = c.toDataURL("image/png");
        return _bulgeMapDataUrl;
      }

      class Pet {
        constructor(spec, stage, handle) {
          this.mode = spec.mode;
          this.scale = spec.scale;
          this.speed = spec.speed;
          this.lastMessage = performance.now();
          this.isHopper = spec.mode === "svg" && spec.type === "bunny";

          this.el = document.createElement("div");
          this.el.className = `pet spawning ${spec.mode === "svg" ? spec.type : "sprite"}`;

          this.flipEl = document.createElement("div");
          this.flipEl.className = "pet-flip";

          if (spec.mode === "svg") {
            this.flipEl.innerHTML = `
              <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
                ${SVGS[spec.type](spec.color, spec.accent)}
              </svg>
            `;
            this.visualHeight = 110 * this.scale;
          } else {
            const sp = spec.sprite;
            const ratio = SPRITE_DISPLAY_H / sp.frameHeight;
            this.spriteFrameW = sp.frameWidth * ratio;
            this.spriteFrameH = sp.frameHeight * ratio;
            this.spriteEl = document.createElement("div");
            this.spriteEl.className = "rpg-sprite";
            this.spriteEl.style.backgroundImage = `url("${sp.imageUrl}")`;
            this.spriteEl.style.backgroundSize = `${sp.width * ratio}px ${sp.height * ratio}px`;
            this.spriteEl.style.width = `${this.spriteFrameW}px`;
            this.spriteEl.style.height = `${this.spriteFrameH}px`;
            this.spriteEl.style.marginLeft = `${-this.spriteFrameW / 2}px`;
            this.sprite = sp;
            this.flipEl.appendChild(this.spriteEl);
            this.visualHeight = this.spriteFrameH;
          }

          this.zzzEl = document.createElement("div");
          this.zzzEl.className = "zzz";
          this.zzzEl.innerHTML = ZZZ_SVG;

          this.heartEl = document.createElement("div");
          this.heartEl.className = "heart";
          this.heartEl.innerHTML = HEART_SVG;

          this.fartEl = document.createElement("div");
          this.fartEl.className = "fart";

          this.smokeEl = document.createElement("div");
          this.smokeEl.className = "smoke";

          this.rubEl = document.createElement("div");
          this.rubEl.className = "pet-rub";
          this.rubEl.innerHTML = HAND_SVG;

          this.labelEl = document.createElement("div");
          this.labelEl.className = "pet-label";

          this.el.appendChild(this.flipEl);
          this.el.appendChild(this.zzzEl);
          this.el.appendChild(this.heartEl);
          this.el.appendChild(this.fartEl);
          this.el.appendChild(this.smokeEl);
          this.el.appendChild(this.rubEl);
          this.el.appendChild(this.labelEl);

          this.setHandle(handle);

          const fromLeft = Math.random() < 0.5;
          this.x = fromLeft ? -130 : window.innerWidth + 20;
          this.dir = fromLeft ? 1 : -1;

          this.state = "walk";
          this.stateTimer = 0;
          this.nextDecision = 4 + Math.random() * 5;
          this.happyUntil = 0;
          this.speedMul = 1;
          this.depthScale = 1;
          this.stretchX = 1;
          this.stretchY = 1;
          this.bulgeLevel = 0;
          this.blurLevel = 0;
          this.filterId = Math.random().toString(36).slice(2, 10);

          stage.appendChild(this.el);
          this.applyTransform();

          if (spec.mode === "svg") {
            this.flipEl
              .querySelectorAll(
                ".body, .leg-front, .leg-back, .tail-wag, .tail-swish, .eye-lid",
              )
              .forEach(
                (n) => (n.style.animationDelay = `${Math.random() * -2}s`),
              );
          }

          setTimeout(() => this.el.classList.remove("spawning"), 700);
        }

        setHandle(handle) {
          this.handle = handle;
          if (!this.showingMessage) {
            this.labelEl.textContent = handle ? "@" + handle : "";
          }
        }

        applyTransform() {
          this.el.style.transform = `translate3d(${this.x}px, 0, 0) scale(${this.depthScale})`;
          if (this.mode === "svg") {
            const flip = this.dir < 0 ? -1 : 1;
            this.flipEl.style.transform = `scale(${this.scale * flip * this.stretchX}, ${this.scale * this.stretchY})`;
          } else {
            this.flipEl.style.transform = `scale(${this.scale * this.stretchX}, ${this.scale * this.stretchY})`;
          }
          this.labelEl.style.top = "auto";
          this.labelEl.style.bottom = `${this.visualHeight + 8}px`;
          // Position fart cloud behind the pet (opposite of facing direction)
          this.fartEl.style.left = this.dir > 0 ? "-30px" : "auto";
          this.fartEl.style.right = this.dir > 0 ? "auto" : "-30px";
          // Bigger pets render in front
          this.el.style.zIndex = Math.round(this.depthScale * 100);
        }

        updateSpriteFrame() {
          if (!this.spriteEl) return;
          const sp = this.sprite;
          let row, col;
          if (this.state === "sleep") {
            row = 0;
            col = 1;
          } else if (this.state === "walk") {
            row = this.dir < 0 ? 1 : 2;
            const fps = WALK_FPS * this.speedMul;
            const idx =
              Math.floor(performance.now() / (1000 / fps)) % WALK_CYCLE.length;
            col = WALK_CYCLE[idx];
          } else {
            row = this.dir < 0 ? 1 : 2;
            col = 1;
          }
          row = Math.min(row, sp.rows - 1);
          col = Math.min(col, sp.columns - 1);
          this.spriteEl.style.backgroundPosition = `${-col * this.spriteFrameW}px ${-row * this.spriteFrameH}px`;
        }

        setState(s) {
          if (this.state === s) return;
          this.el.classList.remove("idle", "sleep", "happy");
          this.state = s;
          if (s === "idle") this.el.classList.add("idle");
          if (s === "sleep") this.el.classList.add("sleep");
          if (s === "happy") {
            this.el.classList.add("happy");
            this.happyUntil = performance.now() + 1200;
          }
        }

        setDirection(dir) {
          this.dir = dir;
          if (this.state !== "walk") this.setState("walk");
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        setSpeedMul(mul) {
          this.speedMul = clamp(mul, LIMITS.speedMul);
          this.el.style.setProperty("--anim-speed", this.speedMul);
          if (this.state !== "walk") this.setState("walk");
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        setDepthScale(scale) {
          this.depthScale = clamp(scale, LIMITS.depthScale);
          this._rebalance("depthScale");
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        setStretchX(mul) {
          this.stretchX = clamp(mul, LIMITS.stretchX);
          this._rebalance("stretchX");
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        setStretchY(mul) {
          this.stretchY = clamp(mul, LIMITS.stretchY);
          this._rebalance("stretchY");
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        // !reset — restore all per-pet transforms to defaults.
        resetAll() {
          this.speedMul = 1;
          this.depthScale = 1;
          this.stretchX = 1;
          this.stretchY = 1;
          this.el.style.setProperty("--anim-speed", 1);
          this.setBulgeLevel(0);
          this.setBlurLevel(0);
          this.lastMessage = performance.now();
          this.applyTransform();
          saveStateDebounced();
        }

        // Bulge / fisheye: real radial-pinch distortion via feDisplacementMap fed by
        // a canvas-generated vector field. Stacked with `bulgex3` etc.
        setBulgeLevel(level) {
          this.bulgeLevel = clamp(level, LIMITS.bulgeLevel);
          const filterId = `bulge-${this.filterId}`;
          const defs = document.querySelector("#filter-defs defs");
          let filter = document.getElementById(filterId);
          if (this.bulgeLevel <= 0) {
            if (filter) filter.remove();
          } else {
            const NS = "http://www.w3.org/2000/svg";
            if (!filter) {
              filter = document.createElementNS(NS, "filter");
              filter.id = filterId;
              filter.setAttribute("x", "-30%");
              filter.setAttribute("y", "-30%");
              filter.setAttribute("width", "160%");
              filter.setAttribute("height", "160%");
              filter.setAttribute("color-interpolation-filters", "sRGB");
              const feImage = document.createElementNS(NS, "feImage");
              feImage.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "xlink:href",
                getBulgeDisplacementMap(),
              );
              feImage.setAttribute("href", getBulgeDisplacementMap());
              feImage.setAttribute("result", "map");
              feImage.setAttribute("preserveAspectRatio", "none");
              feImage.setAttribute("width", "100%");
              feImage.setAttribute("height", "100%");
              filter.appendChild(feImage);
              const disp = document.createElementNS(NS, "feDisplacementMap");
              disp.setAttribute("in", "SourceGraphic");
              disp.setAttribute("in2", "map");
              disp.setAttribute("xChannelSelector", "R");
              disp.setAttribute("yChannelSelector", "G");
              filter.appendChild(disp);
              defs.appendChild(filter);
            }
            // Each level = a noticeable but bounded distortion.
            const disp = filter.querySelector("feDisplacementMap");
            disp.setAttribute("scale", String(this.bulgeLevel * 14));
          }
          this._applyVisualFilters();
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        // Per-pet blur — `blur`/`blurx5` add ≈2px steps; `unblur` clears.
        setBlurLevel(level) {
          this.blurLevel = clamp(level, LIMITS.blurLevel);
          this._applyVisualFilters();
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        // Combine bulge (SVG filter) and blur (CSS function) into the single
        // filter chain on flipEl. Order matters: bulge first warps the source,
        // then blur softens — feels more like an out-of-focus bulge than a
        // bulge-of-blur.
        _applyVisualFilters() {
          const parts = [];
          if (this.bulgeLevel > 0) parts.push(`url(#bulge-${this.filterId})`);
          if (this.blurLevel > 0) parts.push(`blur(${this.blurLevel * 2}px)`);
          this.flipEl.style.filter = parts.join(" ");
        }

        // Conservation mode: total visible area (depthScale^2 * stretchX * stretchY) stays ≈1.
        // When the user changes one dimension, the other two scale to compensate.
        _rebalance(changedKey) {
          if (!CONSERVATION) return;
          const product = this.depthScale * this.stretchX * this.stretchY;
          if (product <= 0) return;
          const f = Math.sqrt(product); // = ratio over target=1 → divide-by to compensate via two axes
          if (Math.abs(f - 1) < 0.005) return;
          if (changedKey === "depthScale") {
            this.stretchX = clamp(this.stretchX / f, LIMITS.stretchX);
            this.stretchY = clamp(this.stretchY / f, LIMITS.stretchY);
          } else if (changedKey === "stretchX") {
            this.depthScale = clamp(this.depthScale / f, LIMITS.depthScale);
            this.stretchY = clamp(this.stretchY / f, LIMITS.stretchY);
          } else if (changedKey === "stretchY") {
            this.depthScale = clamp(this.depthScale / f, LIMITS.depthScale);
            this.stretchX = clamp(this.stretchX / f, LIMITS.stretchX);
          }
        }

        fart() {
          this.el.classList.remove("farting");
          void this.el.offsetWidth;
          const { svg, durationMs } = randomFartSvg();
          this.fartEl.innerHTML = svg;
          this.el.classList.add("farting");
          setTimeout(() => {
            this.el.classList.remove("farting");
            this.fartEl.innerHTML = "";
          }, durationMs);
          this.lastMessage = performance.now();
        }

        jump() {
          this.el.classList.remove("jumping");
          void this.el.offsetWidth;
          this.el.classList.add("jumping");
          setTimeout(() => this.el.classList.remove("jumping"), 800);
          this.lastMessage = performance.now();
        }

        dance() {
          this.el.classList.remove("dancing");
          void this.el.offsetWidth;
          this.el.classList.add("dancing");
          setTimeout(() => this.el.classList.remove("dancing"), 3050);
          this.lastMessage = performance.now();
        }

        roll() {
          this.el.classList.remove("rolling");
          void this.el.offsetWidth;
          this.el.classList.add("rolling");
          setTimeout(() => this.el.classList.remove("rolling"), 800);
          this.lastMessage = performance.now();
        }

        smoke() {
          this.el.classList.remove("smoking");
          void this.el.offsetWidth;
          const { svg, durationMs } = randomSmokeSvg();
          this.smokeEl.innerHTML = svg;
          this.el.classList.add("smoking");
          setTimeout(() => {
            this.el.classList.remove("smoking");
            this.smokeEl.innerHTML = "";
          }, durationMs);
          this.lastMessage = performance.now();
        }

        sleep() {
          this.setState("sleep");
          this.stateTimer = 0;
          this.nextDecision = 12 + Math.random() * 12;
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        teleport() {
          this.el.classList.remove("teleporting");
          void this.el.offsetWidth;
          this.el.classList.add("teleporting");
          // Move during the invisible middle of the fade
          setTimeout(() => {
            this.x = Math.random() * (window.innerWidth - 110);
            if (Math.random() < 0.5) this.dir *= -1;
            this.applyTransform();
          }, 320);
          setTimeout(() => this.el.classList.remove("teleporting"), 720);
          this.lastMessage = performance.now();
          saveStateDebounced();
        }

        showMessage(rawText) {
          if (!rawText) return;
          const safe = redactBadWords(String(rawText)).slice(0, 100).trim();
          if (!safe) return;
          this.showingMessage = true;
          this.labelEl.textContent = safe;
          this.labelEl.classList.add("chatting");
          clearTimeout(this._messageHide);
          this._messageHide = setTimeout(() => {
            this.showingMessage = false;
            this.labelEl.classList.remove("chatting");
            this.labelEl.textContent = this.handle ? "@" + this.handle : "";
          }, 4500);
        }

        // !pet @target — show a cartoon hand patting the pet for ~1.8s, plus a heart.
        petPat() {
          this.el.classList.remove("petted");
          void this.el.offsetWidth;
          this.el.classList.add("petted");
          this.pulseHeart();
          setTimeout(() => this.el.classList.remove("petted"), 1900);
          this.lastMessage = performance.now();
        }

        pulseHeart() {
          this.el.classList.remove("happy", "idle", "sleep");
          void this.el.offsetWidth;
          this.state = "happy";
          this.el.classList.add("happy");
          this.happyUntil = performance.now() + 1200;
          this.lastMessage = performance.now();
        }

        tick(dt) {
          this.stateTimer += dt;
          const now = performance.now();

          if (this.state === "happy" && now > this.happyUntil) {
            this.setState("walk");
            this.stateTimer = 0;
          }

          if (this.state !== "happy" && this.stateTimer > this.nextDecision) {
            const r = Math.random();
            if (this.state === "sleep") {
              this.setState("walk");
            } else if (r < 0.6) {
              this.setState("walk");
              if (Math.random() < 0.2) this.dir *= -1;
            } else if (r < 0.88) {
              this.setState("idle");
            } else {
              this.setState("sleep");
            }
            this.stateTimer = 0;
            this.nextDecision = 3 + Math.random() * 5;
          }

          if (this.state === "walk") {
            const baseSpeed = this.isHopper ? 70 : this.speed;
            this.x += this.dir * baseSpeed * this.speedMul * dt;
            const max = window.innerWidth - 110;
            if (this.x < 0) {
              this.x = 0;
              this.dir = 1;
            }
            if (this.x > max) {
              this.x = max;
              this.dir = -1;
            }
          }

          if (this.mode === "sprite") this.updateSpriteFrame();
          this.applyTransform();
        }

        dispose() {
          const f = document.getElementById(`bulge-${this.filterId}`);
          if (f) f.remove();
          this.el.remove();
        }
      }

      /* ---------- Profile resolver: handle + PDS + RPG sprite ---------- */

      const profileCache = new Map(); // did -> { handle, pds, sprite }
      const profileFetchedAt = new Map(); // did -> Date.now() when last fetched
      const profilePending = new Map(); // did -> Promise
      const PROFILE_TTL_MS = 60 * 1000;

      function loadImage(url) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error("image load failed: " + url));
          img.src = url;
        });
      }

      async function fetchSprite(pds, did) {
        const url = `${pds.replace(/\/$/, "")}/xrpc/com.atproto.repo.getRecord?repo=${encodeURIComponent(did)}&collection=actor.rpg.sprite&rkey=self`;
        const r = await fetch(url);
        if (!r.ok) return null;
        const data = await r.json();
        const rec = data?.value;
        const cid = rec?.spriteSheet?.ref?.$link;
        const fw = Number(rec?.frameWidth);
        const fh = Number(rec?.frameHeight);
        if (
          !rec ||
          !cid ||
          !isFinite(fw) ||
          !isFinite(fh) ||
          fw <= 0 ||
          fh <= 0
        )
          return null;
        const imageUrl = `${pds.replace(/\/$/, "")}/xrpc/com.atproto.sync.getBlob?did=${encodeURIComponent(did)}&cid=${cid}`;
        let img;
        try {
          img = await loadImage(imageUrl);
        } catch {
          return null;
        }
        // The image must hold at least one frame; otherwise the sprite is unusable.
        if (img.naturalWidth < fw || img.naturalHeight < fh) {
          console.warn(
            "[pets] sprite frame larger than image; falling back to SVG",
            did,
          );
          return null;
        }
        // Clamp declared rows/columns to what physically fits in the image. If
        // someone uploads rows=4 but only 3 rows actually fit, we render 3 rows
        // instead of refusing the whole sprite — the previous strict check was
        // rejecting otherwise-fine sprites whose dims were a few pixels off.
        const maxRows = Math.max(1, Math.floor(img.naturalHeight / fh));
        const maxCols = Math.max(1, Math.floor(img.naturalWidth / fw));
        const rows = Math.min(Math.max(1, Number(rec.rows) || 1), maxRows);
        const columns = Math.min(
          Math.max(1, Number(rec.columns) || 1),
          maxCols,
        );
        return {
          imageUrl,
          rows,
          columns,
          frameWidth: fw,
          frameHeight: fh,
          width: fw * columns,
          height: fh * rows,
        };
      }

      async function getProfile(did) {
        const fetchedAt = profileFetchedAt.get(did) || 0;
        const fresh = Date.now() - fetchedAt < PROFILE_TTL_MS;
        if (profileCache.has(did) && fresh) return profileCache.get(did);
        if (profilePending.has(did)) return profilePending.get(did);

        const promise = (async () => {
          let handle = did;
          let pds = null;
          try {
            const r = await fetch(
              `https://slingshot.microcosm.blue/xrpc/blue.microcosm.identity.resolveMiniDoc?identifier=${encodeURIComponent(did)}`,
            );
            if (r.ok) {
              const d = await r.json();
              handle = d.handle || did;
              pds = d.pds || null;
            }
          } catch (e) {
            console.warn("miniDoc resolve failed", did, e);
          }

          let sprite = null;
          if (pds) {
            try {
              sprite = await fetchSprite(pds, did);
              if (sprite) console.log("[pets] rpg sprite found for", handle);
            } catch (e) {
              // 404s for users without a sprite are normal — only log other errors
              if (!String(e).includes("404"))
                console.warn("sprite fetch error", did, e);
            }
          }

          const profile = { handle, pds, sprite };
          profileCache.set(did, profile);
          profileFetchedAt.set(did, Date.now());
          return profile;
        })();

        profilePending.set(did, promise);
        promise.finally(() => profilePending.delete(did));
        return promise;
      }

      function spriteIdentity(s) {
        if (!s) return null;
        return `${s.imageUrl}|${s.rows}x${s.columns}|${s.frameWidth}x${s.frameHeight}`;
      }

      /* ---------- Bang-command scene effects ---------- */

      const fxState = {
        party: false,
        snow: false,
        rain: false,
        confetti: false,
        hearts: false,
        quake: false,
        barrelroll: false,
        fireworks: false,
      };

      function triggerFireworks() {
        if (fxState.fireworks) return;
        fxState.fireworks = true;
        const overlay = document.createElement("div");
        overlay.className = "fx-fireworks";
        document.body.appendChild(overlay);
        const colors = [
          "#ff5577",
          "#ffd93d",
          "#3affc8",
          "#ff8e3c",
          "#c84fff",
          "#3ad4ff",
          "#ffffff",
          "#ff3a8e",
        ];
        const burstCount = 7;
        for (let b = 0; b < burstCount; b++) {
          const cx = 12 + Math.random() * 76;
          const cy = 12 + Math.random() * 45;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const burstDelay = b * (0.4 + Math.random() * 0.7);
          const particleCount = 28 + Math.floor(Math.random() * 18);
          for (let i = 0; i < particleCount; i++) {
            const p = document.createElement("div");
            p.className = "firework-particle";
            p.style.left = `${cx}vw`;
            p.style.top = `${cy}vh`;
            p.style.background = color;
            const angle = Math.random() * Math.PI * 2;
            const distance = 60 + Math.random() * 140;
            p.style.setProperty(
              "--dx",
              `${(Math.cos(angle) * distance).toFixed(1)}px`,
            );
            p.style.setProperty(
              "--dy",
              `${(Math.sin(angle) * distance + 80).toFixed(1)}px`,
            );
            p.style.animationDelay = `${burstDelay.toFixed(2)}s`;
            p.style.animationDuration = `${(1.0 + Math.random() * 0.8).toFixed(2)}s`;
            overlay.appendChild(p);
          }
        }
        setTimeout(() => {
          overlay.remove();
          fxState.fireworks = false;
        }, 8500);
      }

      function triggerRain() {
        if (fxState.rain) return;
        fxState.rain = true;
        const overlay = document.createElement("div");
        overlay.className = "fx-rain";
        document.body.appendChild(overlay);
        for (let i = 0; i < 160; i++) {
          const drop = document.createElement("div");
          drop.className = "raindrop";
          drop.style.left = `${Math.random() * 100}%`;
          drop.style.height = `${10 + Math.random() * 18}px`;
          drop.style.animationDuration = `${0.6 + Math.random() * 0.8}s`;
          drop.style.animationDelay = `${Math.random() * 8}s`;
          drop.style.opacity = `${0.45 + Math.random() * 0.45}`;
          overlay.appendChild(drop);
        }
        setTimeout(() => {
          overlay.remove();
          fxState.rain = false;
        }, 12000);
      }

      function triggerParty() {
        if (fxState.party) return;
        fxState.party = true;
        const overlay = document.createElement("div");
        overlay.className = "fx-party";
        overlay.innerHTML = `
          <div class="party-light party-1"></div>
          <div class="party-light party-2"></div>
          <div class="party-light party-3"></div>
          <div class="party-light party-4"></div>`;
        document.body.appendChild(overlay);
        setTimeout(() => {
          overlay.remove();
          fxState.party = false;
        }, 7800);
      }

      function triggerSnow() {
        if (fxState.snow) return;
        fxState.snow = true;
        const overlay = document.createElement("div");
        overlay.className = "fx-snow";
        document.body.appendChild(overlay);
        for (let i = 0; i < 90; i++) {
          const flake = document.createElement("div");
          flake.className = "snowflake";
          flake.textContent = "❄";
          flake.style.left = `${Math.random() * 100}%`;
          flake.style.fontSize = `${8 + Math.random() * 22}px`;
          flake.style.animationDuration = `${4 + Math.random() * 7}s`;
          flake.style.animationDelay = `${Math.random() * 6}s`;
          flake.style.opacity = `${0.5 + Math.random() * 0.5}`;
          flake.style.setProperty("--sway", `${(Math.random() - 0.5) * 240}px`);
          overlay.appendChild(flake);
        }
        setTimeout(() => {
          overlay.remove();
          fxState.snow = false;
        }, 14500);
      }

      function triggerConfetti() {
        if (fxState.confetti) return;
        fxState.confetti = true;
        const colors = [
          "#ff5577",
          "#5577ff",
          "#ffd93d",
          "#9bbf2f",
          "#ff8e3c",
          "#c84fff",
          "#3ad4ff",
          "#ffffff",
          "#ff3a8e",
        ];
        const overlay = document.createElement("div");
        overlay.className = "fx-confetti";
        document.body.appendChild(overlay);
        for (let i = 0; i < 150; i++) {
          const c = document.createElement("div");
          c.className = "confetti-piece";
          c.style.left = `${Math.random() * 100}%`;
          c.style.background =
            colors[Math.floor(Math.random() * colors.length)];
          c.style.width = `${5 + Math.random() * 7}px`;
          c.style.height = `${9 + Math.random() * 13}px`;
          c.style.animationDuration = `${2.5 + Math.random() * 3.5}s`;
          c.style.animationDelay = `${Math.random() * 1.8}s`;
          c.style.setProperty("--sway", `${(Math.random() - 0.5) * 320}px`);
          c.style.setProperty(
            "--spin",
            `${(Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 1080)}deg`,
          );
          overlay.appendChild(c);
        }
        setTimeout(() => {
          overlay.remove();
          fxState.confetti = false;
        }, 8500);
      }

      function triggerHearts() {
        if (fxState.hearts) return;
        fxState.hearts = true;
        const overlay = document.createElement("div");
        overlay.className = "fx-hearts";
        document.body.appendChild(overlay);
        const hearts = ["❤", "💖", "💗", "💕", "💓", "🩷"];
        for (let i = 0; i < 60; i++) {
          const h = document.createElement("div");
          h.className = "heart-piece";
          h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
          h.style.left = `${Math.random() * 100}%`;
          h.style.fontSize = `${18 + Math.random() * 28}px`;
          h.style.animationDuration = `${3.5 + Math.random() * 3}s`;
          h.style.animationDelay = `${Math.random() * 2.5}s`;
          h.style.setProperty("--sway", `${(Math.random() - 0.5) * 200}px`);
          h.style.setProperty("--end-scale", `${0.8 + Math.random() * 0.6}`);
          overlay.appendChild(h);
        }
        setTimeout(() => {
          overlay.remove();
          fxState.hearts = false;
        }, 7500);
      }

      function triggerQuake() {
        if (fxState.quake) return;
        fxState.quake = true;
        const stageEl = document.getElementById("stage");
        stageEl.classList.add("fx-quake");
        setTimeout(() => {
          stageEl.classList.remove("fx-quake");
          fxState.quake = false;
        }, 600);
      }

      function triggerSpawnStars(x, y) {
        const overlay = document.createElement("div");
        overlay.className = "fx-spawn-stars";
        overlay.style.left = x + "px";
        overlay.style.top = y + "px";
        document.body.appendChild(overlay);
        const emojis = ["✨", "⭐", "🌟", "💫", "⚡", "💥", "🎉", "🔥"];
        for (let i = 0; i < 14; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = 30 + Math.random() * 80;
          const dx = Math.cos(angle) * dist;
          const dy = Math.sin(angle) * dist;
          const star = document.createElement("div");
          star.className = "star-particle";
          star.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          star.style.fontSize = `${14 + Math.random() * 22}px`;
          star.style.setProperty("--star-dx", dx + "px");
          star.style.setProperty("--star-dy", dy + "px");
          star.style.animationDuration = 0.5 + Math.random() * 0.6 + "s";
          star.style.left = "0px";
          star.style.top = "0px";
          overlay.appendChild(star);
        }
        setTimeout(() => overlay.remove(), 1200);
      }

      /* ---------- Badge checking (repos-based access control) ---------- */

      const badgeCheckCache = new Map(); // chatter DID → boolean
      let _reposBadgedDids = null; // Promise<Set<string>> | null
      let _reposBadgedDidsAt = 0;
      const BADGE_TTL_MS = 5 * 60 * 1000;

      async function resolveHandleToDid(handle) {
        try {
          const r = await fetch(
            `https://slingshot.microcosm.blue/xrpc/blue.microcosm.identity.resolveMiniDoc?identifier=${encodeURIComponent(handle)}`,
          );
          if (!r.ok) return null;
          const d = await r.json();
          return d.did || null;
        } catch {
          return null;
        }
      }

      async function getBadgedDidsForRepo(repoHandle) {
        const issuerDid = await resolveHandleToDid(repoHandle);
        if (!issuerDid) return new Set();
        const profile = await getProfile(issuerDid);
        const pds = profile?.pds;
        if (!pds) return new Set();
        const out = new Set();
        let cursor = "";
        for (let page = 0; page < 5; page++) {
          const url =
            `${pds.replace(/\/$/, "")}/xrpc/com.atproto.repo.listRecords` +
            `?repo=${encodeURIComponent(issuerDid)}` +
            `&collection=place.stream.badge.issuance&limit=100` +
            (cursor ? `&cursor=${encodeURIComponent(cursor)}` : "");
          let data;
          try {
            const r = await fetch(url);
            if (!r.ok) break;
            data = await r.json();
          } catch {
            break;
          }
          for (const rec of data.records || []) {
            if (
              rec.value &&
              typeof rec.value.did === "string" &&
              rec.value.did.startsWith("did:")
            ) {
              out.add(rec.value.did);
            }
          }
          cursor = data.cursor || "";
          if (!cursor) break;
        }
        return out;
      }

      async function getAllBadgedDids() {
        if (_reposBadgedDids && Date.now() - _reposBadgedDidsAt < BADGE_TTL_MS)
          return _reposBadgedDids;
        const promise = (async () => {
          const all = new Set();
          if (!REPOS || REPOS.length === 0) return all;
          for (const repo of REPOS) {
            const set = await getBadgedDidsForRepo(repo.trim());
            for (const did of set) all.add(did);
          }
          console.log(
            `[pets] badged DIDs across ${REPOS.length} repos: ${all.size}`,
          );
          return all;
        })();
        _reposBadgedDids = promise;
        _reposBadgedDidsAt = Date.now();
        return promise;
      }

      async function chatterIsBadged(did) {
        if (STREAMER_DID && did === STREAMER_DID) return true;
        if (!REPOS || REPOS.length === 0) return true;
        if (badgeCheckCache.has(did)) return badgeCheckCache.get(did);
        const badged = await getAllBadgedDids();
        const ok = badged.has(did);
        if (ok) badgeCheckCache.set(did, true);
        return ok;
      }

      /* ---------- Streamer-only and badge-gated actions ---------- */

      function triggerBarrelRoll() {
        if (fxState.barrelroll) return;
        fxState.barrelroll = true;
        document.body.classList.add("fx-barrelroll");
        setTimeout(() => {
          document.body.classList.remove("fx-barrelroll");
          fxState.barrelroll = false;
        }, 1450);
      }

      async function triggerRefresh(chatterDid) {
        const allowed = await chatterIsBadged(chatterDid);
        if (!allowed) {
          console.log(
            "[pets] !refresh denied — chatter lacks required badge",
            chatterDid,
          );
          return;
        }
        saveState();
        setTimeout(() => location.reload(), 200);
      }

      async function triggerClearAll(chatterDid) {
        const allowed = await chatterIsBadged(chatterDid);
        if (!allowed) {
          console.log(
            "[pets] !clearall denied — chatter lacks required badge",
            chatterDid,
          );
          return;
        }
        try {
          localStorage.clear();
        } catch {}
        _suppressSave = true;
        setTimeout(() => location.reload(), 200);
      }

      async function triggerHardReset(chatterDid) {
        if (!STREAMER_DID || chatterDid !== STREAMER_DID) {
          console.log(
            "[pets] !hardreset denied — only the streamer can run this",
            chatterDid,
          );
          return;
        }
        try {
          localStorage.clear();
        } catch {}
        try {
          sessionStorage.clear();
        } catch {}
        try {
          if (window.caches) {
            const keys = await caches.keys();
            await Promise.all(keys.map((k) => caches.delete(k)));
          }
        } catch {}
        try {
          if (indexedDB.databases) {
            const dbs = await indexedDB.databases();
            await Promise.all(
              dbs.map(
                (d) =>
                  d.name &&
                  new Promise((res) => {
                    const req = indexedDB.deleteDatabase(d.name);
                    req.onsuccess = req.onerror = req.onblocked = () => res();
                  }),
              ),
            );
          }
        } catch {}
        _suppressSave = true;
        setTimeout(() => {
          const u = new URL(location.href);
          u.searchParams.set("_t", String(Date.now()));
          location.replace(u.toString());
        }, 250);
      }

      /* ---------- Persistence (so refresh doesn't lose state) ---------- */

      const STATE_KEY = "streampets-state-v1";
      const STATE_TTL_MS = 4 * 60 * 60 * 1000; // 4 hours

      let _saveStateTimer = null;
      let _suppressSave = false;
      function saveStateDebounced() {
        clearTimeout(_saveStateTimer);
        _saveStateTimer = setTimeout(saveState, 1500);
      }

      function saveState() {
        if (_suppressSave) return;
        try {
          const arr = [];
          const nowPerf = performance.now();
          const wallNow = Date.now();
          for (const [did, pet] of pets) {
            arr.push({
              did,
              handle: pet.handle,
              x: pet.x,
              dir: pet.dir,
              depthScale: pet.depthScale,
              stretchX: pet.stretchX,
              stretchY: pet.stretchY,
              speedMul: pet.speedMul,
              bulgeLevel: pet.bulgeLevel,
              blurLevel: pet.blurLevel,
              typeOverride: petTypeOverrides.get(did) || null,
              lastMessageWall: wallNow - (nowPerf - pet.lastMessage),
              sprite: pet.mode === "sprite" ? pet.sprite : null,
            });
          }
          localStorage.setItem(
            STATE_KEY,
            JSON.stringify({ ts: wallNow, pets: arr }),
          );
        } catch (e) {
          /* localStorage may be disabled */
        }
      }

      function restoreState() {
        try {
          const raw = localStorage.getItem(STATE_KEY);
          if (!raw) return;
          const data = JSON.parse(raw);
          if (!data.pets || Date.now() - data.ts > STATE_TTL_MS) return;
          for (const saved of data.pets) {
            if (pets.has(saved.did)) continue;
            if (saved.typeOverride)
              petTypeOverrides.set(saved.did, saved.typeOverride);
            let spec;
            if (saved.typeOverride) {
              spec = pickPet(saved.did, saved.handle, null);
            } else if (saved.sprite) {
              spec = {
                mode: "sprite",
                sprite: saved.sprite,
                scale: 1.0,
                speed: 42,
              };
            } else {
              spec = pickPet(saved.did, saved.handle, null);
            }
            const pet = new Pet(
              spec,
              document.getElementById("stage"),
              saved.handle,
            );
            pet.x = typeof saved.x === "number" ? saved.x : pet.x;
            pet.dir = saved.dir === -1 ? -1 : 1;
            pet.depthScale = saved.depthScale || 1;
            pet.stretchX = saved.stretchX || 1;
            pet.stretchY = saved.stretchY || 1;
            pet.speedMul = saved.speedMul || 1;
            pet.el.style.setProperty("--anim-speed", pet.speedMul);
            if (saved.bulgeLevel) pet.setBulgeLevel(saved.bulgeLevel);
            if (saved.blurLevel) pet.setBlurLevel(saved.blurLevel);
            pet.applyTransform();
            pet.el.classList.remove("spawning");
            pets.set(saved.did, pet);
            // Seed profile cache so subsequent messages don't re-resolve
            profileCache.set(saved.did, {
              handle: saved.handle,
              pds: null,
              sprite: saved.sprite || null,
            });
          }
          console.log(
            `[pets] restored ${data.pets.length} pets from localStorage`,
          );
        } catch (e) {
          console.warn("restoreState failed", e);
        }
      }

      window.addEventListener("beforeunload", saveState);

      /* ---------- Pet manager ---------- */

      const stage = document.getElementById("stage");
      const statusEl = document.getElementById("status");
      const pets = new Map();
      const commandCooldownUntil = new Map(); // did → performance.now() until which commands are blocked
      const MAX_PETS = 30;

      function evictIfNeeded() {
        if (pets.size < MAX_PETS) return;
        let oldestDid = null;
        let oldestTime = Infinity;
        for (const [did, pet] of pets) {
          if (pet.lastMessage < oldestTime) {
            oldestTime = pet.lastMessage;
            oldestDid = did;
          }
        }
        if (oldestDid) {
          pets.get(oldestDid).dispose();
          pets.delete(oldestDid);
        }
      }

      async function handleChatMessage(authorDid, record) {
        const text = String(record.text || "")
          .trim()
          .toLowerCase();

        // `reload` / `refresh` — drop cached profile + pet so a freshly uploaded sprite
        // re-resolves on the next handler call.
        if (
          /^(reload|reloadsprite|reload\s*sprite|refresh|respawn)$/i.test(text)
        ) {
          profileCache.delete(authorDid);
          profileFetchedAt.delete(authorDid);
          badgeCheckCache.delete(authorDid);
          if (pets.has(authorDid)) {
            pets.get(authorDid).dispose();
            pets.delete(authorDid);
          }
          console.log("[pets] reloaded", authorDid);
        }

        // `reload @other-handle` — drop another chatter's profile + pet so their newly
        // uploaded sprite resolves on their next message. Mod-only (badge-gated) per
        // streamer feedback: actions that affect a different user need permission.
        const reloadOtherMatch = (record.text || "").match(
          /^\s*(?:reload|reloadsprite|reload\s*sprite|refresh|respawn)\s+(?:rpg\.actor\s+sprite\s+for\s+)?@?([A-Za-z0-9\.\-_]+)\s*$/i,
        );
        if (
          reloadOtherMatch &&
          reloadOtherMatch[1].toLowerCase() !== "sprite"
        ) {
          if (await chatterIsBadged(authorDid)) {
            const target = reloadOtherMatch[1].toLowerCase();
            for (const [did, p] of pets) {
              const h = (p.handle || "").toLowerCase();
              if (
                h === target ||
                h.split(".")[0] === target ||
                h.startsWith(target + ".")
              ) {
                profileCache.delete(did);
                profileFetchedAt.delete(did);
                p.dispose();
                pets.delete(did);
                console.log("[pets] reloaded target", did, "@" + h);
                break;
              }
            }
          } else {
            console.log(
              "[pets] reload @target denied — chatter has no badge",
              authorDid,
            );
          }
        }

        const profile = await getProfile(authorDid);

        let pet = pets.get(authorDid);
        // If the user's sprite identity changed (uploaded a new one, fixed a broken
        // one, removed it), drop the old pet and rebuild from the new spec.
        if (pet) {
          const oldId =
            pet.mode === "sprite" ? spriteIdentity(pet.sprite) : null;
          const newId = spriteIdentity(profile.sprite);
          if (oldId !== newId) {
            pet.dispose();
            pets.delete(authorDid);
            pet = null;
          }
        }
        if (!pet) {
          evictIfNeeded();
          const spec = pickPet(authorDid, profile.handle, profile.sprite);
          pet = new Pet(spec, stage, profile.handle);
          pets.set(authorDid, pet);
          triggerSpawnStars(
            Math.max(10, Math.min(window.innerWidth - 10, pet.x)),
            window.innerHeight - 90,
          );
        } else {
          pet.setHandle(profile.handle);
        }

        const CMD = {
          // Aliases: en + de + nl
          left: new Set(["left", "links", "<", "⬅️"]),
          right: new Set(["right", "rechts", ">", "➡️"]),
          up: new Set([
            "up",
            "hoch",
            "omhoog",
            "boven",
            "smaller",
            "kleiner",
            "^",
            "⬆️",
            "🔼",
          ]),
          down: new Set([
            "down",
            "runter",
            "omlaag",
            "beneden",
            "bigger",
            "größer",
            "grösser",
            "groter",
            "v",
            "⬇️",
            "🔽",
          ]),
          faster: new Set([
            "speedup",
            "fast",
            "faster",
            "run",
            "schneller",
            "sneller",
            "vlugger",
            "⏩",
          ]),
          slower: new Set([
            "slowdown",
            "slow",
            "slower",
            "langsamer",
            "langzamer",
            "langzaam",
            "traag",
            "⏪",
          ]),
          jump: new Set(["jump", "spring", "springen", "springt", "hop", "🦘"]),
          dance: new Set([
            "dance",
            "tanz",
            "tanze",
            "tanzen",
            "dans",
            "dansen",
            "💃",
            "🕺",
          ]),
          fart: new Set([
            "fart",
            "farts",
            "farted",
            "farting",
            "scheet",
            "scheten",
            "furz",
            "💨",
          ]),
          roll: new Set([
            "roll",
            "rolls",
            "barrelroll",
            "rolle",
            "rollen",
            "spin",
            "🌀",
          ]),
          teleport: new Set(["teleport", "tp", "warp", "beam", "✨"]),
          sleep: new Set([
            "sleep",
            "sleeping",
            "snooze",
            "rest",
            "schlafen",
            "schlaf",
            "slapen",
            "slaap",
            "😴",
            "💤",
          ]),
          smoke: new Set([
            "smoke",
            "smoking",
            "cig",
            "cigarette",
            "rauch",
            "rauchen",
            "rook",
            "roken",
            "🚬",
          ]),
          wider: new Set([
            "wide",
            "wider",
            "breit",
            "breiter",
            "breed",
            "breder",
            "wijd",
            "wijder",
            "stretch",
          ]),
          narrower: new Set([
            "narrow",
            "narrower",
            "schmal",
            "schmaler",
            "smal",
            "thin",
            "dun",
          ]),
          taller: new Set([
            "tall",
            "taller",
            "lang",
            "länger",
            "laenger",
            "hoog",
            "hoger",
          ]),
          shorter: new Set([
            "short",
            "shorter",
            "flach",
            "flacher",
            "kurz",
            "kürzer",
            "kort",
            "korter",
            "laag",
            "lager",
          ]),
          bulge: new Set([
            "bulge",
            "bulgy",
            "fisheye",
            "fisch",
            "bulle",
            "bolle",
            "bol",
          ]),
          unbulge: new Set(["unbulge", "debulge", "flatten", "unfish"]),
          blur: new Set(["blur", "blurry", "unsharp", "verschwommen", "wazig"]),
          unblur: new Set([
            "unblur",
            "sharp",
            "sharpen",
            "focus",
            "scharp",
            "scherp",
          ]),
        };

        // Temporarily replace the handle pill with the redacted chat message
        pet.showMessage(record.text || "");

        // Pet-type pick: must be the *whole* message (optionally with a leading !).
        // Casual mentions ("did you turn me into a duck") used to trigger this and
        // accidentally morph the speaker — that was a footgun, hence the strict match.
        // 'random' (also whole-message-only) clears the override.
        const TYPE_WORDS = {
          cat: "cat",
          kitty: "cat",
          kitten: "cat",
          katze: "cat",
          kat: "cat",
          dog: "dog",
          doggo: "dog",
          puppy: "dog",
          hund: "dog",
          hond: "dog",
          bunny: "bunny",
          rabbit: "bunny",
          hase: "bunny",
          konijn: "bunny",
          duck: "duck",
          ente: "duck",
          eend: "duck",
          hamster: "hamster",
          goose: "goose",
          gans: "goose",
        };
        const typeMatch = text.match(/^\s*!?([a-zäöü]+)\s*$/i);
        let chosenType = null;
        if (typeMatch) {
          const w = typeMatch[1].toLowerCase();
          if (TYPE_WORDS[w]) chosenType = TYPE_WORDS[w];
          else if (w === "random") {
            petTypeOverrides.delete(authorDid);
            chosenType = "__rebuild__";
          }
        }
        if (chosenType) {
          if (chosenType !== "__rebuild__")
            petTypeOverrides.set(authorDid, chosenType);
          const oldX = pet.x,
            oldDir = pet.dir;
          const oldSpeedMul = pet.speedMul,
            oldDepthScale = pet.depthScale;
          const oldStretchX = pet.stretchX,
            oldStretchY = pet.stretchY;
          const oldBulge = pet.bulgeLevel;
          const oldBlur = pet.blurLevel;
          pet.dispose();
          pets.delete(authorDid);
          const profileNow = profileCache.get(authorDid) || profile;
          const spec = pickPet(authorDid, profileNow.handle, profileNow.sprite);
          pet = new Pet(spec, stage, profileNow.handle);
          pet.x = oldX;
          pet.dir = oldDir;
          pet.speedMul = oldSpeedMul;
          pet.depthScale = oldDepthScale;
          pet.stretchX = oldStretchX;
          pet.stretchY = oldStretchY;
          pet.el.style.setProperty("--anim-speed", pet.speedMul);
          if (oldBulge) pet.setBulgeLevel(oldBulge);
          if (oldBlur) pet.setBlurLevel(oldBlur);
          pet.applyTransform();
          pets.set(authorDid, pet);
          triggerSpawnStars(
            Math.max(10, Math.min(window.innerWidth - 10, pet.x)),
            window.innerHeight - 90,
          );
          saveStateDebounced();
        }

        // Per-chatter command rate limit — keeps one person from monopolizing the scene.
        // Plain chat (no command) still pulses the heart, no cooldown.
        // Recovery commands (!reset, !refresh) bypass the limit so users can always
        // dig themselves out of an effects pileup.
        const RECOVERY_CMD_RE =
          /(!reset|!refresh|!clearall|!factoryreset|!hardreset)\b/i;
        if (RECOVERY_CMD_RE.test(text)) {
          if (/!reset\b/i.test(text)) pet.resetAll();
          if (/!refresh\b/i.test(text)) triggerRefresh(authorDid);
          if (/!(clearall|factoryreset)\b/i.test(text))
            triggerClearAll(authorDid);
          if (/!hardreset\b/i.test(text)) triggerHardReset(authorDid);
          return;
        }
        const ALL_COMMAND_RE =
          /(!party|!snow|!rain|!confetti|!hearts?|!(?:quake|earthquake|shake)|!fireworks?|!shrink(?:ray)?|!grow(?:ray)?|!pet\b|barrel\s*roll)\b/i;
        const looksLikeCommand =
          ALL_COMMAND_RE.test(text) ||
          /\b(left|right|up|down|fast|faster|slow|slower|jump|dance|fart|wide|narrow|tall|short|stretch|hop|bulge|bulgy|fisheye|unbulge|flatten|debulge|unfish|blur|unblur|roll|spin|teleport|warp|beam|sleep|sleeping|snooze|smoke|smoking|cig|cigarette)/i.test(
            text,
          ) ||
          /\b(links|rechts|hoch|runter|größer|grösser|kleiner|schneller|langsamer|spring|tanz|scheet|scheten|furz|breit|schmal|kurz|lang|rolle|rollen|schlafen|schlaf|rauch|rauchen)/i.test(
            text,
          ) ||
          /\b(omhoog|omlaag|sneller|langzamer|dans|dansen|wijd|smal|hoger|laag|lager|breed|slapen|slaap|rook|roken)/i.test(
            text,
          ) ||
          /(⬅️|➡️|⬆️|⬇️|🔼|🔽|⏩|⏪|🦘|💃|🕺|💨|🌀|✨|😴|💤|🚬)/.test(text);
        const COMMAND_COOLDOWN_MS = 10000; // 10 seconds
        const now = performance.now();
        if (looksLikeCommand) {
          const until = commandCooldownUntil.get(authorDid) || 0;
          if (now < until) {
            console.log(
              "[pets] rate limited",
              authorDid,
              `(${Math.round(until - now)}ms remaining)`,
            );
            // Visual indicator: red glow for 1 second
            pet.el.classList.add("rate-limited");
            setTimeout(() => pet.el.classList.remove("rate-limited"), 1000);
            return;
          }
          commandCooldownUntil.set(authorDid, now + COMMAND_COOLDOWN_MS);
        }

        // !pet @target — friendly pat on the head, no badge required.
        const petMatch = text.match(/!pet\s+@?([\w\.\-]+)/i);
        if (petMatch) {
          const target = petMatch[1].toLowerCase();
          for (const p of pets.values()) {
            const h = (p.handle || "").toLowerCase();
            if (
              h === target ||
              h.split(".")[0] === target ||
              h.startsWith(target + ".")
            ) {
              p.petPat();
              break;
            }
          }
        }

        // !shrink @target / !grow @target — affect another chatter's pet by handle.
        // Mod-only (badge-gated) per streamer: cross-user commands need mod perms.
        const shrinkRayMatch = text.match(
          /!(shrink|shrinkray|grow|growray)\s+@?([\w\.\-]+)/i,
        );
        if (shrinkRayMatch) {
          if (await chatterIsBadged(authorDid)) {
            const isShrink = /^shrink/i.test(shrinkRayMatch[1]);
            const target = shrinkRayMatch[2].toLowerCase();
            let foundPet = null;
            for (const p of pets.values()) {
              const h = (p.handle || "").toLowerCase();
              if (
                h === target ||
                h.split(".")[0] === target ||
                h.startsWith(target + ".")
              ) {
                foundPet = p;
                break;
              }
            }
            if (foundPet) {
              foundPet.setDepthScale(
                foundPet.depthScale * (isShrink ? 1 / 1.5 : 1.5),
              );
              foundPet.pulseHeart && foundPet.pulseHeart();
            } else {
              console.log("[pets] !shrink/!grow target not on stage:", target);
            }
          } else {
            console.log(
              "[pets] !shrink/!grow denied — chatter has no badge",
              authorDid,
            );
          }
        }

        // === Mid-tier: bang commands (badge-gated if repos configured) ===
        const bangCmds = [];
        if (/!party\b/i.test(text)) bangCmds.push(["party", triggerParty]);
        if (/!snow\b/i.test(text)) bangCmds.push(["snow", triggerSnow]);
        if (/!rain\b/i.test(text)) bangCmds.push(["rain", triggerRain]);
        if (/!confetti\b/i.test(text))
          bangCmds.push(["confetti", triggerConfetti]);
        if (/!hearts?\b/i.test(text)) bangCmds.push(["hearts", triggerHearts]);
        if (/!(quake|earthquake|shake)\b/i.test(text))
          bangCmds.push(["quake", triggerQuake]);
        if (/\bbarrel\s*roll\b/i.test(text))
          bangCmds.push(["barrelroll", triggerBarrelRoll]);
        if (/!fireworks?\b/i.test(text))
          bangCmds.push(["fireworks", triggerFireworks]);

        if (bangCmds.length > 0) {
          const allowed = await chatterIsBadged(authorDid);
          if (!allowed) {
            console.log(
              "[pets] bang command denied — chatter lacks required badge",
              authorDid,
            );
          } else {
            for (const [, fn] of bangCmds) fn();
          }
        }

        // Tokenize: split on whitespace, strip ASCII edge-punctuation
        const tokens = text
          .split(/\s+/)
          .map((t) =>
            t.replace(/^[!?.,;:'"()\[\]{}*]+|[!?.,;:'"()\[\]{}*]+$/g, ""),
          );
        const counts = {};
        for (let i = 0; i < tokens.length; i++) {
          const rawTok = tokens[i];
          if (!rawTok) continue;
          const m = rawTok.match(/^(.+?)x(\d+)$/);
          const word = m ? m[1] : rawTok;
          let repeat = m
            ? Math.max(1, Math.min(LIMITS.xN, parseInt(m[2], 10)))
            : 1;
          // Look-ahead: if this token isn't already a multiplier and the next token is a pure number, use it.
          if (!m && i + 1 < tokens.length && /^x?\d+$/i.test(tokens[i + 1])) {
            const n = parseInt(tokens[i + 1].replace(/^x/i, ""), 10);
            if (n > 0) {
              repeat = Math.min(LIMITS.xN, n);
              i++; // consume the number token
            }
          }
          let cmd = null;
          for (const [k, set] of Object.entries(CMD)) {
            if (set.has(word)) {
              cmd = k;
              break;
            }
          }
          if (!cmd) continue;
          counts[cmd] = (counts[cmd] || 0) + repeat;
        }
        // Animation commands stay reasonable to avoid browser pain; state commands flow through to setters which clamp themselves.
        if (counts.jump) counts.jump = Math.min(LIMITS.jumpQueue, counts.jump);
        if (counts.dance) counts.dance = Math.min(1, counts.dance);
        if (counts.fart) counts.fart = Math.min(LIMITS.fartQueue, counts.fart);

        // Apply
        if (counts.left) pet.setDirection(-1);
        if (counts.right) pet.setDirection(1);
        if (counts.up)
          pet.setDepthScale(pet.depthScale / Math.pow(1.25, counts.up));
        if (counts.down)
          pet.setDepthScale(pet.depthScale * Math.pow(1.25, counts.down));
        if (counts.faster)
          pet.setSpeedMul(pet.speedMul * Math.pow(1.5, counts.faster));
        if (counts.slower)
          pet.setSpeedMul(pet.speedMul / Math.pow(1.5, counts.slower));
        if (counts.jump) {
          for (let i = 0; i < counts.jump; i++)
            setTimeout(() => pet.jump(), i * 850);
        }
        if (counts.dance) pet.dance();
        if (counts.fart) {
          for (let i = 0; i < counts.fart; i++)
            setTimeout(() => pet.fart(), i * 600);
        }
        if (counts.roll) {
          for (let i = 0; i < counts.roll; i++)
            setTimeout(() => pet.roll(), i * 800);
        }
        if (counts.teleport) pet.teleport();
        if (counts.sleep) pet.sleep();
        if (counts.smoke) pet.smoke();
        if (counts.wider)
          pet.setStretchX(pet.stretchX * Math.pow(1.25, counts.wider));
        if (counts.narrower)
          pet.setStretchX(pet.stretchX / Math.pow(1.25, counts.narrower));
        if (counts.taller)
          pet.setStretchY(pet.stretchY * Math.pow(1.25, counts.taller));
        if (counts.shorter)
          pet.setStretchY(pet.stretchY / Math.pow(1.25, counts.shorter));
        if (counts.bulge) pet.setBulgeLevel(pet.bulgeLevel + counts.bulge);
        if (counts.unbulge) pet.setBulgeLevel(0);
        if (counts.blur) pet.setBlurLevel(pet.blurLevel + counts.blur);
        if (counts.unblur) pet.setBlurLevel(0);

        // Catch-all: substring "fart" inside a sentence still fires once if no fart token matched.
        if (!counts.fart && (/\bfart/i.test(text) || text.includes("💨"))) {
          pet.fart();
          counts.fart = 1;
        }

        // (No more pulseHeart on plain chat — the message bubble now carries the
        // "I said something" signal and the heart was visual noise.)
      }

      /* ---------- Jetstream ---------- */

      const params = new URLSearchParams(location.search);
      const STREAMER_DID = params.get("streamer");
      const REPOS = params.get("repos")
        ? params
            .get("repos")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : null;
      const SHOW_STATUS = params.get("status") === "1";
      const SAFE_LIMITS =
        params.get("limits") === "safe" || params.get("safe") === "1";
      const CONSERVATION = params.get("conservation") === "1";

      const LIMITS = SAFE_LIMITS
        ? {
            speedMul: [0.2, 5],
            depthScale: [0.3, 2.2],
            stretchX: [0.4, 3.5],
            stretchY: [0.4, 3.5],
            bulgeLevel: [0, 8],
            blurLevel: [0, 6],
            xN: 10,
            jumpQueue: 5,
            fartQueue: 5,
          }
        : {
            speedMul: [0.02, 50],
            depthScale: [0.005, 80],
            stretchX: [0.005, 80],
            stretchY: [0.005, 80],
            bulgeLevel: [0, 30],
            blurLevel: [0, 20],
            xN: 100,
            jumpQueue: 50,
            fartQueue: 50,
          };

      if (SHOW_STATUS) statusEl.classList.remove("hidden");

      function setStatus(s) {
        if (SHOW_STATUS) statusEl.textContent = s;
        console.log("[pets]", s);
      }

      const JETSTREAM_HOSTS = [
        "jetstream2.us-east.bsky.network",
        "jetstream1.us-east.bsky.network",
        "jetstream2.us-west.bsky.network",
        "jetstream1.us-west.bsky.network",
      ];
      let hostIdx = 0;
      let backoff = 1000;

      function connectJetstream() {
        const host = JETSTREAM_HOSTS[hostIdx % JETSTREAM_HOSTS.length];
        const url = `wss://${host}/subscribe?wantedCollections=place.stream.chat.message`;
        setStatus(`connecting → ${host}`);
        let ws;
        try {
          ws = new WebSocket(url);
        } catch (e) {
          console.warn("ws construct error", e);
          scheduleReconnect();
          return;
        }

        ws.onopen = () => {
          setStatus(
            `live · ${host}${STREAMER_DID ? " · filter on" : " · all streams"}${REPOS ? " · repos=" + REPOS.join(",") : ""}`,
          );
          backoff = 1000;
        };

        ws.onmessage = (ev) => {
          let msg;
          try {
            msg = JSON.parse(ev.data);
          } catch {
            return;
          }
          if (msg.kind !== "commit") return;
          const c = msg.commit;
          if (!c || c.operation !== "create") return;
          if (c.collection !== "place.stream.chat.message") return;
          const record = c.record;
          if (!record || typeof record !== "object") return;
          if (STREAMER_DID && record.streamer !== STREAMER_DID) return;
          handleChatMessage(msg.did, record);
        };

        ws.onerror = (e) => console.warn("jetstream error", e);

        ws.onclose = () => {
          setStatus("disconnected");
          hostIdx++;
          scheduleReconnect();
        };
      }

      function scheduleReconnect() {
        setTimeout(connectJetstream, backoff);
        backoff = Math.min(backoff * 1.5, 15000);
      }

      // Build version: bumped each commit so chat can see new code arrived.
      const BUILD_VERSION = "v0.9.0";
      const BUILD_DATE = "2025-07-14";
      const versionEl = document.getElementById("version");
      if (STREAMER_DID) {
        versionEl.textContent = `pets ${BUILD_VERSION} · ${BUILD_DATE}`;
      } else {
        // Visible warning so the streamer notices the filter is off — without a
        // ?streamer=did:... URL param, every chat from every stream lands on stage.
        versionEl.textContent = `pets ${BUILD_VERSION} · NO STREAMER FILTER — add ?streamer=did:... to the URL`;
        versionEl.style.color = "rgba(255, 180, 80, 0.95)";
        versionEl.style.background = "rgba(0, 0, 0, 0.55)";
        versionEl.style.padding = "2px 6px";
        versionEl.style.borderRadius = "4px";
      }

      // "Reloaded" toast — pops up briefly when the page (re)loads.
      {
        const toast = document.createElement("div");
        toast.id = "reload-toast";
        toast.textContent = `pets reloaded · ${BUILD_VERSION}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
      }

      // Hard-reset button — clears everything and reloads
      document.getElementById('reset-btn').addEventListener('click', async () => {
        if (!confirm('Hard reset? This clears all pet state, sprites, caches, and reloads.')) return;
        try { localStorage.clear(); } catch {}
        try { sessionStorage.clear(); } catch {}
        try {
          if (window.caches) {
            const keys = await caches.keys();
            await Promise.all(keys.map((k) => caches.delete(k)));
          }
        } catch {}
        try {
          if (indexedDB.databases) {
            const dbs = await indexedDB.databases();
            await Promise.all(dbs.map((d) => d.name && new Promise((res) => {
              const req = indexedDB.deleteDatabase(d.name);
              req.onsuccess = req.onerror = req.onblocked = () => res();
            })));
          }
        } catch {}
        _suppressSave = true;
        location.reload();
      });

      restoreState();
      connectJetstream();

      /* ---------- Main loop ---------- */

      // Three-stage idle fade:
      //   0 – 10 min: full opacity
      //  10 – 20 min: opacity 0.5
      //  20 – 30 min: opacity 0.25
      //  > 30 min: removed
      // Messages immediately restore full opacity.
      const IDLE_FADE_1_MS = 10 * 60 * 1000; // 50% opacity at 10 min
      const IDLE_FADE_2_MS = 20 * 60 * 1000; // 25% opacity at 20 min
      const IDLE_DEATH_MS = 30 * 60 * 1000; // removed at 30 min

      let last = performance.now();
      function frame(now) {
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const dead = [];
        for (const [did, p] of pets) {
          p.tick(dt);
          const idle = now - p.lastMessage;
          if (idle >= IDLE_DEATH_MS) {
            dead.push(did);
            continue;
          }
          if (idle >= IDLE_FADE_2_MS) {
            p.el.style.opacity = "0.25";
          } else if (idle >= IDLE_FADE_1_MS) {
            p.el.style.opacity = "0.5";
          } else {
            p.el.style.opacity = "1";
          }
        }
        for (const did of dead) {
          pets.get(did).dispose();
          pets.delete(did);
        }
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);

      window.addEventListener("resize", () => {
        for (const p of pets.values()) {
          p.x = Math.min(p.x, window.innerWidth - 110);
        }
      });
