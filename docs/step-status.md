# Step Status (Single Source of Truth)

Diese Datei wird nach festen Triggern aktualisiert, damit wir jederzeit nahtlos weiterarbeiten koennen.

## Naechste Session — **zuerst**

1. **GitHub-Repository** anlegen (leer oder mit README).
2. Lokalen Stand verbinden und **hochladen**: `git init` falls noch nicht, `.gitignore` prüfen, `git remote add origin …`, erster Commit, `git push -u origin main` (oder `master`).
3. Danach wie geplant: **Auth + Tenancy** ([plan-auth-tenancy.md](plan-auth-tenancy.md)).

## Current

- Current Step: `Step 01 - Foundation`
- Current Task: `Auth + Tenancy laut docs/plan-auth-tenancy.md (Registrierung, Login, Company, Membership role owner)`
- State: `in_progress`

## Done Today

- [x] Status-System eingerichtet

## Next 2 Actions

- [x] User fuehrt `rails new . --javascript=esbuild --skip-git` aus
- [x] `bin/setup` wurde ausgefuehrt
- [x] `bin/dev` gestartet und App im Browser geprueft
- [x] Datenbankentscheidung finalisieren
- [x] `compose.yaml` fuer PostgreSQL angelegt
- [x] Docker Postgres via Compose gestartet
- [x] Rails Gemfile von sqlite3 auf pg umgestellt und `bundle install` ausgefuehrt
- [x] `config/database.yml` auf Docker-PostgreSQL konfiguriert
- [x] PostgreSQL DB erstellt/migriert und Rails gestartet
- [x] Inertia.js + React installiert
- [x] Styling: Sass/SCSS + CSS Modules (kein Tailwind mehr); Vite ohne Tailwind-Plugin
- [x] Inertia-Beispielseite im Browser verifiziert
- [x] Ordnerstruktur fuer eigene ProjectBrain Pages vorbereitet
- [x] Inertia/Vite Demo-JavaScript entfernt
- [x] Erste eigene Inertia Page erstellt (spaeter semantisch zum Dashboard verfeinert)
- [x] Root-Route auf Dashboard gesetzt (`dashboard#index`)
- [x] Alte Inertia-Beispielroute entfernt
- [x] Browser-Check: `/` zeigt Dashboard; `/projects` redirectet auf `/`
- [x] Props vom `DashboardController#index` an `dashboard/index.tsx` durchreichen und im UI anzeigen
- [x] Dashboard UI: weisser Hintergrund + Grid Cards
- [x] Globale Theme-Tokens: `app/javascript/styles/_theme.scss` (`:root` / `--pb-*` fuer spaeteres Tenant-Branding)
- [x] `ProjectCard`: Status-Badge oben rechts neben Titel; Chat-Input unten (UI only; RAG/Navigation spaeter)

## Blockers / Questions

- Keine, Lernmodus aktiv (User tippt selbst)

## Session Notes

- Ziel: Schrittweise lernen, UI zuerst, danach Logik
- KnowledgeItem bleibt minimal und wird spaeter erweitert
- Hinweis fuer spaeter: Karten-Chat soll Projekt oeffnen und in Chat-Bereich springen (RAG) — noch nicht angebunden
- **Tenancy / Owner** (Detail: [plan-auth-tenancy.md](plan-auth-tenancy.md)):
  - Rolle **`owner`** auf `Membership` (neben admin / projectmanager / user); gleicher User kann woanders z. B. `user` sein.
  - Pro Company **genau ein** Owner; Owner **nicht** per normalem Team-Remove löschbar.
  - Admin-Panel / Company-Settings: Abfragen **immer pro Company**; typisch Zugriff für **`owner` oder `admin`**.
  - Auth: Rails 8 **authentication**-Generator (kein Devise in V1).

## Update Log

- 2026-05-02: Datei erstellt, Tracking gestartet
- 2026-05-02: Step 01 aktiv gestartet, Status auf in_progress gesetzt
- 2026-05-02: Auf User-Wunsch auf reinen Lernmodus umgestellt (keine Commands durch Assistant)
- 2026-05-02: Reihenfolge angepasst - zuerst Versionsupdate, dann Setup
- 2026-05-02: Ruby/Rails aktualisiert (Ruby 3.4.6, Rails 8.1.3)
- 2026-05-02: rails new und bin/setup abgeschlossen, naechster Check: bin/dev + DB-Typ bestaetigen
- 2026-05-02: bin/dev erfolgreich, Rails-Startseite im Browser bestaetigt
- 2026-05-02: DB-Entscheidung getroffen - PostgreSQL via Docker
- 2026-05-02: compose.yaml fuer PostgreSQL angelegt
- 2026-05-02: PostgreSQL via Docker Compose gestartet
- 2026-05-02: pg Gem installiert, bundle install erfolgreich (psych warning unkritisch)
- 2026-05-02: config/database.yml auf PostgreSQL umgestellt
- 2026-05-02: PostgreSQL DB migriert, Rails App laeuft erfolgreich
- 2026-05-02: Inertia + React Setup installiert (zunaechst mit Tailwind; siehe unten Migration)
- 2026-05-02: Inertia/React Beispielseite im Browser erfolgreich verifiziert
- 2026-05-02: Basis-Ordnerstruktur fuer Pages, Components, Layouts und Lib vorbereitet
- 2026-05-02: Default Inertia/Vite Demo-Dateien aus app/javascript entfernt
- 2026-05-02: Erste eigene ProjectBrain Page erstellt (Start: `projects/index`, dann Dashboard)
- 2026-05-02: Root auf Dashboard gesetzt (`dashboard#index`), `/projects` -> `/`
- 2026-05-02: Naechster Lernfokus: Inertia Props vom Controller in die React Page
- 2026-05-02: Dashboard auf helles UI umgestellt (Card Grid)
- 2026-05-02: Topbar angepasst (Version-Text entfernt, Profil-Icon neben Company Name)
- 2026-05-02: Icon-Library hinzugefuegt: `@heroicons/react` (Profil-Icon in Topbar)
- 2026-05-02: Dashboard Cards vergroessert (eher quadratisch) + Hover-Lift; Open-Button entfernt
- 2026-05-02: Dashboard Cards leicht verkleinert/feiner (5/4 Ratio, tighter spacing, line-clamp title)
- 2026-05-02: Project Card in `app/javascript/components/ProjectCard.tsx` ausgelagert
- 2026-05-02: Typo-Pfad gewechselt: zentral `pb-*` CSS-Klassen in `application.css`, dann zurueck auf direkte Klassen, dann kompletter Wechsel zu SCSS
- 2026-05-02: **Tailwind entfernt**; `sass` + `*.module.scss`; `vite.config.mts` ohne Tailwind-Plugin; `application.scss` + `styles/_theme.scss`
- 2026-05-02: Mock-`description` in `DashboardController` Props; Karten zeigen Beschreibung + Status-Chips
- 2026-05-02: Status-Badge in Karte oben rechts; Chat-Eingabefeld unten (Placeholder „What do you know about this project?“) — **noch keine** Route/RAG/Navigation
- 2026-05-02: Brainstorming Auth/Tenancy dokumentiert in `docs/plan-auth-tenancy.md` (Owner-Rolle, Schutzregeln, Admin-Panel-Abfrage); `step-status` + Step-02 verknuepft
