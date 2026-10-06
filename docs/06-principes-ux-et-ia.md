# Principes UX et agent IA

Document de référence pour le comportement de l'interface **ITRS Studio** (prototype).

---

## 1. Principes UX

### Clarté du parcours

- Le canvas est la **vue principale** ; le graphe doit se lire de gauche à droite ou de haut en bas selon convention figée en Phase 2.
- Chaque nœud expose un **verbe** visible (Navigate, Click, Tap, HTTP GET…).

### Progressive disclosure

- Sidebar fermée par défaut (icônes) ; toolbox au besoin.
- Paramètres avancés (timeout, on error) dans le corps du nœud ou panneau contextuel — pas dans un modal systématique.

### Cohérence multi-canal

- Même **grammaire visuelle** pour WEB / MOBILE / DESKTOP ; seuls les libellés et champs changent.

### Confiance (monitoring)

- Ton sobre, états explicites (debug on/off, exécution en cours).
- Pas de « magie » sans trace : l'agent affiche son **raisonnement** (« Thought for 25s » → plan lisible).

### Accessibilité (minimum)

- Focus clavier sur toolbox et nœuds sélectionnés.
- Contraste suffisant sur le canvas (pattern de fond ne doit pas nuire à la lecture des nœuds).

---

## 2. Agent IA (Flow AI) — comportement cible

### Rôle

- **Scaffolder** : premier jet de parcours à partir d'un objectif métier.
- **Éditeur** : modifier une partie du graphe (« ajoute une étape de login avant le panier »).
- **Explainer** : résumer ce que fait le parcours actuel.

### Hors rôle (V0)

- Exécution réelle sur navigateur distant.
- Choix automatique de sélecteurs DOM fiables sans validation humaine.

### Flux conversationnel (aligné Figma `modal chat`)

1. **Empty state** : « What user journey would you like us to go through today? »
2. **User message** : objectif en langage naturel (URL, produit, contraintes).
3. **Assistant** : plan structuré (liste d'actions) + durée de réflexion affichée si pertinent.
4. **Confirmation** : « Does this meet your requirements? » → **Apply** / **Adjust**.
5. **Apply** : création ou mise à jour des nœuds sur le canvas + message de succès.

### Garde-fous

- Toujours **diff** visible entre graphe avant / après (ou résumé des nœuds ajoutés).
- **Undo** après application agent (stack d'actions).
- En cas d'ambiguïté, poser **une** question fermée plutôt que deviner.

### Données envoyées à l'agent (futur)

- Métadonnées parcours (nom, canal).
- Export JSON du graphe (voir [04-modele-noeuds-et-parcours.md](04-modele-noeuds-et-parcours.md)).
- Optionnel : capture d'écran du canvas (phase ultérieure).

---

## 3. Interaction canvas ↔ agent

| Action utilisateur | Comportement attendu |
|--------------------|----------------------|
| Sélection d'un nœud | Contexte agent peut cibler « ce nœud » |
| Prompt sans sélection | Création ou extension globale |
| Glisser depuis toolbox | Pas d'appel agent |
| Bouton **Flow AI** (bas droite) | Focus panneau chat |

---

## 4. Copy et ton

- Produit : **ITRS Studio** (remplacer Ekara dans les nouveaux textes).
- Tutoiement / vouvoiement : aligner sur guidelines ITRS (à confirmer) — Figma utilise « Hi Miguel » (tutoiement implicite).
- Langues : FR / EN — le prototype peut démarrer en **EN** (maquettes actuelles) avec i18n prévue.

---

## 5. Métriques UX (quali, sessions de test)

- Temps pour créer un parcours 5 étapes (manuel vs agent).
- Nombre d'erreurs de compréhension du graphe (think-aloud).
- Satisfaction perçue « moderne / professionnel » vs Ekara Blockly (échelle simple interne).
