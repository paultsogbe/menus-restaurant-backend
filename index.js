const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    restaurant: {
      path: "Le Pain Quotidien",
      name: "Le Pain Quotidien - Montorgueil",
      categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie", "plats de resistance"],
      price: "€€",
      phone: "+33144780895",
      percentage: 87,
      ratings: "50+",
      address: "8 Rue de Bretagne, 75003 Paris",
      delay: "10 - 20 Mins (Au plus tôt)",
      description:
        "Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.",
      picture: "https://f.roocdn.com/images/menus/17697/header-image.jpg",
      client_address: {
        coordinates: [2.36051359999999, 48.8737157],
        locality: "Paris",
        country: "FR",
        formatted_address: "25 Passage Dubail, 75010 Paris, France",
        post_code: "75010",
        route: "Passage Dubail",
        street_number: "25",
        city: "Paris"
      }
    },
    categories: [
      {
        name: "Brunchs",
        meals: [
            {
                id: "1519055545-80",
                title: "Salade de pâques en famille",
                description: "SALADE DE LÉGUMES FLEURS, VINAIGRETTE ÉMULSIONNÉE À LA MOUTARDE ET À L’ESTRAGON, OIGNONS MARINÉS ET QUINOA SOUFFLÉ",
                price: '47,05',
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A3601bab6ca2a-1a95-484d-af78-af745ee482d3_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                popular: true,
    
              },
            {
                id: "1519055545-81",
                title: "tourte",
                description: "TOURTE À LA FRICASSÉE DE JAMBON TOUPIE, CHAMPIGNONS ET POIREAU, BÉCHAMEL ET PERSIL",
                price: '15,07',
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A3607_22bc699fc-92c2-419e-bda4-ea9227ad1ebd_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                popular: true,
    
              },
            {
                id: "1519055545-82",
                title: "oeuf",
                description: "OEUF MIROIR ORNÉ DE CHAIR À SAUCISSE ET SERVI SUR UN PAIN DORÉ CROUSTILLANT MOJÖ D’HERBES",
                price: '12',
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A358793a8c26e-2b94-47db-bd09-9bdb98bee9d0_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                popular: true,
    
              },
            {
                id: "1519055545-83",
                title: "endives braisées",
                description: "ENDIVES BRAISÉES AU JUS DE POMME ET À L’ÉRABLE, NOIX CARAMÉLISÉES ET ÉPICÉES",
                price: '50',
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A3652b91b1c97-4481-4169-bcb8-6b172ee2c330_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                popular: true,
    
              },
              {
                id: "1519055545-84",
                title: "Gaspacho vert",
                description: "Gaspacho vert et chips de magret fumé",
                price: '9,00',
                picture: "https://img-3.journaldesfemmes.fr/Mut9f9pdznIi5oXgTZIUjKofLts=/750x500/04523aea501d43fc9b5e68dea1ed71d5/ccmcms-jdf/39682802.jpg",
                popular: true,
    
              },
              {
                id: "1519055545-85",
                title: "Planche-repas",
                description: "Mélange de fruits, viandes et croissants",
                price: '45,17',
                picture: "https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/EasterSTILL.jpg",
                popular: true,
    
              },
              {
                id: "1519055545-86",
                title: "Brunch Gourmand",
                description: "Un moment gourmand à partagé",
                price: '29,00',
                picture: "https://www.federationdesdiabetiques.org/public/styles/article/public/content/1/img/istock-83793993-large.jpg?itok=ZOkgdfhI",
                popular: true,
    
              },
              {
                id: "1519055545-87",
                title: "Salade de champignons",
                description: "Assiette de salades, champinons, du pain et avocat",
                price: '17',
                picture: "https://parisatoutprix.fr/wp-content/uploads/2023/01/dessertissime_brunch_plat.jpg",
                popular: true,
    
              },
          {
            id: "1519055545-88",
            title: "Brunch authentic 1 personne",
            description:
              "Assiette de jambon cuit, jambon fumeì, terrine, comté bio & camembert bio, salade jeunes pousses, oeuf poché bio, pain bio & confiture, 1 viennoiserie bio au choix, granola parfait bio, jus de fruits 33cl au choix",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
            popular: true
          },

          

          {
            id: "1519055545-89",
            title: "Brunch vegan",
            description:
              "Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches, houmous de carotte et légumes de saison, soupe du jour bio, pain bio & confiture, crunola parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg"
          }
        ]
      },
      {
        name: "Petit déjeuner",
        meals: [
          {
            id: "1519055545-90",
            title: "Petit-déjeuner 1 personne",
            description:
              "Assortiment de pains bio, beurre & confitures bio + 1 viennoiserie bio au choix + 1 boisson fraîche au choix",
            price: "10.40"
          },

          {},
          {
            id: "1519055545-91",
            title: "Fromage blanc bio au miel",
            description: "",
            price: "10.40"
          },

          {},
          {
            id: "1519055545-92",
            title: "Granola parfait bio",
            description: "Yaourt, granola, et fruits frais de saison",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323271/item-image.jpg",
            popular: true
          },

          {},

          {
            id: "1519055545-93",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Crunola parfait bio (100% végétalien)",
            description:
              "100% végétalien - granola cru, banane, lait de coco et beurre de noix de cajou",
            price: "6.60"
          },

          {},
          {
            id: "1519055545-137",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Salade de fruits bio de saison",
            description: "Pomme, ananas, kiwi, orange, grenade, myrtilles",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/2549378/item-image.jpg"
          },


          {},
          {
            id: "1519055545-95",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Omelette au four de saison",
            description:
              "Courge butternut, chèvre & thym, avec une salade de jeunes pousses",
            price: "6.60"
          },

          {},
          {
            id: "1519055545-96",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chia bowl",
            description:
              "Graines de chia bio, myrtilles, grenades, crunola bio",
            price: "6.60",
            popular: true
          },
          {},
          {
            id: "1519055545-97",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Bircher Muesli",
            description:
              "Muesli maison bio, boisson à l’amande bio, fruits de saison et super graines bio (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250391/item-image.jpg"
          },

        ]
      },
      {
        name: "Viennoiseries et pains",
        meals: [

        
          {
            id: "1519055545-98",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Croissant bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323282/item-image.jpg"
          },

          {},
          {
            id: "1519055545-99",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au chocolat bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323287/item-image.jpg",
            popular: true
          },
          {},
          {
            id: "1519055545-100",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au raisins bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/3637782/item-image.jpg"
          },

          {},


          {
            id: "1519055545-101",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Baguette à l'ancienne bio",
            description: "300g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"
          },
          {
            id: "1519055545-102",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Grande brioche",
            description: "",
            price: "6.60"
          },

          {},
          {
            id: "1519055545-103",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin bio myrtilles (100% végétalien)",
            description: "Vegan",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2020235/item-image.jpg",
            popular: true
          },
          {
            id: "1519055545-104",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin bio pomme cannelle",
            description: "",
            price: "6.60"
          },

          {},
          {
            id: "1519055545-105",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin banane chocolat bio",
            description: "",
            price: "6.60"
          },

          {},
          {
            id: "1519055545-106",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain multi-céréales sans gluten",
            description: "350g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323275/item-image.jpg"
          },

          {},
          {
            id: "1519055545-107",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain multi-céréales raisins bio",
            description: "700g",
            price: "6.60"
          },
          {},
          {
            id: "1519055545-108",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Flûte raisins et noisettes bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549462/item-image.jpg"
          },
          {
            id: "1519055545-109",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Baguette Graines de Potiron & Tournesol",
            description: "300g",
            price: "6.60"
          }
        ]
      },
      {
        name: "Salades",
        meals: [
          {
            id: "1519055545-110",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "César BLT",
            description:
              "Poulet, parmesan, avocat, croûtons, bacon, chips de légumes, jeunes pousses, kale et tomates cerises",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2018213/item-image.jpg",
            popular: true
          },
          {
            id: "1519055545-111",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Buddha bowl",
            description:
              "Saumon fumé, avocat, super graines bio, lentilles au parika, chou rouge, concombre, jeunes pousses",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323292/item-image.jpg"
          },
          {
            id: "1519055545-112",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Veggie Bowl",
            description:
              "Sarrasin bio, quinoa bio, houmous de carottes, lentilles au paprika, courge butternut, grenade, avocat, caviar d'algues, chips de légumes bio",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549941/item-image.jpg"
          },
          {
            id: "1519055545-113",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Falafel Bowl",
            description:
              "Quinoa bio, houmous bio, carottes, chou rouge, pousses d’épinard, sauce tahini et pain de saison (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250423/item-image.jpg",
            popular: true
          },
          {
            id: "1519055545-114",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Bol lentilles ou quinoa (100% végétalien)",
            description: "",
            price: "3.90"
          },
          {
            id: "1519055545-125",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Quiche Lorraine",
            description: "Servie avec une salade de jeunes pousses bio",
            price: "6.90"
          },
          {
            id: "1519055545-116",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Mini salade lentilles (100% végétarien)",
            description: "Lentilles au paprika, carottes bio et oeuf poché bio",
            price: "3.90"
          }
        ]
      },

      {

        name: "Tartines froides",
        meals: [
          {
            id: "1519055545-117",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Toast avocat bio (100% végétalien)",
            description: "Purée d'avocat bio et gomasio bio",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/1323299/item-image.jpg"
          },

          {},
          {
            id: "1519055545-118",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine poulet fumé & avocat",
            description: "Concombre bio et cébettes",
            price: "6.90"
          },
          {},
          {
            id: "1519055545-119",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Jambon fumé & mozzarella di bufala bio tomates séchées",
            description: "Mozzarella di bufala bio",
            price: "6.90",
            popular: true
          },
          {},
          {
            id: "1519055545-120",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine Jambon Blanc & Comté Bio",
            description: "",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/4607227/item-image.jpg"
          },
          {},
          {
            id: "1519055545-121",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine Houmous de Carotte & Féta",
            description:
              "Super graines bio, grenade, concombre et roquette (Végétarien)",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/5250426/item-image.jpg"
          }
        ]
      },


      {


        name: "Soupe & plats chauds",
        meals: [
          {
            id: "1519055545-122",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Le déjeuner du boulanger",
            description:
              "Demi-tartine du jour & soupe du jour aux légumes bio, servi avec du pain bio et une salade de jeunes pousses bio",
            price: "6.90"
          },
          {},
          {
            id: "1519055545-123",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Soupe du jour aux légumes bio (100% végétalien)",
            description: "",
            price: "6.90"
          },
          {},
          {
            id: "1519055545-126",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pot-au-feu de légumes bio, curry bio et poulet grillé",
            description: "",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/1493250/item-image.jpg"
          },

          {},
          {
            id: "1519055545-124",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title:
              "Pot-au-feu de légumes bio, quinoa bio & harissa bio (100% végétalien)",
            description: "",
            price: "6.90",
            popular: true
          },
          {},
          {
            id: "1519055545-127",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chili sin carne (vegan)",
            description:
              "3 haricots, purée avocat, spécialité au soja bio & cebettes",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/4607228/item-image.jpg"
          },
          {},
          {
            id: "1519055545-128",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Curry de Coco aux Légumes",
            description:
              "Servi avec sarrasin bio et chutney de cassis au gingembre (VEGAN)",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/5250429/item-image.jpg",
            popular: true
          }
        ]
    },

    {
        name: " plats de resistance",
        meals: [
          {
            id: "1519055545-129",
            "web-scraper-start-url":
              "",
            title: "",
            description:
              "",
            price: "6.90"
          },
          {},
          {
            id: "1519055545-130",
            "web-scraper-start-url":
              "https://www.cuisineaz.com/diaporamas/plats-de-bistrot-706/interne/1.aspx",
            title: "Blanquette de veau au vin blanc",
            description: "Blanquette de veau au vin blanc",
            price: "6.90"
            
            
          },
          
          {
            id: "1519055545-131",
            "web-scraper-start-url":
              "https://chefsimon.com/recettes/tag/plat%20principal",
            title: "Riz",
            description: " plat du riz avec légumes et viandes",
            price: "9.90",
            picture:
              "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/2426/plat_principal_flickr_2304576748_f79c906b85_b.jpg"
          },

          {},
          {
            id: "1519055545-132",
            "web-scraper-start-url":
              "",
            title:
              "",
            description: "",
            price: "6.90",
            picture: "",
            popular: true
          },
          {},
          {
            id: "1519055545-133",
            "web-scraper-start-url":
              "https://www.kayak.fr/news/plats-traditionnels-francais/",
            title: "Bourguignon",
            description:
              "",
            price: "15.90",
            picture:
              "https://www.kayak.fr/news/wp-content/uploads/sites/7/2022/02/theme_food_france-beef-bourguignon_getty_156391901_universal_within-usage-period_81984.jpg"
          },
          
          {
            id: "1519055545-134",
            "web-scraper-start-url":
              "https://www.kayak.fr/news/plats-traditionnels-francais/",
            title: "ratatouille-ragout",
            description:
              "",
            price: "12.90",
            picture:
              "https://www.kayak.fr/news/wp-content/uploads/sites/7/2022/02/theme_food_ratatouille-ragout_getty_1255691142_universal_within-usage-period_81981.jpg",
            popular: true
          }
        ]
      
      },



      { name: "Sandwichs baguette", meals: [] },
      { name: "Desserts", meals: [] },
      { name: "Boissons fraîches", meals: [] },
      { name: "Epicerie bio", meals: [] },
      { name: "Repas corporate", meals: [] },
      { name: "Couverts", meals: [] }
    ]
  });
});

// Heroku va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }


app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});