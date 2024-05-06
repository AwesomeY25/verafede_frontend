<template>
    <div class="container">
        <!-- for elements above graph -->
        <div class="d-flex">
            <div class="p-2" id="header">
                <h2>
                    Weekly Workload Report
                </h2>
            </div>
            <!-- search bar -->
            <div class="p-2 ms-auto">
                <button type="button" class="btn btn-primary" id="generate_btn">Generate Report PDF</button>
            </div>
        </div>

      <!-- insert code for graph here -->
      <div class="container py-3 px-5">
        <div class="row" v-for="workload in workloads" :key="workload.week_date">
          <div class="col-3"><p class="name-label">{{ workload.intern_name }}</p></div>
          <div class="col-7">
            <div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="120">
              <div class="progress-bar" id="progress_bar" :style="{ width: `${getBarWidth(workload.workload_points)}%`, backgroundColor: getBarColor(workload.workload_points) }">{{ workload.workload_points }}%</div>
            </div>
          </div>
          <div class="col-2"><p class="capacity-label" :style="{ color: getLabelColor(workload.workload_tag) }">{{ workload.workload_tag }}</p></div>
        </div>
      </div>
  </div>

  <div class="container" id="report-container">
    <div class="d-flex">
      <h2 class="p-2" id="interns_h2">
          Department Interns
      </h2>
      <div class="p-2 ms-auto">
        <button type="button" class="btn btn-primary" id="generate_btn" @click="create_workload">Report Workload</button>
      </div>
    </div>
      <!-- search filter -->
      <form>
          <div class="d-flex flex-row" id="filters">
              <div class="p-2">
                  <label for="workload_filter" class="form-label">Workload</label>
                  <select class="form-select" id="workload_filter" name="workload_filter">
                      <option selected>All</option>
                      <option>Underload</option>
                      <option>Min Capacity</option>
                      <option>In Capacity</option>
                      <option>Max Capacity</option>
                      <option>Overload</option>
                  </select>
              </div>
              <div class="p-2">
                  <label for="start_date_filter" class="form-label">Start Date</label>
                  <input type="date" class="form-control" id="start_date_filter" name="start_date_filter">
              </div>
              <div class="p-2">
                  <label for="end_date_filter" class="form-label">End Date</label>
                  <input type="date" class="form-control" id="end_date_filter" name="end_date_filter">
              </div>
          </div>
      </form>

        <!-- department interns table -->
        <table class="table" id="dept_interns">
            <thead>
                <th scope="col">
                    Intern Name 
                    <button type="button" class="btn btn-light" id="sort_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
                            <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                        </svg>
                        <i class="bi bi-sort-up"></i>
                    </button>
                </th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Week Capacity</th>
            </thead>
            <tbody>
              <tr v-for="workload in workloads" :key="workload.week_date">
                <td>{{ workload.intern_name }}</td>
                <td>{{ workload.start_date }}</td>
                <td>{{ workload.end_date }}</td>
                <td>{{ workload.workload_tag }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
  data() {
      return {
          workloads: [],
          interns: [],
          monday: null
      };
  },
  async created() {
      const today = new Date();
      const day = today.getDay();
      const diff = today.getDate() - day + (day === 0 ? -6 : 1);
      this.monday = new Date(today.setDate(diff));

      await this.fetchInterns();
      await this.generateWorkload();
      await this.fetchWorkloads();
  },
  methods: {
      async fetchInterns() {
          try {
              // Replace <department_id> with the actual ID of the department
              const response = await fetch(`http://127.0.0.1:8000/interns/`);
              const data = await response.json();
              this.interns = data;
          } catch (error) {
              console.error('Error fetching interns:', error);
          }
      },
      async generateWorkload() {
          const internIds = this.interns.map((intern) => intern.id);
          for (const internId of internIds) {
              // Calculate the workload for the intern for the current week
              const week_date = this.monday.toISOString().split('T')[0];
              await this.create_workload(internId, week_date);
          }
      },
      async create_workload(intern_id, week_date) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/workloads/new/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              intern_id,
              week_date
            })
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Handle success response
          } else {
            const errorData = await response.json();
            console.error(errorData);
            // Handle error response
          }
        } catch (error) {
          console.error(error);
          // Handle network error
        }
      },
      async fetchWorkloads() {
          try {
              const response = await fetch('http://127.0.0.1:8000/workloads/');
              const data = await response.json();
              this.workloads = data;
          } catch (error) {
              console.error('Error fetching workloads:', error);
          }
      },
      generatePdf() {
        const doc = new jsPDF();
        const specialElementHandlers = {
          '#editor': function () {
            return true;
          }
        };

        const pdfContent = document.getElementById('report-container').innerHTML;
        doc.fromHTML(pdfContent, 15, 15, {
          'width': 170,
          'elementHandlers': specialElementHandlers
        });

        doc.save('weekly_workload_report.pdf');
      },
      getBarWidth(workloadPoints) {
        const widthValue = (workloadPoints / 120) * 100
        return widthValue;
      },
      getBarColor(workloadPoints) {
        if (workloadPoints < 20) {
          return "#EE514F";
        } else if (workloadPoints == 20) {
          return "#FB923C";
        } else if (workloadPoints > 20 && workloadPoints < 100) {
          return "#22C55E";
        } else if (workloadPoints == 100) {
          return "#FB923C";
        } else if (workloadPoints > 100) {
          return "#EE514F";
        }
      },
      getLabelColor(workloadTag) {
        if (workloadTag === "Underload") {
          return "#EE514F";
        } else if (workloadTag === "Minimum Capacity") {
          return "#FB923C";
        } else if (workloadTag === "In Capacity") {
          return "#22C55E";
        } else if (workloadTag === "Maximum Capacity") {
          return "#FB923C";
        } else if (workloadTag === "Overload") {
          return "#EE514F";
        }
      }
  }
};
</script>

