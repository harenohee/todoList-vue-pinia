import { defineStore } from "pinia";
export const useTodoListStore = defineStore("todoList", {
  // option store
  state: () => ({
    todos: [],
  }),
  getters: {
    // asc sort
    sort_desc_todos: (state) =>
      state.todos.sort((a, b) => b.createdAt - a.createdAt),
  },
  actions: {
    // method: add, delete
    // 데이터 추가 방법 1,2,3
    // 1. newTodo.push=> [todos.length -1].category
    // 2. newTodo.unshift=> [0].category
    // 3. addTodo(a,b): 2 parameters
    addTodo(todo) {
      this.todos.push({
        id: this.todos.length + 1,
        createdAt: new Date().getTime(),
        category: todo[0].category,
        content: todo[0].content,
        isDone: false,
      });
    },
    removeTodo(todo) {
      return (this.todos = this.todos.filter((item) => item !== todo));
    },
  },
});
