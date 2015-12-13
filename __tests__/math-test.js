// Load the file that exports the functionality to test
jest.dontMock('../app/math');  // Don't create mock functions
var math = require('../app/math');



// Test to verify the math.sum() function
describe('sum', function() {
  it('defines a sum function', function() {
    expect(math.sum).toBeDefined();
  });

  it('adds 5 + 2 to equal 7', function() {
    expect(math.sum(2, 5)).toBe(7);
  });
});

// Test to verify the math.difference() function
describe('difference', function() {
  it('subtracts 5 - 2 to equal 3', function() {
    expect(math.difference(5, 2)).toBe(3);
  });
});

// Test to verify the math.product() function
describe('product', function() {
  it('mutiplies 2 * 5 to equal 10', function() {
    expect(math.product(2, 5)).toBe(10);
  });
});

// Test to verify the math.quotient() function
describe('quotient', function() {
  it('divides 10 / 2 to equal 5', function() {
    expect(math.quotient(10, 2)).toBe(5);
  });
});

// Test to verify the math.squear() function
describe('square', function() {
  it('multiplies 5 time 5 to equal 25', function() {
    expect(math.square(5, 5)).toBe(25);
  });
});

// Test to verify alphanumeric. 
describe('alphanumeric', function() {
  it("should accept an alphanumeric string and return true", function() {
    expect(math.verifyAlphaNumeric("hello")).toBe(true);
  });

  it("should accept a non-alphanumeric string and return false", function() {
    expect(math.verifyAlphaNumeric("hellooo$%")).toBe(false);
  });
});

// Test to verify checkWordCount. 
describe('checkWordCount', function() {
  it("should accept less than 100 words and return true", function() {
    expect(math.checkWordCount("hello")).toBe(true);
  });

  it("should accept more than 100 words and return false", function() {
    //Unbelievable!!! it did not like the string to be broken up in new lines, so it has to be a very long single line to pass the test. 
    expect(math.checkWordCount("hello how are you I am trying to type a lot of words in here!! Is this more than one hundred characters yet??????? possibly not. I am try ing to fill in more spa ce to pass this te st O M G . . . . . this is still less than 100 words . ? ? ? ? 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 34 35 36 37 38 39 40 41 42 43 44 45 YES!! finally more than 100!!!")).toBe(false);
  });
});

//Test to verify duplicate words
describe('duplicateCheck', function() {
  it("should accept a string with no duplicate words and return true", function() {
    expect(math.duplicateCheck("hello")).toBe(true);
  });

  it("should accept a string with duplicate words and return false", function() {
    expect(math.duplicateCheck("hello hello")).toBe(false);
  });

});



