<template>
  <div class="bg-gradient-to-br from-gray-100 to-gray-100 flex justify-center items-center h-screen">
    <div class="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-md w-full text-gray-800">
      <h1 class="text-4xl font-bold text-center mb-8">To-Do List</h1>
      <div id="app" class="max-w-md mx-auto">
        <div class="flex items-center mb-4">
          <input type="text" class="flex-1 border rounded-l py-2 px-3 focus:outline-none text-gray-800" placeholder="Add a new task..." v-model="newTask" @keyup.enter="addTask">
          <button class="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none" @click="addTask">
            <i class="fas fa-plus"></i>
          </button>
        </div>

        <ul>
          <li v-for="(task, index) in tasks" :key="index" class="flex items-center justify-between border-b py-4">
            <div class="flex items-center">
              <input type="checkbox" class="mr-2 form-checkbox h-5 w-5 text-blue-500" v-model="task.completed">
              <span :class="{'line-through': task.completed}" class="text-gray-900">{{ task.text }}</span>
              <span class="text-sm text-gray-600 ml-2">{{ task.date }}</span>
            </div>
            <button @click="removeTask(index)" class="text-red-600 hover:text-red-800 focus:outline-none">
              <i class="fas fa-trash-alt"></i>
            </button>
          </li>
        </ul>
        <button class="mt-8 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded focus:outline-none" @click="clearCompletedTasks">Clear Completed</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          text: this.newTask.trim(),
          completed: false,
          date: new Date().toLocaleDateString()
        });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    clearCompletedTasks() {
      this.tasks = this.tasks.filter(task => !task.completed);
    }
  }
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
