<template>
  <div>
    <h1>Unit Type Info Request</h1>
    <button @click="fetchUnitTypeInfo">Fetch Unit Type Info</button>

    <div v-if="unitTypeInfo">
      <pre>{{ unitTypeInfo }}</pre> <!-- Displays raw JSON for reference -->
    </div>

    <div v-else>
      <p>No data fetched yet. Click the button to load data.</p>
    </div>
  </div>
</template>

<script>
import { getUnitTypeInfoRequest } from '../services/api.js';

export default {
  data() {
    return {
      unitTypeInfo: null, // Stores fetched data
    };
  },
  methods: {
    async fetchUnitTypeInfo() {
      try {
        const data = await getUnitTypeInfoRequest();
        this.unitTypeInfo = data; // Save data to display
      } catch (error) {
        console.error('Error fetching Unit Type Info:', error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.8em;
  margin-bottom: 1em;
}
button {
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 1em;
}
button:hover {
  background-color: #0056b3;
}
pre {
  background-color: #f5f5f5;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
