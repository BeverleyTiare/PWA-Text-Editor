import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database: added
export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({content});
  await tx.done;
  console.log('put to db done'); 
};


// TODO: Add logic for a method that gets all the content from the database: added
export const getDb = async () => {
  console.log('get from db, all content');
  const db = await openDB('jate', 1); 
  // console.log("db = ", db)
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const allContent = await store.getAll();
  // console.log("allContent = ", allContent[allContent.length - 1].content)
  await tx.done;
  // console.log('get from db done');
  if (allContent.length > 0) {
    return allContent[allContent.length - 1].content
  } else {
    return ""
  }
  // return allContent;
};

initdb();
