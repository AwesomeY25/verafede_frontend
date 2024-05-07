<template>
  <h2 id="h2">Create New Task</h2>
  <div class="container">
    <form @submit.prevent="submitTask" id="taskForm">
      <div class="mb-3">
        <input v-model="taskData.task_name" type="text" class="no-border" id="taskName" placeholder="Task Name" required />
      </div>

      <hr>

      <div class="row">
        <div class="col-9">
          <div class="form-group row mb-2">
            <label for="interns" class="col-3 col-form-label">Assigned Interns:</label>
            <div class="col-5">
              <select v-model="taskData.task_assigned_to" class="form-select" id="interns">
                <option v-for="intern in interns" :key="intern.intern_id" :value="intern.intern_id">
                  {{ intern.last_name }}, {{ intern.first_name }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group row mb-2">
            <label for="task_date_created" class="col-3 col-form-label">Date Created:</label>
            <div class="col-5">
              <input v-model="taskData.task_date_created" type="date" class="form-control" id="dateCreated" required />
            </div>
          </div>

          <div class="form-group row mb-2">
            <label for="task_due_date" class="col-3 col-form-label">Task Due:</label>
            <div class="col-5">
              <input v-model="taskData.task_due_date" type="date" class="form-control" id="taskDue" required />
            </div>
          </div>

          <div class="form-group row mb-2">
            <label for="task_estimated_time_to_finish" class="col-3 col-form-label">Estimated Time to Finish (hours):</label>
            <div class="col-5">
              <input v-model="taskData.task_estimated_time_to_finish" type="number" class="form-control" id="estimatedTime" placeholder="20.5" required />
            </div>
          </div>

          <div class="form-group row mb-4">
            <label for="task_points" class="col-3 col-form-label">Task Points:</label>
            <div class="col-5">
              <input v-model="taskData.task_points" type="number" class="form-control" id="taskPoints" placeholder="15" required />
            </div>
          </div>
        </div>
        
        <div class="col-3">
          <select v-model="taskData.task_status" class="form-select" :style="{ backgroundColor: statusColor }" id="taskStatus" required>
            <option v-for="status in taskStatusChoices" :key="status.name" :value="status.name">{{ status.name }}</option>
          </select>
        </div>
      </div>

      <div class="mb-4">
        <label for="task_description" class="form-label">Task Description</label>
        <textarea rows="5" v-model="taskData.task_description" class="form-control text-area" id="taskDescription" placeholder="Finish the project documentation" required></textarea>
      </div>

      <div class="mb-4">
        <label for="date_started" class="form-label">Date Started</label>
        <input v-model="taskData.date_started" type="date" class="form-control" id="dateStarted" />
      </div>

      <div class="mb-4">
        <label for="file_submission" class="form-label">File Submission Link</label>
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
      interns: [],
      taskData: {
        task_name: "",
        task_description: "",
        task_date_created: "",
        task_due_date: "",
        task_estimated_time_to_finish: null,
        task_points: null,
        task_assigned_to: [],
        task_status: "Not Started",
        date_started: "",
        file_submission: ""
      },
      taskStatusChoices: [
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
      ]
    };
  },
  computed: {
    statusColor() {
      let color = '#EF4444';
      const status = this.taskStatusChoices.find(status => status.name === this.taskData.task_status);
      if (status) {
        color = status.color;
      }
      return color;
    },
  },
  methods: {
    fetchInterns() {
      fetch('http://127.0.0.1:8000/interns/')
       .then((response) => response.json())
       .then((data) => {
          this.interns = data;
          console.log(data);
        });
    },
    async submitTask() {
      try {
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
        task_assigned_to: [],
        task_status: "Not Started",
        date_started: "",
        file_submission: ""
      };
    },
  },
  mounted() {
    this.fetchInterns();
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
.no-border {
  border: 0;
  height: 36px;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
}
#taskName:focus {
  outline: none !important;
  border: 0;
  box-shadow: none;
}
#taskStatus {
  width: 135px;
  float: right;
  color: #FFFFFF;
  font-weight: bold;
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