<template>
<section class="add-user-data">
        <div class="user-data">
                <h2>Vos informations</h2>
                <p>Merci de renseigner les informations suivantes&nbsp;:</p>  
        
                <form class="data-form" method="POST">
                        <div class="data-block">
                        
                                <div class="data-div data-gender">
                                        <input v-model="genderUser" class="data-input" type="radio" name="sex" value="man" id="boy" required> <!-- C'est l'attr "value" des <input type="radio"> qui est passé au Model dans la propriété "genderUser" -->
                                        <label class="label-proposition" for="boy">Homme</label>
                                        <input v-model="genderUser" class="data-input" type="radio" name="sex" value="woman" id="girl" required>
                                        <label class="label-proposition" for="girl">Femme</label>
                                </div>
        
                                <div class="data-div data-weight">
                                        <input v-model="weightUser" class="data-input" type="number" step="0.01" required placeholder="Votre poids en Kg"> Kg (ex. : "87.60")
                                </div>
        
                                <div class="data-div data-height">
                                        <input v-model="heightUser" class="data-input" type="number" step="0.01" required placeholder="Votre taille en mètre"> m (ex. : "1.80")
                                </div>
                                
                                <div class="data-div data-age">
                                        <input v-model="ageUser" class="data-input" type="number" required placeholder="Votre âge en années"> ans (ex. : "34"")
                                </div>
                                
                                <div class="data-div data-nap-level">
                                        <label class="data-label" for="nap">Votre niveau d'activité physique&nbsp;:</label>
                                        <select v-model="napLevelUser" name="nap-name" id="nap-id" required> <!-- C'est l'attr "value" des <option></option> qui est passé au Model dans la propriété "napLevelUser"-->
                                                <option value="null">Sélectionnez votre niveau</option>
                                                <option value="inactif">Inactif</option>
                                                <option value="moderate">activité physique modérée</option>
                                                <option value="important">activité physique importante</option>
                                                <option value="intense">activité physique intense</option>
                                        </select>
        
                                        <div v-if="napLevelUser" class="data-div  data-nap-coef">
                                                <p class="data-label">À l'aide du tableau "Niveau d'Activité Physique", précisez le coefficient selon que vous soyez plus proche du niveau d'activité inférieur ou supérieur (ex. vous avez renseigné "activité physique forte". Si vous êtes plus proche du niveau inférieur, sélectionnez le coefficient 1.6. Si vous êtes plus proche du niveau supérieur, sélectionnez le coefficient 1.8). 
                                                </p>
                                                <label class="data-label">Précisez votre coefficient :</label>
        
                                                <div class="data-nap-coef__level" v-if="napLevelUser == 'inactif'">
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="1.3" id="inactif-low" required>
                                                        <label class="label-proposition" for="inactif-low">1.3</label>
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="1.4" id="inactif-middle" required>
                                                        <label class="label-proposition" for="inactif-low">1.4</label>
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="1.5" id="inactif-high" required>
                                                        <label class="label-proposition" for="inactif-high">1.5</label>
                                                </div>
                                                <div class="data-nap-coef__level" v-else-if="napLevelUser == 'moderate'">
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="1.6" id="moderate-low" required>
                                                        <label class="label-proposition" for="moderate-low">1.6</label>
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="1.7" id="moderate-high" required>
                                                        <label class="label-proposition" for="moderate-high">1.7</label>
                                                </div>
                                                <div class="data-nap-coef__level" v-else-if="napLevelUser == 'important'">
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="1.8" id="important-low" required>
                                                        <label class="label-proposition" for="important-low">1.8</label>
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="1.9" id="important-high" required>
                                                        <label class="label-proposition" for="important-high">1.9</label>
                                                </div>
                                                <div class="data-nap-coef__level" v-else-if="napLevelUser == 'intense'">
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="2" id="intense-low" required>
                                                        <label class="label-proposition" for="intense-low">2.0</label>
                                                        <input v-model="napCoefUser" class="data-input" type="radio" name="nap" value="2.2" id="intense-high" required>
                                                        <label class="label-proposition" for="intense-high">2.1</label>
                                                </div>
                                        </div>
                                </div>                        
                        </div>
        
                        <input type="button" v-if="allDataUserCompleted" @click="metabaseCalcul" value="Calculer mes résultats intermédiaires">
                </form>
        </div>

        <div class="result mb-&-dej" v-if="dej"> <!-- le calcul de DEJ est le dernier de cette première étape, donc DEJ est calculé, elle est true -->
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
        
        <div class="user-wishes" v-if="firstStepCompleted"> <!-- Il faut obligatoirement que DEJ soit true pour que la div des objectifs s'affiche -->
                <h2>Vos objectifs</h2>
                <p>Recommandation Protéïnes : 1.6 g / kg / jour pour un maintien de masse musculaire, et 1.8 g / kg / jour pour une prise de masse (à condition de pratiquer une activité physique).<br>
                Recommadation Lipides : 1 g / kg / jour.<br>
                Pour une perte de poids, il est conseillé de déduire 5% maximum de votre Dépense Énergétique Journalière (=déficit calorique).</p>

                <form class="wishes-form" method="POST">
                        <div class="wish-block">
                        
                                <div class="wish-div">
                                        <label class="label-proposition">Quel déficit calorique voulez-vous créer&nbsp;?
                                        <br>(ex. : "0" pour aucun déficit, "5" pour 5% de déficit)</label>
                                        <input v-model="deficitUser" class="data-input" type="number" step="0.1" required placeholder="5">
                                </div>
                                
                                <div class="wish-div">
                                        <label class="label-proposition">Quantité journalière de protéïnes, en grammes&nbsp;:
                                        <br>(ex. : "1.8" pour 1.8 g / kilo / jour )</label>
                                        <input v-model="protUser" class="data-input" type="number" step="0.1" required placeholder="1.8">
                                </div>

                                <div class="wish-div">
                                        <label class="label-proposition">Quantité journalière de lipides, en grammes&nbsp;:
                                        <br>(ex. : "1" pour 1 g / kilo / jour )</label>
                                        <input v-model="lipUser" class="data-input" type="number" step="0.1" required placeholder="1">
                                </div>
                        </div>

                        <input type="button"  v-if="allWishesUserCompleted"  @click="dejAvecDeficitCalcul" value="Calculer mes macros">
                </form>

                <div class="result macros" v-if="secondStepCompleted">
                <h2>Voici vos macros</h2>
                
                <div class="mb">
                        <p>Avec le déficit calorique que vous avez fourni ({{ deficitUser }}%), votre Dépense Énergétique Journalière </p>

                        <p>
                                Vous devez consommer quotidiennement&nbsp;: 
                                <ul>
                                        <li>{{ protTotalPerDay  }} grammes de protéïnes ;</li>
                                        <li>{{ lipTotalPerDay }} grammes de lipides ;</li>
                                        <li>{{ glucTotalPerDay }} grammes de glucides.</li>
                                </ul>
                        </p>
                </div>

                <div class="dej">
                        <p>
                                À titre informatif, ceci représente&nbsp;: 
                                <ul>
                                        <li>{{ protCaloTotalPerDay  }} grammes de protéïnes ;</li>
                                        <li>{{ lipCaloTotalPerDay }} grammes de lipides ;</li>
                                        <li>{{ glucCaloTotalPerDay }} grammes de glucides.</li>
                                </ul>
                        </p>
                </div>
        </div>

                
        </div>

</section>
</template>

<script>

export default {
        data() {
                return {
                        genderUser: null,
                        weightUser: null,
                        weightManCoef: 13.707,
                        weightWomanCoef: 9.740,
                        heightUser: null,
                        heightManCoef: 492.3,
                        heightWomanCoef: 172.9,
                        ageUser: null,
                        ageManCoef: 6.673,
                        ageWomanCoef: 4.737,
                        additionnalManCoef: 77.607,
                        additionnalWomanCoef: 667.051,
                        napLevelUser: null,
                        napCoefUser: null,
                        metabase: null,
                        dej: null,
                        firstStepCompleted: false,

                        deficitUser: null,
                        dejMinusDeficit: null,
                        protUser: null,
                        lipUser: null,
                        protCalo: 4,
                        lipCalo: 9,
                        glucCalo: 4,
                        protTotalPerDay: null,
                        lipTotalPerDay: null,
                        glucTotalPerDay: null,
                        protCaloTotalPerDay: null,
                        lipCaloTotalPerDay: null,
                        glucCaloTotalPerDay: null,
                        secondStepCompleted: false,
                }
        },

        methods: {
                metabaseCalcul() {
                        let metabaseResult = null;

                        if (this.genderUser === "man") {
                                metabaseResult = ((this.weightUser * this.weightManCoef) + (this.heightUser * this.heightManCoef) - (this.ageUser * this.ageManCoef) + this.additionnalManCoef);
                        } else if (this.genderUser === "woman") {
                                metabaseResult = ((this.weightUser * this.weightWomanCoef) + (this.heightUser * this.heightWomanCoef) - (this.ageUser * this.ageWomanCoef) + this.additionnalWomanCoef);
                        }
                        
                        this.metabase = Math.round(metabaseResult);
                        this.dejCalcul(this.metabase, this.napCoefUser);
                },

                dejCalcul(mb, activity) {
                        const dejResult = mb * activity;
                        this.dej = Math.round(dejResult);
                        this.firstStepCompleted = true;
                },

                dejAvecDeficitCalcul() {
                        this.dejMinusDeficit = (this.dej - (this.dej * 5 / 100));

                        // Une fois le metabolisme calculé avec le déficit désiré, on calcule les macros
                        this.macrosCalcul();
                },

                macrosCalcul() {
                        this.protTotalPerDay = Math.round((this.protUser * this.weightUser));
                        this.protCaloTotalPerDay = Math.round((this.protTotalPerDay * this.protCalo)); 
                        this.lipTotalPerDay = Math.round((this.lipUser * this.weightUser));
                        this.lipCaloTotalPerDay = Math.round((this.lipTotalPerDay * this.lipCalo));

                        this.glucTotalPerDay = Math.round(((this.dejMinusDeficit - (this.protCaloTotalPerDay + this.lipCaloTotalPerDay)) / this.glucCalo));
                        this.glucCaloTotalPerDay = Math.round((this.glucTotalPerDay * this.glucCalo));

                        this.secondStepCompleted = true;
                },
        },

        computed: {
                allDataUserCompleted() {
                        if(this.genderUser && this.weightUser && this.heightUser && this.ageUser && this.napLevelUser && this.napCoefUser) {
                                return true;
                        }
                },

                allWishesUserCompleted() {
                        if(this.deficitUser && this.protUser && this.lipUser) 
                        return true;
                },
        }
}

</script>