import { expect, test } from '@jest/globals';
import Validator from '../Validator';

test.each([
  { number: '8 (927) 000-00-00', expected: '+79270000000' },
  { number: '+7 960 000 00 00', expected: '+79600000000' },
  { number: '+86 000 000 0000', expected: '+860000000000' },
])('should convert the number to the form +7xxxxxxxxxx', ({ number, expected }) => {
  const result = Validator.validateTelephoneNumber(number);
  expect(result).toBe(expected);
});
