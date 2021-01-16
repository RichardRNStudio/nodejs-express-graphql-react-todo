const TODOITEMS = require("../default/db.json");

const getItem = (args) => {
  const { id } = args;
  return TODOITEMS.filter((item) => {
    return item.id == id;
  })[0];
};

const getAllItems = () => {
  return TODOITEMS;
};

const updateItem = ({ id, description }) => {
  const newTODOITEMS = TODOITEMS.map((item) => {
    if (item.id === id) {
      item.description = description;
    }
    return item;
  });
  return newTODOITEMS.filter(({ id: toDoId }) => toDoId === id)[0];
};

const newItem = ({ input: { description } }) => {
  const numOfToDoItems = TODOITEMS.length;
  const newItem = { id: numOfToDoItems + 1, description };
  TODOITEMS.push(newItem);
  return newItem;
};

const resolvers = {
  item: getItem,
  items: getAllItems,
  updateItem,
  newItem,
};

module.exports = resolvers;
