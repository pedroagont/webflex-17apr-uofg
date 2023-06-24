/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function (array) {
  // IMPLEMENT ME
  let obj1 = {};
  for (const [k, v] of array) {
    if (Array.isArray(v)) {
      obj1[k] = deepArrayToObject(v);
    } else {
      obj1[k] = v;
    }
  }
  return obj1;
};

console.log(
  deepArrayToObject([
    ['a', 1],
    ['b', 2],
    ['c', [['d', 4]]],
  ])
); // { a: 1, b: 2, c: { d: 4 } }
console.log(
  deepArrayToObject([
    ['a', 1],
    ['b', 2],
    [
      'c',
      [
        [
          'd',
          [
            ['e', 5],
            ['f', 6],
          ],
        ],
      ],
    ],
  ])
); // { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }
