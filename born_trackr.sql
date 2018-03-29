-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2018 at 10:25 PM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `born_trackr`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `converge_id` varchar(40) DEFAULT NULL,
  `jobtype` varchar(100) DEFAULT NULL,
  `complexity` varchar(100) DEFAULT NULL,
  `scheduled_start_date` date NOT NULL,
  `scheduled_end_date` date NOT NULL,
  `task_status` int(5) DEFAULT NULL,
  `publisher` varchar(100) DEFAULT NULL,
  `pocs` varchar(100) DEFAULT NULL,
  `job_comments` varchar(255) DEFAULT NULL,
  `scheduled_hours` decimal(4,2) unsigned DEFAULT NULL,
  `total_no_of_functionalities` int(5) DEFAULT NULL,
  `functionality_details` varchar(255) DEFAULT NULL,
  `edit_reason` varchar(255) DEFAULT NULL,
  `actual_start_time` datetime NOT NULL,
  `actual_end_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `actual_hours` decimal(4,2) DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=62 ;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`task_id`, `uid`, `converge_id`, `jobtype`, `complexity`, `scheduled_start_date`, `scheduled_end_date`, `task_status`, `publisher`, `pocs`, `job_comments`, `scheduled_hours`, `total_no_of_functionalities`, `functionality_details`, `edit_reason`, `actual_start_time`, `actual_end_time`, `actual_hours`, `token`, `updated_at`) VALUES
(47, 2, '01_PNG_1234', 'New Build', '1', '2018-03-01', '2018-03-02', 3, 'WM', 'Bill', 'New Build', '24.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '$1$ti1.yj5.$iQZOdzyKuljXaaaqzWYR.0', '2018-03-26 23:04:57'),
(48, 2, '25_ABC_DG', 'Refresh', '2', '2018-03-17', '2018-03-10', 3, 'DG', 'Khary', 'Issue Fixes', '12.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '$1$ti1.yj5.$iQZOdzyKuljXaaaqzWYR.0', '2018-03-26 23:05:22'),
(49, 2, '1234', 'New Build', '2', '2018-03-03', '2018-03-03', 3, 'DG', 'Noble', 'afds', '12.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '$1$jI3.wQ2.$En3UHLPdn85e/koaONctk/', '2018-03-27 19:47:19'),
(50, 2, '01_PNG_0001', 'New Build', '1', '2018-03-02', '2018-03-09', 3, 'DG', 'Noble', 'qw', '12.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '$1$jI3.wQ2.$En3UHLPdn85e/koaONctk/', '2018-03-27 19:57:08'),
(51, 2, '1234', 'Refresh', '3', '2018-03-01', '2018-03-02', 3, 'CVS', 'Khary', 'asdfasdf', '12.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '$1$jI3.wQ2.$En3UHLPdn85e/koaONctk/', '2018-03-27 19:57:21'),
(52, 2, 'AAA', 'Refresh', '1', '2018-03-02', '2018-03-09', 3, 'CVS', 'Noble', 'aad', '12.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '$1$jI3.wQ2.$En3UHLPdn85e/koaONctk/', '2018-03-27 20:26:22'),
(53, 2, 'ccc', 'Issues', '1', '2018-03-03', '2018-03-18', 3, 'CVS', 'Khary', 'we', '12.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '$1$jI3.wQ2.$En3UHLPdn85e/koaONctk/', '2018-03-27 19:57:43'),
(54, 2, '01_PNG_0001', 'New Build', '3', '2018-03-02', '2018-03-03', 3, 'WM', 'Noble', 'af', '12.00', NULL, NULL, NULL, '2018-03-27 15:45:19', '2018-03-28 19:34:47', NULL, '$1$uK5.fl5.$qev8JUFgcgrs5jtEi4AxC1', '2018-03-28 21:04:47'),
(55, 2, 'Loganathan', 'New Build', '1', '2018-02-03', '2018-09-03', 3, 'CVS', 'Noble', 'adsfasd', '12.00', NULL, NULL, NULL, '2018-03-27 15:45:19', '2018-03-29 19:21:08', NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-29 20:51:08'),
(56, 2, 'AAAAAAAA', 'Refresh', '1', '2018-03-01', '2018-03-02', 3, 'WM', 'Khary', 'q', '32.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-03-29 19:21:56', NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-29 20:51:56'),
(57, 2, '1asdfasdfasdfasd', 'New Build', '2', '2018-02-03', '2018-10-03', 3, 'WM', 'Khary', 'asdf', '22.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-03-29 20:22:36', NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-29 21:52:36'),
(58, 2, 'sdf', 'New Build', '2', '2018-03-11', '2018-03-16', 3, 'WM', 'Khary', 'ssfsfs', '4.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-03-29 20:22:32', NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-29 21:52:32'),
(59, 2, '01_PNG_0001', 'New Build', '3', '2018-03-02', '2018-03-09', 2, 'WM', 'Bill', '1234', '12.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-03-29 20:23:43', NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-29 21:53:43'),
(60, 2, '01_WMT_0001', 'Refresh', '2', '2018-03-02', '2018-03-04', 1, 'WM', 'Bill', 'Logan', '24.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-03-29 20:22:59', NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-29 20:22:59'),
(61, 2, '01_CLX_0001', 'Refresh', '2', '2018-03-02', '2018-03-04', 1, 'WM', 'Bill', '12345', '24.00', NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-03-29 20:23:33', NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-29 20:23:33');

-- --------------------------------------------------------

--
-- Table structure for table `userprofile`
--

CREATE TABLE IF NOT EXISTS `userprofile` (
  `UID` int(11) NOT NULL AUTO_INCREMENT,
  `EMP_ID` varchar(20) NOT NULL,
  `PASSWORD` char(255) NOT NULL,
  `FNAME` varchar(20) NOT NULL,
  `LNAME` varchar(20) NOT NULL,
  `GENDER` char(7) NOT NULL,
  `DOB` date NOT NULL,
  `DOJ` date NOT NULL,
  `EMAIL_ID` varchar(100) NOT NULL,
  `DESIGNATION` varchar(40) NOT NULL,
  `TEAM` varchar(40) NOT NULL,
  `DEPT` varchar(40) DEFAULT NULL,
  `DIVISION` varchar(40) NOT NULL,
  `CONTACT_NO` varchar(14) NOT NULL,
  `EMERGENCY_CONTACT_NO` varchar(14) NOT NULL,
  `ROLE` int(3) NOT NULL,
  `PROFILE_PIC` varchar(100) DEFAULT NULL,
  `TOKEN_ID` varchar(255) DEFAULT NULL,
  `LAST_SEEN` datetime DEFAULT NULL,
  `SHIFT_TYPE` varchar(5) DEFAULT NULL,
  `expired_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `userprofile`
