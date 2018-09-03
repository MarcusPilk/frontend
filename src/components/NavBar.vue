<template>

<div id="navbar1">
    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#/">
            <img src="src/assets/icon.png" class="d-inline-block align-top" alt="BV">

        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="#/users">Accounts</b-nav-item>
                <b-nav-item href="#/new-user" >Create New Account</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item v-b-modal="'myModal1'">
                    Github
                </b-nav-item>
                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>User</em>
                    </template>
                    <b-dropdown-item :to="'/login'">Login</b-dropdown-item>
                    <b-dropdown-item :to="'/register'">Register</b-dropdown-item>
                    <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

    <b-modal id="myModal1" size="lg" title="View Github">
        <iframe width="750" height="600" src="http://gist-it.appspot.com/https://github.com/MarcusPilk/backend-accounts/blob/master/src/main/java/com/springboot/crud/AccountsSpring/controllers/MainController.java"></iframe>
    </b-modal>
</div>


</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "navbar1",
        data(){
            return{
            isLoggedIn: false,
            currentUser: false
        }},
        methods: {
            logout: function () {
                firebase.auth().signOut()
                    .then(() => {
                        this.$router.go({path:this.$router.path})
                    })
            }
        }

    }
</script>

<style>

</style>
