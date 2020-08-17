<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-navbar-brand href="#">
                {{nombre}}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="gohome" active>Salir</b-nav-item>
                </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    <div>
        <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Admin!</p>
        </b-modal>
    </div>
    </div>

</template>

<script>
import firebase from 'firebase';
export default {
    data(){

        return {
           nombre: firebase.auth().currentUser.email
        }
    },

    name: 'Navbaradmin',
    methods:{
        gohome(){

            firebase.auth().signOut().then(() => {

             this.$router.push('/')
            //goHome
            })
        }
    },

}

</script>
<style>

</style>