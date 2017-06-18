/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50621
Source Host           : 127.0.0.1:3306
Source Database       : test_node

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2017-06-18 23:36:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `book`
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `pic` varchar(50) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `sale_count` int(11) DEFAULT NULL,
  `issue_date` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', '西游记', null, null, '22', null);

-- ----------------------------
-- Table structure for `book_type`
-- ----------------------------
DROP TABLE IF EXISTS `book_type`;
CREATE TABLE `book_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book_type
-- ----------------------------
INSERT INTO `book_type` VALUES ('1', '小说');
INSERT INTO `book_type` VALUES ('2', '散文');
INSERT INTO `book_type` VALUES ('3', '诗歌');

-- ----------------------------
-- Table structure for `favorite`
-- ----------------------------
DROP TABLE IF EXISTS `favorite`;
CREATE TABLE `favorite` (
  `id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of favorite
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '001', '001');
INSERT INTO `user` VALUES ('2', '002', '002');
INSERT INTO `user` VALUES ('3', '005', null);
INSERT INTO `user` VALUES ('4', '006', '006');
INSERT INTO `user` VALUES ('5', '007', '007');
INSERT INTO `user` VALUES ('6', '008', '008');
INSERT INTO `user` VALUES ('7', '13123456789', '13123456789');
INSERT INTO `user` VALUES ('8', '', '');
INSERT INTO `user` VALUES ('9', '', '');
INSERT INTO `user` VALUES ('10', '123', '123');
INSERT INTO `user` VALUES ('11', '', '');
INSERT INTO `user` VALUES ('12', '', '');
INSERT INTO `user` VALUES ('13', '121', '');
INSERT INTO `user` VALUES ('14', '121', '');
INSERT INTO `user` VALUES ('15', '1234', '1234');
INSERT INTO `user` VALUES ('16', '55', '55');
INSERT INTO `user` VALUES ('17', '66', '66');
INSERT INTO `user` VALUES ('18', '88', '88');
INSERT INTO `user` VALUES ('19', '6666', '6666');
