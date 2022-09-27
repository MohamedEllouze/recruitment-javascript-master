const { data } = require("../../data");

const filter = require("./findAnimals");
test("filter the array with animals name", () => {
  const array = [
    {
      name: "Uzuzozne",
      people: [
        {
          name: "Lillie Abbott",
          animals: [
            {
              name: "John Dory",
            },
          ],
        },
      ],
    },
    {
      name: "Satanwi",
      people: [
        {
          name: "Anthony Bruno",
          animals: [
            {
              name: "Oryx",
            },
          ],
        },
      ],
    },
  ];
  expect(filter(data, "ry")).toEqual(array);
});
