<template>
  <!-- intern info -->
  <div class="container-fluid">
    <div class="card px-4 py-4 mb-4" id="intern_info">
      <!-- header -->
      <div class="d-flex align-items-start">
        <h2>{{ internInfo.last_name }}, {{ internInfo.first_name }} {{ internInfo.mid_initial }}</h2>
        <!-- edit profile button -->
        <button type="button" class="btn btn-light" id="edit_btn" data-bs-toggle="modal" data-bs-target="#edit_profile_modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
          </svg>
          <i class="bi bi-pencil-square"></i>
        </button>

        <!-- edit profile modal -->
        <div class="modal-container">
          <div class="modal fade" id="edit_profile_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-body">
                  <h1 class="modal-title text-center mb-4">Edit Intern Profile</h1>
                  <form class="form">
                    <h5 id="modal_body_header">Personal Information</h5>
                    <div class="row mb-2">
                      <div class="form-group col row">
                        <label for="first_name" class="col-sm-5 col-form-label">First Name:</label>
                        <div class="col-sm-7"><input class="form-control" type="text" id="first_name" name="first_name" :value="internInfo.first_name" readonly></div>
                      </div>
                      <div class="form-group col row">
                        <label for="mid_initial" class="col-sm-6 col-form-label">Middle Initial:</label>
                        <div class="col-sm-6"><input class="form-control" type="text" id="mid_initial" name="mid_initial" :value="internInfo.mid_initial" readonly></div>
                      </div>
                      <div class="form-group col row">
                        <label for="last_name" class="col-sm-5 col-form-label">Last Name:</label>
                        <div class="col-sm-7"><input class="form-control" type="text" id="last_name" name="last_name" :value="internInfo.last_name" readonly></div>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col row">
                        <label for="gender" class="col-sm-3 col-form-label">Gender:</label>
                        <div class="col-sm-9">
                          <select v-model="updateProfileData.gender" class="form-select" id="gender" name="gender" aria-label="Default select example">
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                            <option value="Prefer Not To Say">Prefer Not To Say</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group col row">
                        <label for="birthday" class="col-sm-3 col-form-label">Birthday:</label>
                        <div class="col-sm-9"><input v-model="updateProfileData.birthday" type="date" class="form-control" id="birthday" name="birthday"></div>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col row">
                        <label for="mobile_number" class="col-sm-5 col-form-label">Mobile Number:</label>
                        <div class="col-sm-7"><input v-model="updateProfileData.mobile_number" class="form-control" type="text" id="mobile_number" name="mobile_number"></div>
                      </div>
                      <div class="form-group col row">
                        <label for="email" class="col-sm-4 col-form-label">Email Address:</label>
                        <div class="col-sm-8"><input v-model="updateProfileData.email" type="email" class="form-control" id="email" name="email"></div>
                      </div>
                    </div>
                    <div class="form-group row mb-2">
                      <label for="school" class="col-sm-3 col-form-label">School/University:</label>
                      <div class="col-sm-9"><input v-model="updateProfileData.school" type="text" class="form-control" id="school" name="school"></div>
                    </div>
                    <div class="row mb-4">
                      <div class="form-group col row">
                        <label for="degree" class="col-sm-5 col-form-label">Degree Program:</label>
                        <div class="col-sm-7"><input v-model="updateProfileData.degree" class="form-control" type="text" id="degree" name="degree"></div>
                      </div>
                      <div class="form-group col row">
                        <label for="year_level" class="col-sm-4 col-form-label">Year Level:</label>
                        <div class="col-sm-8">
                          <select v-model="updateProfileData.year_level" id="year_level" name="year_level" class="form-select" aria-label="Select Year Level">
                            <option value="1">First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                            <option value="5">Fifth Year</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <h5 id="modal_body_header">Internship Information</h5>
                    <div class="form-group row mb-2">
                      <label for="internship_type" class="col-sm-3 col-form-label">Type of Internship:</label>
                      <div class="col-sm-9">
                        <select v-model="updateProfileData.internship_type" id="internship_type" name="internship_type" class="form-select" aria-label="Select Internship Type">
                            <option value="Required">Required Internship</option>
                            <option value="Voluntary">Voluntary Internship</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col row">
                        <label for="start_date" class="col-sm-4 col-form-label">Start Date:</label>
                        <div class="col-sm-8"><input v-model="updateProfileData.start_date" type="date" class="form-control" id="start_date" name="start_date"></div>
                      </div>
                      <div class="form-group col row">
                        <label for="end_date" class="col-sm-3 col-form-label">End Date:</label>
                        <div class="col-sm-9"><input v-model="updateProfileData.end_date" type="date" class="form-control" id="end_date" name="end_date"></div>
                      </div>
                    </div>
                    <div class="form-group row mb-5">
                      <label for="school_coordinator" class="col-sm-3 col-form-label">School Coordinator:</label>
                      <div class="col-sm-9"><input v-model="updateProfileData.school_coordinator" class="form-control" type="text" id="school_coordinator" name="school_coordinator"></div>
                    </div>
                    <div class="col mt-5 px-2" id="buttons">
                      <div class="row d-inline-flex align-self-end m-2">
                        <div class="col mx-auto" id="cancel_btn">
                          <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                        <div class="col mx-auto" id="submit_btn">
                          <button type="button" class="btn btn-primary" @click="updateProfile(id)">Save Changes</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- elements under header -->
      <div class="d-flex align-items-start" id="under_header">
        <p>{{ internInfo.account_type }} | {{ internInfo.username }}</p>
        <p class="ms-2"><span class="badge rounded-pill" id="intern_badge_color">{{ internBadgeColor(internInfo.intern_status) }}</span></p>
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
                <div class="progress-bar" id="progress_bar" :style="`width: ${percentage}%; background-color: ${getColor(percentage)}`">{{ percentage }}%</div>
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
                <p class="ms-2" id="progress_badge"><span class="badge rounded-pill" id="task_badge_color">Not Started</span></p> 
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
import { Modal } from 'bootstrap';
  export default {
    data() {
      return {
        title: 'Intern Information',
        percentage: 83.33,
        internInfo: {},
        currentUser: {id: 1},
        updateProfileData: {
          birthday: '',
          gender: '',
          mobile_number: '',
          email: '',
          school: '',
          degree: '',
          year_level: '',
          internship_type: '',
          start_date: '',
          end_date: '',
          school_coordinator: ''
        }
      };
    },
methods: {
  getColor(percentage) {
      if (percentage < 100) {
        return 'green';
      } else if (percentage > 80) {
        return 'orange';
      } else {
        return 'red';
      }
    },
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
  async updateProfile(id) {
    const modal = new Modal(document.getElementById('edit_profile_modal'));
    modal.hide(); 

    const updatedProfileData = {
      gender: this.updateProfileData.gender,
      birthday: this.updateProfileData.birthday,
      mobile_number: this.updateProfileData.mobile_number,
      email: this.updateProfileData.email,
      school: this.updateProfileData.school,
      degree: this.updateProfileData.degree,
      year_level: this.updateProfileData.year_level,
      internship_type: this.updateProfileData.internship_type,
      start_date: this.updateProfileData.start_date,
      end_date: this.updateProfileData.end_date,
      school_coordinator: this.updateProfileData.school_coordinator,
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/intern/${id}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProfileData)
      });

      if (response.ok) {
        // Profile updated successfully
        const profileResponse = await fetch(`http://127.0.0.1:8000/intern/${id}/`);
        const newInternData = await profileResponse.json();
        this.internInfo = newInternData;
      } else {
        // Error handling
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  },
  formatDate(date) {
    if (!date) return ''; // Handle empty date
    return new Date(date).toLocaleDateString();
  },
  internBadgeColor(status) {
    if (!status) return ''; // Handle empty status
    const internBadge = document.getElementById("intern_badge_color");
    let color;
    if (status === "Active") {
      color = "#2B8C2F";
    } else if (status === "Inactive") {
      color = "#EAB308";
    } else if (status === "Onboarded") {
      color = "#F27036";
    } else if (status === "Offboarded") {
      color = "#EF4444";
    }
    internBadge.style.backgroundColor = color;
  },
  taskBadgeColor(status) {
    if (!status) return ''; // Handle empty status
    const taskBadge = document.getElementById("task_badge_color");
    let color;
    if (status === "Not Started") {
      color = "#EE514F";
    } else if (status === "In Progress") {
      color = "#EAB308";
    } else if (status === "Done") {
      color = "#22C55E";
    }
    taskBadge.style.backgroundColor = color;
  },
  formatProgressBar(workloadPercentage) {
    if(!workloadPercentage) return ''; // Handle empty workload percentage
    const progressBar = document.getElementById("progress_bar");
    const widthValue = (workloadPercentage / 120) * 100
    let color;
    if (workloadPercentage < 20) {
      color = "#10A2DD";
    } else if (workloadPercentage == 20) {
      color = "#5ABB6A";
    } else if (workloadPercentage >= 20 && workloadPercentage <= 100) {
      color = "#FED233";
    } else if (workloadPercentage == 100) {
      color = "#F99C35";
    } else if (workloadPercentage > 100) {
      color = "#F14738";
    }
    progressBar.style.width = widthValue;
    progressBar.style.backgroundColor = color;
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
.modal-container {
  display: flex;
  justify-content: center;
}
.modal-title {
  font-weight: bold;
  font-size: 28px;
}
#modal_body_header {
  font-weight: bold;
  color: #F27036;
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