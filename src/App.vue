<template>
        <HeaderComponent></HeaderComponent>

        <main class="global">
                <h2>Vos informations</h2>
                <UserDataComponent></UserDataComponent>
        </main>
</template>


<script>
//* Import de Node_modules
import 'reset-css';

//* Import des SFC
import HeaderComponent from './components/Header.vue';
import UserDataComponent from './components/UserData.vue';

//* Déclaration du Model :
export default {

        components: {
                HeaderComponent,
                UserDataComponent,
        },
}

</script>
