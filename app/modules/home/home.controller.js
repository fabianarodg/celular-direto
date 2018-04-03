app.controller('HomeCtrl', HomeCtrl);
function HomeCtrl(plataformas) {
  var vm = this;
  vm.title = "Celular Direto";
  vm.items = plataformas;
}