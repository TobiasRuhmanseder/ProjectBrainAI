# Auth & Tenancy — Plan und aktueller Stand

Diese Datei fasst die **fachlichen und technischen Festlegungen** zusammen und markiert, was davon im Repo bereits vorhanden ist.

## Auth

- **Rails 8 Auth-Generator** (`bin/rails g authentication`) — Code im Repo, gut zum Lernen; in echten Projekten üblich (alternativ oft Devise).
- **Aktueller Stand:** Passwort-Login und Passwort-Reset-Controller aus dem Generator liegen bereits unter `app/controllers/auth/`.
- **Noch offen:** Routing sauber auf den `auth/` Namespace ziehen und die Sign-In-UI mit dem aktuellen Flow verbinden.

## Datenmodell (Kern)

- **`User`**: Login-Identity (E-Mail, Passwort, …).
- **`Company`**: z. B. `name`, `slug` (unique).
- **`Membership`**: `user_id`, `company_id`, `role` — **eine Zeile pro User pro Company**.
- **`MagicLink`**: `user_id`, `token`, `expires_at` — Tabelle und Modell sind bereits angelegt.

## Rollen auf `memberships.role`

- **`owner`** — hat die Firma registriert; **volle Verantwortung** für diese Company.
- **`admin`** — Mitarbeiter-Admin (User-/Projekt-Verwaltung je nach Policies).
- **`projectmanager`**, **`user`** — wie in [conzept.md](conzept.md).

Derselbe **User** kann in **mehreren Companies** unterschiedliche Rollen haben (z. B. `owner` in A, `user` in B) — jeweils eigene `Membership`-Zeile.

## Implementierungsstand im Repo

- **Vorhanden:** Migrationen fuer `users`, `sessions`, `companies`, `memberships`, `magic_links`.
- **Vorhanden:** Modelle `Company`, `Membership`, `MagicLink`, `Session`, `Current`, `User`.
- **Vorhanden:** DB-Constraint fuer genau einen `owner` pro Company ueber partiellen Unique-Index.
- **Vorhanden:** Generator-Flow fuer Passwort-Reset.
- **Noch nicht fertig:** Registrierung mit `User + Company + Membership(owner)` in einer Transaktion.
- **Noch nicht fertig:** Company-Kontext in Session oder `current_company`.
- **Noch nicht fertig:** Magic-Link-Login per Controller, Mailer, Token-Verbrauch und UI.
- **Inkonsistent:** `User` und `Company` haben aktuell Tippfehler in Associations/Validations; `Membership` enthaelt `projectmanager` noch nicht.

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

## Passwort-Reset vs. Magic Link

- **Passwort-Reset** ist durch den Rails-Generator bereits vorbereitet.
- **Magic-Link-Login** ist ein separater Produkt-Flow und trotz Modell/Migration noch nicht integriert.
- Beide Flows sollten in der weiteren Umsetzung getrennt bleiben, damit Doku und Code nicht zwei verschiedene Token-Mechaniken vermischen.

## UI (optional, später)

- Wenn der Owner **nicht** in normalen Team-Listen erscheinen soll: z. B. `memberships.where.not(role: :owner)` oder Owner separat anzeigen — bewusste Produktentscheidung.

## Bewusst später

- Company-Switcher (wenn ein User mehrere Memberships hat).
- Einladungen, E-Mail-Bestätigung, OAuth, Billing, Ownership-Transfer-UI.

## Verknüpfung

- UI-Schritte: [plan-step-02-company-project-ui.md](plan-step-02-company-project-ui.md) — Company-Kontext aus Session statt Demo.
- Konzept: [conzept.md](conzept.md) — bei Implementierung **`owner`** in der Rollenliste ergänzen, falls noch nicht explizit.
