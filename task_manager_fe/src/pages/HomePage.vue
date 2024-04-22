<template>
    <h2 id="welcome_header">Welcome back, @User!</h2>
    <div class="col-9">
        
        <!-- upcoming tasks -->
        <div class="container-fluid" id="upcoming_tasks">
            <h5>Upcoming Tasks</h5>
            <!-- 1 card = 1 task -->
            <div class="card mb-2" id="task_instance1"> 
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
                        <p>Assigned by: Paolo Agloro</p>
                        <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        <div class="d-flex align-items-start">
                            <p id="category"><span class="badge rounded-pill bg-custom">Finance</span></p>
                            <p class="ms-1" id="category"><span class="badge rounded-pill bg-custom">3 Hours</span></p>
                            <p class="ms-1" id="category"><span class="badge rounded-pill bg-custom">9 Points</span></p>
                        </div>
                    </div>
                    <div class="ms-auto p-2">
                        <div class="d-flex align-items-start" id="due">
                            <p>
                                <span style="color: #0A0A0A; font-size: 13px; margin-right: 3px;">Due</span>
                                <span style="color: #EE514F; font-weight: bold; font-size: 13px;">TODAY</span>
                            </p>
                            <p class="ms-3"><a href="#" class="link-underline-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA580C" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                                <i class="bi bi-chevron-right"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- my tasks -->
        <div class="container-fluid" id="my_tasks">
            <h5>My Tasks</h5>
            <!-- 1 card = 1 task -->
            <div class="card mb-2" id="task_instance2">
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
                        <p class="mb-1">Assigned by: Paolo Agloro</p>
                        <div class="d-flex align-items-start">
                            <p id="category"><span class="badge rounded-pill bg-custom">Finance</span></p>
                            <p class="ms-1" id="category"><span class="badge rounded-pill bg-custom">3 Hours</span></p>
                            <p class="ms-1" id="category"><span class="badge rounded-pill bg-custom">9 Points</span></p>
                        </div>
                    </div>
                    <div class="ms-auto p-2">
                        <div class="d-flex align-items-start" id="due">
                            <p>
                                <span style="color: #0A0A0A; font-size: 13px; margin-right: 3px;">Due</span>
                                <span style="color: #EE514F; font-weight: bold; font-size: 13px;">TODAY</span>
                            </p>
                            <p class="ms-3"><a href="#" class="link-underline-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA580C" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                                <i class="bi bi-chevron-right"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-3">

        <!-- calendar -->

        <!-- workload status -->
        <div class="container-fluid" id="workload_status">
            <h5>Workload Status</h5>
            <div class="card">
                <p>As of <span style="font-weight: bold;">June 23, 2023</span>:</p>
                <!-- insert code for chart here -->
                <p class="text-center" style="font-weight: bold; color: #2B8C2F;">Keep up, you are doing good!</p>
            </div>
        </div>

        <!-- issues/concerns -->
        <div class="container-fluid" id="raise_concern">
            <h5>Issues/Concerns</h5>
            <div class="centered-content">
                <p class="mx-3">Any issues or concern related to your internship?</p>
                <button type="button" class="btn btn-primary mx-3" id="concern_btn">Raise a Concern</button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
#welcome_header {
  margin-top: 10px;
  margin-bottom: 30px;
  color: #000000;
}
#upcoming_tasks > h5 {
  color: #F27036;
  font-weight: bold;
}
.form-check {
  margin-left: 15px;
  margin-top: 5px;
}
#task_checkbox {
  height: 32px;
  width: 32px;
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
  margin-top: 8px;
}
#progress_badge {
  font-size: 12px;
  margin-bottom: 0px;
  margin-top: 7px;
}
#task_instance1 > div > div > p {
  color: #484848;
  font-size: 12px;
}
#category {
  font-size: 12px;
  margin-top: 2px;
}
.bg-custom {
  background-color: #EA580C;
}
#due {
  margin-top: 12px;
  margin-right: 15px;
}
#my_tasks > h5 {
  color: #F27036;
  font-weight: bold;
  margin-top: 30px;
}
#task_instance2 > div > div > p {
  color: #484848;
  font-size: 12px;
}
#workload_status > h5 {
  color: #F27036;
  font-weight: bold;
}
#workload_status > .card {
  border-color: #EA580C;
  border-radius: 15px;
  border-width: 2px;
}
#workload_status > .card > p {
  margin: 8px 8px 8px 8px;
  font-size: 13px;
}
#raise_concern > h5 {
  color: #F27036;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 5px;
}
.centered-content {
  text-align: center;
}
#raise_concern > div > p {
  font-size: 13px;
  color: #484848;
  margin-bottom: 8px;
}
#concern_btn {
  font-weight: bold;
  font-size: 14px;
  background-color: #EA580C;
  border-color: #EA580C;
  height: 35px;
  width: 170px;
}
#concern_btn:hover {
  background-color: #a94c1b;
  border-color: #a94c1b;
}
</style>