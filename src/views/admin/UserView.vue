<template>
  <div class="container">
    <Vue3EasyDataTable :headers="headers" :items="items" />
  </div>
</template>


<script lang="ts">
import Vue3EasyDataTable from "vue3-easy-data-table";
import type { Header, Item } from "vue3-easy-data-table";

export default {
  name: "UserView",
  components: {
    Vue3EasyDataTable,
  },

  setup() {
    const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Email (cm)", value: "email", sortable: true },
      { text: "Country (kg)", value: "password", sortable: true },
      { text: "Gender", value: "gender", sortable: true },
      { text: "Role", value: "role", sortable: true },
      { text: "Created on", value: "isVerified", sortable: true },
      { text: "Account Status", value: "status", sortable: true },
      { text: "Verification Status", value: "isVerified", sortable: true },
    ];

    const items: Item[] = [
      {
        _id: "638c78a81427ecd66fd15ced",
        name: "Muhammad Ahmad",
        email: "ahsan@gmail.coma",
        password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
        isVerified: "false",
        role: 2,
        status: "active",
        gender: "male",
        country: "Pakistan",
        createdOn: "1670150312706",
        __v: 0,
      },
      {
        _id: "638c78b11427ecd66fd15cf2",
        name: "Ahsan Khalil",
        email: "ahmd@gmail.coma",
        password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
        isVerified: "false",
        role: 2,
        status: "active",
        gender: "male",
        country: "Pakistan",
        createdOn: "1670150321931",
        __v: 0,
      },
      {
        _id: "638c78ef1427ecd66fd15cf9",
        name: "Mehak",
        email: "ahmd@boarded.in",
        password: "b9682c8f-5ab6-54c4-8d98-d5bdbe8dadb6",
        isVerified: "false",
        role: 2,
        status: "active",
        gender: "male",
        country: "Pakistan",
        createdOn: "1670150383587",
        __v: 0,
      },
      {
        _id: "638c79171427ecd66fd15d02",
        name: "Muhammad Haddi",
        email: "ahmad@boarded.in",
        password: "d3a5946d-8fd5-5a5e-a348-048e7b4914b3",
        isVerified: "false",
        role: 2,
        status: "active",
        gender: "male",
        country: "Pakistan",
        createdOn: "1670150423378",
        __v: 0,
      },
    ];

    return {
      headers,
      items,
    };
  },
};
</script>
<style>
</style>