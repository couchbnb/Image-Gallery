
    -- mysql -u root -p < schema.sql

DROP DATABASE IF EXISTS couchbnb;

CREATE DATABASE couchbnb;

  USE couchbnb;

    CREATE TABLE gallery (
    id int not null AUTO_INCREMENT,
    name VARCHAR(50),
    rating DECIMAL(5,2),
    reviews INT,
    is_super INT,
    is_liked INT,
    location VARCHAR(100),
    photo_set INT,
    number_photo TEXT,
    PRIMARY KEY(id)
    );

