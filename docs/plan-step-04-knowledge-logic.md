# ProjectBrain AI - Step 04 Knowledge Logic (minimal)

## Ziel

Den kleinsten echten End-to-End-Flow fuer KnowledgeItems umsetzen.

## Minimales Datenmodell

- `title`
- `content`
- `project_id`
- `created_by_user_id`
- `created_at`

## Checklist

- [ ] Migration `knowledge_items` erstellen
- [ ] Rails Model `KnowledgeItem` mit Minimal-Validierungen
- [ ] Beziehung zu `Project` und `User` anlegen
- [ ] Controller/Create-Action fuer neue Eintraege
- [ ] `Projects#show` liefert KnowledgeItems mit aus
- [ ] Inertia Props statt Fake-Daten verwenden
- [ ] Formular submit -> speichern -> UI aktualisieren

## Sicherheit + Konsistenz

- [ ] `created_by_user_id` nur serverseitig setzen
- [ ] Wissen strikt auf aktuelles Projekt begrenzen
- [ ] Keine Cross-Project-Zugriffe zulassen

## Flex / Brainstorm Slot

- [ ] Vor Finalisierung kurz entscheiden:
  - [ ] sofort Edit/Delete oder erst spaeter?
  - [ ] sofort Pagination oder erst spaeter?
  - [ ] einfache Errors im UI ausreichend?

## Done fuer Step 04

- [ ] Knowledge wird aus DB geladen
- [ ] Eintrag erstellen funktioniert stabil
- [ ] Du verstehst die komplette Request-Kette (Form -> Controller -> DB -> Inertia -> React)
