app.factory('ProdutosService', ProdutosService);
function ProdutosService($http, $stateParams) {
    function getList($stateParams) {
        console.log($stateParams.id);
      return $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/'+$stateParams.id)
        .then(function (response) {
            var ret = response.data;
            console.log(ret);
            return ret;
        });
        
    }
    return {
        getList: getList
    };
}