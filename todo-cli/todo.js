class TodoList {
  constructor() {
    this.todos = [];
  }

  // Add a new todo
  add(todo) {
    this.todos.push(todo);
  }

  // Mark a todo as complete
  markAsComplete(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].completed = true;
    }
  }

  // Get all todos
  getAll() {
    return this.todos;
  }

  // Get overdue todos
  getOverdueItems() {
    const today = new Date().toISOString().split("T")[0];
    return this.todos.filter((todo) => todo.dueDate < today);
  }

  // Get due today todos
  getDueTodayItems() {
    const today = new Date().toISOString().split("T")[0];
    return this.todos.filter((todo) => todo.dueDate === today);
  }

  // Get due later todos
  getDueLaterItems() {
    const today = new Date().toISOString().split("T")[0];
    return this.todos.filter((todo) => todo.dueDate > today);
  }
}

module.exports = TodoList;
