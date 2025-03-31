const todoList = (() => {
  let todos = [];

  return {
    add: function (todo) {
      todos.push(todo);
    },

    markAsComplete: function (index) {
      if (todos[index]) {
        todos[index].completed = true;
      }
    },

    getAll: function () {
      return todos;
    },

    getOverdue: function () {
      const today = new Date().toISOString().split("T")[0];
      return todos.filter((todo) => todo.dueDate < today);
    },

    getDueToday: function () {
      const today = new Date().toISOString().split("T")[0];
      return todos.filter((todo) => todo.dueDate === today);
    },

    getDueLater: function () {
      const today = new Date().toISOString().split("T")[0];
      return todos.filter((todo) => todo.dueDate > today);
    },
  };
})();

module.exports = todoList;
