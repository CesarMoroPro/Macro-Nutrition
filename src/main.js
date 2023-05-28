//^ IMPORT DE VUE
// Import de createApp pour créer une instance de vue
import { createApp } from 'vue'
// Import du Root Component
import App from './App.vue'

//^ IMPORT DE FONTAWESOME-VUE
// Import de fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import fontawesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//> Import des icones à inclure dans le projet (selon le type d'icônes désirées [regular, solid, ...])
import { faSquare, faSquareCheck, faCircleRight, faRectangleList, faCircleDot, faCalendarXmark,  faCalendarCheck, faCircleQuestion} from '@fortawesome/free-regular-svg-icons';
//> Ajout dans la library des icones à inclure dans le projet
library.add(faSquare, faSquareCheck, faCircleRight, faRectangleList, faCircleDot, faCalendarXmark, faCalendarCheck, faCircleQuestion);
//> Il faut maintenant créer un composant global pour pouvoir inclure le composant "FontAwesomeIcon" importé ci-dessus dans le montage de l'application (voir entre "createApp()" et ".mount()")



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
