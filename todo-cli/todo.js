// todo.js
class TodoList {
  constructor() {
    this.list = [];
  }

  add(todo) {
    this.list.push(todo);
  }

  markAsComplete(index) {
    if (index >= 0 && index < this.list.length) {
      this.list[index].completed = true;
    }
  }

  overdue() {
    const today = new Date().toISOString().split("T")[0];
    return this.list.filter(todo => todo.dueDate < today);
  }

  dueToday() {
    const today = new Date().toISOString().split("T")[0];
    return this.list.filter(todo => todo.dueDate === today);
  }

  dueLater() {
    const today = new Date().toISOString().split("T")[0];
    return this.list.filter(todo => todo.dueDate > today);
  }
}

module.exports = TodoList;
