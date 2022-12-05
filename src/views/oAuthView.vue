<template>
    <!-- <h1>Token {{this.token}}</h1>
    <h1>Response {{this.response.email}}</h1> -->
</template>

<script>

import axios from 'axios';
import {useRoute} from 'vue-router';

    export default{
        name:"Oauth",
        data(){
            return{
                token:'',
                response:''
            }
        },
        mounted(){
          
            const route = useRoute();
            this.token = this.$route.query.token;
            //console.log("token: "+route.params.token);
            axios.post("http://localhost:3000/charity/auth/authenticate",{token:this.token}).then(Response =>{
                    this.response = Response.data;
                
                });
           
        }
    }
</script>