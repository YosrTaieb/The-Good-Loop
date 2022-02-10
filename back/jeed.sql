-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 31 jan. 2022 à 11:42
-- Version du serveur :  8.0.27-0ubuntu0.20.04.1
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jeed`
--

-- --------------------------------------------------------

--
-- Structure de la table `brand`
--

CREATE TABLE `brand` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `link` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `brand`
--

INSERT INTO `brand` (`id`, `name`, `slug`, `logo`, `image`, `description`, `link`, `price`, `archived`) VALUES
(1, 'LOOM', 'loom', 'https://cdn.shopify.com/s/files/1/1355/7899/files/logo_site_100x.png', 'https://cdn.shopify.com/s/files/1/1355/7899/files/homepage_1_800x.jpg', 'Les vêtements fabriqués à l’autre bout du monde et qui se déforment après quelques semaines, c’est pas trop notre truc. Notre mission : créer des vêtements durables, qui tiennent plus longtemps et qui abîment moins l’environnement.', 'https://www.loom.fr/', 3, 0),
(2, 'montlimart', 'montlimart', 'https://www.montlimart.com/skin/frontend/montlimart/default/img/refonte/logo.png', 'https://www.montlimart.com/media/catalog/product/cache/1/thumbnail/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-pull-homme-origine-recycl_-made-in-france-beige-1.jpg', 'L’ensemble des vêtements, chaussures et accessoires sont fabriqués à moins de 2000kms, avec une large sélection de made in France. La préservation des savoir-faire régionaux et français nous tient à cœur. ', 'https://www.montlimart.com/', 3, 1),
(3, 'Mood Paris', 'mood-paris', 'https://cdn.shopify.com/s/files/1/0272/3499/2181/files/MoodParis-Logo-Noir-min_500x.png', 'https://cdn.shopify.com/s/files/1/0272/3499/2181/products/IMG_1890_2048x.jpg', 'Mood Paris, c\'est aussi l\'histoire de Eugénie et Marjorie, qui répondent aussi aux noms de Maurice et Maurice, deux copines inséparables depuis près de 10 ans.\r\n-\r\nElles ne se sont jamais vraiment identifiées à une marque de lingerie et ont toujours rencontré des problèmes au moment du choix de la taille de leur soutif. Mais l\'aventure Mood Paris commence réellement en 2018, lorsqu\'elles apprennent que le système de tailles des bonnets des soutiens-gorge (qu\'elles n\'avaient jamais vraiment compris) a été inventé il y a plus de 100 ans et n\'a jamais évolué depuis. En plus d\'être un secteur polluant, la lingerie est aussi complexante et obsolète.', 'https://moodparis.com/collections/all', 3, 1),
(4, 'perpete', 'perpete', 'https://cdn.shopify.com/s/files/1/0102/0054/7379/t/34/assets/logo-black.svg?v=8144035359757895524', 'https://cdn.shopify.com/s/files/1/0102/0054/7379/products/PERPETE-EXTRAORDINAIRE-MARCEL-collab-sweat-enfant-mixte-bleu-porte-par-Marcel-coton-bio-Juliette-Denis_2048x.jpg?v=1618952137', 'Décollage pour Perpète ! Parce que les kids grandissent à toute vitesse, Parce que leurs vêtements ont une durée de vie ultra limitée, Parce que ce renouvellement incessant coûte cher(pour notre porte monnaie mais aussi pour la planète), Notre réponse c’est Perpète', 'https://www.perpete.co/collections/frontpage', 2, 1),
(5, 'SKFK', 'skfk', 'https://www.bilbaobizkaiacard.com/wp-content/uploads/SKFK_logo.png', 'https://www.skunkfunk.com/cdnassets/images/Brand/SKFK_SS19_brand_img.jpg', 'Notre message est clair : habillez-vous comme vous êtes, selon votre mode de vie et votre ressenti. Affirmez votre identité, exprimez votre essence et prenez soin de votre environnement. Nous prenons activement part au changement que nous souhaitons et vous encourageons à consommer d’une manière réfléchie et responsable. Nos designs sont uniques, inspirés de l’art et de la culture. Nous créons des vêtements pour des femmes au style intemporel, fonctionnels et confortables.', 'https://www.skfk-ethical-fashion.com/fr/ah-21', 3, 1),
(6, 'Carbone 14', 'carbone-14', 'https://static.wixstatic.com/media/cfc47a_506cff27456a49289115be593046c5e6~mv2.png/v1/fill-w_180,h_56,al_c,q_85,usm_0.66_1.00_0.01/LOGO.webp', 'https://static.wixstatic.com/media/cfc47a_d888a676606b4393828b14fe61f4874e~mv2.jpeg/v1/fill/w_295,h_440,al_c,q_80,usm_0.66_1.00_0.01/uilWf.webp', 'Du plus loin que je me souvienne, les tissus et les vêtements m’ont toujours intéressée. Ce que j\'aime par dessus tout c\'est étudier et travailler le tissu pour qu\'une fois porté, le vêtement soit le reflet de la personnalité de chacun. Les révolutions de la mode guident celles de l’Homme, et celle que nous vivons redouble de créativité pour limiter son impact sur l’environnement.', 'https://fr.carbone14-paris.com/shop', 2, 1),
(7, 'Ankore', 'ankore', 'https://cdn.shopify.com/s/files/1/0459/8539/8939/files/Ecriture_noire_684bc63b-e2fa-4775-a6b0-a3fa1bc09b19_200x.png?v=1616428596', 'https://cdn.shopify.com/s/files/1/0459/8539/8939/files/veste-travail-durable-made-in-france-ethique_540x.jpg?v=1633976711', 'NOUS SOMMES DES AMOUREUX DE LA NATURE. Nous avons grandi en Bretagne au bord de l\'océan. Au sud de la Bretagne, dans le Morbihan plus précisément. Pour nous, c\'est le meilleur des endroits pour y passer son enfance, découvrir la nature, apprendre la culture foisonnante de cette région et se faire des amitiés d\'une vie avec des personnes parmi les plus accueillantes au monde.\r\nDe ce fait, nous sommes intimement liés à l\'océan. Impossible de passer trop de temps sans le voir, sentir ses embruns, aller nager ou surfer pour se sentir plus vivants que jamais. C\'est une partie de nous-même et nous ne pourrons jamais rester trop éloigné de lui, comme un être cher, comme une partie de soi.', 'https://ankore.co/', 2, 1),
(8, 'Amelie Pichard', 'amelie-pichard', 'https://cdnassets.ameliepichard.com/wp-content/themes/pichard/assets/img/ameliepichard-logo.svg', 'https://cdnassets.ameliepichard.com/wp-content/uploads/2020/07/statement0-full.jpg', 'Qu’est-ce qui gagne à grandir hormis un penis?*\r\n\r\nJ’ai créé cette image utopique parce que je voulais attirer votre attention sur notre obsession de la croissance économique et du développement.\r\n\r\nDans la société actuelle, les nouvelles entreprises qui deviennent rapidement grandes et rentables sont applaudies, quel que soit le coût humain et environnemental.\r\n\r\nLes petites entreprises qui ne veulent pas se développer trop vite sont jugées de «pas assez ambitieuses».\r\nJe veux parler au nom des petites entreprises qui ne prennent jamais le chemin le plus facile. Des marques indépendantes qui souhaitent construire une entreprise durable en adéquation avec des valeurs humaines, plutôt que de rentabilité à court terme. Notre choix de ne pas viser une croissance rapide n’est pas dû à un manque d’ambition, mais c’est une décision consciente. Nous voulons trouver un moyen de rester humble et agile, adopter des pratiques qui minimisent notre empreinte environnementale tout en maximisant notre impact social. Nous voulons être en mesure de prendre le temps de réfléchir, de créer et de nous engager au lieu de nous concentrer sur la réalisation de bénéfices en toute simplicité. Aujourd’hui, une croissance durable est quasiment impossible à réaliser pour les jeunes entreprises. La croissance économique insatiable et irresponsable est vulgaire.', 'https://ameliepichard.com/fr/', 3, 1),
(9, 'Stella McCartney', 'stella-mccartney', 'https://www.stellamccartney.com/on/demandware.static/Sites-smc-row-Site/-/default/dw433dc9c3/images/logo.svg', 'https://www.stellamccartney.com/dw/image/v2/BCWD_PRD/on/demandware.static/-/Library-Sites-StellaMcCartneySharedLibrary/default/dwee128173/images/SW/GETBACK/update/Featured_Article-3024x1065-04.jpg?sw=1620&sh=571', 'Lorsque j’ai imaginé l’abécédaire McCartney : collection Printemps 2021, je me suis inspirée de la femme Stella, celle d’hier, d’aujourd’hui et de demain. C’est un condensé de notre philosophie et de nos ambitions, affirmant notre marque à travers la mode tout en remettant toujours en question ce que nous faisons. Nous avons réinvesti des moments emblématiques de Stella et fait évoluer l’aisance naturelle et la féminité progressiste qui sont devenues nos signatures', 'https://www.stellamccartney.com/fr/fr/', 3, 1),
(10, 'Minuit sur terre', 'minuit-sur-terre', 'https://minuitsurterre.com/wp-content/uploads/2021/11/logo-blanc.png', 'https://minuitsurterre.com/wp-content/uploads/2021/08/MinuitSurTerre_2021_Automne_Site_Boutique-159.jpg', 'L’ÉTHIQUE AVEC AUDACE\r\nMatières, fabrication, coûts… Découvrez l’envers du décor dans la transparence la plus totale.\r\n\r\nDepuis la création de Minuit Sur Terre en 2017, l’éthique a toujours été la valeur qui nous anime au quotidien. Nous avons à cœur de proposer des pièces (chaussures, maroquinerie) fabriquées sans matières animales avec l’impact environnemental le plus faible possible, sans concession ni sur le style, ni sur la qualité.\r\n\r\nNés à la suite d’une frustration – celle de ne pas trouver de chaussures qui concilient mode et éthique – nous renouvelons saison après saison nos collections avec toujours la même ambition : proposer des créations modernes, désirables, et fabriquées dans le respect des animaux, des hommes et des femmes, et de la Terre.', 'https://minuitsurterre.com/', 2, 1),
(11, 'Faguo', 'faguo', 'https://www.faguo-store.com/img/cms/faguo-logo_horizontal-1.svg', 'https://www.faguo-store.com/img/resp/cms/image-1-335x335-c.png', 'Pionnière depuis 2009, FAGUO incarne la Fair Fashion en ne faisant pas de compromis entre sa Direction Artistique et sa Mission. \r\nLe constat est simple : au 21e siècle, personne ne veut vivre nu. À côté de ça, chaque vêtement que l\'on créé a un impact sur notre planète. Nous continuerons donc de nous habiller mais devons tout entreprendre pour mieux le faire, et plus raisonnablement.\r\n\r\nEn tant qu\'entreprise à mission et membre B Corp™, FAGUO engage sa génération contre le dérèglement climatique et habille ceux qui veulent vivre en ville comme en pleine forêt.\r\n\r\nL\'objectif n\'est pas d\'être les meilleurs du monde, mais meilleur pour le monde en s\'améliorant constamment. Cette route est infinie. \r\n\r\n5 engagements au service de notre mission.', 'https://www.faguo-store.com/fr/280-grand-froid', 3, 1),
(12, 'GreenLion', 'greenlion', 'https://423841.smushcdn.com/1280429/wp-content/uploads/2019/12/Logo-GreenLion-400px.png?lossy=0&strip=1&webp=1', 'https://423841.smushcdn.com/1280429/wp-content/uploads/2019/05/le-lion-green-lion.jpg?size=1140x912&lossy=0&strip=1&webp=1', 'Green Lion, un Lion végétarien\r\nCette idée originale et décalée nous a inspirés les fondamentaux de notre marque : puissance et respect.\r\n\r\nNotre désir est d’apporter une mode positive et responsable avec un design épuré.\r\n\r\nNotre objectif est de rassembler autour de Green Lion une communauté engagée de consom’ACTEURS de mode, qui soutient la transparence, les comportements éthiques et la protection de l’Environnement.\r\n\r\nLe respect de l’Environnement est au centre de nos préoccupations, ainsi nous n’utilisons que des matières premières biologiques, naturelles, ou recyclées.\r\n\r\nMinimaliste et intemporelle, notre marque  conçoit éthiquement des produits raffinés et durables avec des lignes originales', 'https://greenlion.earth/boutique/', 2, 1),
(13, 'The wise trail running', 'the-wise-trail-running', 'https://cdn.shopify.com/s/files/1/0266/5526/0732/files/WISE_-logo_140x_2x_c3ca9a22-06a2-4fd7-add0-a447e9ca3d8b_150x.png?v=1619019437', 'https://cdn.shopify.com/s/files/1/0266/5526/0732/products/BD20210221471_1080x.jpg?v=1620073668', 'Nous sommes Axelle & Guillaume, deux amoureux de trail running ! On s\'est d\'ailleurs rencontré sur les sentiers...\r\n\r\nEn 2019, nous avons pris conscience que nous n\'étions pas d\'accord avec ce qui était écrit sur les étiquettes de nos vêtements. Et il n\'était pas possible de trouver une tenue de trail à la fois technique et éco-responsable.\r\n\r\nNous avons donc tout plaqué pour créer la tenue de nos rêve. Celle qui parcourt plus de km sur nos épaules que dans un bateau !', 'https://www.wisetrailrunning.com/collections/femme', 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `brand_fabrication`
--

CREATE TABLE `brand_fabrication` (
  `id` int NOT NULL,
  `fabrication_id` int NOT NULL,
  `brand_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `brand_fabrication`
