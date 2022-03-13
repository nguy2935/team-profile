const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Sophia", 22, "sophia@email.com");
    expect(employee.name).toBe("Sophia");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("get employee name", () => {
    const employee = new Employee("Sophia", 22, "sophia@email.com");
    expect(employee.getName()).toEqual(expect.any(String));
});

test(" get employee ID", () => {
    const employee = new Employee("Sophia", 22, "sophia@email.com");
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("get employee email", () => {
    const employee = new Employee("Sophia", 22, "sophia@email.com");
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("get employee role", () => {
    const employee = new Employee("Sophia", 22, "sophia@email.com");
    expect(employee.getRole()).toBe("Employee");
});
