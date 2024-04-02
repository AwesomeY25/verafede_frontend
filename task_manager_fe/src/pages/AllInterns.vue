<template>
  <div>
    <h1>{{ title }}</h1>


    <div class="p-2 d-flex align-items-center">
      <div class="dropdown me-2">
        <ul class="dropdown-menu" aria-labelledby="kebab_menu">
          <li><a class="dropdown-item" href="#">Select All</a></li>
          <li><a class="dropdown-item" href="#">Deselect All</a></li>
        </ul>
      </div>

      <div class="mb-3 me-2">
        <label for="workload" class="form-label">Intern Status</label>
        <ul class="dropdown-menu" aria-labelledby="kebab_menu">
          <li><a class="dropdown-item" href="#">Select All</a></li>
          <li><a class="dropdown-item" href="#">Deselect All</a></li>
        </ul>
        <button type="button" class="btn btn-light" id="kebab_menu" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>

      <div class="mb-3 me-2">
        <label for="start_date" class="form-label">Start Date</label>
        <ul class="dropdown-menu" aria-labelledby="kebab_menu">
          <li><a class="dropdown-item" href="#">Select All</a></li>
          <li><a class="dropdown-item" href="#">Deselect All</a></li>
        </ul>
        <button type="button" class="btn btn-light" id="kebab_menu" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>

      <div class="mb-3">
        <label for="end_date" class="form-label">End Date</label>
        <ul class="dropdown-menu" aria-labelledby="kebab_menu">
          <li><a class="dropdown-item" href="#">Select All</a></li>
          <li><a class="dropdown-item" href="#">Deselect All</a></li>
        </ul>
        <button type="button" class="btn btn-light" id="kebab_menu" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>

      <div class="mb-3">
        <label for="end_date" class="form-label">Department</label>
        <ul class="dropdown-menu" aria-labelledby="kebab_menu">
          <li><a class="dropdown-item" href="#">Select All</a></li>
          <li><a class="dropdown-item" href="#">Deselect All</a></li>
        </ul>
        <button type="button" class="btn btn-light" id="kebab_menu" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </div>



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
.table {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
