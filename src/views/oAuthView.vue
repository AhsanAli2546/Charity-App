<template>
    <!-- <h1>Token {{this.token}}</h1>
    <h1>RefreshToken {{this.refreshToken}}</h1>
    <h1>Token From computed {{GetToken}}</h1>
    <h1>Token From data {{this.token}}</h1> -->
</template>

<script>
import axios from 'axios';
import {useRoute} from 'vue-router';
//import {UseMouse} from '../composable/mouse'

    export default{
        name:"oauth",

        //States
        data(){
            return{
                
                user:{},
                token:'',
                refreshToken:'',
                
            }
        },

        // computed:{

        //     //Ok to get token from store
        //     GetToken(){
        //         return this.$store.getters.GetToken;
        //     }
        // },

        methods:{
        },

        //Hooks
        mounted(){
            
            const route = useRoute();
            this.token = this.$route.query.token;
            if(this.token == null || this.token == ""){
                window.open('http://localhost:5173','_self')
            }
            axios.post("http://localhost:3000/charity/auth/authenticate",{token:this.token}).then(Response =>{

                    
                    this.token = Response.data.token;
                    this.refreshToken = Response.data.refreshToken;
                    this.user = {
                        UserId: Response.data.uid,
                        Email: Response.data.email,
                        IsVerified: Response.data.isVerified,
                        Gender:Response.data.country
                    }
    
                    this.$store.commit('SetToken',this.token);
    
                    this.$store.commit('SetRefreshToken',this.refreshToken); 
                       
                    this.$store.commit('SetUser', this.user);
        
                    //window.open('http://localhost:5173/user',"_self")
                    this.$router.push('/user');
                

                }).catch(err =>{
                    window.open('http://localhost:5173','_self');
                    //console.log("ErrorA: " + err)
                });
           
        }
    }
</script>