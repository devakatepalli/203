const todoList = require("../todo");

describe("Todo List Test Suite", () => {
  beforeEach(() => {
    // Reset the todo list before each test
    while (todoList.getAll().length) {
      todoList.getAll().pop();
    }
  });

  test("should add a new todo", () => {
    todoList.add({ title: "Test todo", dueDate: "2025-04-01", completed: false });
    expect(todoList.getAll().length).toBe(1);
  });

  test("should mark a todo as completed", () => {
    todoList.add({ title: "Test todo", dueDate: "2025-04-01", completed: false });
    todoList.markAsComplete(0);
    expect(todoList.getAll()[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    todoList.add({ title: "Overdue Task", dueDate: "2025-03-30", completed: false });
    expect(todoList.getOverdue().length).toBe(1);
  });

  test("should retrieve due today items", () => {
    const today = new Date().toISOString().split("T")[0];
    todoList.add({ title: "Today's Task", dueDate: today, completed: false });
    expect(todoList.getDueToday().length).toBe(1);
  });

  test("should retrieve due later items", () => {
    todoList.add({ title: "Future Task", dueDate: "2025-04-10", completed: false });
    expect(todoList.getDueLater().length).toBe(1);
  });
});
