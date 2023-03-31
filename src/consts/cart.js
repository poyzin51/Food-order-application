import categories from "./categories"
const foods = [
  {
    id: '1',
    name: 'Meat Pizza',
    ingredients: 'Mixed Pizza',
    price: '8.30',
    image: require('../assets/meatPizza.png'),
    categorie: 'pizza',
    quantity:'1'

  },
  {
    id: '2',
    name: 'Cheese Pizza',
    ingredients: 'Cheese Pizza',
    price: '7.10',
    image: require('../assets/cheesePizza.png'),
    categorie: 'pizza',
    quantity:'1'

  },
  {
    id: '3',
    name: 'Chicken Burger',
    ingredients: 'Fried Chicken',
    price: '5.10',
    image: require('../assets/chickenBurger.png'),
    categorie: 'burger',
    quantity:'2'
  },
  
];

export default foods;
