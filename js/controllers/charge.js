var app = angular.module('chargeApp', []);

app.controller('chargeController', function($scope, $http) {

    console.log("Charge_Page...");
    $scope.autoPay_method = function() {
    	
        console.log($scope.autopay.selected);
    	console.log($scope.logininfo);
        $scope.response = {}

        var posting = $http({
            method: 'POST',
            url: 'http://192.168.1.108:3000/users/',
            data: $scope.logininfo,
            processData: false
        })
        posting.success(function (response) {

            console.log(response);
            $scope.response.data = response;
        });



    };

    $scope.getBalanceInfo = function() {
        $dialog.dialog({}).open('modalContent.html');  
        
        $scope.logininfo={};
        $scope.response = {};
        $scope.logininfo.u_id="vv";
        console.log($scope.logininfo);

        var posting = $http({
            method: 'POST',
            url: 'http://192.168.1.108:8080/requestbalanceinfo/',
            data: $scope.logininfo,
            processData: false
        })
        posting.success(function (response) {

            console.log(response);
            $scope.response.data = response;
        });
    };

});

var dvSecond = document.getElementById('chargeApp');

angular.element(document).ready(function() {
    angular.bootstrap(dvSecond, ['chargeApp']);
});