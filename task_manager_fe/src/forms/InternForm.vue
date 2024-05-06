<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="tab-title" data-bs-toggle="tab" data-bs-target="#personal-info" type="button" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="tab-title" data-bs-toggle="tab" data-bs-target="#internship-info" type="button" role="tab" aria-controls="internship-info" aria-selected="false">Internship Information</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="tab-title" data-bs-toggle="tab" data-bs-target="#review-response" type="button" role="tab" aria-controls="review-response" aria-selected="false">Review Response</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <!-- Part One -->
          <div class="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Personal Information</h5>
                <form @submit.prevent="submitForm">
                  <div class="col px-2 mb-3">
                    <div class="row align-items-start m-2">
                      <div class="col">
                        <label for="first_name" class="form-label mb-1 align-self-start">First Name</label>
                        <input v-model="formData.first_name" class="form-control" type="text" id="first_name" name="first_name">
                      </div>
                      <div class="col">
                        <label for="last_name" class="form-label mb-1 label-align-start">Last Name</label>
                        <input v-model="formData.last_name" class="form-control" type="text" id="last_name" name="last_name">
                      </div>
                    </div>
                  </div>
                  <div class="col px-2 mb-3">
                    <div class="row m-2">
                      <div class="col">
                        <label for="birthday" class="form-label mb-1 align-self-start">Birthday</label>
                        <input v-model="formData.birthday" class="form-control" type="date" id="birthday" name="birthday">
                      </div>
                      <div class="col">
                        <label for="gender" class="form-label mb-1 align-self-start">Gender</label>
                        <select v-model="formData.gender" id="gender" name="gender" class="form-select" aria-label="Default select example">
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Other">Other</option>
                          <option selected value="Prefer Not To Say">Prefer Not To Say</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col px-2 mb-3">
                    <div class="row m-2">
                      <div class="col">
                        <label for="mobile_number" class="form-label mb-1 align-self-start">Mobile Number</label>
                        <input v-model="formData.mobile_number" type="text" class="form-control" id="mobile_number" placeholder="09123456789">
                      </div>
                      <div class="col">
                        <label for="email" class="form-label mb-1">Email Address</label>
                        <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="name@example.com">
                      </div>
                    </div>
                  </div>
                  <div class="col px-2 mb-3">
                    <div class="row m-2">
                      <div class="col">
                        <label for="school" class="form-label mb-1 align-self-start">School/University</label>
                        <input v-model="formData.school" type="text" class="form-control" id="school" placeholder="Ateneo de Manila University">
                      </div>
                    </div>
                  </div>
                  <div class="col px-2 mb-3">
                    <div class="row m-2">
                      <div class="col">
                        <label for="degree" class="form-label mb-1 align-self-start">Degree Program</label>
                        <input v-model="formData.degree" type="text" class="form-control" id="degree" placeholder="BS Business Administration">
                      </div>
                      <div class="col">
                        <label for="year_level" class="form-label mb-1 align-self-start">Year Level</label>
                        <select v-model="formData.year_level" id="year_level" name="year_level" class="form-select" aria-label="Select Year Level">
                          <option value="1">First Year</option>
                          <option value="2">Second Year</option>
                          <option value="3">Third Year</option>
                          <option value="4">Fourth Year</option>
                          <option value="5">Fifth Year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col mt-5 px-2" id="buttons">
                    <div class="row d-inline-flex align-self-end m-2">
                      <div class="col mx-auto" id="cancel_btn">
                        <button class="btn btn-outline-primary mb-3">Cancel</button>
                      </div>
                      <div class="col mx-auto" id="next_btn">
                        <button class="btn btn-primary" @click="switchTab(1)">Next</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Part Two -->
          <div class="tab-pane fade" id="internship-info" role="tabpanel" aria-labelledby="internship-info-tab">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Internship Information</h5>
                <form @submit.prevent="submitForm">
                  <div class="col px-2 mb-3">
                    <div class="row m-2">
                      <div class="col">
                        <label for="internship_type" class="form-label mb-1 align-self-start">Internship Type</label>
                        <select v-model="formData.internship_type" id="internship_type" name="internship_type" class="form-select" aria-label="Select Internship Type">
                          <option value="Required">Required Internship</option>
                          <option value="Voluntary">Voluntary Internship</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col px-2 mb-3">
                    <div class="row m-2">
                      <div class="col">
                        <label for="start_date" class="form-label">Start Date</label><br>
                        <input v-model="formData.start_date" class="form-control" type="date" id="start_date" name="start_date">
                      </div>
                      <div class="col">
                        <label for="end_date" class="form-label">End Date</label><br>
                        <input v-model="formData.end_date" class="form-control" type="date" id="end_date" name="end_date">
                      </div>
                    </div>
                  </div>
                  <div class="col px-2 mb-3">
                  <div class="row m-2">
                    <div class="col">
                      <label for="school_coordinator" class="form-label mb-1 align-self-start">School Coordinator (Optional)</label>
                      <input v-model="formData.school_coordinator" type="text" class="form-control" id="school_coordinator" placeholder="Juan Dela Cruz">
                    </div>
                  </div>
                </div>
                <div class="col px-2 mb-3">
                  <div class="row m-2">
                    <div class="col">
                      <label for="department_id" class="form-label mb-1 align-self-start">Assigned Department</label>
                      <select v-model="formData.department_id" id="department_id" name="department_id" class="form-select" aria-label="Select Internship Type">
                        <option value="1">Finance</option>
                        <option value="2">Information Technology</option>
                        <option value="3">Human Resources</option>
                        <option value="4">Operations</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col px-2">
                  <div class="row m-2">
                    <div class="col">
                      <label for="nda_file" class="form-label mb-1 align-self-start">Signed NDA File Link Submission</label>
                      <input v-model="formData.nda_file" type="url" class="form-control" id="nda_file" name="nda_file" placeholder="https://www.bit.ly/ndasubmission">
                    </div>
                  </div>
                </div>
                <div class="col mt-5 px-2" id="buttons">
                  <div class="row d-inline-flex align-self-end m-2">
                    <div class="col mx-auto" id="back_btn">
                      <button class="btn btn-outline-primary mb-3" @click="switchTab(0)">Back</button>
                    </div>
                    <div class="col mx-auto" id="next_btn">
                      <button class="btn btn-primary" @click="switchTab(2)">Next</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Part Three -->
        <div class="tab-pane fade" id="review-response" role="tabpanel" aria-labelledby="review-response-tab">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Review Response</h5>
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col">
                    <h2 class="response-title">Personal Information</h2>
                    <p class="response-format">First Name: <span style="font-weight: bold;">{{ formData.first_name }}</span></p>
                    <p class="response-format">Last Name: <span style="font-weight: bold;">{{ formData.last_name }}</span></p>
                    <p class="response-format">Birthday: <span style="font-weight: bold;">{{ formData.birthday }}</span></p>
                    <p class="response-format">Gender: <span style="font-weight: bold;">{{ formData.gender }}</span></p>
                    <p class="response-format">Mobile Number: <span style="font-weight: bold;">{{ formData.mobile_number }}</span></p>
                    <p class="response-format">Email Address: <span style="font-weight: bold;">{{ formData.email }}</span></p>
                    <p class="response-format">School/University: <span style="font-weight: bold;">{{ formData.school }}</span></p>
                    <p class="response-format">Degree Program: <span style="font-weight: bold;">{{ formData.degree }}</span></p>
                    <p class="response-format">Year Level: <span style="font-weight: bold;">{{ formData.year_level }}</span></p>
                  </div>
                  <div class="col">
                    <h2 class="response-title">Internship Information</h2>
                    <p class="response-format">Internship Type: <span style="font-weight: bold;">{{ formData.internship_type }}</span></p>
                    <p class="response-format">Required Hours: <span style="font-weight: bold;">{{ formData.required_hours }}</span></p>
                    <p class="response-format">Start Date: <span style="font-weight: bold;">{{ formData.start_date }}</span></p>
                    <p class="response-format">End Date: <span style="font-weight: bold;">{{ formData.end_date }}</span></p>
                    <p class="response-format">School Coordinator: <span style="font-weight: bold;">{{ formData.school_coordinator }}</span></p>
                    <p class="response-format">Assigned Department: <span style="font-weight: bold;">{{ formData.department_id }}</span></p>
                    <p class="response-format">Signed NDA File Link Submission: <span style="font-weight: bold;">{{ formData.nda_file }}</span></p>
                  </div>
                </div>
                <div class="col mt-5 px-2" id="buttons">
                  <div class="row d-inline-flex align-self-end m-2">
                    <div class="col mx-auto" id="back_btn">
                      <button class="btn btn-outline-primary mb-3" @click="switchTab(1)">Back</button>
                    </div>
                    <div class="col mx-auto" id="submit_btn">
                      <button type="submit" class="btn btn-primary">Submit</button>
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
</div>
</template>

