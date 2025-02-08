## Librairie tierce

- Prisma : cette librarie va servir à faire la liaison entre notre API et la base de données.
  Exemple d'utilisation [ici](https://www.prisma.io/docs/getting-started)

- swagger-jsdoc: npm install swagger-jsdoc (pas nécessaire après le premier ```npm install```)
- swagger-ui-express: npm install swagger-ui-express

## La structure

- src : le code source

- docs/*.js* : contient la documentation en openapi3 avec swagger

## Structure du dossier src

Le dossier src a été créé en pensant séparation des responsabilités

- main.ts : point d'entrée de l'app
- config.ts : les variables d'env de l'app
- infrastructure : les dépendances externe de l'app
- contexts : les contexts de l'app

## Executer le projet

1. créer un fichier .env en copiant le fichier .env.example
2. créer un fichier .env.local en copiant le fichier .env.example
3. exécuter la commande : yarn db:generate (générera la configuration prisma)
4. exécuter la commande : yarn db:migrate (exécutera les fichiers de migration prisma dans une bdd sqlite)
5. lancer le projet avec la commande : yarn serve

## Pour installer yarn
```npm install yarn``` (pour l'installer localement)
```npm install -g yarn``` (pour l'installer globalement)
