import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDB = async () => {
  try {
    await db.none(`
        DROP TABLE IF EXISTS students;

        CREATE TABLE students (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            surname TEXT NOT NULL,
            age INTEGER NOT NULL
        );
    `);

    const result = await db.none(`
        INSERT INTO students (name, surname, age) VALUES ('Mario', 'Rossi', 23);

        INSERT INTO students (name, surname, age) VALUES ('Gianluca', 'Verdi', 25);
    `);

    const students = await db.manyOrNone(`
        SELECT * FROM students;    
    `);

    console.log("Lista degli studenti:", students);

    console.log("query eseguita");
  } catch (error) {
    console.error("Errore nell'esecuzione della query di setup", error);
  }
};

setupDB();

export { db };
