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

    </div>

    <div class="container">
        <h2 id="interns_h2">
            Department Interns
        </h2>
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
                <th scope="col">Department</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Week Capacity</th>
            </thead>
            <tbody>
                <tr>
                    <td>Earl Patrick Melchor</td>
                    <td>Finance</td>
                    <td>August 5, 2023</td>
                    <td>October 5, 2023</td>
                    <td>Max Capacity</td>
                </tr>
                <tr>
                    <td>David Ken Del Mundo</td>
                    <td>HR</td>
                    <td>August 5, 2023</td>
                    <td>October 5, 2023</td>
                    <td>In Capacity</td>
                </tr>
                <tr>
                    <td>Reign Rey</td>
                    <td>Finance</td>
                    <td>August 5, 2023</td>
                    <td>October 5, 2023</td>
                    <td>Underload</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
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
  text-align: left;
  color: #0A0A0A;
}
</style>