# Guide pour agents IA (build cloud)

Ce fichier est destiné à l'**agent connecté au repo GitHub** qui implémentera l'interface. Lire **avant** tout code.

---

## 1. Mission

Construire un **prototype front-end** de **ITRS Studio** : éditeur de parcours en canvas nodal + panneau agent, inspiré de Figma **Studio Preview** (`7128:1180`), documenté dans ce dépôt.

**Ne pas** implémenter le backend Ekara/Uptrends en Phase 1–5.

---

## 2. Ordre de lecture obligatoire

1. [01-contexte-et-vision.md](01-contexte-et-vision.md)
2. [02-note-de-cadrage.md](02-note-de-cadrage.md)
3. [03-referentiel-design-figma.md](03-referentiel-design-figma.md)
4. [04-modele-noeuds-et-parcours.md](04-modele-noeuds-et-parcours.md)
5. [06-principes-ux-et-ia.md](06-principes-ux-et-ia.md)
6. [07-roadmap-prototype.md](07-roadmap-prototype.md)

---

## 3. Source design

- **Figma fileKey :** `Fwn3pUkAQweQvuf2MVnqLH`
- **Frame principal :** `7128:1180` (Ekara home studio - Light)
- Utiliser Figma MCP : `get_design_context` + `get_screenshot` sur ce node avant chaque grosse itération UI.

**Scope :** ne pas explorer tout le design system — uniquement Studio Preview et composants référencés dans doc 03.

---

## 4. Règles de développement

- **Petits PR / commits** par phase roadmap (1 commit logique = une phase partielle).
- Pas de secrets dans le repo ; `.env.example` uniquement si API agent.
- Composants découpés : `StudioLayout`, `StudioCanvas`, `StudioSidebar`, `FlowAIChat`, `ScriptExecutionPanel`.
- Modèle de données : suivre le JSON brouillon dans doc 04 ; fichier `src/types/journey.ts` (ou équivalent).
- Texte produit : **ITRS Studio** (pas Ekara) sauf citation de maquette non encore mise à jour.

---

## 5. Prompts types pour Miguel → agent

### Démarrage

```text
Initialise le projet Phase 1 de docs/07-roadmap-prototype.md.
Stack : Next.js + Tailwind + shadcn + @xyflow/react.
Reproduis le shell de Figma node 7128:1180 (light). Pas de backend.
```

### Itération canvas

```text
Phase 2 : implémente les nœuds on_init, web_click, navigate selon docs/04-modele-noeuds-et-parcours.md.
Style proche des composants Node-* du Figma Studio Preview.
```

### Agent mock

```text
Phase 4 : modal chat comme Figma modal chat sur 7128:1180.
Mock : si le user message contient une URL, répondre avec un plan en liste puis bouton Apply qui ajoute des nœuds au graphe.
```

---

## 6. Revue

Miguel valide visuellement vs Figma et UX vs doc 06. L'agent liste les **écarts assumés** en fin de chaque phase dans `CHANGELOG.md`.

---

## 7. Contact / décisions

Les décisions produit non tranchées sont dans doc 01 §8 et doc 02 §9. En cas de blocage, **ne pas inventer** la parité Blockly — utiliser des stubs et documenter dans `docs/OPEN_QUESTIONS.md` (créer si besoin).
