<template>
    <div class="container">
        <h1>Simple table</h1>
        <h2>DataTables + Vue3 example</h2>
        <p>
            This example demonstrates the <code>datatables.net-vue3</code> package
            being used to display an interactive DataTable in a Vue application.
            {{$store.state.counter}}
        
        </p>

    </div>
    
</template>


<script>
import {ref} from 'vue';
import axios from 'axios';



export default{
    name:"UserView"
    
}


</script>
<style>

</style>