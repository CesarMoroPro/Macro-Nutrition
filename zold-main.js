document.querySelector('#app').innerHTML = 
`
  <header>
    <h1>COUCOU les Macros !</h1>
  </header>
  

  <main>
    <section class="add-user-data">
    <p>Merci de renseigner les informations suivantes :</p>  

    <form method="POST" class="data-form">
        <div class="data-block">
          
            <div class="data-gender">
              <label class="data-label">Votre genre :</label>
              <input class="data-entry" type="radio" name="sex" value="man" id="boy" required>
              <label class="data-label-proposition" for="boy">Homme</label>
              <input class="data-entry" type="radio" name="sex" value="woman" id="girl" required>
              <label class="data-label-proposition" for="girl">Femme</label>
            </div>

            <div class="data-weight">
              <label class="data-label">Votre poids :</label>
              <input class="data-entry" type="number" required> Kg (ex. : "87.60")
            </div>

            <div class="data-height">
              <label class="data-label">Votre taille :</label>
              <input class="data-entry" type="number" required> m (ex. : "1.80")
            </div>
            
            <div class="data-age">
              <label class="data-label">Votre âge :</label>
              <input class="data-entry" type="number" required> ans (ex. : "34"")
            </div>
            
            <div class="data-nap-level">
              <label class="data-label" for="nap">Votre niveau d'activité physique :</label>
                <select name="nap-name" id="nap-id" required>
                  <option value="">Veuillez choisir une option</option>
                  <option value="0">activité physique nulle</option>
                  <option value="1">activité physique minimale</option>
                  <option value="2">activité physique modérée</option>
                  <option value="3">activité physique forte</option>
                  <option value="4">activité physique intense</option>
                </select>

              <p class="data-label" type="number" required>À l'aide du tableau "Niveau d'Activité Physique", précisez le coefficient selon que vous soyez plus proche du niveau d'activité inférieur ou supérieur (ex. vous avez renseigné "activité physique forte". Si vous êtes plus proche du niveau inférieur, sélectionnez le coefficient 1.6. Si vous êtes plus proche du niveau supérieur, sélectionnez le coefficient 1.8). 
              </p>
              <div class="data-nap-coef hidden">
                <label class="data-label">Votre coefficient :</label>
                <div class="data-nap-coef__about-level">
                  <input class="data-entry" type="radio" name="nap" value="null-minus" id="null-minus" required>
                  <label class="data-label-proposition" for="null-minus">1.0</label>
                  <input class="data-entry" type="radio" name="nap" value="null-plus" id="null-plus" required>
                  <label class="data-label-proposition" for="null-plus">1.1</label>
                </div>
                <div class="data-nap-coef__about-level">
                  <input class="data-entry" type="radio" name="nap" value="minimal-minus" id="minimal-minus" required>
                  <label class="data-label-proposition" for="minimal-minus">1.2</label>
                  <input class="data-entry" type="radio" name="nap" value="minimal-plus" id="minimal-plus" required>
                  <label class="data-label-proposition" for="minimal-plus">1.3</label>
                </div>
                <div class="data-nap-coef__about-level">
                  <input class="data-entry" type="radio" name="nap" value="moderate-minus" id="moderate-minus" required>
                  <label class="data-label-proposition" for="moderate-minus">1.4</label>
                  <input class="data-entry" type="radio" name="nap" value="moderate-plus" id="moderate-plus" required>
                  <label class="data-label-proposition" for="moderate-plus">1.5</label>
                </div>
                <div class="data-nap-coef__about-level">
                  <input class="data-entry" type="radio" name="nap" value="high-minus" id="high-minus" required>
                  <label class="data-label-proposition" for="high-minus">1.5</label>
                  <input class="data-entry" type="radio" name="nap" value="high-plus" id="high-plus" required>
                  <label class="data-label-proposition" for="high-plus">1.6</label>
                </div>
                <div class="data-nap-coef__about-level">
                  <input class="data-entry" type="radio" name="nap" value="intense-minus" id="intense-minus" required>
                  <label class="data-label-proposition" for="intense-minus">1.7</label>
                  <input class="data-entry" type="radio" name="nap" value="intense-plus" id="intense-plus" required>
                  <label class="data-label-proposition" for="intense-plus">1.8</label>
                </div>
            </div>


            </div>



          </input>
        
        </div>
      
        </form>
    </section>
  </main>


`;
