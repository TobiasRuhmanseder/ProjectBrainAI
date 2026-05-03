# ProjectBrain AI - Step 02 Company + Project UI

## Abhaengigkeit

Zuerst **Auth + Tenancy** umsetzen: [plan-auth-tenancy.md](plan-auth-tenancy.md). Company-Name und Kontext kommen aus **Session / `current_company`**, nicht aus statischen Demo-Props.

## Ziel

Company-Kontext und Projektuebersicht als sauberen UI-Flow sichtbar machen; Backend schrittweise (echte Company, dann echte Projekte).

## Checklist

- [ ] App-Layout mit Topbar aufsetzen
- [ ] Platz fuer Company Switcher in der Topbar einbauen
- [ ] Inertia Page `Projects/Index` erstellen
- [ ] Projektkarten/Liste mit statischen Demo-Daten anzeigen
- [ ] CTA "Projekt oeffnen" vorbereiten
- [ ] Leerer Zustand: "Noch keine Projekte"

## Flex / Brainstorm Slot

- [ ] Vor Logikstart kurz entscheiden:
  - [ ] eher Karten-UI oder Tabellen-UI?
  - [ ] eher kompakt oder detailreich?
  - [ ] welche 3 Infos pro Projekt sind fuer V1 wirklich wichtig?

## Done fuer Step 02

- [ ] Company-Kontext ist im UI sichtbar
- [ ] Projektliste funktioniert als klarer Navigationspunkt
- [ ] Du kannst den UI-Aufbau erklaeren (Inertia Page -> Components -> Props)