<script>
export default {
  name: 'InternForm',
  data() {
    return {
      formData: {
        first_name: '',
        last_name: '',
        mid_initial: ' ',
        birthday: '',
        required_hours: '',
        gender: 'Prefer Not To Say',
        mobile_number: '',
        email: '',
        school: '',
        degree: '',
        year_level: '',
        internship_type: 'Required',
        start_date: '',
        end_date: '',
        school_coordinator: '',
        department_id: '',
        nda_file: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        // Print the JSON file in the console log before submitting
        console.log('Form data:', JSON.stringify(this.formData));
        
        const response = await fetch('http://127.0.0.1:8000/new/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully');
        
        // Reset form after successful submission
        this.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    switchTab(tabIndex) {
      const tabContent = document.querySelector('.tab-content')
      const tabs = tabContent.querySelectorAll('.tab-pane'); // Select all tab elements

      // Check if tabIndex is within valid range
      if (tabIndex < 0 || tabIndex >= tabs.length) {
        console.error('Invalid tab index');
        return;
      }

      // Hide all tabs
      tabs.forEach(tab => tab.classList.remove('show', 'active'));

      // Show the selected tab
      tabs[tabIndex].classList.add('show', 'active');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#tab-title {
  color: #051321;
}
#tab-title:focus {
  color: #EA580C;
}
.card-title {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-bottom: 20px;
}
.response-title {
  color: #EA580C;
  font-weight: bold;
  font-size: 23px;
}
.response-format {
  margin-left: 25px;
  margin-bottom: 3px;
}
.form-label {
  color: #52525C;
  font-weight: bold;
  margin-bottom: 2px;
}
#back_btn > button {
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
#back_btn > button:hover {
  background-color: #D1D9E0;
  border-color: #52525C;
  width: 300px;
  height: 38px;
}
#next_btn > button {
  font-weight: bold;
  color: #F8FAFC;
  font-size: 14px;
  background-color: #EA580C;
  border-color: #EA580C;
  width: 300px;
  height: 38px;
}
#next_btn > button:hover {
  background-color: #d24f0a;
  border-color: #d24f0a;
  width: 300px;
  height: 38px;
}
</style>  