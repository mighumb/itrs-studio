# Benchmark et inspirations

**Objectif :** cadrer les patterns UX à imiter ou éviter, sans copier l'identité visuelle des concurrents.

**Source design :** frame **Benchmark** dans Figma Studio Preview (screenshots importés) + frames de référence **Zappier** (`7917:2338`).

---

## 1. Références nommées par le produit

| Produit | Pourquoi c'est pertinent | Patterns à retenir |
|---------|--------------------------|-------------------|
| **Luma Lab** | Canvas + agent pour composer des flows | Co-présence chat / canvas ; itérations rapides ; langage naturel → structure |
| **Zapier** | Automation nodale grand public | Nœuds lisibles, libellés d'action en langage humain, paramètres compacts, chemins entre étapes |
| **Ekara Studio (actuel)** | Domaine métier, parité fonctionnelle | Exécution, debug, preuves, multi-canal — à conserver en capacité |
| **Flow AI (Ekara)** | Déjà sur le marché | Prompt → plan d'actions ; notre UI doit **montrer** le plan avant application |

---

## 2. Catégories observées (benchmark canvas nodal)

À compléter au fil de l'analyse de la frame Benchmark Figma :

| Catégorie | Exemples typiques | Intérêt pour ITRS Studio |
|-----------|-------------------|---------------------------|
| **Automation / iPaaS** | Zapier, Make, n8n | Paramètres inline, templates |
| **ML / agent workflows** | Luma, outils agentiques | Chat + preview du plan |
| **RPA / test** | UiPath-like, test recorders | Capture → nœud, forte précision sélecteur |
| **Monitoring synthétique** | Concurrents DEM | Assertions, exécution planifiée (hors UI Studio mais contexte) |

**Template de fiche** (dupliquer pour chaque screenshot du benchmark) :

```markdown
### [Nom produit]
- **Capture :** (lien Figma ou fichier)
- **Ce qui fonctionne :** …
- **Ce qu'on n'adopte pas :** …
- **Pattern à porter :** …
```

---

## 3. Synthèse — principes issus du benchmark

1. **Lisibilité du flux** prime sur la densité de paramètres (détails au focus / panneau latéral).
2. **L'agent propose, l'humain dispose** — validation explicite avant mutation du graphe (cf. maquette « Does this meet your requirements? »).
3. **Deux modes d'entrée** : glisser depuis toolbox **ou** décrire en langage naturel.
4. **Feedback d'exécution** proche du graphe (table d'étapes, statut par nœud — phase ultérieure).
5. **Identité ITRS** : s'inspirer des interactions, pas des couleurs / logos tiers.

---

## 4. Anti-patterns à éviter

- Canvas vide sans onboarding (prévoir empty state + exemple, comme « Welcome » / « Hi Miguel »).
- Chat plein écran qui **cache** le graphe pendant l'édition structurelle.
- Nœuds génériques sans verbe d'action (« Step 3 » au lieu de « Click Add to Bag »).
- IA qui modifie le graphe sans historique / undo.

---

## 5. Actions design

- [ ] Lister les screenshots de la frame Benchmark avec nom produit + 1 ligne d'insight.
- [ ] Mettre à jour ce fichier après chaque revue benchmark.
- [ ] Croiser avec la liste d'actions Blockly prioritaires (engineering).
