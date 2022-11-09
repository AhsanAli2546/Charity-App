<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  
  <RouterView />
  
</template>



<!-- <template>
//   <div id="app">
//     <component :is="layout">
//       <router-view/>
//     </component>
//   </div>
// </template>

// <script>

//   //const defaultLayout = 'default'

//   export default {
//     name:'App',
//     computed:{
//       layout(){
//         //return (this.$route.meta.layout || defaultLayout) + '-blank'
//         return 'empty-layout'
//       }
//     }
//   }
// </script> -->