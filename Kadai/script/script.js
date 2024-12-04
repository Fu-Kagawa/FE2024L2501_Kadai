new Vue({
  el: '#app',
  data() {
    return {
      todos: [],
      text: ''
    };
  },
  methods: {
    inputText(e) {
      this.text = e.target.value;
    },
    addTodo() {
      if (!this.text) return;

      const newTodo = {
        id: Math.ceil(Math.random() * 1000),
        text: this.text,
        isDone: false,
        isStock: false
      };
      this.todos.push(newTodo);
      this.resetText();
    },
    resetText() {
      this.text = '';
    },
    deleteTodo(id) {
      const index = this.getIndexBy(id);
      this.todos.splice(index, 1);
    },
    toggleIsDone(id) {
      const index = this.getIndexBy(id);
      this.todos[index].isDone = !this.todos[index].isDone;
    },
    toggleIsStock(id) {
      const index = this.getIndexBy(id);
      this.todos[index].isStock = !this.todos[index].isStock;
    },
    getIndexBy(id) {
      const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
      const index = this.todos.indexOf(filteredTodo);
      return index;
    }
  },
  computed: {
    incompleteTodo() {
      return this.todos.filter(todo => todo.isDone === false && todo.isStock === false);
    },
    stockTodo() {
      return this.todos.filter(todo => todo.isStock === true);
    },
    doneTodo() {
      return this.todos.filter(todo => todo.isDone === true);
    }
  }
});