<template>
  <div>
    <h2>Task Details</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <form>
        <label for="task_id">Task ID:</label>
        <input type="text" id="task_id" v-model="task.task_id" disabled>

        <label for="task_name">Task Name:</label>
        <input type="text" id="task_name" v-model="task.task_name">

        <label for="task_description">Description:</label>
        <textarea id="task_description" v-model="task.task_description"></textarea>

        <label for="task_date_created">Date Created:</label>
        <input type="date" id="task_date_created" v-model="task.task_date_created" disabled>

        <label for="task_due_date">Due Date:</label>
        <input type="date" id="task_due_date" v-model="task.task_due_date">

        <label for="task_estimated_time_to_finish">Estimated Time to Finish:</label>
        <input type="number" id="task_estimated_time_to_finish" v-model="task.task_estimated_time_to_finish">

        <label for="task_points">Points:</label>
        <input type="number" id="task_points" v-model="task.task_points">
      </form>
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