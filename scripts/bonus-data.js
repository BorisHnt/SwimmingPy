window.PISCINE_BONUS_PROJECTS = [
  {
    "id": "bonus-exam-python",
    "number": "99",
    "title": "99 - Bonus Exam Python",
    "name": "Bonus",
    "shortTitle": "99 Bonus",
    "navTitle": "Bonus",
    "summary": "Une zone de révision orientée exercices d'exam. Le but n'est pas d'apprendre des corrections par cœur, mais de reconnaître les familles de problèmes, choisir la bonne structure, tester les cas limites, et expliquer son raisonnement proprement.",
    "status": "Bonus",
    "focus": "Exercices d'exam",
    "objectives": [
      "Identifier rapidement la famille d'un exercice : chaîne, liste, matrice, pile, tri, graphe ou programmation dynamique.",
      "Savoir écrire une solution courte, lisible, testable, sans dépendre d'un exemple appris par cœur.",
      "Préparer les cas limites avant de coder : vide, taille 1, doublons, casse, caractères non alphabétiques, dimensions invalides.",
      "Comprendre le coût de la solution pour éviter une approche trop lente quand l'entrée grandit."
    ],
    "bonusLevels": [
      {
        "number": "01",
        "shortTitle": "Basic",
        "title": "Niveau 01 - Basic",
        "status": "Disponible",
        "anchor": "bonus-basic",
        "summary": "Chaînes, listes, piles, slicing, tri simple, matrices et petits algorithmes de parcours."
      },
      {
        "number": "02",
        "shortTitle": "Medium",
        "title": "Niveau 02 - Medium",
        "status": "Disponible",
        "anchor": "bonus-medium",
        "summary": "Ensembles, fenêtres glissantes, dépendances, rotations, programmation dynamique et complexité."
      },
      {
        "number": "03",
        "shortTitle": "Challenging",
        "title": "Niveau 03 - Challenging",
        "status": "À compléter",
        "anchor": "bonus-challenging",
        "summary": "Emplacement prévu pour les prochains exercices : récursivité, backtracking, graphes et recherche."
      },
      {
        "number": "04",
        "shortTitle": "In Depth",
        "title": "Niveau 04 - In Depth",
        "status": "À compléter",
        "anchor": "bonus-in-depth",
        "summary": "Emplacement prévu pour les sujets longs : stratégie, robustesse, tests et optimisation."
      }
    ],
    "concepts": [
      {
        "id": "bonus-basic",
        "title": "Niveau 01 - Basic : ce que ce niveau vérifie",
        "level": "level 01",
        "tags": [
          "exam",
          "basic",
          "méthode"
        ],
        "description": [
          "Les exercices basic demandent surtout de manipuler proprement des chaînes, des listes, des index et des conditions. La difficulté ne vient pas d'une grosse architecture, mais de petits détails : une casse oubliée, un espace à ignorer, une rotation dans le mauvais sens, ou un dernier élément qui n'est jamais traité.",
          "La bonne méthode consiste à écrire d'abord la signature attendue, puis deux ou trois exemples à la main. Avant de coder, il faut être capable de dire ce qui entre, ce qui sort, et ce qui doit se passer sur une entrée vide ou très courte.",
          "Ce niveau récompense les solutions lisibles. Une boucle claire avec un nom de variable précis vaut mieux qu'une ligne compacte impossible à défendre. Les one-liners sont utiles seulement si tu comprends exactement la structure produite."
        ],
        "whyItMatters": [
          "Les exercices courts sont souvent corrigés par des tests de bord.",
          "Une solution qui marche seulement sur l'exemple visible peut échouer sur la casse, les espaces, les doublons ou les entrées vides."
        ],
        "code": "tests = [\"\", \"a\", \"Aa 12\", \"race car\"]\nfor value in tests:\n    print(value)",
        "output": "",
        "commonMistake": "Coder directement sur l'exemple sans identifier les cas limites.",
        "howToSpot": "Ton code marche sur l'exemple du sujet, mais tu ne sais pas quoi répondre pour une chaîne vide ou une liste d'un seul élément.",
        "fix": "Écris trois tests minuscules avant la solution : normal, vide, et cas piégeux.",
        "memo": "En exam, un petit exercice se gagne souvent sur les bords."
      },
      {
        "id": "chaines-normalisation-slicing",
        "title": "Chaînes : normaliser, découper, reconstruire",
        "level": "level 01",
        "tags": [
          "str",
          "slicing",
          "join",
          "palindrome"
        ],
        "description": [
          "Beaucoup d'exercices de chaînes demandent de comparer une version transformée du texte plutôt que le texte brut. Par exemple, pour reconnaître un palindrome tolérant aux espaces ou à la casse, il faut d'abord construire une forme normalisée : espaces retirés, casse harmonisée, puis comparaison avec l'inverse.",
          "Le slicing est un outil central : `text[::-1]` inverse une chaîne, `text[start:end]` prend une tranche, et `items[a:] + items[:a]` reconstruit une rotation. Ce n'est pas magique : le premier nombre est le début, le second est la fin exclue, et le troisième est le pas.",
          "`join` est le réflexe propre quand tu as accumulé des caractères dans une liste. Concaténer une chaîne dans une boucle peut passer sur de petits tests, mais une liste puis `''.join(result)` est plus clair sur l'intention : je fabrique des morceaux, puis je les colle."
        ],
        "whyItMatters": [
          "Les exercices comme palindrome, alternance de casse ou chiffrement reposent sur ces opérations.",
          "La normalisation évite de mélanger le vrai problème avec du bruit de format."
        ],
        "code": "cleaned = \"\".join(\"Race car\".split()).lower()\nprint(cleaned == cleaned[::-1])",
        "output": "True",
        "commonMistake": "Comparer le texte original alors que le sujet attend une comparaison normalisée.",
        "howToSpot": "Les exemples avec espaces, majuscules ou ponctuation échouent alors que les exemples simples passent.",
        "fix": "Sépare la préparation de la donnée et la logique principale dans deux étapes visibles.",
        "memo": "Nettoie d'abord, raisonne ensuite."
      },
      {
        "id": "boucles-index-et-voisins",
        "title": "Boucles indexées et caractères voisins",
        "level": "level 01",
        "tags": [
          "range",
          "index",
          "isdigit"
        ],
        "description": [
          "Quand un exercice demande de détecter un motif entre deux caractères voisins, il faut parcourir jusqu'à `len(s) - 1`, pas jusqu'à `len(s)`. À chaque tour, tu lis `s[i]` et `s[i + 1]`. Le dernier index autorisé pour `i + 1` est donc `len(s) - 1`, ce qui impose à `i` de s'arrêter juste avant.",
          "La vérification du type de caractère doit venir avant la conversion. Si tu fais `int(char)` sur une lettre, Python lève une erreur. Le bon réflexe est donc : je vérifie avec `isdigit()`, puis seulement je convertis en entier.",
          "Ces exercices sont très sensibles aux chaînes trop courtes. Une chaîne vide ou de longueur 1 ne doit pas provoquer d'accès hors limite ; la boucle doit simplement ne jamais tourner."
        ],
        "whyItMatters": [
          "Les erreurs d'index sont parmi les bugs les plus fréquents dans les exercices courts.",
          "Comprendre la borne de fin permet de coder sans ajouter des conditions partout."
        ],
        "code": "for i in range(len(text) - 1):\n    left = text[i]\n    right = text[i + 1]",
        "output": "",
        "commonMistake": "Parcourir toute la chaîne puis lire `s[i + 1]` au dernier tour.",
        "howToSpot": "Python affiche IndexError sur les chaînes courtes ou au dernier caractère.",
        "fix": "Si tu lis un voisin à droite, limite la boucle à `range(len(s) - 1)`.",
        "memo": "Lire deux cases demande de s'arrêter une case plus tôt."
      },
      {
        "id": "pile-validateur-parentheses",
        "title": "Pile : valider parenthèses, crochets et accolades",
        "level": "level 01",
        "tags": [
          "stack",
          "list",
          "brackets"
        ],
        "description": [
          "Une pile sert quand le dernier élément ouvert doit être le premier fermé. Pour les parenthèses, chaque ouvrant est empilé. Quand tu rencontres un fermant, tu regardes le sommet de pile : s'il correspond, tu le retires ; sinon la chaîne est invalide.",
          "Le piège classique est de seulement compter le nombre d'ouvrants et de fermants. Cette approche échoue sur `([)]` : il y a le bon nombre de symboles, mais le mauvais ordre. La pile garde justement l'ordre d'imbrication.",
          "En Python, une liste suffit pour une pile simple : `append` ajoute au sommet, `pop` retire le sommet, et `stack[-1]` lit le sommet sans le retirer. Il faut toujours vérifier que la pile n'est pas vide avant d'accéder à `stack[-1]`."
        ],
        "whyItMatters": [
          "La pile revient dans les validateurs, les parsers simples et certains parcours.",
          "Elle force à raisonner sur l'ordre, pas seulement sur les quantités."
        ],
        "code": "pairs = {')': '(', ']': '[', '}': '{'}\nstack = []",
        "output": "",
        "commonMistake": "Compter les symboles sans vérifier leur ordre.",
        "howToSpot": "`([)]` est accepté alors qu'il devrait être refusé.",
        "fix": "Utilise une pile et compare chaque fermant avec le dernier ouvrant.",
        "memo": "Dernier ouvert, premier fermé."
      },
      {
        "id": "ascii-modulo-base",
        "title": "ASCII, modulo et conversion de base",
        "level": "level 01",
        "tags": [
          "ord",
          "chr",
          "modulo",
          "base"
        ],
        "description": [
          "Les exercices de chiffrement type César utilisent souvent `ord` et `chr`. `ord('a')` donne le code numérique d'une lettre, `chr(97)` redonne une lettre. Pour décaler dans l'alphabet, on ramène la lettre entre 0 et 25, on ajoute le décalage, puis on applique `% 26` pour revenir au début après `z`.",
          "La conversion de base repose sur deux idées. Pour lire un nombre depuis une base, Python sait déjà faire avec `int(value, base)`. Pour écrire un nombre dans une autre base, on répète des divisions : le reste donne le chiffre de droite, puis on divise le nombre par la base jusqu'à tomber à zéro.",
          "Le modulo est donc un outil de boucle circulaire. Il sert pour l'alphabet, les rotations, les index qui reviennent au début, et les conversions numériques."
        ],
        "whyItMatters": [
          "Le modulo évite des conditions longues pour gérer le retour au début.",
          "Comprendre la conversion de base aide à ne pas seulement copier une formule."
        ],
        "code": "index = (ord('z') - ord('a') + 3) % 26\nprint(chr(index + ord('a')))",
        "output": "c",
        "commonMistake": "Décaler les lettres sans gérer le dépassement après z ou Z.",
        "howToSpot": "Le chiffrement produit des caractères non alphabétiques en fin d'alphabet.",
        "fix": "Travaille sur un index 0..25, applique `% 26`, puis reconvertis.",
        "memo": "Modulo transforme une ligne droite en cercle."
      },
      {
        "id": "listes-matrices-rotations-fusions",
        "title": "Listes, matrices, rotations et fusions",
        "level": "level 01",
        "tags": [
          "list",
          "matrix",
          "rotation",
          "merge"
        ],
        "description": [
          "Une matrice est une liste de lignes. Inverser une matrice peut vouloir dire inverser l'ordre des lignes, inverser chaque ligne, ou les deux. Il faut donc traduire précisément le sujet : miroir horizontal, miroir vertical, rotation, ou simple lecture à l'envers.",
          "Pour les rotations de liste, le slicing est souvent le plus direct : une rotation est une découpe en deux morceaux puis une inversion de leur ordre. Il faut seulement décider si l'on décale vers la gauche ou vers la droite, et réduire le décalage avec `% len(lst)` pour éviter de faire mille tours inutiles.",
          "La fusion de listes triées peut se faire avec deux pointeurs : un index dans chaque liste, on prend le plus petit élément disponible, puis on avance l'index correspondant. C'est une notion importante parce qu'elle montre la différence entre utiliser `sorted(a + b)` et exploiter le fait que les listes sont déjà triées."
        ],
        "whyItMatters": [
          "Ces exercices vérifient si tu comprends la structure des données, pas seulement les fonctions Python.",
          "Les listes vides et les tailles différentes sont les premiers pièges à tester."
        ],
        "code": "rotated = values[-shift:] + values[:-shift]\nmerged = sorted(left + right)",
        "output": "",
        "commonMistake": "Confondre rotation à gauche et rotation à droite.",
        "howToSpot": "Les bons éléments sont présents, mais pas dans le bon ordre.",
        "fix": "Dessine une petite liste `[1, 2, 3, 4]` et fais la rotation à la main avant de coder.",
        "memo": "Quand l'ordre compte, dessine les index."
      },
      {
        "id": "tri-key-stabilite",
        "title": "Tri, key et stabilité",
        "level": "level 01",
        "tags": [
          "sort",
          "sorted",
          "key"
        ],
        "description": [
          "`sorted(values)` renvoie une nouvelle liste triée. `values.sort()` modifie la liste existante et renvoie `None`. Cette différence est fondamentale en exam : si tu fais `return values.sort()`, tu renvoies `None`, pas la liste.",
          "Le paramètre `key` permet de trier selon une règle : longueur, casse ignorée, valeur absolue, etc. Python calcule la clé pour comparer les éléments, mais garde les éléments originaux dans le résultat.",
          "Le tri Python est stable : si deux éléments ont la même clé, leur ordre relatif est conservé. Cela permet de faire plusieurs tris successifs en partant du critère secondaire puis du critère principal. C'est utile pour les exercices qui demandent de trier par longueur puis par ordre alphabétique, ou l'inverse."
        ],
        "whyItMatters": [
          "Beaucoup d'exercices de tri tiennent en une bonne clé bien choisie.",
          "La stabilité évite d'écrire un comparateur compliqué."
        ],
        "code": "words = [\"bb\", \"A\", \"aa\"]\nprint(sorted(words, key=str.lower))",
        "output": "['A', 'aa', 'bb']",
        "commonMistake": "Renvoyer le résultat de `list.sort()`.",
        "howToSpot": "La fonction renvoie `None` alors que la liste a bien été modifiée.",
        "fix": "Utilise `sorted` si tu veux retourner une liste, ou appelle `sort` puis retourne la liste.",
        "memo": "`sort` agit. `sorted` produit."
      },
      {
        "id": "bonus-medium",
        "title": "Niveau 02 - Medium : passer de l'astuce au raisonnement",
        "level": "level 02",
        "tags": [
          "exam",
          "medium",
          "complexité"
        ],
        "description": [
          "Les exercices medium ressemblent encore à des petits problèmes, mais ils demandent de choisir une stratégie. Une solution brute peut passer sur un exemple court et devenir mauvaise sur une entrée plus grande. Il faut donc commencer à penser en coût : combien de boucles, combien de copies, combien de recherches dans une liste.",
          "Le réflexe important est de choisir la structure qui rend l'opération centrale naturelle. Si tu dois tester l'appartenance souvent, un `set` est meilleur qu'une liste. Si tu dois garder un ordre de dépendances, pense graphe ou tri topologique. Si tu dois minimiser un nombre de coupes, pense programmation dynamique.",
          "À ce niveau, les tests doivent inclure un cas normal, un cas impossible, un cas vide, et un cas avec doublons ou cycle selon le sujet."
        ],
        "whyItMatters": [
          "Le medium vérifie la capacité à reconnaître un patron algorithmique.",
          "Choisir la bonne structure réduit souvent le code au lieu de le compliquer."
        ],
        "code": "seen = set(values)\nprint(item in seen)",
        "output": "",
        "commonMistake": "Garder une liste et faire des recherches répétées dedans.",
        "howToSpot": "La solution contient des boucles imbriquées alors que le problème parle surtout d'appartenance.",
        "fix": "Transforme les collections de référence en `set` quand l'ordre n'a pas besoin d'être testé.",
        "memo": "La bonne structure fait disparaître la moitié du problème."
      },
      {
        "id": "ensembles-intersection-ordre",
        "title": "Ensembles et intersection en gardant l'ordre",
        "level": "level 02",
        "tags": [
          "set",
          "intersection",
          "ordre"
        ],
        "description": [
          "Un `set` permet de tester l'appartenance très vite et de calculer une intersection avec `&`. Mais un ensemble ne garde pas l'ordre utile pour l'affichage final. Si le sujet demande de rendre les éléments communs dans l'ordre de la première liste, il faut combiner les deux mondes.",
          "La méthode propre est souvent : calculer l'ensemble des éléments présents partout, puis reparcourir la première liste pour reconstruire une sortie ordonnée. Cela évite de perdre l'ordre tout en profitant de la vitesse des ensembles.",
          "Attention aux doublons : certains sujets veulent les conserver, d'autres veulent des valeurs uniques. Cette phrase doit être lue explicitement. Si rien n'est clair, teste mentalement `[1, 1, 2]`."
        ],
        "whyItMatters": [
          "C'est un classique des exercices d'intersection de listes.",
          "Il force à distinguer calcul interne et format de sortie."
        ],
        "code": "common = set(first)\nfor values in others:\n    common &= set(values)\nordered = [item for item in first if item in common]",
        "output": "",
        "commonMistake": "Retourner directement un `set`, donc perdre l'ordre attendu.",
        "howToSpot": "Le contenu est correct, mais l'ordre de sortie change selon les exécutions ou ne respecte pas le sujet.",
        "fix": "Utilise le set pour décider, puis une liste pour produire la réponse.",
        "memo": "Set pour savoir vite, liste pour rendre propre."
      },
      {
        "id": "fenetre-glissante",
        "title": "Fenêtre glissante et maximums locaux",
        "level": "level 02",
        "tags": [
          "sliding window",
          "complexité",
          "deque"
        ],
        "description": [
          "Une fenêtre glissante est un morceau de taille fixe qui se déplace dans une liste. Pour une liste de taille `n` et une fenêtre de taille `k`, il y a `n - k + 1` fenêtres. La version simple consiste à prendre chaque tranche `arr[i:i+k]` puis à calculer son maximum.",
          "Cette version simple coûte environ `O(n * k)`, car chaque maximum relit une fenêtre entière. Pour les petits exercices, cela peut suffire. Pour de grosses entrées, on utilise une `deque` pour garder les candidats au maximum et obtenir une solution `O(n)`.",
          "Le plus important en exam est de savoir expliquer la différence. Si le sujet ne donne pas de très grosses tailles, une solution claire avec slicing peut passer. Si les tailles sont grandes, il faut éviter de recalculer le même travail à chaque fenêtre."
        ],
        "whyItMatters": [
          "La fenêtre glissante revient dès qu'on parle de sous-tableaux contigus.",
          "Elle introduit naturellement la question de complexité."
        ],
        "code": "windows = [arr[i:i + k] for i in range(len(arr) - k + 1)]",
        "output": "",
        "commonMistake": "Oublier que la dernière fenêtre commence à `len(arr) - k`.",
        "howToSpot": "Il manque le dernier résultat ou il y a une fenêtre trop courte.",
        "fix": "Utilise `range(len(arr) - k + 1)` et teste avec `len(arr) == k`.",
        "memo": "Nombre de fenêtres = longueur moins taille de fenêtre plus un."
      },
      {
        "id": "rotations-circulaires",
        "title": "Rotations circulaires et comparaison de listes",
        "level": "level 02",
        "tags": [
          "rotation",
          "circular array",
          "any"
        ],
        "description": [
          "Deux listes sont des rotations l'une de l'autre si on peut couper la première en deux morceaux et les inverser pour obtenir la seconde. Par exemple, `[1, 2, 3, 4]` devient `[3, 4, 1, 2]` après une coupe avant `3`.",
          "La méthode lisible consiste à essayer chaque coupe possible : `arr1[i:] + arr1[:i] == arr2`. Avec `any`, tu exprimes directement : est-ce qu'au moins une coupe fonctionne ?",
          "Avant de tester les rotations, compare les longueurs. Deux listes de tailles différentes ne peuvent pas être des rotations. Pour les listes vides, il faut décider le comportement attendu ; souvent deux listes vides sont considérées comme compatibles."
        ],
        "whyItMatters": [
          "Les rotations mélangent slicing, égalité de listes et cas limites.",
          "C'est un bon exercice pour apprendre à raisonner sur toutes les positions de coupe."
        ],
        "code": "same = len(a) == len(b) and any(a[i:] + a[:i] == b for i in range(len(a)))",
        "output": "",
        "commonMistake": "Tester seulement une rotation basée sur la position du minimum.",
        "howToSpot": "La solution échoue avec des doublons ou des listes sans ordre naturel.",
        "fix": "Teste toutes les coupes, ou utilise une méthode plus robuste si le sujet l'autorise.",
        "memo": "Une rotation, c'est une coupe possible parmi plusieurs."
      },
      {
        "id": "dependances-paquets-topologie",
        "title": "Dépendances de paquets et tri topologique",
        "level": "level 02",
        "tags": [
          "dépendances",
          "graphe",
          "topological sort"
        ],
        "description": [
          "Un exercice d'installation de paquets cache souvent un graphe orienté. Si `A` dépend de `B`, alors `B` doit être installé avant `A`. L'ordre de sortie doit donc respecter toutes les dépendances.",
          "Une approche simple consiste à garder deux collections : les paquets déjà installés, et ceux qui restent. À chaque passage, tu installes tous les paquets dont les dépendances sont déjà dans `installed`. Si un passage complet n'installe rien alors qu'il reste des paquets, il y a probablement un cycle ou une dépendance impossible.",
          "`all(...)` est très utile ici : il permet d'exprimer clairement que toutes les dépendances d'un paquet doivent être satisfaites. Le point critique est de détecter le blocage, sinon la boucle peut devenir infinie."
        ],
        "whyItMatters": [
          "Cette famille d'exercices prépare aux graphes sans forcément utiliser une structure de graphe explicite.",
          "Elle apprend à détecter les cycles et les états impossibles."
        ],
        "code": "if all(dep in installed for dep in dependencies):\n    installed.add(package)",
        "output": "",
        "commonMistake": "Boucler tant qu'il reste des paquets sans vérifier qu'on progresse.",
        "howToSpot": "Le programme ne termine jamais sur un cycle de dépendances.",
        "fix": "Mémorise le nombre de paquets restants au début du tour et arrête si ce nombre ne diminue pas.",
        "memo": "Dans une boucle de résolution, vérifie toujours que tu avances."
      },
      {
        "id": "programmation-dynamique-palindromes",
        "title": "Programmation dynamique : coupes minimales en palindromes",
        "level": "level 02",
        "tags": [
          "dynamic programming",
          "palindrome",
          "minimum"
        ],
        "description": [
          "La programmation dynamique sert quand un problème peut être découpé en sous-problèmes qui se répètent. Pour les coupes minimales en palindromes, on cherche la meilleure réponse pour chaque préfixe de la chaîne : combien de morceaux palindromes faut-il pour les `i` premiers caractères ?",
          "L'idée est de tester chaque dernière tranche possible. Si `s[j:i]` est un palindrome, alors une solution pour `s[:j]` peut être prolongée avec ce morceau. On prend le minimum parmi toutes les possibilités.",
          "Le détail qui piège souvent est la différence entre nombre de morceaux et nombre de coupes. Si une chaîne est découpée en 3 morceaux, elle a 2 coupes. C'est pour cela qu'on voit parfois un `-1` à la fin : on a compté les morceaux, puis on convertit en coupes."
        ],
        "whyItMatters": [
          "C'est l'une des premières vraies notions algorithmiques du niveau medium.",
          "Elle apprend à stocker des résultats intermédiaires au lieu de tout recalculer."
        ],
        "code": "dp = [float('inf')] * (n + 1)\ndp[0] = 0",
        "output": "",
        "commonMistake": "Compter les morceaux et oublier de convertir en nombre de coupes.",
        "howToSpot": "Le résultat est systématiquement trop grand de 1.",
        "fix": "Clarifie ce que contient `dp` : morceaux ou coupes, puis ajuste une seule fois.",
        "memo": "En DP, nomme précisément ce que chaque case représente."
      },
      {
        "id": "coordonnees-matrices",
        "title": "Coordonnées, matrices et représentation texte",
        "level": "level 02",
        "tags": [
          "matrix",
          "coordinates",
          "grid"
        ],
        "description": [
          "Quand un exercice demande de placer des points dans une grille, il faut distinguer ligne et colonne. Une matrice Python se lit souvent `matrix[row][column]`. Si le sujet parle de coordonnées `(x, y)`, vérifie si `x` représente la ligne ou la colonne dans l'énoncé.",
          "La construction propre commence par une grille remplie d'un caractère par défaut, puis on remplace certaines cases par le symbole demandé. Les bornes doivent être vérifiées avant l'écriture : une coordonnée négative ou trop grande ne doit pas casser le programme si le sujet demande de l'ignorer.",
          "Pour produire un affichage lisible, on transforme chaque ligne de liste en chaîne avec `''.join(row)`. On obtient alors une liste de chaînes, plus facile à comparer dans des tests."
        ],
        "whyItMatters": [
          "Les erreurs ligne/colonne sont très fréquentes dans les exercices de grille.",
          "La séparation construire puis afficher rend le code plus simple à vérifier."
        ],
        "code": "grid = [['.' for _ in range(size)] for _ in range(size)]\nlines = [''.join(row) for row in grid]",
        "output": "",
        "commonMistake": "Inverser ligne et colonne sans s'en rendre compte.",
        "howToSpot": "Les points sont placés symétriquement au mauvais endroit.",
        "fix": "Écris un test avec un point non symétrique, par exemple `(0, 2)` dans une grille 3x3.",
        "memo": "En matrice Python : d'abord la ligne, ensuite la colonne."
      },
      {
        "id": "bonus-challenging",
        "title": "Niveau 03 - Challenging : emplacement prêt",
        "level": "level 03",
        "tags": [
          "à venir",
          "challenging"
        ],
        "description": [
          "Ce niveau est prêt pour les prochains exercices. Les notions probables à renforcer ici seront la récursivité, le backtracking, les parcours de graphes, les files, les piles explicites, et les stratégies de recherche.",
          "Même sans les sujets, tu peux déjà préparer le terrain : savoir écrire un cas de base, savoir faire avancer un état, savoir annuler un choix en backtracking, et savoir éviter de revisiter les mêmes états dans un graphe.",
          "Quand les fichiers du niveau 03 seront ajoutés au dossier d'exercices, cette section pourra devenir aussi précise que les deux premiers niveaux."
        ],
        "whyItMatters": [
          "Les niveaux avancés punissent surtout les solutions qui n'ont pas de modèle mental clair.",
          "Préparer les patrons algorithmiques rend les nouveaux sujets moins intimidants."
        ],
        "code": "def search(state):\n    if is_done(state):\n        return state\n    for next_state in neighbours(state):\n        search(next_state)",
        "output": "",
        "commonMistake": "Écrire une récursion sans cas d'arrêt net.",
        "howToSpot": "Le programme boucle jusqu'à RecursionError ou revisite les mêmes états.",
        "fix": "Définis le cas de base, l'avancement, et un ensemble `visited` si nécessaire.",
        "memo": "Une recherche avance, s'arrête, et ne repasse pas partout sans raison."
      },
      {
        "id": "bonus-in-depth",
        "title": "Niveau 04 - In Depth : stratégie d'exam",
        "level": "level 04",
        "tags": [
          "à venir",
          "stratégie",
          "tests"
        ],
        "description": [
          "Ce dernier niveau est prévu pour les exercices plus longs ou plus piégeux. Le sujet peut demander plusieurs étapes : parser une entrée, construire une structure, appliquer un algorithme, puis formater la sortie. La difficulté vient alors de la coordination, pas d'une seule fonction Python.",
          "La stratégie la plus sûre est de découper en petites fonctions testables. Une fonction prépare les données, une autre résout le coeur du problème, une dernière formate le résultat. Quand un test échoue, tu sais quelle zone regarder.",
          "Avant de rendre, relis les contraintes : valeur de retour exacte, mutation ou non de l'entrée, ordre attendu, gestion des erreurs, dépendances autorisées, et complexité raisonnable."
        ],
        "whyItMatters": [
          "Les gros exercices se ratent souvent par manque de découpage.",
          "Une structure simple permet de debugger sous pression."
        ],
        "code": "def solve(raw):\n    data = parse(raw)\n    result = compute(data)\n    return format_result(result)",
        "output": "",
        "commonMistake": "Tout coder dans une seule fonction énorme.",
        "howToSpot": "Tu ne peux pas tester une étape sans lancer tout l'exercice.",
        "fix": "Découpe selon les responsabilités : parse, calcul, formatage.",
        "memo": "Un sujet long se gagne avec des petites pièces fiables."
      }
    ]
  }
];
