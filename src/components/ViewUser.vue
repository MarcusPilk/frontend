<template>
    <div>
        <b-button @click="showModal">
            View
        </b-button>
        <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
        </b-modal>
    </div>
</template>

<script>
    import {AXIOS} from './http-common'

    export default {
        name: 'view-user',

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
            },
            showModal () {
                this.$refs.myModalRef.show()
            },
            hideModal () {
                this.$refs.myModalRef.hide()
            }

        },
        mounted (){
            this.json.id = this.accid;
            this.findAccount(this.json.id);
        }
    }
</script>
