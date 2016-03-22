
class HomeCtrl {

    static $inject = ['$scope'];

    constructor(public $scope) {
        console.log('Init home');
    }

}

export = HomeCtrl;
