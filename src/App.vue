<template>
        <HeaderComponent></HeaderComponent>

        <main class="global">
                <UserDataComponent></UserDataComponent>
                <InformationsComponent></InformationsComponent>
        </main>
</template>


<script>
//* Import de Node_modules
import 'reset-css';

//* Import des SFC
import HeaderComponent from './components/Header.vue';
import UserDataComponent from './components/UserData.vue';
import InformationsComponent from './components/Informations.vue';

//* Déclaration du Model :
export default {

        components: {
                HeaderComponent,
                UserDataComponent,
                InformationsComponent,
        },
}

</script>
