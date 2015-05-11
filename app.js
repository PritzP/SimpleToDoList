var app = angular.module('treehouseCourse', []);


app.controller('stageTwoCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.todos = [];
  $scope.completed = [];
  
  $http.get("readme.json")
  .success(function(data){
    $scope.todos = data.todos
  })
  .error(function(textStatus){
    console.log("There was a problem retrieving our Todos")
  });

  $scope.addToDo = function(){
  	var json = { name: newtodo.value };
		$scope.todos.push(json);
		newtodo.value = '';
  }

  $scope.todoCompleted = function(index){
    var item = $scope.todos.splice(index,1);
    $scope.completed.push(item);
  }

  $scope.removeToDo = function(index){
    $scope.todos.splice(index,1);
  }

}]);

app.directive('todoContent', function(){
  return {
  	link: function($scope, $element, $attr){
  	
  	}
  }
})