<style>
#header > h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #F27036;
}
#generate_btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 14px;
  background-color: #EA580C;
  border-color: #EA580C;
  height: 38px;
  width: 200px;
}
#generate_btn:hover {
  background-color: #a94c1b;
  border-color: #a94c1b;
}
.name-label {
  font-weight: bold;
  color: #0A0A0A;
}
.capacity-label {
  font-size: 14px;
  font-weight: bold;
}
.progress {
  border-radius: 3px !important;
  height: 25px !important;
}
.progress > .progress-bar {
  background-color: #EE514F;
  color: #0A0A0A;
}
#interns_h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: #F27036;
}
#filters {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;
  color: #484848;
  display: flex; 
  align-items: center;
}
#filters > div {
  display: flex; 
  align-items: center;
}
#filters > div > select {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  color: #484848;
  background-color: rgba(238, 81, 79, .24);
  border-color: rgba(238, 81, 79, .24);
  height: 30px;
  width: 120px;
  margin-left: 5px;
  margin-bottom: 5px;
}
#filters > div > select:focus {
  outline: none !important;
  border-color: rgba(238, 81, 79, .24);
  box-shadow: 0 0 10px rgba(238, 81, 79, .24);
}
#filters > div > input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  color: #484848;
  background-color: rgba(238, 81, 79, .24);
  border-color: rgba(238, 81, 79, .24);
  height: 30px;
  width: 120px;
  margin-left: 5px;
  margin-bottom: 5px;
}
#filters > div > input:focus {
  outline: none !important;
  border-color: rgba(238, 81, 79, .24);
  box-shadow: 0 0 10px rgba(238, 81, 79, .24);
}
#dept_interns th {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EA580C;
  color: #F8FAFC;
  font-weight: 600;
}
#sort_btn {
  text-align: center;
  background-color: #EA580C;
  border-color: #EA580C;
  color: #F8FAFC;
  width: 30px;
  margin: 0 auto;
  padding: 0;
}
#sort_btn:hover {
  background-color: #a94c1b;
}
#dept_interns td {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0A0A0A;
}
#dept_interns td:nth-child(1) {
  text-align: left;
}
</style>