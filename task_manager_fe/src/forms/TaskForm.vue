<template>
  <h2 id="h2">Create New Task</h2>
  <div class="container">
    <form @submit.prevent="submitTask" id="taskForm">
      <div class="mb-3">
        <label for="task_name" class="form-label">Task Name:</label>
        <input v-model="taskData.task_name" type="text" class="form-control" id="taskName" placeholder="Complete Project" required />
      </div>

      <div class="mb-3">
        <label for="task_description" class="form-label">Task Description:</label>
        <textarea v-model="taskData.task_description" class="form-control" id="taskDescription" placeholder="Finish the project documentation" required></textarea>
      </div>

      <div class="mb-3">
        <label for="interns" class="form-label">Assigned Interns (comma-separated IDs):</label>
        <input v-model="internsInput" type="text" class="form-control" id="interns" placeholder="Intern IDs (e.g., 10001, 10002, 10003)" />
      </div>
      
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="task_date_created" class="form-label">Date Created:</label>
          <input v-model="taskData.task_date_created" type="date" class="form-control" id="dateCreated" placeholder="2024-03-15" required />
        </div>

        <div class="col-md-6 mb-3">
          <label for="task_due_date" class="form-label">Task Due:</label>
          <input v-model="taskData.task_due_date" type="date" class="form-control" id="taskDue" placeholder="2024-04-30" required />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="task_estimated_time_to_finish" class="form-label">Estimated Time to Finish (hours):</label>
          <input v-model="taskData.task_estimated_time_to_finish" type="number" class="form-control" id="estimatedTime" placeholder="20.5" required />
        </div>

        <div class="col-md-6 mb-3">
          <label for="task_points" class="form-label">Task Points:</label>
          <input v-model="taskData.task_points" type="number" class="form-control" id="taskPoints" placeholder="15" required />
        </div>
      </div>

      <div class="mb-3">
        <label for="task_status" class="form-label">Task Status:</label>
        <select v-model="taskData.task_status" class="form-select" id="taskStatus" required>
          <option v-for="status in taskStatusChoices" :key="status[0]" :value="status[0]">{{ status[1] }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="date_started" class="form-label">Date Started:</label>
        <input v-model="taskData.date_started" type="date" class="form-control" id="dateStarted" placeholder="2024-03-15" />
      </div>

      <div class="mb-3">
        <label for="file_submission" class="form-label">File Submission Link:</label>
        <input v-model="taskData.file_submission" type="url" class="form-control" id="fileSubmission" placeholder="https://docs.google.com/document/d/1ylYNmUY3FLdTlAEmfJrR6O3VBlKfngh2qQOtiZ_R8EU/edit" />
      </div>

      <div class="col mt-5 px-2" id="buttons">
          <div class="row d-inline-flex align-self-end m-2">
              <div class="col mx-auto" id="cancel_btn">
                  <button class="btn btn-outline-primary mb-3">Cancel</button>
              </div>
              <div class="col mx-auto" id="create_btn">
                  <button type="submit" class="btn btn-primary">Create Task</button>
              </div>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      taskData: {
        task_name: "",
        task_description: "",
        task_date_created: "",
        task_due_date: "",
        task_estimated_time_to_finish: null,
        task_points: null,
        interns: [],
        task_status: "Not Started",
        date_started: "",
        file_submission: ""
      },
      internsInput: "",
      taskStatusChoices: [
        ['Not Started', 'Not Started'],
        ['In Progress', 'In Progress'],
        ['Done', 'Done'],
        ['Cancelled', 'Cancelled']
      ]
    };
  },
  methods: {
    async submitTask() {
      try {
        // Split internsInput into an array of IDs
        this.taskData.interns = this.internsInput.split(',').map(id => id.trim());
        
        const response = await fetch("http://127.0.0.1:8000/task/add/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.taskData),
        });
        
        if (!response.ok) {
          throw new Error("Failed to submit task");
        }

        console.log("Task submitted successfully");

        this.resetForm();
      } catch (error) {
        console.error("Error submitting task:", error);
      }
    },
    resetForm() {
      this.taskData = {
        task_name: "",
        task_description: "",
        task_date_created: "",
        task_due_date: "",
        task_estimated_time_to_finish: null,
        task_points: null,
        interns: [],
        task_status: "Not Started",
        date_started: "",
        file_submission: ""
      };
      this.internsInput = "";
    },
  },
};
</script>

<style>
#h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  text-align: center;
  color: #F27036;
  margin-top: 10px;
  margin-bottom: 30px;
}
#buttons {
  text-align: center;
}
#cancel_btn > button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #52525C;
  font-size: 14px;
  border-color: #52525C;
  width: 300px;
  height: 38px;
}
#cancel_btn > button:hover {
  background-color: #D1D9E0;
  border-color: #52525C;
  width: 300px;
  height: 38px;
}
#create_btn > button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #F8FAFC;
  font-size: 14px;
  background-color: #EA580C;
  border-color: #EA580C;
  width: 300px;
  height: 38px;
}
#create_btn > button:hover {
  background-color: #d24f0a;
  border-color: #d24f0a;
  width: 300px;
  height: 38px;
}
</style>