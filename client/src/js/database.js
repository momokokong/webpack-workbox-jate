import { openDB } from 'idb';

const initdb = async () =>
  await openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// always update id 1 given there is only one string holds all text inputs
export const putDb = async (content) => {
  console.log('putDB');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, content: content });
  const result = await request;
  console.log('Data saved to the database', result);
};


// get data from DB.  if JATE is loaded the first time, return null so the editor would load JATE header.
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  // return null when content is not yet init
  return (result?.content ?? null);
};

initdb();
