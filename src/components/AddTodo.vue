<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group mb-3">
      <label>
        <input
          class="form-control"
          placeholder="todo"
          type="text"
          aria-describedby="button-addon"
          v-model="title"
        />
      </label>
      <button class="btn btn-primary" id="button-addon" type="submit">
        Create
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input {
  width: 400px;
}
</style>
