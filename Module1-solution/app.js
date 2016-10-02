(function(){    // IIFE An Immediately invoked function expression.
            // We want to make sure that no local variable bleed into the global scope.
 'use strict';

    angular.module('MyFirstApp', [])  // Takes dependencies as an array []
     .controller('LunchCheckController', LunchCheckController);
      //  $scope.name = "Nehal";

       LunchCheckController.$inject = ['$scope'];

       function LunchCheckController($scope) {
         $scope.checkDiet = function(lunch) {
          if(lunch) {
            var lunch_menu = $scope.lunch.split(',');
            console.log(lunch_menu);

            if(lunch_menu.length <= 3){
              $scope.message = "Enjoy";
            }
            if(lunch_menu.length > 3) {
              $scope.message = "Too much!";
            }
            $scope.lunch = "";
          } else {
            $scope.message = "Please Enter the data first";
            $scope.lunch = "";
          }

         }
       };
})();
