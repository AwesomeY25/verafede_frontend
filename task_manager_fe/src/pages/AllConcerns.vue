<!-- Edit based on the applicable data to fetch -->

<template>
  <div>
    <h2 id="h2">All Concerns</h2>
    <table class="table" id="all_concerns">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Academic Workload</th>
          <th scope="col">Other Commitments</th>
          <th scope="col">Date Filed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="concern in concerns" :key="concern.concern_id">
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

<style>
#h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #F27036;
}
#all_concerns th {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EA580C;
  color: #F8FAFC;
}
#all_concerns td:nth-child(1) {
  text-align: center;
  font-weight: bold;
}
#all_concerns td:nth-child(5) {
  text-align: center;
}
</style>