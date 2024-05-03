<template>
  <div>
    <h2 id="h2">{{ title }}</h2>

    <form>
      <div class="d-flex flex-row" id="filters">
        <div class="p-2">
          <label for="intern_status" class="form-label">Intern Status</label>
          <select class="form-select" id="intern_status" name="intern_status" v-model="internStatus">
            <option selected>All</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Onboarded</option>
            <option>Offboarded</option>
          </select>
        </div>
        <div class="p-2">
          <label for="start_date_filter" class="form-label">Start Date</label>
          <input type="date" class="form-control" id="start_date_filter" name="start_date_filter" v-model="startDate">
        </div>
        <div class="p-2">
          <label for="end_date_filter" class="form-label">End Date</label>
          <input type="date" class="form-control" id="end_date_filter" name="end_date_filter" v-model="endDate">
        </div>
        <div class="p-2">
          <label for="department_filter" class="form-label">Department</label>
          <select class="form-select" id="department_filter" name="department_filter" v-model="department">
            <option selected>All</option>
            <option>Operations</option>
            <option>Human Resources</option>
            <option>Information Technology</option>
            <option>Finance</option>
          </select>
        </div>
        <div class="p-2">
          <label for="search_query" class="form-label">Search</label>
          <input type="text" class="form-control" id="search_query" name="search_query" v-model="searchQuery">
        </div>
      </div>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Intern Name</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Department</th>
          <th scope="col">Intern Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="intern in interns" :key="intern.intern_id">
          <td>{{ intern.first_name }} {{ intern.mid_initial }} {{ intern.last_name }}</td>
          <td>{{ formatDate(intern.start_date) }}</td>
          <td>{{ formatDate(intern.end_date) }}</td>
          <td>{{ intern.department }}</td>
          <td>{{ intern.intern_status }}</td>
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
      interns: [],
      internStatus: '', // or ''
      startDate: '', // or ''
      endDate: '', // or ''
      department: '', // or ''
      searchQuery: '',
      sortBy: 'intern_id',
      sortOrder: 'desc'
    };
  },
  methods: {
    async fetchInterns() {
      const queryParams = {};

      if (this.internStatus) {
        queryParams.intern_status = this.internStatus;
      }
      if (this.startDate) {
        queryParams.start_date = this.startDate;
      }
      if (this.endDate) {
        queryParams.end_date = this.endDate;
      }
      if (this.department) {
        queryParams.department = this.department;
      }
      if (this.searchQuery) {
        queryParams.search_query = this.searchQuery;
      }
      queryParams.sort_by = this.sortBy;
      queryParams.sort_order = this.sortOrder;

      try {
        const response = await fetch(`http://127.0.0.1:8000/interns/?${Object.keys(queryParams).map(k => `${k}=${queryParams[k]}`).join('&')}`);
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
    },
    internBadgeColor(status) {
      if (!status) return ''; // Handle empty status
      const internBadge = document.getElementById("intern_badge_color");
      let color;
      if (status === "Active") {
        color = "#2B8C2F";
      } else if (status === "Inactive") {
        color = "#EAB308";
      } else if (status === "Onboarded") {
        color = "#F27036";
      } else if (status === "Offboarded") {
        color = "#EF4444";
      }
      if (internBadge) {
        internBadge.style.backgroundColor = color;
      }
    }
  },
  watch: {
    internStatus: 'fetchInterns',
    startDate: 'fetchInterns',
    endDate: 'fetchInterns',
    department: 'fetchInterns',
    searchQuery: 'fetchInterns'
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