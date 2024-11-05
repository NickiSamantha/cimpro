<template>
    <div class="container-fluid background">
      <div class="row sticky-bottom pt-3">
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
    background: linear-gradient(
      90deg,
      #cdeddd,
      #c0e9ed,
      #fce6d3,
      #fad9d5,
      #fbb7c7
    );
  }
  </style>