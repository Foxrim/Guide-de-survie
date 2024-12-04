
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

const survivalGuide = [
	{
		id: 1,
		main_cat: "Eau",
		sub_cat: "Stockage_eau",
		nom: "Stockage dans des bidons en plastique alimentaire",
		description:
			"Utiliser des bidons en plastique de qualité alimentaire pour conserver l'eau en toute sécurité pendant de longues périodes.",
		materiel_necessaire:
			"Bidons en plastique alimentaire (10-20 litres), bouchons hermétiques",
		etapes: [
			"1. Nettoyer les bidons avec de l'eau chaude savonneuse, puis rincer soigneusement.",
			"2. Remplir les bidons avec de l'eau potable ou purifiée.",
			"3. Fermer hermétiquement avec un bouchon propre.",
			"4. Stocker dans un endroit frais, sec et à l'abri de la lumière directe.",
		],
		duree: "6 à 12 mois avec de l'eau potable purifiée",
		image: "https://example.com/plastic_jugs.jpg",
	},
	{
		id: 2,
		main_cat: "Eau",
		sub_cat: "Stockage_eau",
		nom: "Stockage dans des contenants en verre",
		description:
			"Les contenants en verre sont idéaux pour stocker de petites quantités d'eau en toute sécurité, à condition qu'ils soient hermétiques.",
		materiel_necessaire: "Bocaux en verre hermétiques, joints en caoutchouc",
		etapes: [
			"1. Nettoyer les bocaux en verre avec de l'eau chaude et du savon.",
			"2. Stériliser les bocaux en les plongeant dans de l'eau bouillante pendant 10 minutes.",
			"3. Remplir les bocaux avec de l'eau potable ou purifiée.",
			"4. Sceller hermétiquement avec des joints en caoutchouc et des couvercles adaptés.",
			"5. Stocker à l'abri de la lumière directe et des températures extrêmes.",
		],
		duree: "6 mois avec un entretien régulier",
		image: "https://example.com/glass_containers.jpg",
	},
	{
		id: 3,
		main_cat: "Eau",
		sub_cat: "Stockage_eau",
		nom: "Stockage dans des citernes souterraines",
		description:
			"Une solution pour stocker de grandes quantités d'eau à long terme, souvent utilisée pour des situations prolongées.",
		materiel_necessaire:
			"Citerne en béton, plastique ou métal, système de filtration",
		etapes: [
			"1. Installer la citerne dans une zone protégée et accessible.",
			"2. Connecter la citerne à un système de collecte d'eau (pluie ou source potable).",
			"3. Ajouter un système de filtration ou de purification en sortie.",
			"4. Vérifier régulièrement l'étanchéité et la qualité de l'eau stockée.",
		],
		duree: "Plusieurs années avec un entretien régulier",
		image: "https://example.com/underground_cistern.jpg",
	},
	{
		id: 4,
		main_cat: "Eau",
		sub_cat: "Stockage_eau",
		nom: "Stockage dans des poches d'eau pliables",
		description: "Idéal pour les déplacements ou pour des besoins d'urgence.",
		materiel_necessaire: "Poches d'eau pliables (2-20 litres)",
		etapes: [
			"1. Déplier et nettoyer la poche d'eau avant le premier usage.",
			"2. Remplir avec de l'eau potable ou purifiée.",
			"3. Fermer hermétiquement avec le bouchon intégré.",
			"4. Stocker dans un sac ou un endroit protégé contre les perforations.",
		],
		duree:
			"1 à 3 mois selon la qualité de la poche et l'environnement de stockage",
		image: "https://example.com/foldable_water_pouch.jpg",
	},
	{
		id: 5,
		main_cat: "Eau",
		sub_cat: "Stockage_eau",
		nom: "Stockage dans des fûts en métal",
		description:
			"Les fûts en métal, souvent utilisés dans les camps ou pour de grandes réserves, sont résistants et durables.",
		materiel_necessaire:
			"Fûts en acier inoxydable ou en métal avec revêtement interne",
		etapes: [
			"1. Nettoyer et désinfecter le fût avec une solution d'eau de Javel (1 cuillère à soupe pour 4 litres d'eau).",
			"2. Rincer soigneusement pour éliminer toute trace de produit chimique.",
			"3. Remplir le fût avec de l'eau potable ou purifiée.",
			"4. Fermer hermétiquement et stocker dans un endroit à l'abri de l'humidité.",
		],
		duree: "12 mois ou plus avec une vérification régulière",
		image: "https://example.com/metal_drum.jpg",
	},
	{
		id: 6,
		main_cat: "Nourriture",
		sub_cat: "Recherche_nourriture",
		nom: "Identifier les plantes comestibles",
		description:
			"Apprenez à reconnaître les plantes sûres à consommer dans la nature.",
		materiel_necessaire:
			"Guide botanique, application de reconnaissance de plantes",
		etapes: [
			"1. Consultez un guide ou utilisez une application pour repérer les plantes comestibles locales.",
			"2. Recherchez des plantes communes comme les pissenlits, orties ou trèfles.",
			"3. Vérifiez l'absence de toxines en consultant des sources fiables.",
			"4. Évitez toute plante inconnue ou avec des caractéristiques suspectes.",
			"5. Testez une petite quantité avant une consommation complète.",
		],
		duree: "Variable selon l’environnement et les ressources disponibles",
		image: "https://example.com/edible_plants.jpg",
	},
	{
		id: 7,
		main_cat: "Nourriture",
		sub_cat: "Recherche_nourriture",
		nom: "Pêche de survie avec du matériel improvisé",
		description:
			"Apprenez à pêcher des poissons en utilisant des outils simples trouvés dans la nature.",
		materiel_necessaire:
			"Fil de pêche improvisé (corde fine, fil de métal), hameçon (épingles, os taillés)",
		etapes: [
			"1. Fabriquez une ligne de pêche à partir de fil solide ou d’une corde fine.",
			"2. Créez un hameçon en utilisant des épingles, des trombones ou des petits os taillés.",
			"3. Ajoutez un appât naturel comme des vers, insectes ou petits morceaux d’aliments.",
			"4. Lancez la ligne dans une rivière ou un lac et attendez une prise.",
			"5. Récupérez le poisson et préparez-le pour la consommation.",
		],
		duree: "1 à 3 heures selon les conditions de pêche",
		image: "https://example.com/improvised_fishing.jpg",
	},
	{
		id: 8,
		main_cat: "Nourriture",
		sub_cat: "Recherche_nourriture",
		nom: "Chasse aux insectes riches en protéines",
		description:
			"Trouvez et préparez des insectes comestibles pour une source de protéines rapide.",
		materiel_necessaire:
			"Récipient pour collecte, outil pour creuser (optionnel)",
		etapes: [
			"1. Recherchez des insectes comestibles comme les criquets, larves, fourmis ou coléoptères.",
			"2. Creusez sous les pierres, dans les troncs d’arbres ou dans le sol pour trouver des larves.",
			"3. Vérifiez que les insectes ne sont pas toxiques en consultant des guides locaux.",
			"4. Faites griller ou bouillir les insectes avant de les consommer.",
			"5. Conservez les insectes non utilisés dans un récipient propre pour plus tard.",
		],
		duree: "30 minutes à 2 heures selon la disponibilité des insectes",
		image: "https://example.com/insect_hunting.jpg",
	},
	{
		id: 9,
		main_cat: "Nourriture",
		sub_cat: "Stockage_nourriture",
		nom: "Conserver des aliments dans des bocaux hermétiques",
		description:
			"Prolongez la durée de conservation de vos aliments grâce à des bocaux hermétiques.",
		materiel_necessaire:
			"Bocaux en verre avec joints en caoutchouc, stérilisateur (optionnel)",
		etapes: [
			"1. Nettoyez et stérilisez les bocaux en verre pour éliminer les bactéries.",
			"2. Placez les aliments secs, marinés ou préparés dans les bocaux.",
			"3. Fermez hermétiquement en vérifiant que le joint est intact.",
			"4. Stockez les bocaux dans un endroit frais, sombre et sec.",
			"5. Vérifiez régulièrement pour vous assurer qu’il n’y a pas de fuites ou de détériorations.",
		],
		duree: "6 mois à 1 an selon le type d’aliment",
		image: "https://example.com/airtight_jars.jpg",
	},
	{
		id: 10,
		main_cat: "Nourriture",
		sub_cat: "Stockage_nourriture",
		nom: "Emballage sous vide pour viande séchée",
		description:
			"Préservez la viande séchée en réduisant son exposition à l'air avec un emballage sous vide.",
		materiel_necessaire:
			"Machine à vide (ou méthode manuelle), sacs sous vide, viande séchée",
		etapes: [
			"1. Placez la viande séchée dans un sac sous vide de taille adaptée.",
			"2. Utilisez une machine à vide pour extraire l’air et sceller le sac hermétiquement.",
			"3. Si vous n’avez pas de machine, utilisez un récipient d’eau : plongez le sac presque entièrement pour chasser l'air avant de le sceller.",
			"4. Stockez les sacs dans un endroit frais et sec, ou au congélateur pour une conservation prolongée.",
			"5. Ouvrez uniquement lorsque nécessaire pour maintenir la fraîcheur.",
		],
		duree: "6 mois à 2 ans selon le stockage",
		image: "https://example.com/vacuum_sealed_meat.jpg",
	},
	{
		id: 11,
		main_cat: "Nourriture",
		sub_cat: "Stockage_nourriture",
		nom: "Stockage de fruits secs dans des sacs résistants à l’humidité",
		description:
			"Empêchez l'humidité de dégrader vos fruits secs en utilisant des sacs adaptés.",
		materiel_necessaire:
			"Sacs résistants à l’humidité, absorbeurs d'humidité (silice ou charbon actif)",
		etapes: [
			"1. Placez les fruits secs dans des sacs conçus pour résister à l’humidité.",
			"2. Ajoutez un absorbeur d'humidité (silice ou charbon actif) à l'intérieur du sac.",
			"3. Scellez le sac hermétiquement pour éviter toute infiltration d'air.",
			"4. Stockez dans un endroit sec et frais, à l'abri de la lumière directe.",
			"5. Vérifiez régulièrement que les fruits secs restent secs et qu’il n’y a pas de moisissures.",
		],
		duree: "6 mois à 1 an",
		image: "https://example.com/dry_fruit_storage.jpg",
	},
	{
		id: 12,
		main_cat: "Nourriture",
		sub_cat: "Preparation_nourriture",
		nom: "Cuisiner avec un réchaud portable",
		description:
			"Utilisez un réchaud portable pour préparer des repas rapidement, même dans des conditions difficiles.",
		materiel_necessaire:
			"Réchaud portable, cartouche de gaz ou combustible, ustensiles de cuisine",
		etapes: [
			"1. Installez le réchaud portable sur une surface stable et non inflammable.",
			"2. Connectez la cartouche de gaz ou ajoutez le combustible nécessaire.",
			"3. Allumez le réchaud en suivant les instructions du fabricant.",
			"4. Placez une casserole ou une poêle pour cuisiner vos aliments.",
			"5. Éteignez le réchaud après utilisation et laissez refroidir avant de le ranger.",
		],
		duree: "10 à 30 minutes selon la recette",
		image: "https://example.com/portable_stove.jpg",
	},
	{
		id: 13,
		main_cat: "Nourriture",
		sub_cat: "Preparation_nourriture",
		nom: "Utiliser une pierre chaude pour cuire des aliments",
		description:
			"Apprenez à cuire des aliments en utilisant une pierre chauffée comme méthode naturelle de cuisson.",
		materiel_necessaire:
			"Pierre plate non poreuse, bois pour feu, pinces ou bâtons pour manipuler les aliments",
		etapes: [
			"1. Trouvez une pierre plate et non poreuse dans la nature.",
			"2. Placez la pierre sur un feu de camp pour la chauffer pendant 20 à 30 minutes.",
			"3. Une fois chaude, retirez la pierre du feu et placez-la sur une surface stable.",
			"4. Disposez les aliments à cuire directement sur la pierre (viande, légumes, etc.).",
			"5. Retournez les aliments régulièrement jusqu'à ce qu'ils soient bien cuits.",
		],
		duree: "30 à 60 minutes selon les aliments",
		image: "https://example.com/hot_stone_cooking.jpg",
	},
	{
		id: 14,
		main_cat: "Nourriture",
		sub_cat: "Preparation_nourriture",
		nom: "Techniques de fumage pour conserver la viande",
		description:
			"Conservez la viande pendant plusieurs semaines grâce au fumage, une méthode traditionnelle efficace.",
		materiel_necessaire:
			"Viande crue, bois non traité (chêne, hickory, etc.), abri pour fumage ou cadre improvisé",
		etapes: [
			"1. Préparez la viande en la coupant en fines tranches ou morceaux.",
			"2. Construisez un abri pour le fumage (une tente ou un cadre avec bâches).",
			"3. Allumez un feu avec du bois non traité et maintenez une fumée dense mais à basse température.",
			"4. Suspendez la viande au-dessus du feu, à une distance où la chaleur est modérée.",
			"5. Laissez fumer pendant 8 à 12 heures, en vérifiant régulièrement que la fumée reste constante.",
			"6. Une fois fumée, conservez la viande dans un récipient hermétique.",
		],
		duree: "8 à 12 heures pour le fumage, plusieurs semaines de conservation",
		image: "https://example.com/meat_smoking.jpg",
	},
	{
		id: 15,
		main_cat: "Nourriture",
		sub_cat: "Recolte_culture",
		nom: "Planter des légumes à croissance rapide (exemple : radis)",
		description:
			"Cultivez des légumes en quelques semaines pour un apport alimentaire rapide.",
		materiel_necessaire:
			"Graines de radis, terre fertile, récipient ou terrain, eau",
		etapes: [
			"1. Préparez un terrain ou un récipient rempli de terre fertile et bien drainée.",
			"2. Semez les graines de radis à environ 1 cm de profondeur et espacez-les de 2-3 cm.",
			"3. Arrosez régulièrement pour maintenir le sol légèrement humide.",
			"4. Assurez une bonne exposition au soleil pour une croissance optimale.",
			"5. Récoltez les radis après 20 à 30 jours, dès qu'ils atteignent leur taille maximale.",
		],
		duree: "20 à 30 jours",
		image: "https://example.com/radish_growing.jpg",
	},
	{
		id: 16,
		main_cat: "Nourriture",
		sub_cat: "Recolte_culture",
		nom: "Construire un mini-jardin hydroponique",
		description:
			"Créez un système hydroponique simple pour cultiver des légumes sans terre.",
		materiel_necessaire:
			"Récipients, pompe à eau, solution nutritive, supports pour plantes (ex. : billes d’argile)",
		etapes: [
			"1. Prenez un récipient étanche pour contenir la solution nutritive.",
			"2. Installez une pompe pour assurer la circulation de l'eau.",
			"3. Placez les plantes ou graines dans des supports comme des billes d’argile ou des paniers suspendus.",
			"4. Remplissez le récipient avec une solution nutritive adaptée aux plantes.",
			"5. Placez le jardin dans un endroit lumineux et surveillez la croissance régulièrement.",
		],
		duree: "2 à 6 semaines selon le type de plantes",
		image: "https://example.com/hydroponic_garden.jpg",
	},
	{
		id: 17,
		main_cat: "Nourriture",
		sub_cat: "Recolte_culture",
		nom: "Récolter des champignons en forêt",
		description:
			"Trouvez des champignons comestibles dans la nature en toute sécurité.",
		materiel_necessaire:
			"Guide d'identification des champignons, couteau, panier en osier (éviter le plastique)",
		etapes: [
			"1. Emportez un guide fiable pour identifier les champignons comestibles.",
			"2. Recherchez les champignons dans des zones humides, sous les arbres ou sur des troncs en décomposition.",
			"3. Coupez les champignons avec un couteau pour éviter d’endommager le mycélium.",
			"4. Évitez les champignons dont l'identification est incertaine.",
			"5. Nettoyez soigneusement les champignons avant de les consommer ou de les cuisiner.",
		],
		duree: "1 à 3 heures selon la zone et la disponibilité",
		image: "https://example.com/mushroom_foraging.jpg",
	},
	{
		id: 18,
		main_cat: "Nourriture",
		sub_cat: "Sources_proteines_alternatives",
		nom: "Sécher des insectes pour en faire des snacks",
		description:
			"Préparez des insectes séchés pour une source de protéines durable et facilement transportable.",
		materiel_necessaire: "Insectes comestibles, grille ou filet, feu ou soleil",
		etapes: [
			"1. Récoltez des insectes comestibles comme criquets ou larves.",
			"2. Nettoyez-les soigneusement pour enlever toute saleté.",
			"3. Disposez les insectes sur une grille ou un filet pour permettre une bonne circulation d'air.",
			"4. Faites sécher les insectes au soleil ou près d’un feu modéré pendant plusieurs heures.",
			"5. Stockez les insectes séchés dans un récipient hermétique.",
		],
		duree: "4 à 6 heures",
		image: "https://example.com/dried_insects.jpg",
	},
	{
		id: 19,
		main_cat: "Nourriture",
		sub_cat: "Sources_proteines_alternatives",
		nom: "Récolter des œufs d’oiseaux sauvages",
		description:
			"Une source naturelle de protéines en explorant les environnements sauvages.",
		materiel_necessaire: "Petit panier ou récipient pour transporter les œufs",
		etapes: [
			"1. Repérez les nids d’oiseaux sans déranger les habitats naturels.",
			"2. Vérifiez que le nid n’est pas protégé par des lois locales.",
			"3. Récoltez délicatement un ou deux œufs pour éviter de compromettre le nid.",
			"4. Transportez les œufs dans un récipient pour éviter qu’ils ne se cassent.",
			"5. Faites cuire les œufs avant consommation pour éviter tout risque sanitaire.",
		],
		duree: "1 à 2 heures selon l’emplacement des nids",
		image: "https://example.com/wild_bird_eggs.jpg",
	},
	{
		id: 20,
		main_cat: "Nourriture",
		sub_cat: "Sources_proteines_alternatives",
		nom: "Pêche à la main dans des rivières peu profondes",
		description:
			"Attrapez des poissons ou des écrevisses avec vos mains dans des rivières peu profondes.",
		materiel_necessaire: "Rien ou des gants pour protéger les mains",
		etapes: [
			"1. Identifiez une rivière peu profonde avec une eau claire pour repérer les poissons ou écrevisses.",
			"2. Déplacez-vous lentement pour ne pas effrayer les animaux.",
			"3. Utilisez vos mains pour attraper les poissons ou les écrevisses près des rochers ou des racines.",
			"4. Maintenez fermement l'animal pour éviter qu’il ne s’échappe.",
			"5. Préparez et cuisinez immédiatement pour une consommation sûre.",
		],
		duree: "1 à 3 heures selon la disponibilité des ressources",
		image: "https://example.com/hand_fishing.jpg",
	},
	{
		id: 21,
		main_cat: "Nourriture",
		sub_cat: "Materiel_cuisine_reparation",
		nom: "Réparer un réchaud cassé avec des matériaux improvisés",
		description:
			"Prolongez la vie de votre réchaud portable en le réparant avec des matériaux simples.",
		materiel_necessaire:
			"Fil métallique, boîte en métal, colle résistante à la chaleur",
		etapes: [
			"1. Identifiez la pièce cassée (support, tuyau ou joint).",
			"2. Remplacez les parties endommagées par des éléments improvisés comme du fil métallique ou une boîte métallique découpée.",
			"3. Collez ou fixez solidement avec un matériau résistant à la chaleur.",
			"4. Testez le réchaud à faible intensité pour vérifier son bon fonctionnement.",
			"5. Utilisez uniquement dans un environnement bien ventilé pour éviter les risques.",
		],
		duree: "1 à 2 heures",
		image: "https://example.com/stove_repair.jpg",
	},
	{
		id: 22,
		main_cat: "Nourriture",
		sub_cat: "Materiel_cuisine_reparation",
		nom: "Fabriquer un four solaire avec des matériaux simples",
		description:
			"Utilisez l'énergie solaire pour cuisiner des aliments sans combustible.",
		materiel_necessaire:
			"Carton, papier aluminium, plastique transparent, colle",
		etapes: [
			"1. Prenez un carton et tapissez l'intérieur avec du papier aluminium pour réfléchir la lumière.",
			"2. Créez une ouverture pour placer les aliments et recouvrez-la avec du plastique transparent.",
			"3. Orientez le four face au soleil et ajustez pour maximiser l'exposition.",
			"4. Placez les aliments à cuire dans un récipient noir pour absorber la chaleur.",
			"5. Surveillez la cuisson et ajustez la position du four au besoin.",
		],
		duree: "2 à 4 heures selon l'ensoleillement",
		image: "https://example.com/solar_oven.jpg",
	},
	{
		id: 23,
		main_cat: "Nourriture",
		sub_cat: "Materiel_cuisine_reparation",
		nom: "Construire un fumoir de fortune pour conserver les aliments",
		description:
			"Conservez les aliments en construisant un fumoir avec des matériaux simples.",
		materiel_necessaire:
			"Bâches ou toile, branches pour cadre, bois non traité",
		etapes: [
			"1. Construisez un cadre à l’aide de branches solides pour soutenir la bâche.",
			"2. Couvrez le cadre avec une bâche pour retenir la fumée.",
			"3. Allumez un feu avec du bois non traité sous le cadre, en maintenant une fumée constante.",
			"4. Suspendez les aliments dans le fumoir pour qu’ils soient exposés à la fumée.",
			"5. Laissez fumer les aliments pendant 8 à 12 heures, puis stockez-les.",
		],
		duree: "8 à 12 heures pour le fumage",
		image: "https://example.com/improvised_smoker.jpg",
	},
	{
		id: 24,
		main_cat: "Abris",
		sub_cat: "Construction_abris_temporaires",
		nom: "Construire un abri avec une bâche et des cordes",
		description:
			"Utilisez une bâche pour créer un abri rapide et efficace contre les intempéries.",
		materiel_necessaire: "Bâche imperméable, cordes, arbres ou piquets",
		etapes: [
			"1. Trouvez un emplacement plat et protégé du vent.",
			"2. Fixez la bâche à deux arbres ou piquets pour créer une structure en pente.",
			"3. Ancrez les bords de la bâche au sol avec des cordes ou des pierres.",
			"4. Assurez-vous que l'eau de pluie s'écoule loin de votre abri.",
			"5. Ajoutez des couches de feuilles ou de branches pour améliorer l'isolation.",
		],
		duree: "30 à 60 minutes",
		image: "https://example.com/tarp_shelter.jpg",
	},
	{
		id: 25,
		main_cat: "Abris",
		sub_cat: "Construction_abris_temporaires",
		nom: "Construire un abri en branches et feuillage",
		description:
			"Fabriquez un abri naturel avec des branches et des feuilles pour une protection temporaire.",
		materiel_necessaire: "Branches solides, feuillage, corde ou lianes",
		etapes: [
			"1. Choisissez une zone près d’un arbre ou d’un gros rocher pour support.",
			"2. Formez une structure en A en appuyant des branches principales contre un support.",
			"3. Ajoutez des branches transversales pour stabiliser l'abri.",
			"4. Couvrez la structure avec des feuilles épaisses pour isoler et protéger de la pluie.",
			"5. Améliorez l'intérieur avec des feuilles sèches pour un sol plus confortable.",
		],
		duree: "1 à 2 heures",
		image: "https://example.com/branch_shelter.jpg",
	},
	{
		id: 26,
		main_cat: "Abris",
		sub_cat: "Construction_abris_temporaires",
		nom: "Construire une tranchée-abri contre le vent",
		description:
			"Creusez un abri basique pour vous protéger des vents forts et conserver la chaleur.",
		materiel_necessaire: "Pelle ou outils improvisés, branches, feuillage",
		etapes: [
			"1. Identifiez un emplacement protégé et stable.",
			"2. Creusez une tranchée assez large pour s'y allonger, avec des bords légèrement relevés.",
			"3. Renforcez les parois avec des branches solides pour éviter les éboulements.",
			"4. Recouvrez la tranchée de feuillage ou de bâches pour la protection.",
			"5. Ajoutez une couche isolante à l'intérieur pour améliorer le confort thermique.",
		],
		duree: "2 à 3 heures",
		image: "https://example.com/trench_shelter.jpg",
	},
	{
		id: 27,
		main_cat: "Abris",
		sub_cat: "Isolation_amelioration_abris",
		nom: "Ajouter une couche d’isolation avec des matériaux naturels",
		description:
			"Améliorez la protection thermique de votre abri en utilisant des ressources locales.",
		materiel_necessaire: "Feuilles, mousse, fougères, écorces",
		etapes: [
			"1. Récoltez des matériaux naturels autour de l'emplacement de l'abri.",
			"2. Disposez les matériaux sur les parois extérieures pour former une couche isolante.",
			"3. Couvrez également le toit pour améliorer la protection contre le froid et l'humidité.",
			"4. Ajoutez des feuilles sèches ou de la mousse au sol intérieur pour plus de confort.",
			"5. Réajustez régulièrement la couche isolante si nécessaire.",
		],
		duree: "1 à 2 heures",
		image: "https://example.com/natural_insulation.jpg",
	},
	{
		id: 28,
		main_cat: "Abris",
		sub_cat: "Isolation_amelioration_abris",
		nom: "Améliorer l’étanchéité avec des bâches ou des feuilles épaisses",
		description:
			"Protégez votre abri contre la pluie en renforçant son étanchéité.",
		materiel_necessaire: "Bâches, feuilles épaisses, lianes ou corde",
		etapes: [
			"1. Installez une bâche ou disposez des feuilles épaisses sur le toit de l'abri.",
			"2. Fixez solidement les matériaux avec des cordes ou des lianes.",
			"3. Veillez à ce que les bords des matériaux débordent pour éloigner l'eau de l'abri.",
			"4. Testez l'étanchéité en versant un peu d'eau et ajustez si nécessaire.",
			"5. Vérifiez régulièrement l’état des matériaux pour maintenir l’étanchéité.",
		],
		duree: "30 à 60 minutes",
		image: "https://example.com/waterproof_shelter.jpg",
	},
	{
		id: 29,
		main_cat: "Abris",
		sub_cat: "Isolation_amelioration_abris",
		nom: "Installer un coupe-vent naturel autour de l’abri",
		description:
			"Utilisez des obstacles naturels pour réduire l'impact du vent sur votre abri.",
		materiel_necessaire: "Branches épaisses, pierres, feuillage dense",
		etapes: [
			"1. Récoltez des branches, des feuillages ou des pierres dans l’environnement proche.",
			"2. Disposez-les en cercle ou en mur bas autour de l'abri pour bloquer le vent.",
			"3. Renforcez les structures avec des cordes ou du feuillage dense si nécessaire.",
			"4. Orientez l’entrée de l’abri à l’opposé de la direction du vent dominant.",
			"5. Vérifiez régulièrement la stabilité des barrières et ajustez si besoin.",
		],
		duree: "1 à 2 heures",
		image: "https://example.com/windbreak_shelter.jpg",
	},
	{
		id: 30,
		main_cat: "Outils",
		sub_cat: "Outils_construction_reparation",
		nom: "Fabriquer un couteau de fortune à partir de pierres",
		description:
			"Créez un outil tranchant à partir de pierres pour découper ou sculpter.",
		materiel_necessaire:
			"Pierre dure (ex. silex), pierre plus molle pour percer, bâton pour le manche",
		etapes: [
			"1. Choisissez une pierre dure avec un bord tranchant et une forme appropriée.",
			"2. Frappez la pierre plus molle contre la pierre dure pour en détacher des éclats tranchants.",
			"3. Fixez le tranchant de la pierre sur un bâton ou un autre support solide à l’aide de lianes ou de cordes.",
			"4. Testez la solidité et l’affûtage du couteau, puis ajustez si nécessaire.",
			"5. Utilisez le couteau avec précaution pour couper ou sculpter.",
		],
		duree: "1 à 2 heures",
		image: "https://example.com/stone_knife.jpg",
	},
	{
		id: 31,
		main_cat: "Outils",
		sub_cat: "Outils_construction_reparation",
		nom: "Fabriquer un marteau avec un bâton et une pierre",
		description:
			"Créez un marteau de fortune pour enfoncer des clous ou casser des objets.",
		materiel_necessaire: "Bâton solide, pierre ronde ou plate, corde ou lianes",
		etapes: [
			"1. Choisissez un bâton solide d’une longueur appropriée pour servir de manche.",
			"2. Trouvez une pierre arrondie ou plate pour servir de tête de marteau.",
			"3. Attachez fermement la pierre au bout du bâton avec des cordes ou des lianes.",
			"4. Vérifiez la solidité de l'assemblage et ajustez si nécessaire.",
			"5. Utilisez le marteau pour des tâches comme enfoncer des clous ou casser des objets.",
		],
		duree: "30 à 60 minutes",
		image: "https://example.com/stone_hammer.jpg",
	},
	{
		id: 32,
		main_cat: "Outils",
		sub_cat: "Outils_construction_reparation",
		nom: "Fabriquer une scie avec du métal ou des pierres",
		description:
			"Créez un outil pour scier du bois ou d'autres matériaux avec des ressources improvisées.",
		materiel_necessaire:
			"Couteau, métal coupé (par exemple, d'une boîte métallique), corde ou lianes",
		etapes: [
			"1. Prenez un morceau de métal ou une plaque découpée (une vieille boîte métallique fonctionne bien).",
			"2. Utilisez un couteau ou un autre outil tranchant pour former des dents de scie sur le métal.",
			"3. Fixez un manche en bois solide pour une prise plus confortable.",
			"4. Attachez le métal ou la plaque à l’extrémité du bâton avec de la corde ou des lianes.",
			"5. Utilisez la scie pour couper du bois ou d'autres matériaux en appuyant et en tirant.",
		],
		duree: "1 à 2 heures",
		image: "https://example.com/metal_saw.jpg",
	},
	{
		id: 33,
		main_cat: "Outils",
		sub_cat: "Outils_cuisine_alimentation",
		nom: "Fabriquer un moulin à grains avec des pierres",
		description:
			"Créez un moulin à grains pour moudre vos récoltes en farine ou poudre.",
		materiel_necessaire: "Deux pierres plates, grains à moudre",
		etapes: [
			"1. Choisissez deux pierres plates, une plus grosse et une plus petite.",
			"2. Placez les grains à moudre entre les pierres.",
			"3. Frottez la pierre plus petite contre la pierre plus grande pour écraser les grains.",
			"4. Continuez à frotter jusqu'à ce que les grains soient réduits en farine ou en poudre.",
			"5. Utilisez la farine pour la préparation des aliments.",
		],
		duree: "30 à 60 minutes selon la quantité de grains",
		image: "https://example.com/stone_grinder.jpg",
	},
	{
		id: 34,
		main_cat: "Outils",
		sub_cat: "Outils_cuisine_alimentation",
		nom: "Créer un tamis pour filtrer l’eau",
		description:
			"Utilisez des matériaux naturels pour créer un tamis afin de purifier l'eau.",
		materiel_necessaire: "Grillage fin, branches, corde ou lianes",
		etapes: [
			"1. Trouvez un morceau de grillage fin ou un tissu naturel pour servir de filtre.",
			"2. Créez un cadre avec des branches pour soutenir le grillage.",
			"3. Attachez solidement le grillage ou le tissu au cadre avec des cordes ou des lianes.",
			"4. Utilisez le tamis pour filtrer l'eau en versant lentement.",
			"5. Jetez les résidus solides et conservez l'eau filtrée.",
		],
		duree: "30 à 45 minutes",
		image: "https://example.com/water_sieve.jpg",
	},
	{
		id: 35,
		main_cat: "Outils",
		sub_cat: "Outils_cuisine_alimentation",
		nom: "Fabriquer un mortier et un pilon avec des pierres",
		description:
			"Créez un mortier et un pilon pour broyer des plantes ou des graines.",
		materiel_necessaire:
			"Pierre dure pour le mortier, pierre plus petite pour le pilon",
		etapes: [
			"1. Choisissez deux pierres solides, une grande et une petite.",
			"2. Creusez légèrement le centre de la pierre plus grande pour former le mortier.",
			"3. Utilisez la pierre plus petite comme pilon pour écraser les plantes ou les graines.",
			"4. Travaillez les matériaux dans le mortier pour en extraire les éléments nécessaires.",
			"5. Nettoyez régulièrement le mortier et le pilon pour éviter l'accumulation de résidus.",
		],
		duree: "30 à 60 minutes",
		image: "https://example.com/mortar_pestle.jpg",
	},
	{
		id: 36,
		main_cat: "Outils",
		sub_cat: "Outils_securite_protection",
		nom: "Créer un piège à mâchoire pour attraper du gibier",
		description:
			"Construisez un piège simple pour attraper du gibier en utilisant des ressources naturelles.",
		materiel_necessaire:
			"Branches solides, corde ou lianes, pierre pour le mécanisme",
		etapes: [
			"1. Trouvez deux branches solides pour construire la structure de base.",
			"2. Utilisez une pierre pour créer un mécanisme de déclenchement.",
			"3. Fixez les branches et ajustez la tension du piège pour capturer un gibier.",
			"4. Placez des appâts pour attirer l’animal dans le piège.",
			"5. Vérifiez régulièrement le piège pour éviter que l'animal ne soit laissé trop longtemps.",
		],
		duree: "1 à 2 heures",
		image: "https://example.com/snares_trap.jpg",
	},
	{
		id: 37,
		main_cat: "Soins",
		sub_cat: "Soins_premiers_secours",
		nom: "Désinfecter une plaie avec des plantes médicinales",
		description:
			"Utilisez des plantes locales pour désinfecter et accélérer la guérison des plaies.",
		materiel_necessaire:
			"Plantes médicinales comme l'arnica, lavande, ou millepertuis",
		etapes: [
			"1. Identifiez une plante médicinale connue pour ses propriétés antiseptiques, comme l'arnica ou la lavande.",
			"2. Écrasez les feuilles ou les fleurs pour en extraire le jus.",
			"3. Appliquez délicatement le jus ou l'extrait sur la plaie à l'aide d'un coton ou d'une gaze.",
			"4. Couvrez la plaie avec un pansement propre.",
			"5. Répétez l'application plusieurs fois par jour jusqu'à la guérison.",
		],
		duree:
			"1 à 2 jours pour désinfection initiale, suivi de quelques jours pour la guérison",
		image: "https://example.com/herbal_disinfection.jpg",
	},
	{
		id: 38,
		main_cat: "Soins",
		sub_cat: "Soins_premiers_secours",
		nom: "Réaliser un pansement avec des matériaux improvisés",
		description:
			"Utilisez des ressources naturelles pour créer un pansement lorsque les fournitures sont manquantes.",
		materiel_necessaire:
			"Tissu propre (chemise, bandage improvisé), lianes ou corde pour fixer",
		etapes: [
			"1. Trouvez un morceau de tissu propre, comme une chemise ou un foulard.",
			"2. Pliez le tissu pour couvrir entièrement la plaie.",
			"3. Utilisez des lianes ou des cordes pour fixer le tissu en place.",
			"4. Assurez-vous que le pansement est bien maintenu, mais ne serre pas trop.",
			"5. Changez le pansement tous les jours ou dès qu'il devient sale.",
		],
		duree: "1 à 3 jours selon l'état de la plaie",
		image: "https://example.com/ improvised_bandage.jpg",
	},
	{
		id: 39,
		main_cat: "Soins",
		sub_cat: "Soins_premiers_secours",
		nom: "Réduire une entorse avec un bandage compressif",
		description:
			"Appliquez un bandage compressif pour réduire l'enflure et soulager la douleur d'une entorse.",
		materiel_necessaire:
			"Bandage ou tissu élastique, coton ou mousse pour l'absorption",
		etapes: [
			"1. Allongez la personne affectée et surélevez la partie blessée si possible.",
			"2. Enroulez un bandage autour de la zone affectée en appliquant une pression modérée.",
			"3. Utilisez des couches supplémentaires de coton ou de mousse pour absorber l'humidité.",
			"4. Fixez le bandage avec des épingles ou de la corde.",
			"5. Gardez la zone en repos et appliquez de la glace si possible pour réduire l'enflure.",
		],
		duree: "2 à 3 jours pour l'enflure initiale, suivis de soins continus",
		image: "https://example.com/sprain_bandage.jpg",
	},
	{
		id: 40,
		main_cat: "Soins",
		sub_cat: "Traitement_infections",
		nom: "Appliquer un cataplasme de plantes pour traiter une infection de la peau",
		description:
			"Utilisez des plantes pour apaiser et traiter les infections cutanées.",
		materiel_necessaire: "Plantes comme le thym, le gingembre, ou l'aloé vera",
		etapes: [
			"1. Choisissez une plante médicinale avec des propriétés antibactériennes (par exemple, thym ou aloé vera).",
			"2. Écrasez les feuilles ou les racines pour en extraire le jus.",
			"3. Appliquez la pâte obtenue directement sur la zone infectée.",
			"4. Couvrez avec un bandage léger pour maintenir la pression et éviter toute contamination.",
			"5. Laissez agir pendant 1 à 2 heures avant de rincer et répétez le processus quotidiennement.",
		],
		duree: "1 à 3 jours, selon l'infection et la réponse au traitement",
		image: "https://example.com/herbal_cataplasm.jpg",
	},
	{
		id: 41,
		main_cat: "Soins",
		sub_cat: "Traitement_infections",
		nom: "Traiter un abcès avec un traitement chaud",
		description:
			"Appliquez de la chaleur pour favoriser le drainage d'un abcès et soulager la douleur.",
		materiel_necessaire: "Compresse chaude ou eau chaude, linge propre",
		etapes: [
			"1. Faites chauffer de l'eau dans un récipient.",
			"2. Imbibez un linge propre dans l'eau chaude et appliquez-le sur l'abcès.",
			"3. Maintenez la compresse chaude pendant 10 à 15 minutes.",
			"4. Répétez l'application plusieurs fois par jour pour faciliter le drainage.",
			"5. Surveillez l’évolution de l'abcès et consultez un professionnel si nécessaire.",
		],
		duree: "1 à 2 jours, selon la taille de l'abcès",
		image: "https://example.com/abscess_heat_treatment.jpg",
	},
	{
		id: 42,
		main_cat: "Soins",
		sub_cat: "Traitement_infections",
		nom: "Utiliser de l'ail pour traiter une infection digestive",
		description:
			"L'ail est un puissant antibiotique naturel qui peut être utilisé pour traiter des infections digestives.",
		materiel_necessaire: "Gousses d'ail frais, eau",
		etapes: [
			"1. Épluchez et écrasez 2 à 3 gousses d'ail frais.",
			"2. Mélangez l'ail écrasé dans un verre d'eau chaude.",
			"3. Buvez cette préparation une à deux fois par jour pour favoriser la guérison.",
			"4. Répétez ce traitement pendant 3 à 5 jours.",
			"5. Si l'infection persiste, consultez un médecin pour un traitement complémentaire.",
		],
		duree: "3 à 5 jours",
		image: "https://example.com/garlic_infection_treatment.jpg",
	},
	{
		id: 43,
		main_cat: "Soins",
		sub_cat: "Soins_corps_prevention",
		nom: "Protéger les pieds avec un baume fait maison",
		description:
			"Utilisez des ingrédients naturels pour créer un baume apaisant et protecteur pour les pieds.",
		materiel_necessaire:
			"Cire d'abeille, huile de coco, huile essentielle de lavande",
		etapes: [
			"1. Faites fondre un peu de cire d'abeille dans un récipient.",
			"2. Ajoutez de l'huile de coco et de l'huile essentielle de lavande pour apaiser et nourrir la peau.",
			"3. Mélangez bien les ingrédients jusqu'à obtenir une pâte épaisse.",
			"4. Appliquez le baume sur les pieds, en insistant sur les zones sèches ou douloureuses.",
			"5. Enroulez les pieds dans un tissu doux ou des chaussettes pour laisser agir pendant la nuit.",
		],
		duree:
			"1 à 2 jours pour les premiers résultats, à répéter selon les besoins",
		image: "https://example.com/foot_balm.jpg",
	},
	{
		id: 44,
		main_cat: "Soins",
		sub_cat: "Soins_corps_prevention",
		nom: "Créer un répulsif naturel contre les insectes",
		description:
			"Protégez-vous contre les piqûres d'insectes avec un répulsif fait maison à base de plantes.",
		materiel_necessaire:
			"Huile essentielle de citronnelle, huile de lavande, huile d'olive",
		etapes: [
			"1. Mélangez quelques gouttes d'huile essentielle de citronnelle et de lavande dans de l'huile d'olive.",
			"2. Appliquez le mélange sur les zones exposées du corps.",
			"3. Renouvelez l'application toutes les 2 heures ou après toute baignade.",
			"4. Conservez le répulsif dans un flacon hermétique pour l'utiliser plusieurs jours.",
			"5. Évitez tout contact avec les yeux et les muqueuses.",
		],
		duree: "Application régulière selon l'exposition aux insectes",
		image: "https://example.com/insect_repellent.jpg",
	},
	{
		id: 45,
		main_cat: "Eau",
		sub_cat: "Purification",
		nom: "Ébullition",
		description:
			"Faire bouillir l'eau pendant au moins 1 à 3 minutes pour tuer la plupart des agents pathogènes.",
		materiel_necessaire: "Casserole, source de chaleur (feu ou réchaud)",
		etapes: [
			"1. Récupérer de l'eau à partir d'une source potentiellement contaminée.",
			"2. Chauffer l'eau dans une casserole jusqu'à ébullition.",
			"3. Laisser bouillir pendant 1 à 3 minutes pour tuer les bactéries, virus et parasites.",
			"4. Laisser refroidir l'eau avant de la boire.",
		],
		duree: "1 à 3 minutes",
		image: "https://example.com/boiling_water.jpg",
	},
	{
		id: 46,
		main_cat: "Eau",
		sub_cat: "Purification",
		nom: "Filtration avec un filtre à eau",
		description:
			"Utiliser un filtre à eau portable pour éliminer les impuretés et certains agents pathogènes.",
		materiel_necessaire:
			"Filtre à eau portable (comme un filtre de type Sawyer ou Lifestraw)",
		etapes: [
			"1. Récupérer l'eau de la source.",
			"2. Insérer le filtre dans l'eau.",
			"3. Boire directement à travers le filtre ou collecter l'eau filtrée dans un récipient propre.",
			"4. Éviter de toucher l'eau filtrée avec des mains non propres pour éviter la contamination.",
		],
		duree: "Instantané (selon le débit du filtre)",
		image: "https://example.com/waterfilter.jpg",
	},
	{
		id: 47,
		main_cat: "Eau",
		sub_cat: "Purification",
		nom: "Traitement chimique",
		description:
			"Utiliser des comprimés ou des gouttes de purification pour tuer les agents pathogènes.",
		materiel_necessaire:
			"Comprimés ou gouttes de purification d'eau (comme les comprimés de chlore ou d'iode)",
		etapes: [
			"1. Récupérer l'eau à purifier.",
			"2. Ajouter la quantité recommandée de comprimés ou de gouttes de purification dans l'eau.",
			"3. Bien mélanger et laisser agir pendant 30 minutes à 1 heure.",
			"4. Goûter l'eau et s'assurer qu'il n'y a pas de goût désagréable avant de boire.",
		],
		duree: "30 minutes à 1 heure",
		image: "https://example.com/chemicalpurification.jpg",
	},
	{
		id: 48,
		main_cat: "Eau",
		sub_cat: "Purification",
		nom: "Filtration à travers un tissu",
		description:
			"Filtrer les grosses impuretés à l'aide d'un tissu propre ou d'une mousseline avant de purger l'eau avec une méthode supplémentaire.",
		materiel_necessaire: "Tissu propre (mousseline, bandana, etc.)",
		etapes: [
			"1. Récupérer l'eau à filtrer.",
			"2. Utiliser un tissu propre pour filtrer l'eau et retirer les particules visibles.",
			"3. Utiliser ensuite une méthode complémentaire, comme l'ébullition ou un filtre, pour tuer les agents pathogènes.",
		],
		duree: "5 minutes pour filtrer",
		image: "https://example.com/clothfilter.jpg",
	},
	{
		id: 49,
		main_cat: "Eau",
		sub_cat: "Chercher_de_l_eau",
		nom: "Trouver de l'eau près des végétaux",
		description:
			"Les plantes peuvent souvent indiquer la présence d'eau souterraine ou de points d'eau cachés.",
		materiel_necessaire:
			"Couteau ou machette pour couper des végétaux, une petite boussole pour l'orientation",
		etapes: [
			"1. Cherchez des plantes et des arbres qui poussent en abondance, comme les saules, les bambous, ou les plantes aquatiques.",
			"2. Si possible, coupez une branche de ces plantes et observez s'il y a de l'humidité ou de l'eau dans la sève.",
			"3. Les racines de certaines plantes, comme les palmier et eucalyptus, peuvent aussi abriter de l'eau.",
			"4. Vérifiez le sol autour de ces plantes pour voir s'il est plus humide, ce qui peut indiquer une source souterraine.",
			"5. Utilisez cette information pour creuser ou vous diriger vers la source d'eau potentielle.",
		],
		duree:
			"1 à 3 heures pour trouver des zones propices, selon l'environnement",
		image: "https://example.com/water_near_plants.jpg",
	},
	{
		id: 50,
		main_cat: "Eau",
		sub_cat: "Chercher_de_l_eau",
		nom: "Chercher de l'eau dans les cours d'eau en fonction du terrain",
		description:
			"Les terrains bas, comme les vallées et les lits de rivières asséchées, peuvent souvent mener à des sources d'eau.",
		materiel_necessaire: "Carte, boussole, couteau",
		etapes: [
			"1. Identifiez les terrains bas et les vallées qui peuvent accumuler l'eau, comme les lits de rivières asséchées.",
			"2. Suivez les lignes de dépression dans le terrain, car l'eau a tendance à s'accumuler à ces endroits.",
			"3. Cherchez des zones avec de l'humidité visible dans le sol ou des plantes qui aiment l'eau, comme les roseaux.",
			"4. Si l'eau n'est pas visible, creusez doucement dans ces zones pour découvrir une source cachée.",
			"5. Assurez-vous que l'eau est propre avant de la boire, en la filtrant ou en la faisant bouillir.",
		],
		duree: "30 minutes à 2 heures pour localiser une source d'eau souterraine",
		image: "https://example.com/water_in_low_terrain.jpg",
	},
	{
		id: 51,
		main_cat: "Eau",
		sub_cat: "Chercher_de_l_eau",
		nom: "Utiliser un bâton pour trouver de l'eau",
		description:
			"Cette méthode implique de chercher des signes d'humidité dans le sol pour localiser une source d'eau.",
		materiel_necessaire: "Bâton ou tige droite, couteau ou outil pour creuser",
		etapes: [
			"1. Trouvez un bâton droit d'une longueur suffisante pour être enfoncé dans le sol.",
			"2. Tapotez doucement le bâton sur le sol en suivant des lignes de dépression ou des zones humides.",
			"3. Lorsque le bâton s'enfonce facilement dans le sol et qu'il est humide, c'est un signe que de l'eau peut se trouver à cet endroit.",
			"4. Creusez à cet endroit pour atteindre l'eau souterraine.",
			"5. Filtrez ou purifiez l'eau avant de la boire.",
		],
		duree: "1 à 2 heures pour localiser une source d'eau et creuser",
		image: "https://example.com/stick_for_water.jpg",
	},
	{
		id: 52,
		main_cat: "Eau",
		sub_cat: "Chercher_de_l_eau",
		nom: "Utiliser des techniques de condensation",
		description:
			"Exploitez la condensation naturelle pour collecter de l'eau pendant la nuit.",
		materiel_necessaire:
			"Plastique transparent, un petit récipient, une pierre",
		etapes: [
			"1. Trouvez une grande feuille de plastique transparent, comme un sac plastique ou un film.",
			"2. Creusez un petit trou dans le sol et placez un récipient au centre.",
			"3. Tendez le plastique au-dessus du trou et placez une pierre au centre pour créer une pente.",
			"4. L'humidité présente dans l'air se condensant sur le plastique se drainerait vers le récipient.",
			"5. Laissez la condensation se former pendant la nuit et vérifiez le matin pour obtenir de l'eau.",
		],
		duree: "8 à 12 heures pendant la nuit",
		image: "https://example.com/condensation_method.jpg",
	},
	{
		id: 49,
		main_cat: "Eau",
		sub_cat: "Chercher_de_l_eau",
		nom: "Chercher de l'eau dans les zones humides",
		description:
			"Les marécages et les zones humides peuvent être des sources d'eau, mais attention à la qualité.",
		materiel_necessaire: "Filtre ou gaze pour filtrer l'eau, récipient",
		etapes: [
			"1. Repérez des marécages, des zones boueuses ou des marais, qui sont souvent proches de sources d'eau.",
			"2. Cherchez des flaques d'eau ou des trous d'eau dans le sol.",
			"3. Si l'eau est trouble, filtrez-la pour éliminer les impuretés.",
			"4. Vous pouvez utiliser un tissu, un filtre à café ou du sable pour filtrer l'eau.",
			"5. Si possible, faites bouillir l'eau avant de la consommer pour éliminer les risques microbiens.",
		],
		duree: "30 minutes à 1 heure pour localiser une zone humide",
		image: "https://example.com/water_in_wetland.jpg",
	},
];

app.get("/api/survivalGuide", (req, res) => {
	res.json({ results: survivalGuide });
});

const port = 3310;

app.listen(port, () => {
	console.info(`Example app listening on port ${port}`);
});

