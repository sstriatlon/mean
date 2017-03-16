angular.module('MainApp', [])

function mainController($scope, $http){
    $scope.newRocker={};
    $scope.rockers={};
    $scope.selected = false;

    $http.get('/api/rocker').success(function(data){
        $scope.rockers=data;
    })
    .error(function(data){
        console.log('Error: test' + data);
    });
    //DA DE ALTA
    $scope.registrarRocker = function(){
        $http.post('/api/rocker', $scope.newRocker)
        .success(function(data){
            $scope.newRocker={};
            $scope.rockers=data;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
    };
    //MODIFICA
    $scope.modificarRocker= function(newRocker) {
		$http.put('/api/rocker/' + $scope.newRocker._id, $scope.newRocker)
		.success(function(data) {
				$scope.newRocker= {};
				$scope.rockers= data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
    //DELETE
    $scope.borrarRocker = function(newRocker) {
        $http.delete('/api/rocker/' + $scope.newRocker._id)
        .success(function(data){
            $scope.newRocker={};
            $scope.rockers=data;
            $scope.selected=false;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
    };

    $scope.selectRocker=function(rocker){
        $scope.newRocker=rocker;
        $scope.selected=true;
        console.log($scope.newRocker,$scope.selected);
    }



}