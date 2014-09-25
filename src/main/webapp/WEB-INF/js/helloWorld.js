var helloWorldModule = angular.module("helloWorld",[]);

var countID = 1;

var User = function (username,password,emailAddress,firstName,lastName) {
	this.id = countID ++;
	this.username = username || '';
	this.password = password || '';
	this.emailAddress = emailAddress || '';
	this.firstName = firstName || '';
	this.lastName = lastName || '';
};

var users = [
             new User("Bill", "123", "bill@gmail.com", "Bill","Smith"),
             new User("Segolene", "321", "segolene@gmail.com", "Segolene", "Morris")
];

var UserService = function ($http, users) {
	this.$http = $http;
	this.users = users;
};

UserService.prototype.loadUsers = function () {
//	return $http.get("/");
	return this.users;
};

helloWorldModule.service("UserService", ["$http", function($http) { return new UserService($http, users); }]);

helloWorldModule.controller("UserController", ["$scope", "UserService", function ($scope, UserService) {

	$scope.weAreEditing = false;
	$scope.creatingNewUser = false;
	
	$scope.users = UserService.loadUsers();
	
	$scope.addUser = function() {
		$scope.weAreEditing = true;
		$scope.creatingNewUser = true;
		$scope.editingUser = new User();
	};
	
	$scope.accessUser = function (user) {
		$scope.editingUser = user;
		$scope.weAreEditing = true;
		$scope.creatingNewUser = false;
	};
	$scope.showUserEdition = function() {
		return $scope.weAreEditing;
	};
	$scope.showNewUserCreation = function() {
		return $scope.creatingNewUser;
	};
	

	$scope.editingUser = new User();
	$scope.saveUser = function() {
		if($scope.showNewUserCreation()) {
			UserService.users.push($scope.editingUser);
		}
		$scope.weAreEditing = false;
	};
	
	$scope.deleteUser = function() {
		var index = $scope.users.indexOf($scope.editingUser);
		$scope.users.splice(index, 1);
		$scope.weAreEditing = false;
	}
	;
}]);

