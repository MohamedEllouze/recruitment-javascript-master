//Only animals containing the pattern passed as argument (e.g. `ry`) are displayed
//Empty array after filtering are NOT returned.
function filter(data, args) {
  var tabWithEmptyArray = data.map((item) => {
    return {
      ...item,
      people: item.people.map((subitem) => {
        return {
          ...subitem,
          animals: subitem.animals.filter((subsubitem) =>
            subsubitem.name.includes(args)
          ),
        };
      }),
    };
  });
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
