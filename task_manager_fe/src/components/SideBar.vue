<template>
  <div class="sidebar navbar" :class="{'sidebar-hidden': !isSidebarActive}">
    <div class="sidebar-header">
      <img class="img" src="../../src/assets/sidebar_logo.png">
      <a href="#" @click.prevent="selectComponent('assigned-tasks')"></a>
    </div>
    <div>
    </div>
    <div class="sidebar-content">
      <div class="sidebar-body">
        <ul>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('intern-profile')">
              My Profile
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('verify-interns')">
              Verify Interns
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('all-interns')">
              All Interns
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('all-tasks')">
              All Tasks
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('generate-report')">
              Workload Overview
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('concern-form')">
              Raise Concerns
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('all-concerns')">
              All Concerns
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('task-form')">
              Create Task
            </a>
          </li>
          <li class="sidebar-item">
            <a href="#" @click.prevent="selectComponent('intern-form')">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    isSidebarActive: {
      type: Boolean,
      default: true
    },
    sidebarToggle: {
      type: Function,
      default: null
    }
  },
  methods: {
    selectComponent(componentName) {
      this.$emit('component-selected', componentName);
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(0px);
  opacity: 1;
  visibility: visible;
  width: 15%;
  height: 100%;
  background-color: #C44545;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.sidebar-hidden {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  width: 80%;
  margin: 1rem auto; /* Center horizontally */
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: #F8FAFC;
}
.sidebar-body {
  flex: 1;
  overflow-y: auto;
}

.img{
  width: 95%;
}

.sidebar-footer {
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  text-align: center;
}

.sidebar-item {
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease-in-out;
}

.sidebar-item:hover {
  background-color: #f5f5f5;
}

.sidebar a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}
</style>