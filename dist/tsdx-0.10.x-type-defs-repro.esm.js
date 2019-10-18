

var sum = function sum(a, b) {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }

  return a + b;
};

var log = function log(str) {
  return console.log(str);
};

var doCoolThings = function doCoolThings(input) {
  var returnObj = {
    id: input.id ? input.id : Math.floor(Math.random() * 1000 * 10),
    message: {
      code: Math.floor(Math.random() * 100),
      text: input.message
    },
    name: input.message
  };
  return returnObj;
};

export { doCoolThings, log, sum };
//# sourceMappingURL=tsdx-0.10.x-type-defs-repro.esm.js.map
