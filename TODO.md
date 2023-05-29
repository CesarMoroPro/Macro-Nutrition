#TODO LIST

## TABLEAU DES COEFS
- ✅ Créer le tableau des coefs NAP
- ✅ Réflechir à comment le présenter (affichage, masquage...)

## \<ASIDE\> INFOS PRATIQUES
- ✅ Par défaut, les faire disparaître
- ✅ Réfléchir également à l'affichage, masquage, et comment les présenter visuellement

## NAP LEVEL
Si l'utilisateur a choisi un NAP, l'icône est cochée et les coefs + texte sont visibles. Mais si l'utilisateur revient sur le choix "Sélectionnez votre niveau", les éléments restent tels qu'ils sont. Or, dans pareil cas :
- ✅ Faire disparaître le choix du coef + son texte supérieur
- ✅ Changer l'icône en non-checked

## TYPE NUMBER
- ✅ Modifier les \<input> de type NUMBER car ils ne peuvent pas contenir de données négatives (directement dans les balises HTML)

## INPUTS
- ✅ Changer la couleur des `placeholder` en mode normal (donc "ex. : xx").
- ❌ Changer la couleur des `placeholder` quand ils affichent le message "Valeur obligatoire".


## METHODS
- ❌ Factoriser les méthodes `openNap...` et `closeNap`du SFC `UserData` avec les méthodes `open...` et `close...` du SFC `Informations`

## WATCHERS
- ❌ Factoriser les watchers qui servent à redéfinir les placeholders des inputs

## CALCUL MACROS
- ✅ ne prend pas en compte le déficit