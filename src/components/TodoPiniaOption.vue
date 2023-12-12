<script setup>
import { onMounted, ref, watch } from "vue";
import { useTodoListStore } from "../store/todoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todos, sort_desc_todos } = storeToRefs(store);
const { addTodo, removeTodo } = store;

// todo 생성
// 배열 맨앞추가 -- unshift()
const newTodo = ref([]);
const todo_content = ref("");
const todo_category = ref(null);
const handleAddTodo = () => {
  if (todo_content.value.length <= 0 || todo_category.value === null) {
    return;
  }
  newTodo.value.unshift({
    category: todo_category.value,
    content: todo_content.value,
  });
  // addTodo(todo_category.value, todo_content.value);
  addTodo(newTodo.value);
  // input 초기화
  todo_content.value = "";
  todo_category.value = null;
};
watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos_option", JSON.stringify(newVal));
  },
  { deep: true }
);

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos_option") || []);
});
</script>

<template>
  <main class="app">
    <h2>Pinia Options Store</h2>
    <section class="create-todo">
      <h4>Enter TODO</h4>
      <form @submit.prevent="handleAddTodo">
        <input type="text" v-model.lazy.trim="todo_content" />
        <div class="options">
          <label>
            <input type="radio" v-model="todo_category" value="business" />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>
          <label>
            <input type="radio" v-model="todo_category" value="personal" />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>
        <input type="submit" value="Add todo" />
      </form>
    </section>
    <section class="todo-list" v-if="todos.length > 0">
      <h4>TODO LiST</h4>
      <div class="list" v-for="todo in sort_desc_todos" :key="todo.id">
        <div :class="`todo-item ${todo.isDone ? 'done' : ''}`">
          <label>
            <input type="checkbox" v-model="todo.isDone" />
            <span :class="`bubble ${todo.category}`"></span>
          </label>
          <div class="todo-content">
            <input v-model="todo.content" type="text" />
          </div>
          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
