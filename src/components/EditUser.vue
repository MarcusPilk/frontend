<template>
    <div id="edit-user">
        <h1>User:</h1>
        <h2 v-model="json.id">{{this.accid}}</h2>
        <hr>
        <input v-model="json.firstname" placeholder="First Name">
        <hr>
        <input v-model="json.lastname" placeholder="Last Name">
        <hr>
        <input v-model="json.accountnumber" placeholder="Account Number">
        <hr>
        <b-button @click="updateAccount()">Save Changes</b-button>

    </div>
</template>

<script>
    import {AXIOS} from './http-common'

    export default {
        name: 'edit-user',

        data() {
            return {

                json: {
                    id:'',
                    firstname : '',
                    lastname : '',
                    accountnumber : ''
                },
            }
        },
        props:['accid']
        ,
        methods: {
            // Fetches posts when the component is created.
            findAccount(id) {
                AXIOS.get(`/view/`+id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.json.firstname = response.data.first_name;
                        this.json.lastname = response.data.last_name;
                        this.json.accountnumber = response.data.account_number;
                    })
                },

            updateAccount(){
                let params = new URLSearchParams();
                params.append('id', this.json.id);
                params.append('firstname',this.json.firstname);
                params.append('lastname',this.json.lastname);
                params.append('accountnumber', this.json.accountnumber);
                AXIOS.post('/save',params).then(r =>{
                    alert('Account updated!');
                    this.$router.push('/users');
                });
            }

        },
        mounted (){
            this.json.id = this.accid;
            this.findAccount(this.json.id);
        }
    }
</script>
