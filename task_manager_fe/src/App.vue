<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="row">
          <SideBar/>
        </div>
      </div>
      <div class="col-10 p-3">
        <div class="row">
          <NavBar/>
        </div>
        <div class="row">
          <DepartmentTasks/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import DepartmentTasks from './components/DepartmentTasks.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    DepartmentTasks,
    SideBar
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