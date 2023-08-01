const contacts = require('./contacts');

const { Command } = require('commander');
const commandLine = new Command();

commandLine
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

commandLine.parse(process.argv);
const commandLineArgs = commandLine.opts();

invokeAction(commandLineArgs);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.log(await contacts.listContacts());
      break;

    case 'get':
      console.log(await contacts.getContactById(id));
      break;

    case 'add':
      console.log(await contacts.addContact(name, email, phone));
      break;

    case 'remove':
      console.log(await contacts.removeContact(id));
      break;

    case 'change':
      console.log(await contacts.changeContact(id, name, email, phone));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
