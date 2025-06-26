import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDB = async () => {
  try {
    // await db.none(`
    //     DROP TABLE IF EXISTS students;

    //     CREATE TABLE students (
    //         id SERIAL NOT NULL PRIMARY KEY,
    //         name TEXT NOT NULL,
    //         surname TEXT NOT NULL,
    //         age INTEGER NOT NULL,
    //         profilepic TEXT
    //     );
    // `);

    // const result = await db.none(`
    //     INSERT INTO students (name, surname, age) VALUES ('Mario', 'Rossi', 23);

    //     INSERT INTO students (name, surname, age) VALUES ('Gianluca', 'Verdi', 25);
    // `);

    // await db.none(`
    //     DROP TABLE IF EXISTS users;

    //     CREATE TABLE users (
    //         userId SERIAL NOT NULL PRIMARY KEY,
    //         username TEXT NOT NULL,
    //         password TEXT NOT NULL,
    //         token TEXT
    //     );
    // `);

    // await db.none(`
    //     INSERT INTO users (username, password) VALUES ('pippo', 'pippo2025!');
    // `);

    await db.manyOrNone(`
        SELECT * FROM students;    
    `);

    console.log("query di controllo eseguita");
  } catch (error) {
    console.error("Errore nell'esecuzione della query di setup", error);
  }
};

setupDB();

export { db };
