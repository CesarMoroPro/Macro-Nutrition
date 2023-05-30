/* Chercher le package Express dans les node_modules */
import Express from "express";

/* Créer une instance d'Express */
const app = Express();
/* Créer une constante pour le port à écouter */
const port = 3000;

/* Créer une route, ici méthode GET sur une route par défaut "/",
qui entend l'objet de la requête et l'objet de la demande.
La réponse utilise la méthode "send()" pour renvoyer quelque chose */
app.get('/', (req, res) => res.send("Ceci est la route par défaut (\"/\")"));

/* Écouter l'application sur le port donné */
app.listen(port, () => console.log(`Nickel ! L'application est démarrée sur : http://localhost:${port}`));
