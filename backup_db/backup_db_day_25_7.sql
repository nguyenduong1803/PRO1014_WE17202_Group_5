-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2022 at 07:18 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pro1014_we17202_group_5`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `id_table_book` int(11) DEFAULT NULL,
  `purchase_status` int(11) NOT NULL,
  `status_cart_order` int(11) NOT NULL DEFAULT 1,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `delete_at` timestamp NULL DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 1,
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `id_user`, `id_product`, `amount`, `id_table_book`, `purchase_status`, `status_cart_order`, `create_at`, `delete_at`, `is_delete`, `update_at`) VALUES
(3, 5, 5, 4, 5, 2, 1, '2022-07-24 08:58:50', NULL, 1, '2022-07-24 03:58:11'),
(4, 5, 5, 2, NULL, 1, 1, '2022-07-24 09:17:16', NULL, 1, NULL),
(5, 2, 5, 2, NULL, 1, 1, '2022-07-24 14:30:11', NULL, 1, NULL),
(6, 5, 4, 3, 5, 2, 1, '2022-07-24 16:40:14', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `code_sale`
--

CREATE TABLE `code_sale` (
  `id` int(11) NOT NULL,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_product_apply` int(11) DEFAULT NULL,
  `price` float NOT NULL DEFAULT 0,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `expired_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `code_sale`
--

INSERT INTO `code_sale` (`id`, `code`, `id_product_apply`, `price`, `create_at`, `expired_at`) VALUES
(1, 'CS_1', NULL, 10000, '2022-07-18 16:09:19', '2022-07-31 23:10:01'),
(2, 'CS_2', NULL, 15000, '2022-07-18 16:09:19', '2022-07-28 23:10:14');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_invoice`
--

CREATE TABLE `detail_invoice` (
  `id` int(11) NOT NULL,
  `id_envoices` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `directory`
--

CREATE TABLE `directory` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `directory`
--

INSERT INTO `directory` (`id`, `name`) VALUES
(1, 'Bán chạy'),
(2, 'Hot sale');

-- --------------------------------------------------------

--
-- Table structure for table `emotions`
--

CREATE TABLE `emotions` (
  `id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `cancel_at` timestamp NULL DEFAULT NULL,
  `is_delete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`id`, `name`) VALUES
(1, 'Nam'),
(2, 'Nữ');

-- --------------------------------------------------------

--
-- Table structure for table `images_product`
--

CREATE TABLE `images_product` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_product_img` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 1,
  `delete_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images_product`
--

INSERT INTO `images_product` (`id`, `id_user`, `id_product_img`, `path`, `create_at`, `update_at`, `is_delete`, `delete_at`) VALUES
(21, 5, '5KLVGZK3PY', 'https://res.cloudinary.com/dlvtzpxce/image/upload/v1658161731/product/en2jk2awgy7jgmhx9tpb.jpg', '2022-07-18 16:28:52', NULL, 1, NULL),
(22, 5, '5KLVGZK3PY', 'https://res.cloudinary.com/dlvtzpxce/image/upload/v1658161734/product/zsjwxpygwnhn68qvbhbq.jpg', '2022-07-18 16:28:55', NULL, 1, NULL),
(24, 5, 'XWQHQCYKGF', 'https://res.cloudinary.com/dlvtzpxce/image/upload/v1658164980/product/r5qsd0w6tsvlxrfgzh1k.jpg', '2022-07-18 17:23:01', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status_cart_order` int(11) NOT NULL DEFAULT 1,
  `total_price` float NOT NULL,
  `status_envoice` int(11) NOT NULL DEFAULT 1,
  `id_staff` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `id_user`, `status_cart_order`, `total_price`, `status_envoice`, `id_staff`, `create_at`, `update_at`, `delete_at`, `is_delete`) VALUES
