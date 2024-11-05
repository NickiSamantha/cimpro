<template>
    <div>
      <h2>Unit Types</h2>
      <table v-if="unitTypes && unitTypes.length">
        <thead>
          <tr>
            <th>Unit Type ID</th>
            <th>Unit Type Code</th>
            <th>Description</th>
            <th>Category</th>
            <th>Max Occupants</th>
            <th>Marketing Description</th>
            <th>Units Available</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unitType in unitTypes" :key="unitType?.['Unit Type ID']">
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
      <p v-else>No unit types available.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      unitTypes: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>
  