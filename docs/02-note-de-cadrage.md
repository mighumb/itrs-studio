# Note de cadrage — ITRS Studio (prototype)

**Version :** 0.1  
**Type :** cadrage projet design + prototype interactif  
**Périmètre :** création / édition de parcours (Studio Preview)

---

## 1. Objet du projet

Mettre en place une **base documentaire et un dépôt** pour prototyper **ITRS Studio** : interface de refonte de l'édition de parcours, en remplacement conceptuel de l'éditeur **Blockly** d'Ekara Studio.

**Livrable court terme :** prototype UI « vibe coded » (agent cloud sur GitHub), fidèle à la direction **Studio Preview** Figma, sans prétendre remplacer le backend Ekara.

**Livrable moyen terme :** socle UX validé en interne pour alimenter la roadmap fusion **ip-label / Ekara + ITRS + Uptrends**.

---

## 2. Périmètre IN / OUT

### IN

- Canvas nodal (graphe de parcours).
- Sidebar + toolbox (catégories Base / Basic / Types).
- Panneaux latéraux : chat agent (Flow AI), exécution script, capture / onboarding.
- États light (dark en option secondaire).
- Modèle de nœuds documenté (START, BASE, WEB, MOBILE, DESKTOP).
- Documentation pour agents IA développeurs.

### OUT (phase 0)

- Authentification / multi-tenant production.
- Connexion réelle aux robots Ekara ou Uptrends.
- Migration Blockly automatique.
- Modules hors Studio (alerting, reporting, admin org).
- Couverture complète du fichier Figma « 0.- Design system » (hors Studio Preview).

---

## 3. Objectifs mesurables (prototype)

| # | Objectif | Indicateur |
|---|----------|------------|
| O1 | Représenter un parcours type sur canvas | Graphe avec ≥ 8 nœuds connectés, lisible |
| O2 | Démontrer le flux IA | Prompt → plan textuel → confirmation → nœuds suggérés |
| O3 | Édition manuelle | Ajout d'un nœud depuis toolbox + édition paramètres inline |
| O4 | Alignement Figma | Layout principal calqué sur `7128:1180` (tolérance responsive) |
| O5 | Maintenabilité | README + docs versionnés ; prompts reproductibles pour l'agent cloud |

---

## 4. Parties prenantes (à compléter)

| Rôle | Nom | Attente |
|------|-----|---------|
| Design / produit | Miguel Humberto | Vision, Figma, revues |
| Engineering Ekara | _à renseigner_ | Faisabilité exécution / parité blocs |
| Product ITRS / Uptrends | _à renseigner_ | Convergence roadmap |
| Agent build (cloud) | _outil externe_ | Implémentation itérative |

---

## 5. Contraintes

- **Confidentialité** : contenu interne groupe ; repo GitHub probablement **privé**.
- **Marque** : working title **ITRS Studio** ; DA Ekara non bloquante pour le prototype.
- **Technique (recommandation non imposée)** : stack web moderne (ex. React + canvas type React Flow / XYFlow) — l'agent cloud propose, le cadrage n'impose pas encore.
- **Accessibilité** : viser bases WCAG sur contrôles critiques (à durcir post-prototype).

---

## 6. Architecture conceptuelle (4 zones UI)

Alignée sur Figma `Ekara home studio - Light` :

```
┌─────────────────────────────────────────────────────────────┐
│ Header (contexte scénario, navigation globale)              │
├────┬──────────────────────────────────────────┬─────────────┤
│    │                                          │ Modal chat  │
│ S  │           Canvas (artboard)              │ / Flow AI   │
│ i  │           Graphe de nœuds                │             │
│ d  │                                          │ Script exec │
│ e  │                                          │ Screenshot  │
│    │                                          │             │
├────┴──────────────────────────────────────────┴─────────────┤
│ Barre basse : User journey | Script | Flow AI               │
└─────────────────────────────────────────────────────────────┘
```

- **Sidebar** : icônes + panneau toolbox extensible (`sidebar studio opened`).
- **Canvas** : fond pattern + nœuds + connexions.
- **Panneau droit** : mode chat agent (ex. scénario Apple Watch dans les maquettes) ou cartes métier.
- **Bas** : bascule vue parcours / script ; entrée Flow AI.

---

## 7. Hypothèses de travail

1. Un **parcours** = graphe dirigé avec un nœud d'entrée (init / preparation) et sortie (end).
2. Les **nœuds** portent type, paramètres, politique d'erreur ; les **connexions** ordonnent le flux principal (branches conditionnelles : phase 2).
3. L'**agent IA** travaille sur une **représentation structurée** du graphe (JSON), pas seulement sur des pixels.
4. La vue **Script** est une projection (lecture seule ou édition avancée) — décision produit ouverte.

---

## 8. Jalons proposés

| Phase | Contenu | Durée indicative |
|-------|---------|------------------|
| **0 — Cadrage** | Docs repo (ce dossier) | En cours |
| **1 — Shell UI** | Layout Figma, navigation zones, thème light | 1–2 sprints agent |
| **2 — Canvas** | Nœuds, drag, connect, pan/zoom | 1–2 sprints |
| **3 — Agent mock** | Chat UI + génération locale / API mock de graphe | 1 sprint |
| **4 — Exécution mock** | Table d'étapes, boutons play/pause/debug (données fake) | 1 sprint |
| **5 — Revue design** | Écart Figma ↔ build, itérations Miguel | Continu |

---

## 9. Décisions actées

| Date | Décision |
|------|----------|
| 2025-10-05 | Focus documentation et repo sur **Studio Preview** uniquement |
| 2025-10-05 | Nom de travail produit : **ITRS Studio** |
| 2025-10-05 | Remplacement conceptuel Blockly par **canvas nodal + IA** |

---

## 10. Prochaines actions

1. Pousser ce dossier sur un **repo GitHub privé** (manuellement ou via agent).
2. Valider avec toi la **stack** et le **périmètre Phase 1** dans [07-roadmap-prototype.md](07-roadmap-prototype.md).
3. Compléter la frame **Benchmark** dans Figma (liste des refs nommées) → recopier dans [05-benchmark-et-inspirations.md](05-benchmark-et-inspirations.md).
4. Lancer l'agent cloud avec [08-guide-agents-ia.md](08-guide-agents-ia.md).