(2, 5, 1, 1800000, 1, 2, '2022-07-24 16:14:48', NULL, NULL, 1),
(3, 5, 1, 2700000, 1, 2, '2022-07-24 16:40:18', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('096f71bc9c818130c4a91c626fdd55a21897f39f401438e65c39b10cdd65f1afe80165c07ac7f932', 4, 1, 'duonglt', '[]', 0, '2022-07-12 08:58:18', '2022-07-12 08:58:18', '2023-07-12 15:58:18'),
('173a2440cf12440bb0ffb58fc5975b1e20dea0c918f1a3522c0e82a3c845f297aab656abadc3799e', 5, 1, 'duonglt', '[]', 0, '2022-07-13 08:53:11', '2022-07-13 08:53:11', '2023-07-13 15:53:11'),
('17c0dcaf36e7b12cfbace97a4497f4b17eb6dea6b744105da6f4ecf699ff61e163181aa359015741', 5, 1, 'duonglt', '[]', 0, '2022-07-18 17:41:02', '2022-07-18 17:41:02', '2023-07-19 00:41:02'),
('23ca0803433be2713beae55c3e88a8dcb26799e65e5a0ceb3213b2497bf55eec6cb37c189f1d79bb', NULL, 1, 'duonglt', '[]', 0, '2022-07-11 12:34:00', '2022-07-11 12:34:00', '2023-07-11 19:34:00'),
('31c32d7e5de4c15bd502d31662ef4e1254d5a65ff3b36092bde3d020ee494c246c88ee8e89d1b983', 4, 1, 'duonglt', '[]', 0, '2022-07-12 09:38:06', '2022-07-12 09:38:06', '2023-07-12 16:38:06'),
('33e7f1e068ed8fbb9b66e6c7a887df7e82d252b8815872dd7aad1e36f53f2435107681597d5be872', 4, 1, 'duonglt', '[]', 0, '2022-07-12 09:12:42', '2022-07-12 09:12:42', '2023-07-12 16:12:42'),
('33fb5c0e48dbc3a4fa43e059c17fab5bd48591482d96d069f9c1e137389ad8f078bd32aa0f78a67f', 4, 1, 'duonglt', '[]', 0, '2022-07-12 09:05:53', '2022-07-12 09:05:53', '2023-07-12 16:05:53'),
('3749f05d4b1cda36806e786613c98a979e6c44ab44e148e8e7efc11cd30a196a755466dcc4c0ebf1', 4, 1, 'duonglt', '[]', 0, '2022-07-12 08:36:35', '2022-07-12 08:36:35', '2023-07-12 15:36:35'),
('3cc0064705de2b94beb54b1cdc06720af293f17156edd4f37e265aa9e12e5641dd876d1ca62c50bc', 4, 1, 'duonglt', '[]', 0, '2022-07-12 08:31:58', '2022-07-12 08:31:58', '2023-07-12 15:31:58'),
('3d67e9610b1a9e567bc88df2c8795976f2ed8249ddd7f9e5f96d17cd52ac0490371d9d1268be1f8b', NULL, 1, 'duonglt', '[]', 0, '2022-07-11 12:24:22', '2022-07-11 12:24:22', '2023-07-11 19:24:22'),
('5e0c781745c64915c193c1be346d06fa5203e55514c809fda560a98d3c590ffdf505cfb94cb6946f', 4, 1, 'duonglt', '[]', 0, '2022-07-12 08:46:55', '2022-07-12 08:46:55', '2023-07-12 15:46:55'),
('72526b6c35bd7fb45268db0dfd5bf5985a3cc6f31c4ad48ec2b04a122bec6f1d283de449407273bb', 5, 1, 'duonglt', '[]', 0, '2022-07-13 18:23:14', '2022-07-13 18:23:14', '2023-07-14 01:23:14'),
('72d3478422ad445d41dee8ca82f943b2835306ac82940f2b3189147145e389d54cbe0f5830bbba6e', 2, 1, 'duonglt', '[]', 0, '2022-07-24 07:32:33', '2022-07-24 07:32:33', '2023-07-24 14:32:33'),
('77044af628ba0062f568952f92d0507d4f903dd15c718e24782790240a2e7b7cfaa0efe91878213d', 5, 1, 'duonglt', '[]', 0, '2022-07-24 08:58:36', '2022-07-24 08:58:36', '2023-07-24 15:58:36'),
('8a0aff81bb1036702e1e79cc8a8e40ffe776876582c063635f97dbad76939fa74f3a26c5c0a78bc6', 4, 1, 'duonglt', '[]', 1, '2022-07-12 09:21:57', '2022-07-12 09:21:57', '2023-07-12 16:21:57'),
('96d3e6070e5834cde15f7f1ad2783b2676c88a894ea2827c96dc8f8eed55c52e773542a030856f5e', 2, 1, 'duonglt', '[]', 1, '2022-07-24 07:29:56', '2022-07-24 07:29:56', '2023-07-24 14:29:56'),
('9ee187fe6b1efd21d0ab409a91f1bd007694c43f551da4dba31bbcb6a19d6c1abf274843551e02ec', 5, 1, 'duonglt', '[]', 0, '2022-07-16 09:28:17', '2022-07-16 09:28:17', '2023-07-16 16:28:17'),
('9f6ff7799bcc15954b6c24f7a675f230f02a748a8b625c1a6abc4838eecd27dba7ff317bd3d1bf65', 5, 1, 'duonglt', '[]', 0, '2022-07-20 08:20:43', '2022-07-20 08:20:43', '2023-07-20 15:20:43'),
('a1071ce532e910bf285e2e78de5138139ed990f6c7c1189a1f7e26e2d392a2007dc070bc0bc6db95', NULL, 1, 'duonglt', '[]', 0, '2022-07-11 12:42:00', '2022-07-11 12:42:00', '2023-07-11 19:42:00'),
('a2933a11556ba6e8233d1eba921f943382699bcf4ab522c990e1b5862855e0fcdced71c56316a70e', 5, 1, 'duonglt', '[]', 0, '2022-07-24 02:16:13', '2022-07-24 02:16:13', '2023-07-24 09:16:13'),
('a7ef5bd360fddfe0231a4a728879cb423e29319844aefb305dfca3ebcb0546f0c97aac560ac9171d', 4, 1, 'duonglt', '[]', 1, '2022-07-12 09:15:27', '2022-07-12 09:15:27', '2023-07-12 16:15:27'),
('b4f4609c38847b0d722fa5050f321a1822d15b0b5a6d1e00ca080a8fdf2ef97f296ebe1437f8837d', 4, 1, 'duonglt', '[]', 0, '2022-07-12 09:03:22', '2022-07-12 09:03:22', '2023-07-12 16:03:22'),
('b591c33695c4d1a4733b1ed53464fc4da9a0c7e18a6cdc1325b2834583e5b7a683f8dbe2f0d93c71', 5, 1, 'duonglt', '[]', 0, '2022-07-13 18:22:44', '2022-07-13 18:22:44', '2023-07-14 01:22:44'),
('d1a800a272e64d17c7f8d481038386b9c6b1ff177ae82f6e5d95b440f7a35c8ed3aebca57cfffbe4', 3, 1, 'duonglt', '[]', 0, '2022-07-11 17:35:57', '2022-07-11 17:35:57', '2023-07-12 00:35:57'),
('d2bd372d2964547e1d5dc17c3be97535ddd8e8f3f4d4964f74954aa2c0f070a6c247b543a8483a7c', NULL, 1, 'duonglt', '[]', 0, '2022-07-11 12:42:41', '2022-07-11 12:42:41', '2023-07-11 19:42:41'),
('d34bd19ca9cca95b0b16379d92bc7a30e54b2691a6108af3ab08ca3153f0dc67e7b9d0b95b7e17fe', NULL, 1, 'duonglt', '[]', 0, '2022-07-11 12:23:42', '2022-07-11 12:23:42', '2023-07-11 19:23:42'),
('d369b0fc7561e5136630d95189007c4d31fbd90140df0e59d6689421b294d46b94e2e8452db8416d', 4, 1, 'duonglt', '[]', 0, '2022-07-12 08:46:37', '2022-07-12 08:46:37', '2023-07-12 15:46:37'),
('d59bf90a7017310ae8020c3585620f82a73bc149325c35a210473f71661b0463657e0e95fc3ad32a', 5, 1, 'duonglt', '[]', 0, '2022-07-19 10:20:56', '2022-07-19 10:20:56', '2023-07-19 17:20:56'),
('d70419f81c98bd9821fc27a061321f9ccab5886281393daed8f1609621426a5241c47d7c7fdf5409', 5, 1, 'duonglt', '[]', 1, '2022-07-13 17:40:33', '2022-07-13 17:40:33', '2023-07-14 00:40:33'),
('d7179f9fe6fd463a6629af95a0659e05adfaa333ff1045c1c1ba2150b07a3cedfbe806211eabd0f5', 5, 1, 'duonglt', '[]', 0, '2022-07-20 08:06:03', '2022-07-20 08:06:03', '2023-07-20 15:06:03'),
('e84f2dd58b87f2b71207a8a48e32800dddebebb708e05f6b9249954d45110300333c382dd853dab2', 4, 1, 'duonglt', '[]', 0, '2022-07-12 08:46:51', '2022-07-12 08:46:51', '2023-07-12 15:46:51'),
('ed3f1b177ae3cda8b8e70434b2088a7d4b0203773797d99a2b8bee2251835c62f8b6c311994adb44', 5, 1, 'duonglt', '[]', 0, '2022-07-19 10:12:41', '2022-07-19 10:12:41', '2023-07-19 17:12:41'),
('f0068579e6e3a90e6afbe3ede04a2cab78a45031f1b5f90ca546a76005a1c4487122d1ffa50173f8', 2, 1, 'duonglt', '[]', 0, '2022-07-11 12:43:30', '2022-07-11 12:43:30', '2023-07-11 19:43:30'),
('f1db907905791989cac719e560006dba51f45bcc4c3f09fd472765413b20b0da8025441f3b823c39', 5, 1, 'duonglt', '[]', 0, '2022-07-18 09:05:57', '2022-07-18 09:05:57', '2023-07-18 16:05:57');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '1PIwsxeFXbesh0iPWX3wONtYmom4piIWUt8uyKOl', NULL, 'http://localhost', 1, 0, 0, '2022-07-11 12:22:39', '2022-07-11 12:22:39');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-07-11 12:22:39', '2022-07-11 12:22:39');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_directory` int(11) DEFAULT NULL,
  `short_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL DEFAULT 0,
  `id_code_sale` int(11) DEFAULT NULL COMMENT 'Mã giảm giá',
  `is_status_product` int(11) NOT NULL DEFAULT 1,
  `id_user` int(11) DEFAULT NULL,
  `id_cart` int(11) DEFAULT NULL,
  `full_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Mô tả sản phẩm (ckeditor/text)',
  `time_complete` datetime DEFAULT NULL COMMENT 'Thời gian hoàn thành',
  `id_img` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `id_directory`, `short_description`, `price`, `id_code_sale`, `is_status_product`, `id_user`, `id_cart`, `full_description`, `time_complete`, `id_img`, `create_at`, `update_at`, `delete_at`, `is_delete`) VALUES
