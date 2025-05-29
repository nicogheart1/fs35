INSERT INTO Users (name, surname, birthday, email) VALUES ('Mario', 'Rossi', '1990-05-29 00:00:00', 'mariorossi@gmail.com');

INSERT INTO Users (name, surname, birthday, email) VALUES ('Luca', 'Gialli', '1991-04-19 00:00:00', 'lucagialli@gmail.com'), ('Giuseppe','Verdi','1992-06-13 00:00:00', 'giuseppeverdi@gmail.com');


SELECT name AS Nome, surname AS Cognome FROM Users;

SELECT * FROM Users;

SELECT * FROM Users WHERE name = 'Mario';

SELECT * FROM Users ORDER BY name DESC;

SELECT * FROM Users LIMIT 1;

UPDATE Users SET name = 'Franco' WHERE id = 2;

DELETE FROM Users WHERE id = 2;

INSERT INTO UserConfig (userId, score) VALUES (1, 200), (2, 550), (3, 1900), (4, 350), (5, 700);

SELECT userId, name, surname, score FROM Users INNER JOIN UserConfig ON Users.id = UserConfig.userId;

SELECT userId, name, surname, score FROM Users INNER JOIN UserConfig ON Users.id = UserConfig.userId WHERE Users.id = 3;