<template>
  <div class="container py-3">
    <h2 id="h2">Department Tasks</h2>
    <form>
      <div class="d-flex flex-row" id="filters">
        <div class="p-2">
          <label for="task_status_filter" class="form-label">Task Status</label>
          <select class="form-select" id="task_status_filter" name="task_status_filter" v-model="filterTaskStatus">
            <option selected>All</option>
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Done</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div class="p-2">
          <label for="start_date_filter" class="form-label">Start Date</label>
          <input type="date" class="form-control" id="start_date_filter" name="start_date_filter" v-model="filterStartDate">
        </div>
        <div class="p-2">
          <label for="end_date_filter" class="form-label">End Date</label>
          <input type="date" class="form-control" id="end_date_filter" name="end_date_filter" v-model="filterEndDate">
        </div>
      </div>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col" @click="sortTaskBy('task_name')">Task Name</th>
          <th scope="col" @click="sortTaskBy('task_status')">Task Status</th>
          <th scope="col" @click="sortTaskBy('assigned_to')">Assigned To</th>
          <th scope="col" @click="sortTaskBy('due_date')">Due Date</th>
          <th scope="col" @click="sortTaskBy('estimated_time_to_finish')">Est. Time To Finish</th>
          <th scope="col" @click="sortTaskBy('task_points')">Task Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in sortedTasks" :key="task.task_id" @click="showModal(task)">
          <td>{{ task.task_name }}</td>
          <td>
            <span v-for="(assignment, index) in task.task_assignments" :key="index">
              {{ task.task_assignments[0].task_status }}<br v-if="index < task.task_assignments.length - 1">
            </span>
          </td>
          <td>
            <span v-for="(assignment, index) in task.task_assignments" :key="index">
              {{ assignment.last_name }}, {{ assignment.first_name }}<br v-if="index < task.task_assignments.length - 1">
            </span>
          </td>
          <td>{{ task.task_due_date }}</td>
          <td>{{ task.task_estimated_time_to_finish }}</td>
          <td>{{ task.task_points }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div class="modal" id="task-modal" tabindex="-1" aria-labelledby="task-modal-label" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="mb-3">
              <input v-model="selectedTask.task_name" type="text" class="no-border" id="taskName" placeholder="Task Name" required />
            </div>
            <hr>
            <div class="row">
              <div class="col-9">
                <div class="form-group row mb-2">
                  <label for="interns" class="col-3 col-form-label">Assigned Interns:</label>
                  <div class="col-5">
                    <select v-model="selectedTask.task_assigned_to" class="form-select" id="interns">
                      <option v-for="intern in interns" :key="intern.intern_id" :value="intern.intern_id">
                        {{ intern.last_name }}, {{ intern.first_name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="task_date_created" class="col-3 col-form-label">Date Created:</label>
                  <div class="col-5">
                    <input v-model="selectedTask.task_date_created" type="text" class="form-control" id="'taskDateCreated'" required />
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="task_due_date" class="col-3 col-form-label">Task Due:</label>
                  <div class="col-5">
                    <input v-model="selectedTask.task_due_date" type="text" class="form-control" :id="'taskDueDate'" required />
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="task_estimated_time_to_finish" class="col-3 col-form-label">Estimated Time to Finish (hours):</label>
                  <div class="col-5">
                    <input v-model="selectedTask.task_estimated_time_to_finish" type="number" class="form-control" :id="'taskEstimatedTimeToFinish'" required />
                  </div>
                </div>
                <div class="form-group row mb-4">
                  <label for="task_points" class="col-3 col-form-label">Task Points:</label>
                  <div class="col-5">
                    <input v-model="selectedTask.task_points" type="number" class="form-control" :id="'taskPoints'" required />
                  </div>
                </div>
              </div>
              <div class="col-3">
                <select v-model="selectedTask.task_progress" class="form-select" :style="{ backgroundColor: statusColor }" id="taskStatus" required>
                  <option v-for="option in taskProgressOptions" :key="option.name" :value="option.name">{{ option.name }}</option>
                </select>
              </div>
            </div>
            <div class="mb-4">
              <label for="task_description" class="form-label">Task Description</label>
              <textarea rows="3" v-model="selectedTask.task_description" class="form-control text-area" :id="'taskDescription'" required></textarea>
            </div>
          </div>
          <div class="d-flex">
            <div class="p-2 flex-grow-1">
              <button type="button" class="btn btn-primary" @click="deleteTask(selectedTask.task_id)" id="deleteTask_btn">Delete</button>
            </div>
            <div class="p-2">
              <button type="button" class="p-2 btn btn-outline-primary" data-bs-dismiss="modal" id="cancelUpdateTask_btn">Cancel</button>
            </div>
            <div class="p-2">
              <button type="button" class="p-2 btn btn-primary" data-bs-dismiss="modal" @click="updateTask(selectedTask.task_id)" id="updateTask_btn">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
  name: 'AllTasks',
  data() {
    return {
      sortBy: 'task_name',
      sortOrder: 'asc',
      interns: [],
      tasks: [],
      taskProgressOptions: [
        {
          name: 'Not Started',
          color: '#EF4444'
        },
        {
          name: 'In Progress',
          color: '#EAB308'
        },
        {
          name: 'Done',
          color: '#22C55E'
        },
        {
          name: 'Cancelled',
          color: '#000000'
        }
      ],
      selectedTask: {
        task_id: '',
        task_name: '',
        task_description: '',
        task_assigned_to: '',
        task_progress: '',
        task_date_created: '',
        task_due_date: '',
        task_estimated_time_to_finish: '',
        task_points: ''
      },
      filterTaskStatus: 'All',
      filterStartDate: '',
      filterEndDate: '',
    };
  },
  methods: {
    sortTaskBy(key) {
      this.sortBy = key;
      this.sortOrder = this.sortOrder === 'desc'? 'asc' : 'desc';
      this.fetchTasks();
    },
    fetchInterns() {
      fetch('http://127.0.0.1:8000/interns/')
        .then((response) => response.json())
        .then((data) => {
          this.interns = data;
        });
    },
    showModal(task) {
      this.selectedTask = task;
      this.selectedTask.task_progress = task.task_assignments[0].task_status;
      this.selectedTask.task_assigned_to = task.task_assignments.first_name;
      const modal = new Modal(document.getElementById('task-modal'));
      modal.show();
    },
    async fetchTasks() {
      const params = new URLSearchParams();
      if (this.filterTaskStatus!== 'All') {
        params.append('task_status', this.filterTaskStatus);
      }
      if (this.filterStartDate) {
        params.append('start_date', this.filterStartDate);
      }
      if (this.filterEndDate) {
        params.append('end_date', this.filterEndDate);
      }
      params.append('sort_by', this.sortBy);
      params.append('sort_order', this.sortOrder);

      const response = await fetch(`http://127.0.0.1:8000/tasks/?${params}`);
      const data = await response.json();
      this.tasks = data;
    },
    async deleteTask(taskId) {
      const modal = new Modal(document.getElementById('task-modal'));
      modal.hide(); // Close the modal first

      try {
        const response = await fetch(`http://127.0.0.1:8000/task/delete/${taskId}/`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Task deleted successfully, fetch the updated list of tasks
          const tasksResponse = await fetch('http://127.0.0.1:8000/tasks/');
          const tasksData = await tasksResponse.json();
          this.tasks = tasksData;
        } else {
          // Error handling
          console.error('Failed to delete task');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async updateTask(taskId) {
      const modal = new Modal(document.getElementById('task-modal'));
      modal.hide(); // Close the modal first

      const taskData = {
        task_name: this.selectedTask.task_name,
        task_description: this.selectedTask.task_description,
        task_date_created: this.selectedTask.task_date_created,
        task_due_date: this.selectedTask.task_due_date,
        task_estimated_time_to_finish: this.selectedTask.task_estimated_time_to_finish,
        task_points: this.selectedTask.task_points,
        interns: [this.selectedTask.task_assigned_to], // assuming this is the intern ID
        task_status: this.selectedTask.task_progress,
        date_started: this.selectedTask.task_date_created,
        file_submission: "" // you may want to add this field as well
      };

      try {
        const response = await fetch(`http://127.0.0.1:8000/task/update/${taskId}/`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskData)
        });

        if (response.ok) {
          // Task updated successfully, fetch the updated list of tasks
          const tasksResponse = await fetch('http://127.0.0.1:8000/tasks/');
          const tasksData = await tasksResponse.json();
          this.tasks = tasksData;
        } else {
          // Error handling
          console.error('Failed to update task');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  computed: {
    sortedTasks() {
      return this.tasks.slice().sort((a, b) => {
        if (this.sortBy === 'due_date' || this.sortBy === 'estimated_time_to_finish') {
          return this.sortOrder === 'desc'
          ? new Date(b[this.sortBy]) - new Date(a[this.sortBy])
            : new Date(a[this.sortBy]) - new Date(b[this.sortBy]);
        } else if (this.sortBy === 'assigned_to') {
          return this.sortOrder === 'desc'
          ? a.task_assignments[0].last_name > b.task_assignments[0].last_name? 1 : -1
            : a.task_assignments[0].last_name < b.task_assignments[0].last_name? 1 : -1;
        } else {
          return this.sortOrder === 'desc'
          ? a[this.sortBy] < b[this.sortBy]? 1 : -1
            : a[this.sortBy] > b[this.sortBy]? 1 : -1;
        }
      });
    },
    statusColor() {
      let color = '#EF4444';
      const status = this.taskProgressOptions.find(status => status.name === this.selectedTask.task_progress);
      if (status) {
        color = status.color;
      }
      return color;
    },
  },
  async created() {
    const response = await fetch('http://127.0.0.1:8000/tasks/');
    const data = await response.json();
    this.fetchInterns();
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
#deleteTask_btn {
  width: 100px;
  height: 38px;
  font-weight: bold;
  background-color: #EE514F;
  border-color: #EE514F;
  color: #F8FAFC;
  font-size: 14px;
}
#deleteTask_btn:hover {
  background-color: #740c0b;
  border-color: #740c0b;
  width: 100px;
  height: 38px;
}
#cancelUpdateTask_btn {
  font-weight: bold;
  font-size: 14px;
  color: #52525C;
  border-color: #52525C;
  width: 100px;
  height: 38px;
}
#cancelUpdateTask_btn:hover {
  background-color: #D1D9E0;
  border-color: #52525C;
  width: 100px;
  height: 38px;
}
#updateTask_btn {
  font-weight: bold;
  font-size: 14px;
  color: #F8FAFC;
  background-color: #EA580C;
  border-color: #EA580C;
  width: 100px;
  height: 38px;
}
#updateTask_btn:hover {
  background-color: #d24f0a;
  border-color: #d24f0a;
  width: 100px;
  height: 38px;
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