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
          <th scope="col">Task Name</th>
          <th scope="col">Task Status</th>
          <th scope="col">Assigned To</th>
          <th scope="col">Due Date</th>
          <th scope="col">Est. Time To Finish</th>
          <th scope="col">Task Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.task_id" @click="showModal(task)">
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
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="task_name" class="form-label">Task Name:</label>
              <input class="form-control modal-title" id="exampleModalCenterTitle" v-model="selectedTask.task_name" />
            </div>
            <div class="mb-3">
              <label for="task_progress" class="form-label">Task Progress:</label>
              <select v-model="selectedTask.task_progress" class="form-select">
                <option v-for="option in taskProgressOptions" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="assigned_to" class="form-label">Assigned To:</label>
              <select v-model="selectedTask.task_assigned_to" class="form-select">
                <option v-for="intern in interns" :key="intern.intern_id" :value="intern.intern_id">
                  {{ intern.last_name }}, {{ intern.first_name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="task_name" class="form-label">Task Due:</label>
              <input v-model="selectedTask.task_due_date" type="text" class="form-control" required :id="'taskDueDate'"/>
            </div>
            <div class="mb-3">
              <label for="task_name" class="form-label">Est. Time To Finish:</label>
              <input v-model="selectedTask.task_estimated_time_to_finish" type="text" class="form-control" required :id="'taskEstimatedTimeToFinish'"/>
            </div>
            <div class="mb-3">
              <label for="task_name" class="form-label">Task Points:</label>
              <input v-model="selectedTask.task_points" type="text" class="form-control" required :id="'taskPoints'"/>
            </div>
            <div class="mb-3">
              <label for="task_description" class="form-label">Task Description:</label>
              <input v-model="selectedTask.task_description" type="text" class="form-control" required :id="'taskDescription'"/>
            </div>
            <div class="mb-3">
              <label for="task_date_created" class="form-label">Task Date Created:</label>
              <input v-model="selectedTask.task_date_created" type="text" class="form-control" required :id="'taskDateCreated'"/>
            </div>
            <div class="mb-3">
              <label for="task_name" class="form-label">Task Points:</label>
              <input v-model="selectedTask.task_points" type="text" class="form-control" required :id="'taskPoints'"/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  @click="updateTask(selectedTask.task_id)">Update</button>
            <button type="button" class="btn btn-secondary" @click="deleteTask(selectedTask.task_id)">Delete</button>
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
      interns: [],
      tasks: [],
      taskProgressOptions: ['In Progress', 'Cancelled', 'Done', 'Not Started'],
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
      }
    };
  },
  methods: {
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