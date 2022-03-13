const Engineer = require("../lib/Engineer");

test("creates an employee object", () => {
    const engineer = new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(engineer.name).toBe("Jimmy");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test("get engineer name", () => {
    const engineer = new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(engineer.getName()).toEqual(expect.any(String));
});

test(" get engineer ID", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("get engineer email", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("get engineer github", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("get engineer role", () => {
    const engineer= new Engineer("Jimmy", 55, "jimmy@email.com");
    expect(engineer.getRole()).toBe("Engineer");
});