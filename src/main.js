import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Users from './components/Service.vue'
import Home from './components/Home.vue'
import AddUser from './components/AddUser.vue'
import EditUser from './components/EditUser.vue'
import ViewUser from './components/ViewUser.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import firebase from 'firebase'
import './components/firebaseInit';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
let app;


firebase.auth().onAuthStateChanged(function (user) {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            BootstrapVue,
            render: h => h(App)
        });
    }
});

const routes = [
    {path:'/users', component: Users, meta:{requiresAuth:true}},
    {path:'/login', component: Login, meta:{requiresGuest:true}},
    {path:'/register', component: Register, meta:{requiresGuest:true}},
    {path:'/new-user', component: AddUser, meta:{requiresAuth:true}},
    {path:'/edit-user/:accid', component: EditUser, props:true, meta:{requiresAuth:true}},
    {path:'/view-user/:accid', component: ViewUser, props:true, meta:{requiresAuth:true}},
    {path:'/', component: Home}

];
let router = new VueRouter({
    routes
});

// Navguard
router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth && !currentUser) next('/login');
    else if(!requiresAuth && currentUser) next('/users');
    else next();
});




