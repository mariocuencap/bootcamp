// client-business.js
const Cuentas = require("./data-business");
const ElementoCuentaCliente = require("./account-business");

function getClientElement(client) {
  const allAccounts = Cuentas.getAccounts();
  const clientAccounts = [];
  for (let account of allAccounts) {
    if (account.clientId === client.id) {
      clientAccounts.push(account);
    }
  }

  const node = getClientNode(client);
  const ul = ElementoCuentaCliente.getClientAccountsElement(clientAccounts);

  node.appendChild(ul);

  return node;
}

function getClientNode(client) {
  const li = document.createElement("li");
  li.append(getFullName(client));

  return li;
}

function getFullName(client) {
  return client.first_name + " " + client.last_name;
}

module.exports = { getClientElement, getClientNode, getFullName };
