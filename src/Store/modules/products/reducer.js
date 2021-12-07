const defaultState = [
  {
    id: 1,

    name: "Persistence of Memory",
    price: 144,
    image:
      "https://emptyeasel.com/wp-content/uploads/2019/03/the-persistence-of-memory-small.jpg",
  },
  {
    id: 2,

    name: "Temptation of Saint Anthony",
    price: 22,
    image:
      "https://emptyeasel.com/wp-content/uploads/2019/03/the-temptation-of-saint-anthony.jpg",
  },
  {
    id: 3,

    name: "Galatea of the Spheres",
    price: 31,
    image:
      "https://emptyeasel.com/wp-content/uploads/2019/03/galatea-of-the-spheres.jpg",
  },
  {
    id: 4,

    name: "Still Life - Fast moving",
    price: 123,
    image:
      "https://emptyeasel.com/wp-content/uploads/2019/03/still-life-fast-moving.jpg",
  },
  {
    id: 5,

    name: "Portrait of Paul Eluard",
    price: 96,
    image:
      "https://emptyeasel.com/wp-content/uploads/2019/03/portrait-of-paul-eluard.jpg",
  },
  {
    id: 6,

    name: "Elephants",
    price: 39,
    image:
      "https://www.castlefineart.com/assets/img/uploads/jmy-elephants-in-the-style-of-salvador-dali_2020-02-03T12-53-54.jpg",
  },
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
