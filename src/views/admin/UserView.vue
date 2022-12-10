<template>
  <div class="container mt-5">
    <h1 class="display-3">Token: {{getToken}}</h1>
    <h1 class="display-3">RefreshToken: {{getRefreshToken}}</h1>
    <Vue3EasyDataTable :headers="headers" :items="items" />
    <p>
      
    </p>
  </div>
</template>


<script>
//import {useRoute} from 'vue-router';
import Vue3EasyDataTable from "vue3-easy-data-table";
import axios from 'axios';
//import type { Header, Item } from "vue3-easy-data-table";

export default {
  name: "UserView",
  components: {
    Vue3EasyDataTable
  },
  data() {
    // const headers: Header[] = [
    //   { text: "Name", value: "name" },
    //   { text: "Email (cm)", value: "email", sortable: true },
    //   { text: "Country (kg)", value: "password", sortable: true },
    //   { text: "Gender", value: "gender", sortable: true },
    //   { text: "Role", value: "role", sortable: true },
    //   { text: "Created on", value: "isVerified", sortable: true },
    //   { text: "Account Status", value: "status", sortable: true },
    //   { text: "Verification Status", value: "isVerified", sortable: true },
    // ];

    // const items: Item[] = [
    //   {
    //     _id: "638c78a81427ecd66fd15ced",
    //     name: "Muhammad Ahmad",
    //     email: "ahsan@gmail.coma",
    //     password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150312706",
    //     __v: 0,
    //   },
    //   {
    //     _id: "638c78b11427ecd66fd15cf2",
    //     name: "Ahsan Khalil",
    //     email: "ahmd@gmail.coma",
    //     password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150321931",
    //     __v: 0,
    //   },
    //   {
    //     _id: "638c78ef1427ecd66fd15cf9",
    //     name: "Mehak",
    //     email: "ahmd@boarded.in",
    //     password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150383587",
    //     __v: 0,
    //   },
    //   {
    //     _id: "638c79171427ecd66fd15d02",
    //     name: "Muhammad Haddi",
    //     email: "ahmad@boarded.in",
    //     password: "d3a5946d-8fd5-5a5e-a348-048e7b4914b3",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150423378",
    //     __v: 0,
    //   },
    // ];

    // const headers= [
    //   { text: "Name", value: "name" },
    //   { text: "Email (cm)", value: "email", sortable: true },
    //   { text: "Country (kg)", value: "password", sortable: true },
    //   { text: "Gender", value: "gender", sortable: true },
    //   { text: "Role", value: "role", sortable: true },
    //   { text: "Created on", value: "isVerified", sortable: true },
    //   { text: "Account Status", value: "status", sortable: true },
    //   { text: "Verification Status", value: "isVerified", sortable: true },
    // ];

    // const items= [
    //   {
    //     _id: "638c78a81427ecd66fd15ced",
    //     name: "Muhammad Ahmad",
    //     email: "ahsan@gmail.coma",
    //     password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150312706",
    //     __v: 0,
    //   },
    //   {
    //     _id: "638c78b11427ecd66fd15cf2",
    //     name: "Ahsan Khalil",
    //     email: "ahmd@gmail.coma",
    //     password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150321931",
    //     __v: 0,
    //   },
    //   {
    //     _id: "638c78ef1427ecd66fd15cf9",
    //     name: "Mehak",
    //     email: "ahmd@boarded.in",
    //     password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150383587",
    //     __v: 0,
    //   },
    //   {
    //     _id: "638c79171427ecd66fd15d02",
    //     name: "Muhammad Haddi",
    //     email: "ahmad@boarded.in",
    //     password: "d3a5946d-8fd5-5a5e-a348-048e7b4914b3",
    //     isVerified: "false",
    //     role: 2,
    //     status: "active",
    //     gender: "male",
    //     country: "Pakistan",
    //     createdOn: "1670150423378",
    //     __v: 0,
    //   },
    // ];

    this.headers=[
      { text: "Name", value: "name" },
      { text: "Email (cm)", value: "email", sortable: true },
      { text: "Country (kg)", value: "password", sortable: true },
      { text: "Gender", value: "gender", sortable: true },
      { text: "Role", value: "role", sortable: true },
      { text: "Created on", value: "isVerified", sortable: true },
      { text: "Account Status", value: "status", sortable: true },
      { text: "Verification Status", value: "isVerified", sortable: true },
     ]

    return {
      //token:'',
      userName:'',
      items:[],
      headers:{},  //already used with get request for sending headers
      //header:{}
    };
  },
  computed:{
    getToken(){
      return this.$store.getters.GetToken;
    },
    
    getRefreshToken(){
      return this.$store.getters.GetRefreshToken;
    }
  },

  //Hook
  mounted(){
            

    //this.token = this.getToken

    //console.log("Token from store in users: " + this.getToken);
    var res =  axios.get("http://localhost:3000/charity/admin/getAllUsers",{
    headers: {
      'Authorization': 'Bearer ' + this.getToken
    }
  })
      .then(res =>{
        this.items = res.data;
        console.log("status code: " + res.status)
        console.log("resoponse uid: "+this.items);
        console.log("Users REsponse name: " + res.data);
        //const map = new Map();
        //map = res.data;
        //const values = Array.from(map.values());
        //this.items = Array.from(res.data);
        
        res.data.forEach(element => {
          console.log("User Id: "+element.name);
        });
      }).catch(err =>{
        console.log(err);
        //window.open('http://localhost:5173','_self');
      });
  }
};
</script>
<style>
</style>