<template>
  <div class="home-container d-flex flex-column justify-content-center align-items-center">
    <h1 class="home-title">Welcome to CiMSO INNterchange</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-container {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  min-height: 93vh;
}

.home-title {
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  color: #ff99c8;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(248, 244, 246, 0.7);
}



@media (max-width: 768px) {
  .home-title {
    font-size: 2.5rem;
  }
  
}
</style>

