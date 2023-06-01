// client-list-business.js
const Clientes = require("./data-business");
const ElementoCliente = require("./client-business");

function printClientsAccounts() {
  const clients = Clientes.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ElementoCliente.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

module.exports = { printClientsAccounts };
