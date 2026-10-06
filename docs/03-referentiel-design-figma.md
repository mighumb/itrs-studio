# Référentiel design — Studio Preview (Figma)

**Fichier :** `0.- Design system`  
**fileKey :** `Fwn3pUkAQweQvuf2MVnqLH`

Ne pas utiliser l'ensemble du DS comme scope build — **uniquement** le canvas et les frames listés ci-dessous.

---

## 1. Point d'entrée principal

| Élément | Node ID | Lien |
|---------|---------|------|
| **Studio Preview** (canvas) | `1192:31302` | [Ouvrir](https://www.figma.com/design/Fwn3pUkAQweQvuf2MVnqLH/0.-Design-system?node-id=1192-31302) |
| **Ekara home studio - Light** (écran ref.) | `7128:1180` | [Ouvrir](https://www.figma.com/design/Fwn3pUkAQweQvuf2MVnqLH/0.-Design-system?node-id=7128-1180) |

---

## 2. Contenu connu du canvas Studio Preview

### Sections « Studio »

Plusieurs sections homonymes sur le canvas (variantes / itérations) :

- Section avec graphe complet (nœuds `Node-init`, `Node-preparation`, `Node-step`, `Node-navigate`, `Node-click`, `Node-end`).
- Variantes **Light** avec artboard vide (pattern only) + chrome UI.
- Frame **`Zappier`** (`7917:2338`) — référence Zapier pour le nodal.

### Composants chrome (récents sur `7128:1180`)

| Zone Figma | Rôle |
|------------|------|
| `header` | Barre supérieure 1920×64 |
| `tab` « Main » | Onglet de document / scénario |
| `sidebar studio` / `closed` / `opened` | Navigation outils + toolbox |
| `Toolbox` | Recherche + groupes **Base**, **Step**, **Basic**, **Types** |
| `modal chat` | Agent Flow AI (messages user/assistant, input, empty state « Hi Miguel ») |
| `Card Script execution` | Debug switch, player controls, table header |
| `Card Screenshot` | Onboarding « Welcome to Ekara Studio » (à renommer ITRS en produit) |
| `button` **Flow AI** | Entrée rapide agent (sparkles) |
| `Frame 2` | Boutons **User journey** / **Script** |

### Groupes de design nœuds (souvent `hidden` — specs visuelles)

Sur `7128:1180`, calques de référence pour la bibliothèque de nœuds :

| Groupe | Contenu indicatif |
|--------|-------------------|
| **Group START** | `On init`, `On start`, `On final` |
| **Group BASE** | `Step`, `Neutral Step`, `HTTP Request`, variables, `Coordinates` |
| **Group WEB** | `Click on`, type `DOM Element` |
| **Group MOBILE** | `Tap on`, type `Element` |
| **Group DESKTOP** | `Close application`, `Key combination` |

Ces groupes alimentent [04-modele-noeuds-et-parcours.md](04-modele-noeuds-et-parcours.md).

---

## 3. Frame Benchmark

La frame **Benchmark** est mentionnée par le design lead ; elle contient des imports screenshot de plateformes canvas + IA.

**Action :** lorsque le `node-id` Figma est fixé, l'ajouter ici :

```text
Benchmark frame node-id: _à compléter_
```

L'agent build **ne doit pas** recréer les screenshots du benchmark — s'en servir pour patterns UX seulement.

---

## 4. Règles pour l'implémentation

1. **Source de vérité visuelle** : `7128:1180` pour le shell ; graphe avec nœuds pour les sections contenant `Node-*`.
2. Les calques `hidden="true"` sont des **états alternatifs** (panneau ouvert, carte visible, overlay).
3. Tokens / composants MUI référencés (`input field mui`) : réutiliser des équivalents shadcn/MUI selon stack — pas besoin de pixel-perfect DS Ekara en phase 1.
4. Textes produit : remplacer progressivement « Ekara Studio » par **ITRS Studio** dans le prototype sauf instruction contraire.

---

## 5. Workflow MCP Figma (agents)

Pour récupérer le design avant de coder :

1. `get_metadata` avec `fileKey` + `nodeId` (structure).
2. `get_design_context` sur `7128:1180` (implémentation).
3. `get_screenshot` pour validation visuelle.

Node IDs : remplacer `-` par `:` (ex. `7128-1180` → `7128:1180`).
