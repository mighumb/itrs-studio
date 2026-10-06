# Roadmap prototype

Plan indicatif pour le **vibe coding** via agent cloud sur GitHub. Ajuster avec Miguel après création du repo distant.

---

## Phase 0 — Cadrage ✅ (en cours)

- [x] Structure `docs/` + README
- [ ] Repo GitHub privé créé et docs poussés
- [ ] Node-id Figma frame **Benchmark** renseigné dans doc 03
- [ ] Validation stack technique

---

## Phase 1 — Application shell

**But :** reproduire le layout `7128:1180` sans logique métier.

- Header, tab Main, sidebar icons, zone canvas centrale, panneau droit (chat placeholder).
- Barre basse : User journey, Script, Flow AI.
- Thème light + fond pattern (approximation CSS).
- Routing minimal (une route `/studio`).

**Critère done :** screenshot comparé à Figma, structure responsive ≥ 1280px.

---

## Phase 2 — Canvas nodal

**But :** graphe interactif.

- Bibliothèque canvas (recommandation : **@xyflow/react**).
- 5–8 types de nœuds custom (forme proche Figma `Node-*` / groupes BASE).
- Drag depuis toolbox → création nœud (position sous curseur).
- Connexions, sélection, suppression.
- Persistance locale (localStorage) du JSON parcours.

**Critère done :** parcours sauvegardé rechargé au refresh.

---

## Phase 3 — Édition paramètres

**But :** champs inline sur nœuds (name, timeout, on_error, click target mock).

- Panneau latéral optionnel pour champs longs (URL).
- Validation basique (URL, nombres).

---

## Phase 4 — Agent (mock puis API)

**But :** flux chat Figma.

- UI messages user / assistant + empty state.
- **V0 :** réponses mockées à partir de mots-clés (ex. prompt Apple → plan fixe des maquettes).
- **V1 :** branchement API (OpenAI / Azure / gateway ITRS) avec prompt système décrit dans doc 06.
- Bouton confirmation → mutation graphe.

---

## Phase 5 — Exécution (simulation)

**But :** carte Script execution.

- Table des étapes dérivée du graphe (ordre topologique).
- Boutons play / pause / next — avancement fake avec délais.
- Switch debug (états visuels sur nœuds).

---

## Phase 6 — Polish & handoff

- Renommage copy ITRS Studio.
- Mode sombre (option).
- Document `CHANGELOG.md` + captures pour revue stakeholders.
- Liste des écarts Figma connus.

---

## Stack suggérée (non bloquante)

| Couche | Suggestion | Alternative |
|--------|------------|-------------|
| Framework | Next.js (App Router) | Vite + React |
| UI | shadcn/ui + Tailwind | MUI (si alignement DS Ekara) |
| Canvas | @xyflow/react | React Flow legacy |
| State | Zustand ou Jotai | Redux Toolkit |
| i18n | next-intl | react-i18next |

L'agent cloud **propose** un `package.json` minimal ; Miguel valide avant dépendances lourdes.

---

## Hors scope explicite (backlog produit)

- Auth SSO ITRS
- Collab temps réel
- Import Blockly
- Exécuteur Ekara réel
- Fusion catalogue actions Uptrends
