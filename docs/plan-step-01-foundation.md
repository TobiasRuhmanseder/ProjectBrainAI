# ProjectBrain AI - Step 01 Foundation (UI first, then logic)

Dieses Dokument ist unser gemeinsamer Arbeitsplan.
Wir arbeiten bewusst langsam, feature-basiert und lernorientiert.

## Working mode (immer gleich)

Pro Feature folgen wir immer diesem Ablauf:

1. UI bauen (statisch, klickbar, ohne echte Business-Logik)
2. Basis-Logik anbinden (Daten laden/speichern)
3. Rechte/Validierung ergänzen
4. Kurz testen
5. Lern-Check: kurz verstehen, was passiert

## Scope fuer Step 01

Ziel: Technisches Fundament + erster echter End-to-End-Flow.

- Stack: React + Ruby on Rails + Inertia.js
- KnowledgeItem bleibt minimal:
  - `title`
  - `content`
  - `project_id`
  - `created_by_user_id`
  - `created_at`

Kein Type-System fuer KnowledgeItems in Step 01.
Spaeter erweitern wir das Feld `type` (note, decision, risk, ...), sobald es sinnvoll ist.

---

## Checklist Step 01

### A) Foundation Setup

- [x] Rails App initialisieren
- [x] PostgreSQL via Docker Compose einrichten
- [x] Inertia-Grundsetup initialisieren
- [x] React im Rails-Frontend sauber einbinden
- [x] Basis-Ordnerstruktur festlegen (Pages, Components, Shared)
- [x] Dev-Start pruefen (`bin/dev` oder gleichwertig)

### B) UI-Only Feature 01: Company + Project Ansicht (ohne echte Logik)

- [x] Layout-Shell bauen (Topbar + Company Switcher Platzhalter)
- [x] Seite `Dashboard/Index` als React-Inertia-Page erstellen (Startseite nach Login)
- [x] Statische Projektliste rendern (Fake-Daten via Rails Props)
- [x] Button "Open Project" als UI-Flow vorbereiten

### C) UI-Only Feature 02: Knowledge im Projekt (minimal)

- [ ] Seite `Projects/Show` mit Tabs/Abschnitten anlegen
- [ ] Bereich "Knowledge" mit Liste (statische Items)
- [ ] Einfaches Formular: `title`, `content` (noch ohne Save)
- [ ] Leerer Zustand ("Noch keine Eintraege")

### D) Erste echte Logik fuer Knowledge (kleinster Backend-Slice)

- [ ] Migration `knowledge_items` erstellen (nur Minimalfelder)
- [ ] Model + einfache Validierungen (`title`, `content`, `project_id`, `created_by_user_id`)
- [ ] Controller-Endpoints:
  - [ ] `GET /projects/:id` liefert KnowledgeItems
  - [ ] `POST /projects/:id/knowledge_items` erstellt Eintrag
- [ ] Inertia-Props an React-Page anbinden (statt Fake-Daten)
- [ ] Formular submit -> speichern -> Liste aktualisieren

### E) Sicherheit + Datenkonsistenz

- [ ] Jede Query auf `project_id` begrenzen
- [ ] `created_by_user_id` serverseitig aus aktuellem User setzen
- [ ] Ownership und Scoping von Beginn an sauber halten (spaetere Rollenlogik baut darauf auf)

### F) Done-Kriterien fuer Step 01

- [ ] App startet lokal stabil
- [ ] Projektseite rendert ueber Inertia + React
- [ ] Knowledge-Liste wird aus DB geladen
- [ ] Neuer Knowledge-Eintrag kann erstellt werden
- [ ] Du kannst den kompletten Flow erklaeren

---

## Notes / Decisions

- UI first bleibt Pflicht pro Feature.
- Keine unnötige Komplexität vor funktionierendem Grundflow.
- Wenn etwas haengt: Scope reduzieren, aber Feature abschliessen.
- Flex-Regel: Zwischen allen Bloecken ist Brainstorming + Richtungswechsel erlaubt.
