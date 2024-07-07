new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
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
});