(4, 'Salad rau ngũ sắc', 1, 'Sản phẩm bán chạy nhất trong vòng 5 năm qua', 300000, 1, 1, 5, NULL, 'test update product id 4', NULL, '5KLVGZK3PY', '2022-07-18 16:28:55', '2022-07-19 08:46:13', NULL, 1),
(5, 'Bò hương hồng xảo mai', 1, 'Món ăn đẳng cấp đến từ Tứ Xuyên', 300000, 1, 1, 5, NULL, NULL, NULL, 'XWQHQCYKGF', '2022-07-18 17:23:01', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_status`
--

CREATE TABLE `purchase_status` (
  `id` int(11) NOT NULL,
  `name` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_status`
--

INSERT INTO `purchase_status` (`id`, `name`) VALUES
(1, 'Online'),
(2, 'Offline');

-- --------------------------------------------------------

--
-- Table structure for table `rates`
--

CREATE TABLE `rates` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user'),
(3, 'staff');

-- --------------------------------------------------------

--
-- Table structure for table `status_book_table`
--

CREATE TABLE `status_book_table` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status_book_table`
--

INSERT INTO `status_book_table` (`id`, `name`) VALUES
(1, 'Processing'),
(2, 'Complete'),
(3, 'Cancel');

-- --------------------------------------------------------

--
-- Table structure for table `status_delete`
--

CREATE TABLE `status_delete` (
  `id` int(11) NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status_delete`
--

INSERT INTO `status_delete` (`id`, `name`) VALUES
(1, 'Chưa xoá'),
(2, 'Đã xoá');

-- --------------------------------------------------------

--
-- Table structure for table `status_emotions`
--

CREATE TABLE `status_emotions` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status_emotions`
--

INSERT INTO `status_emotions` (`id`, `name`) VALUES
(1, 'Thích'),
(2, 'Không thích');

-- --------------------------------------------------------

--
-- Table structure for table `status_envoice`
--

CREATE TABLE `status_envoice` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status_envoice`
--

INSERT INTO `status_envoice` (`id`, `name`) VALUES
(1, 'Processing'),
(2, 'Complete');

-- --------------------------------------------------------

--
-- Table structure for table `status_order_cart`
--

CREATE TABLE `status_order_cart` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status_order_cart`
--

INSERT INTO `status_order_cart` (`id`, `name`) VALUES
(1, 'Processing'),
(2, 'Complete'),
(3, 'Cancel');

-- --------------------------------------------------------

--
-- Table structure for table `status_product`
--

CREATE TABLE `status_product` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status_product`
--

INSERT INTO `status_product` (`id`, `name`) VALUES
(1, 'Còn'),
(2, 'Hết');

-- --------------------------------------------------------

--
-- Table structure for table `status_table`
--

CREATE TABLE `status_table` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Yes: có thể đặt, No: không được đặt'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status_table`
--

INSERT INTO `status_table` (`id`, `name`) VALUES
(1, 'Đang ăn'),
(2, 'Đã đặt'),
(3, 'Trống');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `address_shop` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Địa chỉ quán',
  `floor` int(11) NOT NULL COMMENT 'Tầng đặt bàn',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Mô tả bàn',
  `status` int(11) NOT NULL COMMENT 'Trạng thái của bàn',
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `index_table` int(11) NOT NULL COMMENT 'Mã đánh dấu của bàn',
  `total_user_sitting` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `limit_time_book` datetime DEFAULT NULL COMMENT 'Thời gian tối đa khách có thể đến để lấy bàn',
  `is_delete` int(11) NOT NULL DEFAULT 1,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `address_shop`, `floor`, `description`, `status`, `img`, `index_table`, `total_user_sitting`, `create_at`, `update_at`, `delete_at`, `limit_time_book`, `is_delete`, `id_user`) VALUES
