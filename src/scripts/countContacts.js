import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log('Total contacts: ', contacts.length);
};

console.log(await countContacts());
