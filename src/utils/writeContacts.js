import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = await writeFile(
    PATH_DB,
    JSON.stringify(updatedContacts, null, 2),
  );
  return data;
};
