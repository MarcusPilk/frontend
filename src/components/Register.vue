<template>
    <div id="register">
        <h4>Register</h4>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col s8 m8 offset-m2">
                    <!-- Start form -->
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" v-model="password">
                        </div>
                        <div class="form-check">
                            <button type="submit" class="btn btn-primary" v-on:click="register">Register</button>
                        </div>

                    </form>


                    <!-- End form -->
                </div>



            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        name: 'register',
        data: function () {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            register:function (e) {
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                    .then(user => {
                        alert('Account created');
                            this.$router.go({path:this.$router.path})
                    },
                        err => {
                        alert(err.message)
                    }
                )
                e.preventDefault()
            }
        }

    }

</script>
