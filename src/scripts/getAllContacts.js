import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  contacts;
  console.log(contacts);
};

console.log(await getAllContacts());
