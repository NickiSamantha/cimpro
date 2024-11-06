<template>
  <div class="container">
    <div class=" mt-5 pt-5">
    <h1 class="mt-5 page-title">All Unit Types and Available Booking Units</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <ul v-else class="unit-list">
      <li v-for="unitType in unitTypes" :key="unitType['Unit Type ID']" class="unit-item">
        <h2 class="unit-title">{{ unitType['Unit Type Description'] }} ({{ unitType['Unit Type Code'] }})</h2>
        <p class="unit-detail">Category: {{ unitType['Unit Type Category'] }}</p>
        <p class="unit-detail">Max Occupants: {{ unitType['Maximum Occupants'] }}</p>
        <p class="unit-detail">Marketing Description: {{ unitType['Marketing Description'] }}</p>
        
        <p class="unit-detail">
          Units Available: {{ unitType['Unit Count'] }}
          <button
            @click="toggleBookingUnits(unitType['Unit Type ID'])"
            class="toggle-button"
          >
            {{ showBookings[unitType['Unit Type ID']] ? 'Hide' : 'Show' }} Available Units
          </button>
        </p>

        <ul v-if="showBookings[unitType['Unit Type ID']]" class="booking-unit-list">
          <li
            v-for="unit in bookingUnits[unitType['Unit Type ID']] || []"
            :key="unit['Booking Unit ID']"
            class="booking-unit-item"
          >
            <p>Booking Unit Name: {{ unit['Booking Unit Name'] }}</p>
            <p>Room Number: {{ unit['Booking Unit Number'] }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  </div>
 
</template>

<script>
import { getUnitTypeInfoRequest, getBookingUnitsRequest } from '../services/api.js';

export default {
  data() {
    return {
      unitTypes: [],
      bookingUnits: {},
      error: null,
      showBookings: {} 
    };
  },
  
  methods: {
    toggleBookingUnits(unitTypeId) {
      this.showBookings[unitTypeId] = !this.showBookings[unitTypeId];
    },
  },

  async created() {
    try {
      const [unitTypesData, bookingUnitsData] = await Promise.all([
        getUnitTypeInfoRequest(),
        getBookingUnitsRequest(),
      ]);

      this.unitTypes = unitTypesData;

      this.bookingUnits = bookingUnitsData.reduce((acc, unit) => {
        if (!acc[unit['Unit Type ID']]) {
          acc[unit['Unit Type ID']] = [];
        }
        acc[unit['Unit Type ID']].push(unit);
        return acc;
      }, {});
    } catch (error) {
      console.error('Error fetching data:', error);
      this.error = 'Failed to fetch data. Please try again later.';
    }
  }
};
</script>

<style scoped>
.page-title {
  font-size: 2em;
  color:#ffffff;
  margin-bottom: 1em;
  text-align: center;
}

.error-message {
  color: #ff99c8;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ffccde;
  border-radius: 8px;
  background-color: #ffe6f0;
}

.unit-list {
  list-style: none;
  padding: 0;
}

.unit-item {
  margin-bottom: 1.5em;
  padding: 15px;
  border: 1px solid #ffccde;
  border-radius: 8px;
  background-color: #ffebf5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.unit-item:hover {
  transform: translateY(-5px);
}

.unit-title {
  font-size: 1.5em;
  color: black;
  margin: 0 0 10px;
  border-bottom: 1px solid #ff99c8;
  padding-bottom: 5px;
}

.unit-detail {
  margin: 5px 0;
  color: #000000;
}

.toggle-button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff99c8;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.toggle-button:hover {
  background-color: #ff99c8;
}

.booking-unit-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.booking-unit-item {
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ff09c8;
  color: #0f0f0f;
}
</style>
