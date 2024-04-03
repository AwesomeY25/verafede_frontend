<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="row">
          <SideBar @component-selected="changeComponent"/>
        </div>
      </div>
      <div class="col-10 p-3">
        <div class="row">
          <NavBar/>
        </div>
        <div class="row">
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import InternProfile from './components/InternProfile.vue';
import VerifyInterns from './components/VerifyInterns.vue';
import AllInterns from './pages/AllInterns.vue';
import DepartmentTasks from './components/DepartmentTasks.vue';
import GenerateReport from './pages/GenerateReport.vue';
import ConcernForm from './forms/ConcernForm.vue';
import InternForm from './forms/InternForm.vue';
import TaskForm from './forms/TaskForm.vue';
import AllConcerns from './pages/AllConcerns.vue';
import AssignedTasks from './components/AssignedTasks.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    InternProfile,
    VerifyInterns,
    AllInterns,
    DepartmentTasks,
    GenerateReport,
    ConcernForm,
    InternForm,
    TaskForm,
    AllConcerns,
    AssignedTasks
  },
  data() {
    return {
      currentComponent: 'AssignedTasks'
    }
  },
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

/* Additional styling if needed for the two parts */
#app > div {
  margin-bottom: 20px; /* Adjust as needed */
}
</style>