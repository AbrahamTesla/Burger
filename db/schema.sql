CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name VARCHAR2(30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
           
