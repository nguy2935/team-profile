const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Jason", 99, "jason@email.com");
    expect(manager.name).toBe("Jason");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test("get manager name", () => {
    const manager = new Manager ("Matt", 66, "matt@email.com");
    expect(manager.getName()).toEqual(expect.any(String));
});

test(" get manager office number", () => {
    const manager = new Manager ("Matt", 66, "matt@email.com");
    expect(manager.officeNumber()).toEqual(expect.any(Number));
});

test("get manager role", () => {
    const manager = new Manager ("Matt", 66, "matt@email.com");
    expect(manager.getRole()).toBe("Manager");
});