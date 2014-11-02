angular.module('todoapp', ['firebase'])
  .controller('TodoCtrl', ['$scope', 'angularFire','$interval', TodoCtrl]);


function TodoCtrl($scope, angularFire, $interval) {
  
  var fireData = new Firebase('https://angular-project.firebaseio.com');
  
  angularFire(fireData, $scope,'todos');
  
  // Initialize List of Todos
  $scope.todos = [
  ];
 
// Function to add new todo  
$scope.addTodo = function () {
  var newTodo = {
    done: false,
    text: $scope.todoText,
    timestamp: moment()
    };
  
  $scope.todos.push(newTodo);
  
  $scope.todoText = '';
  };  
  
  // Function to remove a todo
  $scope.removeTodo = function(start) {
    $scope.todos.splice(start, 1);
  };
// function to move an item
  $scope.move = function(index, direction) {
    // Handle moving up
    if (direction === 'up'){
      if (index === 0){
        return;
      }
      index = index -1;
    }
    // Handle moving down
    if (direction === 'down') {
       if(index === $scope.todos.length -1){
      return;
    }
 
    }
    var todo = $scope.todos[index];
    $scope.todos.splice(index + 2, 0, todo);
    $scope.todos.splice(index, 1);
  };
  
 $scope.cleanupTasks = function() {
    var timediff = 0;
    var d1 = new Date();
    var d2;
    
    
    for (var i = 0; i < $scope.todos.length; i++) {
       d2 = new Date($scope.todos[i].timestamp);
       timediff = d1 -d2;
       
      console.log(timediff);
      
       if (timediff > 10000){
         $scope.todos.splice(i, 1);
       } 
     }
   };
  function init() {
   $interval(function(){
     console.log('ping');
     $scope.cleanupTasks()
   }, 3000);   
  };  
init();
};
  






            
