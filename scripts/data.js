window.PISCINE_PROJECTS_FALLBACK = [
  {
    "id": "preambule",
    "number": "00",
    "title": "00 - Préambule",
    "name": "Préambule",
    "shortTitle": "00 Préambule",
    "navTitle": "Préambule",
    "summary": "Les outils et réflexes avant de coder. Cette page sert de point de contrôle quand un problème ne vient pas de la notion Python elle-même.",
    "status": "Base de révision",
    "focus": "Outils & réflexes",
    "objectives": [
      "Lancer un fichier Python sans deviner.",
      "Lire les erreurs au lieu de les subir.",
      "Garder un projet propre et partageable.",
      "Distinguer code qui marche et code maintenable."
    ],
    "concepts": [
      {
        "id": "lancer-un-fichier-python",
        "title": "Lancer un fichier Python",
        "level": "base",
        "tags": [
          "python",
          "terminal",
          "exécution"
        ],
        "description": [
          "Un fichier Python se lance depuis le terminal avec python ou python3.",
          "La commande doit viser le bon fichier et partir du bon dossier.",
          "Si le fichier utilise des imports locaux, la racine de lancement compte beaucoup.",
          "Avant de chercher une erreur complexe, vérifie toujours où tu es dans le terminal."
        ],
        "whyItMatters": [
          "Beaucoup de bugs viennent seulement d'une mauvaise commande.",
          "Savoir relancer vite permet de tester petit à petit."
        ],
        "code": "python3 main.py",
        "output": "",
        "commonMistake": "Lancer le fichier depuis un autre dossier que celui attendu.",
        "howToSpot": "Python dit que le fichier ou un module est introuvable.",
        "fix": "Utilise pwd, ls, puis relance depuis la racine du projet.",
        "memo": "Avant de corriger le code, vérifie la commande."
      },
      {
        "id": "interpreteur-python",
        "title": "Comprendre l'interpréteur Python",
        "level": "base",
        "tags": [
          "interpréteur",
          "exécution"
        ],
        "description": [
          "Python lit le fichier de haut en bas.",
          "Les définitions de fonctions et classes sont mémorisées.",
          "Le code hors fonction est exécuté directement au chargement.",
          "Un import peut donc lancer du code si le fichier importé n'est pas protégé."
        ],
        "whyItMatters": [
          "Ce modèle explique beaucoup d'effets surprises.",
          "Il aide à comprendre pourquoi l'ordre des lignes compte."
        ],
        "code": "def hello() -> None:\n    print(\"hello\")\n\nprint(\"ready\")\nhello()",
        "output": "ready\nhello",
        "commonMistake": "Mettre du code de test au niveau global dans un module importé.",
        "howToSpot": "Un import affiche quelque chose ou lance un traitement sans appel explicite.",
        "fix": "Place les tests sous if __name__ == \"__main__\" quand c'est pertinent.",
        "memo": "Importer un fichier, c'est aussi le lire."
      },
      {
        "id": "indentation",
        "title": "Indentation",
        "level": "base",
        "tags": [
          "syntax",
          "blocs",
          "pep8"
        ],
        "description": [
          "L'indentation dit à Python quelles lignes appartiennent au même bloc.",
          "Elle remplace les accolades que d'autres langages utilisent.",
          "Un décalage change le sens du programme.",
          "Quatre espaces par niveau restent le réflexe le plus lisible."
        ],
        "whyItMatters": [
          "Une mauvaise indentation peut casser le programme ou changer sa logique.",
          "Les correcteurs et linters repèrent vite ce problème."
        ],
        "code": "if True:\n    print(\"inside\")\nprint(\"after\")",
        "output": "inside\nafter",
        "commonMistake": "Mélanger tabulations et espaces.",
        "howToSpot": "Python signale IndentationError ou le bloc ne se comporte pas comme prévu.",
        "fix": "Configure ton éditeur pour insérer quatre espaces.",
        "memo": "En Python, l'espace fait partie du code."
      },
      {
        "id": "commentaires-utiles",
        "title": "Commentaires utiles",
        "level": "base",
        "tags": [
          "commentaires",
          "lisibilité"
        ],
        "description": [
          "Un bon commentaire explique pourquoi une ligne existe.",
          "Il ne répète pas ce que le code dit déjà.",
          "Il aide surtout quand une décision peut surprendre.",
          "Un code clair avec peu de commentaires vaut mieux qu'un code confus très commenté."
        ],
        "whyItMatters": [
          "Pendant une défense, tu dois expliquer tes choix.",
          "Un commentaire utile te rappelle le contexte sans cacher la logique."
        ],
        "code": "# Keep the default small so tests stay fast.\nlimit = 10",
        "output": "",
        "commonMistake": "Écrire un commentaire qui paraphrase le code.",
        "howToSpot": "Le commentaire reste vrai même si tu supprimes la ligne suivante.",
        "fix": "Commente l'intention, le compromis, ou la limite connue.",
        "memo": "Commente le pourquoi, pas le bruit."
      },
      {
        "id": "print-vs-return",
        "title": "print vs return",
        "level": "base",
        "tags": [
          "fonctions",
          "tests",
          "debug"
        ],
        "description": [
          "print affiche une information dans le terminal.",
          "return renvoie une valeur au reste du programme.",
          "Une fonction peut afficher quelque chose sans rien renvoyer.",
          "Une fonction peut aussi renvoyer une valeur sans rien afficher.",
          "Dans les exercices, confondre les deux crée souvent des sorties incorrectes."
        ],
        "whyItMatters": [
          "Les tests automatiques vérifient souvent la valeur renvoyée.",
          "Si tu utilises print au lieu de return, le résultat peut sembler bon à l'écran mais être faux pour le programme."
        ],
        "code": "def double(number: int) -> int:\n    return number * 2\n\nresult = double(4)\nprint(result)",
        "output": "8",
        "commonMistake": "Mettre print(number * 2) dans la fonction au lieu de return number * 2.",
        "howToSpot": "Le terminal affiche bien quelque chose, mais la fonction renvoie None.",
        "fix": "Demande-toi si la fonction doit parler à l'écran ou donner une valeur au programme.",
        "memo": "print parle au terminal. return parle au code."
      },
      {
        "id": "lire-traceback",
        "title": "Lire une erreur Python et le traceback",
        "level": "base",
        "tags": [
          "debug",
          "traceback",
          "erreurs"
        ],
        "description": [
          "Un traceback montre le chemin suivi avant l'erreur.",
          "La dernière ligne donne souvent le type d'erreur et le message.",
          "Les lignes au-dessus indiquent les fichiers et numéros de ligne.",
          "Lis de bas en haut quand tu veux trouver le point de départ utile."
        ],
        "whyItMatters": [
          "Le traceback est une carte, pas juste un message rouge.",
          "Il évite de corriger au hasard."
        ],
        "code": "value = int(\"abc\")",
        "output": "ValueError: invalid literal for int() with base 10: ...",
        "commonMistake": "Lire seulement la premiere ligne du traceback.",
        "howToSpot": "Tu modifies une ligne qui n'est pas celle mentionnée par l'erreur.",
        "fix": "Repère le type d'erreur, puis le premier fichier qui appartient à ton code.",
        "memo": "Le traceback indique où regarder avant de dire quoi corriger."
      },
      {
        "id": "venv-pip-requirements",
        "title": "venv, pip et requirements.txt",
        "level": "base",
        "tags": [
          "venv",
          "pip",
          "requirements.txt"
        ],
        "description": [
          "Un environnement virtuel isole les paquets du projet.",
          "pip installe les dépendances dans cet environnement.",
          "requirements.txt garde la liste des paquets nécessaires.",
          "Le dossier du venv ne doit pas être commité."
        ],
        "whyItMatters": [
          "Ton projet doit pouvoir marcher sur une autre machine.",
          "Sans isolation, deux projets peuvent demander des versions incompatibles."
        ],
        "code": "python3 -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt",
        "output": "",
        "commonMistake": "Installer un paquet dans le Python global au lieu du venv.",
        "howToSpot": "pip affiche une installation réussie mais python ne trouve pas le module.",
        "fix": "Active le venv, vérifie which python, puis réinstalle.",
        "memo": "On partage requirements.txt, pas le dossier .venv."
      },
      {
        "id": "mypy-flake8-formatter",
        "title": "mypy, flake8 et formatter",
        "level": "base",
        "tags": [
          "mypy",
          "flake8",
          "formatter"
        ],
        "description": [
          "mypy vérifie la cohérence des types.",
          "flake8 signale des problèmes de style ou de qualité.",
          "Un formatter comme autopep8 remet le code en forme.",
          "Ces outils ne remplacent pas la compréhension, mais ils attrapent beaucoup d'oublis."
        ],
        "whyItMatters": [
          "Un code propre se relit plus vite pendant une évaluation.",
          "Les erreurs simples doivent être corrigées avant les vrais bugs."
        ],
        "code": "mypy main.py\nflake8 main.py\nautopep8 --in-place main.py",
        "output": "",
        "commonMistake": "Lancer un formatter sans relire le résultat.",
        "howToSpot": "Le code passe le formatter mais ne fait plus exactement ce que tu pensais.",
        "fix": "Formate, relis le diff, puis relance les tests.",
        "memo": "Les outils nettoient. Toi, tu valides le sens."
      },
      {
        "id": "structure-projet",
        "title": "Structure minimale d'un projet",
        "level": "base",
        "tags": [
          "projet",
          "README.md",
          ".gitignore"
        ],
        "description": [
          "Un petit projet doit rester facile à ouvrir.",
          "README.md explique le but et comment lancer.",
          ".gitignore évite de suivre les fichiers temporaires.",
          "Des noms simples de fichiers aident les imports et la correction."
        ],
        "whyItMatters": [
          "Une structure claire fait gagner du temps à toi et aux correcteurs.",
          "Elle réduit les erreurs de chemin et d'import."
        ],
        "code": "project/\n  README.md\n  .gitignore\n  main.py\n  tests/",
        "output": "",
        "commonMistake": "Mettre caches, venv ou fichiers locaux dans git.",
        "howToSpot": "git status affiche .venv, __pycache__ ou des fichiers générés.",
        "fix": "Ajoute ces chemins dans .gitignore et garde seulement les sources utiles.",
        "memo": "Un repo doit expliquer, lancer, et rester propre."
      },
      {
        "id": "shell-env-proprete",
        "title": "Shell, variables d'environnement et code propre",
        "level": "base",
        "tags": [
          "shell",
          "env",
          "propreté"
        ],
        "description": [
          "Le shell sert à naviguer, lancer et inspecter le projet.",
          "Les variables d'environnement configurent sans modifier le code.",
          "Un code qui marche une fois n'est pas toujours un code propre.",
          "Un code propre a des noms clairs, peu de duplication, et des erreurs lisibles."
        ],
        "whyItMatters": [
          "La Piscine demande souvent de comprendre vite ce qui se passe.",
          "Les bons réflexes évitent de perdre du temps sur des détails évitables."
        ],
        "code": "pwd\nls\nAPP_MODE=dev python3 main.py",
        "output": "",
        "commonMistake": "Écrire une valeur locale directement dans le code.",
        "howToSpot": "Tu dois modifier le fichier juste pour changer un chemin, une clé ou un mode.",
        "fix": "Lis la valeur avec os.getenv et documente le nom dans le README.",
        "memo": "Ce qui change selon la machine ne doit pas être bloqué dans le code."
      }
    ]
  },
  {
    "id": "growing-code",
    "number": "01",
    "title": "01 - Growing Code",
    "name": "Growing Code",
    "shortTitle": "01 Growing",
    "navTitle": "Growing Code",
    "summary": "Le départ du parcours. On revoit les bases : fonctions, variables, conditions et boucles.",
    "status": "Code présent",
    "focus": "Bases Python",
    "objectives": [
      "Revoir les notions centrales : bases Python.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "fonctions-return",
        "title": "Fonctions et return",
        "level": "base",
        "tags": [
          "fonctions",
          "return",
          "tests"
        ],
        "description": [
          "Une fonction range une action dans un nom.",
          "return renvoie une valeur au code qui appelle la fonction.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def double(number: int) -> int:\n    return number * 2\n\nprint(double(4))",
        "output": "8",
        "commonMistake": "Afficher avec print au lieu de renvoyer avec return.",
        "howToSpot": "La console affiche une valeur, mais un test indique que la fonction renvoie None.",
        "fix": "Décide si la fonction doit afficher ou renvoyer. Pour un calcul, préfère return.",
        "memo": "print parle à l'écran. return parle au programme."
      },
      {
        "id": "conditions",
        "title": "Conditions",
        "level": "base",
        "tags": [
          "conditions",
          "indentation",
          "logique"
        ],
        "description": [
          "Une condition choisit un chemin.",
          "Le bloc indenté s'exécute seulement si le test est vrai.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "water = 3\n\nif water <= 0:\n    print(\"empty\")\nelse:\n    print(\"ready\")",
        "output": "ready",
        "commonMistake": "Oublier les deux-points après if ou else.",
        "howToSpot": "Le code attendu ne se lance jamais, ou Python signale une erreur de syntaxe près du if.",
        "fix": "Lis le test comme une phrase et vérifie les deux-points et l'indentation.",
        "memo": "if pose une question. Le bloc donne la réponse."
      },
      {
        "id": "boucles",
        "title": "Boucles",
        "level": "base",
        "tags": [
          "boucles",
          "listes",
          "itération"
        ],
        "description": [
          "Une boucle répète une action.",
          "for sert quand on connaît une séquence à parcourir.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "plants = [\"basil\", \"mint\", \"sage\"]\n\nfor plant in plants:\n    print(plant)",
        "output": "basil\nmint\nsage",
        "commonMistake": "Modifier une liste pendant qu'on la parcourt.",
        "howToSpot": "La boucle saute des éléments, tourne trop longtemps, ou modifie une liste au mauvais moment.",
        "fix": "Parcours une copie si tu dois modifier la collection, ou construis une nouvelle liste.",
        "memo": "for lit chaque élément, un par un."
      },
      {
        "id": "type-hints",
        "title": "Type hints",
        "level": "base",
        "tags": [
          "type hints",
          "mypy",
          "lisibilité"
        ],
        "description": [
          "Les annotations indiquent les types attendus.",
          "Elles aident la lecture et les outils comme mypy.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def greet(name: str) -> str:\n    return \"Hello \" + name",
        "output": "Hello Ada",
        "commonMistake": "Croire que les annotations bloquent toujours le programme.",
        "howToSpot": "mypy ou ton éditeur montre un type incohérent entre paramètre, retour et valeur utilisée.",
        "fix": "Aligne les annotations avec ce que la fonction utilise vraiment.",
        "memo": "Le type hint est un panneau. Python continue souvent sa route."
      }
    ]
  },
  {
    "id": "code-cultivation",
    "number": "02",
    "title": "02 - CodeCultivation",
    "name": "CodeCultivation",
    "shortTitle": "02 POO",
    "navTitle": "CodeCultivation",
    "summary": "On passe aux objets. Les classes servent à regrouper données et comportements.",
    "status": "Code présent",
    "focus": "POO",
    "objectives": [
      "Revoir les notions centrales : poo.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "classes",
        "title": "Classes",
        "level": "base",
        "tags": [
          "classes",
          "objets",
          "self"
        ],
        "description": [
          "Une classe est un modèle.",
          "Elle permet de créer plusieurs objets avec la même forme.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "class Plant:\n    def __init__(self, name: str) -> None:\n        self.name = name\n\nbasil = Plant(\"Basil\")\nprint(basil.name)",
        "output": "Basil",
        "commonMistake": "Oublier self dans les méthodes.",
        "howToSpot": "Python indique qu'un argument manque, souvent self, ou que l'attribut n'existe pas.",
        "fix": "Mets self en premier paramètre des méthodes d'instance.",
        "memo": "La classe est le moule. L'objet est ce qu'on fabrique."
      },
      {
        "id": "attributs-methodes",
        "title": "Attributs et méthodes",
        "level": "base",
        "tags": [
          "attributs",
          "méthodes",
          "self"
        ],
        "description": [
          "Un attribut garde une donnée.",
          "Une méthode fait une action avec l'objet.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "class Counter:\n    def __init__(self) -> None:\n        self.value = 0\n\n    def add_one(self) -> None:\n        self.value += 1\n\ncounter = Counter()\ncounter.add_one()\nprint(counter.value)",
        "output": "1",
        "commonMistake": "Utiliser une variable locale au lieu de self.value.",
        "howToSpot": "La valeur semble modifiée dans la méthode, puis revient à son ancien état.",
        "fix": "Stocke l'état durable dans self.nom, pas dans une variable locale.",
        "memo": "self garde la mémoire de l'objet."
      },
      {
        "id": "heritage-super",
        "title": "Héritage et super()",
        "level": "base",
        "tags": [
          "héritage",
          "super",
          "poo"
        ],
        "description": [
          "Une classe peut reprendre le code d'une autre.",
          "super() appelle la version du parent.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "class Animal:\n    def speak(self) -> str:\n        return \"sound\"\n\nclass Cat(Animal):\n    def speak(self) -> str:\n        return super().speak() + \" meow\"\n\nprint(Cat().speak())",
        "output": "sound meow",
        "commonMistake": "Réécrire tout le parent alors qu'un appel à super suffit.",
        "howToSpot": "Le code du parent n'est plus exécuté, ou des attributs initialisés par le parent manquent.",
        "fix": "Appelle super() quand tu veux garder l'initialisation ou le comportement du parent.",
        "memo": "L'enfant peut garder le parent, puis ajouter sa touche."
      }
    ]
  },
  {
    "id": "garden-guardian",
    "number": "03",
    "title": "03 - Garden Guardian",
    "name": "Garden Guardian",
    "shortTitle": "03 Erreurs",
    "navTitle": "Garden Guardian",
    "summary": "Ce projet sert à rendre le code plus robuste. On apprend à gérer les erreurs sans cacher les vrais problèmes.",
    "status": "Code présent",
    "focus": "Erreurs",
    "objectives": [
      "Revoir les notions centrales : erreurs.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "try-except",
        "title": "try / except",
        "level": "base",
        "tags": [
          "exceptions",
          "try",
          "except"
        ],
        "description": [
          "try tente une opération risquée.",
          "except gère une erreur précise si elle arrive.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "text = \"42\"\n\ntry:\n    value = int(text)\n    print(value)\nexcept ValueError:\n    print(\"not a number\")",
        "output": "42",
        "commonMistake": "Attraper Exception partout sans savoir pourquoi.",
        "howToSpot": "Une vraie erreur disparaît, ou le message affiché ne dit pas ce qui a cassé.",
        "fix": "Attrape l'exception précise et garde un message utile pour comprendre.",
        "memo": "Attrape l'erreur attendue, pas tout le ciel."
      },
      {
        "id": "raise",
        "title": "raise",
        "level": "base",
        "tags": [
          "exceptions",
          "raise",
          "validation"
        ],
        "description": [
          "raise signale qu'une donnée est invalide.",
          "Le programme appelant peut alors réagir.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def set_age(age: int) -> int:\n    if age < 0:\n        raise ValueError(\"age must be positive\")\n    return age",
        "output": "",
        "commonMistake": "Renvoyer None pour une erreur qui doit être visible.",
        "howToSpot": "Le programme continue avec une valeur invalide et casse plus loin.",
        "fix": "Refuse tôt les données invalides avec une exception claire.",
        "memo": "raise dit clairement : ici, ça ne passe pas."
      },
      {
        "id": "finally",
        "title": "finally",
        "level": "base",
        "tags": [
          "exceptions",
          "cleanup",
          "finally"
        ],
        "description": [
          "finally s'exécute après try et except.",
          "Il sert surtout au nettoyage.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "try:\n    print(\"work\")\nfinally:\n    print(\"clean\")",
        "output": "work\ncléan",
        "commonMistake": "Mettre la logique principale dans finally.",
        "howToSpot": "Une action principale se lance même quand le try a échoué.",
        "fix": "Garde finally pour libérer une ressource ou afficher une fin de traitement.",
        "memo": "finally range la table, même si le repas a raté."
      }
    ]
  },
  {
    "id": "data-archivist",
    "number": "04",
    "title": "04 - Data Archivist",
    "name": "Data Archivist",
    "shortTitle": "04 Fichiers",
    "navTitle": "Data Archivist",
    "summary": "On manipule des fichiers et des flux. Le but est de lire, écrire et fermer proprement.",
    "status": "Code présent",
    "focus": "Fichiers",
    "objectives": [
      "Revoir les notions centrales : fichiers.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "lecture-fichier",
        "title": "Lire un fichier",
        "level": "base",
        "tags": [
          "fichiers",
          "open",
          "read"
        ],
        "description": [
          "open ouvre un fichier.",
          "read récupère son contenu sous forme de texte.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "file = open(\"notes.txt\", \"r\", encoding=\"utf-8\")\ntext = file.read()\nfile.close()\nprint(text)",
        "output": "",
        "commonMistake": "Oublier de fermer le fichier après la lecture.",
        "howToSpot": "Le fichier reste verrouillé, ou une erreur arrive après plusieurs exécutions.",
        "fix": "Utilise with dès que possible pour fermer automatiquement le fichier.",
        "memo": "Ouvrir un fichier crée une responsabilité."
      },
      {
        "id": "with-fichier",
        "title": "with",
        "level": "base",
        "tags": [
          "fichiers",
          "with",
          "contexte"
        ],
        "description": [
          "with ferme le fichier automatiquement.",
          "C'est la forme la plus propre pour lire ou écrire.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"revision\")",
        "output": "",
        "commonMistake": "Utiliser file après la fin du bloc with.",
        "howToSpot": "Tu essaies de lire ou écrire hors du bloc with.",
        "fix": "Fais toute la lecture ou écriture dans le bloc indenté.",
        "memo": "Dans with, le fichier est ouvert. Après, il est fermé."
      },
      {
        "id": "erreurs-fichier",
        "title": "Erreurs de fichier",
        "level": "base",
        "tags": [
          "fichiers",
          "exceptions",
          "chemins"
        ],
        "description": [
          "Un fichier peut manquer.",
          "Il faut prévoir ce cas pour éviter un crash sec.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "try:\n    with open(\"missing.txt\", \"r\", encoding=\"utf-8\") as file:\n        print(file.read())\nexcept FileNotFoundError:\n    print(\"file not found\")",
        "output": "file not found",
        "commonMistake": "Supposer que le fichier existe toujours.",
        "howToSpot": "Le programme marche chez toi, puis casse quand le fichier manque ailleurs.",
        "fix": "Prévois FileNotFoundError ou vérifie le chemin avant la lecture.",
        "memo": "Un chemin est une hypothèse, pas une garantie."
      }
    ]
  },
  {
    "id": "data-quest",
    "number": "05",
    "title": "05 - Data Quest",
    "name": "Data Quest",
    "shortTitle": "05 Data",
    "navTitle": "Data Quest",
    "summary": "On travaille les structures de données. Les listes, dictionnaires et générateurs deviennent des outils de tri.",
    "status": "Code présent",
    "focus": "Collections",
    "objectives": [
      "Revoir les notions centrales : collections.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "listes",
        "title": "Listes",
        "level": "base",
        "tags": [
          "listes",
          "compréhension",
          "collections"
        ],
        "description": [
          "Une liste garde plusieurs valeurs dans l'ordre.",
          "On peut la parcourir, filtrer, ou transformer.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "scores = [4, 8, 2]\npassed = [score for score in scores if score >= 5]\nprint(passed)",
        "output": "[8]",
        "commonMistake": "Confondre l'index et la valeur.",
        "howToSpot": "Le résultat contient les mauvais éléments ou les index ne correspondent pas aux valeurs.",
        "fix": "Nomme clairement la variable de boucle et teste avec une petite liste.",
        "memo": "La liste est une file ordonnée."
      },
      {
        "id": "dictionnaires",
        "title": "Dictionnaires",
        "level": "base",
        "tags": [
          "dictionnaires",
          "clés",
          "collections"
        ],
        "description": [
          "Un dictionnaire relie une clé à une valeur.",
          "Il sert quand un nom doit retrouver une donnée.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "stock = {\"tea\": 3, \"rice\": 1}\nstock[\"tea\"] += 1\nprint(stock[\"tea\"])",
        "output": "4",
        "commonMistake": "Lire une clé qui n'existe pas.",
        "howToSpot": "Python lève KeyError, ou une clé ressemble presque à celle que tu voulais.",
        "fix": "Utilise in ou get quand une clé peut manquer.",
        "memo": "La clé est l'adresse. La valeur est ce qu'on y trouve."
      },
      {
        "id": "generateurs",
        "title": "Générateurs",
        "level": "base",
        "tags": [
          "générateurs",
          "yield",
          "itération"
        ],
        "description": [
          "Un générateur produit les valeurs une par une.",
          "yield suspend la fonction sans tout stocker.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def count_to_three():\n    for number in range(1, 4):\n        yield number\n\nfor value in count_to_three():\n    print(value)",
        "output": "1\n2\n3",
        "commonMistake": "Croire qu'un générateur est une liste déjà remplie.",
        "howToSpot": "Tu affiches l'objet générateur au lieu de parcourir ses valeurs.",
        "fix": "Parcours le générateur avec for ou transforme-le en liste seulement si nécessaire.",
        "memo": "yield donne une valeur, puis garde la place."
      }
    ]
  },
  {
    "id": "code-nexus",
    "number": "06",
    "title": "06 - Code Nexus",
    "name": "Code Nexus",
    "shortTitle": "06 ABC",
    "navTitle": "Code Nexus",
    "summary": "On organise des traitements avec des classes compatibles. Le même appel peut fonctionner sur plusieurs types d'objets.",
    "status": "Code présent",
    "focus": "ABC & polymorphisme",
    "objectives": [
      "Revoir les notions centrales : abc & polymorphisme.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "classes-abstraites",
        "title": "Classes abstraites",
        "level": "intermédiaire",
        "tags": [
          "abc",
          "classes abstraites",
          "contrat"
        ],
        "description": [
          "Une classe abstraite définit un contrat.",
          "Les enfants doivent fournir les méthodes demandées.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "from abc import ABC, abstractmethod\n\nclass Processor(ABC):\n    @abstractmethod\n    def run(self, text: str) -> str:\n        pass",
        "output": "",
        "commonMistake": "Instancier directement une classe abstraite.",
        "howToSpot": "Python refuse de créer l'objet car une méthode abstraite manque.",
        "fix": "Implémente toutes les méthodes marquées abstractmethod dans les classes enfants.",
        "memo": "L'abstrait dit quoi faire. L'enfant dit comment."
      },
      {
        "id": "polymorphisme",
        "title": "Polymorphisme",
        "level": "intermédiaire",
        "tags": [
          "polymorphisme",
          "interfaces",
          "poo"
        ],
        "description": [
          "Des objets différents peuvent partager la même méthode.",
          "Le code appelant reste simple.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "class Upper:\n    def run(self, text: str) -> str:\n        return text.upper()\n\nclass Lower:\n    def run(self, text: str) -> str:\n        return text.lower()\n\nfor tool in [Upper(), Lower()]:\n    print(tool.run(\"Py\"))",
        "output": "PY\npy",
        "commonMistake": "Tester le type partout au lieu de faire confiance à la méthode.",
        "howToSpot": "Le code contient beaucoup de if type(...) au lieu d'appeler la même méthode.",
        "fix": "Donne le même nom de méthode aux objets compatibles et appelle cette méthode.",
        "memo": "Même bouton, machines différentes."
      },
      {
        "id": "pipeline",
        "title": "Pipeline",
        "level": "base",
        "tags": [
          "pipeline",
          "fonctions",
          "data"
        ],
        "description": [
          "Un pipeline enchaîne plusieurs traitements.",
          "Chaque étape reçoit le résultat de la précédente.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def strip_text(text: str) -> str:\n    return text.strip()\n\ndef shout(text: str) -> str:\n    return text.upper()\n\nvalue = shout(strip_text(\"  hi  \"))\nprint(value)",
        "output": "HI",
        "commonMistake": "Mélanger toutes les étapes dans une seule grosse fonction.",
        "howToSpot": "Une étape attend un format différent de celui produit par l'étape précédente.",
        "fix": "Documente le format d'entrée et de sortie de chaque étape.",
        "memo": "Un pipeline avance par petites transformations."
      }
    ]
  },
  {
    "id": "the-codex",
    "number": "07",
    "title": "07 - The Codex",
    "name": "The Codex",
    "shortTitle": "07 Imports",
    "navTitle": "The Codex",
    "summary": "Ce sujet sert de repère pour les modules et packages. Le code local n'est pas encore présent dans le dossier analyse.",
    "status": "Sujet présent, code non détecté",
    "focus": "Imports & packages",
    "objectives": [
      "Revoir les notions centrales : imports & packages.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "modules",
        "title": "Modules",
        "level": "base",
        "tags": [
          "modules",
          "imports",
          "organisation"
        ],
        "description": [
          "Un module est un fichier Python importable.",
          "Il range des fonctions ou des classes réutilisables.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "# tools.py\ndef add(a: int, b: int) -> int:\n    return a + b\n\n# main.py\nfrom tools import add\nprint(add(2, 3))",
        "output": "5",
        "commonMistake": "Exécuter du code au chargement du module sans le vouloir.",
        "howToSpot": "Un import lance du code tout seul ou provoque une boucle d'imports.",
        "fix": "Protège le code de test avec if __name__ == \"__main__\".",
        "memo": "Un module est une boîte à outils."
      },
      {
        "id": "packages",
        "title": "Packages",
        "level": "base",
        "tags": [
          "packages",
          "__init__.py",
          "imports"
        ],
        "description": [
          "Un package est un dossier de modules.",
          "__init__.py contrôle ce que le dossier expose.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "from toolkit.maths import add\n\nprint(add(1, 2))",
        "output": "3",
        "commonMistake": "Oublier que le chemin d'import dépend du dossier de lancement.",
        "howToSpot": "Python dit ModuleNotFoundError alors que le fichier existe dans le projet.",
        "fix": "Lance le script depuis la racine attendue et garde des noms de dossiers clairs.",
        "memo": "Le package donne une adresse aux fichiers Python."
      },
      {
        "id": "imports",
        "title": "Imports",
        "level": "base",
        "tags": [
          "imports",
          "modules",
          "path"
        ],
        "description": [
          "import charge un module.",
          "from ... import ... prend un nom précis dans ce module.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "import math\nfrom pathlib import Path\n\nprint(math.sqrt(9))\nprint(Path(\"notes.txt\").suffix)",
        "output": "3.0\n.txt",
        "commonMistake": "Donner le même nom à son fichier qu'un module standard.",
        "howToSpot": "Le mauvais module est chargé, souvent à cause d'un nom de fichier trop générique.",
        "fix": "Évite les noms comme math.py, typing.py ou random.py pour tes fichiers.",
        "memo": "L'import indique à Python où chercher le code."
      }
    ]
  },
  {
    "id": "data-deck",
    "number": "08",
    "title": "08 - DataDeck",
    "name": "DataDeck",
    "shortTitle": "08 Patterns",
    "navTitle": "DataDeck",
    "summary": "Ce sujet prolonge la POO avec des patrons simples. Il aide à séparer création, capacités et stratégies.",
    "status": "Sujet présent, code non détecté",
    "focus": "Patterns POO",
    "objectives": [
      "Revoir les notions centrales : patterns poo.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "factory",
        "title": "Factory",
        "level": "base",
        "tags": [
          "factory",
          "création",
          "patterns"
        ],
        "description": [
          "Une factory crée des objets pour le reste du code.",
          "Le code appelant connaît moins les classes concrètes.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "class User:\n    def __init__(self, name: str) -> None:\n        self.name = name\n\ndef create_user(name: str) -> User:\n    return User(name)\n\nprint(create_user(\"Ada\").name)",
        "output": "Ada",
        "commonMistake": "Mettre trop de logique métier dans la factory.",
        "howToSpot": "Le code appelant connaît toutes les classes concrètes et devient difficile à changer.",
        "fix": "Laisse la factory créer. Garde les règles métier ailleurs.",
        "memo": "La factory fabrique. Elle ne doit pas tout décider."
      },
      {
        "id": "interfaces-capacites",
        "title": "Interfaces de capacité",
        "level": "base",
        "tags": [
          "interfaces",
          "capacités",
          "abc"
        ],
        "description": [
          "Une capacité décrit ce qu'un objet sait faire.",
          "Elle évite de forcer tous les objets à tout avoir.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "class CanLog:\n    def log(self, message: str) -> None:\n        print(message)\n\nlogger = CanLog()\nlogger.log(\"ready\")",
        "output": "ready",
        "commonMistake": "Hériter d'une classe juste pour partager un nom.",
        "howToSpot": "Une classe hérite juste pour récupérer un nom, sans vrai comportement commun.",
        "fix": "Hérite seulement quand le comportement commun est réel.",
        "memo": "Une capacité répond à la question : que sait faire cet objet ?"
      },
      {
        "id": "strategy",
        "title": "Stratégie",
        "level": "base",
        "tags": [
          "stratégie",
          "patterns",
          "comportement"
        ],
        "description": [
          "Une stratégie déplace un choix dans un objet.",
          "On peut changer le comportement sans changer le reste.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def loud(text: str) -> str:\n    return text.upper()\n\ndef apply(text: str, strategy) -> str:\n    return strategy(text)\n\nprint(apply(\"go\", loud))",
        "output": "GO",
        "commonMistake": "Utiliser une grande chaîne de if au lieu d'une stratégie.",
        "howToSpot": "Un gros bloc if choisit le comportement à chaque appel.",
        "fix": "Isole chaque comportement dans une fonction ou une classe stratégie.",
        "memo": "La stratégie est le plan choisi pour agir."
      }
    ]
  },
  {
    "id": "funcmage",
    "number": "09",
    "title": "09 - FuncMage",
    "name": "FuncMage",
    "shortTitle": "09 Fonctions",
    "navTitle": "FuncMage",
    "summary": "Ce sujet regroupe les outils fonctionnels. Les fonctions deviennent des valeurs que l'on passe, stocke et transforme.",
    "status": "Sujet présent, code non détecté",
    "focus": "Fonctions avancées",
    "objectives": [
      "Revoir les notions centrales : fonctions avancées.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "lambda",
        "title": "lambda",
        "level": "base",
        "tags": [
          "lambda",
          "tri",
          "fonctionnel"
        ],
        "description": [
          "lambda crée une petite fonction anonyme.",
          "Elle est utile pour trier ou transformer rapidement.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "names = [\"zoe\", \"ada\", \"lin\"]\nprint(sorted(names, key=lambda name: len(name)))",
        "output": "['ada', 'lin', 'zoe']",
        "commonMistake": "Utiliser lambda pour une logique trop longue.",
        "howToSpot": "La lambda devient difficile à lire ou contient trop de logique.",
        "fix": "Passe à une fonction def dès que la logique a besoin d'un nom ou de plusieurs lignes.",
        "memo": "lambda tient sur une idée courte."
      },
      {
        "id": "closures",
        "title": "Closures",
        "level": "base",
        "tags": [
          "closures",
          "scope",
          "mémoire"
        ],
        "description": [
          "Une closure garde une variable de son contexte.",
          "Elle permet de créer une fonction avec mémoire.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def make_prefix(prefix: str):\n    def add_prefix(text: str) -> str:\n        return prefix + text\n    return add_prefix\n\nstar = make_prefix(\"* \")\nprint(star(\"note\"))",
        "output": "* note",
        "commonMistake": "Utiliser une variable globale alors qu'une closure suffit.",
        "howToSpot": "Une valeur globale change les résultats de plusieurs fonctions sans que ce soit clair.",
        "fix": "Garde la mémoire dans la closure quand elle appartient à la fonction créée.",
        "memo": "La fonction se souvient de l'endroit où elle est née."
      },
      {
        "id": "decorateurs",
        "title": "Décorateurs",
        "level": "intermédiaire",
        "tags": [
          "décorateurs",
          "wrapper",
          "fonctions"
        ],
        "description": [
          "Un décorateur enveloppe une fonction.",
          "Il ajoute un comportement sans changer son appel.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "def announce(func):\n    def wrapper():\n        print(\"start\")\n        func()\n    return wrapper\n\n@announce\ndef work():\n    print(\"work\")\n\nwork()",
        "output": "start\nwork",
        "commonMistake": "Oublier de renvoyer wrapper dans le décorateur.",
        "howToSpot": "La fonction décorée perd son nom, sa doc, ou ne s'exécute plus.",
        "fix": "Retourne bien le wrapper et utilise functools.wraps quand c'est autorisé.",
        "memo": "Le décorateur ajoute une couche autour de la fonction."
      }
    ]
  },
  {
    "id": "the-matrix",
    "number": "10",
    "title": "10 - The Matrix",
    "name": "The Matrix",
    "shortTitle": "10 Env",
    "navTitle": "The Matrix",
    "summary": "Ce sujet sort du code pur. Il couvre l'environnement de travail, les dépendances et la configuration.",
    "status": "Sujet présent, code non détecté",
    "focus": "Outils projet",
    "objectives": [
      "Revoir les notions centrales : outils projet.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "venv",
        "title": "Environnement virtuel",
        "level": "intermédiaire",
        "tags": [
          "venv",
          "environnement",
          "shell"
        ],
        "description": [
          "Un environnement virtuel isole les paquets Python.",
          "Il évite de casser le Python global.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "python3 -m venv .venv\nsource .venv/bin/activate\npython --version",
        "output": "",
        "commonMistake": "Installer les dépendances sans activer le venv.",
        "howToSpot": "pip installe un paquet, mais python ne le trouve pas au lancement.",
        "fix": "Active le venv avant pip install et avant de lancer le programme.",
        "memo": "Un venv est une salle séparée pour ton projet."
      },
      {
        "id": "requirements",
        "title": "requirements.txt",
        "level": "intermédiaire",
        "tags": [
          "pip",
          "requirements.txt",
          "dépendances"
        ],
        "description": [
          "Ce fichier liste les dépendances pip.",
          "Il permet de reconstruire le même environnement.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "pip install -r requirements.txt\npip freeze > requirements.txt",
        "output": "",
        "commonMistake": "Commiter le dossier du venv au lieu de commiter la liste.",
        "howToSpot": "Le projet marche sur ta machine mais pas sur une autre installation.",
        "fix": "Mets à jour requirements.txt quand tu ajoutes une dépendance.",
        "memo": "On partage la recette, pas toute la cuisine."
      },
      {
        "id": "variables-env",
        "title": "Variables d'environnement",
        "level": "intermédiaire",
        "tags": [
          "env",
          ".env",
          "configuration"
        ],
        "description": [
          "Une variable d'environnement configure le programme.",
          "Elle évite d'écrire des secrets dans le code.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "import os\n\nmode = os.getenv(\"APP_MODE\", \"dev\")\nprint(mode)",
        "output": "dev",
        "commonMistake": "Commiter un vrai fichier .env avec des secrets.",
        "howToSpot": "Un secret apparaît dans git, ou le programme dépend d'une valeur écrite en dur.",
        "fix": "Versionne .env.example, ignore .env, et lis les valeurs avec os.getenv.",
        "memo": ".env.example montre les noms. .env garde les valeurs."
      }
    ]
  },
  {
    "id": "cosmic-data",
    "number": "11",
    "title": "11 - Cosmic Data",
    "name": "Cosmic Data",
    "shortTitle": "11 Pydantic",
    "navTitle": "Cosmic Data",
    "summary": "Ce sujet introduit Pydantic. On décrit les données attendues, puis Pydantic valide et convertit.",
    "status": "Sujet présent, code non détecté",
    "focus": "Validation des données",
    "objectives": [
      "Revoir les notions centrales : validation des données.",
      "Identifier les erreurs fréquentes avant une évaluation.",
      "Garder un exemple minimal sous la main."
    ],
    "concepts": [
      {
        "id": "basemodel-field",
        "title": "BaseModel et Field",
        "level": "intermédiaire",
        "tags": [
          "pydantic",
          "basemodel",
          "field"
        ],
        "description": [
          "BaseModel crée un modèle valide.",
          "Field ajoute des règles sur une donnée.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "from pydantic import BaseModel, Field\n\nclass Item(BaseModel):\n    name: str\n    quantity: int = Field(ge=0)\n\nprint(Item(name=\"book\", quantity=\"2\"))",
        "output": "name='book' quantity=2",
        "commonMistake": "Oublier que Pydantic peut convertir certains types.",
        "howToSpot": "Pydantic accepte ou refuse une valeur que tu pensais différente.",
        "fix": "Teste les cas limites pour comprendre les conversions et contraintes.",
        "memo": "Le modèle décrit la forme. Pydantic vérifie l'entrée."
      },
      {
        "id": "model-validator",
        "title": "model_validator",
        "level": "intermédiaire",
        "tags": [
          "pydantic",
          "validation",
          "model_validator"
        ],
        "description": [
          "Un validateur vérifie une règle entre plusieurs champs.",
          "Il sert quand un seul type ne suffit pas.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "from pydantic import BaseModel, model_validator\n\nclass Range(BaseModel):\n    start: int\n    end: int\n\n    @model_validator(mode=\"after\")\n    def check_order(self):\n        if self.end < self.start:\n            raise ValueError(\"end must be after start\")\n        return self",
        "output": "",
        "commonMistake": "Utiliser une ancienne forme de validateur avec Pydantic v2.",
        "howToSpot": "Chaque champ est valide seul, mais l'ensemble des champs n'a pas de sens.",
        "fix": "Place les règles entre champs dans un validateur du modèle.",
        "memo": "Le validateur regarde l'objet complet."
      },
      {
        "id": "modeles-imbriques",
        "title": "Modèles imbriqués",
        "level": "intermédiaire",
        "tags": [
          "pydantic",
          "modèles",
          "imbrication"
        ],
        "description": [
          "Un modèle peut contenir un autre modèle.",
          "Cela structure les données complexes par petits morceaux.",
          "Garde cette notion en version simple avant de chercher une solution plus élégante.",
          "Un petit exemple fiable vaut mieux qu'une grande explication floue."
        ],
        "whyItMatters": [
          "Cette notion revient souvent dans les exercices et les corrections.",
          "Elle aide à produire un code plus facile à tester et à relire."
        ],
        "code": "from pydantic import BaseModel\n\nclass User(BaseModel):\n    name: str\n\nclass Team(BaseModel):\n    members: list[User]\n\nteam = Team(members=[{\"name\": \"Ada\"}])\nprint(team.members[0].name)",
        "output": "Ada",
        "commonMistake": "Valider une grosse structure sans la découper.",
        "howToSpot": "Une grosse structure devient impossible à lire ou à tester en une seule classe.",
        "fix": "Découpe les données en modèles plus petits avec des noms clairs.",
        "memo": "Un grand schéma devient plus clair avec de petits modèles."
      }
    ]
  }
];
