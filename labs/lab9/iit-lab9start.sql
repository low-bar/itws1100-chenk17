-- create the tables for our actors
CREATE TABLE `actors` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `Last` varchar(100) NOT NULL,
   `First` varchar(100) NOT NULL,
   `year` char(10) DEFAULT NULL,
   PRIMARY KEY (`id`)
);
-- insert data into the tables
INSERT INTO actors
VALUES (4, "Carrey", "Jim Carrey", "06/01/1957");
   (2, "Masahiro", "Inoue", "03/20/1989"),
   (3, "Depp", "Johnny", "06/09/1963");