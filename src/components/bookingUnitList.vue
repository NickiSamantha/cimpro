<template>
    <div v-if="bookingUnits.length">
      <h2>Booking Units</h2>
      <table>
        <thead>
          <tr>
            <th>Booking Unit ID</th>
            <th>Name</th>
            <th>Room Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in bookingUnits" :key="unit['Booking Unit ID']">
            <td>{{ unit['Booking Unit ID'] }}</td>
            <td>{{ unit['Booking Unit Name'] }}</td>
            <td>{{ unit['Booking Unit Number'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bookingUnits: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  th {
    background-color: #f4f4f4;
  }
  </style>
  