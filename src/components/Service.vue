<template>
    <div id="service">
        <h2>View All Accounts</h2>
        <!--<h4>{{ posts }}</h4>-->
        <b-table striped hover :items="findAll" :fields="fields">
            <template slot="Actions" slot-scope="data">
                <b-button variant="outline-success" v-b-modal="'myModal'" @click="openModal(data.item)">View</b-button>
                <b-button variant="primary" :to="'/edit-user/'+data.item.account_id">Edit</b-button>
                <b-button variant="danger" @click="deleteAccount(data.item.account_id)">Delete</b-button>
            </template>
        </b-table>

        <b-modal id="myModal" title="View User">
            {{singleAccount.account_id}}
            <hr>
            {{singleAccount.first_name}}
            <hr>
            {{singleAccount.last_name}}
            <hr>
            {{singleAccount.account_number}}
        </b-modal>


    </div>
</template>


<script>

    import {AXIOS} from './http-common'
    export default {
        name: 'service',

        data() {
            return {
                msg: '1',
                findAll: [],
                singleAccount: '',
                fields: [
                    {
                        key: 'account_id',
                        label: 'Account ID'
                    },
                    {
                        key: 'first_name',
                        label: 'First Name'
                    },                    {
                        key: 'last_name',
                        label: 'Last Name'
                    },                    {
                        key: 'account_number',
                        label: 'Account Number'
                    },                    {
                        key: 'Actions',
                        label: 'Actions'
                    }
                ],
                errors: []
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
            deleteAccount(id) {
                AXIOS.get(`/delete/`+id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.getAllAccounts();
                        alert("Account has been removed from the Database");
                    })
                    .catch(e => {
                        alert("There has been an error removing the account from the Database");
                        this.errors.push(e)
                    })
            },

            findAccount(id) {
                AXIOS.get(`/view/`+id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.singleAccount = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            openModal(item){
                this.singleAccount = item;
            }
        },
        mounted(){
            this.getAllAccounts();
        }
    }
</script>
