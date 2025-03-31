const todoList = require("../todo");

describe("Todo List Test Suite", () => {
  let todos;

  beforeEach(() => {
    todos = todoList();
  });

  test("Creating a new todo", () => {
    todos.add({ title: "New Task", dueDate: "2025-04-01", completed: false });
    expect(todos.all.length).toBe(1);
  });

  test("Marking a todo as completed", () => {
    todos.add({ title: "New Task", dueDate: "2025-04-01", completed: false });
    todos.markAsComplete(0);
    expect(todos.all[0].completed).toBe(true);
  });

  test("Retrieval of overdue items", () => {
    todos.add({
      title: "Overdue Task",
      dueDate: "2025-03-30",
      completed: false,
    });
    expect(todos.overdue().length).toBe(1);
  });

  test("Retrieval of due today items", () => {
    const today = new Date().toISOString().split("T")[0];
    todos.add({ title: "Today's Task", dueDate: today, completed: false });
    expect(todos.dueToday().length).toBe(1);
  });

  test("Retrieval of due later items", () => {
    todos.add({
      title: "Future Task",
      dueDate: "2025-04-05",
      completed: false,
    });
    expect(todos.dueLater().length).toBe(1);
  });
});
