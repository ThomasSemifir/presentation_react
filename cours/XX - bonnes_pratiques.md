# Quelques bonnes pratiques

## Les commentaires

Ils sont optionnels; ils permettent de décrire une instruction complexe que l'on peut ne pas comprendre.
Attention à les mettre à jour avec le code

## La documentation

Elle est obligatoire: elle décrit les fonctions métiers et les classes

## Le nommage

Bien nommer les variables : éviter les noms comme a,b, e, env etc ...
Bien choisir le nom des fonctions, quitte à être long.

Plus une fonction est spécialisée (scope réduit) plus son nom est potentiellement long;

## Un composant / une classe par fichier

Permet la réutilisabilité

## immutabilité

Traiter les objets du state comme immutables

## Type de composant

Privilégier les composants stateless (fonction)

## Dépendances

Bien importer les dépendances: les outils de développement doivent être installés avec l'option --save-dev

```bash
npm install --save-dev <dependance>
```

## Structure

React ne préconise aucune structure pour les projets, mais attention lorsque vous le créez
https://reactjs.org/docs/faq-structure.html

### Groupe par routes
Mauvaise idée de base car les composants sont réutilisés pour différentes routes

### Groupe par types
Les composants ensemble, les services ensemble, les pages ensemble, ...
C'est généralement la bonne solution

### Groupe par fonctionnalités
Peut très vite compliquer les choses car le risque est d'avoir de nombreux niveaux d'imbrication

### La meilleure solution:
Combiner ces trois approches en fonction du projet.
React ne préconisant rien, c'est à vous d'être très rigoureux.


