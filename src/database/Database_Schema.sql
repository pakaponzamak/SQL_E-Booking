-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 06, 2023 at 02:53 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Test_Booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `emp_relation`
--

CREATE TABLE `emp_relation` (
  `user_id` varchar(255) DEFAULT NULL,
  `health_id` int(11) NOT NULL,
  `relation_type` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone_num` varchar(30) DEFAULT NULL,
  `doctor_type` varchar(50) DEFAULT NULL,
  `time_selected` varchar(50) DEFAULT NULL,
  `date_selected` varchar(50) DEFAULT NULL,
  `picked_what` varchar(50) DEFAULT NULL,
  `more_detail` text DEFAULT NULL,
  `plant` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `health_care`
--

CREATE TABLE `health_care` (
  `health_id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `doctor_type` varchar(30) DEFAULT NULL,
  `phone_num` varchar(30) DEFAULT NULL,
  `time_selected` varchar(30) DEFAULT NULL,
  `date_selected` varchar(30) DEFAULT NULL,
  `plant` varchar(30) DEFAULT NULL,
  `checkInTime` varchar(30) DEFAULT NULL,
  `picked_what` varchar(50) DEFAULT NULL,
  `checkIn` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `more_detail` text DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `insert_health_care`
--

CREATE TABLE `insert_health_care` (
  `health_id` int(11) NOT NULL,
  `health_care_name` varchar(255) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `timeStart` varchar(50) DEFAULT NULL,
  `timeEnd` varchar(50) DEFAULT NULL,
  `plant` varchar(50) DEFAULT NULL,
  `doctor` varchar(50) DEFAULT NULL,
  `whoPickedThis` varchar(50) DEFAULT NULL,
  `alreadyPicked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `insert_TR`
--

CREATE TABLE `insert_TR` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `time_Start` varchar(50) DEFAULT NULL,
  `time_End` varchar(50) DEFAULT NULL,
  `date_course` varchar(50) DEFAULT NULL,
  `lecturer` varchar(50) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `hall` varchar(50) DEFAULT NULL,
  `plant` varchar(50) DEFAULT NULL,
  `online_code` varchar(50) DEFAULT NULL,
  `number` int(11) DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Table structure for table `parent_data`
--

CREATE TABLE `parent_data` (
  `user_id` varchar(20) DEFAULT NULL,
  `parent_id` int(11) NOT NULL,
  `parent_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `training_course`
--

CREATE TABLE `training_course` (
  `course_id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `time_selected` varchar(50) DEFAULT NULL,
  `course` varchar(50) DEFAULT NULL,
  `plant` varchar(50) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `hall` varchar(50) DEFAULT NULL,
  `userFromPlant` varchar(20) DEFAULT NULL,
  `company` varchar(20) NOT NULL,
  `division` varchar(20) NOT NULL,
  `department` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emp_relation`
--
ALTER TABLE `emp_relation`
  ADD PRIMARY KEY (`health_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `health_care`
--
ALTER TABLE `health_care`
  ADD PRIMARY KEY (`health_id`),
  ADD KEY `health_care_ibfk_1` (`user_id`);

--
-- Indexes for table `insert_health_care`
--
ALTER TABLE `insert_health_care`
  ADD PRIMARY KEY (`health_id`);

--
-- Indexes for table `insert_TR`
--
ALTER TABLE `insert_TR`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `parent_data`
--
ALTER TABLE `parent_data`
  ADD PRIMARY KEY (`parent_id`),
  ADD KEY `user_id_fk_with_users` (`user_id`);

--
-- Indexes for table `training_course`
--
ALTER TABLE `training_course`
  ADD KEY `fk_training_course_course_id` (`course_id`),
  ADD KEY `training_course_ibfk_1` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `insert_health_care`
--
ALTER TABLE `insert_health_care`
  MODIFY `health_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `insert_TR`
--
ALTER TABLE `insert_TR`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parent_data`
--
ALTER TABLE `parent_data`
  MODIFY `parent_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `emp_relation`
--
ALTER TABLE `emp_relation`
  ADD CONSTRAINT `emp_relation_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `fk_emp_health` FOREIGN KEY (`health_id`) REFERENCES `insert_health_care` (`health_id`) ON DELETE CASCADE;

--
-- Constraints for table `health_care`
--
ALTER TABLE `health_care`
  ADD CONSTRAINT `fk_health_care_health_id` FOREIGN KEY (`health_id`) REFERENCES `insert_health_care` (`health_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `health_care_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `parent_data`
--
ALTER TABLE `parent_data`
  ADD CONSTRAINT `user_id_fk_with_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `training_course`
--
ALTER TABLE `training_course`
  ADD CONSTRAINT `fk_course_id` FOREIGN KEY (`course_id`) REFERENCES `insert_TR` (`course_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_training_course_course_id` FOREIGN KEY (`course_id`) REFERENCES `insert_TR` (`course_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `training_course_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
