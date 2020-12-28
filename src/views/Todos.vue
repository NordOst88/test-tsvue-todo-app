<template>
  <div class="container">
    <h2>Todo application</h2>
    <hr />
    <div class="d-flex justify-content-between mb-4">
      <AddTodo @add-todo="addTodo" />
      <label>
        <select class="form-select" v-model="filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not completed</option>
        </select>
      </label>
    </div>
    <Loader v-if="this.$store.getters.LOADING" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all"
    };
  },
  mounted() {
    this.$store.dispatch("GET_TODO");
  },
  computed: {
    filteredTodos() {
      if (this.filter === "completed") {
        return this.$store.getters.TODOS.filter(t => t.completed);
      }
      if (this.filter === "not-completed") {
        return this.$store.getters.TODOS.filter(t => !t.completed);
      }
      return this.$store.getters.TODOS;
    }
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch("REMOVE_TODO", id);
    },
    addTodo(todo) {
      this.$store.dispatch("SAVE_TODO", todo);
    }
  },
  components: {
    AddTodo,
    TodoList,
    Loader
  }
};
</script>