(4, '30 Ba Đình, Hà Nội', 5, 'Chất liệu: gỗ trúc', 1, NULL, 503, 6, '2022-07-19 16:37:15', NULL, NULL, '2022-07-21 23:36:37', 1, 5),
(5, '191 Nguyễn Chí Thanh, Hà Nội', 4, 'Chất liệu: gỗ hương trầm nâu update', 2, 'https://res.cloudinary.com/dlvtzpxce/image/upload/v1658253063/tables/gxggq2ux9fvl8c3xe8qz.png', 410, 6, '2022-07-19 17:23:21', '2022-07-19 10:51:04', NULL, NULL, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `table_book`
--

CREATE TABLE `table_book` (
  `id` int(11) NOT NULL,
  `id_table` int(11) NOT NULL,
  `name_user` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_user` int(11) NOT NULL COMMENT 'Số người đi',
  `time_book` timestamp NULL DEFAULT NULL COMMENT 'Thời gian khách đặt bàn	',
  `status_book` int(11) NOT NULL COMMENT 'Trạng thái khách hàng đặt bàn	',
  `id_user` int(11) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `table_book`
--

INSERT INTO `table_book` (`id`, `id_table`, `name_user`, `phone`, `total_user`, `time_book`, `status_book`, `id_user`, `create_at`, `update_at`, `delete_at`, `is_delete`) VALUES
(1, 4, 'Le Duong', '0944565787', 5, '2022-07-20 16:41:30', 1, NULL, '2022-07-19 16:41:54', NULL, NULL, 1),
(3, 4, 'Le Duong Update', '0945656787', 7, '2022-07-20 15:10:54', 2, 5, '2022-07-20 15:12:50', '2022-07-20 10:40:07', NULL, 1),
(4, 4, 'Huu Duong', '0944565787', 6, '2022-07-21 16:41:30', 2, 5, '2022-07-20 17:43:28', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `ten` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mat_khau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dia_chi` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay_sinh` date NOT NULL,
  `sdt` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gioi_tinh` int(11) NOT NULL,
  `luong` float DEFAULT NULL,
  `ma_hd` int(11) DEFAULT NULL,
  `vai_tro` int(1) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `delete_at` int(11) DEFAULT NULL,
  `is_delete` int(11) DEFAULT 1,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token_verify` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Token dùng để verify khi user quên mật khẩu ...',
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `ten`, `mat_khau`, `dia_chi`, `ngay_sinh`, `sdt`, `gioi_tinh`, `luong`, `ma_hd`, `vai_tro`, `create_at`, `delete_at`, `is_delete`, `email`, `token_verify`, `img`) VALUES
(1, 'duong test 2', '$2y$10$3A/7BjM8euQ4StBkE.7LeOdUQcPRbQGEL16b.5/mAOk57GBsZXlsW', 'hcm', '1998-12-22', '0934565787', 1, NULL, NULL, 2, '2022-07-11 18:27:59', NULL, 1, 'duongtest3@gmail.com', NULL, NULL),
(2, 'duong test 4', '$2y$10$cfzKzK0JJWv0Nxg1hbkaLu5Bb15tsgO76Pbkz3KW3fj39ZniMcyyW', 'hcm 2', '1998-12-22', '0934555767', 2, NULL, NULL, 3, '2022-07-11 18:49:14', NULL, 1, 'duongtest4@gmail.com', NULL, NULL),
(3, 'duong test 5', '$2y$10$4bcaUqnJ5XJXlGhlVHhPLOwMXr9/Qi9GMw69vKmPVpYcmYx2EpxGe', 'yen lang, hn', '2000-08-22', '0934565787', 1, NULL, NULL, 1, '2022-07-12 00:35:04', NULL, 1, 'duongtest5@gmail.com', NULL, NULL),
(4, 'duong test 6', '$2y$10$ti3mDKaWx1Bc1lWMVjR0n.pj0ryw56Zptwz8phSD646Ak8Rt5VCoC', 'yen lang, hn', '2000-08-22', '0934565787', 1, NULL, NULL, 1, '2022-07-12 00:56:11', NULL, 1, 'duongtest6@gmail.com', NULL, NULL),
(5, 'duong dep zai', '$2y$10$RwDl2GP7bl9CI6f2i70ZPe5uC0RFL0B0mLWRCgjggr.Jvg1PX14Qy', 'viet nam 1', '2000-03-28', '0934565888', 1, NULL, NULL, 1, '2022-07-12 17:58:21', NULL, 1, 'duongltph19040@fpt.edu.vn', '1SN35Z8GL6', NULL),
(6, 'duong test 8', '$2y$10$r3nrJW9.zM3FSHvbUpE4Pu68ydpfBef8dFmCsY2u.XaJGzhfvGxkm', 'yen lang, hn', '2000-08-22', '0934565787', 1, NULL, NULL, 1, '2022-07-15 16:23:17', NULL, 1, 'duongtest8@gmail.com', NULL, NULL),
(7, 'duong test 9', '$2y$10$cJ3IbQLpwbZxnW72DJULS.WioIc6Jm8U.eAUnVfXbaG37Hix5ZbxC', 'yen lang, hn', '2000-08-22', '0934565787', 1, NULL, NULL, 1, '2022-07-15 16:32:42', NULL, 1, 'duongtest9@gmail.com', NULL, 'https://res.cloudinary.com/dlvtzpxce/image/upload/v1657902759/mgjj5dsngk6uw9lbmzp8.png'),
(8, 'duong test 10', '$2y$10$w4u.qBNqdQSX1GgIYKuhK.GuZBnHFnK6h1a3OnZSZE4CJQvsaj03u', 'yen lang, hn', '2000-08-22', '0934565787', 1, NULL, NULL, 1, '2022-07-15 16:33:34', NULL, 1, 'duongtest10@gmail.com', NULL, 'https://res.cloudinary.com/dlvtzpxce/image/upload/v1657902811/wnfwjg8y9gdsockxmtvb.jpg'),
(9, 'duong test 11', '$2y$10$QYpHe0douZQ/HXtkPuLyPOXcbhVSUeUtsZsnnAFM/la6pRNGIu2bm', 'yen lang, hn', '2000-08-22', '0934565787', 1, NULL, NULL, 1, '2022-07-15 16:35:50', NULL, 1, 'duongtest11@gmail.com', NULL, 'https://res.cloudinary.com/dlvtzpxce/image/upload/v1657902947/avatar/mtmt3hgi1aw628hbljv0.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_CART_USER` (`id_user`),
  ADD KEY `FK_CART_IS_DELETE` (`is_delete`),
  ADD KEY `FK_CART_PRODUCT` (`id_product`),
  ADD KEY `FK_CART_STAUTS_ORDER` (`status_cart_order`),
  ADD KEY `FK_CART_PURCHASE_STATUS` (`purchase_status`),
  ADD KEY `FK_CART_TABLE_BOOK` (`id_table_book`);

--
-- Indexes for table `code_sale`
--
ALTER TABLE `code_sale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_PRODUCT_COMMENTS` (`id_product`),
  ADD KEY `FK_USER_COMMENTS` (`id_user`),
  ADD KEY `FK_STATUS_DELETE_COMMENT` (`is_delete`);

--
-- Indexes for table `detail_invoice`
--
ALTER TABLE `detail_invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ENVOICE_ID_USER` (`id_user`),
  ADD KEY `FK_ENVOICE_IS_DELETE` (`is_delete`),
  ADD KEY `FK_ENVOICE_ID_ENVOICES` (`id_envoices`);

--
-- Indexes for table `directory`
--
ALTER TABLE `directory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emotions`
--
ALTER TABLE `emotions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_EMTIONS` (`value`),
  ADD KEY `FK_EMTIONS_USER` (`id_user`),
  ADD KEY `FK_EMTIONS_PRODUCT` (`id_product`),
  ADD KEY `FK_EMOTIONS_STATUS_DELETE` (`is_delete`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images_product`
--
ALTER TABLE `images_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_IMAGES_USER` (`id_user`),
  ADD KEY `FK_IMAGES_STATUS_DELETE` (`is_delete`),
  ADD KEY `FK_IMG_PRODUCT` (`id_product_img`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ENVOICES_ID_USER` (`id_user`),
  ADD KEY `FK_ENVOICES_ID_STAFF` (`id_staff`),
  ADD KEY `FK_ENVOICES_IS_DELETE` (`is_delete`),
  ADD KEY `FK_ENVOICES_STATUS_CART_ORDER` (`status_cart_order`),
  ADD KEY `FK_ENVOICES_STATUS_ENVOICE` (`status_envoice`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_USER` (`id_user`),
  ADD KEY `FK_STATUS_DELETE` (`is_delete`),
  ADD KEY `FK_STATUS_PRODUCT` (`is_status_product`),
  ADD KEY `FK_PRODUCT_CODE_SALE` (`id_code_sale`),
  ADD KEY `FK_IMG_PRODUCT` (`id_img`),
  ADD KEY `FK_PRODUCT_DIRECTORY` (`id_directory`);

--
-- Indexes for table `purchase_status`
--
ALTER TABLE `purchase_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_RATE_PRODUCT` (`id_product`),
  ADD KEY `FK_RATE_USER` (`id_user`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_book_table`
--
ALTER TABLE `status_book_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_delete`
--
ALTER TABLE `status_delete`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_envoice`
--
ALTER TABLE `status_envoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_order_cart`
--
ALTER TABLE `status_order_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_product`
--
ALTER TABLE `status_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_table`
--
ALTER TABLE `status_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_TABLES_USER` (`id_user`),
  ADD KEY `FK_TABLES_IS_DELETE` (`is_delete`),
  ADD KEY `FK_TABLES_STATUS_TABLE` (`status`);

--
-- Indexes for table `table_book`
--
ALTER TABLE `table_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_TABLE_BOOK_STATUS_BOOK` (`status_book`),
  ADD KEY `FK_TABLE_BOOK_IS_DELETE` (`is_delete`),
  ADD KEY `FK_TABLE_BOOK_ID_TABLE` (`id_table`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Gender` (`gioi_tinh`),
  ADD KEY `FK_Role` (`vai_tro`),
  ADD KEY `FK_STATUS_DELETE_USER_1` (`is_delete`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `code_sale`
--
ALTER TABLE `code_sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detail_invoice`
--
ALTER TABLE `detail_invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `directory`
--
ALTER TABLE `directory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `emotions`
--
ALTER TABLE `emotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `images_product`
--
ALTER TABLE `images_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `purchase_status`
--
ALTER TABLE `purchase_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rates`
--
ALTER TABLE `rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status_book_table`
--
ALTER TABLE `status_book_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `status_envoice`
--
ALTER TABLE `status_envoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `status_order_cart`
--
ALTER TABLE `status_order_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `status_table`
--
ALTER TABLE `status_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `table_book`
--
ALTER TABLE `table_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_CART_IS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_CART_PRODUCT` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_CART_PURCHASE_STATUS` FOREIGN KEY (`purchase_status`) REFERENCES `purchase_status` (`id`),
  ADD CONSTRAINT `FK_CART_STAUTS_ORDER` FOREIGN KEY (`status_cart_order`) REFERENCES `status_order_cart` (`id`),
  ADD CONSTRAINT `FK_CART_TABLE_BOOK` FOREIGN KEY (`id_table_book`) REFERENCES `tables` (`id`),
  ADD CONSTRAINT `FK_CART_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_PRODUCT_COMMENTS` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_STATUS_DELETE_COMMENT` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_USER_COMMENTS` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `detail_invoice`
--
ALTER TABLE `detail_invoice`
  ADD CONSTRAINT `FK_ENVOICE_ID_ENVOICES` FOREIGN KEY (`id_envoices`) REFERENCES `invoices` (`id`),
  ADD CONSTRAINT `FK_ENVOICE_ID_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FK_ENVOICE_IS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`);

--
-- Constraints for table `emotions`
--
ALTER TABLE `emotions`
  ADD CONSTRAINT `FK_EMOTIONS_STATUS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_EMTIONS` FOREIGN KEY (`value`) REFERENCES `emotions` (`id`),
  ADD CONSTRAINT `FK_EMTIONS_PRODUCT` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_EMTIONS_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `images_product`
--
ALTER TABLE `images_product`
  ADD CONSTRAINT `FK_IMAGES_STATUS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_IMAGES_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `FK_ENVOICES_ID_STAFF` FOREIGN KEY (`id_staff`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FK_ENVOICES_ID_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FK_ENVOICES_IS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_ENVOICES_STATUS_CART_ORDER` FOREIGN KEY (`status_cart_order`) REFERENCES `cart` (`status_cart_order`),
  ADD CONSTRAINT `FK_ENVOICES_STATUS_ENVOICE` FOREIGN KEY (`status_envoice`) REFERENCES `status_envoice` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_IMG_PRODUCT` FOREIGN KEY (`id_img`) REFERENCES `images_product` (`id_product_img`),
  ADD CONSTRAINT `FK_PRODUCT_CODE_SALE` FOREIGN KEY (`id_code_sale`) REFERENCES `code_sale` (`id`),
  ADD CONSTRAINT `FK_PRODUCT_DIRECTORY` FOREIGN KEY (`id_directory`) REFERENCES `directory` (`id`),
  ADD CONSTRAINT `FK_STATUS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_STATUS_PRODUCT` FOREIGN KEY (`is_status_product`) REFERENCES `status_product` (`id`),
  ADD CONSTRAINT `FK_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `rates`
--
ALTER TABLE `rates`
  ADD CONSTRAINT `FK_RATE_PRODUCT` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_RATE_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `tables`
--
ALTER TABLE `tables`
  ADD CONSTRAINT `FK_TABLES_IS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_TABLES_STATUS_TABLE` FOREIGN KEY (`status`) REFERENCES `status_table` (`id`),
  ADD CONSTRAINT `FK_TABLES_USER` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `table_book`
--
ALTER TABLE `table_book`
  ADD CONSTRAINT `FK_TABLE_BOOK_ID_TABLE` FOREIGN KEY (`id_table`) REFERENCES `tables` (`id`),
  ADD CONSTRAINT `FK_TABLE_BOOK_IS_DELETE` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`),
  ADD CONSTRAINT `FK_TABLE_BOOK_STATUS_BOOK` FOREIGN KEY (`status_book`) REFERENCES `status_book_table` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_Gender` FOREIGN KEY (`gioi_tinh`) REFERENCES `gender` (`id`),
  ADD CONSTRAINT `FK_Role` FOREIGN KEY (`vai_tro`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FK_STATUS_DELETE_USER_1` FOREIGN KEY (`is_delete`) REFERENCES `status_delete` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
