//importar o express
const express = require("express");
//iniciar as Rotas
const router = express.Router(); // Este R tem q ser maiusculo

const cadastro = require("../../views/admin/signup");
const login = require("../../views/admin/signin");

//importa o repositorio de usuário
const userRepo = require("../../repositories/users");

router.get("/cadastro", (req, res) => {
  res.send(cadastro());
});

router.post("/cadastro", async (req, res) => {
  await userRepo.create(req.body);
  res.send("TUDO CERTO");
});

router.get("/login", (req, res) => {
  res.send(login());
});

module.exports = router;
