app.controller('ProdutosCtrl', ProdutosCtrl);

function ProdutosCtrl(produtos, $state) {
  var vm = this;
  vm.title = produtos.nome;
  vm.items = produtos.planos;
  vm.escolher = function(produto) {
    $state.go("checkout", {produto: produto});
  };

}