// Code goes here
var fb = [];

function fib(n)
{
  if (fb.length >= n && fb[n] != null)
    return fb[n];
    
  if (n < 2) {
    fb[n] = n;
    return n;
  }
  fb[n] = fib(n - 1) + fib(n - 2);
  return fb[n];
}

$(document).ready(function () {
      
      $("button").on("click", function () {
        try {
          var inValue = $("#number").val();
          if (!inValue) {
            $("p").text("Number is required");
          }
          var num = parseInt(inValue);
          if (num == undefined || num == null || isNaN(num))
          {
            $("p").text("Number is invalid");
          }
          var x = fib(num);
          $("p").text(x).append("  =>  (" + fb.length + ")");
        }
        catch(error) {
          $("p").text("Ooops: " + error.message);
        }
      });
});