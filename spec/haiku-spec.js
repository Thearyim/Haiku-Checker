import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {

  it('should test whether a Haiku has three lines', function() {
    var haiku = new Haiku("test","test","test");
    expect(haiku.line1).toEqual("test");
    expect(haiku.line2).toEqual("test");
    expect(haiku.line3).toEqual("test");
  });

});