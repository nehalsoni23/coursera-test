(function(){    // IIFE An Immediately invoked function expression.
            // We want to make sure that no local variable bleed into the global scope.
 'use strict';
 var x = "hello";
    angular.module('MyFirstApp', [])  // Takes dependencies as an array []
     .controller('MyFirstController', function($scope){
       $scope.name = "Nehal";
       $scope.sayHello = function(){
         return "Hello Coursera";
       };
     });

     angular.module('NameCalculator', [])
     .controller('NameCalculatorController', function($scope){
      $scope.name="";
      $scope.totalValue=0;

      $scope.displayNumeric = function() {
        var totalNameValue = 
        calculateNumericForString($scope.name); // get the total value
        $scope.totalValue = totalNameValue;

      };

      function calculateNumericForString(string){
        var totalStringValue = 0;
        for(var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }

        return totalStringValue;
      }
     });
})();