--

INSERT INTO `userprofile` (`UID`, `EMP_ID`, `PASSWORD`, `FNAME`, `LNAME`, `GENDER`, `DOB`, `DOJ`, `EMAIL_ID`, `DESIGNATION`, `TEAM`, `DEPT`, `DIVISION`, `CONTACT_NO`, `EMERGENCY_CONTACT_NO`, `ROLE`, `PROFILE_PIC`, `TOKEN_ID`, `LAST_SEEN`, `SHIFT_TYPE`, `expired_at`, `updated_at`) VALUES
(1, 'IN002', '$1$qp88ToDi$is6qgzM6vdSZNk.xal4qj/', 'Sathish Kumar', 'Krishnamoorthy', 'Male', '1991-06-27', '2016-09-26', 'sathish.krishnamoorthy@borngroup.com', 'Front End Developer', 'Triad', 'FED', 'Digital', '8056220084', '8056220084', 2, NULL, '$1$fC5.6c..$mLBhqkdJuaWQNwGIswcBC0', '2018-03-12 19:36:29', 'PST', '2018-03-13 07:37:53', '2018-03-12 19:37:53'),
(2, 'IN001', '$1$qp88ToDi$is6qgzM6vdSZNk.xal4qj/', 'Admin', 'Test', 'Male', '1991-02-05', '2018-02-01', 'admin@borngroup.com', 'Project manager', 'Triad', 'Fed', 'Digital', '9999900000', '9999900000', 0, NULL, '$1$GV2.XQ5.$aYdAiwcdwgOTSAJaABWF.1', '2018-03-30 00:49:33', 'EST', '2018-03-30 15:23:53', '2018-03-30 03:23:53'),
(3, 'IN004', '$1$qp88ToDi$is6qgzM6vdSZNk.xal4qj/', 'Sample', 'Lname', '', '0000-00-00', '0000-00-00', '', '', '', NULL, '', '', '', 0, NULL, NULL, NULL, NULL, '2018-02-27 23:53:12', '2018-02-27 23:53:12'),
(5, 'IN857', '$1$qp88ToDi$is6qgzM6vdSZNk.xal4qj/', 'SathishK', 'Lname', 'Male', '1991-06-27', '1991-06-27', '', 'Employee', 'Triad', NULL, '', '1', '', 0, NULL, '$1$WQDOEf2T$pSj64kGakD4zsEmE5FpNc1', '2018-02-28 01:24:44', NULL, '2018-02-28 13:30:43', '2018-02-28 01:30:43');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
