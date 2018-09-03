<template>
    <div id="login">
        <h4>Login</h4>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col s8 m8 offset-m2">
                    <!-- Start form -->
                    <form>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" v-model="email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password" v-model="password">
                        </div>
                        <div class="form-check">
                            <button type="submit" class="btn btn-primary" v-on:click="login">Login</button>
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
        name: 'login',
        data: function () {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            login:function (e) {
                e.preventDefault()
                firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                    .then(user => {
                            this.$router.go({path:this.$router.path})
                        },
                        err => {
                            alert(err.message)
                        }
                    )
            }
        }
    }

</script>
