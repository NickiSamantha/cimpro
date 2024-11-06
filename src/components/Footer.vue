<template>
    <div class="container-fluid background" id="footer">
      <div class="row mb-0 pt-3">
        <p class="lead">
          Nicki S Abels &copy;
          <span> {{ cYear }}</span>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .background {
    background : #000000 ; 
  }

  #footer{
    position: fixed-bottom;
  }
  </style>