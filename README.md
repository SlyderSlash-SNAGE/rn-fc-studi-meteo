# Projet Meteo Full Coaching Studi

Bonjour et bienvenue dans ce project-learning FC Studi, dans ce repo se trouvera le code du projet.

## Comment l'exploiter ?
Il suffit de cloner le repository puis se positionner dessus avec :
`cd meteo`

ensuite installer les dépendances avec :
`npm i` ou `npm install`

et vous pourrez ensuite lancer le serveur avec :
`npm run start`

## Qu'avons nous vue lors des lives ?

### Live 1

Nous avons mis à jour node.js et npm, notamment grâce à NVM et n

##### nvm pour Windows

NVM peut être installé depuis l'adresse suivante :

Ensuite dans le terminal, il suffit d'installer la version LTS ( Long Term Support ) avec la commande :
`nvm install lts`
Puis la séléctionner comme version à utiliser :
`nvm use lts`

! Attention, vous devez ouvrir le terminal avec des droits admin

##### n pour macOS et Linux

Pour installer n, vous devez directement passer par npm avec la commande terminal suivante :
`sudo npm i -g n` ou `sudo npm install -g n`
Puis installer la version lts avec la commande :
`sudo n install lts`
Cette dernière sera défini par défaut.

Vous pourrez toujours la modifier grâce à la commande :
`sudo n`
Puis en séléctionnant la version voulue

##### Create Expo App
Nous avons aussi vue comment démarrer un projet avec Expo :
`npx create-expo-app meteo`
Puis valider en appuyant sur entrer et entrer dans le dossier avec :
`cd meteo`

##### Fichier de base CEA

Nous avons regarder les fichiers de base créé par create-expo-app, la doc d'expo fourni les explications suivants :
> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

##### Fonctionnement de run start

Nous avons vue le fonctionnement de `npm run start`, notamment avec un appareil externe et un émulateur

> L'émulateur pourra émuler des appels, notifications, position et autres éléments exterieurs mais sera toujours moins précis qu'un véritable appareil

##### Documentation Expo

Nous avons regardé la documentation expo

> Certaines fonctionnalité ne fonctionne pas sur tous les support ( émulateur ou non, mobile ou web )
> La documentation contient des exemples de code
> Dans un composant, certaine fonction ou propriété peuvent être spécifique à une plateforme


## Et ensuite ?

N'hésitez pas à notre vos questions afin de pouvoir y répondre lors du prochain live

## Allez plus loin
Pour voir un peu plus loin sur les applications mobiles avec React vous pouvez regarder :
> Les applications avec react-native ( sans Expo )
> Les dérivés de react-native comme renative
> Les solutions concurentes comme Ionic