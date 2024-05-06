<template>
  <div>
    <h2 id="h2">All Concerns</h2>
    <table class="table" id="all_concerns">
      <thead>
        <tr>
          <th scope="col" @click="sortBy('concern_description')">Description</th>
          <th scope="col" @click="sortBy('academic_workload')">Academic Workload</th>
          <th scope="col" @click="sortBy('other_commitments')">Other Commitments</th>
          <th scope="col" @click="sortBy('date_filed')">Date Filed</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="concern in sortedConcerns" :key="concern.concern_id">
          <td>{{ concern.concern_description }}</td>
          <td>{{ concern.academic_workload }}</td>
          <td>{{ concern.other_commitments }}</td>
          <td>{{ formatDate(concern.date_filed) }}</td>
          <td><button type="button" class="btn btn-success mx-1" id="resolve_btn">Resolve</button></td>
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
      sortByKey: '',
      sortOrder: 1,
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    sortBy(key) {
      this.sortByKey = key;
      this.sortOrder = this.sortOrder === 1? -1 : 1;
    },
  },
  computed: {
    sortedConcerns() {
      return this.concerns.slice().sort((a, b) => {
        if (this.sortByKey === 'date_filed') {
          return this.sortOrder * (new Date(a[this.sortByKey]) - new Date(b[this.sortByKey]));
        } else {
          return this.sortOrder * (a[this.sortByKey] > b[this.sortByKey]? 1 : -1);
        }
      });
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
  text-align: left;
  font-weight: bold;
}
#all_concerns td {
  text-align: center;
}
#resolve_btn {
  font-size: 14px;
  width: 80px;
  height: 30px;
  margin: 0 auto;
  padding: 0;
  background-color: #22C55E;
  border-color: #22C55E;
}
#resolve_btn:hover {
  background-color: #28914f;
}
</style>