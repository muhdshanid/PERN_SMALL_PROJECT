CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    google_id VARCHAR NOT NULL UNIQUE
);

CREATE TABLE posts (
     id SERIAL PRIMARY KEY,
     body VARCHAR(255) NOT NULL,
     author_id INT REFERENCES users(id) NOT NULL
);

SELECT * FROM users;

DROP TABLE users;