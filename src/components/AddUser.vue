<template>
    <div id="add-user">
        <h2>Create New Account</h2>
        <hr>
        <input v-model="json.firstname" placeholder="First Name">
        <hr>
        <input v-model="json.lastname" placeholder="Last Name">
        <hr>
        <input v-model="json.accountnumber" placeholder="Account Number">
        <hr>
        <b-button @click="addAccount()">Add User</b-button>

        <h4 v-model="result">{{result}}</h4>

    </div>
</template>

<script>
    import {AXIOS} from './http-common'

    export default {
        name: 'add-user',

        data() {
            return {

                json: {
                    id:'',
                    firstname : '',
                    lastname : '',
                    accountnumber : ''
                },
                result:''
            }
        },
        methods: {
            // Fetches posts when the component is created.
            getAllAccounts() {
                AXIOS.get(`/all`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.findAll = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            addAccount(){
                let params = new URLSearchParams();
                params.append('id', this.json.id);
                params.append('firstname',this.json.firstname);
                params.append('lastname',this.json.lastname);
                params.append('accountnumber', this.json.accountnumber);
                AXIOS.post('/save',params).then(response => {
                    alert('Account Created');
                    this.$router.push('/users');
                });
            }

        }
    }
</script>
