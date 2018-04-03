// Declare app level module which depends on views, and components
var app = angular.module('celularDireto', [
  'ui.router',
  'ngAnimate',
  'ngMaterial',
  'ngMessages'
])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'app/partials/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'Home',
        resolve: {
          plataformas: function (HomeService) {
            return HomeService.getList();
          }
        }
      })
      .state('produtos',{
        url: '/produtos/{id}/{produto}',
        templateUrl: 'app/partials/produtos.html',
        controller: 'ProdutosCtrl',
        controllerAs: 'Produtos',
        resolve: {
          produtos: function($http, $stateParams) {
            return $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/' + $stateParams.id)
              .then(function(data) { 
                var p = {
                  planos: data.data.planos,
                  nome: $stateParams.produto
                }
                console.log(p);
                return p; 
              });
          }
        }
      })
      .state('checkout',{
        url: '/checkout',
        templateUrl: 'app/partials/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'Checkout'
      });

  });

