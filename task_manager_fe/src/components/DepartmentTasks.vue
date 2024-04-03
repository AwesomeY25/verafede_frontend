<template>

  <div class="container py-3">

    <h2 id="h2">Department Tasks</h2>
    
    <form>
        <div class="d-flex flex-row" id="filters">
            <div class="p-2">
                <label for="workload_filter" class="form-label">Workload</label>
                <select class="form-select" id="workload_filter" name="workload_filter">
                    <option selected>All</option>
                    <option>Underload</option>
                    <option>Min Capacity</option>
                    <option>In Capacity</option>
                    <option>Max Capacity</option>
                    <option>Overload</option>
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
        </div>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Task ID</th>
          <th scope="col">Task Name</th>
          <th scope="col">Task Description</th>
          <th scope="col">Task Date Created</th>
          <th scope="col">Task Due Date</th>
          <th scope="col">Estimated Time To Finish</th>
          <th scope="col">Task Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.task_id">
          <td>{{ task.task_id }}</td>
          <td>{{ task.task_name }}</td>
          <td>{{ task.task_description }}</td>
          <td>{{ task.task_date_created }}</td>
          <td>{{ task.task_due_date }}</td>
          <td>{{ task.task_estimated_time_to_finish }}</td>
          <td>{{ task.task_points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DepartmentTasks',
  data() {
    return {
      tasks: []
    };
  },
  async created() {
    const response = await fetch('http://127.0.0.1:8000/tasks/');
    const data = await response.json();
    this.tasks = data;
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