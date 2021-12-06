const Employee = require('../lib/Employee');

test("can int employee", () => {
    const e = new Employee();
    expect (typeof(e)).toBe("object");
});

test("can set name by const arg", () => {
    const name = "Jack";
    const e = new Employee(name);
    expect (e.name).toBe(name);
});

test("can set id by const arg", () => {
    const testValue = 5;
    const e = new Employee("Foo", testValue);
    expect (e.id).toBe(testValue);
});

test("can set email by const arg", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect (e.email).toBe(testValue);
});

//test getId() {}
test("can getId via getId()", () => {
    const testValue = 56;
    const e = new Employee("Foo", testValue);
    expect (e.getId()).toBe(testValue);
});

//test getName() {}
//test getrole() {}
//test getEmail() {}