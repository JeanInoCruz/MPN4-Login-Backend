-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2024 a las 05:12:06
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `authentication`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `bio`, `phone`, `photo`, `created_at`) VALUES
(4, 'prueba1@gmail.com', '$2b$10$U4RNNQ54FZxvZQfck2lQL.piEXnss/Z/KYWNxk0V6MMgS8TZ1SRVi', 'Jhon Doe', 'Architect', NULL, NULL, '2024-05-27 08:31:19'),
(5, 'prueba2@gmail.com', '$2b$10$s7wOZO8QHYYYLWaXSGwhguEfLjD0jkDumfVawUtDYcOnY1Xk.Z6WG', 'Mario Casas', 'Actor', NULL, NULL, '2024-05-27 08:32:32'),
(6, 'prueba3@gmail.com', '$2b$10$LFoFm5Ykczx0B7a5/2RYYOhLravai7cng6kKyiQwh6elq6GP932Ay', 'Sabrina Doll', 'Glad to meet you!', NULL, NULL, '2024-05-27 08:35:12'),
(10, 'prueba11@gmail.com', '$2b$10$6OsqDBdZsz5nq.CpsZB0ner4vOPNu8V8oWP4kBD1HI.HZOCT2OBiy', 'Melissa Diaz', 'Hola!', NULL, NULL, '2024-05-27 08:49:48'),
(11, 'test1@test.com', '$2b$10$TxMwyh3Ao5HgJWEe12xfYeBR1xODRGJY3UcAIO546YUQBLhyH9XC6', 'Eduardo Santoro', 'Doble ', '21315465487', 'uploads/photo-1716865230240-187236714.jpeg', '2024-05-27 08:50:18'),
(12, 'test2@test.com', '$2b$10$rg6QCrnTbUui2E5BIX9Czu/.PSE6mhcbOL5SbuBhi58rd.djPde4m', 'Phillip Teo', 'Teacher', NULL, NULL, '2024-05-27 14:21:55'),
(13, 'test3@test.com', '$2b$10$l2MVtQdkq5eusTKZpSUqy.sgsypsr8rgJ15ECxhT8cG7C.D4QzirO', 'Candace Durmond', 'Flowers and powers!', NULL, NULL, '2024-05-27 14:30:51'),
(22, 'test111@test.com', '$2b$10$f8nSxAM.djTSEg1O6e9uDeczfTZE6ScUuQXCwOWzz4at4nKlllYMW', 'John Doe', 'Cat Lover!', '959998877', 'uploads/1716858429101-aesthetic-wallpaper-1-1250x834.jpg', '2024-05-27 14:46:09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
