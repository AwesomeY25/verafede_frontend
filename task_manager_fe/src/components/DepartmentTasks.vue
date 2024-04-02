<template>

  <div class="container py-3">
    <h1>{{ DepartmentTasks }}</h1>

    <div class="p-2" id="header">
                <h3>
                    Department Tasks
                </h3>
            </div>
    
    <div class="p-2 d-flex align-items-center">
      <div class="dropdown me-2">
        <ul class="dropdown-menu" aria-labelledby="kebab_menu">
          <li><a class="dropdown-item" href="#">Select All</a></li>
          <li><a class="dropdown-item" href="#">Deselect All</a></li>
        </ul>
      </div>

      <div class="mb-3 me-2">
        <label for="workload" class="form-label">Workload</label>
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
    </div>

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
  title: 'All Tasks',
  name: 'DepartmentTasks',
  data() {
    return {
      tasks: [
      {
          task_id: 1,
          task_name: 'Task 1',
          task_description: 'Description for Task 1',
          task_date_created: '2024-04-02',
          task_due_date: '2024-04-10',
          task_estimated_time_to_finish: '5 hours',
          task_points: 10
        },
        {
          task_id: 2,
          task_name: 'Task 2',
          task_description: 'Description for Task 2',
          task_date_created: '2024-04-03',
          task_due_date: '2024-04-15',
          task_estimated_time_to_finish: '8 hours',
          task_points: 15
        },
        // Add tasks here if needed
      ],
    };
  },
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