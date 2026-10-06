# ITRS Studio

Prototype et documentation de conception pour **ITRS Studio** — future expérience unifiée de **création et d’édition de parcours** (monitoring synthétique / user journeys), en remplacement progressif de l’éditeur Blockly d’Ekara Studio.

> **Statut :** phase de cadrage et design-led prototype (vibe coding).  
> **Périmètre design :** canvas Figma **Studio Preview** uniquement (pas l’intégralité du design system Ekara).

## Démo en ligne (GitHub Pages)

**URL cible :** [https://mighumb.github.io/itrs-studio/](https://mighumb.github.io/itrs-studio/)

Le build statique est publié sur la branche **`gh-pages`**. Pour que l’URL fonctionne :

1. **Repo public** — sur compte GitHub gratuit, **GitHub Pages n’est pas disponible pour un repo privé**.  
   → *Settings → General → Danger zone → Change repository visibility → Public*  
   (ou compte **GitHub Pro** / org avec Pages sur repo privé.)
2. **Activer Pages** — *Settings → Pages → Build and deployment → Deploy from a branch*  
   → Branch **`gh-pages`**, dossier **`/ (root)`**, puis Save.
3. Attendre 1–2 minutes et ouvrir l’URL ci-dessus.

Mise à jour du site après changements UI :

```bash
npm run deploy:pages
```

*(nécessite `cross-env` ou définir `GITHUB_PAGES=true` sous Windows avant `npm run build` + `npx gh-pages -d out`.)*

## Liens essentiels

| Ressource | Lien |
|-----------|------|
| Code | [github.com/mighumb/itrs-studio](https://github.com/mighumb/itrs-studio) |
| Figma — Studio Preview | [node 1192:31302](https://www.figma.com/design/Fwn3pUkAQweQvuf2MVnqLH/0.-Design-system?node-id=1192-31302) |
| Figma — écran shell | [7128:1180](https://www.figma.com/design/Fwn3pUkAQweQvuf2MVnqLH/0.-Design-system?node-id=7128-1180) |
| Référence visuelle / tokens | [ITRS DEM prototype](https://itrs-dem-prototype.vercel.app/) |

## Documentation

1. [Contexte et vision](docs/01-contexte-et-vision.md)
2. [Note de cadrage](docs/02-note-de-cadrage.md)
3. [Référentiel design Figma](docs/03-referentiel-design-figma.md)
4. [Modèle de nœuds](docs/04-modele-noeuds-et-parcours.md)
5. [Benchmark](docs/05-benchmark-et-inspirations.md)
6. [Principes UX et IA](docs/06-principes-ux-et-ia.md)
7. [Roadmap prototype](docs/07-roadmap-prototype.md)
8. [Guide agents IA](docs/08-guide-agents-ia.md)

## Licence / confidentialité

Contenu interne ITRS Group / ip-label. Un repo **public** expose le code et la démo ; valider en interne avant de laisser public en permanence.
