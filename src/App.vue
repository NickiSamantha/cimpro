<template>
  <div id="app">
    <h1>Welcome to INNterchange Specifications </h1>
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/unit-types">View Unit Types</router-link>
    </nav> -->
    <router-view /> 
    <UnitTypeTable/>
  </div>
</template>

<script>
import UnitTypeTable from './components/UnitTypeTable.vue';
export default {
  // name: 'App'
  components: {
    UnitTypeTable
  }
};
</script>

<style>
body {
  background-color : #ccd3 ;
}
nav {
  margin-bottom: 20px;
}
router-link {
  margin-right: 15px;
}
</style>