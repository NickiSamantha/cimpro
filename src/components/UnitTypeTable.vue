<template>
    <div>
      <button @click="fetchUnitTypes">Fetch Unit</button>
      <button @click="fetchBookingUnits">Fetch Booking Units</button>
  
      <!-- Search Input -->
      <input
        v-if="displayType"
        v-model="searchQuery"
        placeholder="Search by ID or name"
        @input="search"
        style="margin: 10px 0; padding: 5px;"
      />
  
      <!-- Display Unit Types Table -->
      <table v-if="displayType === 'unitTypes' && filteredUnitTypes.length">
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
          <tr v-for="unitType in filteredUnitTypes" :key="unitType['Unit Type ID']">
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
  
      <!-- Display Booking Units Table -->
      <table v-if="displayType === 'bookingUnits' && filteredBookingUnits.length">
        <thead>
          <tr>
            <th>Booking Unit ID</th>
            <th>Booking Unit Name</th>
            <th>Room Number</th>
            <th>Unit Type ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in filteredBookingUnits" :key="unit['Booking Unit ID']">
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
        bookingUnits: [],
        displayType: null, // Track which data type is displayed
        searchQuery: '',   // Search query for filtering results
      };
    },
    computed: {
      // Filtered unit types based on search query
      filteredUnitTypes() {
    return this.unitTypes.filter(unit =>
      (unit['Unit Type ID'] && unit['Unit Type ID'].toString().includes(this.searchQuery)) ||
      (unit['Unit Type Code'] && unit['Unit Type Code'].toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (unit['Unit Type Description'] && unit['Unit Type Description'].toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  },
  // Filtered booking units based on search query
  filteredBookingUnits() {
    return this.bookingUnits.filter(unit =>
      (unit['Booking Unit ID'] && unit['Booking Unit ID'].toString().includes(this.searchQuery)) ||
      (unit['Booking Unit Name'] && unit['Booking Unit Name'].toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (unit['Room Number'] && unit['Room Number'].toString().includes(this.searchQuery))
    );
  }
    },
    methods: {
      async fetchUnitTypes() {
        try {
          this.unitTypes = await getUnitTypeInfoRequest();
          this.bookingUnits = []; // Clear booking units when fetching unit types
          this.displayType = 'unitTypes'; // Set display type to unitTypes
          this.searchQuery = ''; // Clear search query when switching tables
        } catch (error) {
          console.error('Error fetching unit types:', error);
        }
      },
      async fetchBookingUnits() {
        try {
          this.bookingUnits = await getBookingUnitsRequest();
          this.unitTypes = []; // Clear unit types when fetching booking units
          this.displayType = 'bookingUnits'; // Set display type to bookingUnits
          this.searchQuery = ''; // Clear search query when switching tables
        } catch (error) {
          console.error('Error fetching booking units:', error);
        }
      },
    }
  };
  </script>
  
  
<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 12px;
  border: 1px solid #000000;
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