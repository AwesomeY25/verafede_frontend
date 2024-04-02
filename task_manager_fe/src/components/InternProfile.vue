<template>
  <div class="container-fluid">
    <div class="card px-4 py-4" id="intern_info">
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
</style>