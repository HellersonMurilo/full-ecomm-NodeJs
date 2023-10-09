//trabalhar com o filesystem
const fs = require("fs");
const crypto = require("crypto");

const Repository = require("./repository");

class ProductRepository extends Repository {
  apenasProduto(){}

  
}

module.exports = new ProductRepository("products.json");
/*
//test dev
//new UserRepository("users.json");

const test = async () => {
  const repo = new ProductRepository("products.json");
  //await repo.create({ nome: "Maria", email: "maria@email.com" });
  //const users = await repo.getAll();
  //console.log(users);

  repo.update("6336e00c", { age: 56, nome: "Maria Cicera", nasc: 1943 });
};

test();
*/
