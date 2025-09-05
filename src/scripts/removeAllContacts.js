import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = await writeContacts([]);
  return contacts;
};

removeAllContacts();
