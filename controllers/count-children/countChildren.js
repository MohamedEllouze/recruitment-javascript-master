//this function is to count People and Animals by counting the number of children
//return the old array and add the number to the name
function count(data) {
  var tab = data.map((item) => {
    return {
      ...item,
      name: item.name + " [" + item.people.length + "]",
      people: item.people.map((subitem) => {
        return {
          ...subitem,
          name: subitem.name + " [" + subitem.animals.length + "]",
        };
      }),
    };
  });
  return tab;
}

module.exports = count;
