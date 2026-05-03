# Save Rhythm (verbindlich)

Damit wir den Stand nicht verlieren, machen wir "Speichern" als festen Ablauf.

## Trigger: Wann wird aktualisiert?

Wir aktualisieren `docs/step-status.md` immer:

1. nach Abschluss einer Checkbox in einem Step-Plan
2. vor einem Themenwechsel (z. B. von UI zu Logik)
3. bei Blockern/Fehlern
4. vor Session-Ende
5. direkt nach einer Plan-Aenderung/Scope-Aenderung

## Was wird aktualisiert?

- `Current Step`
- `Current Task`
- `State` (`in_progress`, `blocked`, `ready`, `done`)
- `Done Today`
- `Next 2 Actions`
- `Blockers / Questions`
- `Update Log` (eine kurze Zeile)

## Commit-Rhythmus (empfohlen)

Nach jedem sinnvollen Mini-Fortschritt:

1. Step-Checkbox abhaken
2. `docs/step-status.md` aktualisieren
3. committen (kleiner, klarer Commit)

## Wichtig

- "Automatisch" bedeutet hier: als feste Regel im Workflow, nicht als Hintergrund-Script.
- Ich erinnere aktiv daran und halte die Datei bei unseren Steps aktuell.
