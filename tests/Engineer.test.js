const Engineer = require("../lib/Employee");

test("creates an employee object", () => {
    const engineer = new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(employee.name).toBe("Jimmy");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("get engineer name", () => {
    const engineer = new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(employee.getName()).toEqual(expect.any(String));
});

test(" get engineer ID", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("get engineer email", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("get engineer github", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(employee.getGithub()).toEqual(expect.any(String));
});

test("get engineer role", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(employee.getRole()).toBe("Engineer");
});