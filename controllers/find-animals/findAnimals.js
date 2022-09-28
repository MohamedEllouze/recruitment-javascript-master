//Only animals containing the pattern passed as argument (e.g. `ry`) are displayed
//Empty array after filtering are NOT returned.
function filter(data, args) {
  const tabWithEmptyArray = data.map((item) => {
    return {
      ...item,
      people: item.people.map((subItem) => {
        return {
          ...subItem,
          animals: subItem.animals.filter((subsubItem) =>
            subSubItem.name.includes(args)
          ),
        };
      }),
    };
  });
  //this fuction to return the result without empty arrays
  const result = tabWithEmptyArray.reduce((previousValue, currentValue) => {
    const data = [];
    if (currentValue.people.length > 0) {
      currentValue.people.forEach((e) => {
        if (e.animals.length > 0) data.push(e);
      });
    }
    if (data.length > 0)
      previousValue.push({ name: currentValue.name, people: data });
    return previousValue;
  }, []);
  return result;
}
module.exports = filter;
