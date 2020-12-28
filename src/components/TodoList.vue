<template>
  <ul class="list-group">
    <TodoItem
      v-for="(todo, i) of todos"
      v-bind:todo="todo"
      v-bind:index="i"
      v-bind:key="todo.title"
      v-on:remove-todo="removeTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    }
  }
};
</script>
