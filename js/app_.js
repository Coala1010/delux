var app = angular.module('delux', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/download", {
        templateUrl : "download.html",
        controller : "downloadCtrl"
    })
    .when("/charge", {
        templateUrl : "charge.html",
        controller : "chargeCtrl"
    }).otherwise({
        redirectTo: "/"
    });
});

/*
app.controller('loginCtrl', [
    '$scope', '$modal', '$log', function ($scope, $modal, $log) {

        console.log("asdfasdf");
        $scope.items = ["item1", "item2", "item3"];

        $scope.showLoginModal = function () {
            var modalInstance;
            modalInstance = $modal.open({
                templateUrl: "modalContent.html",
                controller: 'ModalInstanceCtrl',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then((function (selectedItem) {
                $scope.selected = selectedItem;
            }), function () {
                $log.info("Modal dismissed at: " + new Date());
            });
        };
    }
]);*/
/*
app.controller('ModalInstanceCtrl', [
            '$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {
                $scope.items = items;
                $scope.selected = {
                    item: $scope.items[0]
                };
                $scope.ok = function () {
                    $modalInstance.close($scope.selected.item);
                };
                $scope.cancel = function () {
                    $modalInstance.dismiss("cancel");
                };
            }
        ]);

*/

app.controller("downloadCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("chargeCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});