app.controller('CheckoutCtrl', CheckoutCtrl);
function CheckoutCtrl($stateParams) {
  var vm = this;
  vm.title = "Checkout";
  vm.paramDetails = $stateParams.produto; 

  vm.showData = function(user) {
      console.log(user);
  }
}