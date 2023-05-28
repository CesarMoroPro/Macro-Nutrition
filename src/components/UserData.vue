<template>
<section class="add-user-data">
        <div class="user-data">
                <h2 class="title-h2">Vos informations <span class="icon-title icon-title__dataUser"><font-awesome-icon :icon="['far', 'rectangle-list']" /></span></h2>
                <p>Merci de renseigner les informations suivantes&nbsp;:</p>  
        
                <form class="data-form" method="POST">
                        <div class="data-block">
                        
                                <div class="data-div data-gender input-radio-div">
                                        <span v-if="!genderUser"><font-awesome-icon :icon="['far', 'square']" /></span>
                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                        <label class="label-proposition input-radio-label" for="boy">
                                                <input v-model="genderUser" class="data-input input-radio" type="radio" name="gender" value="man" id="boy" required> <!-- C'est l'attr "value" des <input type="radio"> qui est passé au Model dans la propriété "genderUser" -->
                                                <span class="value">Homme</span>
                                        </label>
                                        
                                        <label class="label-proposition input-radio-label" for="girl">
                                                <input v-model="genderUser" class="data-input input-radio" type="radio" name="gender" value="woman" id="girl" required>
                                                <span class="value">Femme</span>        
                                        </label>
                                </div>
                                
                                <div class="data-div data-weight">
                                        <span v-if="!weightUser"><font-awesome-icon :icon="['far', 'square']" /></span>
                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                        <input v-model="weightUser" class="data-input input-number" type="number" step="0.01" min="0" required placeholder="Votre poids en Kg"> Kg (ex. : "87.60")
                                </div>
                                
                                <div class="data-div data-height">
                                        <span v-if="!heightUser"><font-awesome-icon :icon="['far', 'square']" /></span>
                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                        <input v-model="heightUser" class="data-input input-number" type="number" step="0.01" min="0" required placeholder="Votre taille en mètre"> m (ex. : "1.80")
                                </div>
                                
                                <div class="data-div data-age">
                                        <span v-if="!ageUser"><font-awesome-icon :icon="['far', 'square']" /></span>
                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                        <input v-model="ageUser" class="data-input input-number" type="number" min="0" required placeholder="Votre âge en années"> ans (ex. : "34"")
                                </div>
                                
                                <div class="data-div data-nap-level">
                                        <span v-if="!napLevelUser"><font-awesome-icon :icon="['far', 'square']" class="icon-nap-level"/></span>
                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                        <label class="data-label" for="nap">Votre niveau d'activité physique (NAP)&nbsp;:
                                                <span class="icon-nap-and-coef-table-help" @click="openNapAndCoefTable" v-if="!napAndCoefTableIsOpen"><font-awesome-icon :icon="['far', 'circle-question']" size="xl" /></span>
                                                <span class="icon-nap-and-coef-table-help" @click="closeNapAndCoefTable" v-else="napAndCoefTableIsOpen"><font-awesome-icon :icon="['far', 'circle-xmark']" size="xl" /></span>
                                        </label>

                                        <select class="select-options-container" name="nap-name" id="nap-id" required v-model="napLevelUser"> <!-- C'est l'attr "value" des <option></option> qui est passé au Model dans la propriété "napLevelUser"-->
                                                <option class="select-option" value="null">Sélectionnez votre niveau</option>
                                                <option class="select-option" value="inactif">Inactif</option>
                                                <option class="select-option" value="moderate">activité physique modérée</option>
                                                <option class="select-option" value="important">activité physique importante</option>
                                                <option class="select-option" value="intense">activité physique intense</option>
                                        </select>

                                        <table class="table-global" v-show="napAndCoefTableIsOpen">
                                                <tr>
                                                        <th class="table-head table-head__nap">NAP</th>
                                                        <th class="table-head table-equival">Correspondance</th>
                                                        <th class="table-head table-coef">Coefficients</th>
                                                </tr>
                                                <tr class="table-row table-row">
                                                        <td class="table-cell table-cell__nap">Inactif</td>
                                                        <td class="table-cell table-cell__equival">Travail et transport assis ; Aucune activité physique.</td>
                                                        <td class="table-cell table-cell__coef">1.3 - 1.5</td>
                                                </tr>
                                                <tr class="table-row">
                                                        <td class="table-cell table-cell__nap">Modéré</td>
                                                        <td class="table-cell table-cell__equival">Travail assis avec petits déplacement ou travail debout ; Activités de loisirs de temps à autres.</td>
                                                        <td class="table-cell table-cell__coef">1.6 - 1.7</td>
                                                </tr>
                                                <tr class="table-row">
                                                        <td class="table-cell table-cell__nap">Important</td>
                                                        <td class="table-cell table-cell__equival">Travail actif (ex. : infirmière), déplacements à pied ; Minimum 3h de sport par semaine.</td>
                                                        <td class="table-cell table-cell__coef">1.8 - 1.9</td>
                                                </tr>
                                                <tr class="table-row table-row">
                                                        <td class="table-cell table-cell__nap">Intense</td>
                                                        <td class="table-cell table-cell__equival">Travail très actif et intense (ex. : travail de chantier), nombreux loisirs ; Minimum 6h de sport par semaine.</td>
                                                        <td class="table-cell table-cell__coef">2 - 2.1</td>
                                                </tr>
                                        </table>
                                </div>
                                
                                <div class="data-div  data-nap-coef" v-show="!napLevelUser">
                                        <p>À l'aide du tableau "Niveau d'Activité Physique", précisez le coefficient selon que vous soyez plus proche du niveau d'activité inférieur ou supérieur.
                                        <br>(ex. : vous avez renseigné "activité physique importante". Si vous êtes plus proche du niveau inférieur, sélectionnez le coefficient 1.8. Si vous êtes plus proche du niveau supérieur, sélectionnez le coefficient 1.9).</p>
                                        <p>Précisez votre coefficient&nbsp;:</p>
                                        
                                        <span v-if="!napCoefUser"><font-awesome-icon :icon="['far', 'square']" class="icon-nap-coef"/></span>
                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" class="icon-nap-coef"/></span>
                                        <div class="data-nap-coef__level input-radio-div" v-if="napLevelUser == 'inactif'">
                                                <label class="label-proposition input-radio-label" for="inactif-low">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="1.3" id="inactif-low" required>
                                                        <span class="value">1.3</span>
                                                </label>
                                                <label class="label-proposition input-radio-label" for="inactif-low">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="1.4" id="inactif-middle" required>
                                                        <span class="value">1.4</span>
                                                </label>
                                                <label class="label-proposition input-radio-label" for="inactif-high">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="1.5" id="inactif-high" required>
                                                        <span class="value">1.5</span>
                                                </label>
                                        </div>
                                        <div class="data-nap-coef__level input-radio-div" v-else-if="napLevelUser == 'moderate'">
                                                <label class="label-proposition input-radio-label" for="moderate-low">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="1.6" id="moderate-low" required>
                                                        <span class="value">1.6</span>
                                                </label>
                                                <label class="label-proposition input-radio-label" for="moderate-high">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="1.7" id="moderate-high" required>
                                                        <span class="value">1.7</span>
                                                </label>
                                        </div>
                                        <div class="data-nap-coef__level input-radio-div" v-else-if="napLevelUser == 'important'">
                                                <label class="label-proposition input-radio-label" for="important-low">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="1.8" id="important-low" required>
                                                        <span class="value">1.8</span>
                                                </label>
                                                <label class="label-proposition input-radio-label" for="important-high">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="1.9" id="important-high" required>
                                                        <span class="value">1.9</span>
                                                </label>
                                        </div>
                                        <div class="data-nap-coef__level input-radio-div" v-else-if="napLevelUser == 'intense'">
                                                <label class="label-proposition input-radio-label" for="intense-low">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="2" id="intense-low" required>
                                                        <span class="value">2.0</span>
                                                </label>
                                                <label class="label-proposition input-radio-label" for="intense-high">
                                                        <input v-model="napCoefUser" class="data-input input-radio" type="radio" name="nap" value="2.2" id="intense-high" required>
                                                        <span class="value">2.1</span>
                                                </label>
                                        </div>
                                </div>                      
                        </div>
        
                        <div class="validation-container">
                                <span v-if="allDataUserCompleted"><font-awesome-icon :icon="['far', 'circle-right']" beat-fade size="2xl" class="icon-right-arrow"/></span>
                                <button class="input-validate-button-container" v-if="allDataUserCompleted" @click="metabaseCalcul($event)">
                                        <span class="input-validate-button">Calculer mes résultats intermédiaires</span>
                                </button>
                        </div>
                </form>
        </div>

        <div class="result-mb-and-dej" v-if="dej"> <!-- le calcul de DEJ est le dernier de cette première étape, donc DEJ est calculé, elle est true -->
                <h2 class="title-h2">Résultats intermédiaires<span class="icon-title icon-title__result-inter"><font-awesome-icon :icon="['far', 'calendar-xmark']" /></span></h2>
                
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
                <h2 class="title-h2">Vos objectifs<span class="icon-title icon-title__whishesUSer"><font-awesome-icon :icon="['far', 'circle-dot']" /></span></h2>
                <p>Recommandation Protéïnes : 1.6 g / kg / jour pour un maintien de masse musculaire, et 1.8 g / kg / jour pour une prise de masse (à condition de pratiquer une activité physique).<br>
                Recommadation Lipides : 1 g / kg / jour.<br>
                Pour une perte de poids, il est conseillé de déduire 5% maximum de votre Dépense Énergétique Journalière (=déficit calorique).</p>

                <form class="wishes-form" method="POST">
                        <div class="wish-block">
                        
                                <div class="wish-div">
                                        <label class="label-proposition">Quel déficit calorique voulez-vous créer&nbsp;?
                                        <br>(ex. : "0" pour aucun déficit, "5" pour 5% de déficit)</label>
                                        <br><span v-if="!deficitUser"><font-awesome-icon :icon="['far', 'square']" /></span>
                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                        <input v-model="deficitUser" class="data-input input-number" type="number" min="0" step="0.1" required placeholder="5">
                                </div>
                                
                                <div class="wish-div">
                                        <label class="label-proposition">Quantité journalière de protéïnes, en grammes&nbsp;:
                                                <br>(ex. : "1.8" pour 1.8 g / kilo / jour )</label>
                                                <br><span v-if="!protUser"><font-awesome-icon :icon="['far', 'square']" /></span>
                                                <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                                <input v-model="protUser" class="data-input input-number" type="number" min="0" step="0.1" required placeholder="1.8">
                                        </div>
                                        
                                        <div class="wish-div">
                                                <label class="label-proposition">Quantité journalière de lipides, en grammes&nbsp;:
                                                        <br>(ex. : "1" pour 1 g / kilo / jour )</label>
                                                        <br><span v-if="!lipUser"><font-awesome-icon :icon="['far', 'square']" /></span>
                                                        <span v-else><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                                        <input v-model="lipUser" class="data-input input-number" type="number" min="0" step="0.1" required placeholder="1">
                                                </div>
                                        </div>
                                        
                        <div class="validation-container">
                                <span v-if="allWishesUserCompleted"><font-awesome-icon :icon="['far', 'circle-right']" beat-fade size="2xl" class="icon-right-arrow"/></span>
                                <button class="input-validate-button-container" v-if="allWishesUserCompleted" @click="dejAvecDeficitCalcul($event)">
                                        <span class="input-validate-button">Calculer mes macros</span>
                                </button>
                        </div>
                </form>

        </div>

        <div class="result-macros" v-if="secondStepCompleted">
        <h2 class="title-h2">Voici vos macros<span class="icon-title icon-title__result-final"><font-awesome-icon :icon="['far', 'calendar-check']" /></span></h2>
        
                <div class="result-macros__mb">
                        <p>Avec le déficit calorique que vous avez fourni ({{ deficitUser }}%), vous devez consommer quotidiennement&nbsp;:</p>                             
                                <ul>
                                        <li class="element-list-macros">Protéïnes : <span class="element-list-macros__important">{{ protTotalPerDay  }} g</span> ;</li>
                                        <li class="element-list-macros">Lipides : <span class="element-list-macros__important"> {{ lipTotalPerDay }} g</span> ;</li>
                                        <li class="element-list-macros">Glucides : <span class="element-list-macros__important"> {{ glucTotalPerDay }} g</span>.</li>
                                </ul>
                </div>

                <div class="result-macros__dej">
                        <p>
                                À titre informatif, ceci représente&nbsp;: 
                                <ul>
                                        <li class="element-list-macros">Protéïnes : <span class="element-list-macros__important"> {{ protCaloTotalPerDay  }} calories</span> ;</li>
                                        <li class="element-list-macros">Lipides : <span class="element-list-macros__important"> {{ lipCaloTotalPerDay }} calories</span> ;</li>
                                        <li class="element-list-macros">Glucides : <span class="element-list-macros__important"> {{ glucCaloTotalPerDay }} calories</span>.</li>
                                </ul>
                        </p>
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
                        napAndCoefTableIsOpen: false,
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
                metabaseCalcul(e) {
                        e.preventDefault();
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

                dejAvecDeficitCalcul(e) {
                        e.preventDefault();
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

                openNapAndCoefTable() {
                        // La variable qui représente l'état "affiché" du tableau de nap passe à true
                        this.napAndCoefTableIsOpen = true;
                },

                closeNapAndCoefTable() {
                        // Inversement, la variable qui représente l'état "affiché" du tableau de nap repasse à false
                        this.napAndCoefTableIsOpen = false;
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