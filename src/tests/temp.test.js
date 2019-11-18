import Temp from '../modules/temp';

it('Tests temp', () => {
  const t = Temp();
  expect(t.render()).toBe('Log from temp file');
});

// Run Jest test to ensure that it's working
// If it's working I can be removed
