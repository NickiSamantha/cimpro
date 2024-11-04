<template>
  <div id="app">
    <h1>Welcome to the App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/unit-types">View Unit Types</router-link>
    </nav>
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'App',
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
