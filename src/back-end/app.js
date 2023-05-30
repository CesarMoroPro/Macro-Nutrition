/* Chercher le package Express dans les node_modules */
import Express from "express";
/* Chercher le package Request (vers la Nutrition API) */
const request = require('request');

/* Créer une instance d'Express */
const app = Express();
/* Créer une constante pour le port à écouter */
const port = 3000;

/* Créer une route, ici méthode GET sur une route par défaut "/",
qui entend l'objet de la requête et l'objet de la demande.
La réponse utilise la méthode "send()" pour renvoyer quelque chose */
app.get('/', (req, res) => res.send("Ceci est la route par défaut (\"/\")"));

app.get('https://api.api-ninjas.com/v1/nutrition', (req, res) => {
        console.log(res);
        res.send("On a une réponse");
})

/* Écouter l'application sur le port donné */
app.listen(port, () => console.log(`Nickel ! L'application est démarrée sur : http://localhost:${port}`));
