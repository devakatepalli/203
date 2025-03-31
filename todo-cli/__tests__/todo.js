const TodoList = require("../todo");

describe("Todo List Test Suite", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList(); // Create a new todo list before each test
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
    todoList.add({ title: "Overdue Task", dueDate: "2024-03-30", completed: false });
    expect(todoList.getOverdueItems().length).toBe(1);
  });

  test("should retrieve due today items", () => {
    const today = new Date().toISOString().split("T")[0];
    todoList.add({ title: "Today Task", dueDate: today, completed: false });
    expect(todoList.getDueTodayItems().length).toBe(1);
  });

  test("should retrieve due later items", () => {
    todoList.add({ title: "Future Task", dueDate: "2025-04-10", completed: false });
    expect(todoList.getDueLaterItems().length).toBe(1);
  });
});
