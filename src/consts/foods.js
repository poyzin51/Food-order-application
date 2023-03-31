import categories from "./categories"
const foods = [
  {
    id: '1',
    name: 'Meat Pizza',
    ingredients: 'Mixed Pizza',
    price: '8.30',
    image: require('../assets/meatPizza.png'),
    categorie: 'pizza'
  },
  {
    id: '2',
    name: 'Cheese Pizza',
    ingredients: 'Cheese Pizza',
    price: '7.10',
    image: require('../assets/cheesePizza.png'),
    categorie: 'pizza'
  },
   {
    id: '3',
    name: 'Pepperoni Pizza',
    ingredients: 'pepperoni cheese',
    price: '8.59',
    image: require('../assets/pepperonipizza.jpg'),
    categorie: 'pizza'
  },
  {
    id: '4',
    name: 'Chicken Burger',
    ingredients: 'Fried Chicken',
    price: '5.10',
    image: require('../assets/chickenBurger.png'),
    categorie: 'burger'
  },
  {
    id: '5',
    name: 'classic Burger',
    ingredients: 'beef ',
    price: '4.99',
    image: require('../assets/classicburger.jpg'),
    categorie: 'burger'
  },
 
  {
    id: '6',
    name: 'DoubleCheese Burger',
    ingredients: 'beef meat',
    price: '8.99',
    image: require('../assets/doublecheeseburger.png'),
    categorie: 'burger',
    quantity:'2'
  },
   {
    id: '7',
    name: 'Sushi Makizushi',
    ingredients: 'Salmon Meat',
    price: '9.55',
    image: require('../assets/sushiMakizushi.png'),
    categorie: 'sushi'
  },
  {
    id: '8',
    name: 'nigiri plate',
    ingredients: 'nigiri',
    price: '9.55',
    image: require('../assets/nigiriplate.jpg'),
    categorie: 'sushi'
  },
];

export default foods;
