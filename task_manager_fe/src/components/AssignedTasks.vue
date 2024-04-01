<template>
  <div>
    <h1>Task Assignments</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Intern ID</th>
          <th>Task ID</th>
          <th>Task Status</th>
          <th>Date Started</th>
          <th>File Submission</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="taskAssignment in taskAssignments" :key="taskAssignment.id">
          <td>{{ taskAssignment.id }}</td>
          <td>{{ taskAssignment.intern_id }}</td>
          <td>{{ taskAssignment.task_id }}</td>
          <td>{{ taskAssignment.task_status }}</td>
          <td>{{ taskAssignment.date_started }}</td>
          <td>{{ taskAssignment.file_submission }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AssignedTasks',
  data() {
    return {
      taskAssignments: []
    };
  },
  async created() {
    const response = await fetch('http://127.0.0.1:8000/tasks/assigned');
    const data = await response.json();
    this.taskAssignments = data;
  }
};
</script>