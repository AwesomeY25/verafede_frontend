<template>
  <div>
    <h2 id="h2">{{ title }}</h2>


    <form>
        <div class="d-flex flex-row" id="filters">
            <div class="p-2">
                <label for="workload_filter" class="form-label">Intern Status</label>
                <select class="form-select" id="workload_filter" name="workload_filter">
                    <option selected>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Onboarded</option>
                    <option>Offboarded</option>
                </select>
            </div>
            <div class="p-2">
                <label for="start_date_filter" class="form-label">Start Date</label>
                <input type="date" class="form-control" id="start_date_filter" name="start_date_filter">
            </div>
            <div class="p-2">
                <label for="end_date_filter" class="form-label">End Date</label>
                <input type="date" class="form-control" id="end_date_filter" name="end_date_filter">
            </div>
            <div class="p-2">
                <label for="workload_filter" class="form-label">Department</label>
                <select class="form-select" id="workload_filter" name="workload_filter">
                    <option selected>All</option>
                    <option>Operations</option>
                    <option>Human Resources</option>
                    <option>Information Technology</option>
                    <option>Finance</option>
                </select>
            </div>
        </div>
    </form>



    <table class="table">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Intern Name</th>
          <th scope="col">Intern Status</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Min Workload Threshold</th>
          <th scope="col">Max Workload Threshold</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="intern in interns" :key="intern.intern_id">
          <td>{{ intern.username }}</td>
          <td>{{ intern.first_name }} {{ intern.mid_initial }} {{ intern.last_name }}</td>
          <td>{{ intern.intern_status }}</td>
          <td>{{ formatDate(intern.start_date) }}</td>
          <td>{{ formatDate(intern.end_date) }}</td>
          <td>{{ intern.min_workload_threshold }}</td>
          <td>{{ intern.max_workload_threshold }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'All Interns',
      interns: []
    };
  },
  methods: {
    async fetchInterns() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/interns/`);
        if (!response.ok) {
          throw new Error('Failed to fetch interns information');
        }
        const data = await response.json();
        this.interns = data;
      } catch (error) {
        console.error('Error fetching interns information:', error.message);
      }
    },
    formatDate(date) {
      if (!date) return ''; // Handle empty date
      return new Date(date).toLocaleDateString();
    }
  },
  created() {
    this.fetchInterns();
  }
};
</script>

<style>
/* Add your styles here */
#h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #F27036;
}
.table {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#filters {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;
  color: #484848;
  display: flex; 
  align-items: center;
}
#filters > div {
  display: flex; 
  align-items: center;
}
#filters > div > select {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  color: #484848;
  background-color: rgba(238, 81, 79, .24);
  border-color: rgba(238, 81, 79, .24);
  height: 30px;
  width: 120px;
  margin-left: 5px;
  margin-bottom: 5px;
}
#filters > div > select:focus {
  outline: none !important;
  border-color: rgba(238, 81, 79, .24);
  box-shadow: 0 0 10px rgba(238, 81, 79, .24);
}
#filters > div > input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  color: #484848;
  background-color: rgba(238, 81, 79, .24);
  border-color: rgba(238, 81, 79, .24);
  height: 30px;
  width: 120px;
  margin-left: 5px;
  margin-bottom: 5px;
}
#filters > div > input:focus {
  outline: none !important;
  border-color: rgba(238, 81, 79, .24);
  box-shadow: 0 0 10px rgba(238, 81, 79, .24);
}
.table thead th {
  text-align: center;
  background-color: #EA580C;
  color: #F8FAFC;
}
.table tbody td {
  text-align: center;
}
.table tbody td:nth-child(2) {
  text-align: left;
}
</style>
