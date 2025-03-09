## Librairies tierces

- Prisma : cette librarie va servir à faire la liaison entre notre API et la base de données.
  Exemple d'utilisation [ici](https://www.prisma.io/docs/getting-started)

- swagger-jsdoc: npm install swagger-jsdoc,
- swagger-ui-express: npm install swagger-ui-express
- bcryptjs: npm install bcryptjs
- jsonwebtoken: npm install jsonwebtoken

## Structure

- src : le code source

- docs/*.js : contient la documentation en openapi3 avec swagger

- test : via postman (pas réussi à cause des contraintes d'installation du logiciel)

## Dossier src

Le dossier *src* a été créé en pensant séparation des responsabilités

- **main.ts :** point d'entrée de l'app

- **config.ts :** les variables d'env de l'app

- **infrastructure :** les dépendances externe de l'app

- **contexts :** les contexts de l'app

## Executer le projet
> à priori les étapes (1 à 3) ne sont pas nécessaires puisque vous recevez directement le *.zip* de notre répertoire de travail en local et non pas télécharger sur github par exemple. Si toutefois les fichiers concernés sont absents, vous devez exécuter les étapes ci-dessous:
1. créer un fichier **.env** en copiant le fichier **.env.example** à la racine du dossier back:
```bash 
cp .env.example .env
```

2. ajouter cette ligne au fichier **.env**:
```bash
JWT_SECRET="th3-n06l3st-4rt-is-th4t-0f-m4king-0th3rs-h4ppy"
```

3. créer un fichier **.env.local** en copiant le fichier **.env.example**
```bash 
cp .env.example .env.local
```

4. pour générer la configuration prisma exécuter la commande :
```bash
yarn db:generate
```

5. pour exécuter les fichiers de migration prisma dans une bdd sqlite, exécuter la commande:
```bash
yarn db:migrate
```

6. pour installer les dépendances de l'application, exécuter:
```bash
npm install
```

7. lancer le projet avec la commande : 
```bash
yarn serve
```

