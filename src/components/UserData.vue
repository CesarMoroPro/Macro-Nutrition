<template>
<section class="add-user-data">
        <p>Merci de renseigner les informations suivantes :</p>  

        <form class="data-form" method="POST">
                <div class="data-block">
                
                        <div class="data-div data-gender">
                                <label class="data-label">Votre genre :</label>
                                <input v-model="gender" class="data-input" type="radio" name="sex" value="man" id="boy" required> <!-- C'est l'attr "value" des <input type="radio"> qui est passé au Model dans la propriété "gender" -->
                                <label class="data-label-proposition" for="boy">Homme</label>
                                <input v-model="gender" class="data-input" type="radio" name="sex" value="woman" id="girl" required>
                                <label class="data-label-proposition" for="girl">Femme</label>
                        </div>

                        <div class="data-div data-weight">
                                <label class="data-label">Votre poids :</label>
                                <input v-model="weight" class="data-input" type="number" step="0.01" required> Kg (ex. : "87.60")
                        </div>

                        <div class="data-div data-height">
                                <label class="data-label">Votre taille :</label>
                                <input v-model="height" class="data-input" type="number" step="0.01" required> m (ex. : "1.80")
                        </div>
                        
                        <div class="data-div data-age">
                                <label class="data-label">Votre âge :</label>
                                <input v-model="age" class="data-input" type="number" required> ans (ex. : "34"")
                        </div>
                        
                        <div class="data-div data-nap-level">
                                <label class="data-label" for="nap">Votre niveau d'activité physique :</label>
                                <select v-model="napLevel" name="nap-name" id="nap-id" required> <!-- C'est l'attr "value" des <option></option> qui est passé au Model dans la propriété "napLevel"-->
                                        <option>Veuillez choisir une option</option>
                                        <option value="inactif">Inactif</option>
                                        <option value="moderate">activité physique modérée</option>
                                        <option value="important">activité physique importante</option>
                                        <option value="intense">activité physique intense</option>
                                </select>

                                <div v-if="napLevel" class="data-div  data-nap-coef">
                                        <p class="data-label display-none" type="number" required>À l'aide du tableau "Niveau d'Activité Physique", précisez le coefficient selon que vous soyez plus proche du niveau d'activité inférieur ou supérieur (ex. vous avez renseigné "activité physique forte". Si vous êtes plus proche du niveau inférieur, sélectionnez le coefficient 1.6. Si vous êtes plus proche du niveau supérieur, sélectionnez le coefficient 1.8). 
                                        </p>
                                        <label class="data-label">Précisez votre coefficient :</label>

                                        <div class="data-nap-coef__level" v-if="napLevel == 'inactif'">
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="1.3" id="inactif-low" required>
                                                <label class="data-label-proposition" for="inactif-low">1.3</label>
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="1.4" id="inactif-middle" required>
                                                <label class="data-label-proposition" for="inactif-low">1.4</label>
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="1.5" id="inactif-high" required>
                                                <label class="data-label-proposition" for="inactif-high">1.5</label>
                                        </div>
                                        <div class="data-nap-coef__level" v-else-if="napLevel == 'moderate'">
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="1.6" id="moderate-low" required>
                                                <label class="data-label-proposition" for="moderate-low">1.6</label>
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="1.7" id="moderate-high" required>
                                                <label class="data-label-proposition" for="moderate-high">1.7</label>
                                        </div>
                                        <div class="data-nap-coef__level" v-else-if="napLevel == 'important'">
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="1.8" id="important-low" required>
                                                <label class="data-label-proposition" for="important-low">1.8</label>
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="1.9" id="important-high" required>
                                                <label class="data-label-proposition" for="important-high">1.9</label>
                                        </div>
                                        <div class="data-nap-coef__level" v-else-if="napLevel == 'intense'">
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="2" id="intense-low" required>
                                                <label class="data-label-proposition" for="intense-low">2.0</label>
                                                <input v-model="napCoef" class="data-input" type="radio" name="nap" value="2.2" id="intense-high" required>
                                                <label class="data-label-proposition" for="intense-high">2.1</label>
                                        </div>
                                </div>
                        </div>                        
                </div>

                <input type="button" v-if="napCoef" @click="metabaseCalcul" value="Calculer mes résultats intermédiaires">
        </form>

        <div class="result mb-&-dej">
                <h2>Résultats intermédiaires</h2>
                
                <div class="mb">
                        <p>
                                Votre métabolisme de base : {{ metabase  }}
                        </p>
                </div>

                <div class="dej">
                        <p>
                                Votre Dépense Énergétique Journalière : {{  dej }}
                        </p>
                </div>
        </div>

        <form method="POST" class="user-wishes">

        </form>

        <div>
                genre : {{ gender }} <br>
                poids : {{ weight }} <br>
                taille :{{ height }} <br>
                age : {{ age }} <br>
                nap-level : {{ napLevel }} <br>
                nap-coef : {{ napCoef }} <br>
                metabase : {{ metabase}}<br>
                dej : {{ dej }}<br>
        </div>

</section>
</template>

<script>

export default {
        data() {
                return {
                        gender: null,
                        weight: null,
                        weightManCoef: 13.707,
                        weightWomanCoef: 9.740,
                        height: null,
                        heightManCoef: 492.3,
                        heightWomanCoef: 172.9,
                        age: null,
                        ageManCoef: 6.673,
                        ageWomanCoef: 4.737,
                        additionnalManCoef: 77.607,
                        additionnalWomanCoef: 667.051,
                        napLevel: null,
                        napCoef: null,
                        metabase: null,
                        dej: null,
                }
        },

        methods: {
                metabaseCalcul() {
                        let metabaseResult = null;

                        if (this.gender === "man") {
                                metabaseResult = ((this.weight * this.weightManCoef) + (this.height * this.heightManCoef) - (this.age * this.ageManCoef) + this.additionnalManCoef);
                        } else if (this.gender === "woman") {
                                metabaseResult = ((this.weight * this.weightWomanCoef) + (this.height * this.heightWomanCoef) - (this.age * this.ageWomanCoef) + this.additionnalWomanCoef);
                        }
                        
                        this.metabase = Math.round(metabaseResult);
                        this.dejCalcul(this.metabase, this.napCoef);
                },

                dejCalcul(mb, activity) {
                        const dejResult = mb * activity;
                        this.dej = Math.round(dejResult);

                        console.log(this.dej);
                }
        }
}

</script>