CREATE DATABASE IF NOT EXISTS house_hunting;

CREATE TABLE `rooms` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'room name',
	`station_name` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
	`route_name` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
	UNIQUE KEY `unique_name` (`name`) USING BTREE,
	PRIMARY KEY (`id`)
);
