const stor = require("../stor.js");

const Stor = new stor.Stor("http://90.109.132.10:8080", "password");

let users = Stor.Table("test");
    
it("Create a Database", async () => {
    expect.assertions(1);
    const response = await users.Init([{name: 'jean'},{name: 'marie'}]);
    const body = await response.text();
    expect(body).toEqual("Database already exists");
});