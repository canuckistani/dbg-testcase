$(function() {

  var foo = "bar";

  var bar = function(x) {
    return function mul(y) {
      return x*y;
    };
  };

  var mulSix = bar(6);

  console.log(mulSix(2));

});