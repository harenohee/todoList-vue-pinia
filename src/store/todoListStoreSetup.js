import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
export const useTodoListStoreSetup = defineStore("todoSetup", () => {
  // ref - state
  const todos = ref([]);
  // computed = getters
  const sort_desc_todos = computed(() =>
    todos.value.sort((a, b) => b.createdAt - a.createdAt)
  );
  // method = actions
  function addTodo(todo) {
    todos.value.push(todo);
  }
  function removeTodo(todo) {
    const idx = todos.value.findIndex((item) => item.id === todo.id);
    todos.value.splice(idx, 1);
  }
  return { todos, sort_desc_todos, addTodo, removeTodo };
});
