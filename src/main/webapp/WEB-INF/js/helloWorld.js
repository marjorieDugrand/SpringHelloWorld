var helloWorldModule = angular.module("helloWorld",[]);

var countID = 1;

var User = function (username,password,emailAddress,firstName,lastName) {
	this.id = countID ++;
	this.username = username;
	this.password = password;
	this.emailAddress = emailAddress;
	this.firstName = firstName;
	this.lastName = lastName;
};

var users = [
             new User("Bill", "123", "bill@gmail.com", "Bill","Smith"),
             new User("Segolene", "321", "segolene@gmail.com", "Segolene", "Morris")
];

var userEdition = false;
var isUserNew = true;
var editingUser = null;


var UserService = function ($http, users) {
	this.$http = $http;
	this.users = users;
};
UserService.prototype.loadUsers = function () {
//	return $http.get("/");
	return this.users;
};

UserService.prototype.addUser = function () {
	userEdition = true;
	isUserNew = true;
	editingUser = new User("","","","","");
};

UserService.prototype.accessUser = function (user) {
	userEdition = true;
	isUserNew = false;
	editingUser = user;
};

UserService.prototype.loadUser = function() {
	return editingUser;
};


UserService.prototype.showUserEdition = function() {
	return userEdition;
};

UserService.prototype.isNewUser = function() {
	return isUserNew;
};

UserService.prototype.saveUser = function() {
	console.log(editingUser.username);
	console.log(editingUser.emailAddress);
	if(UserService.prototype.isNewUser()) {
		users.push(editingUser);
	}
	userEdition = false;
};

UserService.prototype.deleteUser = function() {
	var index = users.indexOf(editingUser);
	users = users.slice(index, 1);
}


helloWorldModule.service("UserService", ["$http", function($http) { return new UserService($http, users); }]);

helloWorldModule.controller("UserController", ["$scope", "UserService", function ($scope, UserService) {
//	var get = UserService.loadUsers();
//	get.success(function(users) {
//		$scope.users = users;
//	});
	$scope.users = UserService.loadUsers();
	$scope.addUser = UserService.addUser;
	$scope.accessUser = UserService.accessUser;
	$scope.showUserEdition = UserService.showUserEdition;
	$scope.isNewUser = UserService.isNewUser;
	$scope.editingUser = UserService.loadUser();
	$scope.saveUser = UserService.saveUser;
	$scope.deleteUser = UserService.deleteUser;
}]);

