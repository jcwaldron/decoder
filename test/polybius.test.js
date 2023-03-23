// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests from student", () => {

  // ENCODING A MESSAGE
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "Hooooo boy this sure is something";
      const actual = polybius(message);
      const expected = "324343434343 214345 44324234 34542451 4234 344323514432423322";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "Hooooo boy this sure is something";
      const actual = polybius(message);
      const expected = "324343434343 214345 44324234 34542451 4234 344323514432423322";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "Hooooo boy this sure is something";
      const actual = polybius(message);
      const expected = "324343434343 214345 44324234 34542451 4234 344323514432423322";

      expect(actual).to.equal(expected);
    });

  // DECODING A MESSAGE
    it("should decode a message by translating each pair of numbers into a letter", ()=>{
      const message = "324343434343 214345 44324234 34542451 4234 344323514432423322";
      const actual = polybius(message, false);
      const expected = "hooooo boy th(i/j)s sure (i/j)s someth(i/j)ng";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", ()=>{
      const message = "324343434343 214345 44324234 34542451 4234 344323514432423322";
      const actual = polybius(message, false);
      const expected = "hooooo boy th(i/j)s sure (i/j)s someth(i/j)ng";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as-is", ()=>{
    const message = "324343434343 214345 44324234 34542451 4234 344323514432423322";
    const actual = polybius(message, false);
    const expected = "hooooo boy th(i/j)s sure (i/j)s someth(i/j)ng";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", ()=>{
      const message = "21513243134";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });

    /*
  it("", ()=>{

    expect(actual).to.equal(expected);
  });
  */