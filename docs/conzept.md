# ProjectBrain AI

## Vision

ProjectBrain AI ist ein geiles Projektmanagement-Tool mit integrierter KI-Unterstützung.

Ziel ist es, Projekte, Wissen, Aufgaben, Entscheidungen und Ideen zentral zu sammeln, zu strukturieren und später durch KI nutzbar zu machen.

Das Tool soll nicht nur klassische Projektverwaltung bieten, sondern Projektwissen intelligent verfügbar machen.

---

## Grundidee

ProjectBrain AI bildet eine realistische Unternehmensstruktur ab:

- Companies
- User
- Rollen je Company
- Projekte
- Projektmitglieder
- Projektwissen
- Aufgaben / Kanban
- später AI / RAG / Agenten

Ein User kann mehreren Companies angehören und dort unterschiedliche Rollen haben.

Beispiel:

User Tobias:
- Company A: Owner
- Company B: Projectmanager
- Company C: User

---

## Hauptfeatures V1

### 1. Company-System

Jede Company hat:

- Name
- Slug
- Logo
- Branding-Farbe
- eigene Projekte
- eigene User/Rollen
- eigene Wissensdatenbank

Ein Demo-User soll später mindestens zwei Companies besitzen, damit man das Switching und die Daten-Trennung direkt sehen kann.

---

### 2. Rollenverwaltung

Es gibt aktuell vier relevante Rollen auf Company-Ebene:

#### Owner

Hat die Company erstellt und ist die oberste Instanz innerhalb dieser Company.

- genau ein Owner pro Company
- kann nicht ueber den normalen Team-Flow entfernt werden
- ist fachlich ueber `admin` eingeordnet
- spaeter relevant fuer sensible Aktionen wie Ownership-Transfer, Billing oder Company-Loeschung

#### Admin

Darf alles.

- sieht alle Projekte innerhalb der Company
- kann User verwalten
- kann Projekte anlegen, bearbeiten und löschen
- kann Rollen vergeben
- kann Company-Einstellungen ändern

#### Projectmanager

Darf Projekte innerhalb der jeweiligen Company verwalten.

- kann Projekte anlegen
- kann eigene/zugewiesene Projekte bearbeiten
- kann User Projekten zuweisen
- sieht Projekte, für die er zuständig ist

#### User

Darf nur innerhalb zugewiesener Projekte arbeiten.

- sieht nur zugewiesene Projekte
- kann im Projekt Inhalte erstellen
- kann Aufgaben bearbeiten
- kann Projektwissen ergänzen
- keine Company-Verwaltung

---

### 3. Projektverwaltung

Eine Company kann mehrere Projekte haben.

Ein Projekt enthält:

- Name
- Beschreibung
- Status
- zugewiesene User
- Projektwissen
- Aufgaben
- Kanbanboard
- später AI-Chat / RAG-Kontext

---

### 4. Projekt-Wissensdatenbank

Jedes Projekt bekommt eine eigene Wissensdatenbank.

Dort können später gespeichert werden:

- Notizen
- Entscheidungen
- Risiken
- Ideen
- Meeting-Zusammenfassungen
- Dokumente
- AI-generierte Zusammenfassungen
- Inbox Messages

Diese Inhalte sollen später für RAG genutzt werden.

Wichtig:

Projektwissen muss sauber nach Company und Projekt getrennt sein.

---

### 5. Kanbanboard

Für V1 wird ein kleines Kanbanboard eingeplant.

Es besteht aus 4 Steps:

1. Backlog
2. To Do
3. In Progress
4. Done

Aufgaben gehören immer zu einem Projekt.

Eine Aufgabe enthält z. B.:

- Titel
- Beschreibung
- Status / Kanban-Spalte
- Priorität
- zugewiesener User
- Ersteller
- Fälligkeitsdatum optional

---

### 6. AI Inbox

Später soll es eine AI Inbox geben.

Dort kann man schnelle Gedanken, Ideen oder Notizen einwerfen.

Beispiele:

- „Für Projekt X später Auth prüfen“
- „Idee: Dashboard mit Projektstatus“
- „Risiko: API könnte bei vielen Dokumenten langsam werden“

Die KI soll später erkennen:

- Ist es eine Aufgabe?
- Ist es eine Notiz?
- Ist es eine Entscheidung?
- Ist es ein Risiko?
- Zu welchem Projekt gehört es?

---

### 7. Spätere externe Kanäle

Später sollen externe Kanäle angebunden werden:

- WhatsApp über Twilio
- E-Mail-Konversationen über Mailjet V2

Diese Nachrichten sollen ebenfalls in die AI Inbox laufen und dort verarbeitet werden.

---

## Wichtig

Alle Schritte werden nach und nach besprochen.

Wir werden Step by Step brainstormen und implementieren.

Da ich noch Junior bin, wird nichts übersprungen.

Arbeitsweise:

- Ich schreibe den Code selbst.
- Du erklärst mir die Konzepte.
- Ich frage nach, wenn ich etwas nicht verstehe.
- Wir implementieren bewusst langsam und sauber.
- Kein Copy-Paste ohne Verständnis.
- Erst verstehen, dann bauen.

Ziel ist nicht nur ein fertiges Projekt, sondern echtes Lernen.

---

## Entwicklungsprinzipien

- Schritt für Schritt
- Erst simpel, dann erweitern
- Lieber kleine funktionierende Features als große unfertige Baustellen
- Keine unnötige Komplexität am Anfang
- Architektur darf wachsen
- Fokus auf Verständnis
- Jede größere Entscheidung wird vorher besprochen

---

## Nicht sofort in V1

Folgende Dinge werden bewusst später behandelt:

- echte WhatsApp-Anbindung
- Mailjet-Integration
- komplexe AI-Agenten
- vollständiges RAG-System
- Kalender
- Billing
- komplexes Rechte- und Audit-System
- Enterprise-Funktionen
