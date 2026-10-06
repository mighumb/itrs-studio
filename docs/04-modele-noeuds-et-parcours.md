# Modèle de nœuds et parcours

**Version :** 0.1 — aligné sur les explorations Figma Studio Preview (`Group START`, `BASE`, `WEB`, `MOBILE`, `DESKTOP` + instances `Node-*`).

Ce document décrit le **modèle conceptuel** pour le prototype. Le JSON ci-dessous est la cible pour l'agent cloud (état applicatif), pas encore un contrat API Ekara.

---

## 1. Définitions

| Terme | Définition |
|-------|------------|
| **Parcours (journey)** | Scénario de monitoring synthétique : séquence d'actions utilisateur / technique à rejouer |
| **Graphe** | Représentation nodale du parcours (nœuds + arêtes) |
| **Nœud** | Unité d'action ou de contrôle avec paramètres et comportement d'erreur |
| **Connexion** | Lien sortant → entrant entre deux nœuds (flux principal) |
| **Script** | Projection séquentielle ou code généré du graphe (vue « Script ») |

---

## 2. Familles de nœuds

### 2.1 Lifecycle (START) — ancres du scénario

| Type | Rôle | Paramètres visibles Figma |
|------|------|---------------------------|
| `on_init` | Préparation avant toute étape | Timeout, On error (ex. Stop) |
| `on_start` | Début effectif du parcours | Timeout |
| `on_final` | Finalisation / teardown | Timeout |

Sur le canvas « marketing », des variantes compactes existent : `Node-init`, `Node-preparation`, `Node-end`.

### 2.2 Structure (BASE)

| Type | Rôle | Paramètres |
|------|------|------------|
| `step` | Conteneur / étape nommée | Name, Timeout |
| `neutral_step` | Étape sans action UI (wait, sync) | Name, Timeout, On error |
| `http_request` | Appel HTTP | Method (GET…), URL |
| `get_env_var` | Lecture variable d'environnement | Nom / slot |
| `coordinates` | Action basée coordonnées | (détails à préciser) |

### 2.3 Canaux métier

| Canal | Exemples d'actions | Types d'élément |
|-------|-------------------|-----------------|
| **WEB** | Click on … for N seconds | DOM Element |
| **MOBILE** | Tap on … | Element |
| **DESKTOP** | Close application, key combo | Window, Key combination |

### 2.4 Nœuds canvas simplifiés (graphe démo)

| Instance Figma | Usage probable |
|----------------|----------------|
| `Node-navigate` | Navigation URL / écran |
| `Node-step` | Étape groupée |
| `Node-click` | Interaction clic/tap |
| `Node-init` / `Node-preparation` | Entrée scénario |

**Règle prototype :** les types `Node-*` du graphe démo peuvent mapper vers les types détaillés WEB/MOBILE/BASE à l'édition (double niveau : vue simplifiée vs inspection).

---

## 3. Paramètres transverses

Champs récurrents à supporter sur la plupart des nœuds :

- **name** — libellé humain
- **timeout** — secondes (0 = illimité / hérité)
- **on_error** — `stop` | `continue` | `retry` (liste à valider avec Ekara)
- **enabled** — booléen (phase 2)

Actions WEB/MOBILE :

- **target** — sélecteur, capture, ou référence élément (« Insert a capture or an element »)
- **duration** — attente après action (ex. 5 seconds)

---

## 4. Schéma JSON (brouillon)

```json
{
  "id": "journey_001",
  "name": "Main",
  "version": 1,
  "viewport": { "x": 0, "y": 0, "zoom": 1 },
  "nodes": [
    {
      "id": "n1",
      "type": "on_init",
      "position": { "x": 140, "y": 124 },
      "data": { "timeout": 30, "on_error": "stop" }
    },
    {
      "id": "n2",
      "type": "web_click",
      "position": { "x": 420, "y": 386 },
      "data": {
        "name": "Add to bag",
        "target": { "kind": "dom", "value": "" },
        "duration_sec": 5,
        "timeout": 30,
        "on_error": "stop"
      }
    }
  ],
  "edges": [
    { "id": "e1", "source": "n1", "target": "n2" }
  ]
}
```

---

## 5. Règles de graphe (validation)

1. Au plus un nœud `on_init` recommandé par parcours.
2. Graphe **acyclique** en V0 (pas de boucles) — boucles = phase 2.
3. Tout nœud hors `on_final` doit être reachable depuis `on_init` / `on_start`.
4. L'agent IA ne doit produire que des types connus de la toolbox ; sinon nœud `step` générique + commentaire.

---

## 6. Relation avec Blockly (legacy)

| Blockly (concept) | Nœud ITRS Studio (cible) |
|-------------------|---------------------------|
| Bloc empilé action web | `web_*` |
| Bloc contrôle / wait | `neutral_step` |
| Bloc HTTP | `http_request` |
| Séquence linéaire | Chaîne d'arêtes |

**Migration :** hors scope prototype ; documenter les écarts au fil des ateliers engineering.

---

## 7. Évolutions prévues

- Branches conditionnelles (if assertion failed → …).
- Sous-graphes / modules réutilisables (comme Zapier paths).
- Nœuds **assertion** et **capture** explicites (monitoring Ekara).
- Sync bi-directionnelle vue **Script** (texte / JSON).
