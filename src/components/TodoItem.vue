<template>
  <li class="list-group-item">
    <span v-bind:class="{ done: todo.completed }">
      <label>
        <input
          type="checkbox"
          class="form-check-input"
          v-on:change="
            /* eslint-disable vue/no-mutating-props */
            todo.completed = !todo.completed
          "
        />
      </label>
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
    <button class="btn-close" v-on:click="$emit('remove-todo', todo.id)" />
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
}
input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
