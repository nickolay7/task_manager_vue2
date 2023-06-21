<template>
<div>
<h1>Tasks</h1>
<form class="form" @submit.prevent="handleSubmit">
  <div>
    <input type="text" v-model="task.title" required />
  </div>
  <button type="submit">{{ editingTask ? 'Save Task' : 'Add Task' }}</button>
</form>
<div class="tasks">
  <div class="item" v-for="(task, index) in tasks" :key="task.id">
    {{ task.title }}
    <button @click="handleEdit(task, task.id)">Edit</button>
    <button @click="handleDelete(index)">Delete</button>
  </div>
</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      task: {
        id: null,
        title: '',
      },
      editingTask: null,
    };
  },
  computed: {
    ...mapGetters(['tasks']),
  },
  mounted() {
    this.initTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  },
  watch: {
    tasks(newValue) {
      localStorage.setItem("tasks", JSON.stringify(newValue));
    }
  },
  methods: {
    ...mapActions(['addTask', 'updateTask', 'deleteTask', 'initTasks']),
    handleEdit(task, index) {
      this.task = { ...task };
      this.editingTask = index;
    },
    handleDelete(index) {
      this.deleteTask(index);
    },
    handleSubmit() {
      if (this.editingTask !== null) {
        this.updateTask({ index: this.editingTask, task: this.task });
        this.task = {
          id: null,
          title: '',
          description: '',
        };
        this.editingTask = null;
      } else {
        const id = Math.floor(Math.random() * 1000);
        const task = { ...this.task, id };
        this.addTask(task);
        this.task = {
          id: null,
          title: '',
          description: '',
        };
      }
    },
  },
};
</script>

<style>
.form {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
}

.tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 5px;
}

.item {
  width: 260px;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}
</style>
