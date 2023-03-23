// Write your tests here!

const { caesar } = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar tests from student", () => {

// ERROR HANDLING

    it("should return false if the shift amount is 0", () => {
      const message = "Oh boy this project is wild!";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "Oh boy this project is wild!";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "Oh boy this project is wild!";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

// ENCODING A MESSAGE

    it("should encode a message by shifting the letters", ()=>{
        const message = "Oh boy this project is wild!";
        const shift = 4;
        const actual = caesar(message, shift);
        const expected = "sl fsc xlmw tvsnigx mw amph!";

        expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is", ()=>{
        const message = "Oh boy this project is wild!";
        const shift = 4;
        const actual = caesar(message, shift);
        const expected = "sl fsc xlmw tvsnigx mw amph!"

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", ()=>{
        const message = "To";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "up"
        expect(actual).to.equal(expected);
      });

    it("should appropriately handle letters at the end of the alphabet", ()=>{
        const message = "xylophone";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "cdqtumtsj";
    expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", ()=>{
        const message = "To";
        const shift = -1;
        const actual = caesar(message, shift);
        const expected = "sn"
        expect(actual).to.equal(expected);
      }); 

  // DECODING A MESSAGE

    it("should decode a message by shifting the letters in the opposite direction", ()=>{
        const message = "sl fsc xlmw tvsnigx mw amph!";
        const shift = 4;
        const encode = false;
        const actual = caesar(message, shift, encode);
        const expected = "oh boy this project is wild!";
        expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is", ()=>{
        const message = "sl fsc xlmw tvsnigx mw amph!";
        const shift = 4;
        const encode = false;
        const actual = caesar(message, shift, encode);
        const expected = "oh boy this project is wild!";
        expect(actual).to.equal(expected);
      });

    it("should ignore capital letters", ()=>{
        const message = "sl fsc xlmw tvsnigx mw amph!";
        const shift = 4;
        const encode = false;
        const actual = caesar(message, shift, encode);
        const expected = "oh boy this project is wild!";
    expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", ()=>{
        const message = "yr lyi drsc zbytomd sc gsvn!";
        const shift = 10;
        const encode = false;
        const actual = caesar(message, shift, encode);
        const expected = "oh boy this project is wild!";
        expect(actual).to.equal(expected);
      });

    it("should allow for a negative shift that will shift to the left", ()=>{
        const message = "sn";
        const shift = -1;
        const encode = false;
        const actual = caesar(message, shift, encode);
        const expected = "to"
    expect(actual).to.equal(expected);
    });
      
 });
