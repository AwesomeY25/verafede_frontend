<!-- Edit based on the applicable data to fetch -->

<template>
    <div>
      <h1>{{title}}</h1>
      <table>
        <thead>
          <tr>
            <th>Intern ID</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Account Type</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Intern Status</th>
            <th>Birthday</th>
            <th>Mobile Number</th>
            <th>School</th>
            <th>Year Level</th>
            <th>Degree</th>
            <th>Internship Type</th>
            <th>School Coordinator</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>NDA File</th>
            <th>Min Workload Threshold</th>
            <th>Max Workload Threshold</th>
            <th>Intern Head Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="intern in interns" :key="intern.intern_id">
            <td>{{ intern.intern_id }}</td>
            <td>{{ intern.username }}</td>
            <td>{{ intern.first_name }} {{ intern.mid_initial }} {{ intern.last_name }}</td>
            <td>{{ intern.account_type }}</td>
            <td>{{ intern.email }}</td>
            <td>{{ intern.gender }}</td>
            <td>{{ intern.intern_status }}</td>
            <td>{{ formatDate(intern.birthday) }}</td>
            <td>{{ intern.mobile_number }}</td>
            <td>{{ intern.school }}</td>
            <td>{{ intern.year_level }}</td>
            <td>{{ intern.degree }}</td>
            <td>{{ intern.internship_type }}</td>
            <td>{{ intern.school_coordinator }}</td>
            <td>{{ formatDate(intern.start_date) }}</td>
            <td>{{ formatDate(intern.end_date) }}</td>
            <td>{{ intern.nda_file }}</td>
            <td>{{ intern.min_workload_threshold }}</td>
            <td>{{ intern.max_workload_threshold }}</td>
            <td>{{ intern.intern_head_status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          title: 'Department Interns',
          interns: []
        };
      },
      methods: {
        async fetchInterns() {
          try {
            const response = await fetch(`http://127.0.0.1:8000/interns/`);
            if (!response.ok) {
              throw new Error('Failed to fetch interns information');
            }
            const data = await response.json();
            this.interns = data;
          } catch (error) {
            console.error('Error fetching interns information:', error.message);
          }
        },
        formatDate(date){
          if (!date) return ''; // Handle empty date
          return new Date(date).toLocaleDateString();
        }
      },
      created() {
        this.fetchInterns();
      }
    };
  </script>