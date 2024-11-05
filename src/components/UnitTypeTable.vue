<template>
    <div>
      <button @click="fetchUnitTypes">Fetch Unit Types</button>
      <button @click="fetchBookingUnits">Fetch Booking Units</button>
  
      <table v-if="unitTypes.length">
        <thead>
          <tr>
            <th>Unit Type ID</th>
            <th>Code</th>
            <th>Description</th>
            <th>Category</th>
            <th>Max Occupants</th>
            <th>Marketing Description</th>
            <th>Units Available</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unitType in unitTypes" :key="unitType['Unit Type ID']">
            <td>{{ unitType['Unit Type ID'] }}</td>
            <td>{{ unitType['Unit Type Code'] }}</td>
            <td>{{ unitType['Unit Type Description'] }}</td>
            <td>{{ unitType['Unit Type Category'] }}</td>
            <td>{{ unitType['Maximum Occupants'] }}</td>
            <td>{{ unitType['Marketing Description'] }}</td>
            <td>{{ unitType['Unit Count'] }}</td>
          </tr>
        </tbody>
      </table>
  
      <table v-if="bookingUnits.length">
        <thead>
          <tr>
            <th>Booking Unit ID</th>
            <th>Booking Unit Name</th>
            <th>Room Number</th>
            <th>Unit Type ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in bookingUnits" :key="unit['Booking Unit ID']">
            <td>{{ unit['Booking Unit ID'] }}</td>
            <td>{{ unit['Booking Unit Name'] }}</td>
            <td>{{ unit['Booking Unit Number'] }}</td>
            <td>{{ unit['Unit Type ID'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { getUnitTypeInfoRequest, getBookingUnitsRequest } from '../services/api.js';
  
  export default {
    data() {
      return {
        unitTypes: [],
        bookingUnits: []
      };
    },
    methods: {
      async fetchUnitTypes() {
        try {
          this.unitTypes = await getUnitTypeInfoRequest();
        } catch (error) {
          console.error('Error fetching unit types:', error);
        }
      },
      async fetchBookingUnits() {
        try {
          this.bookingUnits = await getBookingUnitsRequest();
        } catch (error) {
          console.error('Error fetching booking units:', error);
        }
      }
    }
  };
  </script>
<style scoped>
/* In UnitTypeTable.vue */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

</style>  