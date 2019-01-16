
const slugModule= require("./index");
const logger =require("@ajar/marker") ;


test('test slug test', () => {
    const result= slugModule.slug("i am a slugged string i contain no spaces");
    const expected= "i-am-a-slugged-string-i-contain-no-spaces";
    expect(result).toBe(expected);
  });