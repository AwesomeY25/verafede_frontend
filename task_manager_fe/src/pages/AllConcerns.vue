<!-- Edit based on the applicable data to fetch -->

<template>
    <div>
      <h1>{{ title }}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Academic Workload</th>
            <th>Other Commitments</th>
            <th>Date Filed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="concern in concerns" :key="concern.concern_id">
            <td>{{ concern.concern_id }}</td>
            <td>{{ concern.concern_description }}</td>
            <td>{{ concern.academic_workload }}</td>
            <td>{{ concern.other_commitments }}</td>
            <td>{{ formatDate(concern.date_filed) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'AllConcerns',
        concerns: [],
      };
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
    async created() {
      const response = await fetch('http://127.0.0.1:8000/concerns/');
      this.concerns = await response.json();
    },
  };
  </script>