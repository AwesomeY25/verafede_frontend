<template>
    <div>
      <h1>{{title}}</h1>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Task Date Created</th>
            <th>Task Due Date</th>
            <th>Estimated Time To Finish</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.task_id">
            <td>{{ task.task_id }}</td>
            <td>{{ task.task_name }}</td>
            <td>{{ task.task_description }}</td>
            <td>{{ task.task_date_created }}</td>
            <td>{{ task.task_due_date }}</td>
            <td>{{ task.task_estimated_time_to_finish }}</td>
            <td>{{ task.task_points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    title: 'All Tasks',
    name: 'DepartmentTasks',
    data() {
      return {
        tasks: [],
      };
    },
    async created() {
      const response = await fetch('http://127.0.0.1:8000/tasks/');
      const data = await response.json();
      this.tasks = data;
    }
  };
  </script>