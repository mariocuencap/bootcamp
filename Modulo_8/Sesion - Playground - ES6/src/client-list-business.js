// client-list-business.js
import * as Clientes from "./data-business";
import * as ElementoCliente from "./client-business";

function printClientsAccounts() {
  const clients = Clientes.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ElementoCliente.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

export { printClientsAccounts };
