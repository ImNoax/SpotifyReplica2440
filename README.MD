# Spotify Clone
Projet complété dans le cadre du cours **LOG2440** .
Ce projet est un clone de Spotify, développé en utilisant les technologies full stack. L'application web comprend une interface utilisateur construite avec ReactJS pour le côté client, tandis que le côté serveur est basé sur NodeJS/Express, avec une base de données MongoDB assurant la persistance des données.

## Structure du Projet
Le code source est organisé en deux applications distinctes : une application ReactJS (site-web) et une application NodeJS/Express (server). L'application React est composée de différentes pages et composants situés dans les répertoires components et pages. Les fichiers statiques se trouvent dans le répertoire `/public`, et le point d'entrée est `index.jsx`.

Le serveur est composé de contrôleurs, de services, et de données par défaut, organisés respectivement dans les répertoires `server/controllers`, `server/services`, et `server/data`. Le fichier `server.js` est le point d'entrée du serveur.

## Configuration de la Base de Données
Une instance MongoDB doit être configurée pour assurer la persistance des données. Utilisez le service Cloud Atlas pour héberger gratuitement une instance de 512 MB. Suivez le guide de configuration disponible sur le GitHub du cours pour configurer votre instance avec Cloud Atlas.

## Installation des Librairies Nécessaires
Pour installer les dépendances du projet, assurez-vous d'avoir NodeJS et npm installés sur votre machine. Une fois installés, exécutez la commande npm ci à la racine de chaque application (`/site-web` et `/server`) pour installer les dépendances définies dans package-lock.json.

## Déploiement Local
Pendant le développement, déployez localement l'application ReactJS et le serveur avec la commande npm start dans chacun des répertoires. L'application React sera accessible à l'adresse `localhost:5010`, et le serveur écoutera sur le port 5020.

## Exécution des Tests
Des tests unitaires pour le serveur sont disponibles dans le répertoire `server/tests`. Utilisez la commande npm test pour exécuter les tests automatisés. Assurez-vous de ne pas vous connecter à votre instance MongoDB en mode production pendant les tests.

## Liste de Chansons
Les fichiers des chansons initiales sont situés dans `assets/media`. Vous pouvez ajouter des chansons supplémentaires en mettant à jour le fichier `songs.json` dans le répertoire data du serveur.

## Corrections
Le projet a été évalué sur différentes exigences, notamment l'implémentation des services du serveur, des composants de pages React, d'autres composants React, la structure du code, et la qualité du code. Consultez le tableau de correction pour plus de détails.

# Correction

| **Exigences**                                 | **Note** | **Points** |
| --------------------------------------------- | :------: | :--------: |
| Implémentation des services du serveur        |    6     |     6      |
| Implémentation des composantes de pages React |    5     |     5      |
| Implémentation des autres composantes React   |    5     |     5      |
| Structure du code                             |    2     |     2      |
| Qualité et clarté du code                     |    2     |     2      |
| **Total**                                     |  **20**   |   **20**   |