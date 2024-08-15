const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const numero = parseInt(prompt("Numero: "));
  const bairro = prompt("Bairro: ");
  const rua = prompt("Rua: ");

  let id_corretora = 0;
  if (corretora.index()) {
    id_corretora = parseInt(prompt("ID da corretora: "));
  } else {
    console.log("Cadastre uma corretora para inserir um corretor");
  }

  if (numero > 0 && bairro != "" && rua != "" && corretora.show(id_corretora)) {
    return {
      id,
      numero,
      bairro,
      rua,
      id_corretora,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);

    console.log("Registro concluido com sucesso!");
  }
};

const index = (id_corretora) => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => {
    if (el.id_corretora == id_corretora || !id_corretora) {
      console.log(el);
    }
  });
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluído com sucesso");
    } else {
      console.log("Registro não encontrado");
    }
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};