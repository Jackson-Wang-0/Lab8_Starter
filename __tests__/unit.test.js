// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber function tests
test('Valid phone number should return true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Valid phone number should return true', () => {
    expect(functions.isPhoneNumber('(626) 123-4567')).toBe(true);
});
  
test('Invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('10002#ds1231')).toBe(false);
});
  
  
// isEmail function tests
test('Valid email should return true', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
});

test('Valid email should return true', () => {
    expect(functions.isEmail('test@gmail.com')).toBe(true);
});
  
test('Invalid email should return false', () => {
    expect(functions.isEmail('test@example')).toBe(false);
});

test('Invalid email should return false', () => {
    expect(functions.isEmail('1231231231231@123123123')).toBe(false);
});
  
// isStrongPassword function tests
test('Valid strong password should return true', () => {
    expect(functions.isStrongPassword('Abc123_')).toBe(true);
});

test('Valid strong password should return true', () => {
    expect(functions.isStrongPassword('DD12312323')).toBe(true);
});
  
test('Invalid weak password should return false', () => {
    expect(functions.isStrongPassword('p')).toBe(false);
});

test('Invalid weak password should return false', () => {
    expect(functions.isStrongPassword('0')).toBe(false);
});
  
// isDate function tests
test('Valid date should return true', () => {
    expect(functions.isDate('12/31/2023')).toBe(true);
});

test('Valid date should return true', () => {
    expect(functions.isDate('10/12/2023')).toBe(true);
});
  
test('Invalid date should return false', () => {
    expect(functions.isDate('2022-12-31')).toBe(false);
});

test('Invalid date should return false', () => {
    expect(functions.isDate('20221231')).toBe(false);
});
  
// isHexColor function tests
test('Valid hex color should return true', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
});
  
test('Valid hex color should return true', () => {
    expect(functions.isHexColor('#00FF00')).toBe(true);
});

test('Invalid hex color should return false', () => {
    expect(functions.isHexColor('33333123ABC')).toBe(false);
});

test('Invalid hex color should return false', () => {
    expect(functions.isHexColor('GHIJKL')).toBe(false);
});