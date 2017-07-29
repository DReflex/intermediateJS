
function addTogether() {

 function check (num) {
 if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  }
   if (arguments.length > 1) {
    var a = check(arguments[0]);
    var b = check(arguments[1]);

    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
     var c = arguments[0];

    if (check(c)) {

      return function(arg2) {

        if (c === undefined || check(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
   };

  }
 }
}

addTogether(2)(3);
