import { rotateMatrix } from './index';

expect.extend({
  equalToArray (arr1, arr2) {
    // That is simple way to compare arrays.
    // Another is iteration (don't want to do that ;))
    const pass = JSON.stringify(arr1) === JSON.stringify(arr2);

    return {
      message: () => pass ? 'Arrays are equal' : 'Arrays are not equal',
      pass,
    };
  },
});

describe('rotateMatrix::', () => {
  const arr1 = [
    [1, 2],
    [3, 4],
  ];
  const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const res1 = [
    [1, 3],
    [2, 4],
  ];
  const res2 = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];

  test('Should correct rotate matrix', () => {
    expect(rotateMatrix(arr1)).equalToArray(res1);
    expect(rotateMatrix(arr2)).equalToArray(res2);
  });
});
