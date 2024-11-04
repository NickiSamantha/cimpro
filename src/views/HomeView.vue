<template>
  <div>
    <h1> Available Unit Types</h1>
    <UnitTypeList/>
  </div>
</template>
<script>
/* eslint-disable*/
import UnitTypeList from '@/components/UnitTypeList.vue';
export default {
  components: {
    UnitTypeList
  }
}
</script>
<style scoped>
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
</style>