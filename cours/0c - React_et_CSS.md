# CSS dans React

## class et className

En HTML, lorsque nous voulons attribuer une classe à une balise, nous utilisons le mot-clé "class":

```HTML
<p class="app">Bonjour</p>
```

Cela n'est pas possible en React, il faut utiliser le mot-clé "className" qui est son pendant.

```jsx
<p className="app">Bonjour!</p>
```

## Définition du style

3 Méthodes:

+ dans un fichier .css que vous importez dans votre component
+ dans une variable style que vous allez attribuer à votre balise / component
+ dans l'attribut style du component directement

### A savoir:
+ Ne jamais utiliser les "-" pour définir les attributs css
+ utiliser le pascalCase qui est reconnu nativement par react

```jsx
//ne pas inscrire:
background-color

//mais:
backgroundColor
```