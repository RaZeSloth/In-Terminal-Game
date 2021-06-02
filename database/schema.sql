CREATE DATABASE InTerminalGame;

CREATE TABLE Accounts ( 
    username VARCHAR(20) NOT NULL PRIMARY KEY,
    pass VARCHAR(20),
    job VARCHAR(20),
    balance VARCHAR(20)
);