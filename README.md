# ITRS Studio

Prototype et documentation de conception pour **ITRS Studio** — future expérience unifiée de **création et d’édition de parcours** (monitoring synthétique / user journeys), en remplacement progressif de l’éditeur Blockly d’Ekara Studio.

> **Statut :** phase de cadrage et design-led prototype (vibe coding).  
> **Périmètre design :** canvas Figma **Studio Preview** uniquement (pas l’intégralité du design system Ekara).

## Liens essentiels

| Ressource | Lien |
|-----------|------|
| Figma — Studio Preview (canvas) | [0.- Design system — node 1192:31302](https://www.figma.com/design/Fwn3pUkAQweQvuf2MVnqLH/0.-Design-system?node-id=1192-31302) |
| Figma — référence écran principal | [Ekara home studio - Light — 7128:1180](https://www.figma.com/design/Fwn3pUkAQweQvuf2MVnqLH/0.-Design-system?node-id=7128-1180) |
| Produit actuel (contexte) | [Ekara Studio — no-code journeys](https://ip-label.com/no-code-journey-scripting-2/) |

## Documentation

Lire dans cet ordre :

1. [Contexte et vision](docs/01-contexte-et-vision.md)
2. [Note de cadrage](docs/02-note-de-cadrage.md)
3. [Référentiel design Figma (Studio Preview)](docs/03-referentiel-design-figma.md)
4. [Modèle de nœuds et parcours](docs/04-modele-noeuds-et-parcours.md)
5. [Benchmark et inspirations](docs/05-benchmark-et-inspirations.md)
6. [Principes UX et agent IA](docs/06-principes-ux-et-ia.md)
7. [Roadmap prototype](docs/07-roadmap-prototype.md)
8. [Guide pour agents IA (build)](docs/08-guide-agents-ia.md)

## Rôles dans le projet

| Rôle | Responsabilité |
|------|----------------|
| **Design / produit (Miguel)** | Vision, Figma Studio Preview, nœuds, revues UX, prompts de build |
| **Agent cloud (repo)** | Implémentation UI prototype, itérations guidées par Figma + docs |
| **Ce dépôt** | Source de vérité **textuelle** : cadrage, décisions, contraintes — pas encore le code applicatif final |

## Principes directeurs (résumé)

- **Canvas nodal** + **toolbox** + **panneaux** (exécution, capture, ressources) + **agent conversationnel** intégré.
- Héritage fonctionnel **Ekara** (parcours multi-canal, debug, exécution pas à pas), ouverture **Uptrends** / **ITRS**, UX moderne type **Zapier / Luma Lab**.
- Le prototype peut diverger de la DA Ekara ; le nom cible produit est **ITRS Studio**.

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) — shell Studio (header, sidebar, canvas vide, bouton **AI assistant** → panneau chat).

## Licence / confidentialité

Contenu interne ITRS Group / ip-label. Ne pas publier en open source sans validation juridique et marketing.
