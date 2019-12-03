import Ship from '../modules/Ship';

test('Length of the newly created ship', () => {
  const newShip = Ship(3);
  expect(newShip.length).toBe(3);
});

test('Newly created ship should not have any hit positions', () => {
  const newShip = Ship(3);
  expect(newShip.hitPositions).toEqual([0, 0, 0]);
});

test('A function that takes a number and then marks that position as hit', () => {
  const newShip = Ship(5);
  newShip.hit(2);
  expect(newShip.hitPositions).toEqual([0, 0, 'X', 0, 0]);
});

test('A ship with all positions hit should sink', () => {
  // Small Ship
  const smallShip = Ship(2);
  smallShip.hit(0);
  smallShip.hit(1);
  expect(smallShip.isSunk()).toBe(true);

  // Large Ship
  const largeShip = Ship(5);
  largeShip.hit(0);
  largeShip.hit(1);
  largeShip.hit(2);
  largeShip.hit(3);
  largeShip.hit(4);
  expect(largeShip.isSunk()).toBe(true);
});

test('A partially hit ship should not sink', () => {
  const newShip = Ship(4);
  newShip.hit(1);
  newShip.hit(3);
  expect(newShip.isSunk()).toBe(false);
});
