angular.module("todoListApp", [])

.controller("mainCtrl",function($scope, dataService){
  $scope.addTodo = function() {
    var todo = {
      name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };
  
  $scope.helloWord = dataService.helloWorld;
  
dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });
  
  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };
  
  $scope.saveTodo = function(todo){
    dataService.saveTodo(todo);
  };
}) 
.service('dataService', function($http){
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };
  
  this.deleteTodo = function(todo){
    console.log("The " + todo.name + " todo has been deleted!");
    //other logic
  };
  
  this.saveTodo = function(todo){
  console.log("The " + todo.name + " todo has been saved!");
    //other logic..
  };
  
});