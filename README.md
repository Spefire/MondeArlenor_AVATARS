# Avatars

## Génération des icônes

Si vous souhaitez générer des icônes (images croppées) à partir d'autres, il faut :
- Faire un `npm i` (installer Node et NPM avant, si c'est pas déjà le cas)
- Lancer dans un terminal `node server.js`
- Ouvrir le navigateur sur `http://localhost:3000/`
- Vérifier que la liste des images à travailler (elles doivent être dans le dossier "./generation_items")
- Puis cliquer sur "Télécharger" et verser le contenu du zip dans le dossier "./generation_icons"
- Vérifier et commiter sur Git !

## Dossier "Files"

C'est le dossier où se trouve les images finales / propres, qui vont être utilisées.
Voici les règles qui s'y appliquent :
- Le nom de l'item a comme format `{{nom de l'item}}_{{index de sa version déclinée}}.png`.
- Un item a forcément une icône associée placée au même endroit.
- Le nom de l'icône a comme format `icon_{{nom de l'item}}_{{index de sa version déclinée}}.png`.
- Si un item a des versions déclinables, l'item a alors un dossier dédié avec ses différentes versions.
- Sinon, il est mis à la racine du dossier "files".

## Fichier de configuration "Files"

C'est le fichier de configuration de la création d'avatar où la liste des items est ordonnée par "calque".
Un item est défini par :
- un **libellé** qui est le nom affiché
- un **name** qui est le nom de base du fichier, avec son dossier si y a
- un **nb** qui est le nombre de versions déclinables (le `item_00.png` ne compte pas !)
- un **removable** qui indique la présence d'un `item_00.png`, pour pouvoir enlever l'item
- et un **typeColors** qui indique le code couleur à proposer (mis à `null` si pas de couleur)

## Liste des items

- ✅ body
- ✅ boobs
- 🕓 hands
- hairs_front
- hairs_back
- beards
- eyes
- eyebrows
- ears
- nozes
- mouths
- wings
- tails
- tattoos
- tops
- bottoms
- backgrounds