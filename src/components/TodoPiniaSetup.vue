<script setup>
import { storeToRefs } from "pinia";
import { useTodoListStoreSetup } from "../store/todoListStoreSetup";
import { ref, onMounted, watchEffect } from "vue";

const store = useTodoListStoreSetup();
const { todos, sort_desc_todos } = storeToRefs(store);
const { addTodo, removeTodo } = store;
// content, category
const todo_content = ref("");
const todo_category = ref(null);

const handleAddTodo = () => {
  if (todo_content.value.length === 0) {
    return;
  }
  addTodo({
    id: todos.value.length + 1,
    createdAt: new Date().getTime(),
    content: todo_content.value,
    category: todo_category.value,
    isDone: false,
  });
  todo_content.value = "";
  todo_category.value = null;
};
// 새로고침 시 템플릿이 화면에서 날아가지 않게
const loadData = () => {
  try {
    todos.value = JSON.parse(localStorage.getItem("todos") || []);
  } catch (error) {
    console.log("Error at loadData", error);
  }
};
// watchEffect 로 바꿔보기
watchEffect(() => {
  const currentData = todos.value;
  if (Object.keys(currentData).length > 0) {
    try {
      localStorage.setItem("todos", JSON.stringify(currentData));
    } catch (error) {
      console.log("error: ", error);
    }
  }
});
onMounted(() => loadData());
</script>
<template>
  <main class="app">
    <h2>Pinia Setup Store</h2>
    <section class="create-todo">
      <h4>Enter TODO</h4>
      <!-- create Todo -->
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
          <!-- check done radio -->
          <label>
            <input type="checkbox" v-model="todo.isDone" />
            <span :class="`bubble ${todo.category}`"></span>
          </label>
          <!-- content -->
          <div class="todo-content">
            <input v-model="todo.content" type="text" />
          </div>
          <!-- delete todo -->
          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>
