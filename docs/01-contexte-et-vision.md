# Contexte et vision — ITRS Studio

**Version :** 0.1 (cadrage initial)  
**Dernière mise à jour :** 2025-10-05  
**Owner design :** Miguel Humberto (ip-label / ITRS)

---

## 1. Contexte organisationnel

### ip-label, Ekara, ITRS, Uptrends

- **ip-label** a créé et édite **Ekara**, plateforme européenne de **Digital Experience Monitoring (DEM)** et de **monitoring synthétique** (robots qui rejouent des parcours utilisateur 24/7 sur le front : web, mobile, API, clients lourds, VDI/RDS, etc.).
- **Ekara Studio** est l’éditeur no-code des **scénarios / parcours** qui alimentent ces mesures.
- Depuis quelques mois, ip-label a été **rachetée par ITRS Group**, qui possède aussi **Uptrends** (monitoring synthétique et disponibilité).
- Une **fusion des trois entités** en une offre unifiée est en cours de réflexion ; le Studio doit anticiper cette convergence sans figer prématurément tous les détails backend.

### État actuel de l’édition de parcours (Ekara)

- Modélisation via **Blockly** : blocs empilés qui génèrent le script du scénario.
- Fonctionnellement mature pour les experts, mais **interface datée**, peu alignée avec les attentes UX 2025+ (canvas, co-pilote IA, densité maîtrisée).
- Fonctions produit déjà valorisées côté Ekara : **Flow AI**, **Magic Wand** (gestion des pop-ups), exécution / debug, preuves (screenshots), multi-environnements.

---

## 2. Problème à résoudre

| Constats | Conséquence |
|----------|-------------|
| Blockly ≠ mental model « parcours » pour beaucoup d’utilisateurs | Courbe d’apprentissage, perception « outil legacy » |
| Concurrence et outils adjacents (automation, agents) | Barre UX plus haute : canvas, IA native, clarté du flux |
| Fusion Ekara + Uptrends + ITRS | Besoin d’un **langage d’édition commun** et d’une marque **ITRS Studio** |
| Expertise métier forte chez ip-label | Ne pas sacrifier la **précision** (timeouts, erreurs, assertions, multi-canal) pour la beauté du canvas |

---

## 3. Vision produit (north star)

**ITRS Studio** est l’atelier où un utilisateur **conçoit, comprend, teste et fait évoluer** un parcours de monitoring synthétique — comme un **IDE visuel** du parcours, assisté par un **agent IA** qui propose, structure et modifie le graphe en langage naturel.

### Promesse utilisateur

> « Décrivez ou dessinez le parcours ; voyez-le s’exécuter ; ajustez en confiance — sans coder, sans vous perdre dans des blocs. »

### Ce que ce n’est pas (dans ce prototype)

- Pas le module **Management** Ekara (alertes, webhooks, intégrations globales).
- Pas la consolidation complète des moteurs d’exécution Ekara vs Uptrends (hors scope technique initial).
- Pas une refonte de **tout** le design system Ekara — seulement **Studio Preview** et dérivés directs.

---

## 4. Utilisateurs cibles

| Persona | Besoin principal dans le Studio |
|---------|----------------------------------|
| **Expert monitoring / QA** | Précision, debug pas à pas, visibilité des étapes, gestion d’erreur |
| **Chef de projet digital / e-commerce** | Créer un parcours critique sans développeur |
| **SRE / plateforme** | Scénarios reproductibles, CI/CD, multi-env |
| **Nouvel utilisateur (post-fusion)** | Onboarding clair, IA qui scaffold le premier parcours |

---

## 5. Inspirations explicites (design)

- **Luma Lab** — canvas + agent pour composer des flows créatifs ; référence pour la **relation canvas ↔ chat**.
- **Zapier** — nodal, lisible, paramètres inline ; frame de référence dans Figma (`Zappier`).
- **Benchmark** — planche de screenshots concurrents / adjacents (canvas nodaux + IA) dans Studio Preview.

La direction Figma actuelle (**Ekara home studio - Light**, node `7128:1180`) reste proche de la DA Ekara ; c’est acceptable pour un **premier prototype**, avec évolution vers une identité **ITRS** plus tard.

---

## 6. Critères de succès (qualitatifs, phase prototype)

1. Un nouveau lecteur comprend **le flux du parcours** en &lt; 30 s sur le canvas.
2. L’agent peut **proposer une séquence d’actions** à partir d’un prompt métier (ex. parcours e-commerce) et l’utilisateur **valide / ajuste** avant application au graphe.
3. Les **paramètres critiques** (timeout, on error, sélecteurs, URL) restent accessibles sans quitter le nœud.
4. La toolbox permet d’**ajouter manuellement** ce que l’IA n’a pas couvert.
5. Le panneau **Script execution** (ou équivalent) relie **graphe ↔ exécution**.

---

## 7. Risques et garde-fous

| Risque | Garde-fou |
|--------|-----------|
| Canvas « démo » non exécutable | Modèle de données parcours dès V0 ; liens explicites graphe → liste d’étapes |
| IA qui hallucine des sélecteurs | Mode « proposition » + confirmation ; pas d’écriture silencieuse en prod |
| Scope fusion Ekara/Uptrends | Documenter les **extensions** sans bloquer le prototype UI |
| Dette Blockly | Prévoir **import / parité conceptuelle** (étapes ↔ anciens blocs) en phase ultérieure |

---

## 8. Décisions ouvertes (à trancher avec les parties prenantes)

- [ ] Nom définitif : **ITRS Studio** vs sous-marque Ekara.
- [ ] Parité minimale V1 avec actions Blockly existantes (liste priorisée).
- [ ] Agent : cloud ITRS uniquement vs choix de modèle / RAG sur doc interne.
- [ ] Mode « User journey » vs « Script » (boutons en bas du canvas Figma) : deux vues ou deux exports ?
- [ ] Gouvernance design : jusqu’où s’éloigner de la DA Ekara pour la fusion.

---

*Document vivant — toute décision tranchée doit être recopiée dans [02-note-de-cadrage.md](02-note-de-cadrage.md) (section Décisions actées).*
