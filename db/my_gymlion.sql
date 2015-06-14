-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 14, 2015 at 11:27 PM
-- Server version: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_gymlion`
--

-- --------------------------------------------------------

--
-- Table structure for table `award`
--

CREATE TABLE IF NOT EXISTS `award` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `instructor` int(10) unsigned NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `award`
--

INSERT INTO `award` (`id`, `instructor`, `name`, `img`) VALUES
(1, 1, 'Instructor of the Year 2013', 'http://gymlion.altervista.org/img/awards/01.png'),
(2, 1, 'First Prize YMCA 2014', 'http://gymlion.altervista.org/img/awards/03.png'),
(3, 1, 'Winner of Capoeira Torunament 2014', 'http://gymlion.altervista.org/img/awards/02.png');

<!-- PMA-SQL-ERROR -->
    <div class="error"><h1>Error</h1>
<p><strong>SQL query:</strong>
<a href="tbl_sql.php?sql_query=SHOW+TABLE+STATUS+FROM+%60my_gymlion%60+LIKE+%27contacts%27&amp;show_query=1&amp;db=my_gymlion&amp;table=contacts&amp;token=a464e5d9eaa95609b27af87d8960ae7f"><span class="nowrap"><img src="themes/dot.gif" title="Edit" alt="Edit" class="icon ic_b_edit" /> Edit</span></a>    </p>
<p>
<code class="sql"><pre>
SHOW TABLE STATUS FROM `my_gymlion` LIKE 'contacts'
</pre></code>
</p>
<p>
    <strong>MySQL said: </strong><a href="./url.php?url=http%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F5.1%2Fen%2Ferror-messages-server.html&amp;token=a464e5d9eaa95609b27af87d8960ae7f" target="mysql_doc"><img src="themes/dot.gif" title="Documentation" alt="Documentation" class="icon ic_b_help" /></a>
</p>
<code>
#2006 - MySQL server has gone away
</code><br />
</div>