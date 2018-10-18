angular.module('News', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]) 
.factory('postFactory', [function(){
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'postFactory',
function($scope, postFactory){
  $scope.test = 'Hello world!';

  $scope.posts = postFactory.posts;

  $scope.addPost = function(){
    if($scope.formContent === '') { return; }
    $scope.posts.push({
      title: $scope.formContent,
      priority: 0
    });
    $scope.formContent = '';
  };

  $scope.incrementpriority = function(post) {
    post.priority += 1;
  };
    $scope.deletePost = function(post) {
      var index = $scope.posts.indexOf(post);
      $scope.posts.splice(index, 1);   
  };
  

}])
