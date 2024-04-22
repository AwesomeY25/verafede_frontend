<template>
  <!-- intern info -->
  <div class="container-fluid">
    <div class="card px-4 py-4 mb-4" id="intern_info">
      <!-- header and edit button -->
      <div class="d-flex align-items-start">
        <h2>{{ internInfo.last_name }}, {{ internInfo.first_name }} {{ internInfo.mid_initial }}</h2>
        <button type="button" class="btn btn-light" id="edit_btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
          </svg>
          <i class="bi bi-pencil-square"></i>
        </button>
      </div>
      <!-- elements under header -->
      <div class="d-flex align-items-start" id="under_header">
        <p>{{ internInfo.account_type }} | {{ internInfo.username }}</p>
        <p class="ms-2"><span class="badge rounded-pill text-bg-success">{{ internInfo.intern_status }}</span></p>
      </div>
      <div class="row mt-2">
        <!-- personal information -->
        <div class="col-6">
          <h5>Personal Information</h5>
          <div class="d-flex align-items-start">
            <p>Gender:</p>
            <p class="fw-bold ms-2">{{ internInfo.gender }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>Birthday:</p>
            <p class="fw-bold ms-2">{{ formatDate(internInfo.birthday) }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>Mobile Number:</p>
            <p class="fw-bold ms-2">{{ internInfo.mobile_number }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>E-mail Address:</p>
            <p class="fw-bold ms-2">{{ internInfo.email }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>School:</p>
            <p class="fw-bold ms-2">{{ internInfo.school }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>Year Level:</p>
            <p class="fw-bold ms-2">{{ internInfo.year_level }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>Degree:</p>
            <p class="fw-bold ms-2">{{ internInfo.degree }}</p>
          </div>
        </div>
        <!-- internship information -->
        <div class="col-6">
          <h5>Internship Information</h5>
          <div class="d-flex align-items-start">
            <p>Type of Internship:</p>
            <p class="fw-bold ms-2">{{ internInfo.internship_type }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>School Coordinator:</p>
            <p class="fw-bold ms-2">{{ internInfo.school_coordinator }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>Start Date:</p>
            <p class="fw-bold ms-2">{{ formatDate(internInfo.start_date) }}</p>
          </div>
          <div class="d-flex align-items-start">
            <p>End Date:</p>
            <p class="fw-bold ms-2">{{ formatDate(internInfo.end_date) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">

    <!-- weekly workload dashboard -->
    <div class="col-5">
      <div class="card" id="weekly_workload">
        <h5>Weekly Workload Dashboard</h5>
        <div class="container mb-2">
          <p>Week 7</p>
          <div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="120">
            <div class="progress-bar" style="width: 83.33%">100%</div>
          </div>
          <p><span class="d-flex justify-content-end" style="color: #AB662E; margin-top: 2px;">Maximum Capacity</span></p>
        </div>
      </div>
    </div>

    <!-- this week's tasks -->
    <div class="col-7">
      <div class="container-fluid" id="weekly_tasks">
        <h5>This Week's Tasks</h5>
        <!-- 1 card = 1 task -->
        <div class="card mb-2" id="task_instance">
          <div class="d-flex">
            <div class="p-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="task_checkbox">
              </div>
            </div>
            <div class="p-2">
              <div class="d-flex align-items-start">
                <h6 id="task_title">Task Title 1</h6>
                <p class="ms-2" id="progress_badge"><span class="badge rounded-pill bg-danger">Not Started</span></p>
              </div>
              <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        title: 'Intern Information',
        internInfo: {},
        currentUser: {id: 1}
      };
    },
methods: {
  async fetchInternInfo(id) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/intern/${id}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch intern information');
      }
      const data = await response.json();
      this.internInfo = data;
    } catch (error) {
      console.error('Error fetching intern information:', error.message);
    }
  },
  formatDate(date) {
    if (!date) return ''; // Handle empty date
    return new Date(date).toLocaleDateString();
  }
},
created() {
  // Replace `currentUser` with the actual object containing the current user's `intern_id`
  const userId = 1;
  this.fetchInternInfo(userId);
}
  };
  </script>

<style>
#intern_info {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFE7E5;
  margin-right: 20px;
}
#intern_info > div > h2 {
  font-weight: bold;
  margin-bottom: 0px;
}
#edit_btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  background-color: #FFE7E5;
  border-color: #FFE7E5;
  color: #52525C;
  height: 30px;
  width: 30px;
  margin: 1px;
  padding: 1px;
  margin-left: 10px;
}
#edit_btn:hover {
  background-color: #ffd1cd;
}
#intern_info > div > div > h5 {
  font-weight: bold;
  color: #F27036;
  margin-bottom: 15px;
}
#intern_info > div > div > div {
  line-height: 0.6;
  margin-left: 17px;
}
#weekly_workload {
  border-color: #EA580C;
  border-width: 2px;
  padding: 30px 30px 30px 30px;
}
#weekly_workload > h5 {
  color: #EA580C;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
}
#weekly_workload > div > p {
  color: #0A0A0A;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 2px;
}
.progress {
  border-radius: 3px !important;
  height: 25px !important;
}
.progress > .progress-bar {
  background-color: #FB923C;
  color: #0A0A0A;
}
#weekly_tasks > h5 {
  color: #EA580C;
  font-weight: bold;
  margin-bottom: 15px;
}
#task_instance {
  padding-right: 10px;
  padding-bottom: 2px;
  border-color: #0A0A0A;
}
.form-check {
  margin-left: 10px;
  margin-top: 2px;
}
#task_checkbox {
  height: 25px;
  width: 25px;
  background-color: #D9D9D9;
}
#task_checkbox:checked {
  background-color: #484848;
  border-color: #484848;
}
#task_checkbox:focus {
  border-color: #484848;
  box-shadow: 0 0 0px;
}
#task_title {
  color: #0A0A0A;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 5px;
}
#progress_badge {
  font-size: 12px;
  margin-bottom: 0px;
  margin-top: 4px;
}
#task_instance > div > div > p {
  color: #484848;
  font-size: 12px;
}
</style>