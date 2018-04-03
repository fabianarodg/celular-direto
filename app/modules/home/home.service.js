app.factory('HomeService', HomeService);
function HomeService($http) {
    function getList() {
      return $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas')
        .then(function (response) {
            var ret = response.data.plataformas;
            return ret;
        });
    }
    return {
        getList: getList
    };
}