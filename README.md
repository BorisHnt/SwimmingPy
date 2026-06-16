# Piscine Python - Recap

Site statique local pour réviser les notions vues pendant la Piscine Python.

## Objectif

- garder un notebook de révision simple ;
- afficher les projets dans l'ordre ;
- commencer par `00 - Préambule` pour les outils et réflexes ;
- réviser par petites notions ;
- chercher rapidement une notion ;
- activer un mode lecture assistée.

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

Chaque notion peut contenir :

- une description ;
- une raison pratique ;
- un exemple ;
- une erreur fréquente ;
- une façon de la reconnaître ;
- un bon réflexe ;
- un mémo.

Le fichier `scripts/data.js` sert de secours quand le site est ouvert en `file://`, car certains navigateurs bloquent le chargement de JSON local.

## Regles de contenu

Les exemples sont originaux et courts.

Les sujets officiels ne sont pas inclus, pas liés, et pas recopiés.
