<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <ModalComponent :modelValue="showErrorModal" @update:modelValue="showErrorModal = $event">
      <template #header>Error</template>
      <template #default>{{ errorMessage }}</template>
      <template #footer>
        <button @click="showErrorModal = false">OK</button>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from './ModalComponent.vue';

export default {
  components: {
    ModalComponent,
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      showErrorModal: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        const data = await response.json();
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Invalid username or password');
          } else {
            throw new Error('Login failed');
          }
        }
        // Assuming the server responds with a token upon successful login
        const token = data.token;
        // You can store the token in local storage or Vuex for authentication
        // For example:
        localStorage.setItem('token', token);
        // Emit login success event to parent component (sidebar)
        this.$emit('login-success');
      } catch (error) {
        console.error('Error logging in:', error.message);
        this.errorMessage = error.message;
        this.showErrorModal = true;
      }
    }
  }
};
</script>