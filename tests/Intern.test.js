const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Matt", 66, "matt@email.com");
    expect(employee.name).toBe("Matt");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("get intern name", () => {
    const intern = new Intern ("Matt", 66, "matt@email.com");
    expect(intern.getName()).toEqual(expect.any(String));
});

test(" get intern ID", () => {
    const intern = new Intern ("Matt", 66, "matt@email.com");
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("get intern email", () => {
    const intern = new Intern ("Matt", 66, "matt@email.com");
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("get intern school", () => {
    const intern = new Intern ("Matt", 66, "matt@email.com");
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("get intern role", () => {
    const intern = new Intern ("Matt", 66, "matt@email.com");
    expect(intern.getRole()).toBe("Engineer");
});