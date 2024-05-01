<template>
  <div>
    <h2>Task Details</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p><strong>Task ID:</strong> {{ task.task_id }}</p>
      <p><strong>Task Name:</strong> {{ task.task_name }}</p>
      <p><strong>Description:</strong> {{ task.task_description }}</p>
      <p><strong>Date Created:</strong> {{ task.task_date_created }}</p>
      <p><strong>Due Date:</strong> {{ task.task_due_date }}</p>
      <p><strong>Estimated Time to Finish:</strong> {{ task.task_estimated_time_to_finish }}</p>
      <p><strong>Points:</strong> {{ task.task_points }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      task: {}
    };
  },
  created() {
    this.fetchTaskDetails();
  },
  methods: {
    async fetchTaskDetails() {
      try {
        const taskId = this.$route.params.id;
        const response = await fetch(`http://127.0.0.1:8000/task/${taskId}/`);
        const data = await response.json();
        this.task = data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>  