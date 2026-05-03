# Auth & Tenancy — geplante Umsetzung (nach Brainstorming)

Diese Datei fasst die **fachlichen und technischen Festlegungen** zusammen, bevor wir Registrierung/Login und Company-Kontext implementieren.

## Auth

- **Rails 8 Auth-Generator** (`bin/rails g authentication`) — Code im Repo, gut zum Lernen; in echten Projekten üblich (alternativ oft Devise).

## Datenmodell (Kern)

- **`User`**: Login-Identity (E-Mail, Passwort, …).
- **`Company`**: z. B. `name`, `slug` (unique).
- **`Membership`**: `user_id`, `company_id`, `role` — **eine Zeile pro User pro Company**.

## Rollen auf `memberships.role`

- **`owner`** — hat die Firma registriert; **volle Verantwortung** für diese Company.
- **`admin`** — Mitarbeiter-Admin (User-/Projekt-Verwaltung je nach Policies).
- **`projectmanager`**, **`user`** — wie in [conzept.md](conzept.md).

Derselbe **User** kann in **mehreren Companies** unterschiedliche Rollen haben (z. B. `owner` in A, `user` in B) — jeweils eigene `Membership`-Zeile.

## Owner — harte Regeln

1. **Pro Company genau ein `owner`** (Validierung + idealerweise DB-Constraint, z. B. partieller Unique-Index auf `company_id` wo `role = 'owner'`).
2. **Owner kann nicht „einfach“ aus der Company entfernt werden** — kein normales Löschen der Owner-Membership, keine Rolle wechseln ohne **bewussten** Sonderfall (Ownership-Übergabe, Firma schließen).
3. **Rechte**: Owner ist in dieser Company die **oberste Instanz**; feinere Trennung zu `admin` über Policies (z. B. nur Owner: Billing, Firma löschen).

## Admin-Panel / Company-Settings (Abfrage)

Immer **scoped auf `current_company`**:

- **Owner?** `membership.role == "owner"` für diese Company (oder Hilfsmethode `user.owner_of?(company)`).
- **Company-Admin-Panel sichtbar?** typisch: **`owner` oder `role == "admin"`** für dieselbe Company.

Kein globales `user.admin?` ohne Company-Kontext.

## Registrierung (Sign-Up)

- Formular: E-Mail, Passwort, Firmenname (Minimum).
- **Eine Transaktion**: `User` anlegen → `Company` anlegen → **`Membership` mit `role: :owner`**.
- Anschließend einloggen; Dashboard nutzt **echte** Company aus Session/Kontext (statt Mock).

## UI (optional, später)

- Wenn der Owner **nicht** in normalen Team-Listen erscheinen soll: z. B. `memberships.where.not(role: :owner)` oder Owner separat anzeigen — bewusste Produktentscheidung.

## Bewusst später

- Company-Switcher (wenn ein User mehrere Memberships hat).
- Einladungen, E-Mail-Bestätigung, OAuth, Billing, Ownership-Transfer-UI.

## Verknüpfung

- UI-Schritte: [plan-step-02-company-project-ui.md](plan-step-02-company-project-ui.md) — Company-Kontext aus Session statt Demo.
- Konzept: [conzept.md](conzept.md) — bei Implementierung **`owner`** in der Rollenliste ergänzen, falls noch nicht explizit.
