<<<<<<< HEAD
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
=======
// __tests__/todo.js
const TodoList = require("../todo");

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test("adds a todo", () => {
    todoList.add({ title: "Test Todo", dueDate: "2025-04-01", completed: false });
    expect(todoList.list.length).toBe(1);
  });

  test("marks a todo as complete", () => {
    todoList.add({ title: "Test Todo", dueDate: "2025-04-01", completed: false });
    todoList.markAsComplete(0);
    expect(todoList.list[0].completed).toBe(true);
  });

  test("retrieves overdue items", () => {
    todoList.add({ title: "Overdue Todo", dueDate: "2025-03-30", completed: false });
    expect(todoList.overdue().length).toBe(1);
  });

  test("retrieves due today items", () => {
    const today = new Date().toISOString().split("T")[0];
    todoList.add({ title: "Today’s Todo", dueDate: today, completed: false });
    expect(todoList.dueToday().length).toBe(1);
  });

  test("retrieves due later items", () => {
    todoList.add({ title: "Future Todo", dueDate: "2025-04-05", completed: false });
    expect(todoList.dueLater().length).toBe(1);
  });
});
>>>>>>> a2eb0e4 (Added required test cases)