--

INSERT INTO `brand_fabrication` (`id`, `fabrication_id`, `brand_id`) VALUES
(2, 3, 1),
(3, 2, 2),
(4, 3, 3),
(5, 1, 4),
(6, 2, 5),
(7, 3, 6);

-- --------------------------------------------------------

--
-- Structure de la table `brand_location`
--

CREATE TABLE `brand_location` (
  `id` int NOT NULL,
  `location_id` int NOT NULL,
  `brand_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `brand_location`
--

INSERT INTO `brand_location` (`id`, `location_id`, `brand_id`) VALUES
(1, 2, 3),
(2, 3, 1),
(3, 1, 2),
(4, 1, 4),
(5, 2, 5),
(6, 3, 6);

-- --------------------------------------------------------

--
-- Structure de la table `brand_materiau`
--

CREATE TABLE `brand_materiau` (
  `id` int NOT NULL,
  `materiau_id` int NOT NULL,
  `brand_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `brand_materiau`
--

INSERT INTO `brand_materiau` (`id`, `materiau_id`, `brand_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 6, 1),
(4, 1, 2),
(5, 2, 2),
(6, 3, 2),
(7, 4, 3),
(8, 5, 4),
(9, 6, 5),
(10, 7, 6),
(11, 8, 7),
(12, 9, 8),
(13, 8, 9),
(14, 7, 10),
(15, 6, 11),
(16, 5, 12),
(17, 4, 12),
(18, 3, 13),
(19, 9, 13);

-- --------------------------------------------------------

--
-- Structure de la table `brand_morpho`
--

CREATE TABLE `brand_morpho` (
  `id` int NOT NULL,
  `morpho_id` int NOT NULL,
  `brand_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `brand_morpho`
--

INSERT INTO `brand_morpho` (`id`, `morpho_id`, `brand_id`) VALUES
(1, 2, 1),
(2, 3, 1),
(4, 3, 2),
(6, 2, 3),
(11, 2, 4),
(12, 3, 4),
(13, 6, 4),
(14, 2, 5),
(15, 6, 5),
(16, 2, 6),
(17, 3, 6),
(18, 4, 6),
(19, 3, 7),
(20, 5, 7),
(21, 6, 7),
(22, 1, 8),
(23, 6, 8),
(24, 2, 9),
(25, 4, 9),
(27, 3, 10),
(28, 5, 10),
(29, 1, 11),
(30, 4, 11),
(31, 2, 12),
(32, 3, 12),
(33, 1, 13);

-- --------------------------------------------------------

--
-- Structure de la table `brand_quality`
--

CREATE TABLE `brand_quality` (
  `id` int NOT NULL,
  `quality_id` int NOT NULL,
  `brand_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `brand_quality`
--

INSERT INTO `brand_quality` (`id`, `quality_id`, `brand_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 1, 2),
(6, 2, 2),
(7, 5, 2),
(8, 1, 3),
(9, 2, 3),
(10, 3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `brand_weartype`
--

CREATE TABLE `brand_weartype` (
  `id` int NOT NULL,
  `weartype_id` int NOT NULL,
  `brand_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `brand_weartype`
--

INSERT INTO `brand_weartype` (`id`, `weartype_id`, `brand_id`) VALUES
(1, 1, 1),
(2, 3, 1),
(3, 13, 1),
(4, 15, 1),
(5, 8, 1),
(6, 14, 1),
(7, 19, 1),
(8, 12, 1),
(9, 10, 1),
(10, 2, 1),
(11, 11, 1),
(12, 17, 1),
(13, 1, 2),
(14, 3, 2),
(15, 13, 2),
(16, 4, 2),
(17, 20, 2),
(18, 8, 2),
(19, 16, 2),
(20, 7, 2),
(21, 2, 2),
(22, 11, 2),
(23, 17, 2),
(24, 1, 3),
(25, 3, 3),
(26, 13, 3),
(27, 15, 3),
(28, 8, 3),
(29, 7, 3),
(30, 2, 3),
(31, 17, 3),
(32, 1, 4),
(33, 3, 4),
(34, 13, 4),
(35, 4, 4),
(36, 20, 4),
(37, 8, 4),
(38, 16, 4),
(39, 7, 4),
(40, 4, 4),
(41, 11, 4),
(42, 17, 4),
(43, 1, 5),
(44, 5, 5),
(45, 15, 5),
(46, 6, 5),
(47, 8, 5),
(48, 7, 5),
(49, 2, 5),
(50, 4, 5),
(51, 12, 5),
(52, 1, 6),
(53, 2, 6),
(54, 17, 6),
(55, 7, 6),
(57, 9, 6),
(58, 15, 6),
(59, 4, 6),
(60, 12, 6),
(61, 5, 7),
(62, 1, 7),
(63, 9, 7),
(64, 12, 7),
(65, 16, 7),
(66, 13, 7),
(67, 5, 8),
(68, 1, 8),
(69, 9, 8),
(70, 12, 8),
(71, 16, 8),
(72, 13, 8),
(73, 5, 9),
(74, 20, 9),
(75, 12, 9),
(76, 1, 9),
(77, 11, 9),
(78, 16, 9),
(79, 16, 10),
(80, 3, 10),
(81, 5, 10),
(82, 12, 10),
(83, 10, 10),
(84, 13, 11),
(86, 8, 11),
(87, 5, 11),
(88, 1, 12),
(89, 12, 12),
(90, 9, 12),
(91, 4, 12),
(92, 16, 12),
(93, 4, 13),
(94, 20, 13),
(95, 12, 13),
(96, 16, 13);

-- --------------------------------------------------------

--
-- Structure de la table `criteria`
--

CREATE TABLE `criteria` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `criteria`
--

INSERT INTO `criteria` (`id`, `name`) VALUES
(1, 'environnement'),
(2, 'humain'),
(3, 'animal');

-- --------------------------------------------------------

--
-- Structure de la table `criteria_rate`
--

CREATE TABLE `criteria_rate` (
  `id` int NOT NULL,
  `rate_id` int NOT NULL,
  `criteria_id` int NOT NULL,
  `brand_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `criteria_rate`
--

INSERT INTO `criteria_rate` (`id`, `rate_id`, `criteria_id`, `brand_id`) VALUES
(1, 5, 1, 1),
(2, 5, 2, 1),
(3, 3, 3, 1),
(4, 2, 1, 2),
(5, 5, 2, 2),
(6, 5, 3, 2),
(7, 3, 1, 3),
(8, 5, 2, 3),
(9, 2, 3, 3),
(10, 5, 1, 4),
(11, 4, 2, 4),
(12, 4, 3, 4),
(13, 4, 1, 5),
(14, 4, 2, 5),
(15, 4, 3, 5),
(16, 2, 1, 6),
(17, 4, 2, 6),
(18, 3, 3, 6),
(19, 4, 1, 7),
(20, 5, 2, 7),
(21, 2, 3, 7),
(22, 3, 1, 8),
(23, 3, 2, 8),
(24, 3, 3, 8),
(25, 5, 1, 9),
(26, 2, 2, 9),
(27, 5, 3, 9),
(28, 2, 1, 10),
(29, 5, 2, 10),
(30, 5, 3, 10),
(31, 1, 1, 11),
(32, 4, 2, 11),
(33, 5, 3, 11),
(34, 3, 1, 12),
(35, 5, 2, 12),
(36, 4, 3, 12),
(37, 5, 1, 13),
(38, 4, 2, 13),
(39, 5, 3, 13);

-- --------------------------------------------------------

--
-- Structure de la table `fabrication`
--

CREATE TABLE `fabrication` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `fabrication`
--

INSERT INTO `fabrication` (`id`, `name`) VALUES
(1, 'local'),
(2, 'france'),
(3, 'europe'),
(4, 'monde');

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

CREATE TABLE `location` (
  `id` int NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `location`
--

INSERT INTO `location` (`id`, `city`, `country`) VALUES
(1, 'Bruxelles', 'Belgique'),
(2, 'Paris', 'France'),
(3, 'Lille', 'France');

-- --------------------------------------------------------

--
-- Structure de la table `materiau`
--

CREATE TABLE `materiau` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `materiau`
--

INSERT INTO `materiau` (`id`, `name`) VALUES
(1, 'coton bio'),
(2, 'lin'),
(3, 'cuir'),
(4, 'cuir vegetal'),
(5, 'cuir tannage vegetal'),
(6, 'laine'),
(7, 'chanvre'),
(8, 'viscose lenzing™ ecovero™'),
(9, 'tencel lyocell');

-- --------------------------------------------------------

--
-- Structure de la table `morpho`
--

CREATE TABLE `morpho` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `morpho`
--

INSERT INTO `morpho` (`id`, `name`) VALUES
(1, 'unisex'),
(2, 'homme'),
(3, 'femme'),
(4, 'enfant'),
(5, 'maternité'),
(6, 'plus size');

-- --------------------------------------------------------

--
-- Structure de la table `quality`
--

CREATE TABLE `quality` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `quality`
--

INSERT INTO `quality` (`id`, `name`) VALUES
(1, 'vegan'),
(2, 'local'),
(3, 'bio'),
(4, 'upcycles'),
(5, 'recycle'),
(6, 'equitable'),
(7, 'certification - label'),
(8, 'inclusivite');

-- --------------------------------------------------------

--
-- Structure de la table `rate`
--

CREATE TABLE `rate` (
  `id` int NOT NULL,
  `number` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `rate`
--

INSERT INTO `rate` (`id`, `number`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `password`, `is_admin`) VALUES
(3, NULL, NULL, 'ju@basss.com', '$2b$10$ea9ilm1HUNohJ5xui.VPeeS8vgFy/kkbQBHnySC73rDT/0.gS.4Hq', 1);

-- --------------------------------------------------------

--
-- Structure de la table `weartype`
--

CREATE TABLE `weartype` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `weartype`
--

INSERT INTO `weartype` (`id`, `name`, `slug`, `image`) VALUES
(1, 't-shirts', 't-shirts', 'http://localhost:3000/assets/images/weartypes/Tshirt.png'),
(2, 'chaussures', 'chaussures', 'http://localhost:3000/assets/images/weartypes/chaussures.png'),
(3, 'pulls', 'pulls', 'http://localhost:3000/assets/images/weartypes/pull.png'),
(4, 'robe', 'robe', 'http://localhost:3000/assets/images/weartypes/robe.png'),
(5, 'accessoires', 'accessoires', 'http://localhost:3000/assets/images/weartypes/accessoires.png'),
(6, 'bijoux', 'bijoux', 'http://localhost:3000/assets/images/weartypes/bijoux.png'),
(7, 'veste et manteau', 'veste_manteau', 'http://localhost:3000/assets/images/weartypes/veste.png'),
(8, 'jean', 'jean', 'http://localhost:3000/assets/images/weartypes/jeans.png'),
(9, 'tenue de sport', 'tenue-de-sport', 'http://localhost:3000/assets/images/weartypes/tenue-de-sport.png'),
(10, 'sous-vêtement', 'sous-vêtement', 'http://localhost:3000/assets/images/weartypes/sous-vetements.png'),
(11, 'sac', 'sac', 'http://localhost:3000/assets/images/weartypes/sacs.png'),
(12, 'maillot de bain', 'maillot-de-bain', 'http://localhost:3000/assets/images/weartypes/maillots-de-bain.png'),
(13, 'chemise', 'chemise', 'http://localhost:3000/assets/images/weartypes/chemises.png'),
(14, 'jogging', 'jogging', 'http://localhost:3000/assets/images/weartypes/joggings.png'),
(15, 'polo', 'polo', 'http://localhost:3000/assets/images/weartypes/polos.png'),
(16, 'jupe', 'jupe', 'http://localhost:3000/assets/images/weartypes/jupes.png'),
(17, 'autres accessoires', 'autres-accessoires', 'http://localhost:3000/assets/images/weartypes/accessoires.png'),
(19, 'short', 'short', 'http://localhost:3000/assets/images/weartypes/shorts.png'),
(20, 'combinaison', 'combinaison', 'http://localhost:3000/assets/images/weartypes/combinaisons.png'),
(21, 'pantalon', 'pantalon', 'http://localhost:3000/assets/images/weartypes/pantalons-chinos.png'),
(22, 'pyjama', 'pyjama', 'http://localhost:3000/assets/images/weartypes/pyjamas.png'),
(23, 'sweat', 'sweat', 'http://localhost:3000/assets/images/weartypes/sweats.png');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `brand_fabrication`
--
ALTER TABLE `brand_fabrication`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_brand_TO_brand_fabrication_idx` (`brand_id`),
  ADD KEY `fk_fabrication_TO_brand_fabrication_idx` (`fabrication_id`);

--
-- Index pour la table `brand_location`
--
ALTER TABLE `brand_location`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_location_TO_brand_location` (`location_id`),
  ADD KEY `FK_brand_TO_brand_location` (`brand_id`);

--
-- Index pour la table `brand_materiau`
--
ALTER TABLE `brand_materiau`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_brand_TO_brand_materiau_idx` (`brand_id`),
  ADD KEY `fk_materiau_TO_brand_materiau_idx` (`materiau_id`);

--
-- Index pour la table `brand_morpho`
--
ALTER TABLE `brand_morpho`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_morpho_TO_brand_morpho` (`morpho_id`),
  ADD KEY `FK_brand_TO_brand_morpho` (`brand_id`);

--
-- Index pour la table `brand_quality`
--
ALTER TABLE `brand_quality`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_quality_TO_brand_quality` (`quality_id`),
  ADD KEY `FK_brand_TO_brand_quality` (`brand_id`);

--
-- Index pour la table `brand_weartype`
--
ALTER TABLE `brand_weartype`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_weartype_TO_brand_weartype` (`weartype_id`),
  ADD KEY `FK_brand_TO_brand_weartype` (`brand_id`);

--
-- Index pour la table `criteria`
--
ALTER TABLE `criteria`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `criteria_rate`
--
ALTER TABLE `criteria_rate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_rate_TO_criteria_rate` (`rate_id`),
  ADD KEY `FK_criteria_TO_criteria_rate` (`criteria_id`),
  ADD KEY `FK_brand_TO_criteria_rate` (`brand_id`);

--
-- Index pour la table `fabrication`
--
ALTER TABLE `fabrication`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `materiau`
--
ALTER TABLE `materiau`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `morpho`
--
ALTER TABLE `morpho`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `quality`
--
ALTER TABLE `quality`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `weartype`
--
ALTER TABLE `weartype`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `brand_fabrication`
--
ALTER TABLE `brand_fabrication`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `brand_location`
--
ALTER TABLE `brand_location`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `brand_materiau`
--
ALTER TABLE `brand_materiau`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `brand_morpho`
--
ALTER TABLE `brand_morpho`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `brand_quality`
--
ALTER TABLE `brand_quality`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `brand_weartype`
--
ALTER TABLE `brand_weartype`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT pour la table `criteria`
--
ALTER TABLE `criteria`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `criteria_rate`
--
ALTER TABLE `criteria_rate`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT pour la table `fabrication`
--
ALTER TABLE `fabrication`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `location`
--
ALTER TABLE `location`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `materiau`
--
ALTER TABLE `materiau`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `morpho`
--
ALTER TABLE `morpho`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `quality`
--
ALTER TABLE `quality`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `weartype`
--
ALTER TABLE `weartype`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `brand_fabrication`
--
ALTER TABLE `brand_fabrication`
  ADD CONSTRAINT `fk_brand_TO_brand_fabrication` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_fabrication_TO_brand_fabrication` FOREIGN KEY (`fabrication_id`) REFERENCES `fabrication` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `brand_location`
--
ALTER TABLE `brand_location`
  ADD CONSTRAINT `FK_brand_TO_brand_location` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_location_TO_brand_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `brand_materiau`
--
ALTER TABLE `brand_materiau`
  ADD CONSTRAINT `fk_brand_TO_brand_materiau` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_materiau_TO_brand_materiau` FOREIGN KEY (`materiau_id`) REFERENCES `materiau` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `brand_morpho`
--
ALTER TABLE `brand_morpho`
  ADD CONSTRAINT `FK_brand_TO_brand_morpho` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_morpho_TO_brand_morpho` FOREIGN KEY (`morpho_id`) REFERENCES `morpho` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `brand_quality`
--
ALTER TABLE `brand_quality`
  ADD CONSTRAINT `FK_brand_TO_brand_quality` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_quality_TO_brand_quality` FOREIGN KEY (`quality_id`) REFERENCES `quality` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `brand_weartype`
--
ALTER TABLE `brand_weartype`
  ADD CONSTRAINT `FK_brand_TO_brand_weartype` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_weartype_TO_brand_weartype` FOREIGN KEY (`weartype_id`) REFERENCES `weartype` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `criteria_rate`
--
ALTER TABLE `criteria_rate`
  ADD CONSTRAINT `FK_brand_TO_criteria_rate` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_criteria_TO_criteria_rate` FOREIGN KEY (`criteria_id`) REFERENCES `criteria` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_rate_TO_criteria_rate` FOREIGN KEY (`rate_id`) REFERENCES `rate` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
