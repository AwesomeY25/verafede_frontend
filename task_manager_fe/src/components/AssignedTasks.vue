<template>
  <div>
    <h2>Task Assignments</h2>
    <table class="table" id="assigned_tasks">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Intern ID</th>
          <th scope="col">Task ID</th>
          <th scope="col">Task Status</th>
          <th scope="col">Date Started</th>
          <th scope="col">File Submission</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="taskAssignment in taskAssignments" :key="taskAssignment.id" @click="openModal(taskAssignment)">
          <td>{{ taskAssignment.id }}</td>
          <td>{{ taskAssignment.intern_id }}</td>
          <td>{{ taskAssignment.task_id }}</td>
          <td>{{ taskAssignment.task_status }}</td>
          <td>{{ taskAssignment.date_started }}</td>
          <td>{{ taskAssignment.file_submission }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <div class="box">
          <task-details :task="selectedTask" />
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssignedTasks',
  components: {
  },
  data() {
    return {
      taskAssignments: [],
      showModal: false,
      selectedTask: null
    };
  },
  async created() {
    await this.fetchTaskAssignments();
  },
  methods: {
    async fetchTaskAssignments() {
      try {
        const response = await fetch('http://127.0.0.1:8000/tasks/assigned');
        const data = await response.json();
        this.taskAssignments = data;
      } catch (error) {
        console.error('Error fetching task assignments:', error);
      }
    },
    openModal(taskAssignment) {
      this.selectedTask = taskAssignment;
      this.showModal = true;
    },
    closeModal() {
      this.selectedTask = null;
      this.showModal = false;
    }
  }
};
</script>

<style>
h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #F27036;
}
#assigned_tasks th {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EA580C;
  color: #F8FAFC;
}
#assigned_tasks td:nth-child(1) {
  text-align: center;
  font-weight: bold;
}
#assigned_tasks td {
  text-align: center;
}
#assigned_tasks td:nth-child(1) {
  font-weight: bold;
}
/* Add hover effect to indicate that rows are clickable */
#assigned_tasks tbody tr:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}
</style>