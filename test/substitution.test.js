// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests from student", () => {

// ERROR HANDLING
    
    it("should return false if the substitution alphabet is missing", ()=>{
        const message = "hello my baby";
        const actual = substitution(message);

        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", ()=>{
        const message = "hello my honey";
        const actual = substitution(message, "xyzkwl")

        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", ()=>{
        const message = "hello my ragtime gal";
        const actual = substitution(message, "abccefghijklmnopqrstuvwxyz");

        expect(actual).to.be.false;
    });

// ENCODING A MESSAGE

    it("should encode a message by using the given substitution alphabet", ()=>{
        const message = "send me a kiss by wire";
        const alphabet = "rgabyvplckfoxiqndwhemuzjst";
        const actual = substitution(message, alphabet);
        const expected = "hyib xy r fchh gs zcwy"

        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", ()=>{
        const message = "baby my heart's on fire";
        const alphabet = "rga%yvp!ckf@xiqndw^emuzjst";
        const actual = substitution(message, alphabet);
        const expected = "grgs xs !yrwe'^ qi vcwy"

        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", ()=>{
        const message = "if you refuse me";
        const alphabet = "rgabyvplckfoxiqndwhemuzjst";
        const actual = substitution(message, alphabet);
        const expected = "cv sqm wyvmhy xy"

        expect(actual).to.equal(expected);
    });

// DECODING A MESSAGE

    it("should decode a message by using the given substitution alphabet", ()=>{
        const message = "lqiys sqmoo oqhy xy";
        const alphabet = "rgabyvplckfoxiqndwhemuzjst";
        const actual = substitution(message, alphabet, false);
        const expected = "honey youll lose me"

        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", ()=>{
        const message = "e!yi sqm@@ gy @yve r@qiy";
        const alphabet = "rga%yvp!ckf@xiqndw^emuzjst";
        const actual = substitution(message, alphabet, false);
        const expected = "then youll be left alone"

        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", ()=>{
        const message = "ql grgs eyoynlqiy rib eyoo xy cx sqmw qzi";
        const alphabet = "rgabyvplckfoxiqndwhemuzjst";
        const actual = substitution(message, alphabet, false);
        const expected = "oh baby telephone and tell me im your own"

        expect(actual).to.equal(expected);
    });

});