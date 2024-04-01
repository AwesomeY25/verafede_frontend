<template>
    <div>
        <h1>{{ title }}</h1>
        <table>
        <tbody>
            <tr v-if="internInfo.intern_id">
            <td>Intern ID</td>
                <td>{{ internInfo.intern_id }}</td>
            </tr>
            <tr>
                <td>Username</td>
                <td>{{ internInfo.username }}</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>{{ internInfo.first_name }} {{ internInfo.mid_initial }} {{ internInfo.last_name }}</td>
          </tr>
          <tr>
            <td>Account Type</td>
            <td>{{ internInfo.account_type }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ internInfo.email }}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{{ internInfo.gender }}</td>
          </tr>
          <tr>
            <td>Intern Status</td>
            <td>{{ internInfo.intern_status }}</td>
          </tr>
          <tr>
            <td>Birthday</td>
            <td>{{ formatDate(internInfo.birthday) }}</td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td>{{ internInfo.mobile_number }}</td>
          </tr>
          <tr>
            <td>School</td>
            <td>{{ internInfo.school }}</td>
          </tr>
          <tr>
            <td>Year Level</td>
            <td>{{ internInfo.year_level }}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{{ internInfo.degree }}</td>
          </tr>
          <tr>
            <td>Internship Type</td>
            <td>{{ internInfo.internship_type }}</td>
          </tr>
          <tr>
            <td>School Coordinator</td>
            <td>{{ internInfo.school_coordinator }}</td>
          </tr>
          <tr>
            <td>Start Date</td>
            <td>{{ formatDate(internInfo.start_date) }}</td>
          </tr>
          <tr>
            <td>End Date</td>
            <td>{{ formatDate(internInfo.end_date) }}</td>
          </tr>
          <tr>
            <td>NDA File</td>
            <td>{{ internInfo.nda_file }}</td>
          </tr>
          <tr>
            <td>Min Workload Threshold</td>
            <td>{{ internInfo.min_workload_threshold }}</td>
          </tr>
          <tr>
            <td>Max Workload Threshold</td>
            <td>{{ internInfo.max_workload_threshold }}</td>
          </tr>
          <tr>
            <td>Intern Head Status</td>
            <td>{{ internInfo.intern_head_status }}</td>
          </tr>
        </tbody>
      </table>
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