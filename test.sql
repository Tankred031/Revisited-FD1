-- 1. Kreiramo tablicu
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    ime TEXT,
    godine INTEGER
);

-- 2. Ubacujemo podatke
INSERT INTO users (ime, godine)
VALUES ('Marko', 25);

INSERT INTO users (ime, godine)
VALUES ('Ana', 22);

-- 3. Čitamo podatke
SELECT * FROM users;
