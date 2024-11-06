<template>
  <div class="wrapper">
    <NavBar></NavBar>
    <main class="container-fluid" id="main">
      <router-view />
    </main>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    FooterComp,
  },
};
</script>
<style>
#main{
  min-height: 85vh;
}
</style>
