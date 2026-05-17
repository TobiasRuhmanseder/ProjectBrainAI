# Login UI — Design Spec

## Ziel

Eine Login-Seite als Inertia/React-Page, die den bestehenden Prototyp (`docs/claude_design/ProjectBrain Calm.html`) als visuelle Referenz nutzt — ohne SSO-Buttons.

## Architektur

- **Page:** `app/javascript/pages/auth/Login.tsx`
- **Styles:** `app/javascript/pages/auth/Login.module.scss`
- **Controller:** `Auth::SessionsController#new` rendert `inertia: 'auth/Login'`

## UI-Struktur

Zwei Spalten (desktop), auf Mobile nur die rechte Seite:

- **Links (dark panel):** Brand-Mark, Pitch-Text ("Your team's second brain…"), Footer-Pill
- **Rechts (form panel):** Titel "Welcome back", Email-Feld, Passwort-Feld, "Forgot password?"-Link, Submit-Button

## Formular

- Inertia `useForm` Hook für State, Fehler und Loading
- Submit: `POST /auth/session` via `router.post` / `form.post`
- Fehler vom Controller werden als Inertia Flash/Errors zurückgegeben

## Styles

Basieren auf den CSS-Variablen aus dem Prototyp:
- `--bg`, `--surface`, `--ink`, `--accent`, `--line`, `--radius`
- Fonts: Geist / Inter (bereits im Prototyp definiert)
- SCSS Module (kein globales CSS, kein Tailwind)

## Was wir weglassen

- SSO-Buttons (Google, SSO) — bewusst nicht gebaut
- Dark Mode Toggle — kommt später
- "No account yet?" Link — Platzhalter, Sign-Up folgt im nächsten Schritt

## Abgrenzung

Diese Spec deckt nur den Login ab. Sign-Up und Passwort-Reset sind separate Schritte.
