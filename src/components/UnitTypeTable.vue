<template>
  <div class="mt-5 pt-5">
    <h1 class="mt-5">Unit Types and Booking Units</h1>
    <button class="cute-button" @click="fetchUnitTypes">Fetch Unit Type</button>
    <button class="cute-button" @click="fetchBookingUnits">Fetch Booking Units</button>

    <!-- Search Bar -->
     <div>
      <input
     v-if="displayType"
     v-model="searchQuery"
     placeholder="Search by ID or name"
     @input="search"
     class="search-input"
   />  </div>
   

    <!--Unit Types Table -->
     <div class="cute-table-container">
      <table v-if="displayType === 'unitTypes' && filteredUnitTypes.length" class="cute-table">
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
     </div> 
    <!--  Booking Units Table -->
      <div class="cute-table-container">
        <table v-if="displayType === 'bookingUnits' && filteredBookingUnits.length" class="cute-table">
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
.cute-button {
  background-color: #ffccde; 
  border: 1px solid #ff99c8; 
  color: #000000; 
  padding: 10px 20px;
  margin: 5px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cute-button:hover {
  background-color: #ff99c8; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.search-input {
  padding: 10px ;
  margin: 20px;
  border-radius: 6px;
  border: 1px solid #ff09c8 ;
  
}
.cute-table-container {
  width: 100% ; 
  overflow-x: auto ; 
  margin-top: 20px ; 
}

.cute-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 16px;
  min-width: 600px ; 
}

.cute-table th, .cute-table td {
  padding: 12px;
  border: 1px solid #ff99c8;
  text-align: left;
}

.cute-table th {
  background-color: #646464; /* Very light pink */
  color: #f5ebeb;
  font-weight: bold;
}

.cute-table tr:nth-child(even) {
  background-color: #363434;
}

.cute-table tr:hover {
  background-color: #ff99c8;
  color: #000000 ; 
}

/* Responsive Layout for Table  */
@media (max-width: 768px) {
  .cute-button {
    width: 100%; 
    margin: 10px 0 ;
  }
  .search-input {
    
  }
  .cute-table th, .cute-table td {
    padding: 8px; 
  }
}
</style>