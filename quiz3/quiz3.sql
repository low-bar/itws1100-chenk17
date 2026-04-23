-- create the wall table
CREATE TABLE `wall` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(100) NOT NULL,
   `comments` text NOT NULL,
   PRIMARY KEY (`id`)
);
-- insert data into the table
INSERT INTO wall
VALUES (1, "kevin chen", "this is made by ai");
