# Piscine Python - Recap

Site statique local pour reviser les notions vues pendant la Piscine Python.

## Objectif

- garder un notebook de revision simple ;
- afficher les projets dans l'ordre ;
- reviser par petites notions ;
- chercher rapidement une notion ;
- activer un mode lecture assistee.

## Lancer le site

Ouverture directe :

```bash
xdg-open index.html
```

Serveur local optionnel :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Donnees

Le contenu principal est dans `data/projects.json`.

Le fichier `scripts/data.js` sert de secours quand le site est ouvert en `file://`, car certains navigateurs bloquent le chargement de JSON local.

## Regles de contenu

Les exemples sont originaux et courts.

Les sujets officiels ne sont pas inclus, pas lies, et pas recopies.
