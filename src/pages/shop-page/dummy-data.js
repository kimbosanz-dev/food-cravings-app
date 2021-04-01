const ShopDummyData = [
    {
        id: 1,
        title: 'Filipino',
        routeName: 'filipino',
        items: [
            {
                id: 1,
                name: 'Sinigang na Baboy',
                imageUrl: 'https://i.ibb.co/fCs6t6c/sinigangbaboysamiso-recipe.jpg',
                price: '250',
            },
            {
                id: 2,
                name: 'Sinigang na Salmon',
                imageUrl: 'https://i.ibb.co/n180FbJ/sinigang-na-salmon-640.jpg',
                price: '350',
            },
            {
                id: 3,
                name: 'Adobo na Baboy',
                imageUrl: 'https://i.ibb.co/cCC8Lff/Homemade-Filipino-Adobo-Pork-with-White-Rice.jpg',
                price: '200',
            },
            {
                id: 4,
                name: 'Pork Sisig',
                imageUrl: 'https://i.ibb.co/3C8z998/sisig-recipe.jpg',
                price: '300',
            },
        ],
    },
    {
        id: 2,
        title: 'American',
        routeName: 'american',
        items: [
            {
                id: 5,
                name: 'All-American Hotdog',
                imageUrl: 'https://i.ibb.co/vjjDxTs/hot-dog-combinations-with-crazy-toppings.jpg',
                price: '75',
            },
            {
                id: 6,
                name: 'Meatloaf',
                imageUrl: 'https://i.ibb.co/Zcpgmp5/MEATLOAF-2.jpg',
                price: '300',
            },
            {
                id: 7,
                name: 'Biscuits and Gravy',
                imageUrl: 'https://i.ibb.co/xqSjpJc/2347c25a-455e-4c91-aebf-8235d8f02f8b.jpg',
                price: '240',
            },
            {
                id: 8,
                name: 'Tacos',
                imageUrl: 'https://i.ibb.co/1RxSg4q/Spicy-Homemade-Beef-Barbacoa-Tacos-with-Cilantro-Cheese-and-Onion.jpg',
                price: '380',
            },
        ],
    },
    {
        id: 3,
        title: 'Burgers',
        routeName: 'burgers',
        items: [
            {
                id: 9,
                name: 'Double Cheese-Burger',
                imageUrl: 'https://i.ibb.co/FHKyc76/MOOYAH-Double-Cheeseburger.png',
                price: '135',
            },
            {
                id: 10,
                name: 'Quarter Pounder',
                imageUrl: 'https://i.ibb.co/KmTDtMb/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.jpg',
                price: '385',
            },
            {
                id: 11,
                name: 'Double Cheese Bacon Burger',
                imageUrl: 'https://i.ibb.co/WkcKxjV/7-78960-burger-transparent-bacon-sonic-bacon-cheeseburger.png',
                price: '275',
            },
            {
                id: 12,
                name: 'Double Chicken Burger',
                imageUrl: 'https://i.ibb.co/34s2ff7/74558-700.png',
                price: '285',
            },
        ],
    },
    {
        id: 4,
        title: 'Chicken',
        routeName: 'chicken',
        items: [
            {
                id: 13,
                name: 'Roasted Chicken',
                imageUrl: 'https://i.ibb.co/pxxF34z/rotisserie-chicken-3.jpg',
                price: '175',
            },
            {
                id: 14,
                name: 'Buttered Garlic Chicken',
                imageUrl: 'https://i.ibb.co/HXSRsFq/garlic-parmesan-wings-recipe-4-of-8.jpg',
                price: '180',
            },
            {
                id: 15,
                name: 'Honey Garlic Chicken',
                imageUrl: 'https://i.ibb.co/28MwZrT/Honey-Garlic-Chicken-Breast-5-SQ.jpg',
                price: '180',
            },
            {
                id: 16,
                name: 'Chicken Tikka Masala',
                imageUrl: 'https://i.ibb.co/kJM9xd2/shemins-chicken-tikka-masala-LR.jpg',
                price: '180',
            },
        ],
    },
    {
        id: 5,
        title: 'Seafood',
        routeName: 'seafood',
        items: [
            {
                id: 17,
                name: 'Seafood Paella',
                imageUrl: 'https://i.ibb.co/F4G3MdX/Head-to-Spain-with-Homemade-Paella-de-Marisco.jpg',
                price: '400',
            },
            {
                id: 18,
                name: 'Fried Tempura',
                imageUrl: 'https://i.ibb.co/qgM5cR8/va-Keot8-Z-b-AJk8-XAJDWXK9-W1f-HIs-Ut-SQN4wj-Tw5a-Zv-O9-Qc-HJa-Xg-Aw1a-T8l-NI-m-AR1ig8-WZe-Qpx-Pg-UD.jpg',
                price: '250',
            },
            {
                id: 19,
                name: 'Baked Salmon',
                imageUrl: 'https://i.ibb.co/6gdW3Zj/Garlic-Butter-Baked-Salmon-recipe-2.jpg',
                price: '250',
            },
            {
                id: 20,
                name: 'Baked Stuffed Lobsters',
                imageUrl: 'https://i.ibb.co/bmZcLjB/easy-baked-stuffed-lobster-recipe-1808994-hero-01-f8ec7396623d4d4eaf49d73a4bd9795c.jpg',
                price: '250',
            },
        ],
    },
    {
        id: 6,
        title: 'Bar',
        routeName: 'bar',
        items: [
            {
                id: 21,
                name: 'San Mig Light',
                imageUrl: 'https://i.ibb.co/DGnYbQR/slide0047-image071.jpg',
                price: '29',
            },
            {
                id: 22,
                name: 'San Miguel Pale Pilsen',
                imageUrl: 'https://i.ibb.co/SKwxCcJ/a192d2a7336ca747d298b40dfa9bef12.jpg',
                price: '35',
            },
            {
                id: 23,
                name: 'Red Horse',
                imageUrl: 'https://i.ibb.co/Bn35RwF/189-1893584-red-horse-wallpaper-red-horse-beer-background.jpg',
                price: '29',
            },
            {
                id: 24,
                name: 'Tiger Beer',
                imageUrl: 'https://i.ibb.co/S7NnXv4/tiger-beer.jpg',
                price: '35',
            },
        ],
    },
];

export default ShopDummyData;