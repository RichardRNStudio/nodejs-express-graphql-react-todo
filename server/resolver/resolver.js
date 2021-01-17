let TODOITEMS = require("../default/db.json");

const getItem = (args) => {
  const { id } = args;
  return TODOITEMS.filter((item) => {
    return item.id == id;
  })[0];
};

const getAllItems = () => {
  return TODOITEMS;
};

const updateItem = ({ id, input: { category, description } }) => {
  const newTODOITEMS = TODOITEMS.map((item) => {
    if (item.id === id) {
      item.description = description;
      item.category = category;
    }
    return item;
  });
  return newTODOITEMS.filter(({ id: toDoId }) => toDoId === id)[0];
};

const addItem = ({ input: { category, description } }) => {
  const numOfToDoItems = TODOITEMS.length;
  const addItem = { id: numOfToDoItems + 1, category, description };
  TODOITEMS.push(addItem);
  return addItem;
};

const deleteItem = ({ id: deletedId }) => {
  const deletedItem = TODOITEMS.filter(({ id }) => {
    return id === deletedId;
  })[0];
  TODOITEMS = TODOITEMS.slice(
    TODOITEMS.findIndex(({ id }) => id === deletedId),
    1
  );
  return deletedItem;
};

const resolvers = {
  item: getItem,
  items: getAllItems,
  updateItem,
  addItem,
  deleteItem,
};

module.exports = resolvers;
