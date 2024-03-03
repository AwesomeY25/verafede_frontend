<template>
  <div class="container mt-5">
    <form id="taskForm">
      <div class="mb-3">
        <label for="taskName" class="form-label">Task Name:</label>
        <input type="text" class="form-control" id="taskName" placeholder="Complete Project" required>
      </div>
      <div class="mb-3">
        <label for="taskDescription" class="form-label">Task Description:</label>
        <textarea class="form-control" id="taskDescription" placeholder="Finish the project documentation" required></textarea>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="dateCreated" class="form-label">Date Created:</label>
          <input type="date" class="form-control" id="dateCreated" placeholder="2024-03-15" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="taskDue" class="form-label">Task Due:</label>
          <input type="date" class="form-control" id="taskDue" placeholder="2024-04-30" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="estimatedTime" class="form-label">Estimated Time to Finish (hours):</label>
          <input type="number" class="form-control" id="estimatedTime" placeholder="20.5" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="taskPoints" class="form-label">Task Points:</label>
          <input type="number" class="form-control" id="taskPoints" placeholder="15" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="interns" class="form-label">Assigned Interns:</label>
        <input type="text" class="form-control" id="interns" placeholder="Intern IDs (e.g., 10001, 10002, 10003)">
      </div>
      <div class="mb-3">
        <label for="taskStatus" class="form-label">Task Status:</label>
        <input type="text" class="form-control" id="taskStatus" placeholder="Not Started">
      </div>
      <div class="mb-3">
        <label for="dateStarted" class="form-label">Date Started:</label>
        <input type="date" class="form-control" id="dateStarted" placeholder="2024-03-15">
      </div>
      <div class="mb-3">
        <label for="fileSubmission" class="form-label">File Submission Link:</label>
        <input type="url" class="form-control" id="fileSubmission" placeholder="https://docs.google.com/document/d/1ylYNmUY3FLdTlAEmfJrR6O3VBlKfngh2qQOtiZ_R8EU/edit">
      </div>
      <button type="submit" class="btn btn-primary">Submit Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      taskData: {
        taskName: 'Complete Project',
        taskDescription: 'Finish the project documentation',
        dateCreated: '2024-03-15',
        taskDue: '2024-04-30',
        estimatedTime: 20.5,
        taskPoints: 15,
        interns: '10001, 10002, 10003',
        taskStatus: 'Not Started',
        dateStarted: '2024-03-15',
        fileSubmission: 'https://docs.google.com/document/d/1ylYNmUY3FLdTlAEmfJrR6O3VBlKfngh2qQOtiZ_R8EU/edit'
      }
    };
  },
  methods: {
    async submitTask() {
      try {
        const response = await fetch('http://127.0.0.1:8000/tasks/new/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.taskData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit task');
        }

        console.log('Task submitted successfully');
        this.resetForm();
      } catch (error) {
        console.error('Error submitting task:', error);
      }
    },
    resetForm() {
      this.taskData = {
        taskName: '',
        taskDescription: '',
        dateCreated: '',
        taskDue: '',
        estimatedTime: null,
        taskPoints: null
      };
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

